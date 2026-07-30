import type { Locale } from "./locales";

/** Builds a link to `path` in `locale`. Every locale is prefixed. */
export function localeHref(locale: Locale, path: string): string {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
