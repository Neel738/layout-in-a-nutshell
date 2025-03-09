import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16 py-10">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
          Master Flexbox & Grid with Tailwind CSS
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A comprehensive visual guide to understanding and implementing
          responsive layouts using Tailwind&apos;s utility classes.
        </p>
      </section>

      {/* Card Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Link href="/flexbox" className="group">
          <div className="h-full p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/40 dark:to-indigo-900/20 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                Flexbox
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Learn how to create one-dimensional layouts with Flexbox,
                perfect for arranging items in rows or columns.
              </p>
              <div className="mt-auto">
                <p className="inline-flex items-center font-semibold text-indigo-600 dark:text-indigo-400">
                  Explore Flexbox
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/grid" className="group">
          <div className="h-full p-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/20 shadow-sm hover:shadow-md transition duration-300">
            <div className="flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                Grid
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Discover how to build complex two-dimensional layouts with Grid,
                ideal for creating responsive page structures.
              </p>
              <div className="mt-auto">
                <p className="inline-flex items-center font-semibold text-purple-600 dark:text-purple-400">
                  Explore Grid
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Features Section */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Why Learn Flexbox & Grid?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Responsive Layouts</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Easily create layouts that adapt to any screen size without
              writing complex media queries.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Modern Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Implement contemporary UIs used by top websites with powerful
              layout capabilities.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Simplified Workflow</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Reduce CSS complexity with Tailwind&apos;s intuitive utility
              classes for layout management.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
