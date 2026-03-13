# Runs

Chaque client a son dossier:

```text
runs/<client-slug>/
├── intake.md
├── client-facts.yaml
├── job.yaml
├── backlog.md
├── approvals.md
├── handoffs/
│   ├── pm-to-specialists.md
│   ├── research-to-qa.md
│   ├── content-to-qa.md
│   ├── tech-to-qa.md
│   ├── builder-to-qa.md
│   └── qa-to-pm.md
└── deliverables/
    ├── research-pack.md
    ├── entity-pack.md
    ├── page-briefs.md
    ├── llms.txt
    ├── tech-tickets.md
    ├── build-notes.md
    ├── qa-report.md
    └── final-pack.md
```

Regle simple:

- un agent ne lit jamais tout le repo s'il peut agir avec `intake.md`, `client-facts.yaml`, `job.yaml` et le dernier handoff
