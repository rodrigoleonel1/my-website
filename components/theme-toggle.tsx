"use client";

import { useTheme } from "next-themes";
import Moon from "./svg/moon";
import Sun from "./svg/sun";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
    const [hasMounted, setHasMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  function toggleTheme() {
    return currentTheme === "light" ? setTheme("dark") : setTheme("light");
  }
    useEffect(() => setHasMounted(true), []);

    if (!hasMounted)
      return (
        <span className="animate-pulse min-w-[28px] min-h-[28px] p-2 rounded-full dark:bg-zinc-800 bg-zinc-200 border dark:border-zinc-700 border-zinc-300"></span>
      );

  return (
    <button
      onClick={toggleTheme}
      className={`transition-transform group: ${
        currentTheme === "light" ? "-rotate-180" : "rotate-0"
      }`}
      aria-label="Toggle Theme"
    >
      {currentTheme === "light" ? <Sun /> : <Moon />}
    </button>
  );
}
