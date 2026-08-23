
export type Lang = "ja" | "en" | "zh";
export const langOrder: Lang[] = ["ja", "en", "zh"];
export function pagePath(lang: Lang, pathname: string): string { const stripped=pathname.replace(/^\/(ja|en|zh)(?=\/|$)/, ""); return `/${lang}${stripped==="/"?"/":stripped}`; }

export const site = {
  company: "CSI Global Health, Co., Ltd.",
  tagline: { ja: "大学発バイオメディカル・スタートアップ", en: "University-based Biomedical Start Up", zh: "大学科研型生物医疗创新企业" },
  email: "info@csi-globalhealth.com",
  address: {
    ja: "〒700-8530 岡山県岡山市北区津島中1-1-1 岡山大学内",
    en: "1-1-1 Tsushima-naka, Kita-ku, Okayama 700-8530, Japan",
    zh: "日本冈山县冈山市北区津岛中1-1-1 冈山大学内"
  }
};

export const nav = {
  ja: [
    ["ホーム", "/ja/"],
    ["CSIについて", "/ja/about/"],
    ["企業沿革", "/ja/history/"],
    ["BNCT", "/ja/bnct/"],
    ["AtherOx", "/ja/atherox/"],
    ["科学顧問", "/ja/advisors/"],
    ["研究成果・ニュース", "/ja/news/"],
    ["お問い合わせ", "/ja/contact/"]
  ],
  en: [
    ["Home", "/en/"],
    ["About CSI", "/en/about/"],
    ["History", "/en/history/"],
    ["BNCT", "/en/bnct/"],
    ["AtherOx", "/en/atherox/"],
    ["Scientific Advisors", "/en/advisors/"],
    ["Research & News", "/en/news/"],
    ["Contact", "/en/contact/"]
  ],
  zh: [
    ["首页", "/zh/"],
    ["关于CSI", "/zh/about/"],
    ["公司沿革", "/zh/history/"],
    ["BNCT", "/zh/bnct/"],
    ["AtherOx", "/zh/atherox/"],
    ["科学顾问", "/zh/advisors/"],
    ["研究成果与新闻", "/zh/news/"],
    ["联系我们", "/zh/contact/"]
  ]
};

