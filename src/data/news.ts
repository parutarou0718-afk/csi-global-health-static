import type { Lang } from "../lib/i18n";

type NewsItem = {
  slug: string;
  image: string;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  body: Record<Lang, string>;
  status: "source-backed";
};

export const newsItems: readonly NewsItem[] = [
  {
    slug: "website-launch",
    image: "/images/news/website-launch.png",
    title: {
      en: "CSI Global Health website launches",
      ja: "CSI Global Health 公式ウェブサイト開設のお知らせ",
    },
    summary: {
      en: "The official website for CSI Global Health is now available. It introduces our research foundation, business areas and expert network.",
      ja: "CSI Global Healthの公式ウェブサイトを開設しました。研究基盤、事業領域、専門家ネットワークをご紹介します。",
    },
    body: {
      en: "CSI Global Health’s official website is now available. The site provides an introduction to the company’s research foundation, business areas and expert network, and will be updated as verified information becomes available.",
      ja: "CSI Global Healthの公式ウェブサイトを開設しました。本サイトでは、研究基盤、事業領域、専門家ネットワークをご紹介し、確認済みの情報を随時更新していきます。",
    },
    status: "source-backed",
  },
];
