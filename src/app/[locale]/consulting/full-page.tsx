import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "../../reveal-on-scroll";
import { localeHref } from "@/i18n/href";
import type { Locale } from "@/i18n/locales";
import type {
  ConsultingFullDict,
  ConsultingService,
} from "@/i18n/dictionaries/consulting";

function ExampleList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="mt-8">
      <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-navy/50">
        {label}
      </h4>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-navy/80">
            <span
              className="mt-[0.7em] h-px w-4 shrink-0 bg-cyan"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceBlock({
  service,
  index,
  examplesLabel,
}: {
  service: ConsultingService;
  index: number;
  examplesLabel: string;
}) {
  return (
    <article
      id={service.id}
      className="reveal grid scroll-mt-36 gap-6 border-t border-navy/10 py-14 md:scroll-mt-24 lg:grid-cols-[minmax(0,0.85fr)_1fr] lg:gap-20 lg:py-20"
    >
      <div>
        <span className="font-mono text-xs tracking-[0.14em] text-cyan">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          {service.title}
        </h3>
        <p className="mt-4 max-w-[30ch] text-xl text-navy/70">
          {service.lead}
        </p>
      </div>
      <div>
        <p className="max-w-[60ch] text-lg leading-relaxed text-navy/80">
          {service.body}
        </p>
        <ExampleList label={examplesLabel} items={service.examples} />
        {service.note && (
          <p className="mt-8 max-w-[60ch] text-sm italic text-navy/50">
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
  const overview = [...services.items, services.entering];

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
          src="/consulting-hero.jpeg"
          alt={d.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "center 40%" }}
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(21,51,82,0.55) 0%, rgba(21,51,82,0.62) 45%, rgba(9,26,43,0.9) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-16 md:px-12 md:pb-24">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/75">
            {d.hero.eyebrow}
          </span>
          <h1 className="mt-4 max-w-[20ch] text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            {d.hero.heading}
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg text-white/85 md:text-xl">
            {d.hero.body}
          </p>
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
        className="scroll-mt-28 px-6 pt-20 md:scroll-mt-16 md:px-12 md:pt-28"
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
            <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
              {overview.map((s, i) => {
                const minor = s.id === services.entering.id;
                return (
                  <li key={s.id} className="flex">
                    <a
                      href={`#${s.id}`}
                      className={`group flex w-full flex-col gap-3 p-6 transition-colors hover:bg-cyan/5 ${minor ? "bg-navy/[0.03]" : "bg-white"}`}
                    >
                      <span className="font-mono text-xs tracking-[0.14em] text-cyan">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-semibold ${minor ? "text-lg text-navy/80" : "text-xl"}`}
                      >
                        {s.title}
                      </span>
                      <span className="text-sm text-navy/65">{s.lead}</span>
                      <span
                        className="mt-auto pt-2 font-mono text-xs text-navy/40 transition-colors group-hover:text-cyan"
                        aria-hidden="true"
                      >
                        ↓
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-16 md:mt-20">
            {services.items.map((service, i) => (
              <ServiceBlock
                key={service.id}
                service={service}
                index={i}
                examplesLabel={services.examplesLabel}
              />
            ))}
          </div>

          {/* Entering Europe: kept deliberately smaller; the full story is
              told on the Chinese page. */}
          <article
            id={services.entering.id}
            className="reveal mb-20 scroll-mt-36 rounded-sm bg-navy/[0.03] p-8 md:mb-28 md:scroll-mt-24 md:p-10"
          >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_1fr] lg:gap-20">
              <div>
                <span className="font-mono text-xs tracking-[0.14em] text-cyan">
                  {String(services.items.length + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {services.entering.title}
                </h3>
                <p className="mt-2 text-navy/70">{services.entering.lead}</p>
              </div>
              <div>
                <p className="max-w-[60ch] text-navy/80">
                  {services.entering.body}
                </p>
                <ExampleList
                  label={services.examplesLabel}
                  items={services.entering.examples}
                />
                <Link
                  href={localeHref("zh", "/consulting")}
                  className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-navy/70 transition-colors hover:text-cyan"
                >
                  {services.entering.moreLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
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

          <div className="reveal mt-20 grid items-center gap-10 border-t border-navy/10 pt-16 md:mt-24 md:grid-cols-[minmax(0,0.6fr)_1fr] md:gap-16 md:pt-20">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm md:max-w-none">
              <Image
                src="/founder.jpg"
                alt={d.about.founderImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
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
            <span className="text-navy/60">{d.contact.location}</span>
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
