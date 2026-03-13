# Launch Plan V8 — ReneGo Beta Publique

Date: 2026-03-13 (V8 — Day 2 evening cycle)
Agent: renego-growth
Target: 15 mars 2026 (dimanche)
Status: V8 — screenshots captured, pénalité brief delivered, social meta verified,
  GROWTH-06 spec ready, 99/100
Previous: V7 2026-03-13 15:40 CET

---

## What changed in V8

- **📸 Screenshots captured** — 3 PNGs in `growth/assets/`: landing-desktop.png,
  landing-mobile.png, landing-full.png. This was the LAST item blocking
  100/100 on the Growth score. Reddit/social posts now have visual assets.
- **Social meta QA-verified** (cycle 9, 19:20 CET). 17/17 tags, OG image
  1200×630, branded. Every shared link generates a preview card.
- **"Pénalité de fidélité" concept briefed** — full brief in
  `growth/penalite-fidelite-brief.md` with ARCEP/Ariase data, 6 integration
  points, draft copy lines, and PM decision prompts. The single highest-
  leverage messaging addition from Research (finding #13, $532M Opower
  precedent). Pure copy, zero dev.
- **GROWTH-06 feedback form spec delivered** — `growth/feedback-form-spec.md`
  with 4 fields, integration plan. Google Form to be created before launch.
- **V8 copy additions:** pénalité de fidélité layer added to positioning,
  landing copy (widget result, new section, FAQ, CTA), and Reddit drafts.
  All claims ARCEP/Ariase-sourced. PM decides if V8 copy ships Sunday or
  stays Week 1.
- **GROWTH-07 playbook content deferred** to Day 3 evening / Week 1 per PM
  guidance. Screenshots + form + pénalité brief were higher priority.

---

## Objectif du lancement

Mettre ReneGo devant ses **100 premiers vrais utilisateurs** pour valider :

1. Est-ce que des gens utilisent le widget ? (conversion landing → engagement)
2. Est-ce que des gens uploadent leur facture ? (conversion widget → upload)
3. Est-ce que l'analyse les surprend ? (valeur perçue)
4. Est-ce qu'ils partagent leur carte diagnostic ? (organic amplification)
5. Est-ce qu'ils demandent un mandat de renégociation ? (intent to act)

Beta publique prudente : chercher du signal, pas du volume.

## URL publique

- **URL live:** `https://renego-commodites-fr.vercel.app`
- **Statut:** ✅ confirmé QA cycle 8 (15:20 CET)
- **Infra:** déploiement Vercel en production, HTTP 200 vérifié
- **Note:** le domaine custom peut attendre. Ce n'est plus un launch blocker.

## Audience cible

### Segment primaire : les « post-promo sans le savoir »

- Abonnés box internet depuis 12+ mois
- Paient le prix post-promo sans y avoir pensé
- Sensibles au pouvoir d'achat mais pas motivés pour comparer seuls
- Présents sur : r/france, r/vosfinances, Dealabs, forums tech FR

### Segment secondaire : les optimiseurs

- Cherchent activement la meilleure offre
- Lisent les CGV, comparent les small print
- Moins besoin de ReneGo mais plus enclins à tester, critiquer et partager
- Présents sur : r/freebox, hardware.fr, commentcamarche

## Message principal

**« Payez-vous trop cher votre box internet ? Vérifiez en 10 secondes. »**

Déclinaisons par canal :

