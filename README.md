# CGA Frontend - Code, Growth, Alive

Système complet de gestion pour CGA incluant le site web public, le portail client, le portail agent, le tableau de bord administrateur et la boutique en ligne.

## Structure du Projet

### Pages Publiques
- **/** - Page d'accueil avec présentation de l'entreprise, services, témoignages
- **/services** - Liste détaillée des services avec formulaire de devis
- **/portfolio** - Projets réalisés avec technologies et catégories
- **/blog** - Articles et actualités
- **/contact** - Formulaire de contact et coordonnées

### E-commerce
- **/produits** - Catalogue de produits avec filtres
- **/panier** - Gestion du panier d'achat
- **/commande** - Processus de checkout
- **/commande/confirmation** - Confirmation de commande

### Portail Client (/client)
- **/client/dashboard** - Vue d'ensemble des projets et commandes
- **/client/projets** - Suivi détaillé des projets en cours
- **/client/commandes** - Historique et statut des commandes
- **/client/support** - Système de tickets de support

### Portail Agent (/agent)
- **/agent/dashboard** - Performance et statistiques
- **/agent/taches** - Liste des tâches assignées
- **/agent/projets** - Gestion des projets assignés

### Tableau de Bord Admin (/admin)
- **/admin** - Vue d'ensemble avec statistiques
- **/admin/projets** - Gestion complète des projets
- **/admin/clients** - Gestion des clients
- **/admin/agents** - Gestion de l'équipe
- **/admin/produits** - Gestion du catalogue
- **/admin/commandes** - Gestion des commandes
- **/admin/portfolio** - Gestion du portfolio public
- **/admin/statistiques** - Analytics et rapports
- **/admin/parametres** - Configuration du système

### Authentification
- **/login** - Connexion utilisateur
- **/register** - Inscription nouveau client

## Technologies Utilisées

- **Next.js 16** - Framework React avec App Router
- **React 19.2** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Framework CSS avec design system personnalisé
- **Shadcn/ui** - Composants UI réutilisables
- **Zustand** - Gestion d'état pour le panier
- **Vercel Analytics** - Analytics et monitoring

## Système de Design

### Couleurs CGA
Le thème utilise les couleurs or/doré de la marque CGA:
- **Primary**: Or/Doré (#D4AF37 en light, #E5C158 en dark)
- Support complet des modes clair et sombre
- Tokens de design sémantiques dans `globals.css`

### Typographie
- **Police principale**: Inter (sans-serif)
- **Police monospace**: Geist Mono

## Fonctionnalités Implémentées

### Gestion des Projets
- Création et suivi de projets
- Affectation d'agents
- Suivi de progression
- Notifications automatiques

### Gestion des Clients
- Profils clients détaillés
- Historique des projets et commandes
- Support intégré via tickets
- Tableau de bord personnalisé

### Gestion des Agents
- Portail dédié aux employés
- Gestion des tâches assignées
- Suivi de performance
- Communication interne

### E-commerce
- Catalogue dynamique de produits
- Panier avec gestion d'état
- Processus de commande complet
- Gestion des stocks

### Portfolio
- Section dynamique avec projets réalisés
- Gestion depuis le dashboard admin
- Catégorisation et filtrage
- Technologies utilisées

## Installation

\`\`\`bash
# Télécharger le projet depuis v0
# ou cloner depuis GitHub

# Installer les dépendances (si nécessaire)
npm install

# Lancer en développement
npm run dev
\`\`\`

## Configuration

Les variables d'environnement peuvent être configurées dans les paramètres du projet Vercel.

## Déploiement

Le projet peut être déployé directement sur Vercel via le bouton "Publish" dans v0.

## Structure des Fichiers

\`\`\`
app/
├── (public)/          # Routes publiques
│   ├── page.tsx       # Page d'accueil
│   ├── services/
│   ├── portfolio/
│   ├── blog/
│   └── contact/
├── client/            # Portail client
├── agent/             # Portail agent
├── admin/             # Dashboard admin
├── produits/          # E-commerce
├── panier/
├── commande/
├── login/
├── register/
└── layout.tsx         # Layout principal

components/
├── ui/                # Composants UI de base
├── client/            # Composants spécifiques client
├── agent/             # Composants spécifiques agent
├── admin/             # Composants spécifiques admin
├── products/          # Composants e-commerce
├── site-header.tsx
├── site-footer.tsx
├── theme-provider.tsx
└── theme-toggle.tsx

lib/
├── utils.ts           # Utilitaires
└── cart-store.ts      # Store Zustand pour le panier

types/
├── index.ts           # Types basés sur UML
└── product.ts         # Types produits
\`\`\`

## Notes de Développement

- Aucune intégration backend n'est configurée (Pour l'instant en tout cas)
- Les données sont des mocks pour la démonstration
- Le système est prêt pour l'intégration avec une API backend
- Tous les composants sont responsive et accessibles
- Support complet des modes clair/sombre

## Auteur

Isaac Akonkwa Web Dev @ CGA - Code, Growth, Alive

## Licence

Tous droits réservés © 2025 CGA
