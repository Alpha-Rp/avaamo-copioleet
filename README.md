# ⚡ Avaamo Copilot — Chrome Extension

AI-powered assistant for the [Avaamo](https://avaamo.com) conversational AI platform. Runs as a persistent sidebar inside Avaamo tabs, reads the page you're on, and answers questions using your KB docs + a multi-LLM router.

---

## Architecture

```
avaamo-copilot/
├── manifest.json          ← MV3: permissions, service worker, content scripts
├── background.js          ← Service worker: LLM routing, message relay, chat history
├── content.js             ← Injected into Avaamo tabs: DOM reading, sidebar injection
├── sidebar.html/css/js    ← Persistent sidebar (Chat / Analyze / Actions tabs)
├── popup.html/js          ← Extension popup: sidebar toggle + API key settings
├── config.js              ← Non-secret defaults (keys stored in chrome.storage.local)
├── kb.js                  ← Pre-built KB chunks (run kb/build-kb.js to regenerate)
├── kb/
│   └── build-kb.js          ← Node.js script: chunks avaamo-kb/*.md → kb.js
├── llm/
│   └── router.js            ← Multi-LLM router: Groq / Gemini / OpenRouter / HuggingFace
└── avaamo-kb/             ← Your 23 markdown knowledge base files
    ├── agentic/
    ├── classic/
    └── other/
```

---

## Setup

### 1. Build the Knowledge Base

```bash
node kb/build-kb.js
```

This reads all `.md` files from `avaamo-kb/` and writes chunked data to `kb.js`. Re-run whenever you update the KB files.

### 2. Load the Extension in Chrome

1. Open `chrome://extensions`
2. Enable **Developer mode** (top right toggle)
3. Click **Load unpacked**
4. Select this project folder

### 3. Add API Keys

Click the extension icon (⚡) in the Chrome toolbar. In the popup:

| Field | Where to get it | Speed |
|-------|----------------|-------|
| **Groq** | [console.groq.com](https://console.groq.com) | ⚡ Fastest |
| **Gemini** | [aistudio.google.com](https://aistudio.google.com) | 📚 Largest context |
| **OpenRouter** | [openrouter.ai](https://openrouter.ai) | 💻 Best for code |
| **HuggingFace** | [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens) | Fallback |

You only need **one key** to get started. Groq is recommended (fastest, generous free tier).

### 4. Use the Sidebar

1. Navigate to any `*.avaamo.com` page
2. Toggle **Sidebar** on in the popup
3. The sidebar appears on the right side of the page

---

## Features

### 💬 Chat Tab
- Ask anything about Avaamo platform
- Automatically reads the current page (bot name, node, page type)
- KB RAG: searches your 23 markdown docs and injects relevant context
- Chat history persists across sessions via `chrome.storage.local`
- Shift+Enter for newlines, Enter to send

### 🔍 Analyze Tab
- One-click structured analysis of the current page
- Returns: What This Page Shows / Key Elements / Suggestions / Potential Issues
- Rendered as formatted markdown

### ⚡ Actions Tab
Quick actions that use the current page as context:
- **Explain This Dialog** — plain-English summary of the bot/flow
- **Find Issues** — numbered list of problems
- **Convert to Agentic** — step-by-step migration plan with code
- **Generate Test Cases** — table of test scenarios
- **Export as Code** — JSON/script for the current page
- **Suggest Improvements** — actionable UX and logic improvements

### 🤖 Multi-LLM Router
Automatically picks the best model per task:

| Task | Model | Why |
|------|-------|-----|
| Code generation | Qwen 2.5 Coder (OpenRouter) | Code-specialized |
| Page analysis | Gemini 2.0 Flash | 1M context window |
| General Q&A | Groq Llama 3.1 8B | Fastest inference |
| Fallback | HuggingFace Mistral | Always available |

Fallback chain: if the primary LLM fails, it automatically tries the next available one.

### 📱 DOM Awareness
`content.js` reads the live Avaamo page and extracts:
- Current URL and page type (`dialog-designer`, `knowledge-skill`, `agent-builder`, etc.)
- Bot name and selected node name
- First 3000 characters of visible page text

This context is automatically included in every LLM prompt.

---

## Development

### Updating KB files
```bash
# Edit files in avaamo-kb/
node kb/build-kb.js
# Reload the extension in chrome://extensions
```

### File responsibilities

| File | Runs in | Purpose |
|------|---------|---------|
| `background.js` | Service worker | LLM calls, message routing, storage |
| `content.js` | Avaamo page | DOM reading, sidebar iframe injection |
| `sidebar.js` | Sidebar iframe | UI logic, chat, KB search |
| `popup.js` | Extension popup | Toggle sidebar, save API keys |
| `llm/router.js` | Service worker | Route queries to correct LLM |

### Message flow
```
Sidebar → chrome.runtime.sendMessage → background.js
                                              ↓
                              chrome.tabs.sendMessage → content.js (for DOM)
                                              ↓
                                         LLM API call
                                              ↓
                                       response back to sidebar
```

---

## Roadmap

- [x] Phase 1: Popup + KB RAG + HuggingFace
- [x] Phase 2: Sidebar + DOM context reading
- [x] Phase 3: Multi-LLM router (Groq + Gemini + OpenRouter + HF)
- [x] Phase 4: Markdown rendering (marked.js)
- [x] Phase 5: DOM action execution (click/fill)
- [x] Phase 6: Classic bot analyzer
- [ ] Phase 7: Firebase session sync (optional)
