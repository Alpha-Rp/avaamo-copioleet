// sidebar.js — Avaamo Copilot Sidebar
// Runs inside the sidebar iframe injected into Avaamo pages.

(async function () {
  'use strict';

  // ---- DOM refs ----
  const messagesEl   = document.getElementById('messages');
  const userInput    = document.getElementById('userInput');
  const sendBtn      = document.getElementById('sendBtn');
  const clearBtn     = document.getElementById('clearBtn');
  const closeBtn     = document.getElementById('closeBtn');
  const pageBadge    = document.getElementById('pageBadge');
  const modelBadge   = document.getElementById('modelBadge');
  const analyzeBtn   = document.getElementById('analyzeBtn');
  const analyzeResult = document.getElementById('analyzeResult');
  const tabs         = document.querySelectorAll('.tab');
  const tabContents  = document.querySelectorAll('.tab-content');
  const actionBtns   = document.querySelectorAll('.action-btn');

  // ---- State ----
  let pageContext = null;
  let isLoading   = false;

  // ---- marked.js config ----
  if (typeof marked !== 'undefined') {
    marked.setOptions({ breaks: true, gfm: true });
  }

  function md(text) {
    if (typeof marked !== 'undefined') return marked.parse(text);
    return text.replace(/\n/g, '<br>');
  }

  // ================================================================
  // KB RAG — keyword search over AVAAMO_KB_CHUNKS from kb.js
  // ================================================================
  function normalise(t) {
    return (t || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  }

  function scoreChunk(chunk, queryWords) {
    const text = normalise(chunk.topic + ' ' + chunk.content);
    let score = 0;
    queryWords.forEach(w => {
      if (text.includes(w)) score += (text.split(w).length - 1);
    });
    if (normalise(chunk.topic).includes(queryWords[0] || '')) score += 3;
    return score;
  }

  function getKbContext(query, topN = 3) {
    if (typeof AVAAMO_KB_CHUNKS === 'undefined' || !AVAAMO_KB_CHUNKS.length) return '';
    const words = normalise(query).split(/\s+/).filter(w => w.length > 3);
    if (!words.length) return '';

    const scored = AVAAMO_KB_CHUNKS
      .map(c => ({ ...c, score: scoreChunk(c, words) }))
      .filter(c => c.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, topN);

    if (!scored.length) return '';

    return scored.map(c =>
      `=== ${c.topic}${c.chunk ? ` (part ${c.chunk})` : ''} ===\n${c.content}`
    ).join('\n\n');
  }

  // ================================================================
  // Chrome messaging helpers
  // ================================================================
  function sendToBackground(msg) {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage(msg, (res) => {
        if (chrome.runtime.lastError) {
          resolve({ error: chrome.runtime.lastError.message });
        } else {
          resolve(res || {});
        }
      });
    });
  }

  // ================================================================
  // Page context
  // ================================================================
  async function refreshPageContext() {
    const ctx = await sendToBackground({ action: 'getPageContext' });
    if (!ctx.error) {
      pageContext = ctx;
      pageBadge.textContent = ctx.pageType || 'unknown';
      pageBadge.title = ctx.url || '';
    } else {
      pageBadge.textContent = 'no page';
    }
    return pageContext;
  }

  // ================================================================
  // Chat history persistence
  // ================================================================
  async function loadHistory() {
    const { history } = await sendToBackground({ action: 'getStoredChats' });
    if (history?.length) {
      // Replay last 20 messages into the UI
      history.slice(-20).forEach(m => appendMessage(m.role, m.content, false));
      scrollToBottom();
    }
  }

  async function saveMessage(role, content) {
    await sendToBackground({ action: 'saveChat', role, content });
  }

  // ================================================================
  // Message rendering
  // ================================================================
  function appendMessage(role, content, save = true) {
    const div = document.createElement('div');
    div.className = `msg ${role}`;
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    if (role === 'assistant') {
      bubble.innerHTML = md(content);
    } else {
      bubble.textContent = content;
    }

    div.appendChild(bubble);
    messagesEl.appendChild(div);
    scrollToBottom();

    if (save) saveMessage(role, content);
    return div;
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'msg assistant typing-indicator';
    div.id = 'typing';
    div.innerHTML = `<div class="bubble"><div class="dot-pulse"><span></span><span></span><span></span></div></div>`;
    messagesEl.appendChild(div);
    scrollToBottom();
  }

  function removeTyping() {
    document.getElementById('typing')?.remove();
  }

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  // ================================================================
  // LLM call via background
  // ================================================================
  async function askLLM(query, taskType = 'auto') {
    const ctx = pageContext || await refreshPageContext();
    const kbContext = getKbContext(query);

    // Enrich context with KB snippets
    const enrichedContext = {
      ...ctx,
      kbContext: kbContext || undefined
    };

    // Prepend KB context to query if found
    const fullQuery = kbContext
      ? `Relevant Avaamo documentation:\n${kbContext}\n\n---\n\n${query}`
      : query;

    const { response, error } = await sendToBackground({
      action: 'callLLM',
      query: fullQuery,
      context: enrichedContext,
      taskType
    });

    return response || error || 'No response received.';
  }

  // ================================================================
  // Send chat message
  // ================================================================
  async function sendMessage() {
    const text = userInput.value.trim();
    if (!text || isLoading) return;

    isLoading = true;
    sendBtn.disabled = true;
    userInput.value = '';
    autoResize();

    appendMessage('user', text);
    showTyping();

    const response = await askLLM(text, 'auto');

    removeTyping();
    appendMessage('assistant', response);

    // Update model badge from storage
    chrome.storage.local.get('defaultLLM', ({ defaultLLM }) => {
      modelBadge.textContent = defaultLLM || 'groq';
    });

    isLoading = false;
    sendBtn.disabled = false;
    userInput.focus();
  }

  // ================================================================
  // Analyze tab
  // ================================================================
  async function analyzePage() {
    analyzeBtn.disabled = true;
    analyzeBtn.textContent = '⏳ Analyzing...';
    analyzeResult.innerHTML = '<p style="color:#555">Reading page and calling LLM...</p>';

    await refreshPageContext();

    const prompt = `Analyze this Avaamo page and provide a structured report in PLAIN TEXT (no markdown, no bold, no headers with #):

WHAT THIS PAGE SHOWS:
Describe what the user is looking at.

KEY ELEMENTS FOUND:
List specific bot names, node names, intents, entities, or skills visible.

SUGGESTIONS:
Practical improvements or next steps.

POTENTIAL ISSUES:
Anything broken, missing, or that could cause problems.`;

    const response = await askLLM(prompt, 'analyze');
    analyzeResult.innerHTML = md(response);

    analyzeBtn.disabled = false;
    analyzeBtn.textContent = '🔍 Analyze This Page';
  }

  // ================================================================
  // Action buttons — send to chat tab
  // ================================================================
  async function runAction(prompt, taskType) {
    // Switch to chat tab
    switchTab('chat');

    isLoading = true;
    sendBtn.disabled = true;
    actionBtns.forEach(b => b.disabled = true);

    appendMessage('user', prompt.split('\n')[0].replace(/^[^a-zA-Z]+/, '').trim());
    showTyping();

    await refreshPageContext();
    const response = await askLLM(prompt, taskType);

    removeTyping();
    appendMessage('assistant', response);

    isLoading = false;
    sendBtn.disabled = false;
    actionBtns.forEach(b => b.disabled = false);
  }

  // ================================================================
  // Tab switching
  // ================================================================
  function switchTab(name) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
    tabContents.forEach(c => c.classList.toggle('active', c.id === `tab-${name}`));
    if (name === 'chat') scrollToBottom();
  }

  // ================================================================
  // Auto-resize textarea
  // ================================================================
  function autoResize() {
    userInput.style.height = 'auto';
    userInput.style.height = Math.min(userInput.scrollHeight, 120) + 'px';
  }

  // ================================================================
  // Event listeners
  // ================================================================
  sendBtn.addEventListener('click', sendMessage);

  userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  userInput.addEventListener('input', autoResize);

  clearBtn.addEventListener('click', async () => {
    await sendToBackground({ action: 'clearChats' });
    messagesEl.innerHTML = '';
    appendMessage('assistant', 'Chat cleared. How can I help?', false);
  });

  closeBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'toggleSidebar' });
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  analyzeBtn.addEventListener('click', analyzePage);

  actionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      runAction(btn.dataset.prompt, btn.dataset.task || 'auto');
    });
  });

  // ================================================================
  // Init
  // ================================================================
  await refreshPageContext();
  await loadHistory();

  // Set model badge
  chrome.storage.local.get('defaultLLM', ({ defaultLLM }) => {
    modelBadge.textContent = defaultLLM || 'groq';
  });

  userInput.focus();

})();
