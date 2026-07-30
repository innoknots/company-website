import type { Locale } from "../locales";

export type ConsultingDict = {
  meta: { title: string; description: string };
  nav: { back: string };
  eyebrow: string;
  title: string;
  body: string;
  comingSoon: string;
};

export const consultingDict: Record<Locale, ConsultingDict> = {
  en: {
    meta: {
      title: "Consulting | InnoKnots",
      description:
        "One-stop support for European companies entering China: introductions, connections, and site visits.",
    },
    nav: { back: "Back" },
    eyebrow: "For Business",
    title: "Consulting",
    body: "One-stop support for European companies entering China: introductions, connections, and site visits.",
    comingSoon: "More on this page is coming soon.",
  },
  zh: {
    meta: {
      title: "咨询 | InnoKnots",
      description: "中国企业出海欧洲一站式服务：公司注册、税务合规、市场调研。",
    },
    nav: { back: "返回首页" },
    eyebrow: "商务",
    title: "咨询",
    body: "中国企业出海欧洲一站式服务：公司注册、税务合规、市场调研。",
    comingSoon: "更多内容即将上线。",
  },
};
