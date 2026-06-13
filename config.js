// config.js — Avaamo Copilot
// This file is web-accessible and loaded by sidebar.js.
// API keys are stored in chrome.storage.local (set via popup) — NOT hardcoded here.
// This file only holds non-secret defaults.

const COPILOT_CONFIG = {
  // Default LLM when no routing rule matches.
  // Overridden at runtime by the value saved in chrome.storage.local.
  // Options: 'gemini' | 'groq' | 'openrouter' | 'huggingface'
  defaultLLM: 'huggingface',

  sidebarWidth:      380,
  maxChatHistory:    50,
  enableDOMActions:  true,
  enablePageContext: true,

  // LLM model identifiers
  models: {
    gemini:      'gemini-2.5-flash',
    groq:        'llama-3.3-70b-versatile',
    openrouter:  'openrouter/auto',
    huggingface: 'Qwen/Qwen3-235B-A22B'
  }
};
