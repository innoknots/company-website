import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "../reveal-on-scroll";

export const metadata: Metadata = {
  title: "Sailing — InnoKnots",
  description:
    "Hands-on sailing training and sea time in the Gulf of Finland aboard a Bavaria Cruiser 30, with an ICC-certified skipper who maintains his own boat.",
};

const onTheWater = [
  {
    title: "Sailing basics",
    line: "Your first hours on the helm — points of sail, trimming, and coming alongside without drama.",
  },
  {
    title: "Mile building",
    line: "Log the sea miles your certification asks for on real passages, not in a classroom.",
  },
  {
    title: "Motorboating basics",
    line: "Handling under power: manoeuvring in harbour, berthing, and reading what the engine tells you.",
  },
  {
    title: "Single-handed sailing",
    line: "Set the boat up so one pair of hands is enough, from reefing to picking up a buoy.",
  },
  {
    title: "Cruising as crew",
    line: "Join a longer passage as crew and cover distances a day sail never reaches.",
  },
];

const ashore = [
  {
    title: "Motor service",
    line: "Work through servicing and repair on your own engine, with the tools you actually own.",
  },
  {
    title: "Boat electronics",
    line: "Plan and fit instruments, wiring and power so the install survives its first season.",
  },
  {
    title: "Buying a boat",
    line: "Go through the search, the survey and the paperwork before any money moves.",
  },
];

const waters = [
  {
    image: "/waters-lighthouse.jpg",
    alt: "The Finnish ensign flying astern, a lighthouse on the horizon",
    caption: "Gulf of Finland",
  },
  {
    image: "/waters-bridge.jpg",
    alt: "A cable-stayed bridge seen from the water near Helsinki",
    caption: "Helsinki approaches",
  },
  {
    image: "/waters-tallinn.jpg",
    alt: "A spinnaker in the foreground with a Tallinn ferry passing behind",
    caption: "Crossings to Tallinn",
  },
  {
    image: "/waters-autumn.jpg",
    alt: "The boat moored beside an island in autumn colours",
    caption: "Archipelago anchorages",
  },
];

export default function SailingPage() {
  return (
    <main className="page-enter bg-white text-navy">
      <RevealOnScroll />

      {/* Hero ------------------------------------------------------------ */}
      <section className="relative flex min-h-[max(88svh,34rem)] flex-col">
        <Image
          src="/sailing-hero-web.jpg"
          alt="A striped spinnaker filled with wind on the Gulf of Finland"
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
          <Link href="/" aria-label="InnoKnots home">
            <span className="rounded-sm bg-white/95 px-4 py-3 shadow-lg inline-block">
              <Image
                src="/logo-horizontal.png"
                alt="InnoKnots"
                width={799}
                height={312}
                priority
                className="h-6 w-auto md:h-7"
              />
            </span>
          </Link>
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[0.14em] text-white/80 transition-colors hover:text-white"
          >
            Back
          </Link>
        </header>

        <div className="relative mt-auto px-6 pb-16 md:px-12 md:pb-24">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/75">
            For Pleasure
          </span>
          <h1 className="mt-4 max-w-[16ch] text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
            Learn to sail. Build your miles.
          </h1>
          <p className="mt-5 max-w-[52ch] text-lg text-white/85 md:text-xl">
            Hands-on training and sea time in the Gulf of Finland, aboard a
            Bavaria Cruiser 30 — with a skipper who also services his own engine.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-navy transition-colors hover:bg-cyan hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Services -------------------------------------------------------- */}
      <section className="reveal px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            What we can do together
          </h2>

          <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_auto_1fr] lg:gap-16">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
                On the water
              </h3>
              <ul className="mt-6 flex flex-col gap-6">
                {onTheWater.map((item) => (
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
                Ashore
              </h3>
              <ul className="mt-6 flex flex-col gap-6">
                {ashore.map((item) => (
                  <li key={item.title}>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="mt-1 max-w-[46ch] text-navy/70">{item.line}</p>
                  </li>
                ))}
              </ul>
              <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/helm.jpg"
                  alt="Yang Yu at the wheel under way"
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/boat-exterior.jpg"
              alt="The Bavaria Cruiser 30 under spinnaker with crew aboard"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
              The boat
            </h2>
            <p className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Bavaria Cruiser 30
            </p>
            <p className="mt-5 max-w-[46ch] text-lg text-white/80">
              A cruising yacht sized for the Baltic — big enough to stay out
              overnight, small enough that one person can learn to handle her.
              She is kept, serviced and repaired by the same person who teaches
              on her.
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
              alt="Yang Yu aboard his boat in Helsinki"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
              The skipper
            </h2>
            <p className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Yang Yu
            </p>
            <p className="mt-5 max-w-[52ch] text-lg text-navy/75">
              I sail my own boat through the Gulf of Finland — Loviisa, Helsinki,
              Hanko, Tallinn — and have chartered through Spain, Italy, Croatia
              and Greece. I hold an International Certificate of Competence, and
              I do my own engine and boat maintenance, which is why the help I
              offer does not stop at the dock.
            </p>
            <dl className="mt-8 flex flex-col gap-3 border-t border-navy/10 pt-6 font-mono text-sm">
              <div className="flex gap-6">
                <dt className="w-32 shrink-0 uppercase tracking-[0.12em] text-navy/50">
                  Certificate
                </dt>
                <dd>International Certificate of Competence (ICC)</dd>
              </div>
              <div className="flex gap-6">
                <dt className="w-32 shrink-0 uppercase tracking-[0.12em] text-navy/50">
                  Home waters
                </dt>
                <dd>Gulf of Finland</dd>
              </div>
              <div className="flex gap-6">
                <dt className="w-32 shrink-0 uppercase tracking-[0.12em] text-navy/50">
                  Also sailed
                </dt>
                <dd>Spain · Italy · Croatia · Greece</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Waters ---------------------------------------------------------- */}
      <section className="reveal px-6 pb-20 md:px-12 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
            Where we sail
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {waters.map((w) => (
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
          <h2 className="max-w-[20ch] text-3xl font-semibold tracking-tight md:text-4xl">
            Tell me what you want to learn.
          </h2>
          <p className="mt-4 max-w-[52ch] text-lg text-navy/70">
            Write with what you have done so far and what you are aiming for, and
            we will work out what makes sense.
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
          <span>InnoKnots Oy · Helsinki, Finland</span>
          <Link href="/" className="transition-colors hover:text-navy">
            innoknots.com
          </Link>
        </div>
      </footer>
    </main>
  );
}
