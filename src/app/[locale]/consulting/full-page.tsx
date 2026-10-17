import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "../../reveal-on-scroll";
import { localeHref } from "@/i18n/href";
import type { Locale } from "@/i18n/locales";
import type {
  ConsultingFullDict,
  ConsultingService,
} from "@/i18n/dictionaries/consulting";

/* Thin line icons, one per service, drawn in the brand cyan. Paths follow the
   Lucide icon set (ISC licence): compass, globe, trending-up. Keyed by
   service id, since they are presentation rather than copy. */
const serviceIcons: Record<string, React.ReactNode> = {
  strategy: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
    </>
  ),
  partnerships: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </>
  ),
  fundraising: (
    <>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </>
  ),
};

/** The service's icon beside its two-digit number. */
function ServiceMark({
  id,
  index,
  size,
}: {
  id: string;
  index: number;
  size: number;
}) {
  return (
    <span className="flex items-center gap-3 text-cyan">
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {serviceIcons[id]}
      </svg>
      <span className="font-mono text-xs tracking-[0.14em]">
        {String(index + 1).padStart(2, "0")}
      </span>
    </span>
  );
}

function ServiceBlock({
  service,
  index,
}: {
  service: ConsultingService;
  index: number;
}) {
  return (
    <article
      id={service.id}
      className="reveal grid scroll-mt-36 gap-6 border-t border-navy/10 py-14 md:scroll-mt-24 lg:grid-cols-[minmax(0,0.85fr)_1fr] lg:gap-20 lg:py-20"
    >
      <div>
        <ServiceMark id={service.id} index={index} size={32} />
        <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          {service.title}
        </h3>
        <p className="mt-4 max-w-[30ch] text-xl text-navy/70">
          {service.lead}
        </p>
      </div>
      <div>
        {service.body.split("\n\n").map((paragraph, i) => (
          <p
            key={i}
            className={`max-w-[60ch] text-lg leading-relaxed text-navy/80 ${i > 0 ? "mt-4" : ""}`}
          >
            {paragraph}
          </p>
        ))}
        <ul className="mt-6 flex flex-wrap gap-2">
          {service.keywords.map((keyword) => (
            <li
              key={keyword}
              className="rounded-sm border border-navy/20 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-navy/70"
            >
              {keyword}
            </li>
          ))}
        </ul>
        {service.note && (
          <p className="mt-6 max-w-[60ch] text-sm italic text-navy/50">
            {service.note}
          </p>
        )}
      </div>
    </article>
  );
}

