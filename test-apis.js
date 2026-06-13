require('dotenv').config();
const fetch = require('node-fetch');

const MODELS = {
  gemini: {
    model: 'gemini-2.5-flash',
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/'
  },
  groq: {
    model: 'llama-3.3-70b-versatile',
    endpoint: 'https://api.groq.com/openai/v1/chat/completions'
  },
  openrouter: {
    model: 'openrouter/auto',
    endpoint: 'https://openrouter.ai/api/v1/chat/completions'
  },
  huggingface: {
    model: 'Qwen/Qwen3-235B-A22B',
    endpoint: 'https://router.huggingface.co/v1/chat/completions'
  }
};

const SYSTEM_PROMPT = `You are Avaamo Copilot, an expert assistant for the Avaamo conversational AI platform.`;

async function testGemini(apiKey) {
  if (!apiKey) return { name: 'Gemini', status: 'SKIPPED', error: 'No API key' };
  const { model, endpoint } = MODELS.gemini;
  try {
    const res = await fetch(`${endpoint}${model}:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${SYSTEM_PROMPT}\n\nTest: Say hello` }] }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 100 }
      })
    });
    if (!res.ok) {
      const err = await res.text();
      return { name: 'Gemini', status: 'FAILED', error: `${res.status}: ${err.slice(0, 200)}` };
    }
    const data = await res.json();
    return { name: 'Gemini', status: 'OK', response: data.candidates?.[0]?.content?.parts?.[0]?.text?.slice(0, 100) };
  } catch (err) {
    return { name: 'Gemini', status: 'ERROR', error: err.message };
  }
}

async function testGroq(apiKey) {
  if (!apiKey) return { name: 'Groq', status: 'SKIPPED', error: 'No API key' };
  const { model, endpoint } = MODELS.groq;
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, { role: 'user', content: 'Test: Say hello' }],
        temperature: 0.3, max_tokens: 100
      })
    });
    if (!res.ok) {
      const err = await res.text();
      return { name: 'Groq', status: 'FAILED', error: `${res.status}: ${err.slice(0, 200)}` };
    }
    const data = await res.json();
    return { name: 'Groq', status: 'OK', response: data.choices?.[0]?.message?.content?.slice(0, 100) };
  } catch (err) {
    return { name: 'Groq', status: 'ERROR', error: err.message };
  }
}

async function testOpenRouter(apiKey) {
  if (!apiKey) return { name: 'OpenRouter', status: 'SKIPPED', error: 'No API key' };
  const { model, endpoint } = MODELS.openrouter;
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'chrome-extension://avaamo-copilot',
        'X-Title': 'Avaamo Copilot'
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, { role: 'user', content: 'Test: Say hello' }],
        temperature: 0.3, max_tokens: 100
      })
    });
    if (!res.ok) {
      const err = await res.text();
      return { name: 'OpenRouter', status: 'FAILED', error: `${res.status}: ${err.slice(0, 200)}` };
    }
    const data = await res.json();
    return { name: 'OpenRouter', status: 'OK', response: data.choices?.[0]?.message?.content?.slice(0, 100) };
  } catch (err) {
    return { name: 'OpenRouter', status: 'ERROR', error: err.message };
  }
}

async function testHuggingFace(apiKey) {
  if (!apiKey) return { name: 'HuggingFace', status: 'SKIPPED', error: 'No API key' };
  const { model, endpoint } = MODELS.huggingface;
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, { role: 'user', content: 'Test: Say hello' }],
        temperature: 0.3, max_tokens: 100
      })
    });
    if (!res.ok) {
      const err = await res.text();
      return { name: 'HuggingFace', status: 'FAILED', error: `${res.status}: ${err.slice(0, 200)}` };
    }
    const data = await res.json();
    return { name: 'HuggingFace', status: 'OK', response: data.choices?.[0]?.message?.content?.slice(0, 100) };
  } catch (err) {
    return { name: 'HuggingFace', status: 'ERROR', error: err.message };
  }
}

async function runTests() {
  console.log('=== Testing 4 LLM APIs ===\n');
  
  const results = await Promise.all([
    testGemini(process.env.gemini_API_KEY),
    testGroq(process.env.groq_API_KEY),
    testOpenRouter(process.env.open_router_API_KEY),
    testHuggingFace(process.env.HF_API_KEY)
  ]);

  results.forEach(r => {
    const icon = r.status === 'OK' ? '✓' : r.status === 'SKIPPED' ? '⊘' : '✗';
    console.log(`${icon} ${r.name}: ${r.status}`);
    if (r.response) console.log(`   Response: ${r.response}`);
    if (r.error) console.log(`   Error: ${r.error}`);
    console.log();
  });

  const working = results.filter(r => r.status === 'OK');
  console.log(`\n=== Summary: ${working.length}/4 working ===`);
  if (working.length > 0) {
    console.log('Working:', working.map(r => r.name).join(', '));
  }
  const failed = results.filter(r => r.status === 'FAILED' || r.status === 'ERROR');
  if (failed.length > 0) {
    console.log('Failed:', failed.map(r => `${r.name} (${r.error})`).join(', '));
  }
}

runTests();