# Launch Plan V6 — ReneGo Beta Publique

Date: 2026-03-13 (V6 — Day 2 midday cycle)
Agent: renego-growth
Target: 15 mars 2026 (dimanche)
Status: V6 — widget live, regression passed, QA 98/100, one blocker (URL)
Previous: V5 2026-03-13 07:40 CET

---

## What changed in V6

- **DEV-10 Instant Price Check widget SHIPPED** (10:05 CET, QA verified 11:20).
  The highest-ROI conversion improvement is live. Visitors now get personalized
  savings data in 10 seconds before any upload. This changes the launch
  messaging — the landing page is interactive, not just a brochure.
- **QA-03 Regression formelle PASSÉE** (11:20 CET). Zero regressions across all
  checks. First formal regression gate.
- **BUG-16 FERMÉ** — the Bouygues/SFR 24m discrepancy was a doc error. Code is
  correct. Definitive ranking confirmed: SFR #2 (852,76 €), Bouygues #6
  (996,76 €).
- **QA score: 98/100** (up from 97). QA gate maxed at 20/20.
- **Day 2 priorities reshuffled.** With DEV-10 done and QA-03 passed, Day 2
  afternoon focus shifts to: DEV-11 diagnostic card → screenshots/GIF →
  GROWTH-06 feedback form → Reddit post finals.

---

## Objectif du lancement

Mettre ReneGo devant ses **100 premiers vrais utilisateurs** pour valider :

1. Est-ce que des gens utilisent le widget ? (conversion landing → engagement)
2. Est-ce que des gens uploadent leur facture ? (conversion widget → upload)
3. Est-ce que l'analyse les surprend ? (valeur perçue)
4. Est-ce qu'ils demandent un mandat de renégociation ? (intent to act)

Beta publique prudente : chercher du signal, pas du volume.

## Hard blocker

| # | Blocker | Owner | Status | ETA |
|---|---------|-------|--------|-----|
| 1 | **URL publique** — pas de domaine/hébergement confirmé | Alexis | 🔴 Bloquant | Day 2 soir au plus tard |

**Si l'URL n'est pas résolue le 14 mars soir : recommandation Growth = reporter
le lancement.** Fallback viable : Vercel, Netlify, ou GitHub Pages — déployable
en 30 min.

### Résolu depuis V5

- ~~DEV-10 widget~~ — shipped 10:05, QA verified 11:20
- ~~QA-03 regression~~ — passée 11:20, zero regression
- ~~BUG-16 Bouygues/SFR~~ — fermé 11:20, ranking confirmed
- ~~Bouygues 24m discrepancy~~ — documentation error, resolved

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

Le widget change la donne pour le launch messaging. Avant V6, le CTA était
« importez votre facture » (friction haute). Maintenant, le CTA primaire est
« vérifiez en 10 secondes » (friction quasi-nulle), et l'upload devient l'étape
suivante naturelle pour ceux qui veulent le diagnostic complet.

Déclinaisons par canal :

| Canal | Accroche | Angle |
|-------|----------|-------|
| Reddit r/vosfinances | « J'ai fait un outil open source qui vous dit en 10 secondes combien vous surpayez votre box internet. Pas besoin de compte ni de facture — juste votre opérateur et votre prix. Résultat sur ma Freebox : 17 €/mois de trop, Red by SFR ferait économiser 369 € en 2 ans. Si vous voulez le diagnostic complet, importez votre facture — on négocie aussi pour vous, gratuit, sans commission. » | Widget hook + story perso + offre d'aide |
| Reddit r/france | « Les opérateurs comptent sur le fait que vous ne comparez pas après la promo. J'ai fait un outil gratuit : entrez votre opérateur et votre prix, vous voyez en 10 secondes combien vous surpayez. Exemple : Orange Livebox passe à 42,99 € après 12 mois de promo à 29,99 €. Open source, sans compte, sans commission. » | Widget + piège concret + opéré |
| Dealabs | « Outil gratuit pour savoir en 10 secondes si votre box internet est trop chère (coût réel 24 mois, pas le prix promo) — open source, sans compte, sans commission » | Bon plan + transparence |
| Twitter/X | « Votre promo box a expiré il y a combien de temps ? 🧐 Vérifiez en 10 secondes combien vous surpayez : [lien]. Open source, zéro commission, on négocie pour vous si vous voulez. » | Question hook + widget |
| LinkedIn | « En France, personne ne vous aide à renégocier votre box internet. Aux US, c'est un marché à $1.2B. J'ai lancé le premier service français — gratuit, open source, vérification en 10 secondes. » | Builder story + widget |

