export const navigation = [
  ["ホーム", "/ja/"],
  ["CSIについて", "/ja/about/"],
  ["事業領域", "/ja/business/"],
  ["専門家", "/ja/experts/"],
  ["ニュース", "/ja/news/"],
  ["お問い合わせ", "/ja/contact/"],
] as const;

export const common = {
  menu: "ナビゲーションを開く",
  closeMenu: "ナビゲーションを閉じる",
  language: "言語",
  comingSoon: "このセクションは準備中です。",
  contactDetails: "公開連絡先情報は確認中です。",
  copyright: "All rights reserved.",
} as const;

export const newsPage = {
  hero: { eyebrow: "CSI GLOBAL HEALTH", title: "注目のニュース" },
  latest: { eyebrow: "最新ニュース", title: "最新ニュース", empty: "確認済みの新しいお知らせは、こちらに掲載します。" },
  article: { back: "ニュース一覧へ戻る" },
} as const;

export const contactPage = {
  hero: { eyebrow: "CSI GLOBAL HEALTH", title: "お問い合わせ" },
  details: { title: "連絡先" },
} as const;

export const expertsPage = {
  hero: { eyebrow: "CSI GLOBAL HEALTH", title: "専門家", headline: "粒子線医療と精密医療を支えるグローバルな知のネットワーク", description: "CSI Global Health は、粒子線医療、臨床応用、国際連携に関する確認済みの専門知をつなぎます。" },
  founder: { label: "FOUNDER & CEO", title: "代表取締役・CEO", description: "BNCT、DDS、分子イメージング、セラノスティクスに関する研究基盤を背景に、CSI Global Health を率います。" },
  network: { label: "SCIENTIFIC NETWORK", title: "専門家ネットワーク", description: "研究、臨床応用、国際的な対話を支える、確認済み専門家のネットワークです。" },
  expertise: { label: "OUR EXPERTISE", title: "専門分野・注力領域", items: [["BNCT", "中性子捕捉療法の研究と臨床開発"], ["セラノスティクス", "診断と治療をつなぐ研究"], ["分子イメージング", "精密医療を支えるイメージング研究"], ["グローバル連携", "研究・臨床・産業をつなぐ国際ネットワーク"]] },
  collaboration: { label: "COLLABORATION", title: "学際的・国際的な連携", description: "医学、生命科学、工学、産業の知見をつなぎ、実践的な国際交流を支えます。" },
  cta: { business: "事業領域を見る", contact: "お問い合わせ" },
} as const;

export const about = {
  hero: {
    eyebrow: "CSI GLOBAL HEALTH",
    title: "CSIについて",
    headline: "科学から医療へ。研究・臨床応用・産業を世界へつなぐ。",
    description: "CSI Global Health は、岡山大学における研究基盤を背景に、研究、臨床応用、国際連携を通じて粒子線医療と精密医療の発展を目指すスタートアップです。",
    cityAlt: "岡山市街地",
    globeAlt: "岡山を中心としたグローバル研究ネットワーク",
  },
  who: {
    label: "WHO WE ARE",
    title: "研究から、世界の医療へ",
    description: "CSIは、岡山大学における研究基盤を背景に、粒子線医療と精密医療を、臨床応用、医療技術、国際的な産業連携へとつなげます。",
    themes: [["大学研究基盤", "研究を背景とした出発点"], ["研究・臨床応用・事業化", "研究から臨床応用へ"], ["グローバルネットワーク", "研究・臨床・産業をつなぐ"]],
  },
  foundation: {
    label: "研究基盤",
    title: "粒子線医療へつながる研究基盤",
    description: "CSIは、医学、薬学、中性子治療、BNCT関連分野の研究基盤を背景としています。DDS、分子イメージング、セラノスティクスに関する研究もその基盤に含まれます。",
    steps: ["岡山大学における研究基盤", "医学 / 薬学 / BNCT", "研究・科学的基盤", "CSI Global Health"],
  },
  founder: { label: "代表メッセージ", title: "松浦 栄次 博士", message: "CSI Global Health は、科学研究を臨床応用と国際連携へつなぐことを目指しています。岡山大学における研究基盤を背景に、医療、技術、産業の実践的な対話を育み、日本から世界へと広げてまいります。", link: "プロフィールを見る" },
  strategy: {
    label: "3つの戦略的アプローチ",
    title: "3つの戦略的アプローチ",
    items: [
      ["粒子線医療", "重粒子線 · 陽子線 · BNCT", "粒子線医療に関わる研究と技術の方向性をつなげます。"],
      ["臨床応用と技術", "薬剤 · イメージング · 装置 · エンジニアリング", "開発、臨床応用、基盤技術をつなげます。"],
      ["グローバル連携", "研究 · 臨床 · 産業", "科学、医療、産業の資源を実践的につなげます。"],
    ],
    link: "事業領域を見る",
  },
  network: { label: "グローバルネットワーク", title: "日本 × 米国 × グローバルネットワーク" },
  vision: {
    label: "OUR VISION",
    title: "科学から医療へ。イノベーションを患者へ。日本から世界へ。",
    description: "CSIは、大学、研究機関、医療機関、メーカー、産業パートナー、グローバル市場をつなぐ国際的な医療技術プラットフォームを目指します。",
  },
  profile: { label: "会社概要", title: "会社概要", established: "設立", representative: "代表者", positioning: "会社区分 / ポジショニング", business: "事業内容" },
  cta: { business: "事業領域を見る", experts: "専門家ネットワークを見る" },
} as const;
