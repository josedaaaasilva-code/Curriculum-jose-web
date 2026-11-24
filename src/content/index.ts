import type { Content, Lang } from './types';
import { ca } from './ca';
import { es } from './es';
import { en } from './en';
import { tech } from './tech';

export const content: Record<Lang, Content> = {
  ca: { ...ca, tech: tech.ca },
  es: { ...es, tech: tech.es },
  en: { ...en, tech: tech.en },
};

export const languages: { code: Lang; label: string; short: string }[] = [
  { code: 'ca', label: 'Català', short: 'CA' },
  { code: 'es', label: 'Castellano', short: 'ES' },
  { code: 'en', label: 'English', short: 'EN' },
];

export function isLang(value: string): value is Lang {
  return value === 'ca' || value === 'es' || value === 'en';
}
