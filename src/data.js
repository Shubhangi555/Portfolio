// Single source of truth for all portfolio content.
// Edit copy, links and projects here — components only handle presentation.

import project1 from "./Assets/Projects/project1.png";
import aiinterview from "./Assets/Projects/ai-interview.png";
import pennywise from "./Assets/Projects/pennywise.png";
import taskDashboard from "./Assets/Projects/taskDashboard.png";
import foodOrdering from "./Assets/Projects/foodOrdering.png";
import liveChat from "./Assets/Projects/liveChat.png";

import Javascript from "./Assets/TechIcons/Javascript.svg";
import Typescript from "./Assets/TechIcons/Typescript.svg";
import ReactIcon from "./Assets/TechIcons/React.svg";
import Redux from "./Assets/TechIcons/Redux.svg";
import Node from "./Assets/TechIcons/Node.svg";
import Tailwind from "./Assets/TechIcons/Tailwind.svg";
import MUI from "./Assets/TechIcons/MUI.svg";
import SQL from "./Assets/TechIcons/SQL.svg";
import Git from "./Assets/TechIcons/Git.svg";
import Postman from "./Assets/TechIcons/Postman.svg";
import VSCode from "./Assets/TechIcons/vscode.svg";
import Chrome from "./Assets/TechIcons/Google Chrome.svg";

export const profile = {
  firstName: "Shubhangi",
  lastName: "Bhosale",
  initials: "SB",
  role: "React Developer",
  company: "Arcitech",
  location: "Navi Mumbai, India",
  timezone: "Asia/Kolkata",
  roles: ["dashboards", "real-time apps", "AI workflows", "design systems"],
  email: "bhosaleshubhangi333@gmail.com",
  github: "https://github.com/Shubhangi555",
  githubUser: "Shubhangi555",
  linkedin: "https://www.linkedin.com/in/shubhangi-bhosale-853144244/",
  site: "https://shubhangibhosale.vercel.app",
};

// Every figure here comes straight from the résumé — keep it that way.
export const impact = [
  { value: "1.5+", label: "years shipping production React" },
  { value: "30+", label: "REST APIs integrated with TanStack Query & RTK" },
  { value: "7+", label: "production modules across 3 client projects" },
  { value: "200+", label: "bugs resolved in a single production project" },
];

export const about = {
  body: [
    "I'm a React developer in Navi Mumbai, currently building production software at Arcitech. My day-to-day is React and TypeScript, with Redux Toolkit and TanStack Query handling the hard parts of state — caching, mutations, and keeping the UI honest about what the server knows.",
    "I care about the parts users never notice: reusable components, controlled re-renders, code-split routes, and code the next developer can read without a map.",
  ],
  offClock: [
    { k: "Exploring", v: "new tech before it's mainstream" },
    { k: "Studying", v: "frontend architecture & best practices" },
    { k: "Travelling", v: "and finding new places" },
  ],
  motto: "Keep learning, keep building, never stop growing.",
};

export const experience = [
  {
    version: "v2.0",
    company: "Arcitech",
    role: "React Developer",
    period: "Aug 2025 — Present",
    place: "Navi Mumbai",
    current: true,
    summary:
      "Building and maintaining production web applications with React, TypeScript, Redux Toolkit and TanStack Query across 3 client projects.",
    modules: [
      "Marketplace",
      "Admin access / RBAC",
      "Analytics & charts",
      "OCR / document processing",
      "Book a meeting",
      "Voice submission",
      "Assignment management",
    ],
    points: [
      "Delivered 7+ production modules across 3 client projects using React and TypeScript.",
      "Built interactive data visualisations with Recharts and integrated Driver.js for guided, step-by-step product tours for new users.",
      "Integrated 30+ REST APIs with TanStack Query and Redux Toolkit — data fetching, caching, mutations, async state and error handling.",
      "Resolved 200+ bugs in a single production project across UI, API, state-management and integration issues, using root-cause analysis and browser debugging.",
      "Improved performance through memoisation, controlled re-renders, code splitting and lazy loading; built reusable components, custom hooks and shared utilities used across modules.",
      "Implemented SSE-based streaming for AI-generated scorecard results and WebSocket-based real-time features; integrated GreytHR, Hubstaff, Google Meet, email and calendar services.",
      "Worked in Agile sprints with product, design, backend and QA teams to ship and maintain features in production.",
    ],
    award: "Xcel Silver Club Certificate of Achievement — Arcitech, April 2026",
  },
  {
    version: "v1.0",
    company: "Webtales IT Solutions",
    role: "Frontend Developer Intern",
    period: "Jan 2025 — Jul 2025",
    place: "Navi Mumbai",
    summary:
      "Turned business requirements and Figma / Adobe XD designs into pixel-accurate, responsive client interfaces.",
    points: [
      "Built responsive client-facing interfaces with React.js, TypeScript, Tailwind CSS, HTML5, CSS3 and jQuery.",
      "Converted Figma and Adobe XD designs into pixel-accurate, cross-browser-compatible layouts.",
      "Created reusable React components that kept the UI consistent and reduced repeated code.",
      "Fixed layout, responsiveness and browser-compatibility bugs using Chrome DevTools, and collaborated with designers and developers through feedback cycles.",
    ],
  },
];
// Education lives in the About section's spec list, not here — this list is work history only.

