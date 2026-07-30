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
    title: "InnoKnots | Sailing & Consulting in Helsinki",
    description:
      "InnoKnots Oy runs two lines of work from Helsinki: hands-on sailing training in the Gulf of Finland, and consulting in automation hardware design and server recycling.",
  },
  zh: {
    title: "InnoKnots ｜ 赫尔辛基的帆船与咨询业务",
    description:
      "InnoKnots Oy 立足赫尔辛基，一边在芬兰湾教航海，一边做自动化硬件设计和服务器回收咨询。",
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
