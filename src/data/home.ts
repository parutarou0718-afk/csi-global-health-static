import type { Lang } from "../lib/i18n";

type HomeCopy = {
  hero: { eyebrow: string; title: string; titleLines?: readonly string[]; summary: string; primaryLabel: string; secondaryLabel: string; mapAlt: string; mapSrc: string };
  about: { title: string; body: string; linkLabel: string };
  expertHeading: string;
  news: { title: string; emptyTitle: string; emptyBody: string; linkLabel: string };
  partnership: { title: string; body: string; areas: readonly string[]; label: string };
};

export const homeContent: Record<Lang, HomeCopy> = {
  en: {
    hero: {
      eyebrow: "CSI Global Health, Co., Ltd.",
      title: "From Science to Medicine. From Innovation to Patients. From Japan to the World.",
      titleLines: ["From Science to Medicine.", "From Innovation to", "Patients. From Japan to", "the World."],
      summary: "CSI Global Health connects university research foundations, clinical translation and international medical-technology collaboration.",
      primaryLabel: "Learn about CSI",
      secondaryLabel: "Contact us",
      mapAlt: "Global network map centred on Japan, connecting Europe, China and the United States.",
      mapSrc: "/images/home/global-network-map.png",
    },
    about: {
      title: "About CSI",
      body: "CSI Global Health builds on research foundations at Okayama University to connect particle medicine and precision medicine research with clinical translation, international medical technology and industry collaboration.",
      linkLabel: "Learn more about CSI",
    },
    expertHeading: "Scientific Network",
    news: {
      title: "News",
      emptyTitle: "No verified news is available at this time.",
      emptyBody: "Approved company, research, collaboration and event updates will appear here when source material is available.",
      linkLabel: "View news",
    },
    partnership: {
      title: "Contact / Partnership",
      body: "CSI welcomes discussion with research, clinical, technology and international business partners.",
      areas: ["Research Collaboration", "Clinical Collaboration", "Technology & Equipment", "International Business"],
      label: "Contact CSI",
    },
  },
  ja: {
    hero: {
      eyebrow: "CSI Global Health, Co., Ltd.",
      title: "科学から医療へ。イノベーションから患者へ。日本から、世界へ。",
      summary: "CSI Global Health は、大学の研究基盤、臨床応用、国際的な医療技術・産業連携をつなぎます。",
      primaryLabel: "CSIについて詳しく見る",
      secondaryLabel: "お問い合わせ",
      mapAlt: "日本を中心に、欧州、中国、米国を結ぶグローバルネットワークの地図。",
      mapSrc: "/images/home/global-network-map.png",
    },
    about: {
      title: "CSIについて",
      body: "CSI Global Health は、岡山大学の研究基盤をもとに、粒子医学・精密医療の研究、臨床応用、国際的な医療技術・産業連携をつなぐスタートアップです。",
      linkLabel: "CSIについて詳しく見る",
    },
    expertHeading: "国際専門家チーム",
    news: {
      title: "ニュース",
      emptyTitle: "現在、確認済みのニュースはありません。",
      emptyBody: "根拠資料が確認された会社情報、研究・学術活動、国際連携、イベント情報を掲載します。",
      linkLabel: "ニュース一覧を見る",
    },
    partnership: {
      title: "お問い合わせ・パートナーシップ",
      body: "研究、臨床、技術・設備、国際事業に関する連携のご相談を受け付けます。",
      areas: ["研究連携", "臨床連携", "技術・設備", "国際事業"],
      label: "お問い合わせ",
    },
  },
};
