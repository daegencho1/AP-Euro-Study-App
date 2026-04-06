import { useState, useMemo } from "react";
import vocabularyData from "../data/vocabulary";

const PART_OF_SPEECH_COLORS = {
  concept: "bg-indigo-100 text-indigo-700",
  person: "bg-amber-100 text-amber-700",
  people: "bg-amber-100 text-amber-700",
  event: "bg-rose-100 text-rose-700",
  organization: "bg-emerald-100 text-emerald-700",
  group: "bg-teal-100 text-teal-700",
  document: "bg-purple-100 text-purple-700",
  text: "bg-purple-100 text-purple-700",
  ideology: "bg-sky-100 text-sky-700",
  movement: "bg-sky-100 text-sky-700",
  technology: "bg-orange-100 text-orange-700",
  legislation: "bg-green-100 text-green-700",
  place: "bg-pink-100 text-pink-700",
};

function badge(pos) {
  const cls = PART_OF_SPEECH_COLORS[pos?.toLowerCase()] ?? "bg-slate-100 text-slate-500";
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cls}`}>
      {pos}
    </span>
  );
}

function TermCard({ term }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((o) => !o)}
      className="w-full text-left bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-indigo-300 hover:shadow-sm transition-all"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-semibold text-slate-800 text-sm">{term.term}</span>
        <div className="flex items-center gap-2 shrink-0">
          {badge(term.partOfSpeech)}
          <span className="text-slate-300 text-xs">{open ? "▲" : "▼"}</span>
        </div>
      </div>
      {open && (
        <p className="mt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
          {term.definition}
        </p>
      )}
    </button>
  );
}

export default function VocabularyList({ unitId }) {
  const [query, setQuery] = useState("");
  const [searchAll, setSearchAll] = useState(false);

  const unit = useMemo(
    () => vocabularyData.find((u) => u.unitId === unitId),
    [unitId]
  );

  const filteredTerms = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (searchAll) {
      const allTerms = vocabularyData.flatMap((u) =>
        u.terms.map((t) => ({ ...t, unitName: u.unitName, unitId: u.unitId }))
      );
      if (!q) return allTerms;
      return allTerms.filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q)
      );
    }
    if (!unit) return [];
    if (!q) return unit.terms;
    return unit.terms.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q)
    );
  }, [query, unit, searchAll]);

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-5">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-slate-800">
          {searchAll ? "All Units" : `Unit ${unitId}: ${unit?.unitName}`}
        </h2>
        <p className="text-sm text-slate-500 mt-0.5">
          {filteredTerms.length} term{filteredTerms.length !== 1 ? "s" : ""}
          {query && ` matching "${query}"`}
        </p>
      </div>

      {/* Search bar */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms or definitions…"
            className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500"
            >
              ✕
            </button>
          )}
        </div>
        <button
          onClick={() => { setSearchAll((v) => !v); setQuery(""); }}
          className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-colors ${
            searchAll
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300"
          }`}
        >
          {searchAll ? "All Units" : "This Unit"}
        </button>
      </div>

      {/* Term list */}
      <div className="flex flex-col gap-2">
        {filteredTerms.length === 0 ? (
          <p className="text-center text-slate-400 py-12">No terms found.</p>
        ) : (
          filteredTerms.map((term) => (
            <div key={term.id}>
              {searchAll && (
                <p className="text-xs text-slate-400 px-1 mb-1">
                  Unit {term.unitId} · {term.unitName}
                </p>
              )}
              <TermCard term={term} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
