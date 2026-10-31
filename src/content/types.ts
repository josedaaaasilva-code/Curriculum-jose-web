export type Lang = 'ca' | 'es' | 'en';

export interface Meta {
  title: string;
  description: string;
}

export interface SiteInfo {
  name: string;
  initials: string;
  role: string;
  location: string;
  availability: string;
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  github: string;
}

export interface Nav {
  home: string;
  cv: string;
  letter: string;
  contact: string;
}

export interface Ui {
  skip: string;
  themeToggle: string;
  themeToDark: string;
  themeToLight: string;
  langLabel: string;
  mainNav: string;
  print: string;
  printHint: string;
  backToTop: string;
  madeWith: string;
  updated: string;
  statusLabel: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Hero {
  eyebrow: string;
  subtitle: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  facts: Fact[];
}

export interface TechItem {
  icon: string;
  name: string;
}

export interface TechGroup {
  title: string;
  items: TechItem[];
}

export interface TechSection {
  title: string;
  lead: string;
  groups: TechGroup[];
}

export interface HomeCard {
  key: 'cv' | 'letter';
  number: string;
  title: string;
  text: string;
  cta: string;
}

export interface Highlight {
  title: string;
  text: string;
}

export interface Home {
  meta: Meta;
  lead: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  sectionsTitle: string;
  cards: HomeCard[];
  highlightsTitle: string;
  highlights: Highlight[];
}

export interface Profile {
  title: string;
  lead: string;
  paragraphs: string[];
}

export interface Job {
  role: string;
  org: string;
  place: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

export interface ExperienceSection {
  title: string;
  lead: string;
  items: Job[];
  otherTitle: string;
  other: Job[];
}

export interface Study {
  title: string;
  org: string;
  place: string;
  period: string;
  status: string;
  detail: string;
}

export interface EducationSection {
  title: string;
  lead: string;
  items: Study[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface SkillsSection {
  title: string;
  lead: string;
  groups: SkillGroup[];
}

export interface Project {
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
  link?: string;
  linkLabel?: string;
}

export interface ProjectsSection {
  title: string;
  lead: string;
  items: Project[];
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface LanguagesSection {
  title: string;
  lead: string;
  items: LanguageItem[];
}

export interface Letter {
  meta: Meta;
  eyebrow: string;
  title: string;
  lead: string;
  place: string;
  greeting: string;
  paragraphs: string[];
  closing: string;
  signature: string;
  signatureRole: string;
  printLabel: string;
  cvCta: string;
}

export interface Contact {
  title: string;
  lead: string;
  emailLabel: string;
  phoneLabel: string;
  phoneReveal: string;
  locationLabel: string;
  githubLabel: string;
  note: string;
}

export interface Content {
  lang: Lang;
  meta: Meta;
  site: SiteInfo;
  nav: Nav;
  ui: Ui;
  hero: Hero;
  tech: TechSection;
  home: Home;
  profile: Profile;
  experience: ExperienceSection;
  education: EducationSection;
  skills: SkillsSection;
  projects: ProjectsSection;
  languages: LanguagesSection;
  letter: Letter;
  contact: Contact;
  footer: { line: string };
}
