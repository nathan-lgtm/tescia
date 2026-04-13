-- ================================================================
-- SCHEMA SUPABASE — TeSciA Entraînement
-- Coller dans : Supabase > SQL Editor > New Query > Run
-- ================================================================

-- Profils
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  username text unique not null,
  created_at timestamptz default now()
);

-- Réponses aux questions
create table public.answers (
  id bigserial primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  question_id text not null,           -- ex: "2026-M9"
  theme text not null,
  correct boolean not null,
  attempts integer default 1,
  first_correct_at timestamptz,
  last_attempted_at timestamptz default now(),
  unique(user_id, question_id)
);

-- Jours d'activité (streak)
create table public.activity_days (
  id bigserial primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  day date not null,
  unique(user_id, day)
);

-- Index
create index on public.answers(user_id);
create index on public.answers(theme);
create index on public.activity_days(user_id);

-- RLS
alter table public.profiles enable row level security;
alter table public.answers enable row level security;
alter table public.activity_days enable row level security;

create policy "Profils visibles" on public.profiles for select using (true);
create policy "Créer profil" on public.profiles for insert with check (auth.uid() = id);
create policy "Modifier profil" on public.profiles for update using (auth.uid() = id);

create policy "Réponses visibles" on public.answers for select using (true);
create policy "Gérer ses réponses" on public.answers for all using (auth.uid() = user_id);

create policy "Activité visible" on public.activity_days for select using (true);
create policy "Gérer activité" on public.activity_days for all using (auth.uid() = user_id);

-- Trigger création profil auto
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username)
  values (new.id, split_part(new.email, '@', 1));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Vue classement
create or replace view public.leaderboard as
select
  p.id,
  p.username,
  count(a.id) filter (where a.correct = true) as correct_count,
  count(a.id) as total_attempts,
  count(distinct ad.day) as active_days,
  p.created_at
from public.profiles p
left join public.answers a on a.user_id = p.id
left join public.activity_days ad on ad.user_id = p.id
group by p.id, p.username, p.created_at
order by correct_count desc;

grant select on public.leaderboard to anon, authenticated;
