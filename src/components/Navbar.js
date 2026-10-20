import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMoon, FiSun, FiCommand } from "react-icons/fi";
import { profile } from "../data";
import { useClock } from "../hooks";
import useSectionNav, { SECTIONS, RESUME_N, useActiveSection } from "./useSectionNav";

function Header({ theme, onToggleTheme, onOpenPalette }) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const goTo = useSectionNav();
  const { pathname } = useLocation();
  const time = useClock(profile.timezone);
  const active = useActiveSection(pathname === "/");
  const progressRef = useRef(null);

  // Hide while scrolling down, reveal on scroll up; drive the progress bar.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > 240 && y > last);
      last = y;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      // Written straight to the DOM to avoid a React render per scroll frame.
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`header ${scrolled ? "header--solid" : ""} ${
        hidden ? "header--hidden" : ""
      }`}
    >
      <Link to="/" className="brand" aria-label={`${profile.firstName} ${profile.lastName} — home`}>
        <span className="brand__mark">
          {profile.initials.toLowerCase()}
          <i>.</i>
        </span>
        <span className="brand__meta">
          {profile.firstName} {profile.lastName}
          <small>{profile.role}</small>
        </span>
      </Link>

      <div className="header__clock" aria-label="Local time">
        <span className="dot dot--live" aria-hidden="true" />
        MH, IN <b>{time}</b> IST
      </div>

      <nav className="header__nav" aria-label="Primary">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`navlink ${active === s.id ? "is-active" : ""}`}
            aria-current={active === s.id ? "location" : undefined}
            onClick={() => goTo(s.id)}
          >
            <sup>{s.n}</sup>
            {s.label}
          </button>
        ))}
        <Link
          to="/resume"
          className={`navlink ${pathname === "/resume" ? "is-active" : ""}`}
        >
          <sup>{RESUME_N}</sup>Résumé
        </Link>
      </nav>

      <div className="header__actions">
        <button
          type="button"
          className="kbd-btn"
          onClick={onOpenPalette}
          aria-label="Open command menu"
        >
          <FiCommand aria-hidden="true" />
          <span className="kbd-btn__desk">K</span>
          <span className="kbd-btn__mob">Menu</span>
        </button>
        <button
          type="button"
          className="icon-btn"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "paper" : "ink"} mode`}
          title={theme === "dark" ? "Paper mode" : "Ink mode"}
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
      </div>
      <span className="header__progress" ref={progressRef} aria-hidden="true" />
    </header>
  );
}

export default Header;
