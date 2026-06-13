// content.js — Injected into every Avaamo tab
// Responsibilities: DOM context reading, sidebar injection, DOM action execution

(function () {
  'use strict';

  // ── Page type detection ────────────────────────────────────────────────────
  function detectPageType() {
    const url = window.location.href;
    if (/\/dialog/.test(url))    return 'dialog-designer';
    if (/\/knowledge/.test(url)) return 'knowledge-skill';
    if (/\/agent/.test(url))     return 'agent-builder';
    if (/\/bots/.test(url))      return 'bot-list';
    if (/\/settings/.test(url))  return 'settings';
    return 'unknown';
  }

  function getPageContext() {
    const selectors = {
      botName: [
        '[class*="bot-name"]', '[class*="botName"]',
        '.bot-title', 'h1', '[data-testid="bot-name"]'
      ],
      currentNode: [
        '[class*="selected"][class*="node"]',
        '.active-node', '[class*="selectedNode"]',
        '[class*="selected-node"]'
      ]
    };

    const findText = (sels) => {
      for (const s of sels) {
        const el = document.querySelector(s);
        if (el?.innerText?.trim()) return el.innerText.trim();
      }
      return null;
    };

    return {
      url:         window.location.href,
      pageType:    detectPageType(),
      botName:     findText(selectors.botName),
      currentNode: findText(selectors.currentNode),
      visibleText: document.body.innerText.slice(0, 3000)
    };
  }

  // ── Sidebar injection ──────────────────────────────────────────────────────
  function injectSidebar() {
    if (document.getElementById('avaamo-copilot-sidebar')) return;

    const wrapper = document.createElement('div');
    wrapper.id = 'avaamo-copilot-sidebar';
    Object.assign(wrapper.style, {
      position:   'fixed',
      top:        '0',
      right:      '0',
      width:      '380px',
      height:     '100vh',
      zIndex:     '999999',
      boxShadow:  '-4px 0 20px rgba(0,0,0,0.4)',
      transition: 'transform 0.3s ease',
      transform:  'translateX(0)'
    });

    const iframe = document.createElement('iframe');
    iframe.src = chrome.runtime.getURL('sidebar.html');
    Object.assign(iframe.style, {
      width:   '100%',
      height:  '100%',
      border:  'none',
      display: 'block'
    });

    wrapper.appendChild(iframe);
    document.body.appendChild(wrapper);
  }

  function toggleSidebar() {
    const el = document.getElementById('avaamo-copilot-sidebar');
    if (!el) {
      injectSidebar();
      chrome.storage.local.set({ sidebarEnabled: true });
      return true;
    }
    const isHidden = el.style.transform === 'translateX(100%)';
    el.style.transform = isHidden ? 'translateX(0)' : 'translateX(100%)';
    const nowVisible = isHidden;
    chrome.storage.local.set({ sidebarEnabled: nowVisible });
    return nowVisible;
  }

  // ── Init: auto-inject if previously enabled ────────────────────────────────
  chrome.storage.local.get('sidebarEnabled', ({ sidebarEnabled }) => {
    if (sidebarEnabled) injectSidebar();
  });

  // ── Message listener ───────────────────────────────────────────────────────
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    switch (msg.action) {

      case 'toggleSidebar': {
        const visible = toggleSidebar();
        sendResponse({ done: true, visible });
        return true;
      }

      case 'getPageContext': {
        sendResponse(getPageContext());
        return true;
      }

      case 'clickButton': {
        const btn = document.querySelector(msg.selector);
        if (btn) {
          btn.click();
          sendResponse({ done: true });
        } else {
          sendResponse({ done: false, error: `Selector not found: ${msg.selector}` });
        }
        return true;
      }

      case 'fillInput': {
        const input = document.querySelector(msg.selector);
        if (input) {
          input.value = msg.value;
          input.dispatchEvent(new Event('input',  { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
          sendResponse({ done: true });
        } else {
          sendResponse({ done: false, error: `Selector not found: ${msg.selector}` });
        }
        return true;
      }
    }
  });

})();
