import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/i18n/locales";

const COOKIE = "NEXT_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(COOKIE)?.value;
  if (locales.includes(cookie as Locale)) return cookie as Locale;

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  return acceptLanguage.toLowerCase().includes("zh") ? "zh" : defaultLocale;
}

function withLocale(locale: Locale, bare: string): string {
  return bare === "/" ? `/${locale}` : `/${locale}${bare}`;
}

/** Strips a leading /en or /zh, if present, back to the bare path. */
function bareFrom(pathname: string, segments: string[]): string {
  if (segments[0] !== "en" && segments[0] !== "zh") return pathname;
  const rest = segments.slice(1).join("/");
  return rest ? `/${rest}` : "/";
}

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);

  // The language switcher links here, e.g. "?setlocale=en". This is the one
  // signal allowed to override a stored cookie, since without it a switch
  // link can never escape a cookie set on an earlier visit.
  const override = searchParams.get("setlocale");
  if (override === "en" || override === "zh") {
    const url = request.nextUrl.clone();
    url.search = "";
    url.pathname = withLocale(override, bareFrom(pathname, segments));
    const response = NextResponse.redirect(url);
    response.cookies.set(COOKIE, override, { maxAge: COOKIE_MAX_AGE });
    return response;
  }

  // Both locales are explicit segments now (/en, /zh) — neither is the
  // unprefixed default, so a URL that already names one just passes through.
  if (segments[0] === "en" || segments[0] === "zh") {
    const response = NextResponse.next();
    response.cookies.set(COOKIE, segments[0] as Locale, {
      maxAge: COOKIE_MAX_AGE,
    });
    return response;
  }

  // No locale in the URL at all: send it to the detected locale's prefixed
  // address. This always changes the address bar, including for English.
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = withLocale(locale, pathname);
  const response = NextResponse.redirect(url);
  response.cookies.set(COOKIE, locale, { maxAge: COOKIE_MAX_AGE });
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
