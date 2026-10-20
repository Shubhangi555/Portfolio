import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Marquee from "./Marquee";
import About from "../About/About";
import Experience from "../Experience";
import Projects from "../Projects/Projects";
import Toolkit from "../About/Toolkit";
import Contact from "../Contact";
import { useReveal } from "../../hooks";
import { scrollToId } from "../useSectionNav";

function Home({ ready, theme }) {
  const { state, pathname } = useLocation();
  const navigate = useNavigate();

  useReveal([ready]);

  // Honour section requests coming from other routes (header, palette, legacy URLs).
  useEffect(() => {
    if (!ready || !state || !state.scrollTo) return undefined;
    const id = setTimeout(() => {
      scrollToId(state.scrollTo);
      // Clear the state so a refresh doesn't re-scroll.
      navigate(pathname, { replace: true, state: null });
    }, 60);
    return () => clearTimeout(id);
  }, [ready, state, pathname, navigate]);

  return (
    <>
      <Hero ready={ready} />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Toolkit theme={theme} />
      <Contact />
    </>
  );
}

export default Home;
