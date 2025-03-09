"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/flexbox", label: "Flexbox" },
    { path: "/grid", label: "Grid" },
    { path: "/examples", label: "Examples" },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
              Layout in a Nutshell
            </span>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === item.path
                      ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="flex space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`rounded-md px-2 py-1 text-sm font-medium transition-colors ${
                    pathname === item.path
                      ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
