import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { localeHref } from "@/i18n/href";
import { consultingDict } from "@/i18n/dictionaries/consulting";
import { asLocale } from "@/i18n/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = asLocale((await params).locale);
  return consultingDict[locale].meta;
}

export default async function ConsultingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = asLocale((await params).locale);
  const d = consultingDict[locale];
  const home = localeHref(locale, "/");
  const otherLocale = locale === "en" ? "zh" : "en";

  return (
    <main className="page-enter flex min-h-svh flex-col">
      <header className="flex items-center justify-between px-8 py-6 md:px-12">
        <Link href={home} aria-label="InnoKnots home">
          <Image
            src="/logo-horizontal.png"
            alt="InnoKnots"
            width={763}
            height={275}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>
        <span className="flex items-center gap-5 font-mono text-xs uppercase tracking-[0.14em] text-navy/70">
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
      </header>

      <div className="flex flex-1 flex-col justify-center px-8 pb-24 md:px-12">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
          {d.eyebrow}
        </span>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight text-navy md:text-6xl">
          {d.title}
        </h1>
        <p className="mt-4 max-w-[46ch] text-lg text-navy/70">{d.body}</p>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-navy/40">
          {d.comingSoon}
        </p>
      </div>
    </main>
  );
}
