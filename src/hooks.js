import { useEffect, useRef, useState, useCallback } from "react";

const THEME_KEY = "sb-theme";

// Storage can throw in private mode / blocked cookies — never let that break the page.
function readTheme() {
  try {
    const saved = window.localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {
    /* ignore */
  }
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    // Keep the mobile browser chrome in sync with the chosen theme.
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((m) => m.setAttribute("content", theme === "dark" ? "#0f0e0c" : "#f2eee5"));
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      /* ignore */
    }
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );
  return [theme, toggle];
}

// Marks every [data-reveal] element with `data-in` once it scrolls into view.
// An attribute (not a class) is used on purpose: React rewrites `className`
// whenever it changes (e.g. a project row toggling `is-open`), which would
// wipe a manually added class and hide the element again.
export function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]:not([data-in])");
    const show = (el) => el.setAttribute("data-in", "");
    if (!("IntersectionObserver" in window)) {
      els.forEach(show);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

// Live clock in a given IANA timezone, e.g. "14:05:09".
export function useClock(timeZone) {
  const format = useCallback(() => {
    try {
      return new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone,
      }).format(new Date());
    } catch (e) {
      return new Date().toLocaleTimeString();
    }
  }, [timeZone]);

  const [now, setNow] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setNow(format()), 1000);
    return () => clearInterval(id);
  }, [format]);
  return now;
}

// Resolves false instead of throwing when the clipboard is blocked (insecure context / permissions).
export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    return false;
  }
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Element drifts slightly toward the pointer while hovered.
export function useMagnetic(strength = 0.25) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const reset = () => {
      el.style.transform = "";
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", reset);
    };
  }, [strength]);
  return ref;
}
