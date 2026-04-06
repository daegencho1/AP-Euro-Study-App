// All Anthropic API calls go through the local Express proxy (server.js).
// The API key lives only in .env on the server — it is never sent to the browser.

const MODEL = "claude-sonnet-4-20250514";

const TUTOR_SYSTEM_PROMPT =
  "You are a concise AP European History tutor. Explain concepts clearly and " +
  "historically accurately in 3–5 sentences unless asked for more. " +
  "Use specific dates, names, and historical context. Avoid vague generalities.";

async function callProxy(body) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error?.message || `HTTP ${res.status}`);
  }
  return data.content[0].text;
}

// Send a full conversation history and return the assistant's reply text.
export async function sendChatMessage(messages) {
  return callProxy({
    model: MODEL,
    max_tokens: 1024,
    system: TUTOR_SYSTEM_PROMPT,
    messages,
  });
}

// Generate an AP-style SAQ or LEQ prompt for the given unit / time period.
export async function generateEssayPrompt(type, unitName, timePeriod) {
  const isSAQ = type === "SAQ";
  const periodClause = timePeriod ? `, focused on the period ${timePeriod}` : "";

  const content = isSAQ
    ? `Write one AP European History Short-Answer Question (SAQ) for the unit "${unitName}"${periodClause}. ` +
      `Format it exactly as on the AP exam: a brief stimulus or context sentence, then three lettered parts (a), (b), (c) each worth one point. ` +
      `Output only the prompt itself — no preamble, no labels like "SAQ:".`
    : `Write one AP European History Long-Essay Question (LEQ) for the unit "${unitName}"${periodClause}. ` +
      `Format it exactly as on the AP exam: a single essay question that asks students to develop an argument, ` +
      `with a suggested time period range in parentheses. ` +
      `Output only the prompt itself — no preamble, no labels like "LEQ:".`;

  return callProxy({
    model: MODEL,
    max_tokens: 512,
    messages: [{ role: "user", content }],
  });
}

// Given a generated essay prompt, return AP-rubric-aligned scoring guidance.
export async function generateEssayGuidance(type, prompt) {
  return callProxy({
    model: MODEL,
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content:
          `For the following AP European History ${type} prompt, provide concise scoring guidance aligned to the AP rubric.\n\n` +
          `Include:\n` +
          `- The specific historical claims/evidence a strong response must include\n` +
          `- What earns each point (use the official AP rubric structure for ${type}s)\n` +
          `- One or two suggested thesis/argument directions\n\n` +
          `Prompt:\n${prompt}`,
      },
    ],
  });
}
