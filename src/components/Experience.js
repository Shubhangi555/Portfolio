import React from "react";
import { FiAward } from "react-icons/fi";
import { experience, impact } from "../data";
import SectionHead from "./SectionHead";

// Career as release notes, newest first; each entry's `version` is set in data.js.
function Experience() {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <SectionHead id="experience-title" section="experience" title="Experience" aside="CHANGELOG.md" />

      <ul className="impact" data-reveal>
        {impact.map((m) => (
          <li key={m.label}>
            <span className="impact__value">{m.value}</span>
            <span className="impact__label">{m.label}</span>
          </li>
        ))}
      </ul>

      <ol className="log">
        {experience.map((job) => (
          <li key={job.company} className={`log__entry ${job.current ? "is-current" : ""}`} data-reveal>
            <div className="log__meta">
              <span className="log__version">{job.version}</span>
              <span className="log__period">{job.period}</span>
              {job.current && (
                <span className="log__now">
                  <span className="dot dot--live" aria-hidden="true" /> current
                </span>
              )}
            </div>

            <div className="log__body">
              <h3 className="log__role">
                {job.role} <span>@ {job.company}</span>
              </h3>
              <p className="log__summary">{job.summary}</p>

              {job.modules && (
                <div className="log__modules" aria-label="Modules shipped">
                  <span className="eyebrow">Shipped</span>
                  {job.modules.map((m) => (
                    <span key={m} className="chip">
                      {m}
                    </span>
                  ))}
                </div>
              )}

              {job.points.length > 0 && (
                <ul className="log__points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}

              {job.award && (
                <p className="log__award">
                  <FiAward aria-hidden="true" /> {job.award}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
