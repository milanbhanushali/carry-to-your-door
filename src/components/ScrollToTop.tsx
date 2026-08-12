import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router doesn't reset scroll position on navigation by default, so
// clicking a link partway down a page (e.g. "View Details" on a product
// card near the bottom of the grid) lands you in the same scroll position
// on the new page instead of at the top. This fixes that for every route
// change site-wide.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
