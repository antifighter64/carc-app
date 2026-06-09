-- =============================================
-- CARC.COM — Supabase Schema
-- Run in Supabase SQL Editor (carc-prod project)
-- =============================================

-- Enable extensions
create extension if not exists "uuid-ossp";

-- ------------------------------------------------
-- USERS (extends Supabase Auth)
-- ------------------------------------------------
create table public.profiles (
  id            uuid references auth.users on delete cascade primary key,
  email         text not null,
  plan          text not null default 'free' check (plan in ('free','pro','growth','dealer','enterprise')),
  stripe_customer_id text,
  stripe_subscription_id text,
  searches_today int not null default 0,
  searches_reset_at timestamptz not null default now(),
  created_at    timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ------------------------------------------------
-- WAITLIST
-- ------------------------------------------------
create table public.waitlist (
  id         uuid default uuid_generate_v4() primary key,
  email      text not null unique,
  zip        text,
  source     text default 'homepage',
  created_at timestamptz not null default now()
);
alter table public.waitlist enable row level security;
-- Public insert only (no read/update for anon)
create policy "Anyone can join waitlist" on public.waitlist
  for insert with check (true);

-- ------------------------------------------------
-- SAVED SEARCHES & ALERTS
-- ------------------------------------------------
create table public.saved_searches (
  id             uuid default uuid_generate_v4() primary key,
  user_id        uuid references public.profiles on delete cascade not null,
  name           text not null,
  query_raw      text not null,
  query_params   jsonb not null default '{}',
  alert_enabled  boolean not null default false,
  last_checked   timestamptz,
  created_at     timestamptz not null default now()
);
alter table public.saved_searches enable row level security;
create policy "Users manage own saved searches" on public.saved_searches
  for all using (auth.uid() = user_id);

-- ------------------------------------------------
-- SEARCH HISTORY (for rate limiting + analytics)
-- ------------------------------------------------
create table public.search_history (
  id         uuid default uuid_generate_v4() primary key,
  user_id    uuid references public.profiles,
  query_raw  text not null,
  results_count int,
  created_at timestamptz not null default now()
);
alter table public.search_history enable row level security;
create policy "Users view own history" on public.search_history
  for select using (auth.uid() = user_id);
create policy "Insert own history" on public.search_history
  for insert with check (auth.uid() = user_id or user_id is null);

-- ------------------------------------------------
-- VIN REPORTS
-- ------------------------------------------------
create table public.vin_reports (
  id           uuid default uuid_generate_v4() primary key,
  user_id      uuid references public.profiles on delete cascade not null,
  vin          text not null,
  report_data  jsonb,
  paid         boolean not null default false,
  price_paid   int,           -- cents
  created_at   timestamptz not null default now()
);
alter table public.vin_reports enable row level security;
create policy "Users view own reports" on public.vin_reports
  for all using (auth.uid() = user_id);

-- ------------------------------------------------
-- INDEXES
-- ------------------------------------------------
create index on public.saved_searches (user_id);
create index on public.search_history (user_id, created_at desc);
create index on public.waitlist (email);
