const FEATURES = [
  { id: "flashcards", label: "Flashcards", icon: "🃏" },
  { id: "mcq", label: "MCQ Practice", icon: "📝" },
  { id: "vocabulary", label: "Vocabulary", icon: "📖" },
  { id: "chatbot", label: "AI Tutor", icon: "🤖" },
  { id: "essays", label: "SAQ / LEQ", icon: "✍️" },
];

const UNITS = [
  { id: 1, short: "Renaissance & Exploration" },
  { id: 2, short: "Age of Reformation" },
  { id: 3, short: "Absolutism & Constitutionalism" },
  { id: 4, short: "Scientific & Philosophical Dev." },
  { id: 5, short: "Conflict & Crisis (Late 18c)" },
  { id: 6, short: "Industrialization" },
  { id: 7, short: "19th-Century Politics" },
  { id: 8, short: "20th-Century Conflicts" },
  { id: 9, short: "Cold War & Contemporary" },
];

export default function Sidebar({
  activeFeature,
  setActiveFeature,
  activeUnit,
  setActiveUnit,
}) {
  return (
    <aside className="w-64 shrink-0 bg-slate-900 text-white flex flex-col h-screen overflow-y-auto">
      {/* App title */}
      <div className="px-5 py-5 border-b border-slate-700">
        <h1 className="text-lg font-bold tracking-tight leading-tight">
          AP Euro
          <br />
          <span className="text-indigo-400 text-sm font-medium">Study Hub</span>
        </h1>
      </div>

      {/* Feature nav */}
      <nav className="px-3 pt-4 pb-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 px-2 mb-2">
          Sections
        </p>
        {FEATURES.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFeature(f.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium mb-0.5 transition-colors ${
              activeFeature === f.id
                ? "bg-indigo-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            <span>{f.icon}</span>
            {f.label}
          </button>
        ))}
      </nav>

      {/* Unit selector */}
      <div className="px-3 pt-3 pb-4 border-t border-slate-700 mt-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 px-2 mb-2">
          Units
        </p>
        {UNITS.map((u) => (
          <button
            key={u.id}
            onClick={() => setActiveUnit(u.id)}
            className={`w-full flex items-start gap-2.5 px-3 py-2 rounded-lg text-xs font-medium mb-0.5 transition-colors text-left ${
              activeUnit === u.id
                ? "bg-slate-700 text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
            }`}
          >
            <span
              className={`shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                activeUnit === u.id
                  ? "bg-indigo-500 text-white"
                  : "bg-slate-700 text-slate-400"
              }`}
            >
              {u.id}
            </span>
            <span className="leading-snug">{u.short}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
