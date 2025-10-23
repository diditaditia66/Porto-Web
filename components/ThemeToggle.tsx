"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as
      | "light"
      | "dark"
      | null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial = saved ? saved : prefersDark ? "dark" : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-100 transition dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
      title={theme === "light" ? "Ganti ke mode gelap" : "Ganti ke mode terang"}
      aria-label={theme === "light" ? "Ganti ke mode gelap" : "Ganti ke mode terang"}
    >
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
}
