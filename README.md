# ABICOM SARL — Site web (Next.js 14)

Site vitrine corporate & industriel pour ABICOM SARL (fourniture de produits chimiques miniers, RDC).

## Démarrer en local
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production
```

## Pages
Accueil · À propos · Produits · Services · Blog + article · Galerie · Téléchargements · Contact · Admin

## Espace administrateur
- URL : `/admin`
- Identifiants (hardcodés dans `content/site.ts`) : `admin` / `abic0m2025`
- Le tableau de bord permet d'ajouter / modifier / supprimer :
  - les **articles de blog** (`content/data/blog.json`)
  - les **documents PDF** (`content/data/downloads.json`)
  - les **photos de galerie** (`content/data/gallery.json`)
- Les modifications écrivent directement dans les fichiers JSON (contenu statique, pas de base de données).
- Pour ajouter un vrai fichier PDF : déposez-le dans `public/pdf/` puis renseignez le chemin `/pdf/nom.pdf` dans l'admin, ou via l'upload.

## Formulaire de contact / devis
Les soumissions sont enregistrées dans `submissions/*.json` (côté serveur).
Pour un envoi réel par email vers `moussalusakueno1@gmail.com`, brancher Nodemailer ou Resend dans `app/api/contact/route.ts` et `app/api/devis/route.ts` avec les variables d'env `MAIL_*` (code de log déjà en place).

## Multilingue
Switch FR/EN en haut à droite. Tous les textes fixes sont dans `i18n/index.ts`.
Les contenus (blog, downloads, galerie) disposent de champs FR + EN.

## Déploiement
Compatible Vercel / Netlify / serveur Node. `npm run build` génère le dossier `.next`.
Le `sitemap.xml` est généré automatiquement (`app/sitemap.ts`).

## Infos légales (footer + À propos)
RCCM : CD/LSH/RCCM/20-B-00515 · NIN : 05-F4300-N63178C · CNSS : 1018797300
Adresse : 12/B Av. Sola, Golf Météo La Katangaise, Lubumbashi, RDC
WhatsApp : +243 824 933 331
