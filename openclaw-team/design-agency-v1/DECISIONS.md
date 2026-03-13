# Decisions

## 2026-03-13

- Le design lab est isole du sprint de lancement existant.
- Les prototypes vivent dans `public/design-lab/` pour etre visibles sans
  toucher a la home live.
- Les variantes sont "inspirees par" les meilleurs patterns US, pas des copies
  litterales de branding ou de copy.
- Faute de provider Gemini/Lovable branche directement dans OpenClaw aujourd'hui,
  les variantes `google` et `lovable` sont executees par les modeles deja
  disponibles, mais avec un brief de style specifique a ces ecosytemes.
- 5e variante ajoutee (DLAB-10B): US direct benchmark hybride Billshark /
  Rocket Money. Elle applique les patterns US les plus prouves (hero outcome
  ultra-simple, zero commission, preuve publique, flow 4 etapes) adaptes au
  marche FR. Livree dans `public/design-lab/us-direct-benchmark.html`.
- Toutes les variantes design sont livrees. Passage en phase QA / scoring.
  La scorecard doit couvrir 6 axes: clarte du hero, credibilite du trust layer,
  qualite du flow d'action, presence de l'observatoire, ton grand public, et
  potentiel launch-safe. Chaque axe note sur 5, total sur 30.
- QA terminee (20:09 CET). Scorecard livrée sur 100 points, 6 criteres ponderes.
  Resultats: B 92, D 87, C 84, A 78, E 64. Seuil de retention = 80/100.
  3 variantes retenues (B, C, D), 2 sous le seuil (A, E).
- **Direction confirmee par PM (21:20 CET): Variante B (Claude Concierge) est
  la direction leader pour integration launch-safe.** Justification:
  - Meilleur headline du lot ("Vous mandatez. On renegocie. Vous gardez tout.")
  - Architecture de confiance la plus profonde (timeline concierge, indice de
    confiance, "Recommandation ≠ vente", conditions claires, mandat lisible)
  - Personnalite editoriale distinctive (palette parchemin, typo Newsreader)
  - Seule variante jugée "launch-ready at prototype level" par QA
- **Prochaine etape: variante synthese DLAB-15** — B comme base, enrichie de:
  - Panneau scoring multicritere de C (prix, debit, services, stabilite)
  - Section FAQ/objections de D (preemptive fear-reduction)
  - Pattern temoignages "cas illustratifs" de D (preuve sociale humaine)
  Livrable attendu: `public/design-lab/renego-synthesis.html`
