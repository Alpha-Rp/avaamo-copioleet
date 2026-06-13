// llm/router.js — Multi-LLM router for Avaamo Copilot
// ES module, imported by background.js service worker.
// API keys are read from chrome.storage.local (set via popup), NOT from config.js.

// ── Model endpoints ───────────────────────────────────────────────────────────────
const MODELS = {
  gemini: {
    model:    'gemini-2.5-flash',
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/'
  },
  groq: {
    model:    'llama-3.3-70b-versatile',
    endpoint: 'https://api.groq.com/openai/v1/chat/completions'
  },
  openrouter: {
    model:    'openrouter/auto',
    endpoint: 'https://openrouter.ai/api/v1/chat/completions'
  },
  huggingface: {
    model:    'Qwen/Qwen3-235B-A22B',
    endpoint: 'https://router.huggingface.co/v1/chat/completions'
  }
};

// ── Shared system prompt ──────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are Avaamo Copilot, an expert assistant for the Avaamo conversational AI platform.
You help users build bots, design dialogs, configure skills, and troubleshoot issues.
Be concise and practical. Output PLAIN TEXT only - no markdown, no bold, no # headers, no formatting.
Use clear section labels in UPPERCASE (e.g., WHAT THIS PAGE SHOWS:, KEY ELEMENTS:, SUGGESTIONS:, ISSUES:).
When given page context, reference specific elements visible on the screen.
When given documentation excerpts, base your answer on them.`;

// ── Read API keys from chrome.storage.local ──────────────────────────────────
function getKeys() {
  return new Promise((resolve) => {
    chrome.storage.local.get(
      ['geminiApiKey', 'groqApiKey', 'openrouterApiKey', 'hfApiKey', 'defaultLLM'],
      resolve
    );
  });
}

// ── Build user message with optional page + KB context ───────────────────────
function buildUserMessage(query, context) {
  if (!context || context.error) return query;

  const parts = [];
  if (context.url)         parts.push(`URL: ${context.url}`);
  if (context.pageType)    parts.push(`Page type: ${context.pageType}`);
  if (context.botName)     parts.push(`Bot: ${context.botName}`);
  if (context.currentNode) parts.push(`Selected node: ${context.currentNode}`);
  if (context.visibleText) parts.push(`\nPage content:\n${context.visibleText}`);

  if (!parts.length) return query;

  return `**Current page context:**\n${parts.join('\n')}\n\n---\n\n${query}`;
}

// ── Individual LLM callers ─────────────────────────────────────────────────────────

async function callGemini(query, context, keys) {
  console.log('Gemini key exists?', !!keys.geminiApiKey);
  console.log('Gemini key prefix:', keys.geminiApiKey?.slice(0, 10));
  const apiKey = keys.geminiApiKey;
  if (!apiKey) throw new Error('Gemini API key not set. Add it in the extension popup.');

  const { model, endpoint } = MODELS.gemini;
  const fullPrompt = `${SYSTEM_PROMPT}\n\n${buildUserMessage(query, context)}`;

  const url = `${endpoint}${model}:generateContent?key=${apiKey}`;

console.log('Gemini URL:', url);
console.log('Gemini key raw:', JSON.stringify(apiKey));
console.log('Gemini key length:', apiKey.length);

const res = await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [{ parts: [{ text: fullPrompt }] }],
    generationConfig: {
      temperature: 0.3,
      maxOutputTokens: 3000
    }
  })
});
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini ${res.status}: ${err.slice(0, 200)}`);
  }
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini.';
}

async function callGroq(query, context, keys) {
  const apiKey = keys.groqApiKey;
  if (!apiKey) throw new Error('Groq API key not set. Add it in the extension popup.');

  const { model, endpoint } = MODELS.groq;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user',   content: buildUserMessage(query, context) }
      ],
      temperature: 0.3,
      max_tokens:  3000
    })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Groq ${res.status}: ${err.slice(0, 200)}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response from Groq.';
}

