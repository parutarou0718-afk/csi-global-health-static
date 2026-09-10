import type { Lang } from "../lib/i18n";

type Expert = {
  slug: string;
  name: string;
  institution: Record<Lang, string>;
  focus: Record<Lang, string>;
  profileStatus: "source-backed";
};

export const experts: readonly Expert[] = [
  { slug: "eiji-matsuura", name: "Eiji Matsuura, Ph.D.", institution: { en: "Okayama University", ja: "岡山大学" }, focus: { en: "BNCT, drug delivery systems, molecular imaging and theranostics", ja: "BNCT、DDS、分子イメージング、セラノスティクス" }, profileStatus: "source-backed" },
  { slug: "wolfgang-sauerwein", name: "Wolfgang A. G. Sauerwein", institution: { en: "University of Duisburg-Essen", ja: "デュイスブルク＝エッセン大学" }, focus: { en: "BNCT research and clinical development", ja: "BNCT の研究および臨床開発" }, profileStatus: "source-backed" },
  { slug: "sylviane-muller", name: "Sylviane Muller", institution: { en: "University of Strasbourg / CNRS", ja: "ストラスブール大学 / CNRS" }, focus: { en: "Immunotherapy and drug discovery", ja: "免疫療法および創薬" }, profileStatus: "source-backed" },
  { slug: "rameshwar-patil", name: "Rameshwar Patil", institution: { en: "Loma Linda University", ja: "ロマリンダ大学" }, focus: { en: "BNCT and nanomedicine", ja: "BNCT およびナノメディシン" }, profileStatus: "source-backed" },
];
