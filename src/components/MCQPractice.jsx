import { useState, useMemo } from "react";
import mcqData from "../data/mcq";
import useMCQScore from "../hooks/useMCQScore";
import MCQQuestion from "./MCQQuestion";

export default function MCQPractice({ unitId }) {
  const { saveScore, getScore } = useMCQScore();
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [done, setDone] = useState(false);
  const [sessionKey, setSessionKey] = useState(0); // forces MCQQuestion remount

  const unit = useMemo(() => mcqData.find((u) => u.unitId === unitId), [unitId]);
  const questions = unit?.questions ?? [];

  const bestScore = getScore(unitId);

  function handleAnswer(isCorrect) {
    const next = isCorrect ? correct + 1 : correct;
    setCorrect(next);
    setAnswered(true);
    // Last question — save and show summary
    if (index + 1 >= questions.length) {
      saveScore(unitId, next, questions.length);
      setDone(true);
    }
  }

  function handleNext() {
    setIndex((i) => i + 1);
    setAnswered(false);
    setSessionKey((k) => k + 1);
  }

  function handleRestart() {
    setIndex(0);
    setCorrect(0);
    setAnswered(false);
    setDone(false);
    setSessionKey((k) => k + 1);
  }

  if (!unit) {
    return (
      <div className="flex items-center justify-center h-64 text-slate-400">
        Unit not found.
      </div>
    );
  }

  const pct = Math.round((correct / questions.length) * 100);
  const bestPct = bestScore
    ? Math.round((bestScore.best / bestScore.bestTotal) * 100)
    : null;

  // Summary screen
  if (done) {
    return (
      <div className="max-w-xl mx-auto flex flex-col gap-6">
        <h2 className="text-xl font-bold text-slate-800">
          Unit {unitId}: {unit.unitName}
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col items-center gap-4">
          <div
            className={`text-6xl font-bold ${
              pct >= 80 ? "text-green-500" : pct >= 60 ? "text-amber-500" : "text-red-500"
            }`}
          >
            {pct}%
          </div>
          <p className="text-slate-600 text-lg">
            {correct} / {questions.length} correct
          </p>

          {bestScore && (
            <p className="text-sm text-slate-400">
              Best: {bestScore.best}/{bestScore.bestTotal} ({bestPct}%) over{" "}
              {bestScore.attempts} attempt{bestScore.attempts !== 1 ? "s" : ""}
            </p>
          )}

          <div className="w-full bg-slate-100 rounded-full h-3 mt-2">
            <div
              className={`h-3 rounded-full transition-all duration-700 ${
                pct >= 80 ? "bg-green-400" : pct >= 60 ? "bg-amber-400" : "bg-red-400"
              }`}
              style={{ width: `${pct}%` }}
            />
          </div>

          <p className="text-sm text-slate-500">
            {pct >= 80
              ? "Great work! You're ready for this unit."
              : pct >= 60
              ? "Good effort — review the missed questions."
              : "Keep studying — try the flashcards for this unit."}
          </p>
        </div>

        <button
          onClick={handleRestart}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 transition-colors"
        >
          Retry Quiz
        </button>
      </div>
    );
  }

  const question = questions[index];

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Unit {unitId}: {unit.unitName}
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Question {index + 1} of {questions.length} · {correct} correct so far
          </p>
        </div>
        {bestScore && (
          <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">
            Best: {bestPct}%
          </span>
        )}
      </div>

      {/* Progress bar */}
      <div className="w-full bg-slate-100 rounded-full h-2">
        <div
          className="bg-indigo-400 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(index / questions.length) * 100}%` }}
        />
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <MCQQuestion
          key={sessionKey}
          question={question}
          onAnswer={handleAnswer}
        />
      </div>

      {/* Next button */}
      {answered && index + 1 < questions.length && (
        <button
          onClick={handleNext}
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 transition-colors"
        >
          Next Question →
        </button>
      )}
    </div>
  );
}
