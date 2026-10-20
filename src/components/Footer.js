import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data";
import { scrollToId } from "./useSectionNav";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__colophon">
        <span className="eyebrow">Colophon</span>
        <p>
          Designed &amp; hand-built by {profile.firstName} {profile.lastName}.
          Set in Instrument Serif, Space Grotesk and JetBrains Mono. Built with
          React — press <kbd>Ctrl</kbd> <kbd>K</kbd> anywhere.
        </p>
      </div>
      <div className="footer__bar">
        <span>© {year} {profile.initials}</span>
        <span className="footer__social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-u">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-u">
            LinkedIn
          </a>
        </span>
        <button type="button" className="footer__top" onClick={() => scrollToId("top") || window.scrollTo(0, 0)}>
          Back to top <FiArrowUp aria-hidden="true" />
        </button>
      </div>
      <div className="footer__giant" aria-hidden="true">
        {profile.firstName.toLowerCase()}
        <i>.</i>
      </div>
    </footer>
  );
}

export default Footer;
