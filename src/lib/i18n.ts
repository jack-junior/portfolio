export type Lang = 'en' | 'fr';
export const langs: Lang[] = ['en', 'fr'];

export const routes = ['', 'research', 'publications', 'projects', 'cv', 'news'] as const;
export type Route = (typeof routes)[number];

/** URL of a page in a given language. English lives at the root, French under /fr/. */
export function url(lang: Lang, route: Route | string = ''): string {
  const base = lang === 'en' ? '/' : '/fr/';
  return route ? `${base}${route}/` : base;
}

const months = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  fr: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
};
export function monthYear(d: Date, lang: Lang) {
  return `${months[lang][d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export const ui = {
  en: {
    nav: { home: 'Home', research: 'Research', publications: 'Publications', projects: 'Projects', cv: 'CV', news: 'News' },
    themeLabel: 'Switch between light and dark mode',
    themeText: 'Theme',
    switchTo: 'Français',
    switchLabel: 'Lire en français',
    currently: 'Currently',
    highlights: 'Highlights',
    research: 'Research',
    researchLead: 'What I work on',
    selectedWork: 'Selected work',
    selectedPubs: 'Selected publications',
    allPubs: 'All publications',
    allProjects: 'All projects',
    allNews: 'All news',
    readMore: 'More on my research',
    contact: 'Contact',
    contactLead: 'For collaborations, statistical questions or speaking, write to me.',
    firstAuthor: 'First author',
    coAuthor: 'Co-author',
    status: { published: 'Published', under_review: 'Under review', preprint: 'Preprint' },
    code: 'Code',
    paper: 'Paper',
    live: 'Live',
    categories: {
      tools: 'Software and tools',
      analyses: 'Data analyses',
      apps: 'Applications',
      training: 'Training material and smaller analyses',
    },
    cv: {
      experience: 'Experience', education: 'Education', certifications: 'Certifications and training',
      awards: 'Awards and distinctions', talks: 'Talks and panels', service: 'Service and community', skills: 'Methods and tools',
      languages: 'Languages', download: 'Download CV (PDF)',
    },
    fig: 'Fig.',
    source: 'Source',
    orcidNote: 'Full and up-to-date list on ORCID',
    footer: 'Built with Astro. Text and figures',
    skip: 'Skip to content',
    notFound: 'This page does not exist.',
    backHome: 'Back to the home page',
  },
  fr: {
    nav: { home: 'Accueil', research: 'Recherche', publications: 'Publications', projects: 'Projets', cv: 'CV', news: 'Actualités' },
    themeLabel: 'Basculer entre mode clair et mode sombre',
    themeText: 'Thème',
    switchTo: 'English',
    switchLabel: 'Read in English',
    currently: 'En ce moment',
    highlights: 'Faits marquants',
    research: 'Recherche',
    researchLead: 'Ce sur quoi je travaille',
    selectedWork: 'Travaux choisis',
    selectedPubs: 'Publications choisies',
    allPubs: 'Toutes les publications',
    allProjects: 'Tous les projets',
    allNews: 'Toutes les actualités',
    readMore: 'En savoir plus sur ma recherche',
    contact: 'Contact',
    contactLead: 'Pour une collaboration, une question statistique ou une intervention, écrivez-moi.',
    firstAuthor: 'Premier auteur',
    coAuthor: 'Co-auteur',
    status: { published: 'Publié', under_review: 'En révision', preprint: 'Prépublication' },
    code: 'Code',
    paper: 'Article',
    live: 'En ligne',
    categories: {
      tools: 'Logiciels et outils',
      analyses: 'Analyses de données',
      apps: 'Applications',
      training: 'Supports de formation et analyses plus courtes',
    },
    cv: {
      experience: 'Expérience', education: 'Formation', certifications: 'Certifications et formations',
      awards: 'Prix et distinctions', talks: 'Interventions', service: 'Engagement', skills: 'Méthodes et outils',
      languages: 'Langues', download: 'Télécharger le CV (PDF)',
    },
    fig: 'Fig.',
    source: 'Source',
    orcidNote: 'Liste complète et à jour sur ORCID',
    footer: 'Site construit avec Astro. Textes et figures',
    skip: 'Aller au contenu',
    notFound: "Cette page n'existe pas.",
    backHome: "Retour à l'accueil",
  },
} as const;
