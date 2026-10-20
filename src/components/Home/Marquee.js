import React from "react";

const ITEMS = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "React Query",
  "WebSockets",
  "REST APIs",
  "RBAC",
  "Tailwind CSS",
  "Accessibility",
  "Performance",
];

// Content is rendered twice so the -50% translate loops seamlessly.
function Marquee() {
  const row = ITEMS.map((t) => (
    <span key={t} className="marquee__item">
      {t}
      <span className="marquee__sep" aria-hidden="true">✳</span>
    </span>
  ));
  return (
    <div className="marquee" aria-label={ITEMS.join(", ")}>
      <div className="marquee__track" aria-hidden="true">
        <React.Fragment key="a">{row}</React.Fragment>
        <React.Fragment key="b">{row}</React.Fragment>
      </div>
    </div>
  );
}

export default Marquee;
