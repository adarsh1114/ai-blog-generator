import { useState } from "react";

const TONES = [
  { value: "Professional", label: "Professional", desc: "Formal & authoritative" },
  { value: "Casual", label: "Casual", desc: "Friendly & conversational" },
  { value: "Technical", label: "Technical", desc: "In-depth & precise" },
];

export default function BlogForm({ onGenerate, loading }) {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("Professional");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topic.trim()) return;
    onGenerate({ topic: topic.trim(), tone });
  };

  return (
    <div className="bg-white border border-ink-100 rounded-3xl p-8 shadow-sm animate-fade-in">
      <h2 className="font-display text-xl font-semibold text-ink-800 mb-6">
        What should we write about?
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Topic input */}
        <div className="space-y-2">
          <label className="block font-body text-sm font-medium text-ink-600 tracking-wide uppercase text-xs">
            Blog Topic
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. Future of Artificial Intelligence"
            disabled={loading}
            className="w-full bg-ink-50 border border-ink-100 rounded-xl px-4 py-3.5 font-body text-ink-900 text-base placeholder:text-ink-300 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all disabled:opacity-50"
          />
        </div>

        {/* Tone selector */}
        <div className="space-y-2">
          <label className="block font-body text-xs font-medium text-ink-600 tracking-wide uppercase">
            Writing Tone
          </label>
          <div className="grid grid-cols-3 gap-3">
            {TONES.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => setTone(t.value)}
                disabled={loading}
                className={`relative rounded-xl border px-3 py-3 text-left transition-all disabled:opacity-50 ${
                  tone === t.value
                    ? "border-amber-400 bg-amber-50 shadow-sm"
                    : "border-ink-100 bg-white hover:border-ink-200 hover:bg-ink-50"
                }`}
              >
                {tone === t.value && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400" />
                )}
                <span className="block font-body font-medium text-ink-800 text-sm">
                  {t.label}
                </span>
                <span className="block font-body text-ink-400 text-xs mt-0.5">
                  {t.desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading || !topic.trim()}
          className="w-full bg-ink-900 hover:bg-ink-800 disabled:bg-ink-200 text-white disabled:text-ink-400 font-body font-medium rounded-xl py-3.5 px-6 transition-all flex items-center justify-center gap-2.5 text-base"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Generating your article…
            </>
          ) : (
            <>
              <span>✦</span>
              Generate Blog
            </>
          )}
        </button>
      </form>
    </div>
  );
}
