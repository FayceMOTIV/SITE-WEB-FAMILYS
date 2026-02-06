# AUDIT COMPLET - SITE-WEB-FAMILYS

**Date**: 6 février 2025
**Projet**: Site vitrine React pour "Le Family's" - Bourg-en-Bresse
**Hébergement**: Hostinger (mutualisé, dossier public_html/)
**Framework**: React 19 + CRA + CRACO + TailwindCSS

---

## 1. ARCHITECTURE DU SITE

### Structure des dossiers

```
frontend/
├── src/
│   ├── App.js              # Point d'entrée, routing
│   ├── index.js            # Bootstrap React
│   ├── components/         # 7 composants custom + 46 UI (shadcn)
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── HeroFullscreen.js
│   │   ├── AppPromo.js
│   │   ├── SocialMedia.js
│   │   ├── ScrollToTop.js
│   │   ├── SEO.js
│   │   └── ui/             # 46 composants shadcn/ui
│   ├── pages/              # 6 pages
│   │   ├── Home.js
│   │   ├── Menu.js
│   │   ├── Contact.js
│   │   ├── Application.js
│   │   ├── MentionsLegales.js
│   │   └── CGV.js
│   ├── data/
│   │   └── mock.js         # Données statiques (menu, avis, infos)
│   └── hooks/
│       └── use-toast.js
├── public/
│   ├── index.html          # Template HTML avec CSP + Guard JS
│   └── .htaccess           # Routing SPA + Security headers
└── build/                  # Build production (~2.9MB avec sourcemaps)
```

### Routes disponibles

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home.js | Page d'accueil avec hero, sections, avis |
| `/menu` | Menu.js | Carrousel d'images du menu |
| `/contact` | Contact.js | Infos contact, map, image restaurant |
| `/application` | Application.js | Promotion de l'app mobile |
| `/mentions-legales` | MentionsLegales.js | Mentions légales |
| `/cgv` | CGV.js | Conditions générales de vente |

### Router

- **React Router DOM v7.5.1** (très récent)
- Pas de lazy loading des routes
- Pas de route 404 wildcard définie

---

## 2. LISTE DES PROBLÈMES

### 🔴 CRITIQUE

#### 2.1 Images hébergées sur CDN externe Emergent Agent

**Problème**: 19 images hébergées sur `customer-assets.emergentagent.com`

| Fichier | Images concernées |
|---------|-------------------|
| `Header.js` | Logo Familys |
| `Footer.js` | Logo Familys |
| `HeroFullscreen.js` | Logo Familys |
| `AppPromo.js` | Logo Familys |
| `SEO.js` | og:image (Logo) |
| `Menu.js` | 7 images de menu |
| `Application.js` | 7 screenshots de l'app |

**Risque**: Si Emergent Agent désactive ce CDN ou le rend payant, toutes ces images disparaissent.

**Solution**: Télécharger et héberger localement dans `/public/images/`

#### 2.2 Images hébergées sur Unsplash/Pexels (non stables)

**Problème**: 6 images de background proviennent d'Unsplash et Pexels avec des URLs longues et instables.

| Fichier | Type |
|---------|------|
| `Home.js` | 3 backgrounds sections |
| `Application.js` | 2 backgrounds |
| `HeroFullscreen.js` | 1 hero background |

**Risque**: URLs peuvent changer ou être rate-limited.

**Solution**: Télécharger et optimiser en WebP local.

#### 2.3 Pas de robots.txt ni sitemap.xml

**Problème**: Fichiers SEO absents du dossier `public/`

**Impact**: Indexation Google potentiellement incomplète.

#### 2.4 Image potentiellement cassée

```
Contact.js:123 - src="https://lefamilysbourg.com/wp-content/uploads/2025/06/IMG_6488-1024x532.webp"
```

**Risque**: URL sur un ancien site WordPress, peut disparaître.

---

### 🟡 IMPORTANT

#### 2.5 46 composants UI inutilisés

