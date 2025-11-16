# Assistant de gestion – École fondamentale belge

Plateforme Next.js destinée à piloter les opérations quotidiennes d'une école fondamentale en Belgique : élèves, enseignants, personnel de soutien, responsables légaux, horaires, finances et commandes de fournitures.

## 🚀 Lancer le projet

```bash
npm install
npm run dev
```

Application disponible sur `http://localhost:3000`.

## 🧱 Principales briques

- `src/app/page.tsx` – tableau de bord réactif avec navigation latérale.
- `src/data/school.ts` – jeu de données de démonstration couvrant les entités clés.
- `src/components/dashboard/*` – composants métiers (élèves, enseignants, finances…).
- `src/lib/metrics.ts` – calculs d'indicateurs consolidés pour la direction.

## ✅ Qualité

- `npm run lint` – ESLint (Next.js core-web-vitals).
- `npm run test` – Vitest pour la logique partagée.
- `npm run build` – build de production Next.js.

## 🌐 Déploiement

Le projet est optimisé pour un déploiement sur Vercel (`vercel deploy --prod`). La version publiée figure dans `https://agentic-b4a97781.vercel.app`.

## 🛣️ Pistes d'évolution

- Connecter un backend (Supabase, PostgreSQL) pour persister les données.
- Ajouter des workflows d'approbation (finances, commandes).
- Générer des exports PDF/Excel pour l'administration communale.
