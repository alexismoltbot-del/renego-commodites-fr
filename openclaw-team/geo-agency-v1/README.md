# GEO Agency V1

Blueprint OpenClaw pour une agence GEO/SEO orientee indexation et citation dans les LLMs.

## Scope V1

V1 doit rester tres serre:

- 1 client = 1 domaine = 1 langue = 1 marche
- 5 URLs prioritaires maximum par run
- focus sur sites vitrines, SaaS simple, ou services B2B
- plateformes ciblees: ChatGPT web, Perplexity, Gemini, Bing Copilot
- livrables: audit, briefs, tickets techniques, draft `llms.txt`, QA
- pas de publication auto en production
- pas de programmatic SEO massif
- pas d'e-commerce complexe, multi-location, multi-pays, ou contenu YMYL sans humain

L'idee est de livrer un "client pack" fiable en moins de 2 jours, pas de lancer une usine a 13 000 pages.

## Meilleure equipe V1

1. `pm`
   - gele le scope
   - distribue le travail
   - consolide le pack final
2. `geo-research`
   - cartographie requetes, plateformes, pages prioritaires
   - produit les preuves et la baseline
3. `geo-content-entity`
   - produit les briefs de pages
   - prepare `llms.txt`
   - clarifie les facts, FAQs, answers, entites
4. `geo-tech`
   - produit les tickets crawl/index/schema/internal linking
   - prepare les snippets techniques sans toucher la prod par defaut
5. `product-builder`
   - applique les quick wins low-risk
   - transforme les tickets approuves en increments produit
6. `qa-risk`
   - controle les sources, les risques, les regressions et les gates humains

## Livrables concrets par run

- `research-pack.md`: baseline GEO + opportunites
- `entity-pack.md`: facts verifies + sameAs + claims autorises
- `page-briefs.md`: briefs pour 3 pages max
- `llms.txt`: draft relu par humain avant publication
- `tech-tickets.md`: tickets implementables, priorises
- `qa-report.md`: blockers, risques, verdict go/no-go
- `final-pack.md`: synthese PM pour le client ou l'equipe execution

## Boucle de travail

`PM -> specialistes en parallele -> QA -> PM -> humain -> execution`

Le PM est le seul a pouvoir elargir ou reduire le scope. Le QA est le seul a donner un verdict. L'humain tranche toutes les decisions riskees.

## Arborescence

```text
geo-agency-v1/
├── README.md
├── ORCHESTRATION.md
├── KPI_SCORECARD.md
├── APPROVAL_GATES.md
├── CYCLE_6H.md
├── SCHEDULE_6H.md
├── PLAN_2_DAYS.md
├── RISKS.md
├── TAXGPT_PARITY_GATES.md
├── WHATSAPP_ESCALATION.md
├── agents/
│   ├── pm/PROMPT.md
│   ├── geo-research/PROMPT.md
│   ├── geo-content-entity/PROMPT.md
│   ├── geo-tech/PROMPT.md
│   ├── product-builder/PROMPT.md
│   └── qa-risk/PROMPT.md
├── templates/
│   ├── client-intake.md
│   ├── client-facts.yaml
│   ├── approvals.md
│   ├── backlog.md
│   ├── job.yaml
│   └── handoff.md
└── runs/
    └── README.md
```

## Principes de design

- Tout passe par des fichiers, pas par de la memoire implicite.
- Les specialistes travaillent en parallele sur le meme `job.yaml`.
- Chaque claim important doit avoir une source et une date.
- Chaque handoff doit etre lisible par un autre agent sans contexte oral.
- Les decisions a impact SEO fort restent humaines.
- Les cycles continus s'arretent seulement sur un verdict de lancement ou un blocage humain explicite.
