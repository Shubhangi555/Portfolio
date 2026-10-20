import React, { useEffect, useRef, useState } from "react";
import { FiPlus, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects, isRealLink } from "../../data";
import { prefersReducedMotion } from "../../hooks";
import SectionHead from "../SectionHead";

// Floating thumbnail that eases toward the cursor while a row is hovered (fine pointers only).
function usePreviewFollower() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const fine = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    if (!el || !fine) return undefined;
    const reduced = prefersReducedMotion();
    let x = 0, y = 0, tx = 0, ty = 0, raf = null;
    const loop = () => {
      x += (tx - x) * (reduced ? 1 : 0.14);
      y += (ty - y) * (reduced ? 1 : 0.14);
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      // Stop the loop once settled; the next pointermove restarts it.
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(loop) : null;
    };
    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (raf === null) raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

// Screenshot when we have one, otherwise a typographic cover in the site's own style.
function Shot({ project, index, decorative }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={decorative ? "" : `${project.title} screenshot`}
        loading="lazy"
      />
    );
  }
  return (
    <div
      className={`cover cover--${index % 3}`}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : `${project.title} cover`}
    >
      <span className="cover__n">{String(index + 1).padStart(2, "0")}</span>
      <span className="cover__title">{project.title}</span>
      <span className="cover__tags">{project.tags.join(" · ")}</span>
    </div>
  );
}

function ProjectRow({ project, index, open, onToggle, onHover }) {
  const n = String(index + 1).padStart(2, "0");
  const panelId = `project-panel-${index}`;
  return (
    <li className={`work__item ${open ? "is-open" : ""}`} data-reveal>
      <button
        type="button"
        className="work__row"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        onPointerEnter={() => onHover(index)}
        onPointerLeave={() => onHover(null)}
      >
        <span className="work__n">{n}</span>
        <span className="work__title">{project.title}</span>
        <span className="work__kind">{project.kind}</span>
        <span className="work__tags">
          {project.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </span>
        <span className="work__toggle" aria-hidden="true">
          <FiPlus />
        </span>
      </button>

      <div className="work__panel" id={panelId} role="region" aria-label={project.title}>
        <div className="work__panel-inner">
          <figure className="work__shot">
            <Shot project={project} index={index} />
          </figure>
          <div className="work__detail">
            <p>{project.summary}</p>
            <ul className="work__highlights">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="work__links">
              {isRealLink(project.live) && (
                <a className="btn btn--solid" href={project.live} target="_blank" rel="noopener noreferrer">
                  Visit live <FiArrowUpRight aria-hidden="true" />
                </a>
              )}
              {isRealLink(project.code) && (
                <a className="btn btn--ghost" href={project.code} target="_blank" rel="noopener noreferrer">
                  <FiGithub aria-hidden="true" /> Source
                </a>
              )}
              {!isRealLink(project.live) && !isRealLink(project.code) && (
                <span className="work__private">
                  {/in progress/i.test(project.kind)
                    ? "In active development — demo coming soon"
                    : "Walkthrough available on request"}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

function Projects() {
  const [openIndex, setOpenIndex] = useState(0);
  const [hovered, setHovered] = useState(null);
  const previewRef = usePreviewFollower();

  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <SectionHead
        id="work-title"
        section="work"
        title="Selected work"
        aside={`${projects.length} projects · click to expand`}
      />

      <ol className="work__list">
        {projects.map((p, i) => (
          <ProjectRow
            key={p.title}
            project={p}
            index={i}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            onHover={setHovered}
          />
        ))}
      </ol>

      {/* Hidden when the hovered row is already expanded — its screenshot is visible. */}
      <div
        ref={previewRef}
        className={`work__preview ${hovered !== null && hovered !== openIndex ? "is-visible" : ""}`}
        aria-hidden="true"
      >
        {projects.map((p, i) => (
          <div key={p.title} className={`work__preview-item ${hovered === i ? "is-active" : ""}`}>
            <Shot project={p} index={i} decorative />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
