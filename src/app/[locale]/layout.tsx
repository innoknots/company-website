import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import { asLocale, locales, type Locale } from "@/i18n/locales";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const meta: Record<Locale, Metadata> = {
  en: {
    title: "InnoKnots | Business Advisory & Sailing Training",
    description:
      "InnoKnots Oy, Helsinki: business advisory between Europe and China on strategy, partners and capital, and sailing training in the Gulf of Finland.",
  },
  zh: {
    title: "InnoKnots ｜ 商务咨询与航海教学",
    description:
      "InnoKnots Oy 立足赫尔辛基，为中国企业出海欧洲提供咨询，同时在芬兰湾教航海。",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = asLocale((await params).locale);
  return meta[locale];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = asLocale((await params).locale);
  return (
    <html
      lang={locale}
      className={`${archivo.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
