// background.js — Avaamo Copilot Service Worker
// Handles: LLM routing, page context relay, chat history, DOM action relay

import { routeToLLM } from './llm/router.js';

// ── Track the most recently active Avaamo tab ──────────────────────────────
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url?.includes('avaamo.com')) {
    chrome.storage.local.set({ activeAvaamoTab: { tabId, url: tab.url } });
  }
});

chrome.tabs.onActivated.addListener(({ tabId }) => {
  chrome.tabs.get(tabId, (tab) => {
    if (tab?.url?.includes('avaamo.com')) {
      chrome.storage.local.set({ activeAvaamoTab: { tabId, url: tab.url } });
    }
  });
});

// ── Helper: relay a message to the active Avaamo content script ────────────
function relayToContent(msg, sendResponse) {
  chrome.storage.local.get('activeAvaamoTab', ({ activeAvaamoTab }) => {
    if (!activeAvaamoTab?.tabId) {
      sendResponse({ done: false, error: 'No active Avaamo tab found.' });
      return;
    }
    chrome.tabs.sendMessage(activeAvaamoTab.tabId, msg, (res) => {
      if (chrome.runtime.lastError) {
        sendResponse({ done: false, error: chrome.runtime.lastError.message });
      } else {
        sendResponse(res || { done: false });
      }
    });
  });
}

// ── Helper: extract JSON action plan from LLM response ─────────────────────
function extractActionPlan(text) {
  // Look for ```json ... ``` or a raw JSON array
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const raw    = text.match(/(\[\s*\{[\s\S]*?\}\s*\])/);
  const candidate = fenced?.[1] || raw?.[1];
  if (!candidate) return null;
  try {
    const parsed = JSON.parse(candidate.trim());
    if (Array.isArray(parsed) && parsed[0]?.type) return parsed;
  } catch (_) {}
  return null;
}

// ── Central message router ─────────────────────────────────────────────────
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  switch (msg.action) {

    // ── Standard LLM call ───────────────────────────────────────────────────
    case 'callLLM': {
      routeToLLM(msg.query, msg.context, msg.taskType)
        .then(response => sendResponse({ response }))
        .catch(err  => sendResponse({ response: `⚠️ LLM error: ${err.message}` }));
      return true;
    }

    // ── Relay getPageContext ─────────────────────────────────────────────────
    case 'getPageContext': {
      chrome.storage.local.get('activeAvaamoTab', ({ activeAvaamoTab }) => {
        if (!activeAvaamoTab?.tabId) {
          sendResponse({ error: 'No active Avaamo tab found. Navigate to an Avaamo page first.' });
          return;
        }
        chrome.tabs.sendMessage(
          activeAvaamoTab.tabId,
          { action: 'getPageContext' },
          (ctx) => {
            if (chrome.runtime.lastError) {
              sendResponse({ error: chrome.runtime.lastError.message });
            } else {
              sendResponse(ctx);
            }
          }
        );
      });
      return true;
    }

    // ── Toggle sidebar ───────────────────────────────────────────────────────
    case 'toggleSidebar': {
      chrome.storage.local.get('activeAvaamoTab', ({ activeAvaamoTab }) => {
        if (!activeAvaamoTab?.tabId) { sendResponse({ done: false }); return; }
        chrome.tabs.sendMessage(
          activeAvaamoTab.tabId,
          { action: 'toggleSidebar' },
          (res) => sendResponse(res || { done: false })
        );
      });
      return true;
    }

    // ── Get dialog data from Angular scope ────────────────────────────────────
    case 'getDialogData': {
      chrome.storage.local.get('activeAvaamoTab', ({ activeAvaamoTab }) => {
        if (!activeAvaamoTab?.tabId) { sendResponse({ error: 'No active Avaamo tab.' }); return; }
        chrome.tabs.sendMessage(
          activeAvaamoTab.tabId,
          { action: 'getDialogData' },
          (res) => sendResponse(res || { error: 'No response from content script.' })
        );
      });
      return true;
    }

    // ── Execute action plan ──────────────────────────────────────────────────
    case 'executeActions': {
      relayToContent({ action: 'executeActions', steps: msg.steps }, sendResponse);
      return true;
    }

    // ── Get cached API responses ─────────────────────────────────────────────
    case 'getApiCache': {
      relayToContent({ action: 'getApiCache' }, sendResponse);
      return true;
    }

    // ── Legacy DOM actions ───────────────────────────────────────────────────
    case 'clickButton':
    case 'fillInput': {
      relayToContent(msg, sendResponse);
      return true;
    }

    // ── Chat history ─────────────────────────────────────────────────────────
    case 'getStoredChats': {
      chrome.storage.local.get('chatHistory', ({ chatHistory }) => {
        sendResponse({ history: chatHistory || [] });
      });
      return true;
    }

    case 'saveChat': {
      chrome.storage.local.get('chatHistory', ({ chatHistory }) => {
        const history = chatHistory || [];
        history.push({ role: msg.role, content: msg.content, timestamp: Date.now() });
        chrome.storage.local.set({ chatHistory: history.slice(-50) }, () => sendResponse({ done: true }));
      });
      return true;
    }

    case 'clearChats': {
      chrome.storage.local.set({ chatHistory: [] }, () => sendResponse({ done: true }));
      return true;
    }
  }
});
