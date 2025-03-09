import CodeDisplay from "./CodeDisplay";

interface SectionProps {
  title: string;
  description: string;
  code: string;
  children: React.ReactNode;
}

export default function Section({
  title,
  description,
  code,
  children,
}: SectionProps) {
  return (
    <section
      className="mb-16 scroll-mt-20"
      id={title.toLowerCase().replace(/\s+/g, "-")}
    >
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="p-6 bg-gradient-to-tr from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl border border-indigo-100 dark:border-indigo-900/40 shadow-sm">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
              Demo
            </h3>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-inner min-h-[200px] flex items-center justify-center">
            {children}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
            Code
          </h3>
          <CodeDisplay code={code} />
        </div>
      </div>
    </section>
  );
}
