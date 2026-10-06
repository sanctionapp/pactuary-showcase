export const en = {
  lang: "en",
  meta: {
    title: "Pactuary · AML & sanctions screening for compliance teams in Türkiye",
    description:
      "Name and PEP screening, ongoing and transaction monitoring, four-eyes case management and audit-ready decisions. Designed around MASAK and FATF requirements.",
    aboutTitle: "About the builder · Pactuary",
    aboutDescription:
      "Why and how Burak Esenoglu built Pactuary, an AML and sanctions screening SaaS, and what he owned end to end.",
  },
  nav: {
    modules: "Modules",
    how: "How it works",
    benchmark: "Benchmark",
    api: "API",
    faq: "FAQ",
    about: "About",
    demo: "Request a demo",
    theme: "Switch colour theme",
    langLabel: "Türkçe",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "AML & sanctions screening SaaS",
    title: "An empty result is not a clear result.",
    lead:
      "Pactuary screens customers and counterparties against sanctions and PEP lists, monitors them after onboarding, watches transactions for known typologies, and keeps every decision ready for an auditor. Built for compliance teams in Türkiye.",
    ctaDemo: "Request a demo",
    ctaGithub: "View on GitHub",
    note: "An independent product by Burak Esenoglu. Screens show a synthetic demo bank.",
    receiptTitle: "Screening receipt",
    receiptQuery: "Query",
    receiptQueryValue: "Defne Örnekoğlu · Person · TR",
    receiptOk: "answered",
    receiptFail: "timed out",
    receiptClear: "0 matches · all sources answered → CLEAR",
    receiptIncomplete: "0 matches · a source failed → INCOMPLETE, not clear",
    shotAlt: "Screening results for a publicly listed sanctioned entity",
  },
  problem: {
    eyebrow: "The problem",
    title: "Screening is easy to do. It is hard to defend.",
    before: "Without a system",
    after: "With Pactuary",
    beforeItems: [
      "Lists are downloaded by hand and go stale between downloads.",
      "A list source that was down reads as \"no match\", and nobody notices.",
      "Approvals happen over email, and the reasoning gets lost.",
      "Common names flood analysts with false positives.",
    ],
    afterItems: [
      "Live sanctions and PEP data, plus the institution's own internal lists, in one search.",
      "Every source reports its own status; a failed source is shown, never hidden.",
      "Each decision has a written reason, an optional second approver and a snapshot of what was seen.",
      "Risk comes from what a record is, and earlier false-positive decisions are remembered.",
    ],
  },
  modules: {
    eyebrow: "Modules",
    title: "One workflow from first search to audit file",
    items: [
      {
        key: "screening",
        title: "Name & PEP screening",
        body:
          "People and companies are screened against live OpenSanctions data and the institution's internal lists in parallel. Results show the risk level, topics, match score and the exact source lists. The risk level comes from what the record is (sanction, crime, PEP), not from how similar the name looks.",
        shot: "01-screening-results",
        alt: "Screening results with risk badges and source lists",
      },
      {
        key: "decision",
        title: "Entity detail & decisions",
        body:
          "Aliases, identifiers, sanctions programmes and source documents on one page. The analyst records a true match, a false positive or an escalation, and a reason is always required.",
        shot: "02-entity-detail-decision",
        alt: "Entity detail page with the decision form",
      },
      {
        key: "batch",
        title: "Batch screening",
        body:
          "Up to 100 subjects in a single request, with optional birth year and country to sharpen matching. A whole portfolio gets screened in seconds.",
        shot: "03-batch-screening",
        alt: "Batch screening results",
      },
      {
        key: "transactions",
        title: "Transaction monitoring",
        body:
          "Five typologies: single-threshold breach, high-risk country (FATF lists), counterparty sanctions/PEP match, structuring and velocity. Real-time rules run on ingest; pattern rules run every night. TCMB exchange rates are applied, and a missing rate is never guessed.",
        shot: "04-alert-structuring-four-eyes",
        alt: "Structuring alert with triggering transactions and decision history",
      },
      {
        key: "fourEyes",
        title: "Alert & case management with four-eyes",
        body:
          "Monitoring and transaction alerts share one inbox. With four-eyes on, a true match waits for a second, different analyst, and self-approval is rejected by the system.",
        shot: "05-alert-pending-second-approval",
        alt: "Alert waiting for second approval",
      },
      {
        key: "risk",
        title: "Customer risk scoring",
        body:
          "A 0–100 score from four weighted factors (screening signal, transaction pattern, country and channel). Each factor shows its reason, so the score can be explained.",
        shot: "07-subject-risk-score",
        alt: "Risk score breakdown for a monitored company",
      },
      {
        key: "rules",
        title: "Configurable rules",
        body:
          "Each typology can be switched on or off and tuned per institution. Invalid settings fall back to safe defaults, so a broken setting never silently turns a rule off.",
        shot: "06-rule-settings",
        alt: "Rule settings page",
      },
    ],
    more: "Also included",
    moreItems: [
      { title: "Ongoing monitoring", body: "The portfolio is re-screened every night; only new matches raise alerts." },
      { title: "Audit trail & PDF", body: "Append-only decisions with snapshots and a one-click audit file per case." },
      { title: "API & webhooks", body: "Scoped API keys for screening and transaction ingestion, plus HMAC-signed webhooks." },
      { title: "Multi-tenancy", body: "Company-level isolation, three roles and separate quota pools per module." },
      { title: "Adverse media", body: "Provider-ready (stub): the interface, data model and screen are built; no news vendor is connected yet." },
      { title: "KYC / CDD", body: "On the roadmap." },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "From a name or a transaction to a defensible decision",
    steps: [
      { title: "Ingest", body: "An analyst searches, a portfolio is uploaded, or a core system posts a transaction over the API." },
      { title: "Screen", body: "Sources are queried in parallel; each one reports its own status and latency." },
      { title: "Evaluate", body: "Typology rules and risk scoring turn matches and patterns into prioritised alerts." },
      { title: "Decide", body: "An analyst records the decision and reason; with four-eyes on, a second analyst approves it." },
      { title: "Prove", body: "The decision, its snapshot and the audit file stay unchanged for the auditor." },
    ],
    diagramLabel: "Flow: ingest, screen, evaluate, decide, prove",
    notes: ["UI · batch · API", "every source reports status", "5 typologies · risk score", "reason required", "append-only · snapshot · PDF"],
    failNote: "a source fails → incomplete, never clear",
    fourEyesNote: "four-eyes: a different analyst approves",
  },
  principles: {
    eyebrow: "Compliance by design",
    title: "Principles enforced in code, not in a policy document",
    items: [
      { title: "Empty result ≠ clear", body: "Each source reports its own status. If every source fails, the API returns an error, never an empty list. A rule that could not run is reported as unavailable." },
      { title: "Four-eyes", body: "Per institution, a true match needs a second approver, and the same person cannot approve their own decision." },
      { title: "Append-only decisions", body: "Decisions are never edited. A change is a new record that points to the old one, with a snapshot of the data at decision time." },
      { title: "Risk-based approach", body: "Every customer has an explained 0–100 score, and country risk follows the FATF black and grey lists." },
      { title: "Topic-based risk levels", body: "A sanctions record is critical even with a modest name score; a PEP is medium even with a perfect one." },
      { title: "No invented exchange rates", body: "Without a TCMB rate, a transaction waits as \"pending FX\" and amount rules run once the rate arrives." },
    ],
    disclaimer:
      "Designed around MASAK and FATF requirements. Not a certification and no compliance guarantee: thresholds such as TRY 75,000 are starting values each institution should validate.",
  },
  benchmark: {
    eyebrow: "Matching benchmark",
    title: "Measured, and reported as measured",
    lead:
      "100 labelled queries ran through the product's batch screening path (OpenSanctions /match, threshold 0.7, sanctions collection) in October 2026.",
    figures: [
      { value: "100%", label: "Recall", detail: "50 of 50 sanctioned names and variants caught, all matched to the correct entity" },
      { value: "80.6%", label: "Precision", detail: "Share of hits that were real sanctioned entities" },
      { value: "24%", label: "False-positive rate", detail: "12 of 50 clean names hit a list" },
    ],
    breakdownTitle: "Where the hits came from",
    breakdown: [
      { label: "Canonical sanctioned names", value: "25 / 25" },
      { label: "Spelling, Turkish and name-order variants", value: "25 / 25" },
      { label: "Common real-world names (clean)", value: "12 / 25" },
      { label: "Invented names (clean)", value: "0 / 25" },
    ],
    notes: [
      "Every false positive came from a common name with a real namesake on a list, for example \"Mehmet Kaya\".",
      "Queries used the name only. Date of birth or nationality should reduce false positives, but that effect was not measured.",
      "The sample is small, so treat these numbers as indicative.",
    ],
  },
  security: {
    eyebrow: "Security & architecture",
    title: "Boring where it matters",
    items: [
      { title: "Server-verified sessions", body: "Every API request verifies the JWT on the server; unverified cookie reads are not used." },
      { title: "Hashed, scoped API keys", body: "Keys are stored as SHA-256 hashes, shown in full once, scoped to an action and revoked without deletion." },
      { title: "Tenant isolation", body: "All queries are scoped by company. Database row-level security denies direct data-API access." },
      { title: "Race-free quotas", body: "Quota is checked before any paid call and deducted with conditional SQL, so concurrent requests cannot overspend." },
      { title: "Resilient data client", body: "Timeouts, retries with backoff and jitter, Retry-After support, a TTL cache and request coalescing." },
      { title: "Closed by default", body: "Scheduled jobs refuse to run without their secret, and the health check reports the missing configuration." },
    ],
    stackTitle: "Stack",
    stack: ["Next.js 16", "React 19", "TypeScript strict", "PostgreSQL", "Prisma", "pg_trgm + unaccent", "Supabase Auth", "Vitest", "Playwright", "Vercel"],
    quality: [
      { value: "838", label: "passing tests" },
      { value: "88%", label: "line coverage (business logic)" },
      { value: "2", label: "languages, light & dark" },
    ],
  },
  api: {
    eyebrow: "Developer API",
    title: "Screen from your own systems",
    lead:
      "Send a name with optional birth date and countries. Every response says which sources answered, so your system can tell \"clear\" from \"incomplete\". The example uses a fictional customer and a fake key.",
    requestLabel: "Request",
    responseLabel: "Response · 200",
    failLabel: "If every source fails · 502",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions",
    items: [
      { q: "Where does the sanctions data come from?", a: "From OpenSanctions, queried live through its hosted API. The default scope is 95 sanctions lists, including OFAC SDN, the UN Security Council list, EU and UK sanctions and the MASAK asset-freezing list. Institutions can add their own internal lists." },
      { q: "Is Pactuary MASAK-certified?", a: "No. It is designed around MASAK and FATF requirements, but no certification exists for this kind of tool and none is claimed. Each institution validates thresholds and procedures with its own compliance function." },
      { q: "How are false positives handled?", a: "Risk comes from what a record is, not the name score. Optional birth year and country sharpen matching, and a false-positive decision is remembered, so the same record is excluded next time for that subject." },
      { q: "What happens when a data source is down?", a: "The analyst sees which source failed. If every source fails, the request returns an error instead of an empty list, because an empty list would read as \"clear\"." },
      { q: "Is adverse media included?", a: "The adverse media module is provider-ready: its interface, data model and screen exist, and it shows sample data until a news vendor is connected." },
      { q: "Can I see the source code?", a: "The repository is private. I am happy to walk through the code and the design decisions in an interview." },
      { q: "How much does it cost?", a: "Pricing is not published. Contact us for a demo and a conversation about your volumes." },
    ],
  },
  cta: {
    title: "See it on your own scenarios",
    body: "A 30-minute walkthrough: screening, a structuring alert, the four-eyes flow and the audit file.",
    pricing: "Pricing: contact us.",
    demo: "Request a demo",
    github: "View on GitHub",
  },
  footer: {
    built: "Built by Burak Esenoglu",
    data: "Sanctions and PEP data: OpenSanctions (CC BY-NC 4.0). Exchange rates: TCMB.",
    synthetic: "All customer, subject and transaction data shown is synthetic.",
    about: "About the builder",
  },
  about: {
    eyebrow: "About the builder",
    title: "I build compliance software that can explain itself",
    intro:
      "I'm Burak Esenoglu, a software developer. Pactuary is my end-to-end attempt at the problem compliance teams in Türkiye face every day: screening and monitoring at scale without losing the ability to justify each decision to an auditor.",
    whyTitle: "Why I built it",
    why: [
      "Screening tools often fail silently. An unreachable list reads as \"no match\". I wanted a system where an incomplete check is never mistaken for a clear one.",
      "Most of the hard parts are decisions, not code: which risk level a PEP gets, when a second approver is required, what an auditor needs to see a year later.",
    ],
    howTitle: "How I built it",
    how: [
      "The first version (early 2026) uploaded lists by hand and matched them with fuzzy SQL. I replaced that with live OpenSanctions data and kept Postgres for internal lists and application state.",
      "Then came transaction monitoring, a single decision service with maker-checker and append-only history, risk scoring, a redesigned interface and Turkish/English support.",
      "Development was AI-assisted with Claude Code. I set the product scope, the architecture and the compliance rules; each decision is recorded in design documents.",
    ],
    roleTitle: "My role",
    role: "Product owner, architect and developer. I owned the scope, the data and compliance model, the trade-offs and the quality bar (838 tests, 88% coverage on business logic).",
    recruiterTitle: "For recruiters, in five points",
    recruiter: [
      "Built an AML/sanctions SaaS end to end: screening, ongoing and transaction monitoring, case management and audit trail.",
      "Encoded compliance principles in code: empty ≠ clear, four-eyes, append-only decisions, topic-based risk.",
      "Implemented five transaction typologies, including structuring and velocity, with per-institution configuration.",
      "Measured matching quality honestly: 100% recall, 80.6% precision and a 24% false-positive rate on common names, published as is.",
      "Shipped with engineering discipline: strict TypeScript, 838 tests, a resilient paid-API client and race-free quotas.",
    ],
    openTo: "Open to roles in AML / fraud prevention technology.",
    source: "Source code is private; happy to walk through it in an interview.",
    contact: "Get in touch",
    linkedin: "LinkedIn",
    github: "GitHub",
    back: "Back to the product",
  },
};

export type Dict = typeof en;
