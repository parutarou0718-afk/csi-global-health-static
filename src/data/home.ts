import type { Lang } from "../lib/i18n";

type HomeCopy = {
  hero: { eyebrow: string; title: string; summary: string; primaryLabel: string; secondaryLabel: string; mapAlt: string; mapSrc: string };
  foundation: { title: string; body: string; pillars: readonly { title: string; label: string }[] };
  expertHeading: string;
  globalHeading: string;
  globalStructure: readonly { title: string; body: string }[];
  researchHeading: string;
  researchLinks: readonly { title: string; body: string; href: string }[];
  cta: { title: string; body: string; label: string };
};

export const homeContent: Record<Lang, HomeCopy> = {
  en: {
    hero: {
      eyebrow: "Science × Medicine × Engineering × Industry × Global Network",
      title: "From Science to Healthcare. From Japan to the World.",
      summary: "CSI Global Health connects research foundations with clinical translation and global collaboration for the next era of precision medicine.",
      primaryLabel: "About CSI",
      secondaryLabel: "Explore our business areas",
      mapAlt: "Global network map centred on Japan, connecting Europe, China and the United States.",
      mapSrc: "/images/home/global-network-map.png",
    },
    foundation: {
      title: "Okayama University × CSI",
      body: "CSI Global Health is a start-up based on research foundations at Okayama University, connecting basic research, translation and international collaboration.",
      pillars: [
        { title: "Research", label: "Basic research" },
        { title: "Translation", label: "Clinical application" },
        { title: "Globalization", label: "International collaboration" },
      ],
    },
    expertHeading: "Global Scientific Advisory Network",
    globalHeading: "Global Structure",
    globalStructure: [
      { title: "Japan", body: "CSI Global Health, Co., Ltd. is based on research foundations at Okayama University." },
      { title: "USA", body: "Cardiovascular Solutions and Innovations, LLC (CSI USA) supports activities in the United States." },
      { title: "Global Network", body: "International collaboration across research, medicine, industry and related fields." },
    ],
    researchHeading: "Research & News",
    researchLinks: [
      { title: "Research Highlights", body: "An entry point for source-backed research updates.", href: "/en/news/" },
      { title: "Publications", body: "An entry point for verified publications and academic presentations.", href: "/en/news/" },
      { title: "News & Updates", body: "An entry point for approved company news and project updates.", href: "/en/news/" },
    ],
    cta: { title: "Building the Next Generation of Precision Medicine", body: "Creating a global innovation platform for the next era of precision healthcare.", label: "Contact CSI" },
  },
  ja: {
    hero: {
      eyebrow: "Science × Medicine × Engineering × Industry × Global Network",
      title: "科学から医療へ。日本から、世界へ。",
      summary: "CSI Global Health は、研究基盤、臨床応用、国際連携をつなぎ、次世代の精密医療を目指します。",
      primaryLabel: "CSIについて",
      secondaryLabel: "事業領域を見る",
      mapAlt: "日本を中心に、欧州、中国、米国を結ぶグローバルネットワークの地図。",
      mapSrc: "/images/home/global-network-map.png",
    },
    foundation: {
      title: "岡山大学 × CSI",
      body: "CSI Global Health は、岡山大学の研究基盤をもとに、基礎研究、トランスレーション、国際連携をつなぐスタートアップです。",
      pillars: [
        { title: "研究", label: "基礎研究" },
        { title: "トランスレーション", label: "臨床応用" },
        { title: "グローバル化", label: "国際連携" },
      ],
    },
    expertHeading: "グローバル科学顧問ネットワーク",
    globalHeading: "グローバル体制",
    globalStructure: [
      { title: "日本", body: "CSI Global Health, Co., Ltd. は、岡山大学の研究基盤をもとにしています。" },
      { title: "米国", body: "Cardiovascular Solutions and Innovations, LLC（CSI USA）は米国での活動を支えます。" },
      { title: "グローバルネットワーク", body: "研究、医療、産業および関連分野における国際連携です。" },
    ],
    researchHeading: "研究成果・ニュース",
    researchLinks: [
      { title: "研究成果", body: "根拠のある研究アップデートへの入口です。", href: "/ja/news/" },
      { title: "学術発表・論文", body: "確認済みの論文・学術発表への入口です。", href: "/ja/news/" },
      { title: "ニュース・お知らせ", body: "承認済みの企業ニュース・プロジェクト更新への入口です。", href: "/ja/news/" },
    ],
    cta: { title: "次世代の精密医療イノベーションを構築する", body: "次の時代の精密医療のためのグローバルイノベーションプラットフォームを目指します。", label: "お問い合わせ" },
  },
};
