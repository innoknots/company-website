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
  body: string;
  examples: string[];
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
    cta: string;
    imageAlt: string;
  };
  services: {
    label: string;
    heading: string;
    examplesLabel: string;
    items: ConsultingService[];
    /** Smaller, last block: entry into Europe, told in full on the Chinese page. */
    entering: ConsultingService & { moreLabel: string };
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
    location: string;
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
        "Nordic-based advisory for companies in Europe's energy and mobility transition: growth strategy, partnerships including access to China's supply chain, and fundraising advisory.",
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
      heading: "Turning the energy and mobility transition into business.",
      body: "InnoKnots is a Nordic-based advisory working across Europe. We help companies build new business in electric mobility, clean energy, and the digital infrastructure and connectivity behind them: choosing the right move, finding the partners to deliver it, and raising the capital to fund it, in Europe and in China.",
      cta: "Start a conversation",
      imageAlt: "An engineer working with a networked hardware interface",
    },
    services: {
      label: "Services",
      heading: "What we do",
      examplesLabel: "For example",
      items: [
        {
          id: "strategy",
          title: "Strategy & New Ventures",
          lead: "Find the right growth move, and make it work.",
          body: "For diversified groups and growing companies looking at electrification, charging, energy services or digital infrastructure. We assess the market and the competition, test the technology and the business model, weigh the ways in (build, partner or buy), and turn the answer into a practical roadmap.",
          examples: [
            "Deciding whether to add EV charging or energy services to an existing business",
            "Building the business case for a charging site or truck depot, including partner and revenue models",
            "Planning fleet electrification: vehicle options, total cost of ownership and depot charging",
            "Shaping connected-fleet, telematics or site-connectivity offerings",
          ],
        },
        {
          id: "partnerships",
          title: "Partnerships & China Supply Chain",
          lead: "The right partners, with eyes open.",
          body: "Batteries, energy storage, charging equipment and electric vehicles increasingly come from China. We help European companies find, evaluate and negotiate with suppliers and partners, in China and in Europe, with a clear view of quality, compliance, trade and security risks.",
          examples: [
            "Finding and auditing battery, storage or charger suppliers in China",
            "Structuring partnerships such as battery-as-a-service, power purchase agreements or distribution",
            "Organising factory visits and supplier meetings, with on-the-ground support",
          ],
        },
        {
          id: "fundraising",
          title: "Fundraising Advisory",
          lead: "The right capital, from the right partners.",
          body: "We help growth companies in energy and mobility raise capital, with particular reach into China. There, energy groups, equipment makers, charging operators, vehicle makers and logistics companies invest strategically to win orders, markets and a footprint in Europe, alongside ESG and venture investors. We shape your equity story, identify and approach the right investors, and support you through due diligence and negotiation.",
          examples: [
            "Preparing the equity story, investor materials and financial model for a round",
            "Identifying and approaching strategic and financial investors, in China and in Europe",
            "Coordinating due diligence and supporting term-sheet negotiation",
          ],
          note: "We advise and make introductions; we do not handle client funds or execute transactions.",
        },
      ],
      entering: {
        id: "entering-europe",
        title: "Entering Europe",
        lead: "For companies coming to Europe.",
        body: "For companies from outside Europe, we support market entry: vehicle type approval and regulation, distribution and service networks, and first customers and pilots.",
        examples: [
          "Planning type approval and market entry for a vehicle or equipment maker",
        ],
        moreLabel: "More in Chinese",
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
          title: "Hands-on in e-mobility and connectivity.",
          body: "First-hand work with electric trucks, type approval, charging interoperability and fleet trials across Europe, built on a long background in telecom and enterprise networks.",
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
      founderName: "Yang Yu",
      founderBody:
        "InnoKnots was founded by Yang Yu. Over more than 15 years in the Nordics, Yang has built business for technology companies, from mobile at Nokia and telecom and enterprise networks at Huawei to electric heavy trucks at Windrose Technology, where he leads commercial and regulatory work across Europe. He holds a PhD in computer science and works in English, Chinese and Finnish.",
      founderImageAlt: "Portrait of Yang Yu, founder of InnoKnots",
    },
    contact: {
      label: "Contact",
      heading: "Let's talk",
      body: "Tell us what you are working on. A first conversation is without obligation.",
      location: "Helsinki, Finland",
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