export const home = {
  ja: {
    eyebrow: "大学発バイオメディカル・スタートアップ",
    hero1: "大学発の研究基盤から、",
    hero2: "グローバル医療イノベーションへ。",
    hero3a: "日本と米国、",
    hero3b: "二拠点から世界へ。",
    intro: "CSI Global Healthは、岡山大学の研究基盤を原点に、日本と米国の二拠点体制のもと、先端研究・臨床応用・グローバル連携を推進し、がん・循環器領域における医療イノベーションを世界に届けます。",
    learn: "CSIについて詳しく見る",
    historyTitle: "CSIのあゆみ",
    steps: [
      ["01", "岡山大学の研究基盤", "医学・薬学・中性子治療などの学術基盤"],
      ["02", "CSI設立", "研究成果の社会実装と産業化を目指して"],
      ["03", "日本・米国二拠点体制", "研究・開発・臨床連携の加速"],
      ["04", "グローバル医療イノベーション", "世界の患者さんへ価値を届ける"]
    ],
    centersTitle: "二つの中核事業",
    bnctTitle: "BNCT",
    bnctSub: "次世代がん治療・中性子治療領域",
    bnctText: "BNCT（ホウ素中性子捕捉療法）を中心に、B-10化合物、DDS、Theranostics、分子イメージング、小型加速器型中性子源の研究・開発と国際連携を推進します。",
    atheroxTitle: "AtherOx®",
    atheroxSub: "動脈硬化研究のためのバイオマーカー技術",
    atheroxText: "AtherOx®は、oxLDL / β2GPI複合体に関連する独自バイオマーカー技術です。米国CSIを中心に、動脈硬化・心血管研究での応用可能性を検討しています。",
    view: "詳しく見る",
    advisorsTitle: "科学顧問",
    globalTitle: "グローバル構造と連携",
    researchTitle: "研究成果・ニュース",
    cards: [
      ["研究成果", "BNCT、AtherOxをはじめとする研究成果やプロジェクトの進捗をご紹介します。"],
      ["学術発表・論文", "国内外の学会発表、査読論文など最新の学術情報を掲載します。"],
      ["ニュース・お知らせ", "企業ニュース、イベント情報、国際共同研究の最新情報をお届けします。"]
    ],
    cta: "Building the Next Generation of Precision Medicine",
    ctaSub: "次世代の精密医療イノベーションプラットフォームを構築する"
  },
  en: {
    eyebrow: "University-based Biomedical Start Up",
    hero1: "From university research foundations",
    hero2: "to global medical innovation.",
    hero3a: "Japan and the United States:",
    hero3b: "two hubs connecting to the world.",
    intro: "CSI Global Health builds on research foundations at Okayama University and advances medical innovation through a dual-hub structure in Japan and the United States, connecting frontier research, clinical translation and international collaboration in oncology and cardiovascular science.",
    learn: "Learn more about CSI",
    historyTitle: "Our Development",
    steps: [
      ["01", "Okayama University research base", "Academic foundations in medicine, pharmacy and neutron therapy"],
      ["02", "CSI established", "Created to translate research into social and industrial value"],
      ["03", "Japan–USA dual hubs", "Accelerating research, development and clinical collaboration"],
      ["04", "Global medical innovation", "Connecting science and partners across regions"]
    ],
    centersTitle: "Two Core Business Platforms",
    bnctTitle: "BNCT",
    bnctSub: "Next-generation cancer and neutron therapy",
    bnctText: "Centered on boron neutron capture therapy, CSI advances research and collaboration in B-10 compounds, DDS, theranostics, molecular imaging and compact accelerator-based neutron sources.",
    atheroxTitle: "AtherOx®",
    atheroxSub: "Biomarker technology for atherosclerosis research",
    atheroxText: "AtherOx® is a proprietary biomarker technology related to the oxLDL/β2GPI complex. Through CSI USA, its potential applications in atherosclerosis and cardiovascular research are being explored.",
    view: "View details",
    advisorsTitle: "Scientific Advisors",
    globalTitle: "Global Structure & Collaboration",
    researchTitle: "Research & News",
    cards: [
      ["Research", "Updates on BNCT, AtherOx and other research programs and collaborations."],
      ["Publications", "Peer-reviewed papers, conference presentations and academic activity."],
      ["News", "Company updates, events and international collaborative projects."]
    ],
    cta: "Building the Next Generation of Precision Medicine",
    ctaSub: "A global platform connecting science, medicine, engineering and industry"
  },
  zh: {
    eyebrow: "大学科研型生物医疗创新企业",
    hero1: "从大学科研基础出发，",
    hero2: "走向全球医疗创新。",
    hero3a: "日本与美国双中心，",
    hero3b: "连接世界。",
    intro: "CSI Global Health 以冈山大学科研基础为起点，通过日本与美国双中心布局，推动前沿研究、临床转化与全球协作，面向肿瘤与心血管领域开展医疗科技创新。",
    learn: "了解CSI",
    historyTitle: "CSI的发展",
    steps: [
      ["01", "冈山大学科研基础", "医学、药学、中子治疗等领域的长期研究积累"],
      ["02", "CSI成立", "推动科研成果的社会转化与产业化"],
      ["03", "日本・美国双中心", "加速研究、开发与临床合作"],
      ["04", "全球医疗创新", "连接全球科研、临床与产业资源"]
    ],
    centersTitle: "两大核心业务",
    bnctTitle: "BNCT",
    bnctSub: "下一代肿瘤与中子治疗",
    bnctText: "围绕硼中子俘获治疗，推进B-10化合物、DDS、Theranostics、分子影像及小型加速器型中子源的研发与国际合作。",
    atheroxTitle: "AtherOx®",
    atheroxSub: "面向动脉粥样硬化研究的生物标志物技术",
    atheroxText: "AtherOx® 是与 oxLDL / β2GPI 复合物相关的专有生物标志物技术，由美国 CSI 平台推进其在动脉粥样硬化与心血管研究中的潜在应用。",
    view: "查看详情",
    advisorsTitle: "科学顾问",
    globalTitle: "全球架构与合作",
    researchTitle: "研究成果与新闻",
    cards: [
      ["研究成果", "介绍BNCT、AtherOx及其他研究项目的最新进展。"],
      ["学术发表・论文", "发布国内外学会报告、论文及学术合作信息。"],
      ["新闻・动态", "发布企业新闻、活动与国际合作项目进展。"]
    ],
    cta: "Building the Next Generation of Precision Medicine",
    ctaSub: "构建下一代精准医疗全球创新平台"
  }
};

