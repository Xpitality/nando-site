export const languages = {
  en: 'en',
  sl: 'sl',
  it: 'it',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

import en from './en.json';
import sl from './sl.json';
import it from './it.json';

const dictionaries = { en, sl, it } as const;

export function t(lang: Lang, key: string): string {
  const dict = dictionaries[lang] || dictionaries[defaultLang];
  const keys = key.split('.');
  let val: any = dict;
  for (const k of keys) {
    val = val?.[k];
  }
  return val ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, langOrPath] = url.pathname.split('/');
  if (langOrPath in languages) return langOrPath as Lang;
  return defaultLang;
}

export function getLocalizedPath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}
