-- ANDUS International dedicated database. Apply ONLY to a new ANDUS-owned Supabase project.
-- Do not apply to the unrelated Business Platform project.
begin;

create table if not exists public.andus_staff_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('admin','reviewer')),
  created_at timestamptz not null default now()
);

create table if not exists public.andus_applications (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique default ('AND-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,12))),
  kind text not null check (kind in ('contact','loan','cac','investment')),
  full_name text not null check (char_length(full_name) between 2 and 160),
  email text not null check (char_length(email) between 5 and 180),
  phone text not null check (char_length(phone) between 10 and 35),
  service text not null check (char_length(service) between 2 and 130),
  message text not null check (char_length(message) between 5 and 3000),
  details jsonb not null default '{}'::jsonb check (jsonb_typeof(details) = 'object'),
  status text not null default 'new' check (status in ('new','in_review','awaiting_customer','approved','rejected','completed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists andus_applications_kind_status_created_idx on public.andus_applications(kind,status,created_at desc);
create index if not exists andus_applications_created_idx on public.andus_applications(created_at desc);

create table if not exists public.andus_status_events (
  id bigint generated always as identity primary key,
  application_id uuid not null references public.andus_applications(id) on delete cascade,
  actor_user_id uuid references auth.users(id) on delete set null,
  from_status text,
  to_status text not null,
  note text,
  created_at timestamptz not null default now()
);
create index if not exists andus_status_events_application_idx on public.andus_status_events(application_id,created_at desc);

create table if not exists public.andus_submission_limits (
  key text not null check (char_length(key) = 64),
  bucket timestamptz not null,
  attempts integer not null default 1 check (attempts > 0),
  primary key(key,bucket)
);

-- All personal data is inaccessible to anon/authenticated via Data API.
alter table public.andus_staff_roles enable row level security;
alter table public.andus_applications enable row level security;
alter table public.andus_status_events enable row level security;
alter table public.andus_submission_limits enable row level security;
revoke all on public.andus_staff_roles from anon, authenticated;
revoke all on public.andus_applications from anon, authenticated;
revoke all on public.andus_status_events from anon, authenticated;
revoke all on public.andus_submission_limits from anon, authenticated;
revoke all on public.andus_staff_roles from public;
revoke all on public.andus_applications from public;
revoke all on public.andus_status_events from public;
revoke all on public.andus_submission_limits from public;
grant select, insert, update, delete on public.andus_staff_roles to service_role;
grant select, insert, update, delete on public.andus_applications to service_role;
grant select, insert, update, delete on public.andus_status_events to service_role;
grant select, insert, update, delete on public.andus_submission_limits to service_role;
grant usage, select on sequence public.andus_status_events_id_seq to service_role;

-- Atomic hourly limit + persistence. Credentials/identity documents are not accepted here.
create or replace function public.andus_accept_application(
  p_kind text, p_full_name text, p_email text, p_phone text,
  p_service text, p_message text, p_details jsonb, p_rate_key text
)
returns table(id uuid, reference text)
language plpgsql
security invoker
set search_path = ''
as $$
declare n integer;
begin
  if p_rate_key is null or length(p_rate_key) <> 64 then
    raise exception 'INVALID_RATE_KEY';
  end if;
  if p_kind not in ('contact','loan','cac','investment') then
    raise exception 'INVALID_KIND';
  end if;
  insert into public.andus_submission_limits(key,bucket,attempts)
    values(p_rate_key,date_trunc('hour', now()),1)
  on conflict (key,bucket) do update
    set attempts = public.andus_submission_limits.attempts + 1
  returning attempts into n;
  if n > 12 then
    raise exception 'RATE_LIMITED';
  end if;
  return query
    insert into public.andus_applications(kind,full_name,email,phone,service,message,details)
    values(p_kind,p_full_name,lower(p_email),p_phone,p_service,p_message,coalesce(p_details,'{}'::jsonb))
    returning public.andus_applications.id,public.andus_applications.reference;
end
$$;
revoke execute on function public.andus_accept_application(text,text,text,text,text,text,jsonb,text) from public, anon, authenticated;
grant execute on function public.andus_accept_application(text,text,text,text,text,text,jsonb,text) to service_role;

-- Transactional status change and audit history.
create or replace function public.andus_update_status(
  p_application uuid, p_actor uuid, p_status text, p_note text default null
) returns void
language plpgsql
security invoker
set search_path = ''
as $$
declare old_status text;
begin
  if not exists(select 1 from public.andus_staff_roles r where r.user_id=p_actor and r.role in ('admin','reviewer')) then
    raise exception 'NOT_AUTHORIZED';
  end if;
  if p_status not in ('new','in_review','awaiting_customer','approved','rejected','completed') then
    raise exception 'INVALID_STATUS';
  end if;
  select a.status into old_status from public.andus_applications a where a.id=p_application for update;
  if not found then
    raise exception 'NOT_FOUND';
  end if;
  if old_status=p_status and coalesce(trim(p_note),'')='' then
    return;
  end if;
  update public.andus_applications
    set status=p_status,updated_at=now()
    where id=p_application;
  insert into public.andus_status_events(application_id,actor_user_id,from_status,to_status,note)
    values(p_application,p_actor,old_status,p_status,nullif(left(trim(p_note),1000),''));
end $$;
revoke execute on function public.andus_update_status(uuid,uuid,text,text) from public, anon, authenticated;
grant execute on function public.andus_update_status(uuid,uuid,text,text) to service_role;

-- Explicitly grant first staff role ONLY after manually creating and verifying the Auth user:
-- insert into public.andus_staff_roles(user_id,role) values ('USER-UUID-FROM-AUTH', 'admin');
commit;
