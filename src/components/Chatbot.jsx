import { useState, useRef, useEffect } from "react";
import { sendChatMessage } from "../utils/anthropic";

const SUGGESTED_QUESTIONS = [
  "What caused the Protestant Reformation?",
  "How did the Scientific Revolution challenge the Church?",
  "What were the main causes of WWI?",
  "Explain Napoleon's rise and fall.",
  "What was the significance of the Congress of Vienna?",
  "How did industrialization change European society?",
];

function Message({ role, content }) {
  const isUser = role === "user";
  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
          isUser ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-600"
        }`}
      >
        {isUser ? "Y" : "AI"}
      </div>
      <div
        className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-indigo-600 text-white rounded-tr-sm"
            : "bg-white border border-slate-200 text-slate-800 rounded-tl-sm"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="shrink-0 w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
        AI
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
      </div>
    </div>
  );
}

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    const userMessage = { role: "user", content: text };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const reply = await sendChatMessage(nextMessages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setError(
        err?.message?.includes("401")
          ? "Invalid API key. Check your REACT_APP_ANTHROPIC_KEY in .env and restart the dev server."
          : "Something went wrong. Check your API key and network connection."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  function handleSuggestion(q) {
    setInput(q);
    textareaRef.current?.focus();
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">AI Tutor</h2>
        <p className="text-sm text-slate-500 mt-0.5">
          Ask anything about AP European History
        </p>
      </div>

      {/* Message area */}
      <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center gap-5 mt-8">
            <div className="text-4xl">📚</div>
            <p className="text-slate-500 text-sm text-center max-w-sm">
              Ask any question about AP European History — causes, key figures,
              comparisons, essay tips, or definitions.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSuggestion(q)}
                  className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1.5 rounded-full hover:bg-indigo-100 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <Message key={i} role={m.role} content={m.content} />
        ))}

        {loading && <TypingIndicator />}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
            {error}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div className="pt-3 border-t border-slate-200">
        {messages.length > 0 && (
          <button
            onClick={() => { setMessages([]); setError(null); }}
            className="text-xs text-slate-400 hover:text-slate-600 mb-2 transition-colors"
          >
            Clear conversation
          </button>
        )}
        <div className="flex gap-2 items-end">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about any AP Euro concept… (Enter to send, Shift+Enter for newline)"
            rows={2}
            className="flex-1 resize-none border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="shrink-0 px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
