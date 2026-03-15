import { useState } from "react";
import ReactMarkdown from "react-markdown";

function SkeletonLoader() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-6 shimmer rounded-lg w-3/4" />
      <div className="h-3 shimmer rounded w-full" />
      <div className="h-3 shimmer rounded w-5/6" />
      <div className="h-3 shimmer rounded w-full" />
      <div className="h-5 shimmer rounded-lg w-1/2 mt-6" />
      <div className="h-3 shimmer rounded w-full" />
      <div className="h-3 shimmer rounded w-4/5" />
      <div className="h-3 shimmer rounded w-full" />
      <div className="h-3 shimmer rounded w-3/4" />
      <div className="h-5 shimmer rounded-lg w-2/3 mt-6" />
      <div className="h-3 shimmer rounded w-full" />
      <div className="h-3 shimmer rounded w-5/6" />
      <div className="h-3 shimmer rounded w-full" />
    </div>
  );
}

export default function BlogResult({ blog, loading, topic }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(blog);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = blog;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white border border-ink-100 rounded-3xl overflow-hidden shadow-sm animate-slide-up">
      {/* Result header */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-ink-100 bg-ink-50">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs text-ink-400 tracking-wider uppercase">
            Generated Article
          </span>
          {!loading && blog && topic && (
            <span className="font-mono text-xs text-amber-500 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full truncate max-w-xs">
              {topic}
            </span>
          )}
        </div>

        {!loading && blog && (
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 font-body text-xs font-medium px-3.5 py-1.5 rounded-lg border transition-all ${
              copied
                ? "bg-green-50 border-green-200 text-green-600"
                : "bg-white border-ink-200 text-ink-600 hover:border-ink-400 hover:bg-ink-50"
            }`}
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>
        )}
      </div>

      {/* Content */}
      <div className="px-8 py-8 min-h-48">
        {loading ? (
          <SkeletonLoader />
        ) : (
          <div className="prose-ink">
            <ReactMarkdown>{blog}</ReactMarkdown>
          </div>
        )}
      </div>

      {/* Footer word count */}
      {!loading && blog && (
        <div className="px-8 py-3 border-t border-ink-100 bg-ink-50 flex justify-end">
          <span className="font-mono text-xs text-ink-300">
            {blog.split(/\s+/).filter(Boolean).length} words
          </span>
        </div>
      )}
    </div>
  );
}
