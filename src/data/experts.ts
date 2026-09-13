import type { Lang } from "../lib/i18n";

type Expert = {
  slug: string;
  name: string;
  portrait: string;
  institution: Record<Lang, string>;
  focus: Record<Lang, string>;
  biography: Record<Lang, string>;
  profileStatus: "source-backed";
  role?: Record<Lang, string>;
};

export const experts: readonly Expert[] = [
  { slug: "eiji-matsuura", name: "Eiji Matsuura, Ph.D.", portrait: "/images/experts/eiji-matsuura.jpeg", institution: { en: "Okayama University", ja: "岡山大学" }, focus: { en: "BNCT, drug delivery systems, molecular imaging and theranostics", ja: "BNCT、DDS、分子イメージング、セラノスティクス" }, biography: { en: "Founder & CEO and Professor Emeritus at Okayama University. His research includes cancer and autoimmune diseases, BNCT drug delivery systems, antibody-based molecular imaging and theranostics.", ja: "岡山大学名誉教授。がん・自己免疫疾患、BNCT薬物送達システム（DDS）、抗体関連分子イメージング、セラノスティクスを研究領域としています。" }, role: { en: "Founder & CEO · Professor Emeritus, Okayama University", ja: "創業者・CEO｜岡山大学名誉教授" }, profileStatus: "source-backed" },
  { slug: "wolfgang-sauerwein", name: "Wolfgang A. G. Sauerwein", portrait: "/images/experts/wolfgang-sauerwein.png", institution: { en: "University of Duisburg-Essen / Okayama University", ja: "デュイスブルク＝エッセン大学 / 岡山大学" }, focus: { en: "BNCT research and clinical development", ja: "BNCT の研究および臨床開発" }, biography: { en: "Professor Emeritus at the University of Duisburg-Essen and Visiting Professor at Okayama University’s Neutron Therapy Research Center. His work includes early European clinical BNCT.", ja: "デュイスブルク＝エッセン大学名誉教授、岡山大学中性子治療研究センター客員教授。欧州における初期BNCT臨床治療にも携わってきました。" }, role: { en: "BNCT specialist", ja: "BNCT専門家" }, profileStatus: "source-backed" },
  { slug: "sylviane-muller", name: "Sylviane Muller", portrait: "/images/experts/sylviane-muller.jpeg", institution: { en: "University of Strasbourg / CNRS", ja: "ストラスブール大学 / CNRS" }, focus: { en: "Immunotherapy and drug discovery", ja: "免疫療法および創薬" }, biography: { en: "Professor at the University of Strasbourg and Emeritus Research Director at CNRS. Her work focuses on immunotherapy and innovative drug discovery.", ja: "ストラスブール大学教授、CNRS名誉研究主任。免疫療法および革新的な創薬を専門としています。" }, role: { en: "Immunotherapy and drug discovery", ja: "免疫療法・創薬" }, profileStatus: "source-backed" },
  { slug: "rameshwar-patil", name: "Rameshwar Patil", portrait: "/images/experts/rameshwar-patil.jpeg", institution: { en: "Loma Linda University", ja: "ロマリンダ大学" }, focus: { en: "BNCT and nanomedicine", ja: "BNCT およびナノメディシン" }, biography: { en: "Associate Professor at Loma Linda University. His research includes BNCT, drug delivery, nanomedicine, the blood–brain barrier and brain tumors.", ja: "ロマリンダ大学准教授。BNCT、薬物送達、ナノメディシン、血液脳関門、脳腫瘍を研究領域としています。" }, role: { en: "BNCT and nanomedicine", ja: "BNCT・ナノメディシン" }, profileStatus: "source-backed" },
];

export const expertPlacement: Readonly<Record<string, "founder" | "network">> = {
  "eiji-matsuura": "founder",
  "wolfgang-sauerwein": "network",
  "sylviane-muller": "network",
  "rameshwar-patil": "network",
};
