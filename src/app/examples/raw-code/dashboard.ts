export const dashboardCode = `
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
`;
