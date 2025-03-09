export const cardGridCode = `
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
`;
