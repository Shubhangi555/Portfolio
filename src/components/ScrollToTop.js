import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Reset scroll on route change, unless a section scroll was requested.
function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (!state || !state.scrollTo) window.scrollTo(0, 0);
  }, [pathname, state]);
  return null;
}

export default ScrollToTop;