// `code` / `live` links are hidden automatically while they are placeholders.
// Projects without an `image` get a generated typographic cover.
export const projects = [
  {
    title: "CSC Service Portal",
    kind: "Client · Production",
    tags: ["React", "PHP", "MySQL", "i18n"],
    image: project1,
    summary:
      "A production Common Service Center portal with English & Marathi support, light/dark theming, dynamic blog management, service listings and enquiry forms.",
    highlights: [
      "Multilingual UI (EN / मराठी)",
      "Performance, accessibility & SEO tuning",
      "Deployed and maintained on Hostinger",
    ],
    live: "https://shreeservz.com",
    code: "#",
  },
  {
    title: "AI Interview Simulator",
    kind: "Product · Concept",
    tags: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Gemini API",
      "Web Speech API",
      "Express",
      "Zod",
      "Vercel",
    ],
    image: aiinterview,
    summary:
      "A voice-first mock interview app: answer AI-generated questions out loud, get live transcription, rubric-based feedback on every answer, interviewer follow-ups, and a personalised report that tracks your progress over time.",
    highlights: [
      "Live speech-to-text with audio recording and a real-time mic level meter",
      "AI scoring per answer (relevance, structure, depth, communication) with follow-up questions",
      "Personalised end-of-session report with a practice plan, plus history and a score trend chart",
      "Light and dark themes; accessible and mobile-friendly",
      "Demo mode with a 95-question, role-aware bank (no API key needed); live mode uses Gemini through a secure server proxy",
    ],
    live: "https://ai-interview-simulator-live.vercel.app/",
    code: "#",
  },
  {
    title: "Pennywise - Expense Tracker",
    kind: "Full-stack",
    tags: [
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "JWT",
      "Recharts",
      "Vercel",
      "Render",
    ],
    image: pennywise,
    summary:
      "A deployed personal finance app: track income and expenses, set monthly budgets per category, and search, filter and export your history, with every user's data isolated and validated server-side.",
    highlights: [
      "Secure REST API: bcrypt + JWT auth, rate-limited login, per-user data isolation",
      "Budgets with live progress, plus custom categories per user",
      "Search, filters, infinite scroll and CSV export",
      "Interactive Recharts dashboards for spending trends and categories, with dark mode and mobile layout",
      "Live on Vercel + Render + Neon Postgres, with versioned DB migrations",
    ],
    live: "https://penny-wise-live.vercel.app/",
    code: "#",
  },
  {
    title: "LiveChat",
    kind: "Full-stack · Realtime",
    tags: ["TypeScript", "React", "WebSockets", "JWT"],
    image: liveChat,
    summary:
      "A real-time chat application with JWT auth, multi-room messaging, live typing indicators and auto-reconnect logic.",
    highlights: [
      "WebSocket transport with reconnect",
      "Typing indicators & rooms",
      "End-to-end TypeScript",
    ],
    live: "https://live-chat-app-blue.vercel.app/",
    code: "#",
  },
  {
    title: "TaskFlow Dashboard",
    kind: "Product · Concept",
    tags: ["React", "Valtio", "DnD"],
    image: taskDashboard,
    summary:
      "A task management dashboard in the spirit of Jira and Zoho — task assignment, status tracking, custom tags and switchable Kanban / List views.",
    highlights: [
      "Drag-and-drop Kanban board",
      "Proxy-based state with Valtio",
      "Customisable dashboard themes",
    ],
    live: "https://valtiotaskmanagement.vercel.app",
    code: "#",
  },
  {
    title: "FoodKing",
    kind: "Product · Concept",
    tags: ["React", "Framer Motion"],
    image: foodOrdering,
    summary:
      "A responsive food ordering platform with category browsing, cart, wishlist, tabbed menus, sliders and load-more pagination.",
    highlights: [
      "Scroll-driven motion with Framer Motion",
      "Cart & wishlist state",
      "Mobile-first responsive layouts",
    ],
    live: "https://your-demo-link.com",
    code: "https://github.com/YOUR_USERNAME/foodiehub",
  },
];

// `level` drives the semver-style label in the package.json view (purely decorative).
// Items without an `icon` render a monogram tile.
export const stack = [
  { name: "react", label: "React.js", icon: ReactIcon, level: "^18.3.0" },
  { name: "typescript", label: "TypeScript", icon: Typescript, level: "^5.4.0" },
  { name: "javascript", label: "JavaScript", icon: Javascript, level: "ES2024" },
  { name: "@reduxjs/toolkit", label: "Redux Toolkit", icon: Redux, level: "^2.2.0" },
  { name: "@tanstack/react-query", label: "TanStack Query", mono: "RQ", level: "^5.0.0" },
  { name: "@mui/material", label: "Material UI", icon: MUI, level: "^5.15.0" },
  { name: "tailwindcss", label: "Tailwind CSS", icon: Tailwind, level: "^3.4.0" },
  { name: "realtime", label: "SSE / WebSocket", mono: "WS", level: "live" },
  { name: "express", label: "Node / Express", icon: Node, level: "^4.19.0" },
  { name: "pg", label: "PostgreSQL / MySQL", icon: SQL, level: "^8.11.0" },
];

export const tools = [
  { name: "vscode", label: "VS Code", icon: VSCode },
  { name: "chrome-devtools", label: "DevTools", icon: Chrome },
  { name: "git", label: "Git / GitHub", icon: Git },
  { name: "postman", label: "Postman", icon: Postman },
  { name: "hoppscotch", label: "Hoppscotch", mono: "H" },
  { name: "vercel", label: "Vercel", mono: "▲" },
  { name: "figma", label: "Figma", mono: "F" },
];

export const isRealLink = (url) =>
  Boolean(url) && url !== "#" && !/YOUR_USERNAME|your-demo-link/i.test(url);
