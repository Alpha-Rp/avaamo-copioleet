// content.js — Avaamo Copilot: Full Automation Engine
// Injected into every Avaamo tab.
// Handles: DOM context, sidebar injection, network intercept, action execution

(function () {
  'use strict';

  // ── Network interception — cache Avaamo API responses ─────────────────────
  window.__avaamoApiCache = {};

  const _origFetch = window.fetch;
  window.fetch = async function (...args) {
    const res = await _origFetch(...args);
    try {
      const url = typeof args[0] === 'string' ? args[0] : args[0]?.url || '';
      if (url && /\/dialog|\/skills|\/bots|\/intents|\/entities|\/flows/i.test(url)) {
        const clone = res.clone();
        clone.json().then(data => {
          window.__avaamoApiCache[url] = data;
        }).catch(() => {});
      }
    } catch (_) {}
    return res;
  };

  const _origXHR = window.XMLHttpRequest.prototype.open;
  window.XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    this.__url = url;
    this.addEventListener('load', function () {
      try {
        if (/\/dialog|\/skills|\/bots|\/intents|\/entities|\/flows/i.test(this.__url)) {
          window.__avaamoApiCache[this.__url] = JSON.parse(this.responseText);
        }
      } catch (_) {}
    });
    return _origXHR.call(this, method, url, ...rest);
  };

  // ── Helpers ────────────────────────────────────────────────────────────────
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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
      url:          window.location.href,
      pageType:     detectPageType(),
      botName:      findText(selectors.botName),
      currentNode:  findText(selectors.currentNode),
      visibleText:  document.body.innerText.slice(0, 3000),
      apiCacheKeys: Object.keys(window.__avaamoApiCache)
    };
  }

  // ── Page interaction utilities ─────────────────────────────────────────────

  // ── Wait for element to appear ─────────────────────────────────────────────
  function waitForElement(selector, timeout = 3000) {
    return new Promise((resolve) => {
      const el = document.querySelector(selector);
      if (el) { resolve(el); return; }
      const observer = new MutationObserver(() => {
        const found = document.querySelector(selector);
        if (found) { observer.disconnect(); resolve(found); }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      setTimeout(() => { observer.disconnect(); resolve(null); }, timeout);
    });
  }

  // ── Find the best open panel after an interaction ─────────────────────────
  // NOTE: '[class*="sidebar"]' is intentionally excluded — it would match
  // the #avaamo-copilot-sidebar wrapper we inject ourselves.
  function scrapeOpenPanel() {
    const panelSelectors = [
      '[class*="node-detail"]', '[class*="nodeDetail"]',
      '[class*="node-editor"]', '[class*="nodeEditor"]',
      '[class*="dialog-node"]', '[class*="panel"]',
      '[class*="drawer"]',      '[class*="modal"]',
      '[class*="properties"]',  '[class*="inspector"]',
      '[class*="config"]',      '[class*="settings-panel"]'
    ];
    for (const sel of panelSelectors) {
      // Skip anything that is inside or is our own injected sidebar
      const candidates = Array.from(document.querySelectorAll(sel)).filter(
        el => !el.closest('#avaamo-copilot-sidebar') && el.innerText?.trim().length > 20
      );
      if (candidates.length) {
        const el = candidates[0];
        return { selector: sel, text: el.innerText.trim().slice(0, 2000), html: el.innerHTML.slice(0, 3000) };
      }
    }
    return null;
  }

  // ── Extract dialog data directly from Angular scope ─────────────────────────
  function extractDialogData() {
    try {
      const el = document.querySelector('.conversation-chart');
      if (!el) return null;

      // Check if angular is available globally
      if (typeof angular === 'undefined') {
        console.log('[Avaamo Copilot] angular not available on page');
        return null;
      }

      const scope = angular.element(el).scope();
      if (!scope?.conversationData) return null;

      const raw = scope.conversationData;

      const nodes = raw.nodes.map(node => ({
        key: node.key,
        id: node.id,
        name: node.intentData?.name || `Node ${node.key}`,
        intent_type: node.intentData?.intent_type || 'unknown',
        messages: node.messages_sets?.flatMap(ms =>
          ms.messages?.map(m => ({
            type: m.content_type,
            text: m.content?.value || null,
            buttons: m.quick_reply?.links?.map(l => l.title?.value) ||
                     m.card?.links?.map(l => l.title?.value) || []
          }))
        ) || [],
        skip_js: node.intentData?.skip_intent_javascript_function?.code || null,
        goto: node.goto?.key || null
      }));

      const links = raw.links.map(l => ({
        from: l.from,
        to: l.to
      }));

      return { nodes, links, settings: raw.settings };

    } catch (e) {
      console.error('[Avaamo Copilot] extractDialogData failed:', e);
      return null;
    }
  }

  // ── Execute a structured action plan ──────────────────────────────────────
  async function executeActions(steps) {
    const log = [];

    for (const step of steps) {
      try {
        switch (step.type) {

          case 'click': {
            const el = document.querySelector(step.selector);
            if (el) { el.click(); log.push({ step, status: 'ok' }); }
            else     { log.push({ step, status: 'error', msg: `Selector not found: ${step.selector}` }); }
            break;
          }

          case 'fill': {
            const input = document.querySelector(step.selector);
            if (input) {
              input.focus();
              input.value = step.value || '';
              input.dispatchEvent(new Event('input',  { bubbles: true }));
              input.dispatchEvent(new Event('change', { bubbles: true }));
              log.push({ step, status: 'ok' });
            } else {
              log.push({ step, status: 'error', msg: `Selector not found: ${step.selector}` });
            }
            break;
          }

          case 'typeText': {
            // Type into the currently focused element or first visible input
            const target = document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA'
              ? document.activeElement
              : document.querySelector('input:not([type=hidden]):not([disabled]), textarea');
            if (target) {
              target.focus();
              target.value = (target.value || '') + (step.value || '');
              target.dispatchEvent(new Event('input',  { bubbles: true }));
              target.dispatchEvent(new Event('change', { bubbles: true }));
              log.push({ step, status: 'ok' });
            } else {
              log.push({ step, status: 'error', msg: 'No input found' });
            }
            break;
          }

          case 'wait': {
            await sleep(step.ms || 500);
            log.push({ step, status: 'ok' });
            break;
          }

          case 'navigate': {
            if (step.url) {
              window.location.href = step.url;
              log.push({ step, status: 'ok' });
            } else {
              log.push({ step, status: 'error', msg: 'No URL provided' });
            }
            break;
          }

          case 'scroll': {
            const el = step.selector ? document.querySelector(step.selector) : document.body;
            if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); log.push({ step, status: 'ok' }); }
            else     { log.push({ step, status: 'error', msg: `Selector not found: ${step.selector}` }); }
            break;
          }

          case 'scrape': {
            const el = step.selector ? document.querySelector(step.selector) : document.body;
            const text = el?.innerText?.trim().slice(0, 3000) || '(empty)';
            log.push({ step, status: 'ok', result: text });
            break;
          }

          case 'waitFor': {
            const el = await waitForElement(step.selector, step.timeout || 3000);
            log.push({ step, status: el ? 'ok' : 'timeout' });
            break;
          }

          default:
            log.push({ step, status: 'unknown', msg: `Unknown step type: ${step.type}` });
        }
      } catch (e) {
        log.push({ step, status: 'error', msg: e.message });
      }
    }

    return log;
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

      case 'getDialogData': {
        const data = extractDialogData();
        sendResponse({ success: !!data, data });
        return true;
      }

      case 'executeActions': {
        executeActions(msg.steps || []).then(log => sendResponse({ done: true, log }));
        return true; // async
      }

      case 'getApiCache': {
        sendResponse({ cache: window.__avaamoApiCache });
        return true;
      }

      case 'clickButton': {
        const btn = document.querySelector(msg.selector);
        if (btn) { btn.click(); sendResponse({ done: true }); }
        else      { sendResponse({ done: false, error: `Selector not found: ${msg.selector}` }); }
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