### Angle observatoire (seeding content)

L'observatoire public sert de contenu autonome dans les commentaires Reddit ou
en post séparé :

« On a compilé le vrai coût 24 mois des principales offres fibre en France —
promo, post-promo, frais d'ouverture, tout inclus. Red by SFR finit à 591 €
quand Orange tourne à 925 € et la Freebox à 960 €. Orange à 29,99 € en promo ?
Ça passe à 42,99 € au bout de 12 mois — soit 3 € de plus que votre Freebox.
Les chiffres sont sourcés et vérifiables. »

### Angle rétention (Reddit replies)

Pour les commentaires Reddit où quelqu'un dit « mais mon opérateur va me faire
une offre si j'appelle » :

« C'est probablement vrai. Les opérateurs ont des offres de rétention non
publiées. La question c'est : comment savoir si la contre-offre est vraiment
intéressante sans connaître le vrai prix du marché ? ReneGo vous donne le
benchmark : si Orange vous propose 30 €/mois "fidélité", vous savez que Red
est à 22,99 € fixe. Vous négociez en position de force. »

### Réponses Reddit préparées

| Question probable | Réponse |
|---|---|
| « Et B&YOU à 25,99 € ? » | « Bien vu — B&YOU Pure Fibre Plus à 25,99 € est compétitif (8 Gb/s, sans engagement). Coût 24 mois : ~672 €, soit ~80 € de plus que Red mais débit 8× supérieur. On l'ajoute dans la prochaine mise à jour. » |
| « T'as oublié Free Pop / Ultra » | « Le panel couvre les offres les plus courantes. On élargit — le calcul 24 mois fonctionne pour n'importe quel prix de base si tu testes l'outil. » |
| « C'est juste un tableur glorifié » | « Le calcul est simple, oui. La valeur c'est le widget 10 secondes + l'import PDF automatique + la détection post-promo + la renégociation opérée si tu le souhaites. Le code est ouvert — si tu peux faire mieux, contribue. » |
| « Pourquoi open source ? » | « Parce qu'un outil financier opaque, personne ne devrait lui faire confiance. Le code est public, les données sont sourcées, et on ne touche aucune commission. » |
| « Vous allez changer mon forfait ? » | « Jamais sans votre accord. Vous donnez mandat, on négocie, vous validez l'offre finale. Si elle ne vous convient pas, rien ne se passe. » |
| « Comment ça gratuit ? C'est quoi l'arnaque ? » | « Pas d'arnaque. C'est une beta — on veut valider que le produit est utile. Aucune commission, aucune rétro-commission opérateur. Si ça marche, on explorera un abonnement annuel. En attendant, gratuit. » |
| « Pourquoi Red et pas SFR Starter ? » | « Red = meilleur prix (591 € sur 24 mois, sans engagement). SFR Starter = meilleur compromis si la TV compte (160 chaînes, 853 €). On montre les deux — l'outil explique le trade-off. » |
| « Orange est moins cher que Free ! » | « En promo oui (29,99 €, grâce à 2 remises cumulées). Mais ça passe à 42,99 € après 12 mois — 3 € de plus que votre Freebox. Le gain total sur 24 mois (35 €) est réel mais modeste. On vous montre le détail dans l'outil. » |
| « Mon opérateur va me faire une contre-offre » | « C'est probable. Et c'est justement le problème : comment évaluer cette offre si vous ne connaissez pas le vrai prix du marché ? ReneGo vous donne le benchmark avant d'appeler. Si la rétention Orange vous propose 30 €, vous savez que Red est à 22,99 € fixe. » |

## Assets — état au 13 mars 11:40 CET

