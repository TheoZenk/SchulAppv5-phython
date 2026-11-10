-- SchulApp Supabase Setup
-- Einmal komplett im Supabase SQL Editor ausführen.

create table if not exists public.user_app_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Data API / PostgREST darf die Tabelle für eingeloggte Benutzer verwenden.
grant usage on schema public to authenticated;
grant select, insert, update, delete on table public.user_app_data to authenticated;

alter table public.user_app_data enable row level security;

-- Falls du die Datei schon einmal ausgeführt hast, werden die alten Regeln sauber ersetzt.
drop policy if exists "Users can read their own SchulApp data" on public.user_app_data;
drop policy if exists "Users can insert their own SchulApp data" on public.user_app_data;
drop policy if exists "Users can update their own SchulApp data" on public.user_app_data;
drop policy if exists "Users can delete their own SchulApp data" on public.user_app_data;

create policy "Users can read their own SchulApp data"
on public.user_app_data
for select to authenticated
using (auth.uid() = user_id);

create policy "Users can insert their own SchulApp data"
on public.user_app_data
for insert to authenticated
with check (auth.uid() = user_id);

create policy "Users can update their own SchulApp data"
on public.user_app_data
for update to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their own SchulApp data"
on public.user_app_data
for delete to authenticated
using (auth.uid() = user_id);

-- PostgREST-Schema nach Änderungen neu laden.
notify pgrst, 'reload schema';
