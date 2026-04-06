import { useState, useMemo, useCallback } from "react";
import flashcardsData from "../data/flashcards";
import useFlashcards from "../hooks/useFlashcards";
import Flashcard from "./Flashcard";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashcardDeck({ unitId }) {
  const { isMastered, toggleMastered, masteredIds, clearUnit } = useFlashcards();
  const [index, setIndex] = useState(0);
  const [showUnmasteredOnly, setShowUnmasteredOnly] = useState(false);
  const [order, setOrder] = useState(null); // null = original order

  const unit = useMemo(
    () => flashcardsData.find((u) => u.unitId === unitId),
    [unitId]
  );

  const allCards = useMemo(() => unit ? unit.cards : [], [unit]);

  const displayCards = useMemo(() => {
    const source = order ?? allCards;
    return showUnmasteredOnly ? source.filter((c) => !isMastered(c.id)) : source;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, allCards, showUnmasteredOnly, masteredIds]);

  // Keep index in bounds whenever displayCards changes
  const safeIndex = Math.min(index, Math.max(displayCards.length - 1, 0));
  const card = displayCards[safeIndex] ?? null;

  const masteredCount = allCards.filter((c) => isMastered(c.id)).length;

  const handleShuffle = useCallback(() => {
    setOrder(shuffle(allCards));
    setIndex(0);
  }, [allCards]);

  const handleReset = useCallback(() => {
    setOrder(null);
    setIndex(0);
    setShowUnmasteredOnly(false);
  }, []);

  const handleToggleUnmastered = () => {
    setShowUnmasteredOnly((v) => !v);
    setIndex(0);
  };

  if (!unit) {
    return (
      <div className="flex items-center justify-center h-64 text-slate-400">
        Unit not found.
      </div>
    );
  }

  if (displayCards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <p className="text-slate-500 text-lg">
          {showUnmasteredOnly
            ? "All cards in this unit are mastered!"
            : "No cards available."}
        </p>
        {showUnmasteredOnly && (
          <button
            onClick={handleToggleUnmastered}
            className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-500"
          >
            Show All Cards
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Unit {unitId}: {unit.unitName}
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">
            {masteredCount} / {allCards.length} mastered
          </p>
        </div>
        <button
          onClick={() => { clearUnit(unitId); setIndex(0); }}
          className="text-xs text-slate-400 hover:text-red-400 transition-colors"
        >
          Reset progress
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-slate-100 rounded-full h-2">
        <div
          className="bg-green-400 h-2 rounded-full transition-all duration-500"
          style={{ width: `${(masteredCount / allCards.length) * 100}%` }}
        />
      </div>

      {/* Card counter */}
      <p className="text-center text-sm text-slate-400">
        {safeIndex + 1} / {displayCards.length}
        {showUnmasteredOnly && " (unmastered only)"}
      </p>

      {/* Card */}
      {card && (
        <Flashcard
          key={card.id}
          card={card}
          isMastered={isMastered(card.id)}
          onToggleMastered={toggleMastered}
        />
      )}

      {/* Controls */}
      <div className="flex items-center justify-between gap-3">
        <button
          disabled={safeIndex === 0}
          onClick={() => setIndex((i) => i - 1)}
          className="flex-1 py-2 rounded-xl bg-slate-100 text-slate-600 text-sm font-semibold hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>

        <button
          onClick={handleShuffle}
          className="px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 text-sm font-semibold hover:bg-indigo-100 transition-colors"
        >
          Shuffle
        </button>

        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-xl bg-slate-50 text-slate-500 text-sm font-semibold hover:bg-slate-100 transition-colors"
        >
          Reset Order
        </button>

        <button
          disabled={safeIndex === displayCards.length - 1}
          onClick={() => setIndex((i) => i + 1)}
          className="flex-1 py-2 rounded-xl bg-slate-100 text-slate-600 text-sm font-semibold hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>

      {/* Filter toggle */}
      <button
        onClick={handleToggleUnmastered}
        className={`w-full py-2 rounded-xl text-sm font-semibold border transition-colors ${
          showUnmasteredOnly
            ? "bg-amber-50 text-amber-700 border-amber-200"
            : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
        }`}
      >
        {showUnmasteredOnly ? "Showing Unmastered Only" : "Show Unmastered Only"}
      </button>
    </div>
  );
}