export const advisors = [
  {
    image: "/assets/eiji-matsuura.jpg",
    name: "Eiji Matsuura, Ph.D.",
    ja: ["松浦栄次 博士", "創始者・CEO｜岡山大学名誉教授", "BNCT薬物送達システム（DDS）、分子イメージング、Theranostics。"],
    en: ["Eiji Matsuura, Ph.D.", "Founder & CEO | Professor Emeritus, Okayama University", "Research interests include BNCT drug delivery systems, molecular imaging and theranostics."],
    zh: ["松浦荣次 博士", "创始人・CEO｜冈山大学名誉教授", "研究领域包括BNCT药物递送系统（DDS）、分子影像与Theranostics。"]
  },
  {
    image: "/assets/wolfgang-sauerwein.jpg",
    name: "Wolfgang A. G. Sauerwein",
    ja: ["Wolfgang A. G. Sauerwein 教授", "国際BNCT分野の専門家", "ドイツ・デュイスブルク＝エッセン大学名誉教授。BNCTの臨床・研究に長年従事。"],
    en: ["Wolfgang A. G. Sauerwein", "International BNCT Expert", "Professor emeritus at the University of Duisburg-Essen with extensive experience in BNCT research and clinical development."],
    zh: ["Wolfgang A. G. Sauerwein 教授", "国际BNCT领域专家", "德国杜伊斯堡-埃森大学退休教授，长期从事BNCT研究与临床工作。"]
  },
  {
    image: "/assets/sylviane-muller.jpg",
    name: "Sylviane Muller",
    ja: ["Sylviane Muller 教授", "免疫療法・創薬の専門家", "ストラスブール大学教授、CNRS名誉研究主任。免疫調節と創薬研究に従事。"],
    en: ["Sylviane Muller", "Immunotherapy & Drug Discovery Expert", "Professor at the University of Strasbourg and emeritus CNRS research director with expertise in immunomodulation and drug discovery."],
    zh: ["Sylviane Muller 教授", "免疫治疗与创新药物专家", "斯特拉斯堡大学教授、CNRS名誉研究主任，长期从事免疫调节与创新药物研究。"]
  },
  {
    image: "/assets/rameshwar-patil.jpg",
    name: "Rameshwar Patil",
    ja: ["Rameshwar Patil 教授", "BNCT・ナノ医療の専門家", "Loma Linda University准教授。BNCT、薬物送達、ナノ医療、脳腫瘍研究に従事。"],
    en: ["Rameshwar Patil", "BNCT & Nanomedicine Expert", "Associate Professor at Loma Linda University working on BNCT, drug delivery, nanomedicine and brain tumor research."],
    zh: ["Rameshwar Patil 教授", "BNCT与纳米医学专家", "美国Loma Linda University副教授，研究BNCT、药物递送、纳米医学与脑肿瘤。"]
  }
];