export default function ConsultingFullPage({
  d,
  locale,
}: {
  d: ConsultingFullDict;
  locale: Locale;
}) {
  const home = localeHref(locale, "/");
  const otherLocale = locale === "en" ? "zh" : "en";
  const { services } = d;

  return (
    <main className="consulting-page page-enter bg-white text-navy">
      <RevealOnScroll />

      {/* Header + section nav -------------------------------------------- */}
      <header className="sticky top-0 z-30 border-b border-navy/10 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 px-6 md:flex-nowrap md:px-12">
          <Link href={home} aria-label="InnoKnots home" className="py-4">
            <Image
              src="/logo-horizontal.png"
              alt="InnoKnots"
              width={763}
              height={275}
              priority
              className="h-7 w-auto md:h-8"
            />
          </Link>

          {/* On phones the section links drop to their own row below the
              logo and scroll sideways rather than wrapping. */}
          <nav
            aria-label="Page sections"
            className="order-last -mx-6 w-[calc(100%+3rem)] overflow-x-auto border-t border-navy/5 md:order-none md:mx-0 md:ml-auto md:w-auto md:border-0"
          >
            <ul className="flex gap-5 px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] whitespace-nowrap text-navy/70 md:gap-6 md:px-0 md:py-0 md:tracking-[0.14em]">
              {d.nav.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="transition-colors hover:text-cyan"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <span className="flex items-center gap-5 py-4 font-mono text-xs uppercase tracking-[0.14em] text-navy/50 md:border-l md:border-navy/10 md:pl-8">
            <Link
              href={`?setlocale=${otherLocale}`}
              className="transition-colors hover:text-navy"
            >
              {locale === "en" ? "中文" : "English"}
            </Link>
            <Link href={home} className="transition-colors hover:text-navy">
              {d.nav.back}
            </Link>
          </span>
        </div>
      </header>

      {/* Hero ------------------------------------------------------------ */}
      <section className="relative flex min-h-[max(72svh,32rem)] flex-col justify-end">
        <Image
          src="/consulting-hero-dome.jpg"
          alt={d.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "70% 35%" }}
          className="object-cover"
        />
        {/* Navy is deepest on the left, where the copy sits, and thins out
            to let the dome show on the right. A second, bottom-up layer
            keeps the copy legible on narrow screens, where it spans the
            full width. */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(21,51,82,0.92) 0%, rgba(21,51,82,0.66) 50%, rgba(21,51,82,0.28) 100%), linear-gradient(180deg, rgba(9,26,43,0) 45%, rgba(9,26,43,0.7) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-16 md:px-12 md:pb-24">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/75">
            {d.hero.eyebrow}
          </span>
          {/* The heading marks its preferred break with "\n". It is honoured
              from lg up; on narrower screens the first line no longer fits
              and the break would strand a single word, so the text just
              wraps naturally there. */}
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            {d.hero.heading.split("\n").map((line, i) => (
              <Fragment key={line}>
                {i > 0 && (
                  <>
                    {" "}
                    <br className="hidden lg:inline" />
                  </>
                )}
                {line}
              </Fragment>
            ))}
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg text-white/85 md:text-xl">
            {d.hero.body}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {d.hero.industries.map((industry) => (
              <li
                key={industry}
                className="rounded-sm border border-white/25 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/80"
              >
                {industry}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-navy transition-colors hover:bg-cyan hover:text-white"
          >
            {d.hero.cta}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Services -------------------------------------------------------- */}
      <section
        id="services"
        className="scroll-mt-28 px-6 pt-20 pb-6 md:scroll-mt-16 md:px-12 md:pt-28 md:pb-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
              {services.label}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {services.heading}
            </h2>

            {/* Overview: every service visible at once, each a jump link. */}
            <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-navy/10 bg-navy/10 md:grid-cols-3">
              {services.items.map((s, i) => (
                <li key={s.id} className="flex">
                  <a
                    href={`#${s.id}`}
                    className="group flex w-full flex-col gap-3 bg-white p-6 transition-colors hover:bg-cyan/5"
                  >
                    <ServiceMark id={s.id} index={i} size={24} />
                    <span className="text-xl font-semibold">{s.title}</span>
                    <span className="text-sm text-navy/65">{s.lead}</span>
                    <span
                      className="mt-auto pt-2 font-mono text-xs text-navy/40 transition-colors group-hover:text-cyan"
                      aria-hidden="true"
                    >
                      ↓
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Entry into Europe is a side note here, not a fourth service;
                its detail lives on the Chinese page, hence the ↗ (leaves
                this page) rather than the cards' ↓ (scrolls down). */}
            <p className="mt-5 text-sm text-navy/60">
              {services.entering.text}{" "}
              <Link
                href={localeHref("zh", "/consulting")}
                className="inline-flex items-center gap-1 whitespace-nowrap text-navy/80 underline decoration-navy/30 underline-offset-4 transition-colors hover:text-cyan hover:decoration-cyan"
              >
                {services.entering.linkLabel}
                <span aria-hidden="true">↗</span>
              </Link>
            </p>
          </div>

          <div className="mt-16 md:mt-20">
            {services.items.map((service, i) => (
              <ServiceBlock
                key={service.id}
                service={service}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How we work ----------------------------------------------------- */}
      <section
        id="how-we-work"
        className="scroll-mt-28 bg-navy px-6 py-20 text-white md:scroll-mt-16 md:px-12 md:py-28"
      >
        <div className="reveal mx-auto max-w-6xl">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
            {d.engage.label}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {d.engage.heading}
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
            {d.engage.modes.map((m) => (
              <div key={m.title} className="border-t border-white/20 pt-6">
                <h3 className="text-xl font-semibold">{m.title}</h3>
                <p className="mt-3 text-white/75">{m.body}</p>
              </div>
            ))}
          </div>
          <ol className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-white/70">
            {d.engage.process.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="text-cyan" aria-hidden="true">
                    →
                  </span>
                )}
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About ----------------------------------------------------------- */}
      <section
        id="about"
        className="scroll-mt-28 px-6 py-20 md:scroll-mt-16 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="reveal">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
              {d.about.label}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {d.about.heading}
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
              {d.about.reasons.map((r) => (
                <div key={r.title}>
                  <h3 className="text-xl font-semibold">{r.title}</h3>
                  <p className="mt-2 max-w-[52ch] text-navy/70">{r.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* A small round portrait: the page is about the services, so the
              founder is introduced rather than featured. */}
          <div className="reveal mt-20 flex flex-col gap-8 border-t border-navy/10 pt-16 sm:flex-row sm:items-center sm:gap-12 md:mt-24 md:pt-20">
            <div className="relative size-40 shrink-0 overflow-hidden rounded-full md:size-56">
              <Image
                src="/founder.jpg"
                alt={d.about.founderImageAlt}
                fill
                sizes="(max-width: 768px) 160px, 224px"
                style={{ objectPosition: "center 30%" }}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
                {d.about.founderLabel}
              </h3>
              <p className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                {d.about.founderName}
              </p>
              <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-navy/75">
                {d.about.founderBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact --------------------------------------------------------- */}
      <section
        id="contact"
        className="scroll-mt-28 border-t border-navy/10 px-6 py-20 md:scroll-mt-16 md:px-12 md:py-28"
      >
        <div className="reveal mx-auto max-w-6xl">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
            {d.contact.label}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {d.contact.heading}
          </h2>
          <p className="mt-4 max-w-[52ch] text-lg text-navy/70">
            {d.contact.body}
          </p>
          <div className="mt-10 flex flex-col gap-3 font-mono text-sm">
            <a
              href="mailto:info@innoknots.com"
              className="w-fit underline decoration-navy/30 underline-offset-4 transition-colors hover:text-cyan hover:decoration-cyan"
            >
              info@innoknots.com
            </a>
            <a
              href={d.contact.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1 underline decoration-navy/30 underline-offset-4 transition-colors hover:text-cyan hover:decoration-cyan"
            >
              {d.contact.linkedin.label}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-navy/10 px-6 py-6 font-mono text-xs text-navy/60 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2">
          <span>{d.footer.line}</span>
          <Link href={home} className="transition-colors hover:text-navy">
            innoknots.com
          </Link>
        </div>
      </footer>
    </main>
  );
}
