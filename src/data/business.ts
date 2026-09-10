import type { Lang } from "../lib/i18n";

type BusinessArea = {
  id: string;
  number: string;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
};

export const businessAreas: readonly BusinessArea[] = [
  {
    id: "particle-medicine",
    number: "01",
    title: { en: "Particle Medicine & Precision Oncology", ja: "粒子医学・精密腫瘍学" },
    summary: { en: "A platform connecting particle therapy centres, hospitals, research organisations and technology partners.", ja: "粒子線治療センター、病院、研究機関、技術パートナーをつなぐプラットフォームです。" },
  },
  {
    id: "bnct",
    number: "02",
    title: { en: "BNCT, B-10 Compounds & DDS", ja: "BNCT・B-10 化合物・DDS" },
    summary: { en: "Research and development related to boron neutron capture therapy, B-10 compounds and drug delivery systems.", ja: "ホウ素中性子捕捉療法、B-10 化合物、ドラッグデリバリーシステムに関する研究開発です。" },
  },
  {
    id: "particle-therapy-systems",
    number: "03",
    title: { en: "Heavy Ion & Proton Therapy Systems", ja: "重粒子線・陽子線治療システム" },
    summary: { en: "Technology and systems supporting heavy ion and proton therapy.", ja: "重粒子線・陽子線治療を支える技術とシステムです。" },
  },
  {
    id: "theranostics",
    number: "04",
    title: { en: "Theranostics & Medical Imaging", ja: "セラノスティクス・医療画像" },
    summary: { en: "Diagnostic and therapeutic approaches, including molecular imaging.", ja: "分子イメージングを含む診断・治療アプローチです。" },
  },
  {
    id: "accelerator-engineering",
    number: "05",
    title: { en: "Accelerators, Neutron Sources & Advanced Engineering", ja: "加速器・中性子源・先端工学" },
    summary: { en: "Accelerator and neutron-source technologies, including advanced engineering applications.", ja: "加速器・中性子源技術および先端工学の応用です。" },
  },
  {
    id: "global-platform",
    number: "06",
    title: { en: "Global Medical & Industry Platform", ja: "グローバル医療・産業プラットフォーム" },
    summary: { en: "International collaboration across medicine, industry, research and related fields.", ja: "医療、産業、研究および関連分野における国際連携です。" },
  },
];
