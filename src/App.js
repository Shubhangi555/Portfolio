import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Preloader from "./components/Pre";
import Header from "./components/Navbar";
import CommandPalette from "./components/CommandPalette";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useTheme } from "./hooks";
import "./style.css";

// PDF tooling is heavy — only fetch it when someone opens the résumé.
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

function App() {
  const [loading, setLoading] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();
  // Stable reference so the preloader's animation effect doesn't restart on re-render.
  const finishLoading = useCallback(() => setLoading(false), []);

  // Global shortcut: Ctrl/⌘ + K opens the command palette.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Router>
      {loading && <Preloader onDone={finishLoading} />}
      <div className="app" aria-busy={loading}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenPalette={() => setPaletteOpen(true)}
        />
        <ScrollToTop />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home ready={!loading} theme={theme} />} />
            <Route
              path="/resume"
              element={
                <Suspense fallback={<div className="section resume__loading">Loading résumé…</div>}>
                  <Resume />
                </Suspense>
              }
            />
            {/* Legacy routes from the old multi-page layout */}
            <Route
              path="/about"
              element={<Navigate to="/" state={{ scrollTo: "about" }} replace />}
            />
            <Route
              path="/project"
              element={<Navigate to="/" state={{ scrollTo: "work" }} replace />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onToggleTheme={toggleTheme}
        theme={theme}
      />
    </Router>
  );
}

export default App;
