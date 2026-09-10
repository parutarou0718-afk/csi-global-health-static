export type Lang = "en" | "ja";

export const supportedLanguages = ["en", "ja"] as const;
export const defaultLanguage: Lang = "en";

export function pagePath(lang: Lang, pathname: string): string {
  const path = pathname.replace(/^\/(en|ja)(?=\/|$)/, "") || "/";
  return `/${lang}${path}`;
}
