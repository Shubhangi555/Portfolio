import React from "react";
import { about, profile } from "../../data";
import SectionHead from "../SectionHead";

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <SectionHead id="about-title" section="about" title="About" aside="The person behind the components" />

      <p className="about__lead" data-reveal>
        I build interfaces that feel <em>obvious in hindsight</em> — fast,
        accessible, and quietly <em>opinionated</em>.
      </p>

      <div className="about__grid">
        <dl className="spec" data-reveal>
          <div>
            <dt>Role</dt>
            <dd>
              {profile.role} at {profile.company}
            </dd>
          </div>
          <div>
            <dt>Based</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Frontend architecture, server state, UI performance</dd>
          </div>
          <div>
            <dt>Daily stack</dt>
            <dd>React · Next.js · TypeScript · Redux Toolkit · React Query</dd>
          </div>
          <div>
            <dt>Education</dt>
            <dd>B.Sc. IT, Jnan Vikas Mandal’s Degree College (2020–23) · CGPA 8.8</dd>
          </div>
        </dl>

        <div className="about__body" data-reveal>
          {about.body.map((p, i) => (
            <p key={i} className={i === 0 ? "dropcap" : undefined}>
              {p}
            </p>
          ))}

          <h3 className="eyebrow">Off the clock</h3>
          <ul className="offclock">
            {about.offClock.map((o) => (
              <li key={o.k}>
                <b>{o.k}</b> {o.v}
              </li>
            ))}
          </ul>

          <blockquote className="motto">
            “{about.motto}”
            <cite>— {profile.firstName}</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default About;
