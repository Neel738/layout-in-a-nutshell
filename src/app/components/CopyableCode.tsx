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

    // Create an array to store all character positions and their highlight status
    const positions = new Array(code.length).fill(null);

    // Mark all highlighted positions
    highlightedParts.forEach((highlight, highlightIndex) => {
      const escapedText = highlight.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(escapedText, "g");
      let match;

      while ((match = regex.exec(code)) !== null) {
        // Check if this position is already highlighted
        const start = match.index;
        const end = start + match[0].length;
        let canHighlight = true;

        // Check if any position in this range is already highlighted
        for (let i = start; i < end; i++) {
          if (positions[i] !== null) {
            canHighlight = false;
            break;
          }
        }

        // If we can highlight this range, mark all positions
        if (canHighlight) {
          for (let i = start; i < end; i++) {
            positions[i] = {
              text: highlight.text,
              explanation: highlight.explanation,
              highlightIndex,
            };
          }
        }
      }
    });

    // Convert positions array into segments
    const segments: {
      text: string;
      isHighlight: boolean;
      explanation?: string;
      highlightIndex?: number;
    }[] = [];

    let currentSegment: (typeof segments)[0] | null = null;

    for (let i = 0; i < code.length; i++) {
      const pos = positions[i];

      if (
        !currentSegment ||
        currentSegment.isHighlight !== !!pos ||
        (pos && currentSegment.highlightIndex !== pos.highlightIndex)
      ) {
        if (currentSegment) {
          segments.push(currentSegment);
        }
        currentSegment = {
          text: code[i],
          isHighlight: !!pos,
          explanation: pos?.explanation,
          highlightIndex: pos?.highlightIndex,
        };
      } else {
        currentSegment.text += code[i];
      }
    }

    if (currentSegment) {
      segments.push(currentSegment);
    }

    // Render segments
    return (
      <code className="text-gray-800 dark:text-gray-200">
        {segments.map((segment, idx) =>
          segment.isHighlight ? (
            <span
              key={`highlight-${idx}`}
              className="bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded px-1 font-bold group relative"
              title={segment.explanation || ""}
            >
              {segment.text}
              {segment.explanation && (
                <span className="absolute -top-10 left-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2 rounded text-xs text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity w-max max-w-48 shadow-md pointer-events-none z-10">
                  {segment.explanation}
                </span>
              )}
            </span>
          ) : (
            <span key={`plain-${idx}`}>{segment.text}</span>
          )
        )}
      </code>
    );
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 ">
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
      <pre className="p-4 text-sm font-mono overflow-x-auto whitespace-pre-wrap max-h-[500px] overflow-y-auto">
        {renderHighlightedCode()}
      </pre>
    </div>
  );
}
