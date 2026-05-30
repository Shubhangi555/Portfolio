import React from "react";

function Pre({ load }) {
  if (!load) return null;

  return (
    <div id="preloader">
      <div className="loader-content">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="#c770f0"
            strokeWidth="3"
            opacity="0.3"
          />

          <ellipse
            cx="60"
            cy="60"
            rx="45"
            ry="18"
            stroke="#c770f0"
            strokeWidth="2"
          />

          <ellipse
            cx="60"
            cy="60"
            rx="45"
            ry="18"
            transform="rotate(60 60 60)"
            stroke="#c770f0"
            strokeWidth="2"
          />

          <ellipse
            cx="60"
            cy="60"
            rx="45"
            ry="18"
            transform="rotate(-60 60 60)"
            stroke="#c770f0"
            strokeWidth="2"
          />

          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="24"
            fontWeight="700"
          >
            SB
          </text>
        </svg>

        <h3>Shubhangi Bhosale</h3>
        <p>Frontend Developer • React Developer</p>
      </div>
    </div>
  );
}

export default Pre;
