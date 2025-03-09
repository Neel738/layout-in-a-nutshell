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
          className={`bg-amber-200 dark:bg-amber-800/60 text-amber-900 dark:text-amber-100 rounded px-1.5 font-semibold group relative shadow-sm`}
          title={highlight.explanation || ""}
        >
          {highlight.originalText}
          {highlight.explanation && (
            <span className="absolute -top-16 left-0 bg-white dark:bg-gray-900 border-2 border-amber-200 dark:border-amber-800 p-2.5 rounded-lg text-xs text-gray-800 dark:text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity w-max max-w-[300px] shadow-lg pointer-events-none z-10">
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
    <div className="overflow-x-auto rounded-lg bg-gray-100 dark:bg-gray-950 border-2 border-gray-300 dark:border-gray-700 shadow-md">
      <pre className="p-5 text-sm font-mono text-gray-900 dark:text-gray-100 overflow-x-auto whitespace-pre-wrap">
        {renderHighlightedCode()}
      </pre>
    </div>
  );
}
