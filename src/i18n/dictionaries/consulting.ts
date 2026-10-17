import type { Locale } from "../locales";

/*
  The two locales are not translations of each other. English is a full,
  single-scrolling services page; Chinese is still the short placeholder.
  Each has its own shape, and the page renders whichever one the locale has.
*/

type Meta = { title: string; description: string };

export type ConsultingPlaceholderDict = {
  kind: "placeholder";
  meta: Meta;
  nav: { back: string };
  eyebrow: string;
  title: string;
  body: string;
  comingSoon: string;
};

export type ConsultingService = {
  id: string;
  title: string;
  lead: string;
  /** Paragraphs separated by a blank line ("\n\n"). */
  body: string;
  /** Short tags shown as chips under the body. */
  keywords: string[];
  note?: string;
};

export type ConsultingFullDict = {
  kind: "full";
  meta: Meta;
  nav: {
    back: string;
    sections: { id: string; label: string }[];
  };
  hero: {
    eyebrow: string;
    heading: string;
    body: string;
    /** Sectors we know well: a sense of range, not the limit of it. */
    industries: string[];
    cta: string;
    imageAlt: string;
  };
  services: {
    label: string;
    heading: string;
    items: ConsultingService[];
    /** One line under the overview: entry into Europe, told in full on
        the Chinese page rather than as a fourth service here. */
    entering: { text: string; linkLabel: string };
  };
  engage: {
    label: string;
    heading: string;
    modes: { title: string; body: string }[];
    process: string[];
  };
  about: {
    label: string;
    heading: string;
    reasons: { title: string; body: string }[];
    founderLabel: string;
    founderName: string;
    founderBody: string;
    founderImageAlt: string;
  };
  contact: {
    label: string;
    heading: string;
    body: string;
    linkedin: { label: string; href: string };
  };
  footer: { line: string };
};

export type ConsultingDict = ConsultingPlaceholderDict | ConsultingFullDict;

export const consultingDict: Record<Locale, ConsultingDict> = {
  en: {
    kind: "full",
    meta: {
      title: "Consulting | InnoKnots",
      description:
        "Nordic-based advisory helping companies grow between Europe and China: growth strategy, partners and supply chains, and fundraising.",
    },
    nav: {
      back: "Home",
      sections: [
        { id: "services", label: "Services" },
        { id: "how-we-work", label: "How we work" },
        { id: "about", label: "About" },
        { id: "contact", label: "Contact" },
      ],
    },
    hero: {
      eyebrow: "For Business",
      heading: "Your companion for business\nbetween Europe and China.",
      body: "InnoKnots is a Nordic-based advisory. We help companies grow across Europe and China: shaping the strategy, finding the partners and suppliers, and raising the capital.",
      industries: [
        "Energy & e-mobility",
        "Telecom & digital infrastructure",
        "Logistics & transport",
        "Industrial manufacturing",
      ],
      cta: "Start a conversation",
      imageAlt: "Green leaves projected onto a glowing dome at night",
    },
    services: {
      label: "Services",
      heading: "What we do",
      items: [
        {
          id: "strategy",
          title: "Strategy & New Ventures",
          lead: "Find the right growth move, and make it work.",
          body: "For diversified groups and growing companies weighing a new market, product or business line, in energy, telecom, logistics or manufacturing. We assess the market and the competition, test the technology and the business model, and weigh the ways in: build, partner or buy.\n\nYou get a clear recommendation, a business case with the numbers behind it, and a practical roadmap to act on.",
          keywords: [
            "Market entry",
            "Business case",
            "Build, partner or buy",
            "Fleet electrification",
            "EV charging",
            "Connected fleets",
          ],
        },
        {
          id: "partnerships",
          title: "China Sourcing & Partnerships",
          lead: "The right partners, with eyes open.",
          body: "Batteries, energy storage, electric vehicles, telecom equipment and industrial components increasingly come from China. We help European companies find, audit and negotiate with suppliers and partners in China and in Europe, from a vetted shortlist to a signed agreement, with a clear view of quality, compliance, trade and security risks.\n\nWhen it is time to meet them, we go with you: on factory visits, at trade fairs and as your interpreter on the ground.",
          keywords: [
            "Supplier sourcing",
            "Factory audits",
            "China visits",
            "Trade fairs",
            "On-site interpreting",
            "Risk & compliance",
          ],
        },
        {
          id: "fundraising",
          title: "Fundraising Advisory",
          lead: "The right capital, from the right partners.",
          body: "We help growth companies raise capital, with particular reach into China. There, industrial groups, energy companies, equipment and vehicle makers, and logistics companies invest strategically to win orders, markets and a footprint in Europe, alongside ESG and venture investors.\n\nWe shape your equity story, investor materials and financial model, identify and approach the right investors, and stay with you through due diligence to the term sheet.",
          keywords: [
            "Equity story",
            "Investor materials",
            "Strategic investors",
            "Chinese capital",
            "Due diligence",
            "Term-sheet negotiation",
          ],
          note: "We advise and make introductions; we do not handle client funds or execute transactions.",
        },
      ],
      entering: {
        text: "Coming to Europe from outside? We also help with type approval, distribution and first customers.",
        linkLabel: "Read more in Chinese",
      },
    },
    engage: {
      label: "How we work",
      heading: "Three ways to work together",
      modes: [
        {
          title: "Focused sprint",
          body: "Two to six weeks on one clear question, ending in a decision-ready answer.",
        },
        {
          title: "Ongoing advisory",
          body: "A monthly retainer: a sounding board for leadership, with hands-on support when it matters.",
        },
        {
          title: "Interim role",
          body: "An interim business-development or market-entry lead for the Nordics or the UK.",
        },
      ],
      process: ["Understand", "Diagnose", "Recommend", "Support delivery"],
    },
    about: {
      label: "About",
      heading: "Why InnoKnots",
      reasons: [
        {
          title: "Technology and commerce, together.",
          body: "Engineering depth and years of building businesses. We understand both the technology and the deal.",
        },
        {
          title: "Hands-on, across industries.",
          body: "First-hand work in telecom and enterprise networks, electric trucks and type approval, logistics fleet trials, and supply chains between Europe and China.",
        },
        {
          title: "Rooted in the Nordics, working across Europe.",
          body: "Active in the Nordics, the UK, DACH, Benelux and beyond.",
        },
        {
          title: "A real bridge to China.",
          body: "Native language, industry networks and long experience between Chinese and European companies, from suppliers to investors.",
        },
      ],
      founderLabel: "Founder",
      founderName: "Yang (Justin) Yu",
      founderBody:
        "InnoKnots was founded by Yang Yu, who has lived and worked in Europe for more than 20 years, most of them in the Nordics. He has built business for technology companies, from mobile at Nokia and telecom and enterprise ICT solutions at Huawei to electric heavy trucks at Windrose Technology. There, he leads commercial and regulatory work across Europe. He holds a PhD in computer science, speaks Chinese and English, and is equally at home in both business cultures.",
      founderImageAlt: "Portrait of Yang (Justin) Yu, founder of InnoKnots",
    },
    contact: {
      label: "Contact",
      heading: "Let's talk",
      body: "Tell us what you are working on. A first conversation is without obligation.",
      linkedin: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/justin-yu-21579b4/",
      },
    },
    footer: { line: "InnoKnots Oy · Helsinki, Finland" },
  },
  zh: {
    kind: "placeholder",
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
