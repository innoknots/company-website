import Image from "next/image";
import Link from "next/link";
import { localeHref } from "@/i18n/href";
import type { Locale } from "@/i18n/locales";
import type { HomeDict } from "@/i18n/dictionaries/home";

const panelMeta = [
  {
    key: "sailing",
    path: "/sailing",
    image: "/sailing-hero-web.jpg",
    /* Sits just above the horizon, so the sail, the sea and the deck all
       stay in frame on narrow screens. */
    focus: "center 68%",
    veil: "linear-gradient(180deg, rgba(21,51,82,0.34) 0%, rgba(3,164,195,0.30) 45%, rgba(21,51,82,0.78) 100%)",
    lineMaxWidth: "28ch",
  },
  {
    key: "consulting",
    path: "/consulting",
    image: "/consulting-hero.jpeg",
    focus: "center 40%",
    veil: "linear-gradient(180deg, rgba(21,51,82,0.52) 0%, rgba(21,51,82,0.58) 45%, rgba(9,26,43,0.86) 100%)",
    /* This line runs longer than Sailing's. Wider than 28ch keeps it to two
       lines at common desktop widths, so the panel copy stays short enough
       that it never grows up into the logo sitting at top-40%. */
    lineMaxWidth: "44ch",
  },
] as const;

export default function HomeContent({
  dict,
  locale,
}: {
  dict: HomeDict;
  locale: Locale;
}) {
  return (
    <main className="split relative flex min-h-svh flex-col md:flex-row">
      {panelMeta.map((meta) => {
        const copy = dict.panels[meta.key];
        return (
          <Link
            key={meta.key}
            href={localeHref(locale, meta.path)}
            /* Stacked panels take half the viewport, but never squeeze below a
               readable height. A short window scrolls instead of cramping. */
            className="split-panel group relative flex min-h-[max(50svh,24rem)] flex-1 items-end overflow-hidden md:min-h-svh"
          >
            <Image
              src={meta.image}
              alt={copy.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              style={{ objectPosition: meta.focus }}
              className="panel-image object-cover"
            />
            <div
              className="panel-veil absolute inset-0"
              style={{ backgroundImage: meta.veil }}
              aria-hidden="true"
            />

            <div className="panel-body relative flex w-full flex-col gap-3 px-8 pb-24 md:px-12 md:pb-20 lg:px-16">
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-white/75">
                {copy.eyebrow}
              </span>
              <h2 className="text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
                {copy.title}
              </h2>
              <p
                style={{ maxWidth: meta.lineMaxWidth }}
                className="text-base text-white/85 md:text-lg"
              >
                {copy.line}
              </p>
              <span className="mt-2 flex w-fit flex-col gap-1.5 font-mono text-sm uppercase tracking-[0.14em] text-white">
                {dict.explore}
                <span
                  className="panel-rule h-px w-10 bg-white"
                  aria-hidden="true"
                />
              </span>
            </div>
          </Link>
        );
      })}

      {/* On wide screens the logo sits on the seam where the two lines of work
          split apart; stacked on mobile it moves clear of the panel copy. */}
      <div className="pointer-events-none absolute inset-x-0 top-6 z-10 flex justify-center px-6 md:top-[35%]">
        <div className="rounded-sm bg-white/95 px-4 py-2 shadow-[0_18px_50px_rgba(9,26,43,0.35)] backdrop-blur-sm">
          <Image
            src="/logo-stacked.png"
            alt="InnoKnots"
            width={531}
            height={401}
            priority
            className="h-16 w-auto md:h-20"
          />
        </div>
      </div>

      <footer className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-8 pb-5 font-mono text-[0.72rem] text-white/70 md:px-12 lg:px-16">
        <span>{dict.footerLine}</span>
        <span className="pointer-events-auto flex items-center gap-4">
          <Link
            href={`?setlocale=${locale === "en" ? "zh" : "en"}`}
            className="underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
          >
            {locale === "en" ? "中文" : "English"}
          </Link>
          <a
            href="mailto:info@innoknots.com"
            className="underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
          >
            info@innoknots.com
          </a>
        </span>
      </footer>
    </main>
  );
}
