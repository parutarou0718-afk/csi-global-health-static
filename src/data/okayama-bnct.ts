import type { Lang } from "../lib/i18n";

type ResearchTheme = {
  icon: string;
  alt: string;
  title: string;
  subtitle: string;
};

type OkayamaBnctCopy = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  themes: readonly ResearchTheme[];
};

export const okayamaBnctContent: Record<Lang, OkayamaBnctCopy> = {
  en: {
    eyebrow: "CSI Global Health",
    title: "Okayama University × BNCT",
    paragraphs: [
      "CSI Global Health draws on Okayama University's long-standing research foundation in BNCT and particle medicine. From Japan, CSI connects research, clinical translation and industry to advance BNCT, heavy-ion and proton therapy for a healthier world.",
    ],
    themes: [
      { icon: "/images/home/icons/research-microscope.png", alt: "Microscope", title: "Research", subtitle: "Basic Research" },
      { icon: "/images/home/icons/translation-dna.png", alt: "DNA double helix", title: "Translation", subtitle: "Clinical Application" },
      { icon: "/images/home/icons/globalization-globe.png", alt: "Globe", title: "Globalization", subtitle: "International Collaboration" },
    ],
  },
  ja: {
    eyebrow: "CSI Global Health",
    title: "岡山大学 × BNCT",
    paragraphs: [
      "CSI Global Healthは、岡山大学におけるBNCTと粒子医療の長年の研究基盤を礎としています。日本から研究、臨床応用、産業をつなぎ、BNCT、重粒子線、陽子線治療の発展を世界へ届けます。",
    ],
    themes: [
      { icon: "/images/home/icons/research-microscope.png", alt: "顕微鏡", title: "研究", subtitle: "基礎研究" },
      { icon: "/images/home/icons/translation-dna.png", alt: "DNA二重らせん", title: "トランスレーション", subtitle: "臨床応用" },
      { icon: "/images/home/icons/globalization-globe.png", alt: "地球儀", title: "グローバル化", subtitle: "国際連携" },
    ],
  },
};
