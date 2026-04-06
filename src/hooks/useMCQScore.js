import { useState, useCallback } from "react";
import { getItem, setItem } from "../utils/localStorage";

const STORAGE_KEY = "ap-euro-mcq-scores";

export default function useMCQScore() {
  const [scores, setScores] = useState(() => getItem(STORAGE_KEY, {}));

  const saveScore = useCallback((unitId, correct, total) => {
    setScores((prev) => {
      const existing = prev[unitId] ?? { best: 0, bestTotal: 0, attempts: 0 };
      const isBetter = correct / total > (existing.best / (existing.bestTotal || 1));
      const next = {
        ...prev,
        [unitId]: {
          best: isBetter ? correct : existing.best,
          bestTotal: isBetter ? total : existing.bestTotal,
          attempts: existing.attempts + 1,
        },
      };
      setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const getScore = useCallback((unitId) => scores[unitId] ?? null, [scores]);

  const clearAll = useCallback(() => {
    setScores({});
    setItem(STORAGE_KEY, {});
  }, []);

  return { scores, saveScore, getScore, clearAll };
}