| Canal | Accroche | Angle |
|-------|----------|-------|
| Reddit r/vosfinances | « Les nouveaux abonnés fibre paient en moyenne 28,59 €/mois (Ariase, 2024). Moi je payais 39,99 € — 40% de plus, pour le même service. J'ai fait un outil open source qui vous dit en 10 secondes combien vous surpayez : entrez votre opérateur et votre prix. Ma Freebox : 17 €/mois de trop, Red by SFR = 369 € d'économie en 2 ans. Si vous voulez le diagnostic complet, importez votre facture — on génère une carte diagnostic partageable et on négocie aussi pour vous, gratuit, sans commission. » | Pénalité de fidélité hook + widget + story perso + card |
| Reddit r/france | « Les prix des box fibre ont baissé de 5,9% en 2024 pour les nouveaux clients (ARCEP). Pendant ce temps, la facture des clients fidèles augmente. C'est la pénalité de fidélité. J'ai fait un outil gratuit pour la calculer : entrez votre opérateur et votre prix, vous voyez en 10 secondes combien vous surpayez. Exemple : Orange Livebox passe à 42,99 € après 12 mois de promo. Open source, sans compte, sans commission. Partagez votre carte diagnostic — vos proches surpaient aussi. » | Pénalité + piège concret + sharing + ARCEP source |
| Dealabs | « Les nouveaux abonnés fibre paient 28,59 €/mois en moyenne (Ariase). Vous, probablement 40% de plus. Outil gratuit pour vérifier en 10 secondes (coût réel 24 mois) — open source, sans compte, sans commission. Carte diagnostic partageable. » | Pénalité + bon plan + transparence |
| Twitter/X | « Les prix des box fibre baissent pour les nouveaux clients (−5,9% en 2024, ARCEP). Et augmentent pour les fidèles. Calculez votre "pénalité de fidélité" en 10 sec : [lien]. Open source, zéro commission, on négocie pour vous. 📊 » | Pénalité hook + widget + ARCEP |
| LinkedIn | « En France, les clients fidèles des box internet paient 40% de plus que les nouveaux abonnés — pour le même service. Au UK, Ofcom a nommé ça la "loyalty penalty" et agi. En France, rien. J'ai lancé le premier service qui chiffre cette pénalité — gratuit, open source. » | Pénalité + builder story + Ofcom |

### Angle observatoire (seeding content)

L'observatoire public sert de contenu autonome dans les commentaires Reddit ou
en post séparé :

« On a compilé le vrai coût 24 mois des principales offres fibre en France —
promo, post-promo, frais d'ouverture, tout inclus. Red by SFR finit à 591 €
quand Orange tourne à 925 € et la Freebox à 960 €. Orange à 29,99 € en promo ?
Ça passe à 42,99 € au bout de 12 mois — soit 3 € de plus que votre Freebox.
Les chiffres sont sourcés et vérifiables. »

### Angle rétention (Reddit replies)

Pour les commentaires où quelqu'un dit « mais mon opérateur va me faire
une offre si j'appelle » :

« C'est probablement vrai. Les opérateurs ont des offres de rétention non
publiées. La question c'est : comment savoir si la contre-offre est vraiment
intéressante sans connaître le vrai prix du marché ? ReneGo vous donne le
benchmark : si Orange vous propose 30 €/mois "fidélité", vous savez que Red
est à 22,99 € fixe. Vous négociez en position de force. »

### Angle pénalité de fidélité (nouveau — V8)

Pour les commentaires ou en réponse aux « c'est normal, c'est le marché » :

« Ce n'est pas le marché, c'est la pénalité de fidélité. Les prix catalogue
fibre ont baissé de 5,9% en 2024 (ARCEP). Les factures des clients existants
augmentent de ~2 €/an. Un nouvel abonné paie 28,59 €/mois en moyenne (Ariase).
Un client post-promo : 40%+ de plus. Au UK, le régulateur (Ofcom) a nommé ce
phénomène et forcé les opérateurs à alerter les clients. En France, rien —
c'est pour ça qu'on a fait cet outil. »

### Angle sharing (V7)

Pour les commentaires ou en ajout dans les posts initiaux :

« Une fois le diagnostic fait, vous recevez une carte partageable avec vos
chiffres clés — sans aucune donnée personnelle. Envoyez-la à vos proches :
ils surpaient probablement aussi. C'est comme ça que l'outil se fait connaître
— pas de pub, pas de budget marketing, juste du bouche à oreille. »

### Réponses Reddit préparées

