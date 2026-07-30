import HomeContent from "./home-content";
import { homeDict } from "@/i18n/dictionaries/home";
import { asLocale } from "@/i18n/locales";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = asLocale((await params).locale);
  return <HomeContent dict={homeDict[locale]} locale={locale} />;
}
