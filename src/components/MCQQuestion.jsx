import { useState } from "react";

const CHOICE_LABELS = ["A", "B", "C", "D"];

export default function MCQQuestion({ question, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!selected) return;
    setSubmitted(true);
    onAnswer(selected === question.correct);
  }

  function choiceStyle(letter) {
    if (!submitted) {
      return selected === letter
        ? "border-indigo-500 bg-indigo-50 text-indigo-800"
        : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/50";
    }
    if (letter === question.correct) return "border-green-500 bg-green-50 text-green-800";
    if (letter === selected) return "border-red-400 bg-red-50 text-red-700";
    return "border-slate-200 bg-white text-slate-400";
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Stimulus */}
      {question.stimulus && (
        <blockquote className="border-l-4 border-indigo-300 pl-4 py-1 text-slate-600 italic text-sm bg-indigo-50 rounded-r-lg pr-4">
          {question.stimulus}
        </blockquote>
      )}

      {/* Question text */}
      <p className="text-base font-semibold text-slate-800 leading-snug">
        {question.question}
      </p>

      {/* Choices */}
      <div className="flex flex-col gap-2">
        {CHOICE_LABELS.map((letter) => (
          <button
            key={letter}
            disabled={submitted}
            onClick={() => setSelected(letter)}
            className={`flex items-start gap-3 px-4 py-3 rounded-xl border-2 text-sm text-left transition-all ${choiceStyle(letter)}`}
          >
            <span className="shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold">
              {letter}
            </span>
            <span className="leading-snug">{question.choices[letter]}</span>
          </button>
        ))}
      </div>

      {/* Submit / explanation */}
      {!submitted ? (
        <button
          disabled={!selected}
          onClick={handleSubmit}
          className="w-full py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Submit Answer
        </button>
      ) : (
        <div
          className={`p-4 rounded-xl text-sm leading-relaxed ${
            selected === question.correct
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          <p className="font-semibold mb-1">
            {selected === question.correct ? "✓ Correct!" : `✗ Incorrect — Answer: ${question.correct}`}
          </p>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
