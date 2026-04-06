import { useState } from "react";
import { generateEssayPrompt, generateEssayGuidance } from "../utils/anthropic";
import flashcardsData from "../data/flashcards";

const UNITS = flashcardsData.map((u) => ({ id: u.unitId, name: u.unitName }));

export default function EssayGenerator({ activeUnit }) {
  const [type, setType] = useState("SAQ");
  const [unitId, setUnitId] = useState(activeUnit ?? 1);
  const [timePeriod, setTimePeriod] = useState("");
  const [prompt, setPrompt] = useState("");
  const [guidance, setGuidance] = useState("");
  const [loadingPrompt, setLoadingPrompt] = useState(false);
  const [loadingGuidance, setLoadingGuidance] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const unitName = UNITS.find((u) => u.id === unitId)?.name ?? "";

  async function handleGenerate() {
    setLoadingPrompt(true);
    setPrompt("");
    setGuidance("");
    setError(null);
    try {
      const result = await generateEssayPrompt(type, unitName, timePeriod);
      setPrompt(result);
    } catch (err) {
      setError(
        err?.message?.includes("401")
          ? "Invalid API key. Check your REACT_APP_ANTHROPIC_KEY in .env and restart the dev server."
          : "Failed to generate prompt. Check your API key and network connection."
      );
    } finally {
      setLoadingPrompt(false);
    }
  }

  async function handleGuidance() {
    if (!prompt) return;
    setLoadingGuidance(true);
    setGuidance("");
    setError(null);
    try {
      const result = await generateEssayGuidance(type, prompt);
      setGuidance(result);
    } catch (err) {
      setError("Failed to generate guidance. Try again.");
    } finally {
      setLoadingGuidance(false);
    }
  }

  function handleCopy(text) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-slate-800">SAQ / LEQ Generator</h2>
        <p className="text-sm text-slate-500 mt-0.5">
          Generate AP-style essay prompts with scoring guidance
        </p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col gap-4">
        {/* Essay type */}
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
            Essay Type
          </label>
          <div className="flex gap-2">
            {["SAQ", "LEQ"].map((t) => (
              <button
                key={t}
                onClick={() => { setType(t); setPrompt(""); setGuidance(""); }}
                className={`flex-1 py-2 rounded-xl text-sm font-semibold border-2 transition-colors ${
                  type === t
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-slate-200 text-slate-600 hover:border-indigo-300"
                }`}
              >
                {t === "SAQ" ? "Short Answer (SAQ)" : "Long Essay (LEQ)"}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-1.5">
            {type === "SAQ"
              ? "3-part question worth 3 points — no thesis required"
              : "Full essay with thesis, evidence, and reasoning — worth 6 points"}
          </p>
        </div>

        {/* Unit selector */}
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
            Unit
          </label>
          <select
            value={unitId}
            onChange={(e) => { setUnitId(Number(e.target.value)); setPrompt(""); setGuidance(""); }}
            className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent bg-white"
          >
            {UNITS.map((u) => (
              <option key={u.id} value={u.id}>
                Unit {u.id}: {u.name}
              </option>
            ))}
          </select>
        </div>

        {/* Optional time period */}
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
            Time Period <span className="font-normal normal-case">(optional)</span>
          </label>
          <input
            type="text"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            placeholder="e.g. 1750–1850, post-WWI, c. 1500–1600"
            className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
          />
        </div>

        <button
          onClick={handleGenerate}
          disabled={loadingPrompt}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {loadingPrompt ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Generating…
            </>
          ) : (
            `Generate ${type} Prompt`
          )}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
          {error}
        </div>
      )}

      {/* Generated prompt */}
      {prompt && (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {type} Prompt — Unit {unitId}
            </span>
            <button
              onClick={() => handleCopy(prompt)}
              className="text-xs text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-800 leading-relaxed whitespace-pre-wrap border border-slate-100">
            {prompt}
          </div>

          <button
            onClick={handleGuidance}
            disabled={loadingGuidance}
            className="w-full py-2.5 border-2 border-indigo-200 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 text-sm"
          >
            {loadingGuidance ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-indigo-300 border-t-indigo-600 rounded-full animate-spin" />
                Generating guidance…
              </>
            ) : (
              "Generate Scoring Guidance"
            )}
          </button>
        </div>
      )}

      {/* Scoring guidance */}
      {guidance && (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Scoring Guidance
            </span>
            <button
              onClick={() => handleCopy(guidance)}
              className="text-xs text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
            >
              Copy
            </button>
          </div>
          <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
            {guidance}
          </div>
        </div>
      )}
    </div>
  );
}
