# Infrastructure & Maintenance

Ce dossier centralise la configuration d'infrastructure, la conteneurisation Docker, les variables d'environnement et les secrets locaux du Portfolio.

## Structure

- `docker/` : `Dockerfile` multi-stage (`dev`, `builder`, `prod`) et configuration `nginx.conf` pour servir le build statique en local avec routage SPA.
- `env/` : Modèle `.env.example` (versionné) et fichier `.env` local (ignoré par Git).
- `secrets/` : Dossier réservé aux secrets locaux (tokens Netlify, clés API, certificats). Tout son contenu est ignoré par Git, sauf `.gitkeep` et `README.md`.

## Démarrage rapide (Docker)

1. Initialiser les variables d'environnement locales :
   ```bash
   make init-env
   ```
2. Lancer l'environnement de développement (Vite avec hot-reload sur `http://localhost:5173`) :
   ```bash
   make up
   ```
3. Tester le build de production avec Nginx (sur `http://localhost:8080`) :
   ```bash
   make prod
   ```

## Compatibilité Netlify

Netlify déploie directement depuis le dépôt Git à l'aide de `netlify.toml` à la racine (`npm run build` -> `dist/`).
Les variables d'environnement nécessaires en production (préfixées par `VITE_` pour être accessibles côté client) doivent être configurées dans l'interface Netlify (*Site configuration > Environment variables*).