| Asset | Statut | Owner | Deadline |
|-------|--------|-------|----------|
| Landing page fonctionnelle | ✅ | Dev | — |
| Flow complet (upload → reco → plan) | ✅ | Dev | — |
| **Instant Price Check widget** | ✅ SHIPPED | Dev (DEV-10) | — |
| Red = reco primaire, trade-off TV | ✅ | Dev (BUG-13-FIX) | — |
| Orange 29,99 € promo, 925 € 24m | ✅ | Dev (06:05 CET) | — |
| Trust-first (badge, disclaimers, footer) | ✅ | Dev | — |
| Observatoire public sans import | ✅ | Dev | — |
| QA-03 Regression | ✅ PASSED | QA | — |
| Landing copy V6 | ✅ | Growth | — |
| Positionnement V6 | ✅ | Growth | — |
| Launch plan V6 | ✅ | Growth | — |
| Code ↔ copy alignment | ✅ QA 98/100 | QA | — |
| Demo video storyboard (draft) | ✅ Draft | Growth | — |
| **URL publique** | ❌ Bloquant | Alexis | **14 mars soir** |
| DEV-11 Diagnostic card | ⏳ In progress | Dev | 14 mars |
| Screenshot/GIF du flow | ❌ À faire | Growth/Dev | 14 mars soir |
| GROWTH-06 Feedback form V0 | ❌ À faire | Growth | 14 mars |
| Post Reddit r/vosfinances rédigé | ⏳ Draft V6 above | Growth | 14 mars |
| Post Reddit r/france rédigé | ⏳ Draft V6 above | Growth | 14 mars |
| Thread Twitter rédigé | ⏳ Draft V6 above | Growth | 14 mars |

## Canaux — par ordre de priorité

### Tier 1 — Jour J (15 mars, dimanche)

| Canal | Action | Reach estimé | Effort |
|-------|--------|-------------|--------|
| **Reddit r/vosfinances** | Post « Show r/vosfinances » avec widget hook + −369 € + observatoire | 5-50 upvotes, ~500-2000 vues | 30 min |
| **Reddit r/france** | Post discussion pouvoir d'achat + piège post-promo Orange + « vérifiez en 10 sec » | 10-100 upvotes, ~1000-5000 vues | 30 min |
| **Dealabs** | Discussion (pas un « bon plan ») | Variable | 20 min |

**Timing Tier 1 :**
- r/vosfinances : dimanche 10h00 (weekend finance personnelle)
- r/france : dimanche 12h00-14h00 (pic activité dimanche midi)
- Dealabs : dimanche 15h00

### Tier 2 — J+1 à J+3

| Canal | Action | Condition |
|-------|--------|-----------|
| **Twitter/X perso** | Thread + screenshot du widget | Retours Reddit neutres ou positifs |
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
| **Widget utilisations** | > 50 | 15-50 | < 10 |
| Factures uploadées | > 30 | 10-30 | < 5 |
| **Taux widget → upload** | > 20% | 10-20% | < 5% |
| Mandats de renégociation | > 5 | 1-5 | 0 |
| Plan d'action vu en entier | > 50% des uploads | 30-50% | < 20% |
| Retours qualitatifs positifs | > 5 commentaires | 1-5 | 0 |
| Upvotes Reddit combinés | > 20 | 5-20 | < 5 ou supprimé |
| **Diagnostic cards partagées** | > 10 | 3-10 | 0 |

### Interprétation

- **Signal positif sur ≥ 5 métriques :** traction naissante. Investir Tier 2,
  prioriser Sentinel et Indice de Transparence.
- **Signal neutre :** intérêt mais pas de conversion. Itérer sur le flow
  (widget → upload = le taux à surveiller). Si le widget convertit mais pas
  l'upload, le diagnostic card devient encore plus important comme sortie de
  valeur alternative.
- **Signal négatif :** réévaluer. Le problème n'est peut-être pas assez
  douloureux, ou le format PDF est trop frictionnel. Pivoter vers saisie
  manuelle ou widget-only mode.

## Risques et mitigations

| Risque | P | Impact | Mitigation |
|--------|---|--------|------------|
| Prix benchmark périmés le jour J | Moy | Élevé | Vérifier les 4 URLs le matin du 15. Date de relevé visible partout. |
| Reddit modère le post (auto-promo) | Moy | Moyen | Rédiger comme partage communautaire + données observatoire. Backup : commentaire dans un thread existant « quelle box choisir ». |
| Personne n'uploade sa facture | Moy | Élevé | Widget comme entry point à friction réduite. Diagnostic card partageable (DEV-11). Mode « essayer avec l'exemple Freebox ». Saisie manuelle. |
| URL publique non prête | Moy | Critique | Fallback : Vercel / Netlify / GitHub Pages (30 min). |
| Bug en prod jour J | Faible | Élevé | Dev dispo dimanche. QA-03 regression passée. Screenshot fallback si déploiement casse. |
| Opérateur mécontent | Très faible | Faible | Données publiques, sources citées. Aucune diffamation. |
| Question juridique | Faible | Moyen | Disclaimer clair. Beta. Pas de conseil financier. Mandat explicite. |
| Orange promo might change before launch | Faible | Faible | Prix vérifié live 13/03. Re-check 15/03 matin. If changed, update — 15 min. |
| Widget savings excl. setup fees | P3 | Cosmétique | Libellé « potentielles » dans le résultat widget. |

