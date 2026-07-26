import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sailing — InnoKnots",
  description:
    "Guided sailboat tours through the Helsinki archipelago with InnoKnots Oy.",
};

export default function SailingPage() {
  return (
    <main className="page-enter flex min-h-svh flex-col">
      <header className="flex items-center justify-between px-8 py-6 md:px-12">
        <Link href="/" aria-label="InnoKnots home">
          <Image
            src="/logo-horizontal.png"
            alt="InnoKnots"
            width={799}
            height={312}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.14em] text-navy/70 transition-colors hover:text-navy"
        >
          Back
        </Link>
      </header>

      <div className="flex flex-1 flex-col justify-center px-8 pb-24 md:px-12">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
          On the water
        </span>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-navy md:text-6xl">
          Sailing
        </h1>
        <p className="mt-4 max-w-[46ch] text-lg text-navy/70">
          Guided sailboat tours through the Helsinki archipelago. This page is
          being written next.
        </p>
      </div>
    </main>
  );
}
