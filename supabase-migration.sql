-- ============================================================
-- GBUSS Website — Migration Supabase
-- Exécuter dans : app.supabase.com > SQL Editor > New Query
-- ============================================================

-- Événements à venir
create table if not exists events (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  date        timestamptz not null,
  time        text,
  location    text,
  description text,
  category    text check (category in ('formation','evangelisation','priere','conference')),
  attendees   int,
  created_at  timestamptz default now()
);

-- Annonces / Actualités (affichées sur la homepage)
create table if not exists announcements (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  content      text not null,
  active       boolean default true,
  published_at timestamptz default now()
);

-- Témoignages soumis via le formulaire
create table if not exists testimonials (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text,
  university text,
  year       text,
  type       text check (type in ('text','video')),
  content    text,
  approved   boolean default false,
  created_at timestamptz default now()
);

-- ── Row Level Security ──────────────────────────────────────

alter table events enable row level security;
create policy "Lecture publique events"
  on events for select using (true);

alter table announcements enable row level security;
create policy "Lecture annonces actives"
  on announcements for select using (active = true);

alter table testimonials enable row level security;
create policy "Lecture temoignages approuves"
  on testimonials for select using (approved = true);
create policy "Soumission temoignages"
  on testimonials for insert with check (true);

-- ── Données exemples (à supprimer si non nécessaires) ──────

insert into events (title, date, time, location, description, category, attendees) values
  (
    'Retraite Spirituelle Nationale',
    '2026-02-15T08:00:00+00:00',
    '08:00 - 18:00',
    'Centre de Conférence de Saly',
    'Une journée de ressourcement spirituel pour tous les membres du GBUSS.',
    'priere',
    150
  ),
  (
    'Formation des Leaders',
    '2026-02-22T14:00:00+00:00',
    '14:00 - 17:00',
    'UCAD, Amphi A',
    'Session de formation pour les responsables de cellules.',
    'formation',
    45
  );

insert into announcements (title, content, active) values
  (
    'Inscriptions ouvertes — Retraite Nationale 2026',
    'Les inscriptions pour la Retraite Spirituelle Nationale sont ouvertes jusqu''au 10 février 2026. Places limitées à 150 participants.',
    true
  );
