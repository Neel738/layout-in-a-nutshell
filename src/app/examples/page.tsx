"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CopyableCode from "../components/CopyableCode";

// Example components
const DashboardLayout = () => (
  <div className="w-full h-[500px] bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800">
    {/* Header */}
    <div className="bg-indigo-600 dark:bg-indigo-700 h-16 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-white font-semibold">Analytics Dashboard</div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 rounded-full bg-white/20"></div>
        <div className="w-8 h-8 rounded-full bg-white/20"></div>
      </div>
    </div>

    <div className="flex h-[calc(500px-4rem)]">
      {/* Sidebar */}
      <div className="w-48 bg-indigo-50 dark:bg-gray-800 p-4 hidden md:block">
        <div className="space-y-4">
          <div className="h-8 rounded bg-indigo-100 dark:bg-gray-700"></div>
          <div className="h-8 rounded bg-indigo-100 dark:bg-gray-700"></div>
          <div className="h-8 rounded bg-indigo-100 dark:bg-gray-700"></div>
          <div className="h-8 rounded bg-indigo-100 dark:bg-gray-700"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 overflow-auto">
        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Total Users
            </div>
            <div className="text-2xl font-bold">24,521</div>
            <div className="text-xs text-green-500 mt-1">
              ↑ 12% from last week
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Conversion
            </div>
            <div className="text-2xl font-bold">4.6%</div>
            <div className="text-xs text-red-500 mt-1">↓ 2% from last week</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Revenue
            </div>
            <div className="text-2xl font-bold">$12,452</div>
            <div className="text-xs text-green-500 mt-1">
              ↑ 8% from last week
            </div>
          </div>
        </div>

        {/* Content panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-700 lg:col-span-2">
            <div className="text-sm font-medium mb-3">Weekly Activity</div>
            <div className="h-48 flex items-end space-x-2">
              <div className="w-1/12 bg-indigo-100 dark:bg-indigo-900/40 h-1/4 rounded-t"></div>
              <div className="w-1/12 bg-indigo-200 dark:bg-indigo-800/40 h-1/3 rounded-t"></div>
              <div className="w-1/12 bg-indigo-300 dark:bg-indigo-700/40 h-1/2 rounded-t"></div>
              <div className="w-1/12 bg-indigo-400 dark:bg-indigo-600/40 h-2/3 rounded-t"></div>
              <div className="w-1/12 bg-indigo-500 dark:bg-indigo-500/40 h-3/4 rounded-t"></div>
              <div className="w-1/12 bg-indigo-600 dark:bg-indigo-400/40 h-full rounded-t"></div>
              <div className="w-1/12 bg-indigo-500 dark:bg-indigo-500/40 h-3/4 rounded-t"></div>
              <div className="w-1/12 bg-indigo-400 dark:bg-indigo-600/40 h-2/3 rounded-t"></div>
              <div className="w-1/12 bg-indigo-300 dark:bg-indigo-700/40 h-1/2 rounded-t"></div>
              <div className="w-1/12 bg-indigo-200 dark:bg-indigo-800/40 h-1/3 rounded-t"></div>
              <div className="w-1/12 bg-indigo-100 dark:bg-indigo-900/40 h-1/4 rounded-t"></div>
              <div className="w-1/12 bg-indigo-200 dark:bg-indigo-800/40 h-1/3 rounded-t"></div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-700">
            <div className="text-sm font-medium mb-3">Recent Activity</div>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 mr-3"></div>
                <div className="flex-1">
                  <div className="text-xs">User signed up</div>
                  <div className="text-xs text-gray-500">2 minutes ago</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 mr-3"></div>
                <div className="flex-1">
                  <div className="text-xs">New sale completed</div>
                  <div className="text-xs text-gray-500">15 minutes ago</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/40 mr-3"></div>
                <div className="flex-1">
                  <div className="text-xs">Customer requested refund</div>
                  <div className="text-xs text-gray-500">45 minutes ago</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-100 dark:border-gray-700">
            <div className="text-sm font-medium mb-3">Top Products</div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="text-xs">Product A</div>
                <div className="text-xs font-medium">$1,245</div>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
                <div className="bg-indigo-500 h-1.5 rounded-full w-3/4"></div>
              </div>

              <div className="flex justify-between">
                <div className="text-xs">Product B</div>
                <div className="text-xs font-medium">$958</div>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
                <div className="bg-indigo-500 h-1.5 rounded-full w-2/3"></div>
              </div>

              <div className="flex justify-between">
                <div className="text-xs">Product C</div>
                <div className="text-xs font-medium">$541</div>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
                <div className="bg-indigo-500 h-1.5 rounded-full w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LandingPageLayout = () => (
  <div className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800">
    {/* Header/Nav */}
    <header className="px-4 h-16 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
      <div className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
        ProductName
      </div>
      <nav className="hidden md:flex items-center space-x-4">
        <div className="text-sm text-gray-600 dark:text-gray-300">Features</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">Pricing</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">About</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">Contact</div>
      </nav>
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded text-sm">
          Login
        </button>
        <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">
          Signup
        </button>
      </div>
    </header>

    {/* Hero Section */}
    <section className="px-4 py-16 flex flex-col items-center text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 text-transparent bg-clip-text">
        Your Product Tagline Here
      </h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-lg mb-8">
        A concise description of your product and its main benefit. Make it
        compelling and focused on the user.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-md font-medium">
          Get Started
        </button>
        <button className="px-6 py-2 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-500 rounded-md font-medium">
          Learn More
        </button>
      </div>
    </section>

    {/* Features Section */}
    <section className="px-4 py-12 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-center mb-12">Key Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center mb-4">
            <div className="w-6 h-6 bg-indigo-500 rounded"></div>
          </div>
          <h3 className="font-semibold mb-2">Feature One</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            A short description of this amazing feature and how it benefits
            users.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center mb-4">
            <div className="w-6 h-6 bg-purple-500 rounded"></div>
          </div>
          <h3 className="font-semibold mb-2">Feature Two</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Another compelling reason why people should use your product.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-4">
            <div className="w-6 h-6 bg-blue-500 rounded"></div>
          </div>
          <h3 className="font-semibold mb-2">Feature Three</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            A third impressive feature that sets your product apart.
          </p>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="px-4 py-16 flex flex-col items-center text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h2 className="text-2xl font-bold mb-3">Ready to Get Started?</h2>
      <p className="max-w-lg mb-8">
        Join thousands of satisfied customers who have transformed their
        workflow.
      </p>
      <button className="px-6 py-2 bg-white text-indigo-600 rounded-md font-medium">
        Sign Up Now
      </button>
    </section>
  </div>
);

