# Guide de configuration — GBUSS Website

## 1. Web3Forms (formulaires de contact)

1. Va sur [web3forms.com](https://web3forms.com) et copie ta clé API
2. Ouvre le fichier `.env` à la racine du projet
3. Remplace `YOUR_WEB3FORMS_ACCESS_KEY` par ta vraie clé :
   ```
   VITE_WEB3FORMS_KEY=ta_vraie_cle_ici
   ```

Les formulaires qui enverront des emails :
- **Page Contact** → email reçu sur gbuss.infos@gmail.com
- **Page Prier** → inscription chaîne de prière par email

---

## 2. Supabase (contenu dynamique)

### Étape 1 — Créer un projet Supabase
1. Va sur [app.supabase.com](https://app.supabase.com)
2. Crée un nouveau projet (gratuit, tier "Free" suffit)
3. Note l'URL et la clé `anon` (Settings > API)

### Étape 2 — Configurer les clés
Dans le fichier `.env` :
```
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxxx...
```

### Étape 3 — Créer les tables
1. Dans Supabase, va dans **SQL Editor > New Query**
2. Colle le contenu du fichier `supabase-migration.sql`
3. Clique **Run**

---

## 3. Gérer le contenu sans toucher au code

### Ajouter un événement
→ Supabase > **Table Editor** > `events` > **Insert row**
- `title` : Nom de l'événement
- `date` : Date au format ISO (ex: `2026-04-15T09:00:00+00:00`)
- `time` : Horaire (ex: `09:00 - 18:00`)
- `location` : Lieu
- `description` : Description
- `category` : `formation`, `evangelisation`, `priere`, ou `conference`
- `attendees` : Nombre de participants attendus (optionnel)

### Publier une annonce sur la homepage
→ Supabase > **Table Editor** > `announcements` > **Insert row**
- `title` : Titre de l'annonce
- `content` : Texte de l'annonce
- `active` : `true` pour afficher, `false` pour masquer

### Valider un témoignage
Quand quelqu'un soumet un témoignage via le formulaire, il apparaît dans Supabase avec `approved = false`.
→ Supabase > **Table Editor** > `testimonials` > modifier la ligne > `approved` → `true`

### Désactiver une annonce
→ Supabase > **Table Editor** > `announcements` > modifier la ligne > `active` → `false`

---

## 4. Déploiement Netlify

Pour que les variables d'environnement fonctionnent en production :
1. Va dans **Netlify > Sites > GBUSS > Site configuration > Environment variables**
2. Ajoute les 3 variables :
   - `VITE_WEB3FORMS_KEY`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Redéploie le site (Deploys > Trigger deploy)

> ⚠️ Ne jamais committer le fichier `.env` — il est dans `.gitignore`
