COMPOSE = docker compose

.PHONY: help init-env up down restart build prod prod-down logs shell lint audit install dev preview clean

help: ## Affiche les commandes disponibles
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}'

init-env: ## Copie .env.example vers .env s'il n'existe pas
	@if [ ! -f .infrastructure/env/.env ]; then \
		cp .infrastructure/env/.env.example .infrastructure/env/.env; \
		echo "Created .infrastructure/env/.env from .env.example"; \
	else \
		echo ".infrastructure/env/.env already exists"; \
	fi

# --- Docker Compose (Maintenance & Développement) ---

up: ## Démarre le serveur de développement Vite dans Docker
	$(COMPOSE) up -d dev

down: ## Arrête les conteneurs Docker
	$(COMPOSE) down

restart: down up ## Redémarre le serveur de développement Docker

build: ## Construit les images Docker (dev)
	$(COMPOSE) build dev

prod: ## Construit et lance la version production (Nginx) sur le port 8080
	$(COMPOSE) --profile prod up -d --build prod

prod-down: ## Arrête le conteneur de production
	$(COMPOSE) --profile prod down

logs: ## Suit les logs du conteneur dev
	$(COMPOSE) logs -f dev

shell: ## Ouvre un shell dans le conteneur dev
	$(COMPOSE) exec dev sh

clean: ## Supprime les conteneurs, volumes et le dossier dist
	$(COMPOSE) --profile prod down -v --remove-orphans
	rm -rf dist

# --- Commandes locales (Node / Netlify) ---

install: ## Installe les dépendances npm en local
	npm install

dev: ## Lance Vite en local (hors Docker)
	npm run dev

preview: ## Construit et prévisualise le build Netlify en local
	npm run build && npm run preview

lint: ## Exécute ESLint
	npm run lint

audit: ## Vérifie les vulnérabilités npm
	npm audit
