"use client";

import { useState } from "react";

interface CopyableCodeProps {
  code: string;
  language?: string;
}

export default function CopyableCode({
  code,
  language = "jsx",
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

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {language}
        </span>
        <button
          onClick={copyToClipboard}
          className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
