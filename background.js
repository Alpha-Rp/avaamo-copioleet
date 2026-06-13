// background.js — Avaamo Copilot Service Worker
// Handles: LLM routing, page context relay, chat history, DOM action relay

import { routeToLLM } from './llm/router.js';

// ── Track the most recently active Avaamo tab ──────────────────────────────
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url?.includes('avaamo.com')) {
    chrome.storage.local.set({ activeAvaamoTab: { tabId, url: tab.url } });
  }
});

// Also track when user switches to an Avaamo tab
chrome.tabs.onActivated.addListener(({ tabId }) => {
  chrome.tabs.get(tabId, (tab) => {
    if (tab?.url?.includes('avaamo.com')) {
      chrome.storage.local.set({ activeAvaamoTab: { tabId, url: tab.url } });
    }
  });
});

// ── Central message router ─────────────────────────────────────────────────
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  switch (msg.action) {

    // ── LLM call ────────────────────────────────────────────────────────────
    case 'callLLM': {
      routeToLLM(msg.query, msg.context, msg.taskType)
        .then(response => sendResponse({ response }))
        .catch(err  => sendResponse({ response: `⚠️ LLM error: ${err.message}` }));
      return true;
    }

    // ── Relay getPageContext to the active Avaamo content script ────────────
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

    // ── Toggle sidebar in the active Avaamo tab ──────────────────────────────
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

    // ── DOM actions relayed to content script ──────────────────────────────
    case 'clickButton':
    case 'fillInput': {
      chrome.storage.local.get('activeAvaamoTab', ({ activeAvaamoTab }) => {
        if (!activeAvaamoTab?.tabId) { sendResponse({ done: false }); return; }
        chrome.tabs.sendMessage(activeAvaamoTab.tabId, msg, (res) => sendResponse(res || { done: false }));
      });
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
