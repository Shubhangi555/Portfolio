import React from "react";
import GitHubCalendar from "react-github-calendar";
import { profile } from "../../data";

// The calendar renders SVG fills directly, so it needs literal colours per theme.
const THEMES = {
  light: {
    level0: "#E6E0D3",
    level1: "#F8C7B3",
    level2: "#F79470",
    level3: "#EC5524",
    level4: "#A9330F",
  },
  dark: {
    level0: "#24211C",
    level1: "#5C2615",
    level2: "#963918",
    level3: "#DB4E1E",
    level4: "#FF8A5C",
  },
};

function Github({ theme }) {
  return (
    <div className="commits" data-reveal>
      <div className="commits__head">
        <code>
          <span className="t-punc">$</span> git log --author="{profile.githubUser}" --since="1 year"
        </code>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-u">
          @{profile.githubUser} ↗
        </a>
      </div>
      <div className="commits__scroll">
        <GitHubCalendar
          username={profile.githubUser}
          theme={THEMES[theme] || THEMES.light}
          blockSize={13}
          blockMargin={4}
          blockRadius={2}
          fontSize={12}
          labels={{ totalCount: "{{count}} contributions in the last year" }}
        />
      </div>
    </div>
  );
}

export default Github;