const CardLayoutExample = () => (
  <div className="w-full">
    <h3 className="text-lg font-semibold mb-4">Responsive Card Grid</h3>

    {/* Grid of cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col"
        >
          <div className="h-40 bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-900/40 dark:to-purple-900/40"></div>
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-medium mb-2">Card Title {i}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">
              Short description for this card item that might span over multiple
              lines.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <span className="text-xs text-gray-500">Category</span>
              <button className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

interface ExampleTabProps {
  example: React.ReactNode;
  codeSnippet: string;
  highlightedParts?: { text: string; explanation?: string }[];
  title: string;
}

function ExampleTab({
  example,
  codeSnippet,
  highlightedParts,
  title,
}: ExampleTabProps) {
  return (
    <div className="space-y-8" id={title.toLowerCase().replace(/\s+/g, "-")}>
      <div>
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
          {title}
        </h2>

        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="mb-4 bg-gray-100 dark:bg-gray-800">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <TabsContent
            value="preview"
            className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900"
          >
            {example}
          </TabsContent>

          <TabsContent value="code">
            <CopyableCode
              code={codeSnippet}
              highlightedParts={highlightedParts}
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="p-6 bg-amber-50 dark:bg-amber-900/10 rounded-lg border border-amber-100 dark:border-amber-800/30">
        <h3 className="text-lg font-semibold mb-4 text-amber-700 dark:text-amber-300">
          Key Layout Concepts
        </h3>
        <ul className="space-y-3">
          {highlightedParts?.map((part, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="rounded-full bg-amber-100 dark:bg-amber-900/40 flex-shrink-0 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-amber-600 dark:text-amber-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <code className="text-sm bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded px-1 py-0.5 font-bold">
                  {part.text}
                </code>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {part.explanation}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ExamplesPage() {
  const dashboardCode = `// Dashboard layout with sidebar and main content
<div className="flex h-screen">
  {/* Sidebar: hidden on mobile, shown on medium screens */}
  <div className="w-48 bg-indigo-50 p-4 hidden md:block">
    <div className="space-y-4">
      <div className="h-8 rounded bg-indigo-100"></div>
      <div className="h-8 rounded bg-indigo-100"></div>
      <div className="h-8 rounded bg-indigo-100"></div>
    </div>
  </div>
  
  {/* Main content area with responsive grid */}
  <div className="flex-1 p-4 overflow-auto">
    {/* Stats cards: 1 column on mobile, 3 on medium screens */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow border">
        <div className="text-xs text-gray-500 mb-1">Total Users</div>
        <div className="text-2xl font-bold">24,521</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow border">
        <div className="text-xs text-gray-500 mb-1">Conversion</div>
        <div className="text-2xl font-bold">4.6%</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow border">
        <div className="text-xs text-gray-500 mb-1">Revenue</div>
        <div className="text-2xl font-bold">$12,452</div>
      </div>
    </div>
    
    {/* Content panels with different column spans */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow lg:col-span-2">
        <div className="text-sm font-medium mb-3">Full-Width Panel</div>
        <div className="h-48"></div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="text-sm font-medium mb-3">Half-Width Panel</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="text-sm font-medium mb-3">Half-Width Panel</div>
      </div>
    </div>
  </div>
</div>`;

  const landingPageCode = `// Landing page layout with responsive sections
{/* Responsive Header */}
<header className="px-4 h-16 flex items-center justify-between">
  <div className="text-xl font-bold">Brand</div>
  
  {/* Navigation: hidden on mobile, flex on medium screens */}
  <nav className="hidden md:flex items-center space-x-4">
    <div className="text-sm">Features</div>
    <div className="text-sm">Pricing</div>
    <div className="text-sm">About</div>
  </nav>
  
  {/* Action buttons */}
  <div className="flex items-center space-x-2">
    <button className="px-3 py-1 rounded">Login</button>
    <button className="px-3 py-1 rounded">Signup</button>
  </div>
</header>

{/* Hero section with centered content */}
<section className="px-4 py-16 flex flex-col items-center text-center">
  <h1 className="text-3xl md:text-4xl font-bold mb-3">Your Product Tagline</h1>
  <p className="max-w-lg mb-8">A concise description of your product and its main benefit.</p>
  <div className="flex space-x-4">
    <button className="px-6 py-2 rounded-md">Get Started</button>
    <button className="px-6 py-2 rounded-md">Learn More</button>
  </div>
</section>

{/* Features section with responsive grid */}
<section className="px-4 py-12">
  <h2 className="text-2xl font-bold text-center mb-12">Key Features</h2>
  
  {/* 1 column on mobile, 3 columns on desktop */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"></div>
      <h3 className="font-semibold mb-2">Feature One</h3>
      <p className="text-sm">Feature description here.</p>
    </div>
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"></div>
      <h3 className="font-semibold mb-2">Feature Two</h3>
      <p className="text-sm">Feature description here.</p>
    </div>
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"></div>
      <h3 className="font-semibold mb-2">Feature Three</h3>
      <p className="text-sm">Feature description here.</p>
    </div>
  </div>
</section>`;

  const cardGridCode = `// Responsive card grid with multiple breakpoints
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {/* Card with flexbox layout */}
  <div className="bg-white rounded-lg shadow border flex flex-col">
    {/* Card image */}
    <div className="h-40 bg-gradient-to-br from-indigo-200 to-purple-200"></div>
    
    {/* Card content with flex layout */}
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="font-medium mb-2">Card Title</h3>
      <p className="text-sm flex-1">Description that will expand to fill available space.</p>
      
      {/* Card footer with flex justification */}
      <div className="mt-4 pt-4 border-t flex justify-between items-center">
        <span className="text-xs text-gray-500">Category</span>
        <button className="text-xs text-indigo-600 font-medium">View</button>
      </div>
    </div>
  </div>
  
  {/* Repeat for more cards */}
</div>`;

  // Define the example sections for both side navigation and content
  const examples = [
    {
      id: "dashboard-layout",
      title: "Dashboard Layout",
      codeSnippet: dashboardCode,
      example: <DashboardLayout />,
      highlightedParts: [
        {
          text: "flex h-screen",
          explanation:
            "Creates a flexible container that fills the viewport height",
        },
        {
          text: "hidden md:block",
          explanation:
            "Responsive visibility: hidden on mobile, visible on medium screens",
        },
        {
          text: "flex-1",
          explanation: "Allows this element to grow and fill available space",
        },
        {
          text: "grid grid-cols-1 md:grid-cols-3",
          explanation:
            "Responsive grid: 1 column on mobile, 3 columns on medium screens",
        },
        {
          text: "lg:col-span-2",
          explanation: "Makes an element span 2 columns on large screens",
        },
      ],
    },
    {
      id: "landing-page-layout",
      title: "Landing Page Layout",
      codeSnippet: landingPageCode,
      example: <LandingPageLayout />,
      highlightedParts: [
        {
          text: "flex items-center justify-between",
          explanation:
            "Flexbox for horizontal alignment with space between items",
        },
        {
          text: "hidden md:flex",
          explanation:
            "Responsive navigation: hidden on mobile, flex layout on medium screens",
        },
        {
          text: "flex flex-col items-center text-center",
          explanation: "Centered column layout for hero section",
        },
        {
          text: "grid grid-cols-1 md:grid-cols-3",
          explanation:
            "Responsive grid for features: 1 column on mobile, 3 on desktop",
        },
        {
          text: "max-w-4xl mx-auto",
          explanation: "Centers a container with maximum width",
        },
      ],
    },
    {
      id: "card-grid-layout",
      title: "Card Grid Layout",
      codeSnippet: cardGridCode,
      example: <CardLayoutExample />,
      highlightedParts: [
        {
          text: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          explanation:
            "Multi-breakpoint responsive grid: adapts at small, large, and extra large screens",
        },
        {
          text: "flex flex-col",
          explanation: "Vertical flexbox layout for card content",
        },
        {
          text: "flex-1",
          explanation: "Allows description to take available vertical space",
        },
        {
          text: "flex justify-between items-center",
          explanation:
            "Horizontal flexbox with items at opposite ends and vertically centered",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Side Navigation - Hidden on mobile, visible on large screens */}
      <div className="lg:w-64 shrink-0">
        <div className="lg:sticky lg:top-24 p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900">
          <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100">
            Jump to Example
          </h3>
          <nav className="space-y-1">
            {examples.map((example) => (
              <a
                key={example.id}
                href={`#${example.id}`}
                className="block px-3 py-2 text-sm rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {example.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-20">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-transparent bg-clip-text">
            Layout Examples
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Real-world examples showing how Flexbox and Grid work together to
            create common layouts. These examples showcase the power of CSS
            layout systems with minimal code.
          </p>
        </header>

        {examples.map((example) => (
          <div key={example.id} id={example.id}>
            <ExampleTab
              title={example.title}
              example={example.example}
              codeSnippet={example.codeSnippet}
              highlightedParts={example.highlightedParts}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
