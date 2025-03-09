"use client";
import { useState } from "react";
import Section, { SubSection } from "../components/Section";

// Demo Components
const Box = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`flex items-center justify-center p-4 bg-gradient-to-r from-indigo-400 to-indigo-500 text-white rounded-md shadow-sm ${className}`}
  >
    {children}
  </div>
);

// New component for explaining main and cross axis
const AxisExplanation = () => {
  const [direction, setDirection] = useState<"row" | "column">("row");

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400">
          Understanding Flexbox Axes
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Flexbox operates on two axes: the{" "}
          <span className="font-bold text-amber-600 dark:text-amber-400">
            main axis
          </span>{" "}
          and the{" "}
          <span className="font-bold text-emerald-600 dark:text-emerald-400">
            cross axis
          </span>
          . These axes determine how items are positioned and aligned.
        </p>

        <div className="flex gap-4 mb-2">
          <button
            onClick={() => setDirection("row")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              direction === "row"
                ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            Row Direction
          </button>
          <button
            onClick={() => setDirection("column")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              direction === "column"
                ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            Column Direction
          </button>
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
        <div className="flex mb-4 gap-2">
          <div className="flex-1">
            <div className="text-lg font-bold mb-2">
              Direction: {direction === "row" ? "Row (Default)" : "Column"}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {direction === "row"
                ? "In row direction, the main axis runs horizontally (left to right) and the cross axis runs vertically."
                : "In column direction, the main axis runs vertically (top to bottom) and the cross axis runs horizontally."}
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Container that visually shows the axis */}
          <div
            className={`relative w-full h-64 p-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex ${
              direction === "row" ? "flex-row" : "flex-col"
            } items-center justify-center gap-4`}
          >
            {/* Main axis arrow */}
            <div
              className={`absolute ${
                direction === "row"
                  ? "left-0 right-0 top-2"
                  : "top-0 bottom-0 left-2"
              } flex items-center justify-center`}
            >
              <div
                className={`relative ${
                  direction === "row"
                    ? "w-[calc(100%-16px)]"
                    : "h-[calc(100%-16px)]"
                }`}
              >
                <div
                  className={`absolute ${
                    direction === "row" ? "w-full h-0.5" : "h-full w-0.5"
                  } bg-amber-500 dark:bg-amber-400`}
                ></div>
                <div
                  className={`absolute ${
                    direction === "row"
                      ? "right-0 -translate-y-1.5 border-l-8 border-y-8 border-y-transparent border-l-amber-500 dark:border-l-amber-400"
                      : "bottom-0 -translate-x-1.5 border-t-8 border-x-8 border-x-transparent border-t-amber-500 dark:border-t-amber-400"
                  }`}
                ></div>
                <div
                  className={`absolute ${
                    direction === "row"
                      ? "right-7 -translate-y-7"
                      : "bottom-7 -translate-x-8"
                  } text-sm font-bold text-amber-600 dark:text-amber-400`}
                >
                  Main Axis
                </div>
              </div>
            </div>

            {/* Cross axis arrow */}
            <div
              className={`absolute ${
                direction === "row"
                  ? "top-0 bottom-0 left-2"
                  : "left-0 right-0 top-2"
              } flex items-center justify-center`}
            >
              <div
                className={`relative ${
                  direction === "row"
                    ? "h-[calc(100%-16px)]"
                    : "w-[calc(100%-16px)]"
                }`}
              >
                <div
                  className={`absolute ${
                    direction === "row" ? "h-full w-0.5" : "w-full h-0.5"
                  } bg-emerald-500 dark:bg-emerald-400`}
                ></div>
                <div
                  className={`absolute ${
                    direction === "row"
                      ? "bottom-0 -translate-x-1.5 border-t-8 border-x-8 border-x-transparent border-t-emerald-500 dark:border-t-emerald-400"
                      : "right-0 -translate-y-1.5 border-l-8 border-y-8 border-y-transparent border-l-emerald-500 dark:border-l-emerald-400"
                  }`}
                ></div>
                <div
                  className={`absolute ${
                    direction === "row"
                      ? "bottom-7 -translate-x-9"
                      : "right-7 -translate-y-7"
                  } text-sm font-bold text-emerald-600 dark:text-emerald-400`}
                >
                  Cross Axis
                </div>
              </div>
            </div>

            {/* Flexbox items */}
            <div className="w-16 h-16 bg-indigo-400 dark:bg-indigo-600 rounded-lg shadow flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="w-16 h-16 bg-indigo-500 dark:bg-indigo-500 rounded-lg shadow flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="w-16 h-16 bg-indigo-600 dark:bg-indigo-400 rounded-lg shadow flex items-center justify-center text-white font-bold">
              3
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-amber-100 dark:bg-amber-900/40 flex-shrink-0 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-amber-600 dark:text-amber-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className="font-medium">justify-content</div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Controls alignment along the{" "}
                <span className="text-amber-600 dark:text-amber-400 font-bold">
                  main axis
                </span>{" "}
                (how items are positioned from start to end)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex-shrink-0 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className="font-medium">align-items</div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Controls alignment along the{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                  cross axis
                </span>{" "}
                (how items are positioned perpendicular to the main axis)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FlexboxPage() {
  // Define sections for the sidebar navigation
  const sections = [
    { id: "understanding-axes", title: "Understanding Axes" },
    { id: "display-and-direction", title: "Display & Direction" },
    { id: "justify-content", title: "Justify Content" },
    { id: "align-items", title: "Align Items" },
    { id: "flex-wrap", title: "Flex Wrap" },
    { id: "flex-grow-shrink", title: "Grow & Shrink" },
    { id: "responsive-flexbox", title: "Responsive Flexbox" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Side Navigation - Hidden on mobile, visible on large screens */}
      <div className="lg:w-64 shrink-0">
        <div className="lg:sticky lg:top-24 p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900">
          <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100">
            Flexbox Guide
          </h3>
          <nav className="space-y-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block px-3 py-2 text-sm rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-12">
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-transparent bg-clip-text">
            Flexbox in Tailwind CSS
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Flexbox is a powerful one-dimensional layout system ideal for
            arranging items in rows or columns with precise alignment and
            distribution controls.
          </p>
        </header>

        {/* Understanding Axes Section */}
        <div id="understanding-axes" className="scroll-mt-24">
          <AxisExplanation />
        </div>

        <div className="space-y-16">
          {/* Display Direction */}
          <Section
            title="Display and Direction"
            description="Control how elements are displayed and the direction of your flex container."
            intro="Flexbox lets you arrange items in a row or column. You can even reverse the order! Think of it like organizing toys in a line - you can place them left-to-right, right-to-left, top-to-bottom, or bottom-to-top."
          >
            <div id="display-and-direction" className="scroll-mt-24"></div>
            <SubSection
              title="Flex (Default Row Direction)"
              description="Items are arranged horizontally from left to right by default."
              code={`<div className="flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
              highlightedParts={[
                {
                  text: "flex",
                  explanation:
                    "This activates Flexbox layout with default row direction",
                },
              ]}
            >
              <div className="flex gap-2 w-full">
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
              </div>
            </SubSection>

            <SubSection
              title="Flex Row Reverse"
              description="Items are arranged horizontally from right to left."
              code={`<div className="flex flex-row-reverse">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
              highlightedParts={[
                {
                  text: "flex-row-reverse",
                  explanation: "Reverses the order of items in the row",
                },
              ]}
            >
              <div className="flex flex-row-reverse gap-2 w-full">
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
              </div>
            </SubSection>

            <SubSection
              title="Flex Column"
              description="Items are arranged vertically from top to bottom."
              code={`<div className="flex flex-col">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
              highlightedParts={[
                {
                  text: "flex-col",
                  explanation:
                    "Arranges items in a column (vertical) direction",
                },
              ]}
            >
              <div className="flex flex-col gap-2 w-full">
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
              </div>
            </SubSection>

            <SubSection
              title="Flex Column Reverse"
              description="Items are arranged vertically from bottom to top."
              code={`<div className="flex flex-col-reverse">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
              highlightedParts={[
                {
                  text: "flex-col-reverse",
                  explanation:
                    "Arranges items in a column with reversed order (bottom to top)",
                },
              ]}
            >
              <div className="flex flex-col-reverse gap-2 w-full">
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
              </div>
            </SubSection>
          </Section>

          {/* Justify Content */}
          <Section
            title="Justify Content"
            description="Align items along the main axis (horizontal in row, vertical in column)."
            intro="Justification controls how items are positioned along the main axis. Think of it like arranging books on a shelf - you can push them all to the left, center them, push them to the right, or space them evenly."
          >
            <div id="justify-content" className="scroll-mt-24"></div>
            <SubSection
              title="Justify Start"
              description="Items are positioned at the start of the container (left edge in LTR languages)."
              code={`<div className="flex justify-start">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
              highlightedParts={[
                {
                  text: "justify-start",
                  explanation: "Aligns items at the beginning of the container",
                },
              ]}
            >
              <div className="flex justify-start gap-2 w-full border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="w-20">1</Box>
                <Box className="w-20">2</Box>
                <Box className="w-20">3</Box>
              </div>
            </SubSection>

            <SubSection
              title="Justify Center"
              description="Items are centered along the main axis."
              code={`<div className="flex justify-center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
              highlightedParts={[
                {
                  text: "justify-center",
                  explanation: "Centers items horizontally in a row layout",
                },
              ]}
            >
              <div className="flex justify-center gap-2 w-full border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="w-20">1</Box>
                <Box className="w-20">2</Box>
                <Box className="w-20">3</Box>
              </div>
            </SubSection>

            <SubSection
              title="Justify End"
              description="Items are positioned at the end of the container (right edge in LTR languages)."
              code={`<div className="flex justify-end">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
              highlightedParts={[
                {
                  text: "justify-end",
                  explanation: "Aligns items at the end of the container",
                },
              ]}
            >
              <div className="flex justify-end gap-2 w-full border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="w-20">1</Box>
                <Box className="w-20">2</Box>
                <Box className="w-20">3</Box>
              </div>
            </SubSection>

            <SubSection
              title="Justify Between"
              description="Items are evenly distributed with the first item at the start and the last item at the end."
              code={`<div className="flex justify-between">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
              highlightedParts={[
                {
                  text: "justify-between",
                  explanation:
                    "Creates equal space between items, with no space at edges",
                },
              ]}
            >
              <div className="flex justify-between w-full border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="w-20">1</Box>
                <Box className="w-20">2</Box>
                <Box className="w-20">3</Box>
              </div>
            </SubSection>

            <SubSection
              title="Justify Around"
              description="Items are evenly distributed with equal space around them."
              code={`<div className="flex justify-around">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
              highlightedParts={[
                {
                  text: "justify-around",
                  explanation: "Creates equal space around each item",
                },
              ]}
            >
              <div className="flex justify-around w-full border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="w-20">1</Box>
                <Box className="w-20">2</Box>
                <Box className="w-20">3</Box>
              </div>
            </SubSection>

            <SubSection
              title="Justify Evenly"
              description="Items are evenly distributed with equal space between them."
              code={`<div className="flex justify-evenly">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
              highlightedParts={[
                {
                  text: "justify-evenly",
                  explanation:
                    "Creates perfectly even spacing between items and at the edges",
                },
              ]}
            >
              <div className="flex justify-evenly w-full border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="w-20">1</Box>
                <Box className="w-20">2</Box>
                <Box className="w-20">3</Box>
              </div>
            </SubSection>
          </Section>

          {/* Align Items */}
          <Section
            title="Align Items"
            description="Align items along the cross axis (vertical in row, horizontal in column)."
            intro="Alignment controls how items are positioned along the cross axis. Imagine hanging pictures on a wall - you can align them at the top, center them vertically, or align them at the bottom."
          >
            <div id="align-items" className="scroll-mt-24"></div>
            <SubSection
              title="Items Start"
              description="Items are aligned at the start of the cross axis (top in row layout)."
              code={`<div className="flex items-start">
  <div className="h-16">Short</div>
  <div className="h-24">Medium</div>
  <div className="h-32">Tall</div>
</div>`}
              highlightedParts={[
                {
                  text: "items-start",
                  explanation: "Aligns items at the top in a row layout",
                },
              ]}
            >
              <div className="flex items-start gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 h-32 rounded w-full">
                <Box className="h-16">Short</Box>
                <Box className="h-24">Medium</Box>
                <Box className="h-28">Tall</Box>
              </div>
            </SubSection>

            <SubSection
              title="Items Center"
              description="Items are centered along the cross axis."
              code={`<div className="flex items-center">
  <div className="h-16">Short</div>
  <div className="h-24">Medium</div>
  <div className="h-32">Tall</div>
</div>`}
              highlightedParts={[
                {
                  text: "items-center",
                  explanation: "Centers items vertically in a row layout",
                },
              ]}
            >
              <div className="flex items-center gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 h-32 rounded w-full">
                <Box className="h-16">Short</Box>
                <Box className="h-24">Medium</Box>
                <Box className="h-28">Tall</Box>
              </div>
            </SubSection>

            <SubSection
              title="Items End"
              description="Items are aligned at the end of the cross axis (bottom in row layout)."
              code={`<div className="flex items-end">
  <div className="h-16">Short</div>
  <div className="h-24">Medium</div>
  <div className="h-32">Tall</div>
</div>`}
              highlightedParts={[
                {
                  text: "items-end",
                  explanation: "Aligns items at the bottom in a row layout",
                },
              ]}
            >
              <div className="flex items-end gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 h-32 rounded w-full">
                <Box className="h-16">Short</Box>
                <Box className="h-24">Medium</Box>
                <Box className="h-28">Tall</Box>
              </div>
            </SubSection>

            <SubSection
              title="Items Stretch"
              description="Items are stretched to fill the container along the cross axis."
              code={`<div className="flex items-stretch h-32">
  <div>Auto height</div>
  <div>Auto height</div>
  <div>Auto height</div>
</div>`}
              highlightedParts={[
                {
                  text: "items-stretch",
                  explanation: "Stretches items to fill the container height",
                },
              ]}
            >
              <div className="flex items-stretch gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 h-32 rounded w-full">
                <Box>Auto</Box>
                <Box>Auto</Box>
                <Box>Auto</Box>
              </div>
            </SubSection>
          </Section>

          {/* Flex Wrap */}
          <Section
            title="Flex Wrap"
            description="Control whether items can wrap to multiple lines or are forced onto a single line."
            intro="Flex wrap determines whether items stay in a single line or wrap to new lines when they run out of space. Think of it like text - sometimes you want it all on one line, and sometimes you want it to wrap to fit its container."
          >
            <div id="flex-wrap" className="scroll-mt-24"></div>
            <SubSection
              title="Flex No Wrap (Default)"
              description="All items are forced onto a single line, which may cause overflow."
              code={`<div className="flex flex-nowrap">
  <!-- All items will stay on a single line -->
  <div>Item 1</div>
  <div>Item 2</div>
  <!-- And so on -->
</div>`}
              highlightedParts={[
                {
                  text: "flex-nowrap",
                  explanation:
                    "Forces all items to stay on a single line (default behavior)",
                },
              ]}
            >
              <div className="flex flex-nowrap gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded w-full overflow-x-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <Box key={n} className="w-24 flex-shrink-0">
                    {n}
                  </Box>
                ))}
              </div>
            </SubSection>

            <SubSection
              title="Flex Wrap"
              description="Items wrap to multiple lines if needed."
              code={`<div className="flex flex-wrap">
  <!-- Items will wrap to new lines as needed -->
  <div>Item 1</div>
  <div>Item 2</div>
  <!-- And so on -->
</div>`}
              highlightedParts={[
                {
                  text: "flex-wrap",
                  explanation:
                    "Allows items to wrap to multiple lines when needed",
                },
              ]}
            >
              <div className="flex flex-wrap gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded w-full">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <Box key={n} className="w-24">
                    {n}
                  </Box>
                ))}
              </div>
            </SubSection>

            <SubSection
              title="Flex Wrap Reverse"
              description="Items wrap to multiple lines in reverse order."
              code={`<div className="flex flex-wrap-reverse">
  <!-- Items will wrap to new lines in reverse order -->
  <div>Item 1</div>
  <div>Item 2</div>
  <!-- And so on -->
</div>`}
              highlightedParts={[
                {
                  text: "flex-wrap-reverse",
                  explanation:
                    "Wraps items to multiple lines but in reverse order (bottom to top)",
                },
              ]}
            >
              <div className="flex flex-wrap-reverse gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded w-full">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <Box key={n} className="w-24">
                    {n}
                  </Box>
                ))}
              </div>
            </SubSection>
          </Section>

          {/* Flex Grow & Shrink */}
          <Section
            title="Flex Grow & Shrink"
            description="Control how flex items grow and shrink to fill the available space."
            intro="Flex grow and shrink control how items resize when there's extra space or not enough space. It's like sharing a pizza - some people might get bigger slices (grow more) while others get smaller slices."
          >
            <div id="flex-grow-shrink" className="scroll-mt-24"></div>
            <SubSection
              title="Flex Grow"
              description="Controls how much an item can grow relative to other items."
              code={`<div className="flex">
  <div className="flex-grow-0">Won't grow</div>
  <div className="flex-grow">Will grow to fill space</div>
  <div className="flex-grow-0">Won't grow</div>
</div>`}
              highlightedParts={[
                {
                  text: "flex-grow-0",
                  explanation:
                    "Item will not grow to fill extra space (default)",
                },
                {
                  text: "flex-grow",
                  explanation: "Item will grow to fill any available space",
                },
              ]}
            >
              <div className="flex gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded w-full">
                <Box className="w-20 flex-grow-0">grow-0</Box>
                <Box className="w-20 flex-grow">grow</Box>
                <Box className="w-20 flex-grow-0">grow-0</Box>
              </div>
            </SubSection>

            <SubSection
              title="Flex Grow Values"
              description="Higher flex-grow values make items grow more than others."
              code={`<div className="flex">
  <div className="flex-grow">Grow: 1</div>
  <div className="flex-grow-[2]">Grow: 2</div>
  <div className="flex-grow-[3]">Grow: 3</div>
</div>`}
              highlightedParts={[
                {
                  text: "flex-grow",
                  explanation: "Default growth factor of 1",
                },
                {
                  text: "flex-grow-[2]",
                  explanation: "Grows twice as much as flex-grow",
                },
                {
                  text: "flex-grow-[3]",
                  explanation: "Grows three times as much as flex-grow",
                },
              ]}
            >
              <div className="flex gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded w-full">
                <Box className="w-12 flex-grow">grow</Box>
                <Box className="w-12 flex-grow-[2]">grow-[2]</Box>
                <Box className="w-12 flex-grow-[3]">grow-[3]</Box>
              </div>
            </SubSection>

            <SubSection
              title="Flex Shrink"
              description="Controls how much an item can shrink when there's not enough space."
              code={`<div className="flex w-64">
  <div className="w-40 flex-shrink">Will shrink</div>
  <div className="w-40 flex-shrink-0">Won't shrink</div>
</div>`}
              highlightedParts={[
                {
                  text: "flex-shrink",
                  explanation: "Item will shrink if needed (default)",
                },
                {
                  text: "flex-shrink-0",
                  explanation:
                    "Item will not shrink even if it causes overflow",
                },
              ]}
            >
              <div className="flex border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded w-64 overflow-hidden">
                <Box className="w-40 flex-shrink">shrink</Box>
                <Box className="w-40 flex-shrink-0">shrink-0</Box>
              </div>
            </SubSection>
          </Section>

          {/* Responsive Layouts */}
          <Section
            title="Responsive Flexbox"
            description="Apply different flexbox properties at various screen sizes using Tailwind's responsive prefixes."
            intro="Responsive design lets you change how elements are arranged at different screen sizes. It's like having furniture that automatically rearranges when you move to a smaller room."
          >
            <div id="responsive-flexbox" className="scroll-mt-24"></div>
            <SubSection
              title="Responsive Direction"
              description="Change flex direction based on screen size."
              code={`<div className="flex flex-col md:flex-row">
  <!-- Column layout on small screens -->
  <!-- Row layout on medium screens and up -->
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
              highlightedParts={[
                {
                  text: "flex-col",
                  explanation: "Items stack vertically on mobile",
                },
                {
                  text: "md:flex-row",
                  explanation:
                    "Items arrange horizontally on medium screens and up",
                },
              ]}
            >
              <div className="flex flex-col md:flex-row gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded w-full">
                <Box className="md:w-1/3">Resize the browser!</Box>
                <Box className="md:w-1/3">Stacked on mobile</Box>
                <Box className="md:w-1/3">Row on desktop</Box>
              </div>
            </SubSection>

            <SubSection
              title="Responsive Justify Content"
              description="Change justification based on screen size."
              code={`<div className="flex flex-col justify-start 
     sm:flex-row sm:justify-between 
     md:justify-around 
     lg:justify-evenly">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
              highlightedParts={[
                {
                  text: "sm:justify-between",
                  explanation: "Items have space between them on small screens",
                },
                {
                  text: "md:justify-around",
                  explanation: "Items have space around them on medium screens",
                },
                {
                  text: "lg:justify-evenly",
                  explanation: "Items have equal spacing on large screens",
                },
              ]}
            >
              <div className="flex flex-col justify-start sm:flex-row sm:justify-between md:justify-around lg:justify-evenly gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded w-full">
                <Box className="w-20">1</Box>
                <Box className="w-20">2</Box>
                <Box className="w-20">3</Box>
              </div>
            </SubSection>
          </Section>
        </div>
      </div>
    </div>
  );
}
