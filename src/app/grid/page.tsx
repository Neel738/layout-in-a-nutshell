"use client";
import Section from "../components/Section";

// Demo Components
const GridItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`flex items-center justify-center p-4 bg-gradient-to-r from-purple-400 to-purple-500 text-white rounded-md shadow-sm ${className}`}
  >
    {children}
  </div>
);

export default function GridPage() {
  return (
    <div className="space-y-12">
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
          Grid in Tailwind CSS
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
          CSS Grid is a powerful two-dimensional layout system ideal for
          creating complex page layouts and component designs.
        </p>
      </header>

      <div className="space-y-16">
        {/* Basic Grid */}
        <Section
          title="Basic Grid"
          description="Create a grid container and define columns using grid-template-columns."
          code={`<div className="grid">
  <!-- Simple grid, single column by default -->
</div>

<div className="grid grid-cols-3">
  <!-- Three equal-width columns -->
</div>

<div className="grid grid-cols-4">
  <!-- Four equal-width columns -->
</div>

<div className="grid grid-cols-12">
  <!-- Standard 12-column grid -->
</div>`}
        >
          <div className="space-y-8 w-full">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                grid-cols-1 (default)
              </p>
              <div className="grid grid-cols-1 gap-2 mb-4">
                <GridItem>1</GridItem>
                <GridItem>2</GridItem>
                <GridItem>3</GridItem>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                grid-cols-3
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <GridItem>1</GridItem>
                <GridItem>2</GridItem>
                <GridItem>3</GridItem>
                <GridItem>4</GridItem>
                <GridItem>5</GridItem>
                <GridItem>6</GridItem>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                grid-cols-4
              </p>
              <div className="grid grid-cols-4 gap-2 mb-4">
                <GridItem>1</GridItem>
                <GridItem>2</GridItem>
                <GridItem>3</GridItem>
                <GridItem>4</GridItem>
              </div>
            </div>
          </div>
        </Section>

        {/* Grid Gap */}
        <Section
          title="Grid Gap"
          description="Control the spacing between grid items using gap utilities."
          code={`<div className="grid grid-cols-3 gap-2">
  <!-- Small gap (0.5rem) -->
</div>

<div className="grid grid-cols-3 gap-4">
  <!-- Medium gap (1rem) -->
</div>

<div className="grid grid-cols-3 gap-8">
  <!-- Large gap (2rem) -->
</div>

<div className="grid grid-cols-3 gap-x-8 gap-y-4">
  <!-- Different horizontal and vertical gaps -->
</div>`}
        >
          <div className="space-y-8 w-full">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                gap-2 (small)
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <GridItem>1</GridItem>
                <GridItem>2</GridItem>
                <GridItem>3</GridItem>
                <GridItem>4</GridItem>
                <GridItem>5</GridItem>
                <GridItem>6</GridItem>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                gap-4 (medium)
              </p>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <GridItem>1</GridItem>
                <GridItem>2</GridItem>
                <GridItem>3</GridItem>
                <GridItem>4</GridItem>
                <GridItem>5</GridItem>
                <GridItem>6</GridItem>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                gap-x-8 gap-y-2 (different x and y gaps)
              </p>
              <div className="grid grid-cols-3 gap-x-8 gap-y-2 mb-4">
                <GridItem>1</GridItem>
                <GridItem>2</GridItem>
                <GridItem>3</GridItem>
                <GridItem>4</GridItem>
                <GridItem>5</GridItem>
                <GridItem>6</GridItem>
              </div>
            </div>
          </div>
        </Section>

        {/* Column and Row Spanning */}
        <Section
          title="Spanning Columns and Rows"
          description="Make items span multiple columns or rows for more complex layouts."
          code={`<div className="col-span-2">
  <!-- Span 2 columns -->
</div>

<div className="col-span-3">
  <!-- Span 3 columns -->
</div>

<div className="row-span-2">
  <!-- Span 2 rows -->
</div>

<div className="col-span-2 row-span-2">
  <!-- Span 2 columns and 2 rows -->
</div>`}
        >
          <div className="space-y-8 w-full">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Column spanning
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <GridItem className="col-span-2">col-span-2</GridItem>
                <GridItem>1</GridItem>
                <GridItem>1</GridItem>
                <GridItem className="col-span-3">col-span-3</GridItem>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Row spanning
              </p>
              <div className="grid grid-cols-3 grid-rows-3 gap-2 h-64 mb-4">
                <GridItem className="row-span-2">row-span-2</GridItem>
                <GridItem>1</GridItem>
                <GridItem>1</GridItem>
                <GridItem>1</GridItem>
                <GridItem>1</GridItem>
                <GridItem className="row-span-2">row-span-2</GridItem>
                <GridItem>1</GridItem>
                <GridItem>1</GridItem>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Combined spanning
              </p>
              <div className="grid grid-cols-4 grid-rows-2 gap-2 h-48 mb-4">
                <GridItem className="col-span-2 row-span-2">
                  col-span-2 row-span-2
                </GridItem>
                <GridItem>1</GridItem>
                <GridItem>1</GridItem>
                <GridItem>1</GridItem>
                <GridItem>1</GridItem>
              </div>
            </div>
          </div>
        </Section>

        {/* Custom Grids */}
        <Section
          title="Custom Grid Templates"
          description="Create custom grid layouts with specific column widths."
          code={`<div className="grid grid-cols-[200px_1fr_2fr]">
  <!-- Fixed width, 1 fraction, 2 fractions -->
</div>

<div className="grid grid-cols-[repeat(2,_minmax(0,_1fr))_200px]">
  <!-- 2 equal columns, then a 200px column -->
</div>

<div className="grid grid-cols-[1fr_min-content_1fr]">
  <!-- 1fr, auto-sized content, 1fr -->
</div>

<!-- Same approach works for rows -->
<div className="grid grid-rows-[100px_auto_100px]">
  <!-- Fixed header, flexible middle, fixed footer -->
</div>`}
        >
          <div className="space-y-8 w-full">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                grid-cols-[200px_1fr_2fr]
              </p>
              <div className="grid grid-cols-[200px_1fr_2fr] gap-2 mb-4">
                <GridItem>200px</GridItem>
                <GridItem>1fr</GridItem>
                <GridItem>2fr</GridItem>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                grid-cols-[repeat(2,_minmax(0,_1fr))_200px]
              </p>
              <div className="grid grid-cols-[repeat(2,_minmax(0,_1fr))_200px] gap-2 mb-4">
                <GridItem>1fr</GridItem>
                <GridItem>1fr</GridItem>
                <GridItem>200px</GridItem>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                grid-rows-[100px_auto_100px]
              </p>
              <div className="grid grid-rows-[100px_auto_100px] h-80 gap-2 mb-4">
                <GridItem>Header 100px</GridItem>
                <GridItem>Auto-sized content</GridItem>
                <GridItem>Footer 100px</GridItem>
              </div>
            </div>
          </div>
        </Section>

        {/* Auto Flow */}
        <Section
          title="Grid Auto Flow"
          description="Control how auto-placed items flow into the grid."
          code={`<div className="grid grid-flow-row">
  <!-- Items flow by rows (default) -->
</div>

<div className="grid grid-flow-col">
  <!-- Items flow by columns -->
</div>

<div className="grid grid-flow-row-dense">
  <!-- Row flow with dense packing -->
</div>

<div className="grid grid-flow-col-dense">
  <!-- Column flow with dense packing -->
</div>`}
        >
          <div className="space-y-8 w-full">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                grid-flow-row (default)
              </p>
              <div className="grid grid-cols-4 grid-flow-row gap-2 mb-4">
                <GridItem className="col-span-2">col-span-2</GridItem>
                <GridItem>3</GridItem>
                <GridItem>4</GridItem>
                <GridItem>5</GridItem>
                <GridItem className="col-span-2">col-span-2</GridItem>
                <GridItem>8</GridItem>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                grid-flow-row-dense
              </p>
              <div className="grid grid-cols-4 grid-flow-row-dense gap-2 mb-4">
                <GridItem className="col-span-2">col-span-2</GridItem>
                <GridItem>3</GridItem>
                <GridItem>4</GridItem>
                <GridItem>5</GridItem>
                <GridItem className="col-span-2">col-span-2</GridItem>
                <GridItem>8</GridItem>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                grid-flow-col
              </p>
              <div className="grid grid-rows-3 grid-flow-col gap-2 mb-4 h-48">
                <GridItem className="row-span-2">row-span-2</GridItem>
                <GridItem>2</GridItem>
                <GridItem>3</GridItem>
                <GridItem>4</GridItem>
                <GridItem className="row-span-2">row-span-2</GridItem>
                <GridItem>6</GridItem>
              </div>
            </div>
          </div>
        </Section>

        {/* Grid Alignment */}
        <Section
          title="Grid Alignment"
          description="Control the alignment of items within their grid cells."
          code={`<!-- Align grid items horizontally (justify-items) -->
<div className="justify-items-start">
  <!-- Align to the start of their cell -->
</div>

<div className="justify-items-center">
  <!-- Align to the center of their cell -->
</div>

<!-- Align grid items vertically (align-items) -->
<div className="items-start">
  <!-- Align to the top of their cell -->
</div>

<div className="items-center">
  <!-- Align to the center of their cell -->
</div>

<!-- Content alignment for the entire grid -->
<div className="content-center">
  <!-- Center all content if grid is larger than sum of rows -->
</div>`}
        >
          <div className="space-y-8 w-full">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                justify-items-start vs justify-items-center
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="grid grid-cols-2 justify-items-start gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                  <GridItem className="w-20">start</GridItem>
                  <GridItem className="w-20">start</GridItem>
                  <GridItem className="w-20">start</GridItem>
                  <GridItem className="w-20">start</GridItem>
                </div>

                <div className="grid grid-cols-2 justify-items-center gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                  <GridItem className="w-20">center</GridItem>
                  <GridItem className="w-20">center</GridItem>
                  <GridItem className="w-20">center</GridItem>
                  <GridItem className="w-20">center</GridItem>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                items-start vs items-center
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="grid grid-cols-2 items-start gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded h-32">
                  <GridItem className="h-12">start</GridItem>
                  <GridItem className="h-16">start</GridItem>
                  <GridItem className="h-10">start</GridItem>
                  <GridItem className="h-14">start</GridItem>
                </div>

                <div className="grid grid-cols-2 items-center gap-2 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded h-32">
                  <GridItem className="h-12">center</GridItem>
                  <GridItem className="h-16">center</GridItem>
                  <GridItem className="h-10">center</GridItem>
                  <GridItem className="h-14">center</GridItem>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Responsive Grid */}
        <Section
          title="Responsive Grid"
          description="Create responsive layouts by changing grid properties at different breakpoints."
          code={`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <!-- 1 column on mobile, 2 on tablets, 4 on desktop -->
</div>

<div className="grid grid-cols-6 md:grid-cols-12">
  <!-- 6 columns on mobile, 12 on medium screens and up -->
</div>

<div className="col-span-6 md:col-span-4 lg:col-span-3">
  <!-- Different column spans at different screen sizes -->
</div>`}
        >
          <div className="space-y-8 w-full">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Responsive columns (resize your browser)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-4">
                <GridItem>1</GridItem>
                <GridItem>2</GridItem>
                <GridItem>3</GridItem>
                <GridItem>4</GridItem>
                <GridItem>5</GridItem>
                <GridItem>6</GridItem>
                <GridItem>7</GridItem>
                <GridItem>8</GridItem>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Responsive column spans (resize your browser)
              </p>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-2 mb-4">
                <GridItem className="col-span-6 md:col-span-4 lg:col-span-3">
                  col-span-6 md:col-span-4 lg:col-span-3
                </GridItem>
                <GridItem className="col-span-6 md:col-span-8 lg:col-span-9">
                  col-span-6 md:col-span-8 lg:col-span-9
                </GridItem>
                <GridItem className="col-span-3 md:col-span-6">
                  col-span-3 md:col-span-6
                </GridItem>
                <GridItem className="col-span-3 md:col-span-6">
                  col-span-3 md:col-span-6
                </GridItem>
              </div>
            </div>
          </div>
        </Section>

        {/* Grid Layout Examples */}
        <Section
          title="Common Grid Layouts"
          description="Examples of typical layouts built with Grid."
          code={`<!-- Holy Grail Layout -->
<div className="grid grid-cols-1 md:grid-cols-[200px_1fr_200px] grid-rows-[auto_1fr_auto] min-h-screen">
  <header className="col-span-full">Header</header>
  <nav>Sidebar</nav>
  <main>Main Content</main>
  <aside>Aside</aside>
  <footer className="col-span-full">Footer</footer>
</div>

<!-- Dashboard Layout -->
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-12 md:col-span-8">Main Content</div>
  <div className="col-span-12 md:col-span-4">Sidebar</div>
  <div className="col-span-12 md:col-span-4">Card 1</div>
  <div className="col-span-12 md:col-span-4">Card 2</div>
  <div className="col-span-12 md:col-span-4">Card 3</div>
</div>

<!-- Image Gallery -->
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <!-- Multiple image items -->
</div>`}
        >
          <div className="space-y-8 w-full">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Holy Grail Layout
              </p>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_200px] grid-rows-[auto_1fr_auto] gap-2 mb-4 h-96 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded">
                <div className="col-span-full bg-purple-100 dark:bg-purple-900/30 p-4 rounded flex items-center justify-center font-semibold">
                  Header
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded flex items-center justify-center font-semibold">
                  Sidebar
                </div>
                <div className="bg-gradient-to-br from-purple-300 to-indigo-300 dark:from-purple-800/40 dark:to-indigo-800/40 p-4 rounded flex items-center justify-center font-semibold">
                  Main Content
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded flex items-center justify-center font-semibold">
                  Aside
                </div>
                <div className="col-span-full bg-purple-100 dark:bg-purple-900/30 p-4 rounded flex items-center justify-center font-semibold">
                  Footer
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Dashboard Layout
              </p>
              <div className="grid grid-cols-12 gap-2 mb-4">
                <div className="col-span-12 md:col-span-8 bg-gradient-to-br from-purple-300 to-indigo-300 dark:from-purple-800/40 dark:to-indigo-800/40 p-6 rounded flex items-center justify-center font-semibold">
                  Main Content
                </div>
                <div className="col-span-12 md:col-span-4 bg-purple-100 dark:bg-purple-900/30 p-6 rounded flex items-center justify-center font-semibold">
                  Sidebar
                </div>
                <div className="col-span-12 md:col-span-4 bg-purple-100 dark:bg-purple-900/30 p-6 rounded flex items-center justify-center font-semibold">
                  Card 1
                </div>
                <div className="col-span-12 md:col-span-4 bg-purple-100 dark:bg-purple-900/30 p-6 rounded flex items-center justify-center font-semibold">
                  Card 2
                </div>
                <div className="col-span-12 md:col-span-4 bg-purple-100 dark:bg-purple-900/30 p-6 rounded flex items-center justify-center font-semibold">
                  Card 3
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Image Gallery
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <div
                    key={n}
                    className="aspect-square bg-gradient-to-br from-purple-300 to-indigo-300 dark:from-purple-800/40 dark:to-indigo-800/40 rounded flex items-center justify-center font-semibold"
                  >
                    Image {n}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
