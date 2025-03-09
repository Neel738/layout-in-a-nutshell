"use client";
import Section, { SubSection } from "../components/Section";

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
          intro="Grid lets you create layouts in rows AND columns, like a spreadsheet. You can define exactly how many columns you want, and items will automatically flow into the grid cells."
        >
          <SubSection
            title="Default Grid (Single Column)"
            description="By default, grid items are placed in a single column."
            code={`<div className="grid">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
            highlightedParts={[
              {
                text: "grid",
                explanation:
                  "Creates a grid container with default single column",
              },
            ]}
          >
            <div className="grid grid-cols-1 gap-2 w-full">
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
            </div>
          </SubSection>

          <SubSection
            title="Three-Column Grid"
            description="Items are arranged in three equal-width columns."
            code={`<div className="grid grid-cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>`}
            highlightedParts={[
              {
                text: "grid-cols-3",
                explanation: "Creates a grid with 3 equal-width columns",
              },
            ]}
          >
            <div className="grid grid-cols-3 gap-2 w-full">
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
              <GridItem>4</GridItem>
              <GridItem>5</GridItem>
              <GridItem>6</GridItem>
            </div>
          </SubSection>

          <SubSection
            title="Four-Column Grid"
            description="Items are arranged in four equal-width columns."
            code={`<div className="grid grid-cols-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>`}
            highlightedParts={[
              {
                text: "grid-cols-4",
                explanation: "Creates a grid with 4 equal-width columns",
              },
            ]}
          >
            <div className="grid grid-cols-4 gap-2 w-full">
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
              <GridItem>4</GridItem>
            </div>
          </SubSection>
        </Section>

        {/* Grid Gap */}
        <Section
          title="Grid Gap"
          description="Control the spacing between grid items using gap utilities."
          intro="Gaps are the spaces between grid items - like the gutters between sections in a newspaper. You can set different gap sizes and even have different spacing horizontally vs. vertically."
        >
          <SubSection
            title="Small Gap (gap-2)"
            description="Add a small gap (0.5rem) between grid items."
            code={`<div className="grid grid-cols-3 gap-2">
  <div>Item 1</div>
  <div>Item 2</div>
  <!-- More items -->
</div>`}
            highlightedParts={[
              {
                text: "gap-2",
                explanation:
                  "Adds 0.5rem (8px) of space between all grid items",
              },
            ]}
          >
            <div className="grid grid-cols-3 gap-2 w-full">
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
              <GridItem>4</GridItem>
              <GridItem>5</GridItem>
              <GridItem>6</GridItem>
            </div>
          </SubSection>

          <SubSection
            title="Medium Gap (gap-4)"
            description="Add a medium gap (1rem) between grid items."
            code={`<div className="grid grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <!-- More items -->
</div>`}
            highlightedParts={[
              {
                text: "gap-4",
                explanation: "Adds 1rem (16px) of space between all grid items",
              },
            ]}
          >
            <div className="grid grid-cols-3 gap-4 w-full">
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
              <GridItem>4</GridItem>
              <GridItem>5</GridItem>
              <GridItem>6</GridItem>
            </div>
          </SubSection>

          <SubSection
            title="Different Horizontal and Vertical Gaps"
            description="Set different spacing for rows and columns."
            code={`<div className="grid grid-cols-3 gap-x-8 gap-y-2">
  <div>Item 1</div>
  <div>Item 2</div>
  <!-- More items -->
</div>`}
            highlightedParts={[
              {
                text: "gap-x-8",
                explanation:
                  "Adds 2rem (32px) of horizontal space between columns",
              },
              {
                text: "gap-y-2",
                explanation: "Adds 0.5rem (8px) of vertical space between rows",
              },
            ]}
          >
            <div className="grid grid-cols-3 gap-x-8 gap-y-2 w-full">
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
              <GridItem>4</GridItem>
              <GridItem>5</GridItem>
              <GridItem>6</GridItem>
            </div>
          </SubSection>
        </Section>

        {/* Column and Row Spanning */}
        <Section
          title="Spanning Columns and Rows"
          description="Make items span multiple columns or rows for more complex layouts."
          intro="Grid items can span across multiple columns or rows, like merged cells in a spreadsheet. This lets you create interesting layouts with differently-sized areas."
        >
          <SubSection
            title="Column Spanning"
            description="Items can span multiple columns to create wider elements."
            code={`<div className="grid grid-cols-3">
  <div className="col-span-2">Spans 2 columns</div>
  <div>Regular cell</div>
  <div>Regular cell</div>
  <div className="col-span-3">Spans all 3 columns</div>
</div>`}
            highlightedParts={[
              {
                text: "col-span-2",
                explanation: "Item takes up 2 columns instead of 1",
              },
              {
                text: "col-span-3",
                explanation: "Item spans across all 3 columns (full width)",
              },
            ]}
          >
            <div className="grid grid-cols-3 gap-2 w-full">
              <GridItem className="col-span-2">col-span-2</GridItem>
              <GridItem>1</GridItem>
              <GridItem>1</GridItem>
              <GridItem className="col-span-3">col-span-3</GridItem>
            </div>
          </SubSection>

          <SubSection
            title="Row Spanning"
            description="Items can span multiple rows to create taller elements."
            code={`<div className="grid grid-cols-3 grid-rows-3">
  <div className="row-span-2">Spans 2 rows</div>
  <div>Regular cell</div>
  <div>Regular cell</div>
  <!-- More items -->
  <div className="row-span-2">Spans 2 rows</div>
</div>`}
            highlightedParts={[
              {
                text: "grid-rows-3",
                explanation: "Explicitly defines 3 rows in the grid",
              },
              {
                text: "row-span-2",
                explanation: "Item takes up 2 rows vertically instead of 1",
              },
            ]}
          >
            <div className="grid grid-cols-3 grid-rows-3 gap-2 h-64 w-full">
              <GridItem className="row-span-2">row-span-2</GridItem>
              <GridItem>1</GridItem>
              <GridItem>1</GridItem>
              <GridItem>1</GridItem>
              <GridItem>1</GridItem>
              <GridItem className="row-span-2">row-span-2</GridItem>
              <GridItem>1</GridItem>
              <GridItem>1</GridItem>
            </div>
          </SubSection>

          <SubSection
            title="Combined Spanning"
            description="Items can span both columns and rows to create larger block elements."
            code={`<div className="grid grid-cols-4 grid-rows-2">
  <div className="col-span-2 row-span-2">Spans 2×2</div>
  <div>Regular cell</div>
  <div>Regular cell</div>
  <!-- More items -->
</div>`}
            highlightedParts={[
              {
                text: "col-span-2 row-span-2",
                explanation: "Item takes up a 2×2 area in the grid",
              },
            ]}
          >
            <div className="grid grid-cols-4 grid-rows-2 gap-2 h-48 w-full">
              <GridItem className="col-span-2 row-span-2">
                col-span-2 row-span-2
              </GridItem>
              <GridItem>1</GridItem>
              <GridItem>1</GridItem>
              <GridItem>1</GridItem>
              <GridItem>1</GridItem>
            </div>
          </SubSection>
        </Section>

        {/* Custom Grids */}
        <Section
          title="Custom Grid Templates"
          description="Create custom grid layouts with specific column widths."
          intro="Sometimes you need very specific column sizes - like a fixed sidebar with a flexible main area. Custom grid templates let you define exactly how wide or tall each column or row should be."
        >
          <SubSection
            title="Fixed, Flexible, and Proportional Columns"
            description="Mix fixed width, flexible (fr), and proportional columns."
            code={`<div className="grid grid-cols-[200px_1fr_2fr]">
  <div>Fixed 200px width</div>
  <div>Flexible 1fr width</div>
  <div>Flexible 2fr width</div>
</div>`}
            highlightedParts={[
              {
                text: "grid-cols-[200px_1fr_2fr]",
                explanation:
                  "Creates 3 columns: 1st is fixed 200px, 2nd is flexible, 3rd is twice as wide as the 2nd",
              },
            ]}
          >
            <div className="grid grid-cols-[200px_1fr_2fr] gap-2 w-full">
              <GridItem>200px</GridItem>
              <GridItem>1fr</GridItem>
              <GridItem>2fr</GridItem>
            </div>
          </SubSection>

          <SubSection
            title="Equal Columns with Fixed End Column"
            description="Create a layout with equal flexible columns plus one fixed-width column."
            code={`<div className="grid grid-cols-[repeat(2,_minmax(0,_1fr))_200px]">
  <div>Flexible 1fr width</div>
  <div>Flexible 1fr width</div>
  <div>Fixed 200px width</div>
</div>`}
            highlightedParts={[
              {
                text: "grid-cols-[repeat(2,_minmax(0,_1fr))_200px]",
                explanation:
                  "Creates 2 equal flexible columns followed by a 200px fixed column",
              },
            ]}
          >
            <div className="grid grid-cols-[repeat(2,_minmax(0,_1fr))_200px] gap-2 w-full">
              <GridItem>1fr</GridItem>
              <GridItem>1fr</GridItem>
              <GridItem>200px</GridItem>
            </div>
          </SubSection>

          <SubSection
            title="Fixed Header, Flexible Content, Fixed Footer"
            description="Create a classic page layout with fixed height header and footer."
            code={`<div className="grid grid-rows-[100px_auto_100px] h-80">
  <div>Fixed 100px height header</div>
  <div>Auto-sized content area</div>
  <div>Fixed 100px height footer</div>
</div>`}
            highlightedParts={[
              {
                text: "grid-rows-[100px_auto_100px]",
                explanation:
                  "Creates a row for header (100px), content (auto height), and footer (100px)",
              },
            ]}
          >
            <div className="grid grid-rows-[100px_auto_100px] h-80 gap-2 w-full">
              <GridItem>Header 100px</GridItem>
              <GridItem>Auto-sized content</GridItem>
              <GridItem>Footer 100px</GridItem>
            </div>
          </SubSection>
        </Section>

        {/* Grid Auto Flow */}
        <Section
          title="Grid Auto Flow"
          description="Control how auto-placed items flow into the grid."
          intro="Grid auto flow controls the direction items flow into the grid, and whether the grid should try to fill in gaps. It's like choosing between filling a bookshelf row by row or column by column."
        >
          <SubSection
            title="Row Flow (Default)"
            description="Items flow horizontally, then move to the next row when a row is filled."
            code={`<div className="grid grid-cols-4 grid-flow-row">
  <div className="col-span-2">Spans 2 columns</div>
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
  <div className="col-span-2">Spans 2 columns</div>
  <div>Item</div>
</div>`}
            highlightedParts={[
              {
                text: "grid-flow-row",
                explanation:
                  "Items flow horizontally across rows (this is the default behavior)",
              },
            ]}
          >
            <div className="grid grid-cols-4 grid-flow-row gap-2 w-full">
              <GridItem className="col-span-2">col-span-2</GridItem>
              <GridItem>3</GridItem>
              <GridItem>4</GridItem>
              <GridItem>5</GridItem>
              <GridItem className="col-span-2">col-span-2</GridItem>
              <GridItem>8</GridItem>
            </div>
          </SubSection>

          <SubSection
            title="Dense Row Flow"
            description="Items flow by row, but the grid tries to fill in all empty spaces when possible."
            code={`<div className="grid grid-cols-4 grid-flow-row-dense">
  <div className="col-span-2">Spans 2 columns</div>
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
  <div className="col-span-2">Spans 2 columns</div>
  <div>Item</div>
</div>`}
            highlightedParts={[
              {
                text: "grid-flow-row-dense",
                explanation:
                  "Items flow by row, but will fill any gaps if they fit",
              },
            ]}
          >
            <div className="grid grid-cols-4 grid-flow-row-dense gap-2 w-full">
              <GridItem className="col-span-2">col-span-2</GridItem>
              <GridItem>3</GridItem>
              <GridItem>4</GridItem>
              <GridItem>5</GridItem>
              <GridItem className="col-span-2">col-span-2</GridItem>
              <GridItem>8</GridItem>
            </div>
          </SubSection>

          <SubSection
            title="Column Flow"
            description="Items flow vertically, filling columns first before moving to the next column."
            code={`<div className="grid grid-rows-3 grid-flow-col">
  <div className="row-span-2">Spans 2 rows</div>
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
  <div className="row-span-2">Spans 2 rows</div>
  <div>Item</div>
</div>`}
            highlightedParts={[
              {
                text: "grid-flow-col",
                explanation:
                  "Items flow vertically down columns instead of across rows",
              },
            ]}
          >
            <div className="grid grid-rows-3 grid-flow-col gap-2 h-48 w-full">
              <GridItem className="row-span-2">row-span-2</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
              <GridItem>4</GridItem>
              <GridItem className="row-span-2">row-span-2</GridItem>
              <GridItem>6</GridItem>
            </div>
          </SubSection>
        </Section>

        {/* Grid Alignment */}
        <Section
          title="Grid Alignment"
          description="Control the alignment of items within their grid cells."
          intro="Grid alignment lets you control how items are positioned inside their grid cells. Think of each cell as a picture frame - you can position the picture in the center, at the top, at the bottom, etc."
        >
          <SubSection
            title="Justify Items (Horizontal Alignment)"
            description="Control the horizontal alignment of items within their grid cells."
            code={`<div className="grid grid-cols-2 justify-items-start">
  <div>Start-aligned item</div>
  <div>Start-aligned item</div>
  <!-- More items -->
</div>

<div className="grid grid-cols-2 justify-items-center">
  <div>Center-aligned item</div>
  <div>Center-aligned item</div>
  <!-- More items -->
</div>`}
            highlightedParts={[
              {
                text: "justify-items-start",
                explanation: "Aligns grid items to the left side of their cell",
              },
              {
                text: "justify-items-center",
                explanation: "Centers grid items horizontally in their cell",
              },
            ]}
          >
            <div className="grid grid-cols-2 gap-4 w-full">
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
          </SubSection>

          <SubSection
            title="Align Items (Vertical Alignment)"
            description="Control the vertical alignment of items within their grid cells."
            code={`<div className="grid grid-cols-2 items-start h-32">
  <div>Top-aligned item</div>
  <div>Top-aligned item</div>
  <!-- More items -->
</div>

<div className="grid grid-cols-2 items-center h-32">
  <div>Center-aligned item</div>
  <div>Center-aligned item</div>
  <!-- More items -->
</div>`}
            highlightedParts={[
              {
                text: "items-start",
                explanation: "Aligns grid items to the top of their cell",
              },
              {
                text: "items-center",
                explanation: "Centers grid items vertically in their cell",
              },
            ]}
          >
            <div className="grid grid-cols-2 gap-4 w-full">
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
          </SubSection>
        </Section>

        {/* Responsive Grid */}
        <Section
          title="Responsive Grid"
          description="Create responsive layouts by changing grid properties at different breakpoints."
          intro="Responsive grids let you change your layout based on screen size. It's like having a room with furniture that rearranges itself when the room gets smaller or larger."
        >
          <SubSection
            title="Responsive Column Count"
            description="Change the number of columns based on screen size."
            code={`<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <!-- More items -->
</div>`}
            highlightedParts={[
              {
                text: "grid-cols-1",
                explanation: "Single column on mobile devices",
              },
              {
                text: "sm:grid-cols-2",
                explanation: "Two columns on small screens (640px+)",
              },
              {
                text: "md:grid-cols-3",
                explanation: "Three columns on medium screens (768px+)",
              },
              {
                text: "lg:grid-cols-4",
                explanation: "Four columns on large screens (1024px+)",
              },
            ]}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full">
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
              <GridItem>4</GridItem>
              <GridItem>5</GridItem>
              <GridItem>6</GridItem>
              <GridItem>7</GridItem>
              <GridItem>8</GridItem>
            </div>
          </SubSection>

          <SubSection
            title="Responsive Column Spanning"
            description="Change how items span across columns at different screen sizes."
            code={`<div className="grid grid-cols-6 md:grid-cols-12">
  <div className="col-span-6 md:col-span-4 lg:col-span-3">Item A</div>
  <div className="col-span-6 md:col-span-8 lg:col-span-9">Item B</div>
  <div className="col-span-3 md:col-span-6">Item C</div>
  <div className="col-span-3 md:col-span-6">Item D</div>
</div>`}
            highlightedParts={[
              {
                text: "grid-cols-6 md:grid-cols-12",
                explanation: "6 columns on mobile, 12 on medium screens and up",
              },
              {
                text: "col-span-6 md:col-span-4 lg:col-span-3",
                explanation:
                  "Full width on mobile, 1/3 width on medium, 1/4 width on large screens",
              },
            ]}
          >
            <div className="grid grid-cols-6 md:grid-cols-12 gap-2 w-full">
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
          </SubSection>
        </Section>

        {/* Grid Layout Examples */}
        <Section
          title="Common Grid Layouts"
          description="Examples of typical layouts built with Grid."
          intro="These are real-world grid layouts that you'll see frequently. They show how the grid properties come together to create usable, responsive designs."
        >
          <SubSection
            title="Holy Grail Layout"
            description="A classic web layout with header, footer, main content, and sidebars."
            code={`<div className="grid grid-cols-1 md:grid-cols-[200px_1fr_200px] grid-rows-[auto_1fr_auto] min-h-screen">
  <header className="col-span-full">Header</header>
  <nav>Sidebar</nav>
  <main>Main Content</main>
  <aside>Aside</aside>
  <footer className="col-span-full">Footer</footer>
</div>`}
            highlightedParts={[
              {
                text: "md:grid-cols-[200px_1fr_200px]",
                explanation:
                  "Three-column layout on desktop with fixed sidebars",
              },
              {
                text: "grid-rows-[auto_1fr_auto]",
                explanation:
                  "Auto-sized header/footer with flexible middle section",
              },
              {
                text: "col-span-full",
                explanation: "Header and footer span across all columns",
              },
            ]}
          >
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_200px] grid-rows-[auto_1fr_auto] gap-2 h-96 border border-dashed border-gray-300 dark:border-gray-700 p-2 rounded w-full">
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
          </SubSection>

          <SubSection
            title="Dashboard Layout"
            description="A responsive layout for dashboards with a main section and various widgets."
            code={`<div className="grid grid-cols-12 gap-4">
  <div className="col-span-12 md:col-span-8">Main Content</div>
  <div className="col-span-12 md:col-span-4">Sidebar</div>
  <div className="col-span-12 md:col-span-4">Card 1</div>
  <div className="col-span-12 md:col-span-4">Card 2</div>
  <div className="col-span-12 md:col-span-4">Card 3</div>
</div>`}
            highlightedParts={[
              {
                text: "grid-cols-12",
                explanation: "12-column grid for flexible layouts",
              },
              {
                text: "col-span-12 md:col-span-8",
                explanation: "Full width on mobile, 2/3 width on desktop",
              },
              {
                text: "col-span-12 md:col-span-4",
                explanation: "Full width on mobile, 1/3 width on desktop",
              },
            ]}
          >
            <div className="grid grid-cols-12 gap-2 w-full">
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
          </SubSection>

          <SubSection
            title="Image Gallery"
            description="A responsive grid for displaying images or cards in a gallery format."
            code={`<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div>Image 1</div>
  <div>Image 2</div>
  <!-- More images -->
</div>`}
            highlightedParts={[
              {
                text: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                explanation: "2 columns on mobile, 3 on tablets, 4 on desktop",
              },
            ]}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div
                  key={n}
                  className="aspect-square bg-gradient-to-br from-purple-300 to-indigo-300 dark:from-purple-800/40 dark:to-indigo-800/40 rounded flex items-center justify-center font-semibold"
                >
                  Image {n}
                </div>
              ))}
            </div>
          </SubSection>
        </Section>
      </div>
    </div>
  );
}
