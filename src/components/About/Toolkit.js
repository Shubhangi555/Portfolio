import React, { useState } from "react";
import { stack, tools } from "../../data";
import SectionHead from "../SectionHead";
import Github from "./Github";

// Skills presented as the package.json they'd actually live in.
// Hovering a dependency line lights up its tile, and vice versa.
function Toolkit({ theme }) {
  const [active, setActive] = useState(null);

  const line = (item, last, value) => (
    <span
      key={item.name}
      className={`pkg__line ${active === item.name ? "is-active" : ""}`}
      onPointerEnter={() => setActive(item.name)}
      onPointerLeave={() => setActive(null)}
    >
      {"    "}
      <span className="t-str">"{item.name}"</span>
      <span className="t-punc">: </span>
      <span className="t-num">"{value}"</span>
      {last ? "" : ","}
      {"\n"}
    </span>
  );

  const tile = (item) => (
    <li
      key={item.name}
      className={`tile ${active === item.name ? "is-active" : ""}`}
      onPointerEnter={() => setActive(item.name)}
      onPointerLeave={() => setActive(null)}
    >
      {item.icon ? (
        <img src={item.icon} alt="" aria-hidden="true" />
      ) : (
        <span className="tile__mono" aria-hidden="true">
          {item.mono}
        </span>
      )}
      <span>{item.label}</span>
    </li>
  );

  return (
    <section className="section toolkit" id="toolkit" aria-labelledby="toolkit-title">
      <SectionHead id="toolkit-title" section="toolkit" title="Toolkit" aside="npm ls --depth=0" />

      <div className="toolkit__grid">
        <pre className="pkg" data-reveal aria-label="Skills as a package.json file">
          <span className="pkg__file">package.json</span>
          <code>
            <span className="t-punc">{"{"}</span>
            {"\n  "}
            <span className="t-str">"name"</span>
            <span className="t-punc">: </span>
            <span className="t-num">"shubhangi-bhosale"</span>,{"\n  "}
            <span className="t-str">"dependencies"</span>
            <span className="t-punc">{": {"}</span>
            {"\n"}
            {stack.map((s, i) => line(s, i === stack.length - 1, s.level))}
            {"  "}
            <span className="t-punc">{"},"}</span>
            {"\n  "}
            <span className="t-str">"devDependencies"</span>
            <span className="t-punc">{": {"}</span>
            {"\n"}
            {tools.map((t, i) => line(t, i === tools.length - 1, "latest"))}
            {"  "}
            <span className="t-punc">{"}"}</span>
            {"\n"}
            <span className="t-punc">{"}"}</span>
          </code>
        </pre>

        <div className="toolkit__tiles" data-reveal>
          <h3 className="eyebrow">Dependencies</h3>
          <ul className="tiles">{stack.map(tile)}</ul>
          <h3 className="eyebrow">Dev dependencies</h3>
          <ul className="tiles tiles--tools">{tools.map(tile)}</ul>
        </div>
      </div>

      <Github theme={theme} />
    </section>
  );
}

export default Toolkit;