## Day 2 focus (13-14 mars) — updated for V6

DEV-10 done. QA-03 done. The remaining Day 2 work:

| Priority | Task | Owner | Effort | Status |
|----------|------|-------|--------|--------|
| 1 | **DEV-11 Shareable Diagnostic Card** | Dev | 2-4h | ⏳ In progress |
| 2 | **Screenshot/GIF production** (widget + flow + Red reco) | Growth + Dev | 1h | ❌ |
| 3 | **GROWTH-06 Google Form** « Qu'a proposé votre opérateur ? » | Growth | 20 min | ❌ |
| 4 | **Reddit posts final drafts** (widget-first messaging) | Growth | 1h | ⏳ |
| 5 | **Offers-FR spot-check** SFR/Bouygues service profiles | Offers-FR | 1h | ⏳ |
| 6 | **URL publique escalation** | Alexis | CRITICAL | ❌ |

### DEV-11 Diagnostic Card — why it matters for launch

The card is the zero-budget viral engine (US finding #11). Each user who
completes an analysis gets a branded, screenshot-ready card with 4 numbers:
current price, best price, 24m savings, renego.fr URL. One-tap share via Web
Share API. In France, the sharing channel is WhatsApp groups — a card sent to a
family group triggers « et toi, combien tu paies ? » → exponential from zero.

If DEV-11 ships today, every Reddit visitor who uses the tool can share their
result. That's organic amplification from day 1 of launch.

## Checklist veille du lancement (14 mars soir)

- [ ] **URL publique confirmée et accessible**
- [ ] Vérifier les 4 URLs sources — 200 OK et prix inchangés
- [ ] Déployer la version finale
- [ ] Smoke test : widget + upload PDF Freebox → Red = reco, −369 €, trade-off TV
- [ ] DEV-11 diagnostic card shipped (if ready)
- [ ] GROWTH-06 feedback form linked
- [ ] Post Reddit r/vosfinances rédigé (final, widget-first)
- [ ] Post Reddit r/france rédigé (final, widget-first)
- [ ] Thread Twitter rédigé (final)
- [ ] Screenshot ou GIF du flow prêt (widget result + Red reco)
- [ ] Relire la landing copy V6 une dernière fois
- [ ] Badge « beta » visible
- [ ] Disclaimer footer visible et complet
- [ ] Observatoire public accessible
- [ ] Aucune promesse non tenue dans l'interface

## Checklist jour J (15 mars matin)

- [ ] Re-vérifier les URLs sources (les prix ont-ils bougé ?)
- [ ] Smoke test final (widget + Red = reco + Orange = 29,99 € promo, 925 €)
- [ ] Publier le post Reddit r/vosfinances (10h00)
- [ ] Monitorer les commentaires et répondre (humain, pas auto)
- [ ] Publier le post Reddit r/france (12h00-14h00)
- [ ] Publier sur Dealabs (15h00)
- [ ] Collecter les retours dans `reports/user-feedback.md`

## Post-launch (J+1 à J+7)

- Publier Tier 2 si retours Reddit positifs ou neutres
- Compiler les retours utilisateurs
- Itérer sur le flow si problèmes récurrents
- **Analyser le widget → upload funnel** — le taux de conversion entre le check
  instantané et l'upload complet est la métrique la plus importante pour décider
  du prochain investissement produit.
- **Post-action feedback** — si GROWTH-06 est en place, commencer à accumuler
  les offres de rétention signalées par les utilisateurs.
  [Source: US finding #10]
- Décider B&YOU au panel
- Décider pricing (gratuit → flat fee ?) basé sur signal
- Si traction : préparer l'Indice de Transparence pour la semaine 1
- Si traction : prioriser la Promo-Expiry Sentinel (retention)

## Ce plan ne coûte rien

Pas de budget ads. Pas de RP agence. Lancement organique pur. Le seul
investissement est du temps : rédaction, monitoring, itération rapide.

La différence avec V5 : le widget transforme le lancement d'un « importez votre
facture et faites-nous confiance » en un « vérifiez en 10 secondes si vous payez
trop — zéro engagement, zéro risque ». La friction d'entrée a chuté d'un
facteur 10. Chaque post Reddit et tweet peut maintenant dire « testez en 10
secondes » au lieu de « uploadez un PDF » — et c'est un message radicalement
différent pour l'acquisition.
