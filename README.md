# Impact Durable AT - Pamela Colors
npm install
npm run dev
Palette: navy #0B1E38, orange #FF5A1F, green #00B85C

## Déploiement sur Vercel

Le workflow GitHub Actions `.github/workflows/deploy-vercel.yml` déploie en production à chaque push sur `main`. Il peut aussi être lancé manuellement depuis l’onglet **Actions** de GitHub.

1. Importer le dépôt GitHub dans Vercel et lier le projet.
2. Dans les paramètres du dépôt GitHub, ouvrir **Settings > Secrets and variables > Actions** et ajouter les secrets suivants :
	- `VERCEL_TOKEN` : jeton créé dans les paramètres du compte Vercel.
	- `VERCEL_ORG_ID` : identifiant de l’équipe ou du compte Vercel.
	- `VERCEL_PROJECT_ID` : identifiant du projet Vercel.
3. Pousser les changements sur la branche `main` pour lancer le déploiement.

Les identifiants `VERCEL_ORG_ID` et `VERCEL_PROJECT_ID` se trouvent dans les paramètres généraux du projet Vercel. Les secrets ne doivent pas être inscrits dans le code source.