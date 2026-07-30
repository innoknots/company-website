import type { Locale } from "../locales";

export type HomeDict = {
  explore: string;
  footerLine: string;
  panels: {
    sailing: { eyebrow: string; title: string; line: string; alt: string };
    consulting: { eyebrow: string; title: string; line: string; alt: string };
  };
};

export const homeDict: Record<Locale, HomeDict> = {
  en: {
    explore: "Explore",
    footerLine: "InnoKnots Oy · Helsinki, Finland",
    panels: {
      sailing: {
        eyebrow: "For Pleasure",
        title: "Sailing",
        line: "Sailing tours and hands-on training in the Gulf of Finland.",
        alt: "A striped spinnaker filled with wind on the Helsinki archipelago",
      },
      consulting: {
        eyebrow: "For Business",
        title: "Consulting",
        line: "One-stop support for European companies entering China: introductions, connections, and site visits.",
        alt: "An engineer working with a networked hardware interface",
      },
    },
  },
  zh: {
    explore: "了解更多",
    footerLine: "InnoKnots Oy · 芬兰赫尔辛基",
    panels: {
      sailing: {
        eyebrow: "休闲",
        title: "帆船",
        line: "芬兰湾帆船游览与实操航海教学。",
        alt: "赫尔辛基群岛上一面迎风鼓起的彩色缭帆",
      },
      consulting: {
        eyebrow: "商务",
        title: "咨询",
        line: "中国企业出海欧洲一站式服务：公司注册、税务合规、市场调研。",
        alt: "一位工程师正在操作联网的硬件界面",
      },
    },
  },
};
