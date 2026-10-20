import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCopy, FiCheck } from "react-icons/fi";
import { profile } from "../data";
import { copyText } from "../hooks";
import SectionHead from "./SectionHead";

function Contact() {
  const [copied, setCopied] = useState(null); // null | "ok" | "fail"

  useEffect(() => {
    if (!copied) return undefined;
    const id = setTimeout(() => setCopied(null), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const links = [
    { label: "LinkedIn", sub: "Connect / message", href: profile.linkedin },
    { label: "GitHub", sub: `@${profile.githubUser}`, href: profile.github },
  ];

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <SectionHead id="contact-title" section="contact" title="Contact" aside="Based in IST · UTC+5:30" />

      <p className="contact__big" data-reveal>
        Let’s build something <em>considered.</em>
      </p>

      <div className="mail" data-reveal>
        <span className="eyebrow">Write to me</span>
        <div className="mail__row">
          <a className="mail__addr" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <button
            type="button"
            className="btn btn--ghost mail__copy"
            onClick={async () => setCopied((await copyText(profile.email)) ? "ok" : "fail")}
          >
            {copied === "ok" ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
            {copied === "ok" ? "Copied" : copied === "fail" ? "Copy blocked" : "Copy"}
          </button>
        </div>
        <span className="sr-only" role="status">
          {copied === "ok" ? "Email address copied to clipboard" : ""}
        </span>
      </div>

      <ul className="contact__list">
        {links.map((l) => (
          <li key={l.label} data-reveal>
            <a href={l.href} target="_blank" rel="noopener noreferrer" className="contact__row">
              <span className="contact__label">{l.label}</span>
              <span className="contact__sub">{l.sub}</span>
              <FiArrowUpRight className="contact__arrow" aria-hidden="true" />
            </a>
          </li>
        ))}
        <li data-reveal>
          <Link to="/resume" className="contact__row">
            <span className="contact__label">Résumé</span>
            <span className="contact__sub">View or download PDF</span>
            <FiArrowUpRight className="contact__arrow" aria-hidden="true" />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
