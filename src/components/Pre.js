import React, { useEffect, useState } from "react";
import { profile } from "../data";
import { prefersReducedMotion } from "../hooks";

// Counter preloader: 000 → 100, then the curtain lifts.
function Pre({ onDone }) {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      onDone();
      return undefined;
    }
    let raf;
    const start = performance.now();
    const duration = 1100;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      // ease-out so the count decelerates toward 100
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setLeaving(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  useEffect(() => {
    if (!leaving) return undefined;
    const id = setTimeout(onDone, 650);
    return () => clearTimeout(id);
  }, [leaving, onDone]);

  return (
    <div className={`pre ${leaving ? "pre--out" : ""}`} aria-hidden="true">
      <div className="pre__row">
        <span className="pre__name">
          {profile.firstName} <em>{profile.lastName}</em>
        </span>
        <span className="pre__label">Portfolio — loading interface</span>
      </div>
      <div className="pre__count">{String(count).padStart(3, "0")}</div>
      <div className="pre__bar" style={{ transform: `scaleX(${count / 100})` }} />
    </div>
  );
}

export default Pre;
