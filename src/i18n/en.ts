export const navigation = [
  ["Home", "/en/"],
  ["About Us", "/en/about/"],
  ["Business", "/en/business/"],
  ["Experts", "/en/experts/"],
  ["News", "/en/news/"],
  ["Contact", "/en/contact/"],
] as const;

export const common = {
  menu: "Open navigation",
  closeMenu: "Close navigation",
  language: "Language",
  comingSoon: "This section is being prepared.",
  contactDetails: "Public contact details are being confirmed.",
  copyright: "All rights reserved.",
} as const;

export const newsPage = {
  hero: { eyebrow: "CSI GLOBAL HEALTH", title: "Featured News" },
  latest: { eyebrow: "LATEST NEWS", title: "Latest News", empty: "Further confirmed updates will be published here." },
  article: { back: "Back to News" },
} as const;

export const contactPage = {
  hero: { eyebrow: "CSI GLOBAL HEALTH", title: "Contact" },
  details: { title: "Contact Details" },
} as const;

export const expertsPage = {
  hero: { eyebrow: "CSI GLOBAL HEALTH", title: "Experts", headline: "A Global Network of Scientific Expertise", description: "CSI Global Health connects source-backed expertise across particle medicine, clinical translation and international collaboration." },
  founder: { label: "FOUNDER & CEO", title: "Founder & CEO", description: "Leading CSI Global Health with a research background spanning BNCT, drug delivery systems, molecular imaging and theranostics." },
  network: { label: "SCIENTIFIC NETWORK", title: "Scientific Network", description: "A growing network of confirmed specialists supporting research, clinical translation and international dialogue." },
  expertise: { label: "OUR EXPERTISE", title: "Areas of Expertise", items: [["BNCT", "Neutron capture therapy research and clinical development"], ["Theranostics", "Connecting diagnosis and therapy"], ["Molecular Imaging", "Research supporting precision healthcare"], ["Global Collaboration", "Links across research, clinical and industry networks"]] },
  collaboration: { label: "COLLABORATION", title: "Academic and International Collaboration", description: "CSI brings together knowledge across medicine, life sciences, engineering and industry to support practical international exchange." },
  cta: { business: "Explore Business Areas", contact: "Contact Us" },
} as const;

export const about = {
  hero: {
    eyebrow: "CSI GLOBAL HEALTH",
    title: "About CSI",
    headline: "From Science to Medicine. Connecting Research, Clinical Translation and Global Innovation.",
    description: "CSI Global Health is an Okayama University-based start-up advancing particle medicine and precision healthcare through research, clinical translation and international collaboration.",
    cityAlt: "Okayama cityscape",
    globeAlt: "Global research network centered on Okayama",
  },
  who: {
    label: "WHO WE ARE",
    title: "From Research to Global Healthcare",
    description: "Built on research foundations related to Okayama University, CSI connects particle medicine and precision healthcare with clinical translation, medical technology and global industrial collaboration.",
    themes: [["University-based", "Research foundation"], ["Translation-oriented", "Research to clinical application"], ["Global Network", "Research, clinical and industry"]],
  },
  foundation: {
    label: "OUR FOUNDATION",
    title: "A Research Foundation for Particle Medicine",
    description: "CSI draws on research foundations in medicine, pharmaceutical sciences, neutron therapy and BNCT-related fields. The foundation includes work in drug delivery systems, molecular imaging and theranostics.",
    steps: ["Okayama University Research Foundation", "Medicine / Pharmacy / BNCT", "Research & Scientific Base", "CSI Global Health"],
  },
  founder: { label: "MESSAGE FROM THE FOUNDER & CEO", title: "Eiji Matsuura, Ph.D.", message: "At CSI Global Health, we seek to connect scientific research with clinical translation and international collaboration. Building on a research foundation related to Okayama University, we will continue to foster practical dialogue across medicine, technology and industry, from Japan to the world.", link: "View Profile" },
  strategy: {
    label: "OUR STRATEGIC APPROACH",
    title: "Three Strategic Approaches",
    items: [
      ["Particle Medicine", "Heavy Ion · Proton · BNCT", "Connecting research and technology directions across particle medicine."],
      ["Translation & Technology", "Drug · Imaging · Equipment · Engineering", "Linking development, clinical translation and enabling technology."],
      ["Global Collaboration", "Research · Clinical · Industry", "Building practical links between scientific, medical and industrial resources."],
    ],
    link: "Explore Business Areas",
  },
  network: { label: "GLOBAL NETWORK", title: "Japan × USA × Global Network" },
  vision: {
    label: "OUR VISION",
    title: "From Science to Medicine. From Innovation to Patients. From Japan to the World.",
    description: "CSI aims to become an international medical technology platform connecting universities, research institutions, medical institutions, manufacturers, industry partners and global markets.",
  },
  profile: { label: "COMPANY PROFILE", title: "Company Profile", established: "Established", representative: "Representative", positioning: "Company Type / Positioning", business: "Business" },
  cta: { business: "Explore Business Areas", experts: "Meet the Scientific Network" },
} as const;