**Problème**: shadcn/ui installé avec 46 composants, mais seulement 5 sont utilisés :
- `Button`
- `Card`
- `Dialog`
- `Label`
- `Toast/Toggle` (dans d'autres composants UI)

**Impact**: Potentiellement du code mort dans le bundle (tree-shaking devrait l'éliminer mais à vérifier).

#### 2.6 Pas de lazy loading des routes

**Problème**: Toutes les pages sont importées statiquement dans `App.js`

```javascript
import Home from './pages/Home';
import Menu from './pages/Menu';
// ... etc
```

**Impact**: Bundle initial plus lourd, temps de chargement augmenté.

**Solution**: Utiliser `React.lazy()` + `Suspense`

#### 2.7 Pas de lazy loading des images

**Problème**: Aucune image n'utilise `loading="lazy"`

**Impact**: Toutes les images chargées au premier rendu.

#### 2.8 Bundle JS volumineux

| Fichier | Taille | Gzippé |
|---------|--------|--------|
| `main.*.js` | 493 KB | 152 KB |
| `main.*.css` | 88 KB | 15 KB |

**Objectif recommandé**: < 100KB JS gzippé pour un site vitrine.

#### 2.9 CSP restrictive + Guard JS dans index.html

**Problème**: Code anti-Emergent dans `index.html` (55 lignes)
- MutationObserver permanent qui surveille le DOM
- CSP qui bloque `frame-ancestors`

**Impact**: Overhead de performance (minime mais inutile en prod).

**Solution**: Supprimer le guard JS après avoir migré les images.

#### 2.10 Dossier `.emergent/` à la racine

**Fichiers présents**:
- `emergent.yml`
- `summary.txt`

**Solution**: Supprimer ce dossier et l'ajouter au `.gitignore`.

#### 2.11 Backend Python inutilisé en production

**Fichier**: `backend/server.py` - API FastAPI avec MongoDB

**Constat**: Le frontend n'appelle AUCUNE API. Toutes les données sont dans `mock.js`.

**Solution**: Supprimer ou archiver le dossier `backend/`.

#### 2.12 Message noscript non informatif

```html
<noscript>You need to enable JavaScript to run this app.</noscript>
```

**Solution**: Mettre un message plus informatif en français avec les coordonnées du restaurant.

---

### 🟢 AMÉLIORATION

#### 2.13 Dépendances inutilisées potentielles

| Dépendance | Utilisée ? |
|------------|------------|
| `axios` | Non (pas d'appels API) |
| `react-hook-form` | Non visible |
| `zod` | Non visible |
| `date-fns` | Probablement non |
| `cmdk` | Non |
| `input-otp` | Non |
| `react-day-picker` | Non |
| `next-themes` | Non |
| `react-resizable-panels` | Non |

**Impact**: node_modules plus lourd, potentiel code mort.

#### 2.14 Pas de favicon personnalisé

**Problème**: Pas de favicon.ico dans `public/`

#### 2.15 Pas de PWA / manifest.json

**Problème**: Pas de support hors-ligne ni "Add to Home Screen"

#### 2.16 Map Google potentiellement incorrecte

```
Contact.js:108 - embed URL avec coordonnées génériques
```

**À vérifier**: Les coordonnées correspondent-elles vraiment au restaurant ?

#### 2.17 Liens réseaux sociaux à vérifier

```javascript
instagram: "https://www.instagram.com/lefamilys/",
facebook: "https://www.facebook.com/lefamilys"
```

**À vérifier**: Ces pages existent-elles vraiment ?

---

## 3. PROPOSITIONS D'OPTIMISATION

### Phase 1 : Corrections critiques (images)

1. **Créer dossier `/public/images/`**
2. **Télécharger toutes les images depuis emergentagent.com**:
   - Logo: `LOGO_FAMILYS.png`
   - Menu: `menu_1.png` à `menu_7.png`
   - App screenshots: `app_1.png` à `app_7.png`
3. **Télécharger les images Unsplash en WebP optimisé**:
   - Hero burger background
   - Section backgrounds (3)
4. **Mettre à jour tous les `src=` dans le code**

### Phase 2 : SEO

1. **Créer `public/robots.txt`**:
```
User-agent: *
Allow: /
Sitemap: https://lefamilysbourg.com/sitemap.xml
```

2. **Créer `public/sitemap.xml`** avec les 6 pages

3. **Ajouter favicon.ico** (logo du restaurant en 32x32)

4. **Améliorer le noscript**:
```html
<noscript>
  <div style="padding:20px;text-align:center;">
    <h1>LE FAMILY'S - Restaurant Bourg-en-Bresse</h1>
    <p>Appelez-nous : 04 74 52 60 82</p>
    <p>59 Rue du 14 Juillet 1789, 01000 Bourg-en-Bresse</p>
  </div>
</noscript>
```

### Phase 3 : Performance

1. **Lazy loading des routes**:
```javascript
const Home = React.lazy(() => import('./pages/Home'));
const Menu = React.lazy(() => import('./pages/Menu'));
// ...
```

2. **Ajouter `loading="lazy"` aux images** non critiques

3. **Supprimer les dépendances inutilisées** de package.json

4. **Supprimer les composants UI non utilisés** (41 fichiers)

### Phase 4 : Nettoyage Emergent

1. **Supprimer le guard JS** de `index.html` (après migration images)
2. **Simplifier la CSP**
3. **Supprimer le dossier `.emergent/`**
4. **Supprimer le dossier `backend/`**

---

## 4. PLAN D'ACTION ORDONNÉ

| Priorité | Action | Impact | Effort |
|----------|--------|--------|--------|
| 1 | Migrer images emergentagent.com vers /public/images/ | 🔴 Critique | 2h |
| 2 | Migrer images Unsplash vers WebP local | 🔴 Critique | 1h |
| 3 | Créer robots.txt + sitemap.xml | 🟡 SEO | 30min |
| 4 | Ajouter favicon | 🟡 UX | 15min |
| 5 | Supprimer guard JS et simplifier CSP | 🟡 Perf | 30min |
| 6 | Lazy loading des routes | 🟡 Perf | 1h |
| 7 | Lazy loading des images | 🟡 Perf | 30min |
| 8 | Supprimer dépendances inutilisées | 🟢 Clean | 1h |
| 9 | Supprimer composants UI inutilisés | 🟢 Clean | 30min |
| 10 | Supprimer .emergent/ et backend/ | 🟢 Clean | 15min |

**Temps total estimé**: ~8h de travail

---

## 5. MÉTRIQUES ACTUELLES

| Métrique | Valeur actuelle | Objectif |
|----------|-----------------|----------|
| Bundle JS (gzip) | 152 KB | < 100 KB |
| Bundle CSS (gzip) | 15 KB | < 20 KB ✅ |
| Images externes | 25+ | 0 |
| Lighthouse Performance | Non testé | > 90 |
| Lighthouse SEO | Non testé | > 90 |

---

## 6. LIENS EXTERNES UTILISÉS

### Liens de commande (fonctionnels)
- Commander: `https://familys.commandes.io/home/places`
- Uber Eats: `https://www.ubereats.com/store/familys/...`

### Liens app mobile (à vérifier)
- iOS: `https://apps.apple.com/fr/app/family-s-bourg-en-bresse/id6504155113`
- Android: `https://play.google.com/store/apps/details?id=fr.mizzup.familys`

### Réseaux sociaux (à vérifier)
- Instagram: `https://www.instagram.com/lefamilys/`
- Facebook: `https://www.facebook.com/lefamilys`

---

## CONCLUSION

Le site est fonctionnel mais présente des **risques majeurs liés aux images externes** (CDN Emergent Agent). La priorité absolue est de rapatrier toutes les images en local.

Les optimisations de performance et SEO sont importantes mais secondaires par rapport à la stabilité des assets.

Le code Emergent résiduel (guard JS, CSP) peut être supprimé une fois les images migrées.
