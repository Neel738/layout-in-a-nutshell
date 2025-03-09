interface ConceptCardProps {
  title: string;
  description: string;
  example: string;
  color: "indigo" | "purple" | "blue";
  icon?: React.ReactNode;
}

export default function ConceptCard({
  title,
  description,
  example,
  color,
  icon,
}: ConceptCardProps) {
  const colorClasses = {
    indigo: {
      bg: "bg-indigo-50 dark:bg-indigo-950/30",
      border: "border-indigo-100 dark:border-indigo-900/40",
      text: "text-indigo-800 dark:text-indigo-300",
      gradient: "from-indigo-500 to-indigo-600",
      code: {
        bg: "bg-indigo-100/50 dark:bg-indigo-900/20",
        text: "text-indigo-800 dark:text-indigo-300",
      },
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-950/30",
      border: "border-purple-100 dark:border-purple-900/40",
      text: "text-purple-800 dark:text-purple-300",
      gradient: "from-purple-500 to-purple-600",
      code: {
        bg: "bg-purple-100/50 dark:bg-purple-900/20",
        text: "text-purple-800 dark:text-purple-300",
      },
    },
    blue: {
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-100 dark:border-blue-900/40",
      text: "text-blue-800 dark:text-blue-300",
      gradient: "from-blue-500 to-blue-600",
      code: {
        bg: "bg-blue-100/50 dark:bg-blue-900/20",
        text: "text-blue-800 dark:text-blue-300",
      },
    },
  };

  const colorStyle = colorClasses[color];

  return (
    <div
      className={`p-6 rounded-xl ${colorStyle.bg} border ${colorStyle.border} shadow-sm`}
    >
      <div className="flex items-start space-x-4 mb-4">
        {icon && <div className="mt-1">{icon}</div>}
        <div>
          <h3 className={`text-xl font-bold mb-2 ${colorStyle.text}`}>
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className={`rounded-lg ${colorStyle.code.bg} p-4 overflow-x-auto`}>
          <pre className={`text-sm font-mono ${colorStyle.code.text}`}>
            <code>{example}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
