import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "../../reveal-on-scroll";
import { localeHref } from "@/i18n/href";
import { sailingDict } from "@/i18n/dictionaries/sailing";
import { asLocale } from "@/i18n/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = asLocale((await params).locale);
  return sailingDict[locale].meta;
}

export default async function SailingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = asLocale((await params).locale);
  const d = sailingDict[locale];
  const home = localeHref(locale, "/");
  const otherLocale = locale === "en" ? "zh" : "en";
  const langSwitchHref = `?setlocale=${otherLocale}`;
  const langSwitchLabel = locale === "en" ? "中文" : "English";

  return (
    <main className="page-enter bg-white text-navy">
      <RevealOnScroll />

      {/* Hero ------------------------------------------------------------ */}
      <section className="relative flex min-h-[max(88svh,34rem)] flex-col">
        <Image
          src="/sailing-hero-web.jpg"
          alt={d.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "center 68%" }}
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(21,51,82,0.46) 0%, rgba(3,164,195,0.22) 40%, rgba(21,51,82,0.82) 100%)",
          }}
          aria-hidden="true"
        />

        <header className="relative flex items-center justify-between px-6 py-6 md:px-12">
          <Link href={home} aria-label="InnoKnots home">
            <span className="rounded-sm bg-white/95 px-3 py-2 shadow-lg inline-block">
              <Image
                src="/logo-horizontal.png"
                alt="InnoKnots"
                width={763}
                height={275}
                priority
                className="h-7 w-auto md:h-8"
              />
            </span>
          </Link>
          <span className="flex items-center gap-5 font-mono text-xs uppercase tracking-[0.14em] text-white/80">
            <Link
              href={langSwitchHref}
              className="transition-colors hover:text-white"
            >
              {langSwitchLabel}
            </Link>
            <Link href={home} className="transition-colors hover:text-white">
              {d.nav.back}
            </Link>
          </span>
        </header>

        <div className="relative mt-auto px-6 pb-16 md:px-12 md:pb-24">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/75">
            {d.hero.eyebrow}
          </span>
          {/* `ch` sizes off a narrow glyph, so it under-measures CJK text
              (near 1em per character) and wraps far too early. English
              keeps the deliberate two-line break; Chinese stays on one
              line and scales down instead. */}
          <h1
            className={
              locale === "zh"
                ? "mt-4 whitespace-nowrap text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl"
                : "mt-4 max-w-[16ch] text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl"
            }
          >
            {d.hero.heading}
          </h1>
          <p className="mt-5 max-w-[52ch] text-lg text-white/85 md:text-xl">
            {d.hero.body}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-navy transition-colors hover:bg-cyan hover:text-white"
          >
            {d.hero.cta}
          </a>
        </div>
      </section>

      {/* Services -------------------------------------------------------- */}
      <section className="reveal px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {d.services.heading}
          </h2>

          <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_auto_1fr] lg:gap-16">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
                {d.services.onWaterLabel}
              </h3>
              <ul className="mt-6 flex flex-col gap-6">
                {d.services.onWater.map((item) => (
                  <li key={item.title}>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="mt-1 max-w-[46ch] text-navy/70">{item.line}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="hidden w-px bg-navy/10 lg:block"
              aria-hidden="true"
            />

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
                {d.services.ashoreLabel}
              </h3>
              <ul className="mt-6 flex flex-col gap-6">
                {d.services.ashore.map((item) => (
                  <li key={item.title}>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="mt-1 max-w-[46ch] text-navy/70">{item.line}</p>
                  </li>
                ))}
              </ul>
              <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/helm.jpg"
                  alt={d.services.helmAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  style={{ objectPosition: "center 35%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The boat -------------------------------------------------------- */}
      <section className="reveal bg-navy px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Bottom-aligned: the frame is a touch shorter than the photo,
              and there is sky to spare at the top but none of the hull to
              lose at the bottom. */}
          <div className="relative mx-auto aspect-[2/3] w-full max-w-md overflow-hidden rounded-sm lg:max-w-none">
            <Image
              src="/boat-exterior.jpg"
              alt={d.boat.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectPosition: "center 100%" }}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
              {d.boat.label}
            </h2>
            <p className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {d.boat.name}
            </p>
            <p className="mt-5 max-w-[46ch] text-lg text-white/80">
              {d.boat.body}
            </p>
          </div>
        </div>
      </section>

      {/* Skipper --------------------------------------------------------- */}
      <section className="reveal px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_1fr] lg:gap-20">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src="/skipper.jpg"
              alt={d.skipper.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
              {d.skipper.label}
            </h2>
            <p className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {d.skipper.name}
            </p>
            <p className="mt-5 max-w-[52ch] text-lg text-navy/75">
              {d.skipper.body}
            </p>
            <dl className="mt-8 flex flex-col gap-3 border-t border-navy/10 pt-6 font-mono text-sm">
              <div className="flex gap-6">
                <dt className="w-32 shrink-0 uppercase tracking-[0.12em] text-navy/50">
                  {d.skipper.certificateLabel}
                </dt>
                <dd>{d.skipper.certificateValue}</dd>
              </div>
              <div className="flex gap-6">
                <dt className="w-32 shrink-0 uppercase tracking-[0.12em] text-navy/50">
                  {d.skipper.homeWatersLabel}
                </dt>
                <dd>{d.skipper.homeWatersValue}</dd>
              </div>
              <div className="flex gap-6">
                <dt className="w-32 shrink-0 uppercase tracking-[0.12em] text-navy/50">
                  {d.skipper.alsoSailedLabel}
                </dt>
                <dd>{d.skipper.alsoSailedValue}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Waters ---------------------------------------------------------- */}
      <section className="reveal px-6 pb-20 md:px-12 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
            {d.waters.heading}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.waters.items.map((w) => (
              <figure key={w.image} className="flex flex-col gap-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={w.image}
                    alt={w.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="font-mono text-xs uppercase tracking-[0.12em] text-navy/60">
                  {w.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact --------------------------------------------------------- */}
      <section
        id="contact"
        className="reveal border-t border-navy/10 px-6 py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
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
              href="tel:+358443469613"
              className="w-fit underline decoration-navy/30 underline-offset-4 transition-colors hover:text-cyan hover:decoration-cyan"
            >
              +358 44 3469 613
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
