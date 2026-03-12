# Decisions

## 2026-03-12

### Cadrage initial (pre-session)

- Scope du jour fixe sur `box internet France`.
- Le but est de juger la qualite d'une mini equipe d'agents, pas de couvrir toutes les commodites.
- Le projet tourne dans l'OpenClaw actuel mais avec des agents et jobs dedies, sans toucher aux canaux existants.
- Les agents travaillent dans le repo `renego-commodites-fr` avec traces dans `openclaw-team/`.
- Les actions irreversibles restent interdites.

### Synthese PM post-recherche (15:29)

- **Red by SFR THE BOX est l'offre la plus disruptive du panel.** 24,99 EUR/mois, sans engagement, prix fixe. C'est le pattern US "Kudos" (flat, no surprises) applique au marche FR. Le scoring engine devrait la classer pres du top.
- **4 alternatives au total:** SFR Fibre Starter (27,99 EUR), Bouygues Bbox Must (35,99 EUR), Orange Livebox Fibre (24,99 EUR promo → 42,99 EUR), Red by SFR THE BOX (24,99 EUR fixe). Le minimum de 4 offres est atteint.
- **Les "Non visible sur la facture" doivent disparaitre entierement.** La Freebox Revolution fibre fait 1 Gb/s, Wi-Fi 5, et le client est sans engagement apres 12 mois. C'est de la connaissance publique — l'afficher.
- **Le cout sur 24 mois est le differenciateur de confiance.** La recherche US montre que les consommateurs se font avoir par les prix promo. Afficher "Prix apres promo" est un acte de transparence, pas du polish.
- **La source URL cliquable est table stakes.** Chaque service US majeur montre d'ou viennent ses donnees. Pas de source = pas de confiance.
- **"Facture analysis gratuite" = notre hook d'acquisition V1.** La recherche confirme que le free tier (tracking ou analyse) est le moteur d'acquisition de tous les acteurs US. Notre flow "importe ta facture, on te dit combien tu perds" est exactement ca.
- **Pas de call center, pas de negociateurs humains.** La recherche US confirme que le modele AI-first (generation de documents, LRE, parcours automatise) est plus defensible et mieux adapte au marche FR ou les interactions operateurs sont digitales.
- **Le B2B / marque blanche est valide par Billshark** mais c'est du V2+. On note, on ne code pas.
- **Priorite dev reduite a 4 tickets:** DEV-01 (offres) > DEV-02 (sources) > DEV-03 (24 mois) > DEV-05 (plan d'action). DEV-04 reste conditionnel a APPR-01.

### Arbitrage produit applique (16:35)

- **Les prix telecom ne sont plus portes en dur dans la logique de recommendation.** Ils sont centralises dans un snapshot de marche unique, date, et reutilises partout (cartes d'offres, comparaisons, observatoire, diagnostic).
- **Le scoring separe maintenant deux questions differentes:** "quelle offre gagne sur le prix pur ?" et "quelle offre gagne sur le rapport prix/features ?"
- **Resultat actuel sur la facture Freebox de reference:** `prix pur = Red by SFR`, `prix/features = SFR Fibre Starter`, `reco principale = SFR`.
- **Le cout 24 mois devient le pivot de confiance.** Le flow n'affiche plus seulement le prix d'appel; il rend visible le total 24 mois et le post-promo.

### Gel du scope PM (14:45)

- **Benchmark minimum: 4 offres.** Le code actuel n'a que SFR + Bouygues en alternatives. Orange et au moins une offre low-cost (Red by SFR, Sosh ou B&You) doivent etre ajoutees. L'objectif est 4 a 6 offres sourcees au total (retention Free incluse).
- **Les prix doivent etre sources et dates du 12 mars 2026.** Le snapshot actuel date du 11 mars. Le dev doit mettre a jour les prix et URLs sur la base du benchmark PM-02.
- **Les "Non visible sur la facture" doivent etre reduits.** Les specs publiques de la Freebox Revolution sont connues (debit, engagement post-promo). Les utiliser plutot que d'afficher "inconnu" quand l'info est publique.
- **Le mode premium (LLM) doit etre teste au moins une fois.** Si aucune cle API n'est disponible en session, c'est une decision humaine a prendre (voir APPROVALS.md).
- **Coupe explicite:** pas d'eligibilite par adresse, pas d'appel API operateur, pas de scraping dynamique, pas de nouvelle verticale. On ameliore le flow existant, on ne le re-ecrit pas.
- **Priorite dev:** DEV-01 (offres manquantes) > DEV-02 (sources visibles) > DEV-03 (comparaison enrichie) > DEV-05 (plan d'action) > DEV-04 (test premium). Si le temps manque, couper DEV-04 et DEV-05.
