"use client";

import { useEffect } from "react";
import Navigation from "./Navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Only set up listeners AFTER initial hydration is complete
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    // Handle manual theme toggling
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        if (e.newValue === "dark") {
          document.documentElement.classList.add("dark");
        } else if (e.newValue === "light") {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    // Add event listeners
    mediaQuery.addEventListener("change", handleChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
