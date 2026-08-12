import { useEffect } from "react";

// The site is served from the domain root, so this is safe to hardcode.
// Used to build absolute canonical / OG / twitter URLs (those tags must be
// absolute, unlike normal in-app links which go through withBase()).
const SITE_URL = "https://urbanwholesalers.co.uk";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const SITE_NAME = "Urban Wholesalers Ltd";

interface SeoProps {
  /** Page title. The site name is appended automatically unless this already ends with it. */
  title: string;
  description: string;
  /** Path only, e.g. "/products" or "/products/12". Defaults to the current path. */
  path?: string;
  /** Absolute image URL for social previews. Defaults to the site's default OG image. */
  image?: string;
  /** Set true on pages that shouldn't be indexed (404, thank-you states, etc.) */
  noindex?: boolean;
}

function setMetaByName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets document.title and the meta/OG/twitter/canonical tags for the current
 * page. This is a SPA served from a single index.html, so there's no
 * server-side templating - every route has to update these tags itself on
 * mount. Drop <Seo ... /> at the top of each page component.
 */
const Seo = ({ title, description, path, image, noindex }: SeoProps) => {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path ?? window.location.pathname}`;
    const ogImage = image ?? DEFAULT_OG_IMAGE;

    document.title = fullTitle;

    setMetaByName("description", description);
    setMetaByName(
      "robots",
      noindex ? "noindex, nofollow" : "index, follow"
    );

    setMetaByProperty("og:title", fullTitle);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:url", url);
    setMetaByProperty("og:image", ogImage);
    setMetaByProperty("og:site_name", SITE_NAME);

    setMetaByName("twitter:title", fullTitle);
    setMetaByName("twitter:description", description);
    setMetaByName("twitter:image", ogImage);

    setCanonical(url);
  }, [title, description, path, image, noindex]);

  return null;
};

export default Seo;
