import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prefixes a root-relative asset path (e.g. "/products/foo.webp") with the
// app's base path. Locally and on hosts that serve from "/" this is a no-op.
// On GitHub Pages (served from /carry-to-your-door/) it makes the path resolve
// correctly. Always use this for images/files in the public/ folder instead
// of hardcoding a leading "/".
export function withBase(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
