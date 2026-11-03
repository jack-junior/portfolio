# Portfolio — Komi Selassi Gayi

Site statique bilingue (EN à la racine, FR sous /fr/) construit avec Astro 5, éditable via /admin (Sveltia CMS, compatible Decap) et déployé sur Firebase Hosting par GitHub Actions.

## Où est le contenu
- `src/data/profile.en.yml` / `profile.fr.yml` : profil, « Currently », thèmes de recherche, compétences, prix, certifications, engagement.
- `src/content/news/` : actualités (`<slug>.en.md` + `<slug>.fr.md`, `highlight: true` = affiché sur l'accueil).
- `src/content/projects/` : projets (catégorie tools / analyses / apps / training, `featured: true` = accueil).
- `src/content/publications/` : publications (une seule version, titres en anglais).
- `src/content/experience/` : parcours (work / education).
- `src/lib/figures.ts` : chiffres des figures (tous issus des travaux de Komi).
- `public/images/`, `public/files/` (CV PDF).

## Commandes
npm install · npm run dev (aperçu local) · npm run build (génère dist/)

## Mise en ligne
1. Créer le dépôt GitHub `jack-junior/portfolio` et y pousser ce dossier.
2. Créer un projet Firebase, mettre son identifiant dans `.firebaserc`.
3. `firebase init hosting:github` (crée le secret FIREBASE_SERVICE_ACCOUNT) — ou l'ajouter à la main dans Settings > Secrets.
4. Chaque push sur `main` (y compris depuis /admin) reconstruit et publie le site.

## Éditer depuis /admin
Ouvrir https://<site>/admin/, se connecter avec un jeton GitHub (Personal access token, droits « Contents: read and write » sur le dépôt).
