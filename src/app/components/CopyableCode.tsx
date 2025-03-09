"use client";

import { useState } from "react";

interface CopyableCodeProps {
  code: string;
  language?: string;
  highlightedParts?: {
    text: string;
    explanation?: string;
  }[];
}

export default function CopyableCode({
  code,
  language = "jsx",
  highlightedParts = [],
}: CopyableCodeProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Function to highlight specific parts of the code
  const renderHighlightedCode = () => {
    if (!highlightedParts.length) {
      return <code className="text-gray-800 dark:text-gray-200">{code}</code>;
    }

    let processedCode = code;
    const highlights: {
      index: number;
      highlightedText: string;
      originalText: string;
      explanation?: string;
    }[] = [];

    // Replace all highlighted parts with markers and store their positions
    highlightedParts.forEach((part, idx) => {
      const marker = `__HIGHLIGHT_${idx}__`;
      const regex = new RegExp(
        part.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "g"
      );

      // Find all occurrences and store them
      let match;
      while ((match = regex.exec(processedCode)) !== null) {
        highlights.push({
          index: match.index,
          highlightedText: marker,
          originalText: part.text,
          explanation: part.explanation,
        });
      }

      // Replace in the code
      processedCode = processedCode.replace(regex, marker);
    });

    // Sort highlights by their position in the code
    highlights.sort((a, b) => a.index - b.index);

    // Split the code at highlight positions and intersperse with highlighted spans
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    highlights.forEach((highlight, idx) => {
      // Add the text before this highlight
      const partBeforeHighlight = processedCode.substring(
        lastIndex,
        highlight.index
      );
      if (partBeforeHighlight) {
        parts.push(<span key={`plain-${idx}`}>{partBeforeHighlight}</span>);
      }

      // Add the highlighted part
      parts.push(
        <span
          key={`highlight-${idx}`}
          className="bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded px-1 font-bold group relative"
          title={highlight.explanation || ""}
        >
          {highlight.originalText}
          {highlight.explanation && (
            <span className="absolute -top-10 left-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2 rounded text-xs text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity w-max max-w-48 shadow-md pointer-events-none z-10">
              {highlight.explanation}
            </span>
          )}
        </span>
      );

      lastIndex = highlight.index + highlight.highlightedText.length;
    });

    // Add any remaining text after the last highlight
    const remainingText = processedCode.substring(lastIndex);
    if (remainingText) {
      parts.push(<span key="remaining">{remainingText}</span>);
    }

    return <code className="text-gray-800 dark:text-gray-200">{parts}</code>;
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 max-h-[500px] overflow-y-auto">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {language}
        </span>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-1 px-2 py-1 rounded text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
          </svg>
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
      <pre className="p-4 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {renderHighlightedCode()}
      </pre>
    </div>
  );
}
