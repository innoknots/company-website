import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { localeHref } from "@/i18n/href";
import { asLocale } from "@/i18n/locales";

const cards = [
  {
    href: "/ev-truck-comparison.html",
    eyebrow: "Fleet Reference",
    title: "新能源重卡对比清单",
    titleEn: "EV Truck Comparison",
    body: "按纯电 / 混动 / 氢能三条技术路线，汇总市面新能源重卡车型的底盘级参数：电驱桥、电池布置、充电接口与续航。",
  },
  {
    href: "/eu-truck-combination-requirements.html",
    eyebrow: "Product Spec",
    title: "欧洲纯电动重卡车组需求",
    titleEn: "EU BEV Truck Combination Requirements",
    body: "8x4 / 6x4 载货车与牵引车在英国、欧洲大陆、北欧市场下的车桥配置、PTO 需求与车组长度、总重要求。",
  },
  {
    href: "/turning-radius-6x4.html",
    eyebrow: "Engineering Tool",
    title: "转弯半径 · 6×4 参数与入弯偏移",
    titleEn: "6×4 Turning Radius & Off-tracking",
    body: "6×4 牵引车 + 半挂车：有效轴距 / 销轴距可调，入弯偏移（off-tracking）动画演示，含欧盟与北欧、比利时法规判据。",
  },
  {
    href: "/hct-turning-circle-calculator.html",
    eyebrow: "Engineering Tool",
    title: "芬兰 HCT 车辆组合通道圆计算手册",
    titleEn: "Finland HCT Turning Circle Handbook",
    body: "芬兰 Traficom HCT 车辆组合技术规定：11 种官方组合类型示意图 + 7 个通道圆计算页，公式系数逐项核对官方 Excel。",
  },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = asLocale((await params).locale);
  return locale === "zh"
    ? {
        title: "重卡资料 | InnoKnots",
        description: "欧洲新能源重卡选型与工程参考资料合集：车型对比、车组需求、转弯半径。",
      }
    : {
        title: "Heavy Truck Resources | InnoKnots",
        description:
          "Reference tools for European EV heavy truck selection and engineering: model comparisons, combination requirements, turning radius.",
      };
}

export default async function EvTruckPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = asLocale((await params).locale);
  const home = localeHref(locale, "/");
  const otherLocale = locale === "en" ? "zh" : "en";

  return (
    <main className="page-enter flex min-h-svh flex-col bg-white text-navy">
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
            {locale === "en" ? "Home" : "首页"}
          </Link>
        </span>
      </header>

      <div className="flex flex-1 flex-col px-8 pb-24 md:px-12">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
          Heavy Truck / 重卡
        </span>
        <h1 className="mt-3 max-w-[24ch] text-4xl font-semibold tracking-tight text-navy md:text-5xl">
          欧洲新能源重卡选型资料
        </h1>
        <p className="mt-4 max-w-[60ch] text-lg text-navy/70">
          车型对比、车组需求、转弯半径 — 面向客户与内部团队的工程与选型参考。
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="group flex flex-col gap-3 rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_1px_2px_rgba(21,51,82,0.04),0_8px_24px_-12px_rgba(21,51,82,0.18)] transition-colors hover:border-cyan/50"
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-cyan">
                {card.eyebrow}
              </span>
              <h2 className="text-xl font-semibold text-navy">
                {card.title}
                <span className="mt-0.5 block text-sm font-normal text-navy/50">
                  {card.titleEn}
                </span>
              </h2>
              <p className="text-sm leading-relaxed text-navy/70">
                {card.body}
              </p>
              <span className="mt-auto flex items-center gap-1.5 pt-2 font-mono text-xs uppercase tracking-[0.14em] text-navy/50 transition-colors group-hover:text-cyan">
                打开 / Open
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
