import { useState, useCallback } from "react";
import { getItem, setItem } from "../utils/localStorage";

const STORAGE_KEY = "ap-euro-mastered";

function loadMastered() {
  const arr = getItem(STORAGE_KEY, []);
  return new Set(arr);
}

export default function useFlashcards() {
  const [masteredIds, setMasteredIds] = useState(() => loadMastered());

  const persist = useCallback((nextSet) => {
    setMasteredIds(nextSet);
    setItem(STORAGE_KEY, [...nextSet]);
  }, []);

  const toggleMastered = useCallback(
    (cardId) => {
      const next = new Set(masteredIds);
      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
      }
      persist(next);
    },
    [masteredIds, persist]
  );

  const isMastered = useCallback(
    (cardId) => masteredIds.has(cardId),
    [masteredIds]
  );

  const clearUnit = useCallback(
    (unitId) => {
      const prefix = `u${unitId}-`;
      const next = new Set([...masteredIds].filter((id) => !id.startsWith(prefix)));
      persist(next);
    },
    [masteredIds, persist]
  );

  return { masteredIds, toggleMastered, isMastered, clearUnit };
}
