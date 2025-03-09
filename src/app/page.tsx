import Link from "next/link";
import ConceptCard from "./components/ConceptCard";

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

      {/* Core CSS Layout Concepts */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
          Core CSS Layout Concepts
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <ConceptCard
            title="What is a Gap?"
            description="Gap creates space between elements without adding margins. Think of it like an invisible spacer that keeps things neatly apart - just like the space between train cars."
            example={`/* CSS */
.container {
  gap: 1rem;  /* Adds 1rem of space between all items */
}

/* Tailwind */
<div className="gap-4">  <!-- 1rem of space between items -->
  <div>Item 1</div>
  <div>Item 2</div>
</div>`}
            color="indigo"
            icon={
              <svg
                className="w-8 h-8 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                ></path>
              </svg>
            }
          />

          <ConceptCard
            title="What is Spacing?"
            description="Spacing helps organize content by controlling the distance between elements. It's like making sure there's enough room between books on a shelf so you can easily grab the one you want."
            example={`/* Tailwind classes for spacing */
p-4    /* Padding on all sides */
px-4   /* Horizontal padding (left and right) */
py-4   /* Vertical padding (top and bottom) */
m-4    /* Margin on all sides */
mx-4   /* Horizontal margin */
my-4   /* Vertical margin */`}
            color="purple"
            icon={
              <svg
                className="w-8 h-8 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                ></path>
              </svg>
            }
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ConceptCard
            title="One vs Two Dimensional Layout"
            description="Flexbox works in one direction (like a line of people), while Grid works in two dimensions (like a chess board). Flexbox is perfect for rows or columns, while Grid excels at complex layouts with rows AND columns."
            example={`/* Flexbox - One dimension */
<div className="flex">  <!-- Items arranged in a row -->
  <div>Item 1</div>
  <div>Item 2</div>
</div>

/* Grid - Two dimensions */
<div className="grid grid-cols-3 grid-rows-2">  <!-- 3×2 grid -->
  <div>Item 1</div>
  <div>Item 2</div>
  <!-- ... -->
</div>`}
            color="blue"
            icon={
              <svg
                className="w-8 h-8 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
            }
          />

          <ConceptCard
            title="Alignment vs Justification"
            description="Alignment controls positioning along the cross axis, while justification controls the main axis. Think of it like a bookshelf: justification arranges books across the shelf, while alignment controls how tall books are positioned vertically."
            example={`/* In a horizontal flexbox: */
justify-start   /* Position items at the start (left) */
justify-center  /* Center items horizontally */
justify-end     /* Position items at the end (right) */

items-start     /* Align items at the top */
items-center    /* Center items vertically */
items-end       /* Align items at the bottom */`}
            color="indigo"
            icon={
              <svg
                className="w-8 h-8 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            }
          />
        </div>
      </section>

      {/* Why Learn Section */}
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
