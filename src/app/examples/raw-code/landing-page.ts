export const landingPageCode = `
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
`;
