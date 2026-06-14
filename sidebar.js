// sidebar.js — Avaamo Copilot Sidebar
// Runs inside the sidebar iframe injected into Avaamo pages.

(async function () {
  'use strict';

  // ---- DOM refs ----
  const messagesEl    = document.getElementById('messages');
  const userInput     = document.getElementById('userInput');
  const sendBtn       = document.getElementById('sendBtn');
  const clearBtn      = document.getElementById('clearBtn');
  const closeBtn      = document.getElementById('closeBtn');
  const pageBadge     = document.getElementById('pageBadge');
  const modelBadge    = document.getElementById('modelBadge');
  const analyzeBtn    = document.getElementById('analyzeBtn');
  const analyzeResult = document.getElementById('analyzeResult');
  const tabs          = document.querySelectorAll('.tab');
  const tabContents   = document.querySelectorAll('.tab-content');
  const actionBtns    = document.querySelectorAll('.action-btn');

  // Automate tab refs
  const automatePrompt   = document.getElementById('automatePrompt');
  const runAutomateBtn   = document.getElementById('runAutomateBtn');
  const harvestBtn       = document.getElementById('harvestBtn');
  const getApiCacheBtn   = document.getElementById('getApiCacheBtn');
  const automateLog      = document.getElementById('automateLog');
  const clearLogBtn      = document.getElementById('clearLogBtn');
  const harvestResult    = document.getElementById('harvestResult');

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

    const enrichedContext = {
      ...ctx,
      kbContext: kbContext || undefined
    };

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
  // AUTOMATE TAB — Execution log helpers
  // ================================================================
  function logEntry(icon, text, type = 'info') {
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    entry.innerHTML = `<span class="log-icon">${icon}</span><span class="log-text">${text}</span>`;
    automateLog.appendChild(entry);
    automateLog.scrollTop = automateLog.scrollHeight;
    return entry;
  }

  function logInfo(text)    { return logEntry('▶', text, 'info'); }
  function logOk(text)      { return logEntry('✔', text, 'ok'); }
  function logError(text)   { return logEntry('✘', text, 'error'); }
  function logWarn(text)    { return logEntry('⚠', text, 'warn'); }
  function logRunning(text) { return logEntry('↻', text, 'running'); }

  function setAllAutomateBtns(disabled) {
    runAutomateBtn.disabled   = disabled;
    harvestBtn.disabled       = disabled;
    getApiCacheBtn.disabled   = disabled;
  }

  // ================================================================
  // AUTOMATE TAB — Run natural language instruction
  // ================================================================
  async function runAutomation() {
    const instruction = automatePrompt.value.trim();
    if (!instruction) { logWarn('Please enter an instruction first.'); return; }

    setAllAutomateBtns(true);
    logInfo(`Instruction: "${instruction}"`);

    // 1. Refresh page context
    const running1 = logRunning('Reading page context...');
    await refreshPageContext();
    running1.className = 'log-entry ok';
    running1.querySelector('.log-icon').textContent = '✔';
    running1.querySelector('.log-text').textContent = `Page: ${pageContext?.pageType || 'unknown'} — ${pageContext?.url || ''}`;

    // 2. Send to text LLM using DOM context only
    const running2 = logRunning('Sending to AI...');
    const response = await askLLM(
      `Page context: ${JSON.stringify({
        url: pageContext?.url,
        pageType: pageContext?.pageType,
        botName: pageContext?.botName,
        currentNode: pageContext?.currentNode,
        visibleText: pageContext?.visibleText
      })}\n\nUser instruction: ${instruction}\n\nIf this requires DOM actions, respond with a JSON action plan array. Otherwise answer as text.`,
      'analyze'
    );
    let actionPlan;
    const fenced = response.match(/```(?:json)?\s*([\s\S]*?)```/);
    const raw    = response.match(/(\[\s*\{[\s\S]*?\}\s*\])/);
    const candidate = fenced?.[1] || raw?.[1];
    if (candidate) {
      try {
        const parsed = JSON.parse(candidate.trim());
        if (Array.isArray(parsed) && parsed[0]?.type) actionPlan = parsed;
      } catch (_) {}
    }

    running2.className = 'log-entry ok';
    running2.querySelector('.log-icon').textContent = '✔';
    running2.querySelector('.log-text').textContent = 'AI responded.';

    // 4. If action plan — execute it
    if (actionPlan && actionPlan.length) {
      logInfo(`Executing ${actionPlan.length} action step(s)...`);

      const execRes = await sendToBackground({ action: 'executeActions', steps: actionPlan });
      const execLog = execRes?.log || [];

      execLog.forEach((entry, i) => {
        const desc = entry.step?.description || entry.step?.type || `Step ${i + 1}`;
        if (entry.status === 'ok') {
          const resultText = entry.result ? ` → "${entry.result.slice(0, 100)}"` : '';
          logOk(`${desc}${resultText}`);
        } else if (entry.status === 'error') {
          logError(`${desc}: ${entry.msg}`);
        } else if (entry.status === 'timeout') {
          logWarn(`${desc}: timed out waiting for element`);
        } else {
          logWarn(`${desc}: ${entry.status}`);
        }
      });

      // Collect any scrape results and show in chat
      const scraped = execLog.filter(e => e.step?.type === 'scrape' && e.result);
      if (scraped.length) {
        const scrapedText = scraped.map(e =>
          `[${e.step.description || 'Scraped'}]:\n${e.result}`
        ).join('\n\n');

        logInfo('Sending scraped content to AI for analysis...');
        switchTab('chat');
        appendMessage('user', instruction);
        showTyping();
        const analysis = await askLLM(
          `The user ran this automation: "${instruction}"\n\nHere is the content scraped from the page:\n\n${scrapedText}\n\nAnalyze this and answer the user's original instruction.`,
          'analyze'
        );
        removeTyping();
        appendMessage('assistant', analysis);
      }

      logOk('Automation complete.');
    } else {
      // Plain text response — show in chat
      logInfo('AI returned a text response (no actions to execute).');
      switchTab('chat');
      appendMessage('user', instruction);
      appendMessage('assistant', response);
    }

    setAllAutomateBtns(false);
  }

  // ================================================================
  // AUTOMATE TAB — Extract dialog data from Angular scope
  // ================================================================
  async function harvestNodes() {
    setAllAutomateBtns(true);
    harvestResult.innerHTML = '';
    logInfo('Reading dialog from Angular scope...');

    const running = logRunning('Extracting nodes & links from conversation-chart...');
    const res = await sendToBackground({ action: 'getDialogData' });

    if (!res?.success) {
      running.className = 'log-entry error';
      running.querySelector('.log-icon').textContent = '✘';
      running.querySelector('.log-text').textContent = 'Failed: No dialog found. Open a Classic bot dialog designer page.';
      setAllAutomateBtns(false);
      return;
    }

    const { nodes, links } = res.data;
    running.className = 'log-entry ok';
    running.querySelector('.log-icon').textContent = '✔';
    running.querySelector('.log-text').textContent = `Extracted ${nodes.length} nodes + ${links.length} links instantly.`;

    // Build results table
    let html = `<p style="font-size:11px;color:#7c83fd;margin-bottom:6px;">🔍 ${nodes.length} nodes, ${links.length} links extracted:</p>`;
    html += `<table class="harvest-table"><thead><tr><th>#</th><th>Name</th><th>Type</th><th>Messages</th><th>Buttons</th></tr></thead><tbody>`;
    nodes.forEach((node, i) => {
      const msgTexts = node.messages?.filter(m => m.text).map(m => m.text.slice(0, 60)).join('; ') || '-';
      const btnTexts = node.messages?.flatMap(m => m.buttons).filter(Boolean).join(' | ') || '-';
      html += `<tr><td>${i + 1}</td><td>${node.name}</td><td>${node.intent_type}</td><td>${msgTexts}</td><td>${btnTexts}</td></tr>`;
    });
    html += '</tbody></table>';
    harvestResult.innerHTML = html;

    // Send to chat for full analysis
    logInfo('Sending to AI for structured analysis...');
    switchTab('chat');
    const botSummary = nodes.map(n => {
      const msgs = n.messages?.filter(m => m.text).map(m => `"${m.text.slice(0, 80)}"`).join(', ') || 'no messages';
      const btns = n.messages?.flatMap(m => m.buttons).filter(Boolean).join(' | ') || 'no buttons';
      return `Node ${n.key} [${n.name}] (${n.intent_type}): ${msgs} ${btns ? `Buttons: ${btns}` : ''}`;
    }).join('\n');

    const flowSummary = links.map(l => `${l.from} → ${l.to}`).join(', ');

    const prompt = `
You are an Avaamo bot expert. Analyze this Classic dialog bot and give a structured report.

BOT NODES (${nodes.length} total):
${botSummary}

FLOW CONNECTIONS:
${flowSummary}

Respond in this EXACT format with these sections:

## 🤖 What This Bot Does
[2-3 sentence summary]

## 🗺️ Flow Overview  
[List the main conversation paths]

## ⚠️ Issues Found
[Any broken flows, missing validations, dead ends]

## 🔄 Agentic Bot Conversion Plan
[Step by step what needs to change]

## 📋 Variables Detected
[List all context.variables used]

## ✅ Recommended Actions
[Prioritized list of improvements]
`;

    appendMessage('user', 'Analyze this Classic bot dialog');
    showTyping();
    const analysis = await askLLM(prompt, 'analyze');
    removeTyping();
    appendMessage('assistant', analysis);

    setAllAutomateBtns(false);
  }

  // ================================================================
  // AUTOMATE TAB — Get API cache
  // ================================================================
  async function showApiCache() {
    logInfo('Fetching intercepted API cache...');
    const res = await sendToBackground({ action: 'getApiCache' });
    const cache = res?.cache || {};
    const keys = Object.keys(cache);

    if (!keys.length) {
      logWarn('No API responses cached yet. Navigate around the Avaamo page to populate the cache.');
      return;
    }

    logOk(`Found ${keys.length} cached API response(s).`);
    keys.forEach(k => logInfo(`📡 ${k}`));

    // Send to chat for analysis
    switchTab('chat');
    const cacheText = keys.map(k => `URL: ${k}\nData: ${JSON.stringify(cache[k]).slice(0, 500)}`).join('\n\n---\n\n');
    appendMessage('user', 'Analyze intercepted Avaamo API data');
    showTyping();
    const analysis = await askLLM(
      `I intercepted these Avaamo API responses from the network:\n\n${cacheText}\n\nAnalyze this data: what bot/dialog/skill does it describe? Extract all meaningful information.`,
      'analyze'
    );
    removeTyping();
    appendMessage('assistant', analysis);
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

  // Automate tab
  runAutomateBtn.addEventListener('click', runAutomation);
  harvestBtn.addEventListener('click', harvestNodes);
  getApiCacheBtn.addEventListener('click', showApiCache);
  clearLogBtn.addEventListener('click', () => { automateLog.innerHTML = ''; harvestResult.innerHTML = ''; });

  // Allow Shift+Enter in automate prompt, Enter = run
  automatePrompt.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      runAutomation();
    }
  });

  // ================================================================
  // Init
  // ================================================================
  await refreshPageContext();
  await loadHistory();

  chrome.storage.local.get('defaultLLM', ({ defaultLLM }) => {
    modelBadge.textContent = defaultLLM || 'groq';
  });

  userInput.focus();

})();
