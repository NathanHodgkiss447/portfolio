"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme") as "dark" | "light" | null;
    if (current) setTheme(current);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      className={styles.toggle}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className={styles.icon} />
      ) : (
        <Moon className={styles.icon} />
      )}
    </button>
  );
}
