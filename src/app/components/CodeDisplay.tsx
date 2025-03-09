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
          className={`bg-amber-200 dark:bg-amber-800/60 text-amber-900 dark:text-amber-100 rounded px-1.5 font-semibold relative cursor-help`}
          onMouseEnter={(e) => {
            const tooltip = e.currentTarget.querySelector(
              '[role="tooltip"]'
            ) as HTMLElement;
            if (tooltip) {
              const rect = e.currentTarget.getBoundingClientRect();
              const tooltipRect = tooltip.getBoundingClientRect();

              // Position above by default
              let top = rect.top - tooltipRect.height - 10;
              let left = rect.left + (rect.width - tooltipRect.width) / 2;

              // If would be clipped at top, position below instead
              if (top < 10) {
                top = rect.bottom + 10;
                tooltip.classList.add("tooltip-below");
              } else {
                tooltip.classList.remove("tooltip-below");
              }

              // Ensure left edge stays in viewport
              left = Math.max(
                10,
                Math.min(left, window.innerWidth - tooltipRect.width - 10)
              );

              tooltip.style.left = `${left}px`;
              tooltip.style.top = `${top}px`;
              tooltip.style.opacity = "1";
            }
          }}
          onMouseLeave={(e) => {
            const tooltip = e.currentTarget.querySelector(
              '[role="tooltip"]'
            ) as HTMLElement;
            if (tooltip) {
              tooltip.style.opacity = "0";
            }
          }}
        >
          {highlight.originalText}
          {highlight.explanation && (
            <span
              role="tooltip"
              className="fixed bg-white dark:bg-gray-900 border-2 border-amber-200 dark:border-amber-800 p-2.5 rounded-lg text-xs text-gray-800 dark:text-gray-100 opacity-0 transition-opacity duration-150 shadow-lg pointer-events-none z-50 max-w-[300px] before:content-[''] before:absolute before:w-3 before:h-3 before:bg-inherit before:border-l-2 before:border-t-2 before:border-amber-200 before:dark:border-amber-800 before:rotate-45 before:-bottom-[7px] before:left-1/2 before:-translate-x-1/2 before:z-[-1] tooltip-below:before:rotate-[225deg] tooltip-below:before:-top-[7px] tooltip-below:before:bottom-auto"
            >
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
