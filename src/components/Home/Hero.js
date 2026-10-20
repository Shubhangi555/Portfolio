import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { profile } from "../../data";
import { useMagnetic, prefersReducedMotion } from "../../hooks";
import useSectionNav from "../useSectionNav";

// Each letter is its own span so it can stagger in and react to hover.
function SplitWord({ word, className, offset = 0 }) {
  return (
    <span className={`split ${className || ""}`} aria-hidden="true">
      {word.split("").map((ch, i) => (
        <span key={i} className="split__ch" style={{ "--i": i + offset }}>
          {ch}
        </span>
      ))}
    </span>
  );
}

function RotatingWord({ words }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);
  return (
    <span className="slot" aria-live="off">
      <span key={i} className="slot__word">
        {words[i]}
      </span>
    </span>
  );
}

function Hero({ ready }) {
  const ref = useRef(null);
  const ctaRef = useMagnetic(0.3);
  const goTo = useSectionNav();

  // Feed pointer position to CSS for the grid spotlight.
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section ref={ref} className={`hero ${ready ? "is-ready" : ""}`} id="top">
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__meta">
        <span>( Index / {new Date().getFullYear()} )</span>
        <span className="hero__meta-mid">Portfolio of a {profile.role}</span>
        <span className="status">
          <span className="dot dot--live" aria-hidden="true" /> Currently building at {profile.company}
        </span>
      </div>

      <h1 className="hero__name">
        <span className="sr-only">
          {profile.firstName} {profile.lastName}, {profile.role}
        </span>
        <SplitWord word={profile.firstName} />
        <span className="hero__name-row2">
          <span className="hero__asterisk" aria-hidden="true">✳</span>
          <SplitWord
            word={profile.lastName}
            className="split--italic"
            offset={profile.firstName.length}
          />
        </span>
      </h1>

      <div className="hero__foot">
        <p className="hero__lede">
          Crafting <RotatingWord words={profile.roles} />
          <br />
          for the web with React &amp; TypeScript — from {profile.location}.
        </p>

        <pre className="hero__code" aria-label="Profile as a React component">
          <code>
            <span className="t-punc">&lt;</span>
            <span className="t-tag">Developer</span>
            {"\n  "}
            <span className="t-attr">name</span>=
            <span className="t-str">"{profile.firstName} {profile.lastName}"</span>
            {"\n  "}
            <span className="t-attr">company</span>=
            <span className="t-str">"{profile.company}"</span>
            {"\n  "}
            <span className="t-attr">stack</span>=
            <span className="t-punc">{"{["}</span>
            <span className="t-str">"React"</span>,{" "}
            <span className="t-str">"Next"</span>,{" "}
            <span className="t-str">"TS"</span>
            <span className="t-punc">{"]}"}</span>
            {"\n  "}
            <span className="t-attr">apisIntegrated</span>=
            <span className="t-punc">{"{"}</span>
            <span className="t-num">25</span>
            <span className="t-punc">{"}"}</span>
            {"\n  "}
            <span className="t-attr">shipsToProd</span>
            {"\n"}
            <span className="t-punc">/&gt;</span>
            <span className="caret" aria-hidden="true" />
          </code>
        </pre>

        <div className="hero__cta">
          <button
            ref={ctaRef}
            type="button"
            className="btn btn--solid"
            onClick={() => goTo("work")}
          >
            Selected work <FiArrowDownRight aria-hidden="true" />
          </button>
          <Link to="/resume" className="btn btn--ghost">
            Résumé <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
