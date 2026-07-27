"use client";

import { useEffect } from "react";

/**
 * Fades sections marked `.reveal` into place as they scroll into view.
 *
 * Sections render visible. Only once this effect runs does the root get
 * `data-reveal="armed"`, which is what hides them, so a browser that never
 * executes the script, or one that prefers reduced motion, shows the page
 * in full rather than blank.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );
    if (sections.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    root.dataset.reveal = "armed";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.dataset.shown = "true";
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    for (const section of sections) observer.observe(section);

    return () => {
      observer.disconnect();
      delete root.dataset.reveal;
    };
  }, []);

  return null;
}
