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
