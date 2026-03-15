import { useState } from "react";
import BlogForm from "./components/BlogForm";
import BlogResult from "./components/BlogResult";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "/api";

export default function App() {
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentTopic, setCurrentTopic] = useState("");

  const handleGenerate = async ({ topic, tone }) => {
    setLoading(true);
    setError("");
    setBlog("");
    setCurrentTopic(topic);

    try {
      const res = await axios.post(`${API_URL}/generate-blog`, { topic, tone });
      setBlog(res.data.blog);
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        "Something went wrong. Please check your connection and try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen z-10">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-ink-300 via-amber-500 to-ink-300" />

      {/* Header */}
      <header className="text-center py-14 px-6">
        <div className="inline-flex items-center gap-2 bg-ink-100 border border-ink-200 rounded-full px-4 py-1.5 mb-6 font-mono text-xs text-ink-500 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse inline-block" />
          Help us to generaqte better blogs
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-ink-950 leading-tight mb-4">
          AI Blog
          <span className="italic text-amber-500"> Generator</span>
        </h1>
        <p className="text-ink-400 font-body text-lg max-w-xl mx-auto leading-relaxed">
          Transform any topic into a beautifully structured article in seconds.
          Choose your tone, enter your idea, let the AI do the rest.
        </p>
      </header>

      {/* Main */}
      <main className="max-w-3xl mx-auto px-6 pb-20 space-y-10">
        <BlogForm onGenerate={handleGenerate} loading={loading} />

        {error && (
          <div className="animate-fade-in border border-red-200 bg-red-50 rounded-2xl px-6 py-4 flex items-start gap-3">
            <span className="text-red-400 text-xl mt-0.5">⚠</span>
            <p className="text-red-700 text-sm font-body">{error}</p>
          </div>
        )}

        {(loading || blog) && (
          <BlogResult blog={blog} loading={loading} topic={currentTopic} />
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-ink-300 font-mono text-xs tracking-wider border-t border-ink-100">
        AI BLOG GENERATOR — BUILT WITH REACT + EXPRESS + OPENAI
      </footer>
    </div>
  );
}
