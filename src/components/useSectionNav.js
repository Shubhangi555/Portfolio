import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { prefersReducedMotion } from "../hooks";

// Order here drives section numbering everywhere (header, palette, section heads).
export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "toolkit", label: "Toolkit" },
  { id: "contact", label: "Contact" },
].map((s, i) => ({ ...s, n: String(i + 1).padStart(2, "0") }));

export const RESUME_N = String(SECTIONS.length + 1).padStart(2, "0");
export const sectionNumber = (id) => (SECTIONS.find((s) => s.id === id) || {}).n;

// Tracks which section is currently under the header (scrollspy).
export function useActiveSection(enabled) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (!enabled || !("IntersectionObserver" in window)) return undefined;
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return undefined;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      // A thin band ~35% down the viewport decides the "current" section.
      { rootMargin: "-35% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    const onTop = () => window.scrollY < 200 && setActive(null);
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, [enabled]);
  return active;
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
  return true;
}

// Scrolls to a home-page section, routing back to "/" first when needed.
export default function useSectionNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return useCallback(
    (id) => {
      if (pathname === "/" && scrollToId(id)) return;
      navigate("/", { state: { scrollTo: id } });
    },
    [pathname, navigate]
  );
}
