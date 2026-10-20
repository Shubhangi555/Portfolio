import React from "react";
import { sectionNumber } from "./useSectionNav";

// Editorial section opener: "01 — About ........ aside"
function SectionHead({ id, section, title, aside }) {
  return (
    <div className="section-head" data-reveal>
      <span className="section-head__n">{sectionNumber(section)}</span>
      <h2 className="section-head__title" id={id}>
        {title}
      </h2>
      <span className="section-head__rule" aria-hidden="true" />
      {aside && <span className="section-head__aside">{aside}</span>}
    </div>
  );
}

export default SectionHead;
