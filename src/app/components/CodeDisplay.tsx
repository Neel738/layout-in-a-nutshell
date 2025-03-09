interface CodeDisplayProps {
  code: string;
  highlightedParts?: {
    text: string;
    explanation?: string;
  }[];
}

export default function CodeDisplay({
  code,
  highlightedParts = [],
}: CodeDisplayProps) {
  // Function to highlight specific parts of the code
  const renderHighlightedCode = () => {
    if (!highlightedParts.length) {
      return <code>{code}</code>;
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
          className={`bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 rounded px-1 font-semibold group relative`}
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

    return <code>{parts}</code>;
  };

  return (
    <div className="overflow-x-auto rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
      <pre className="p-4 text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto whitespace-pre-wrap">
        {renderHighlightedCode()}
      </pre>
    </div>
  );
}
