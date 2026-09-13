import type { Lang } from "../lib/i18n";

type LocalizedText = Record<Lang, string>;
type ContactPlaceholder = {
  label: LocalizedText;
  value: LocalizedText;
  status: "placeholder" | "verified";
};

export const companyProfile = {
  name: "CSI Global Health, Co., Ltd.",
  tagline: {
    en: "Okayama University-based Start Up",
    ja: "岡山大学を基盤とするスタートアップ",
  },
  universityFoundation: {
    en: "CSI Global Health is a start-up based on research foundations at Okayama University.",
    ja: "CSI Global Health は、岡山大学の研究基盤をもとにしたスタートアップです。",
  },
} as const;

export const companyFacts = {
  established: { en: "May 1, 2026", ja: "2026年5月1日" },
  representative: { en: "Eiji Matsuura, Ph.D.", ja: "松浦 栄次 博士" },
  positioning: {
    en: "Okayama University-based Start Up",
    ja: "岡山大学における研究基盤を背景とするスタートアップ",
  },
  business: {
    en: "Particle medicine, clinical translation, medical technology and international collaboration.",
    ja: "粒子線医療、臨床応用、医療技術、国際連携。",
  },
  network: [
    {
      id: "japan",
      title: { en: "JAPAN", ja: "日本" },
      name: "CSI Global Health, Co., Ltd.",
      description: {
        en: "A Japan-based start-up built on research foundations at Okayama University.",
        ja: "岡山大学における研究基盤を背景とする、日本を拠点としたスタートアップ。",
      },
    },
    {
      id: "usa",
      title: { en: "USA", ja: "米国" },
      name: "Cardiovascular Solutions and Innovations, LLC",
      description: {
        en: "A U.S. platform within CSI's international research and industry network.",
        ja: "CSIの国際的な研究・産業ネットワークを支える米国のプラットフォーム。",
      },
    },
    {
      id: "global",
      title: { en: "GLOBAL NETWORK", ja: "グローバルネットワーク" },
      name: { en: "Europe / Asia / North America", ja: "欧州 / アジア / 北米" },
      description: {
        en: "Connecting research, clinical and industrial resources across regions.",
        ja: "地域を越えて研究・臨床・産業の資源をつなぎます。",
      },
    },
  ],
} as const;

export const companyContact: Record<"email" | "phone" | "address", ContactPlaceholder> = {
  email: {
    label: { en: "Email", ja: "メール" },
    value: { en: "eijimatu@md.okayama-u.ac.jp", ja: "eijimatu@md.okayama-u.ac.jp" },
    status: "verified",
  },
  phone: {
    label: { en: "Phone", ja: "電話" },
    value: { en: "086-251-8088", ja: "086-251-8088" },
    status: "verified",
  },
  address: {
    label: { en: "Address", ja: "所在地" },
    value: {
      en: "Room A128, 1F, Main Building, Faculty of Science, Okayama University, 3-1-1 Tsushimanaka, Kita-ku, Okayama 700-8530, Japan",
      ja: "〒700-8530 岡山市北区津島中3-1-1 岡山大学理学部本館1階A128号室",
    },
    status: "verified",
  },
};
