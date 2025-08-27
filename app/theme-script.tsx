"use client";

export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function() {
  const storageKey = "theme";
  const root = document.documentElement;
  function setTheme(t){ root.setAttribute("data-theme", t); }
  const persisted = localStorage.getItem(storageKey);
  if (persisted === "light" || persisted === "dark") {
    setTheme(persisted);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }
})();`
      }}
    />
  );
}
