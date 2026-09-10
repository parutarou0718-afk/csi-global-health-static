// Legacy entry point retained during the Phase 1 transition.
// New page code must import from the focused data and i18n modules instead.
export { businessAreas } from "./business";
export { companyProfile } from "./company";
export { experts } from "./experts";
export { defaultLanguage, pagePath, supportedLanguages, type Lang } from "../lib/i18n";
