// popup.js — Avaamo Copilot popup controller

const sidebarToggle  = document.getElementById('sidebarToggle');
const statusDot      = document.getElementById('statusDot');
const statusText     = document.getElementById('statusText');
const groqKey        = document.getElementById('groqKey');
const geminiKey      = document.getElementById('geminiKey');
const openrouterKey  = document.getElementById('openrouterKey');
const hfKey          = document.getElementById('hfKey');
const defaultLLM     = document.getElementById('defaultLLM');
const saveBtn        = document.getElementById('saveBtn');
const toast          = document.getElementById('toast');

const KEYS = [
  { input: groqKey,       dot: document.getElementById('groqDot'),       store: 'groqApiKey' },
  { input: geminiKey,     dot: document.getElementById('geminiDot'),     store: 'geminiApiKey' },
  { input: openrouterKey, dot: document.getElementById('openrouterDot'), store: 'openrouterApiKey' },
  { input: hfKey,         dot: document.getElementById('hfDot'),         store: 'hfApiKey' }
];

// ---- Load saved state ----
chrome.storage.local.get(
  ['sidebarEnabled', 'groqApiKey', 'geminiApiKey', 'openrouterApiKey', 'hfApiKey', 'defaultLLM'],
  (data) => {
    const enabled = !!data.sidebarEnabled;
    sidebarToggle.checked = enabled;
    updateStatus(enabled);

    KEYS.forEach(({ input, dot, store }) => {
      const val = data[store] || '';
      input.value = val;
      dot.classList.toggle('set', val.length > 0);
    });

    defaultLLM.value = data.defaultLLM || 'groq';
  }
);

// ---- Live dot update as user types ----
KEYS.forEach(({ input, dot }) => {
  input.addEventListener('input', () => {
    dot.classList.toggle('set', input.value.trim().length > 0);
  });
});

// ---- Sidebar toggle ----
sidebarToggle.addEventListener('change', () => {
  const enabled = sidebarToggle.checked;
  chrome.storage.local.set({ sidebarEnabled: enabled });
  updateStatus(enabled);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.id) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleSidebar' }, () => {
        if (chrome.runtime.lastError) { /* tab may not have content script yet */ }
      });
    }
  });
});

// ---- Save API keys ----
saveBtn.addEventListener('click', () => {
  const toSave = { defaultLLM: defaultLLM.value };
  KEYS.forEach(({ input, store }) => {
    toSave[store] = input.value.trim();
  });
  chrome.storage.local.set(toSave, () => {
    showToast('Saved!');
  });
});

function updateStatus(enabled) {
  statusDot.classList.toggle('active', enabled);
  statusText.textContent = enabled ? 'Active on Avaamo pages' : 'Inactive';
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}
