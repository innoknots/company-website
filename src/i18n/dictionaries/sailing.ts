import type { Locale } from "../locales";

export type SailingDict = {
  meta: { title: string; description: string };
  nav: { back: string };
  hero: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: string;
    imageAlt: string;
  };
  services: {
    heading: string;
    onWaterLabel: string;
    ashoreLabel: string;
    onWater: { title: string; line: string }[];
    ashore: { title: string; line: string }[];
    helmAlt: string;
  };
  boat: {
    label: string;
    name: string;
    body: string;
    imageAlt: string;
  };
  skipper: {
    label: string;
    name: string;
    body: string;
    certificateLabel: string;
    certificateValue: string;
    homeWatersLabel: string;
    homeWatersValue: string;
    alsoSailedLabel: string;
    alsoSailedValue: string;
    imageAlt: string;
  };
  waters: {
    heading: string;
    items: { image: string; alt: string; caption: string }[];
  };
  contact: {
    heading: string;
    body: string;
  };
  footer: { line: string };
};

export const sailingDict: Record<Locale, SailingDict> = {
  en: {
    meta: {
      title: "Sailing | InnoKnots",
      description:
        "Hands-on sailing training and sea time in the Gulf of Finland aboard a Bavaria Cruiser 30, with an ICC-certified skipper who maintains his own boat.",
    },
    nav: { back: "Back" },
    hero: {
      eyebrow: "For Pleasure",
      heading: "Learn to sail. Build your miles.",
      body: "Hands-on training aboard a Bavaria Cruiser 30 in the Gulf of Finland: sailing experience, boat maintenance, and everything else that comes with owning a sailboat.",
      cta: "Get in touch",
      imageAlt: "A striped spinnaker filled with wind on the Gulf of Finland",
    },
    services: {
      heading: "What we can do together",
      onWaterLabel: "On the water",
      ashoreLabel: "Ashore",
      onWater: [
        {
          title: "Sailing tours",
          line: "A sailing tour in the Gulf of Finland: come aboard and feel the wind, no experience needed.",
        },
        {
          title: "Sailing basics",
          line: "Your first hours on the helm: points of sail, trimming, and coming alongside without drama.",
        },
        {
          title: "Mile building",
          line: "Sail as working crew on longer passages, standing watches and logging the sea miles your certification asks for.",
        },
        {
          title: "Motorboating basics",
          line: "Handling under power: manoeuvring in harbour, berthing, and reading what the engine tells you.",
        },
        {
          title: "Single-handed sailing",
          line: "Techniques for sailing solo, from handling the sails to berthing.",
        },
      ],
      ashore: [
        {
          title: "Motor service",
          line: "Work through servicing and repair on your own engine, with the tools you actually own.",
        },
        {
          title: "Boat electronics",
          line: "Get to know the boat's instruments, wiring and electrical systems, so a problem at sea doesn't throw you into a panic.",
        },
        {
          title: "Buying a boat",
          line: "What to look for when choosing a boat, having it surveyed, and handling the paperwork that comes with buying one.",
        },
      ],
      helmAlt: "Yang Yu at the wheel under way",
    },
    boat: {
      label: "The boat",
      name: "Bavaria Cruiser 30",
      body: "A cruising yacht sized for the Baltic: big enough to stay out overnight, small enough that one person can learn to handle her. She lies in Helsinki, and the person who teaches you to sail her is the same person who keeps her serviced and repaired.",
      imageAlt: "The Bavaria Cruiser 30 under spinnaker",
    },
    skipper: {
      label: "The skipper",
      name: "Yang Yu",
      body: "I cruise my own boat around the Gulf of Finland, from Helsinki to Loviisa and Hanko, all the way to Tallinn, and have chartered through Spain, Italy, Croatia, Greece and the UK. I hold an International Certificate of Competence, and I do my own engine and boat maintenance, so I can help just as much on land as I can on the water.",
      certificateLabel: "Certificate",
      certificateValue: "International Certificate of Competence (ICC)",
      homeWatersLabel: "Home waters",
      homeWatersValue: "Gulf of Finland",
      alsoSailedLabel: "Also sailed",
      alsoSailedValue: "Spain · Italy · Croatia · Greece · UK",
      imageAlt: "Yang Yu aboard his boat in Helsinki",
    },
    waters: {
      heading: "Where we sail",
      items: [
        {
          image: "/waters-lighthouse.jpg",
          alt: "The Finnish ensign flying astern, a lighthouse on the horizon",
          caption: "Gulf of Finland lighthouse",
        },
        {
          image: "/waters-bridge.jpg",
          alt: "A cable-stayed bridge seen from the water near Helsinki",
          caption: "Helsinki approaches",
        },
        {
          image: "/waters-tallinn.jpg",
          alt: "A spinnaker in the foreground with a Tallinn ferry passing behind",
          caption: "Crossings to Tallinn",
        },
        {
          image: "/waters-autumn.jpg",
          alt: "The boat moored beside an island in autumn colours",
          caption: "Autumn anchorage",
        },
      ],
    },
    contact: {
      heading: "Tell me what you want to learn.",
      body: "Write with what you have done so far and what you are aiming for, and we will work out what makes sense. Even if all you want is a sailing tour to see what it is like, that works too.",
    },
    footer: { line: "InnoKnots Oy · Helsinki, Finland" },
  },
  zh: {
    meta: {
      title: "航海教学 | InnoKnots",
      description:
        "在芬兰湾登上 Bavaria Cruiser 30，进行实操航海训练、积累航海时间。船长持有国际船艇操作能力证书（ICC），船只也由他亲自维护。",
    },
    nav: { back: "返回首页" },
    hero: {
      eyebrow: "休闲",
      heading: "学航海，攒里程。",
      body: "在芬兰湾的 Bavaria Cruiser 30 上跟船实训、积累航行经验，学习船只维护及其他帆船相关知识。",
      cta: "联系我",
      imageAlt: "芬兰湾上一面迎风鼓起的条纹缭帆",
    },
    services: {
      heading: "我们能一起做什么",
      onWaterLabel: "水上",
      ashoreLabel: "岸上",
      onWater: [
        {
          title: "体验帆船",
          line: "芬兰湾帆船游览，出海感受风与帆，无需任何基础。",
        },
        {
          title: "航海基础",
          line: "掌舵的头几个小时，从认识风向、调帆，到从容靠岸。",
        },
        {
          title: "积累里程",
          line: "作为船员参加长航，轮值守夜，攒够证书要求的航海里程。",
        },
        {
          title: "机动船基础",
          line: "动力操作，从港内机动、靠泊，到读懂发动机的状态变化。",
        },
        {
          title: "单人航海",
          line: "一个人驾船的技巧，从操帆到靠泊。",
        },
      ],
      ashore: [
        {
          title: "发动机保养",
          line: "拿起你自己的工具，学会保养和维修发动机。",
        },
        {
          title: "船用电子设备",
          line: "了解船上的仪表、线路和电力系统，出海遇到问题也不会手忙脚乱。",
        },
        {
          title: "购船指导",
          line: "了解如何选船、验船，以及过户手续等相关知识。",
        },
      ],
      helmAlt: "于船长在航行中掌舵",
    },
    boat: {
      label: "关于这艘船",
      name: "Bavaria Cruiser 30",
      body: "一艘为波罗的海而生的巡航帆船：足够大，可以在船上过夜；足够小，一个人也能学会驾驭。她停泊在赫尔辛基，保养和维修，都是教你航海的那个人亲手做的。",
      imageAlt: "扬起缭帆的 Bavaria Cruiser 30",
    },
    skipper: {
      label: "关于船长",
      name: "于船长",
      body: "我开着自己的船游历芬兰湾，从赫尔辛基到洛维萨、汉科，一路到塔林，也在西班牙、意大利、克罗地亚、希腊和英国租船航行过。我持有国际船艇操作能力证书（ICC），发动机和船体保养也都是自己动手，所以我能帮你的，不止是水上教航海，岸上的维护同样在行。",
      certificateLabel: "证书",
      certificateValue: "国际船艇操作能力证书（ICC）",
      homeWatersLabel: "常驻水域",
      homeWatersValue: "芬兰湾",
      alsoSailedLabel: "其他航迹",
      alsoSailedValue: "西班牙·意大利·克罗地亚·希腊·英国",
      imageAlt: "于船长在赫尔辛基的船上",
    },
    waters: {
      heading: "常去的水域",
      items: [
        {
          image: "/waters-lighthouse.jpg",
          alt: "船尾飘扬的芬兰国旗，远处是一座灯塔",
          caption: "芬兰湾灯塔",
        },
        {
          image: "/waters-bridge.jpg",
          alt: "从水面望向赫尔辛基附近的一座斜拉桥",
          caption: "赫尔辛基近海",
        },
        {
          image: "/waters-tallinn.jpg",
          alt: "前景是缭帆，背后一艘塔林渡轮驶过",
          caption: "往返塔林",
        },
        {
          image: "/waters-autumn.jpg",
          alt: "船只停泊在秋色环绕的小岛旁",
          caption: "秋季锚地",
        },
      ],
    },
    contact: {
      heading: "告诉我你想学什么。",
      body: "写下你目前的水平和想达到的目标，我们再一起商量怎么安排。哪怕你只是想出海体验一下帆船游览，也可以放心交给我安排。",
    },
    footer: { line: "InnoKnots Oy · 芬兰赫尔辛基" },
  },
};
