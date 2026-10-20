import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMoon,
  FiSun,
  FiLink,
  FiSearch,
  FiMail,
  FiSend,
} from "react-icons/fi";
import { profile } from "../data";
import useSectionNav, { SECTIONS, RESUME_N } from "./useSectionNav";
import { copyText } from "../hooks";

function CommandPalette({ open, onClose, onToggleTheme, theme }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState("");
  const inputRef = useRef(null);
  const lastFocus = useRef(null);
  const goTo = useSectionNav();
  const navigate = useNavigate();

  const commands = useMemo(
    () => [
      ...SECTIONS.map((s) => ({
        id: `go-${s.id}`,
        group: "Navigate",
        label: `Go to ${s.label}`,
        hint: s.n,
        icon: FiArrowRight,
        run: () => goTo(s.id),
      })),
      {
        id: "resume",
        group: "Navigate",
        label: "Open résumé",
        hint: RESUME_N,
        icon: FiFileText,
        run: () => navigate("/resume"),
      },
      {
        id: "theme",
        group: "Preferences",
        label: theme === "dark" ? "Switch to paper mode" : "Switch to ink mode",
        icon: theme === "dark" ? FiSun : FiMoon,
        run: onToggleTheme,
        keepOpen: true,
      },
      {
        id: "copy-email",
        group: "Contact",
        label: "Copy email address",
        hint: profile.email,
        icon: FiMail,
        keepOpen: true,
        run: async () =>
          setToast((await copyText(profile.email)) ? "Email copied" : "Copy blocked — clipboard unavailable"),
      },
      {
        id: "mailto",
        group: "Contact",
        label: "Write an email",
        icon: FiSend,
        run: () => {
          window.location.href = `mailto:${profile.email}`;
        },
      },
      {
        id: "github",
        group: "Elsewhere",
        label: "GitHub",
        hint: "↗",
        icon: FiGithub,
        run: () => window.open(profile.github, "_blank", "noopener,noreferrer"),
      },
      {
        id: "linkedin",
        group: "Elsewhere",
        label: "LinkedIn",
        hint: "↗",
        icon: FiLinkedin,
        run: () => window.open(profile.linkedin, "_blank", "noopener,noreferrer"),
      },
      {
        id: "copy",
        group: "Elsewhere",
        label: "Copy link to this portfolio",
        icon: FiLink,
        keepOpen: true,
        run: async () =>
          setToast((await copyText(window.location.origin)) ? "Link copied" : "Copy blocked — clipboard unavailable"),
      },
    ],
    [goTo, navigate, onToggleTheme, theme]
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) =>
      `${c.label} ${c.group}`.toLowerCase().includes(q)
    );
  }, [commands, query]);

  // Reset on open, restore focus on close.
  useEffect(() => {
    if (open) {
      lastFocus.current = document.activeElement;
      setQuery("");
      setActive(0);
      setToast("");
      document.body.style.overflow = "hidden";
      const id = setTimeout(() => inputRef.current && inputRef.current.focus(), 20);
      return () => clearTimeout(id);
    }
    document.body.style.overflow = "";
    if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
    return undefined;
  }, [open]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    if (!toast) return undefined;
    const id = setTimeout(() => setToast(""), 1800);
    return () => clearTimeout(id);
  }, [toast]);

  if (!open) return null;

  const run = (cmd) => {
    if (!cmd) return;
    if (!cmd.keepOpen) onClose();
    cmd.run();
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) =>
        results.length ? (i - 1 + results.length) % results.length : 0
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(results[active]);
    } else if (e.key === "Tab") {
      // Keep focus inside the dialog — only the input is focusable.
      e.preventDefault();
    }
  };

  let lastGroup = null;

  return (
    <div className="palette" role="presentation" onMouseDown={onClose}>
      <div
        className="palette__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <div className="palette__search">
          <FiSearch aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search…"
            aria-label="Search commands"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[active] ? `cmd-${results[active].id}` : undefined}
          />
          <kbd>esc</kbd>
        </div>

        <ul className="palette__list" id="palette-list" role="listbox">
          {results.length === 0 && (
            <li className="palette__empty">No commands match “{query}”.</li>
          )}
          {results.map((cmd, i) => {
            const header = cmd.group !== lastGroup ? cmd.group : null;
            lastGroup = cmd.group;
            const Icon = cmd.icon;
            return (
              <React.Fragment key={cmd.id}>
                {header && (
                  <li className="palette__group" role="presentation">
                    {header}
                  </li>
                )}
                <li
                  id={`cmd-${cmd.id}`}
                  role="option"
                  aria-selected={i === active}
                  className={`palette__item ${i === active ? "is-active" : ""}`}
                  onMouseMove={() => setActive(i)}
                  onClick={() => run(cmd)}
                >
                  <Icon aria-hidden="true" />
                  <span>{cmd.label}</span>
                  {cmd.hint && <em>{cmd.hint}</em>}
                </li>
              </React.Fragment>
            );
          })}
        </ul>

        <div className="palette__foot">
          <span className="palette__keys">
            <kbd>↑</kbd>
            <kbd>↓</kbd> move
          </span>
          <span className="palette__keys">
            <kbd>↵</kbd> select
          </span>
          <span className="palette__toast" role="status">
            {toast}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;
