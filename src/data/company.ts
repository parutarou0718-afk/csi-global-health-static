import type { Lang } from "../lib/i18n";

type LocalizedText = Record<Lang, string>;
type ContactPlaceholder = {
  label: LocalizedText;
  value: LocalizedText;
  status: "placeholder";
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

export const companyContact: Record<"email" | "phone" | "address", ContactPlaceholder> = {
  email: {
    label: { en: "Email", ja: "メール" },
    value: { en: "Public email to be confirmed", ja: "公開メールアドレスは確認中です" },
    status: "placeholder",
  },
  phone: {
    label: { en: "Phone", ja: "電話" },
    value: { en: "Public phone number to be confirmed", ja: "公開電話番号は確認中です" },
    status: "placeholder",
  },
  address: {
    label: { en: "Address", ja: "所在地" },
    value: { en: "Public postal address to be confirmed", ja: "公開住所は確認中です" },
    status: "placeholder",
  },
};