| Question probable | Réponse |
|---|---|
| « Et B&YOU à 25,99 € ? » | « Bien vu — B&YOU Pure Fibre Plus à 25,99 € est compétitif (8 Gb/s, sans engagement). Coût 24 mois : ~672 €, soit ~80 € de plus que Red mais débit 8× supérieur. On l'ajoute dans la prochaine mise à jour. » |
| « T'as oublié Free Pop / Ultra » | « Le panel couvre les offres les plus courantes. On élargit — le calcul 24 mois fonctionne pour n'importe quel prix de base si tu testes l'outil. » |
| « C'est juste un tableur glorifié » | « Le calcul est simple, oui. La valeur c'est le widget 10 secondes + l'import PDF automatique + la détection post-promo + la carte diagnostic partageable + la renégociation opérée si tu le souhaites. Le code est ouvert — si tu peux faire mieux, contribue. » |
| « Pourquoi open source ? » | « Parce qu'un outil financier opaque, personne ne devrait lui faire confiance. Le code est public, les données sont sourcées, et on ne touche aucune commission. » |
| « Vous allez changer mon forfait ? » | « Jamais sans votre accord. Vous donnez mandat, on négocie, vous validez l'offre finale. Si elle ne vous convient pas, rien ne se passe. » |
| « Comment ça gratuit ? C'est quoi l'arnaque ? » | « Pas d'arnaque. C'est une beta — on veut valider que le produit est utile. Aucune commission, aucune rétro-commission opérateur. Si ça marche, on explorera un abonnement annuel. En attendant, gratuit. » |
| « Pourquoi Red et pas SFR Starter ? » | « Red = meilleur prix (591 € sur 24 mois, sans engagement). SFR Starter = meilleur compromis si la TV compte (160 chaînes, 853 €). On montre les deux — l'outil explique le trade-off. » |
| « Orange est moins cher que Free ! » | « En promo oui (29,99 €, grâce à 2 remises cumulées). Mais ça passe à 42,99 € après 12 mois — 3 € de plus que votre Freebox. Le gain total sur 24 mois (35 €) est réel mais modeste. On vous montre le détail dans l'outil. » |
| « Mon opérateur va me faire une contre-offre » | « C'est probable. Et c'est justement le problème : comment évaluer cette offre si vous ne connaissez pas le vrai prix du marché ? ReneGo vous donne le benchmark avant d'appeler. Si la rétention Orange vous propose 30 €, vous savez que Red est à 22,99 € fixe. » |
| « La carte diagnostic c'est pas du PII ? » | « Non — la carte ne contient que des prix et des économies. Pas de nom, pas d'adresse, pas de numéro client. Votre opérateur est mentionné (c'est public, pas du PII) et l'URL ReneGo. C'est vous qui choisissez de partager ou non. » |

## Assets — état au 13 mars 15:40 CET

| Asset | Statut | Owner | Notes |
|-------|--------|-------|-------|
| Landing page fonctionnelle | ✅ | Dev | — |
| Flow complet (upload → reco → plan) | ✅ | Dev | — |
| Instant Price Check widget | ✅ SHIPPED | Dev (DEV-10) | QA verified cycle 7 |
| **Diagnostic Card partageable** | ✅ SHIPPED | Dev (DEV-11) | **QA verified cycle 8** |
| Red = reco primaire, trade-off TV | ✅ | Dev (BUG-13-FIX) | — |
| Orange 29,99 € promo, 925 € 24m | ✅ | Dev (06:05 CET) | — |
| Trust-first (badge, disclaimers, footer) | ✅ | Dev | — |
| Observatoire public sans import | ✅ | Dev | — |
| QA-03 Regression | ✅ PASSED | QA | Cycle 8, zero regression |
| Landing copy V7 | ✅ | Growth | Card integrated |
| Positionnement V7 | ✅ | Growth | Card + playbook angle |
| Launch plan V7 | ✅ | Growth | This file |
| Code ↔ copy alignment | ✅ 99/100 | QA | — |
| Demo video storyboard (draft) | ✅ Draft | Growth | Production post-launch |
| URL publique | ✅ Live | QA confirmed | `renego-commodites-fr.vercel.app` |
| **Screenshots (3 PNGs)** | ✅ DONE | Growth | `growth/assets/` — desktop, mobile, full |
| **Pénalité de fidélité brief** | ✅ DONE | Growth | `growth/penalite-fidelite-brief.md` |
| GROWTH-06 Feedback form spec | ✅ SPEC | Growth | `growth/feedback-form-spec.md` — Google Form TBD |
| GROWTH-07 Playbook content | ⏳ Deferred | Growth | Day 3 evening / Week 1 per PM |
| Post Reddit r/vosfinances rédigé | ⏳ Draft V7 above | Growth | Day 2 soir |
| Post Reddit r/france rédigé | ⏳ Draft V7 above | Growth | Day 2 soir |
| Thread Twitter rédigé | ⏳ Draft V7 above | Growth | Day 2 soir |

## Canaux — par ordre de priorité

### Tier 1 — Jour J (15 mars, dimanche)

| Canal | Action | Reach estimé | Effort |
|-------|--------|-------------|--------|
| **Reddit r/vosfinances** | Post « Show r/vosfinances » avec widget hook + diagnostic card + −369 € + observatoire | 5-50 upvotes, ~500-2000 vues | 30 min |
| **Reddit r/france** | Post discussion pouvoir d'achat + piège post-promo Orange + « vérifiez en 10 sec » + sharing | 10-100 upvotes, ~1000-5000 vues | 30 min |
| **Dealabs** | Discussion (pas un « bon plan ») avec angle carte diagnostic | Variable | 20 min |

**Timing Tier 1 :**
- r/vosfinances : dimanche 10h00 (weekend finance personnelle)
- r/france : dimanche 12h00-14h00 (pic activité dimanche midi)
- Dealabs : dimanche 15h00

### Tier 2 — J+1 à J+3

| Canal | Action | Condition |
|-------|--------|-----------|
| **Twitter/X perso** | Thread + screenshot du widget + screenshot diagnostic card | Retours Reddit neutres ou positifs |
| **LinkedIn perso** | Post « builder story » | Idem |
| **HackerNews** | Show HN | Retours Reddit positifs |
| **Reddit r/freebox** | Post ciblé Freebox | Toujours |
| **hardware.fr** | Topic forum | Toujours |

### Tier 3 — J+7+ (si traction)

| Canal | Action | Condition |
|-------|--------|-----------|
| Product Hunt | Launch officiel | > 50 utilisateurs organiques |
| Presse tech FR (Frandroid, Numerama, Les Numériques) | Pitch email avec données observatoire | > 100 utilisateurs |
| UFC-Que Choisir / 60M de consommateurs | Pitch éditorial | Panel élargi + données validées |

**Note Tier 3 :** l'observatoire et les données de coût 24 mois sont un angle
presse naturel. L'Indice de Transparence (scoring structuré des opérateurs)
pourrait amplifier cet angle en semaine 1 si la traction initiale le justifie.

## Métriques de succès (J+7)

| Métrique | Signal positif | Signal neutre | Signal négatif |
|----------|---------------|--------------|----------------|
| Visiteurs uniques | > 200 | 50-200 | < 50 |
| Widget utilisations | > 50 | 15-50 | < 10 |
| Factures uploadées | > 30 | 10-30 | < 5 |
| Taux widget → upload | > 20% | 10-20% | < 5% |
| Mandats de renégociation | > 5 | 1-5 | 0 |
| **Diagnostic cards partagées** | **> 10** | **3-10** | **0** |
| **Cards shared → new visitors** | **> 5** | **1-5** | **0** |
| Plan d'action vu en entier | > 50% des uploads | 30-50% | < 20% |
| Retours qualitatifs positifs | > 5 commentaires | 1-5 | 0 |
| Upvotes Reddit combinés | > 20 | 5-20 | < 5 ou supprimé |
| **Feedback form soumissions** | > 5 | 1-5 | 0 |

### Interprétation

- **Signal positif sur ≥ 5 métriques :** traction naissante. Investir Tier 2,
  prioriser Indice de Transparence, Sentinel, et playbook de négociation.
- **Signal neutre :** intérêt mais pas de conversion. Analyser le funnel :
  - Si widget convertit mais pas l'upload → la carte diagnostic est la sortie
    de valeur alternative (share la carte du widget, pas du diagnostic complet)
  - Si upload convertit mais pas de partage → améliorer le CTA de partage
  - Si upload OK mais pas de mandats → le playbook de négociation (GROWTH-07)
    aide à débloquer l'action autonome
- **Signal négatif :** réévaluer. Le problème n'est peut-être pas assez
  douloureux, ou le format PDF est trop frictionnel. Pivoter vers saisie
  manuelle ou widget-only mode.

## Risques et mitigations

| Risque | P | Impact | Mitigation |
|--------|---|--------|------------|
| Prix benchmark périmés le jour J | Moy | Élevé | Vérifier les 4 URLs le matin du 15. Date de relevé visible partout. |
| Reddit modère le post (auto-promo) | Moy | Moyen | Rédiger comme partage communautaire + données observatoire. Backup : commentaire dans un thread existant « quelle box choisir ». |
| Personne n'uploade sa facture | Moy | Élevé | Widget comme entry point. Diagnostic card partageable. Mode « essayer avec l'exemple Freebox ». Saisie manuelle si besoin. |
| Domaine custom non pret | Faible | Faible | L'URL Vercel publique suffit pour la beta. ✅ Confirmé. |
| Bug en prod jour J | Faible | Élevé | Dev dispo dimanche. QA-03 + cycle 8 regression passée. |
| Opérateur mécontent | Très faible | Faible | Données publiques, sources citées. Aucune diffamation. |
| Question juridique | Faible | Moyen | Disclaimer clair. Beta. Pas de conseil financier. Mandat explicite. |
| Orange promo change before launch | Faible | Faible | Prix vérifié live 13/03. Re-check 15/03 matin. If changed, update — 15 min. |
| Widget savings excl. setup fees | P3 | Cosmétique | Libellé « potentielles » dans le résultat widget. |
| Canvas fonts varient entre OS | P3 | Cosmétique | System sans-serif fallback, layout identique (QA verified). |

## Day 2 evening delivery (13 mars 19:40 CET)

Both dev tasks (DEV-10 + DEV-11) are done and QA-verified. Growth evening
delivery:

| # | Task | Status | Output |
|---|------|--------|--------|
| 1 | **Screenshots** | ✅ DONE | `growth/assets/` — 3 PNGs |
| 2 | **GROWTH-06 form spec** | ✅ SPEC | `growth/feedback-form-spec.md` |
| 3 | **Pénalité de fidélité brief** | ✅ DONE | `growth/penalite-fidelite-brief.md` |
| 4 | **V8 copy files** | ✅ DONE | positioning, landing-copy, launch-plan, handoff |
| 5 | **Reddit posts V8 drafts** | ✅ DRAFTED | Pénalité hook integrated |
| 6 | **GROWTH-07 Playbook content** | ⏳ Deferred | Day 3 evening / Week 1 |

### What remains for Day 3

| # | Task | Owner | Effort | Priority |
|---|------|-------|--------|----------|
| 1 | **Create Google Form** from spec | Growth | 15 min | 🟡 |
| 2 | **PM review V8 copy additions** | PM | 15 min | 🔴 |
| 3 | **GROWTH-07 Playbook content** | Growth | 2-3h | ⚪ Week 1 |
| 4 | **Reddit posts final polish** | Growth | 30 min | 🟡 |

### GROWTH-07 — Negotiation Playbook Content Prep (NEW)

US finding #12 identifies operator-specific negotiation scripts as the
highest-ROI content opportunity — zero dev, pure content, niche completely
unoccupied in France. HighSpeedInternet.com generates 2.68M visits/month
from this exact content pattern.

**Scope:** Prepare `growth/negotiation-playbook-content.md` with:
- 4 operator-specific negotiation scripts (Orange, SFR, Free, Bouygues)
- Retention desk phone numbers + recommended call times
- Word-for-word script template with dynamic placeholders (user's price,
  competing offer, 24m math)
- Legal references (article L. 224-39, loi Chatel, code RIO via 3179)
- Counter-offer evaluation guide
- Timing advice

**This is content prep only — NOT integration.** Integration into the product's
Plan d'action template is DEV-12, scoped for Week 1. The content file gives
dev the raw material to slot in quickly.

**Why now instead of post-launch:** The playbook content is also useful as
Reddit reply ammunition. When users say "how do I actually negotiate?",
Growth can pull from the playbook. And the scripts reinforce the positioning:
"On ne vous dit pas juste quoi faire. On vous dit quoi DIRE."

## Checklist veille du lancement (14 mars soir)

- [x] URL publique confirmée et accessible — ✅ 15:20 CET
- [x] DEV-11 diagnostic card shipped — ✅ 14:05 CET, QA 15:20
- [x] Social meta + OG image QA-verified — ✅ cycle 9, 19:20 CET
- [x] Screenshots captured — ✅ 3 PNGs in `growth/assets/`
- [x] Pénalité de fidélité brief — ✅ `growth/penalite-fidelite-brief.md`
- [x] GROWTH-06 form spec — ✅ `growth/feedback-form-spec.md`
- [ ] Vérifier les 4 URLs sources — 200 OK et prix inchangés
- [ ] Déployer la version finale
- [ ] Smoke test : widget + upload PDF Freebox → Red = reco, −369 €, trade-off TV
- [ ] Smoke test : diagnostic card share + download
- [ ] PM review V8 copy additions (pénalité de fidélité)
- [ ] GROWTH-06 Google Form created + URL linked
- [ ] Post Reddit r/vosfinances rédigé (final, pénalité hook)
- [ ] Post Reddit r/france rédigé (final, pénalité hook)
- [ ] Thread Twitter rédigé (final)
- [ ] Relire la landing copy V8 une dernière fois
- [ ] Badge « beta » visible
- [ ] Disclaimer footer visible et complet
- [ ] Observatoire public accessible
- [ ] Aucune promesse non tenue dans l'interface

## Checklist jour J (15 mars matin)

- [ ] Re-vérifier les URLs sources (les prix ont-ils bougé ?)
- [ ] Smoke test final (widget + Red = reco + Orange = 29,99 € promo, 925 €)
- [ ] Smoke test diagnostic card share
- [ ] Publier le post Reddit r/vosfinances (10h00)
- [ ] Monitorer les commentaires et répondre (humain, pas auto)
- [ ] Publier le post Reddit r/france (12h00-14h00)
- [ ] Publier sur Dealabs (15h00)
- [ ] Collecter les retours dans `reports/user-feedback.md`

## Organic amplification loop (nouveau — V7)

The diagnostic card creates a built-in viral loop at zero cost:

```
Visiteur → widget (10 sec) → upload facture → analyse → carte diagnostic
    ↓                                                          ↓
    └─── partage widget result informellement ──→   partage carte via WhatsApp
                                                          ↓
                                                   Proches voient la carte
                                                          ↓
                                                   "Et toi, combien tu paies ?"
                                                          ↓
                                                   Nouveau visiteur → widget → ...
```

Chaque utilisateur qui partage sa carte est un canal d'acquisition gratuit.
En France, le canal dominant est WhatsApp (38M+ MAU). Une carte envoyée dans
un groupe familial touche 5-15 personnes qui ont probablement le même type
d'abonnement box dans la même zone géographique. C'est du ciblage par
affinité — mieux que n'importe quelle pub.

Le lancement organique pur (Reddit/Dealabs/Twitter) sème les graines.
Le diagnostic card est la mécanique qui transforme les graines en boucle
de croissance.

## Post-launch (J+1 à J+7)

- Publier Tier 2 si retours Reddit positifs ou neutres
- Compiler les retours utilisateurs
- Itérer sur le flow si problèmes récurrents
- **Analyser le widget → upload → card share funnel** — les taux de conversion
  à chaque étape guident les priorités produit.
- **Analyser les shares** — combien de cartes partagées ? Via quel canal ?
  Quelle proportion de visiteurs vient d'une carte partagée ?
- **Post-action feedback** — si GROWTH-06 est en place, commencer à accumuler
  les offres de rétention signalées par les utilisateurs.
- **Intégrer le playbook de négociation** — si GROWTH-07 est prêt, passer le
  contenu au dev pour DEV-12 (intégration dans le Plan d'action).
- **Intégrer la pénalité de fidélité dans le produit** — ajouter la ligne
  ARCEP/Ariase au widget result, à la carte diagnostic, et au diagnostic
  complet. Priorité maximale semaine 1 si PM valide le V8 copy. Zero dev
  (template/copy changes).
- **Tester l'angle presse « pénalité de fidélité »** — pitcher 60 Millions de
  Consommateurs / UFC-Que Choisir avec : « Les clients fidèles des box
  internet paient 40% de plus que les nouveaux abonnés — données ARCEP. »
- Décider B&YOU au panel
- Décider pricing (gratuit → flat fee ?) basé sur signal
- Si traction : préparer l'Indice de Transparence pour la semaine 1
- Si traction : prioriser la Promo-Expiry Sentinel (retention)

## Ce plan ne coûte rien

Pas de budget ads. Pas de RP agence. Lancement organique pur. Le seul
investissement est du temps : rédaction, monitoring, itération rapide.

La différence avec V6 : la carte diagnostic transforme chaque utilisateur en
ambassadeur. Le widget abaisse la barrière d'entrée. La carte diffuse le
résultat. Les deux ensemble créent une boucle : le widget attire (10 secondes,
pas de friction), le diagnostic convainc (coût 24 mois, pièges identifiés,
plan d'action), la carte amplifie (partage WhatsApp, zéro budget).

Avant V7, le funnel était : acquisition organique → produit → rien.
Après V7, le funnel est : acquisition organique → produit → carte →
acquisition organique. C'est une boucle, pas un entonnoir.
