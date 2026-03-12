create extension if not exists "pgcrypto";

create type contract_sector as enum (
    'electricity',
    'gas',
    'mobile',
    'fixed_internet',
    'home_insurance',
    'auto_insurance'
);

create type document_kind as enum (
    'contract',
    'bill',
    'mandate',
    'proof',
    'other'
);

create type contract_source as enum (
    'pdf_upload',
    'bill_upload',
    'email_import',
    'provider_connector',
    'manual'
);

create type mandate_scope as enum (
    'analysis_only',
    'negotiate_only',
    'switch_only',
    'full_service'
);

create type mandate_status as enum (
    'draft',
    'active',
    'expired',
    'revoked'
);

create type case_status as enum (
    'draft',
    'ready_for_user',
    'approved',
    'executing',
    'waiting_provider',
    'completed',
    'failed',
    'cancelled'
);

create type action_status as enum (
    'pending',
    'queued',
    'sent',
    'succeeded',
    'failed',
    'cancelled'
);

create table households (
    id uuid primary key default gen_random_uuid(),
    owner_email text not null,
    postal_code text,
    country_code text not null default 'FR',
    created_at timestamptz not null default now()
);

create table providers (
    id uuid primary key default gen_random_uuid(),
    sector contract_sector not null,
    brand text not null,
    legal_name text,
    website_url text,
    supports_online_cancellation boolean not null default false,
    supports_portability boolean not null default false,
    supports_lre boolean not null default false,
    created_at timestamptz not null default now()
);

create table documents (
    id uuid primary key default gen_random_uuid(),
    household_id uuid not null references households(id) on delete cascade,
    kind document_kind not null,
    filename text not null,
    mime_type text,
    sha256 text not null,
    storage_path text not null,
    uploaded_at timestamptz not null default now()
);

create table contracts (
    id uuid primary key default gen_random_uuid(),
    household_id uuid not null references households(id) on delete cascade,
    provider_id uuid references providers(id),
    sector contract_sector not null,
    source contract_source not null,
    source_document_id uuid references documents(id),
    external_contract_ref text,
    offer_name text,
    monthly_price_cents integer,
    annual_price_cents integer,
    commitment_end_date date,
    renewal_date date,
    start_date date,
    status text not null default 'active',
    normalized_data jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table extraction_runs (
    id uuid primary key default gen_random_uuid(),
    document_id uuid not null references documents(id) on delete cascade,
    contract_id uuid references contracts(id) on delete set null,
    model_name text not null,
    model_version text,
    status text not null,
    confidence numeric(5,4),
    extracted_data jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now()
);

create table mandates (
    id uuid primary key default gen_random_uuid(),
    household_id uuid not null references households(id) on delete cascade,
    scope mandate_scope not null,
    status mandate_status not null default 'draft',
    signed_document_id uuid references documents(id),
    granted_at timestamptz,
    expires_at timestamptz,
    revocation_reason text,
    metadata jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now()
);

create table provider_products (
    id uuid primary key default gen_random_uuid(),
    provider_id uuid not null references providers(id) on delete cascade,
    sector contract_sector not null,
    canonical_name text not null,
    market_slug text not null,
    attributes jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now(),
    unique(provider_id, market_slug)
);

create table offer_snapshots (
    id uuid primary key default gen_random_uuid(),
    provider_product_id uuid not null references provider_products(id) on delete cascade,
    source_url text not null,
    source_kind text not null,
    captured_at timestamptz not null,
    list_price_cents integer,
    promo_price_cents integer,
    promo_months integer,
    setup_fee_cents integer,
    termination_fee_cents integer,
    commitment_months integer,
    effective_12m_cents integer,
    effective_24m_cents integer,
    quality_signals jsonb not null default '{}'::jsonb,
    raw_payload jsonb not null default '{}'::jsonb
);

create table recommendation_cases (
    id uuid primary key default gen_random_uuid(),
    contract_id uuid not null references contracts(id) on delete cascade,
    current_offer_snapshot_id uuid references offer_snapshots(id),
    status case_status not null default 'draft',
    confidence numeric(5,4),
    savings_target_cents integer,
    user_approved_at timestamptz,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table recommendations (
    id uuid primary key default gen_random_uuid(),
    case_id uuid not null references recommendation_cases(id) on delete cascade,
    target_offer_snapshot_id uuid references offer_snapshots(id),
    rank integer not null,
    strategy text not null,
    estimated_monthly_saving_cents integer,
    estimated_annual_saving_cents integer,
    rationale jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now()
);

create table actions (
    id uuid primary key default gen_random_uuid(),
    case_id uuid not null references recommendation_cases(id) on delete cascade,
    provider_id uuid references providers(id),
    action_type text not null,
    channel text not null,
    requires_user_approval boolean not null default true,
    status action_status not null default 'pending',
    request_payload jsonb not null default '{}'::jsonb,
    response_payload jsonb not null default '{}'::jsonb,
    proof_document_id uuid references documents(id),
    scheduled_for timestamptz,
    executed_at timestamptz,
    created_at timestamptz not null default now()
);

create table audit_logs (
    id uuid primary key default gen_random_uuid(),
    household_id uuid references households(id) on delete cascade,
    case_id uuid references recommendation_cases(id) on delete cascade,
    actor_type text not null,
    actor_id text,
    event_name text not null,
    event_payload jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now()
);

create index contracts_household_sector_idx on contracts(household_id, sector);
create index offer_snapshots_product_captured_idx on offer_snapshots(provider_product_id, captured_at desc);
create index recommendation_cases_contract_idx on recommendation_cases(contract_id);
create index actions_case_status_idx on actions(case_id, status);
create index audit_logs_case_created_idx on audit_logs(case_id, created_at desc);
