import { useState } from "react";

export default function Flashcard({ card, isMastered, onToggleMastered }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped((f) => !f);
  }

  return (
    <div className="card-scene w-full h-72 cursor-pointer" onClick={handleFlip}>
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="card-face bg-white rounded-2xl shadow-lg border border-slate-200 flex flex-col items-center justify-center p-8 select-none">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            Term
          </span>
          <p className="text-2xl font-bold text-slate-800 text-center leading-snug">
            {card.term}
          </p>
          <span className="mt-6 text-xs text-slate-400">Click to flip</span>
        </div>

        {/* Back */}
        <div className="card-back card-face bg-indigo-600 rounded-2xl shadow-lg flex flex-col items-start justify-between p-8 select-none">
          <div className="w-full">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-200 mb-3 block">
              Definition
            </span>
            <p className="text-white text-base leading-relaxed">{card.definition}</p>
            {card.hint && (
              <p className="mt-4 text-indigo-200 text-sm italic">
                Hint: {card.hint}
              </p>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleMastered(card.id);
            }}
            className={`mt-4 w-full py-2 rounded-xl text-sm font-semibold transition-colors ${
              isMastered
                ? "bg-green-400 text-green-900 hover:bg-green-300"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            {isMastered ? "✓ Mastered" : "Mark as Mastered"}
          </button>
        </div>
      </div>
    </div>
  );
}
