import CodeDisplay from "./CodeDisplay";

interface SubSectionProps {
  title: string;
  description?: string;
  code?: string;
  highlightedParts?: {
    text: string;
    explanation?: string;
  }[];
  children: React.ReactNode;
}

const SubSection = ({
  title,
  description,
  code,
  highlightedParts,
  children,
}: SubSectionProps) => {
  return (
    <div
      className="mb-12 last:mb-0 scroll-mt-20"
      id={title.toLowerCase().replace(/\s+/g, "-")}
    >
      <h3 className="text-xl font-bold mb-3 text-indigo-700 dark:text-indigo-400">
        {title}
      </h3>
      {description && (
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      )}

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="p-6 bg-gradient-to-tr from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl border border-indigo-100 dark:border-indigo-900/40 shadow-sm">
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
              Demo
            </h4>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-inner min-h-[180px] flex items-center justify-center">
            {children}
          </div>
        </div>

        {code && (
          <div>
            <h4 className="text-sm font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
              Code
            </h4>
            <CodeDisplay code={code} highlightedParts={highlightedParts} />
          </div>
        )}
      </div>
    </div>
  );
};

interface SectionProps {
  title: string;
  description: string;
  intro?: string;
  children: React.ReactNode;
}

export default function Section({
  title,
  description,
  intro,
  children,
}: SectionProps) {
  return (
    <section
      className="mb-20 scroll-mt-20"
      id={title.toLowerCase().replace(/\s+/g, "-")}
    >
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
        {description}
      </p>

      {intro && (
        <div className="mb-10 p-6 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-100 dark:border-blue-900/40">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">
            Quick Explanation
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{intro}</p>
        </div>
      )}

      <div className="mt-10">{children}</div>
    </section>
  );
}

export { SubSection };
