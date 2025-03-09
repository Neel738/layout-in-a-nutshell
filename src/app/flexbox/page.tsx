"use client";
import Section from "../components/Section";

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

export default function FlexboxPage() {
  return (
    <div className="space-y-12">
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

      <div className="space-y-16">
        {/* Display Direction */}
        <Section
          title="Display and Direction"
          description="Control how elements are displayed and the direction of your flex container."
          code={`<div className="flex">
  <!-- By default, flex arranges items in a row -->
</div>

<div className="flex-row">
  <!-- Explicitly set row direction -->
</div>

<div className="flex-row-reverse">
  <!-- Reverse item order in a row -->
</div>

<div className="flex-col">
  <!-- Arrange items in a column -->
</div>

<div className="flex-col-reverse">
  <!-- Reverse item order in a column -->
</div>`}
        >
          <div className="space-y-8 w-full">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                flex (default)
              </p>
              <div className="flex mb-4 gap-2">
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                flex-row-reverse
              </p>
              <div className="flex flex-row-reverse mb-4 gap-2">
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">flex-col</p>
              <div className="flex flex-col mb-4 gap-2">
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                flex-col-reverse
              </p>
              <div className="flex flex-col-reverse mb-4 gap-2">
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
              </div>
            </div>
          </div>
        </Section>

        {/* Justify Content */}
        <Section
          title="Justify Content"
          description="Align items along the main axis (horizontal in row, vertical in column)."
          code={`<div className="flex justify-start">
  <!-- Align items at the start -->
</div>

<div className="flex justify-center">
  <!-- Align items at the center -->
</div>

<div className="flex justify-end">
  <!-- Align items at the end -->
</div>

<div className="flex justify-between">
  <!-- Distribute items with space between -->
</div>

<div className="flex justify-around">
  <!-- Distribute items with space around -->
</div>

<div className="flex justify-evenly">
  <!-- Distribute items with equal spacing -->
</div>`}
        >
          <div className="space-y-8 w-full">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                justify-start
              </p>
              <div className="flex justify-start mb-4 gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="w-16">1</Box>
                <Box className="w-16">2</Box>
                <Box className="w-16">3</Box>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                justify-center
              </p>
              <div className="flex justify-center mb-4 gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="w-16">1</Box>
                <Box className="w-16">2</Box>
                <Box className="w-16">3</Box>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                justify-end
              </p>
              <div className="flex justify-end mb-4 gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="w-16">1</Box>
                <Box className="w-16">2</Box>
                <Box className="w-16">3</Box>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                justify-between
              </p>
              <div className="flex justify-between mb-4 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="w-16">1</Box>
                <Box className="w-16">2</Box>
                <Box className="w-16">3</Box>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                justify-around
              </p>
              <div className="flex justify-around mb-4 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="w-16">1</Box>
                <Box className="w-16">2</Box>
                <Box className="w-16">3</Box>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                justify-evenly
              </p>
              <div className="flex justify-evenly mb-4 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="w-16">1</Box>
                <Box className="w-16">2</Box>
                <Box className="w-16">3</Box>
              </div>
            </div>
          </div>
        </Section>

        {/* Align Items */}
        <Section
          title="Align Items"
          description="Align items along the cross axis (vertical in row, horizontal in column)."
          code={`<div className="flex items-start">
  <!-- Align items at the start of the cross axis -->
</div>

<div className="flex items-center">
  <!-- Align items at the center of the cross axis -->
</div>

<div className="flex items-end">
  <!-- Align items at the end of the cross axis -->
</div>

<div className="flex items-baseline">
  <!-- Align items along their baselines -->
</div>

<div className="flex items-stretch">
  <!-- Stretch items to fill the container -->
</div>`}
        >
          <div className="space-y-8 w-full">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                items-start
              </p>
              <div className="flex items-start mb-4 gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 h-32 rounded">
                <Box className="h-16">Short</Box>
                <Box className="h-24">Medium</Box>
                <Box className="h-28">Tall</Box>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                items-center
              </p>
              <div className="flex items-center mb-4 gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 h-32 rounded">
                <Box className="h-16">Short</Box>
                <Box className="h-24">Medium</Box>
                <Box className="h-28">Tall</Box>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                items-end
              </p>
              <div className="flex items-end mb-4 gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 h-32 rounded">
                <Box className="h-16">Short</Box>
                <Box className="h-24">Medium</Box>
                <Box className="h-28">Tall</Box>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                items-stretch
              </p>
              <div className="flex items-stretch mb-4 gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 h-32 rounded">
                <Box>Auto</Box>
                <Box>Auto</Box>
                <Box>Auto</Box>
              </div>
            </div>
          </div>
        </Section>

        {/* Flex Wrap */}
        <Section
          title="Flex Wrap"
          description="Control whether items can wrap to multiple lines or are forced onto a single line."
          code={`<div className="flex flex-nowrap">
  <!-- Force all items onto a single line -->
</div>

<div className="flex flex-wrap">
  <!-- Allow items to wrap to multiple lines -->
</div>

<div className="flex flex-wrap-reverse">
  <!-- Wrap items in reverse order -->
</div>`}
        >
          <div className="space-y-8 w-full">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                flex-nowrap (default)
              </p>
              <div className="flex flex-nowrap mb-4 gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded overflow-x-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <Box key={n} className="w-24 flex-shrink-0">
                    {n}
                  </Box>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                flex-wrap
              </p>
              <div className="flex flex-wrap mb-4 gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <Box key={n} className="w-24">
                    {n}
                  </Box>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                flex-wrap-reverse
              </p>
              <div className="flex flex-wrap-reverse mb-4 gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <Box key={n} className="w-24">
                    {n}
                  </Box>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Flex Grow & Shrink */}
        <Section
          title="Flex Grow & Shrink"
          description="Control how flex items grow and shrink to fill the available space."
          code={`<div className="flex-grow-0">
  <!-- Don't grow -->
</div>

<div className="flex-grow">
  <!-- Grow to fill available space -->
</div>

<div className="flex-shrink-0">
  <!-- Don't shrink -->
</div>

<div className="flex-shrink">
  <!-- Allow item to shrink if needed -->
</div>`}
        >
          <div className="space-y-8 w-full">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                flex-grow-0 (default) vs flex-grow
              </p>
              <div className="flex mb-4 gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="w-20 flex-grow-0">grow-0</Box>
                <Box className="w-20 flex-grow">grow</Box>
                <Box className="w-20 flex-grow-0">grow-0</Box>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                flex-grow values
              </p>
              <div className="flex mb-4 gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="w-12 flex-grow">grow</Box>
                <Box className="w-12 flex-grow-[2]">grow-[2]</Box>
                <Box className="w-12 flex-grow-[3]">grow-[3]</Box>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                flex-shrink-0 vs flex-shrink (default)
              </p>
              <div className="flex mb-4 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded w-64 overflow-hidden">
                <Box className="w-40 flex-shrink">shrink</Box>
                <Box className="w-40 flex-shrink-0">shrink-0</Box>
              </div>
            </div>
          </div>
        </Section>

        {/* Responsive Layouts */}
        <Section
          title="Responsive Flexbox"
          description="Apply different flexbox properties at various screen sizes using Tailwind's responsive prefixes."
          code={`<!-- Mobile first: stacked layout on small screens, row on medium and up -->
<div className="flex flex-col md:flex-row">
  <!-- Content -->
</div>

<!-- Stack on small screens, centered row on large -->
<div className="flex flex-col lg:flex-row lg:justify-center">
  <!-- Content -->
</div>

<!-- Different alignment at different screen sizes -->
<div className="flex flex-col items-center md:flex-row md:items-start">
  <!-- Content -->
</div>`}
        >
          <div className="space-y-8 w-full">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Responsive direction (resize your browser)
              </p>
              <div className="flex flex-col md:flex-row mb-4 gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="md:w-1/3">1</Box>
                <Box className="md:w-1/3">2</Box>
                <Box className="md:w-1/3">3</Box>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Responsive justify (resize your browser)
              </p>
              <div className="flex flex-col justify-start sm:flex-row sm:justify-between md:justify-around lg:justify-evenly mb-4 gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <Box className="w-20">1</Box>
                <Box className="w-20">2</Box>
                <Box className="w-20">3</Box>
              </div>
            </div>
          </div>
        </Section>

        {/* Practical Examples */}
        <Section
          title="Practical Examples"
          description="Real-world flex layouts that demonstrate the power of flexbox."
          code={`<!-- Card Layout -->
<div className="flex flex-col h-full">
  <div className="flex-grow">Content</div>
  <div className="mt-auto">Footer always at bottom</div>
</div>

<!-- Navigation with space between -->
<nav className="flex justify-between items-center">
  <div>Logo</div>
  <div className="flex gap-4">Nav Items</div>
</nav>

<!-- Centered hero section -->
<div className="flex flex-col items-center justify-center min-h-[50vh]">
  <h1>Centered Title</h1>
  <p>Centered content</p>
</div>`}
        >
          <div className="space-y-8 w-full">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Card with Footer at Bottom
              </p>
              <div className="border rounded-lg shadow-sm dark:border-gray-800 h-64">
                <div className="flex flex-col h-full p-4">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2">Card Title</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      This is the card content that can be of any height.
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t dark:border-gray-800">
                    <p className="text-sm text-gray-500">
                      Footer will always be at bottom
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Navigation with Space Between
              </p>
              <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border dark:border-gray-800">
                <div className="font-bold text-indigo-600 dark:text-indigo-400">
                  Logo
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Contact
                  </a>
                </div>
              </nav>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Centered Hero Section
              </p>
              <div className="flex flex-col items-center justify-center min-h-[200px] bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950/40 dark:to-purple-950/40 rounded-lg p-8 text-center">
                <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                  Perfectly Centered
                </h1>
                <p className="text-gray-700 dark:text-gray-300 max-w-md">
                  This hero section uses flexbox to perfectly center content
                  both horizontally and vertically.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
