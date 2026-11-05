import type { Lang } from '../content/types';

const rawBase = import.meta.env.BASE_URL;
export const BASE = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export type PageKey = 'home' | 'cv' | 'letter';

const slugs: Record<PageKey, string> = {
  home: '',
  cv: 'cv/',
  letter: 'carta/',
};

export function pathFor(lang: Lang, page: PageKey = 'home'): string {
  const prefix = lang === 'ca' ? '' : `${lang}/`;
  return `${BASE}${prefix}${slugs[page]}`;
}

/** PDF reals del currículum i de la carta, un per idioma. */
const CV_PDFS: Record<Lang, string> = {
  ca: `${BASE}curriculum-jose-da-silva.pdf`,
  es: `${BASE}curriculum-jose-da-silva-es.pdf`,
  en: `${BASE}curriculum-jose-da-silva-en.pdf`,
};

const LETTER_PDFS: Record<Lang, string> = {
  ca: `${BASE}carta-de-presentacio-jose-da-silva.pdf`,
  es: `${BASE}carta-de-presentacio-jose-da-silva-es.pdf`,
  en: `${BASE}carta-de-presentacio-jose-da-silva-en.pdf`,
};

export const cvPdf = (lang: Lang): string => CV_PDFS[lang];
export const letterPdf = (lang: Lang): string => LETTER_PDFS[lang];
