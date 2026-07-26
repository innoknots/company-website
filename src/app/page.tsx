import Image from "next/image";
import Link from "next/link";

type Panel = {
  href: string;
  eyebrow: string;
  title: string;
  line: string;
  image: string;
  alt: string;
  /* Which part of the photo to hold on to as the panel narrows. */
  focus: string;
  veil: string;
};

const panels: Panel[] = [
  {
    href: "/sailing",
    eyebrow: "For Pleasure",
    title: "Sailing",
    line: "Guided sailboat tours through the Helsinki archipelago.",
    image: "/sailing-hero-web.jpg",
    alt: "A striped spinnaker filled with wind on the Helsinki archipelago",
    /* Sits just above the horizon, so the sail, the sea and the deck all
       stay in frame on narrow screens. */
    focus: "center 68%",
    veil: "linear-gradient(180deg, rgba(21,51,82,0.34) 0%, rgba(3,164,195,0.30) 45%, rgba(21,51,82,0.78) 100%)",
  },
  {
    href: "/consulting",
    eyebrow: "For Business",
    title: "Consulting",
    line: "Automation hardware design and sustainable server recycling.",
    image: "/consulting-hero.jpeg",
    alt: "An engineer working with a networked hardware interface",
    focus: "center 40%",
    veil: "linear-gradient(180deg, rgba(21,51,82,0.52) 0%, rgba(21,51,82,0.58) 45%, rgba(9,26,43,0.86) 100%)",
  },
];

export default function Home() {
  return (
    <main className="split relative flex min-h-svh flex-col md:flex-row">
      {panels.map((panel) => (
        <Link
          key={panel.href}
          href={panel.href}
          /* Stacked panels take half the viewport, but never squeeze below a
             readable height — a short window scrolls instead of cramping. */
          className="split-panel group relative flex min-h-[max(50svh,24rem)] flex-1 items-end overflow-hidden md:min-h-svh"
        >
          <Image
            src={panel.image}
            alt={panel.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            style={{ objectPosition: panel.focus }}
            className="panel-image object-cover"
          />
          <div
            className="panel-veil absolute inset-0"
            style={{ backgroundImage: panel.veil }}
            aria-hidden="true"
          />

          <div className="panel-body relative flex w-full flex-col gap-3 px-8 pb-24 md:px-12 md:pb-20 lg:px-16">
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-white/75">
              {panel.eyebrow}
            </span>
            <h2 className="text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
              {panel.title}
            </h2>
            <p className="max-w-[28ch] text-base text-white/85 md:text-lg">
              {panel.line}
            </p>
            <span className="mt-2 flex w-fit flex-col gap-1.5 font-mono text-sm uppercase tracking-[0.14em] text-white">
              Explore
              <span className="panel-rule h-px w-10 bg-white" aria-hidden="true" />
            </span>
          </div>
        </Link>
      ))}

      {/* On wide screens the logo sits on the seam where the two lines of work
          split apart; stacked on mobile it moves clear of the panel copy. */}
      <div className="pointer-events-none absolute inset-x-0 top-6 z-10 flex justify-center px-6 md:top-[40%]">
        <div className="rounded-sm bg-white/95 px-7 py-5 shadow-[0_18px_50px_rgba(9,26,43,0.35)] backdrop-blur-sm md:px-9 md:py-6">
          <Image
            src="/logo-horizontal.png"
            alt="InnoKnots"
            width={799}
            height={312}
            priority
            className="h-9 w-auto md:h-12"
          />
        </div>
      </div>

      <footer className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-8 pb-5 font-mono text-[0.72rem] text-white/70 md:px-12 lg:px-16">
        <span>InnoKnots Oy · Helsinki, Finland</span>
        <a
          href="mailto:info@innoknots.com"
          className="pointer-events-auto underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
        >
          info@innoknots.com
        </a>
      </footer>
    </main>
  );
}