async function callOpenRouter(query, context, keys) {
  const apiKey = keys.openrouterApiKey;
  if (!apiKey) throw new Error('OpenRouter API key not set. Add it in the extension popup.');

  const { model, endpoint } = MODELS.openrouter;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer':  'chrome-extension://avaamo-copilot',
      'X-Title':       'Avaamo Copilot'
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user',   content: buildUserMessage(query, context) }
      ],
      temperature: 0.3,
      max_tokens:  3000
    })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenRouter ${res.status}: ${err.slice(0, 200)}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response from OpenRouter.';
}

async function callHuggingFace(query, context, keys) {
  const apiKey = keys.hfApiKey;
  if (!apiKey) throw new Error('HuggingFace API key not set. Add it in the extension popup.');

  const { model, endpoint } = MODELS.huggingface;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user',   content: buildUserMessage(query, context) }
      ],
      temperature: 0.3,
      max_tokens:  3000
    })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`HuggingFace ${res.status}: ${err.slice(0, 200)}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response from HuggingFace.';
}

// ── Routing logic ──────────────────────────────────────────────────────────────────

const CODE_PATTERN    = /code|script|json|function|write me|generate code|snippet|example code/i;
const ANALYZE_PATTERN = /analyze|analyse|review|audit|what does this|explain this|convert|find issues/i;

function pickPrimary(query, context, taskType, keys) {
  // Explicit task type overrides
  if (taskType === 'code'    && keys.openrouterApiKey) return callOpenRouter;
  if (taskType === 'analyze' && keys.geminiApiKey)     return callGemini;
  if (taskType === 'fast'    && keys.groqApiKey)       return callGroq;

  // Query-based routing
  if (CODE_PATTERN.test(query)    && keys.openrouterApiKey) return callOpenRouter;
  if (ANALYZE_PATTERN.test(query) && keys.geminiApiKey)     return callGemini;

  // Large context → Gemini (1M context window)
  if ((context?.visibleText?.length || 0) > 8000 && keys.geminiApiKey) return callGemini;

  // Default: use user's configured preference, fall back to first available
  const preferenceMap = {
    gemini:      () => keys.geminiApiKey      ? callGemini      : null,
    groq:        () => keys.groqApiKey        ? callGroq        : null,
    openrouter:  () => keys.openrouterApiKey  ? callOpenRouter  : null,
    huggingface: () => keys.hfApiKey          ? callHuggingFace : null
  };
  const preferred = (preferenceMap[keys.defaultLLM || 'huggingface'] || (() => null))();
  if (preferred) return preferred;

  // First available key (by quality: HF > Gemini > Groq > OpenRouter)
  if (keys.hfApiKey)           return callHuggingFace;
  if (keys.geminiApiKey)       return callGemini;
  if (keys.groqApiKey)         return callGroq;
  if (keys.openrouterApiKey)   return callOpenRouter;

  throw new Error('No API keys configured. Open the extension popup and add at least one API key.');
}

export async function routeToLLM(query, context, taskType) {
  const keys = await getKeys();

  const primary = pickPrimary(query, context, taskType, keys);

  // Fallback chain: primary first, then by model quality (best → fallback)
  // Qwen3-235B-A22B (HF) > Gemini 2.5 Flash > Llama 3.3 70B (Groq) > OpenRouter auto
  const allCallers = [callHuggingFace, callGemini, callGroq, callOpenRouter];
  const chain = [primary, ...allCallers.filter(fn => fn !== primary)];

  let lastError;
  for (const caller of chain) {
    // Skip callers whose key isn't set
    const keyMap = {
      callGroq:        keys.groqApiKey,
      callGemini:      keys.geminiApiKey,
      callOpenRouter:  keys.openrouterApiKey,
      callHuggingFace: keys.hfApiKey
    };
    if (!keyMap[caller.name]) continue;

    try {
      return await caller(query, context, keys);
    } catch (err) {
      console.warn(`[Avaamo Copilot] ${caller.name} failed:`, err.message);
      lastError = err;
    }
  }

  throw new Error(lastError?.message || 'All LLMs failed. Check your API keys in the popup.');
}

export { MODELS };