import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { getCollection } from 'astro:content';
import type { Lang } from './i18n';

export interface Profile {
  name: string;
  name_variants: string[];
  google_site_verification?: string;
  role: string;
  location: string;
  headline: string;
  intro: string;
  about: string;
  photo: string;
  photo_alt: string;
  photo_caption: string;
  email: string;
  orcid: string;
  github: string;
  linkedin: string;
  cv_file: string;
  currently: string[];
  themes: { title: string; text: string; question?: string }[];
  skills: { group: string; items: string }[];
  talks: { title: string; detail: string; year: string }[];
  certifications: { title: string; detail: string; year: string }[];
  awards: { title: string; detail: string; year: string }[];
  service: { title: string; detail: string }[];
  languages: string;
}

export function getProfile(lang: Lang): Profile {
  const file = path.resolve(`src/data/profile.${lang}.yml`);
  return YAML.parse(fs.readFileSync(file, 'utf8')) as Profile;
}

/** Entries of a translated collection for one language, with the locale suffix removed from the id. */
export async function localized<C extends 'news' | 'projects' | 'experience'>(name: C, lang: Lang) {
  const all = await getCollection(name);
  return all
    .filter((e) => e.id.endsWith(`.${lang}`))
    .map((e) => ({ ...e, slug: e.id.slice(0, -lang.length - 1) }));
}

export async function getNews(lang: Lang) {
  return (await localized('news', lang)).sort((a, b) => +b.data.date - +a.data.date);
}

export async function getProjects(lang: Lang) {
  return (await localized('projects', lang)).sort((a, b) => a.data.order - b.data.order);
}

export async function getExperience(lang: Lang) {
  return (await localized('experience', lang)).sort((a, b) => a.data.order - b.data.order);
}

export async function getPublications() {
  const all = await getCollection('publications');
  return all.sort((a, b) =>
    a.data.role === b.data.role ? a.data.order - b.data.order : a.data.role === 'first' ? -1 : 1,
  );
}
