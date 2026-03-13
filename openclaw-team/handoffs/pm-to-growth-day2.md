# PM → Growth Day 2 Afternoon Handoff

Date: 2026-03-13 13:05 CET
Status: **ready — pick up at 15:40 wave**
Owner: `renego-growth`
Sprint: Day 2 afternoon — launch assets + playbook prep

---

## Context

Score: 98/100. V6 copy re-validated by PM — launch-safe, no changes. DEV-10
widget shipped. DEV-11 diagnostic card in dev queue (14:05 wave). QA-03 passed.
Zero P0/P1. The product side is maxed out. **Growth owns the last 2 points.**

Three tasks, strictly ordered:

---

## Task 1 — GROWTH-06: Google Form "Qu'a proposé votre opérateur ?" (P2, 20 min)

### What

A V0 feedback form to start the data flywheel from US finding #10. Linked from
the post-action screen (after a user acts on a recommendation).

### Fields

1. Quel est votre opérateur actuel ? (dropdown: Free, Orange, SFR, Bouygues)
2. Quelle offre vous a été proposée ? (texte libre)
3. Quel prix ? (nombre, €/mois)
4. Avez-vous accepté ? (Oui / Non / Pas encore décidé)
5. Commentaire (texte libre, optionnel)

### Deliverable

- Google Form URL stockée dans `growth/feedback-form.md`
- Lien partagé avec Dev pour intégration dans le flow post-action (15 min dev,
  après DEV-11)

### PM confirmation: Oui, V0 Google Form sur Day 2. Zero dev. Finding #10 validé.

---

## Task 2 — Screenshots/GIF du flow (P2, 1h)

### What

Captures visuelles du flow pour les posts Reddit/Twitter/social et le launch
package. Red comme reco primaire.

### Deliverables

1. **Screenshot widget:** résultat "vous surpayez de 17 €/mois" (Orange 40 €)
2. **Screenshot diagnostic complet:** les 4 alternatives avec Red ⭐
3. **Screenshot plan d'action:** le détail "appeler, citer Red à 22,99 €"
4. **GIF animé (optionnel):** widget → diagnostic → alternatives en 5-8 sec
5. Fichiers dans `growth/assets/`

### Context

APPR-04 résolu: pas de vidéo, screenshots + GIF suffisent. Le GIF est le
substitut du storyboard Remotion.

---

## Task 3 — GROWTH-07: Playbook de négociation — PREP CONTENT ONLY (P2, 2h)

### What

US Finding #12 (12:35 CET) identifie le "Playbook de négociation" comme le
changement au plus fort ROI avant le lancement. **Le lancement n'en a pas besoin
(le FAQ V6 couvre déjà les contre-offres),** mais le playbook sera le premier
ajout post-launch ou Week 1.

Growth prépare le CONTENU maintenant (2h), Dev l'intègre dans le template en
semaine (30 min).

### Deliverable

Un fichier `growth/negotiation-playbook-content.md` contenant, par opérateur
(Free, Orange, SFR, Bouygues):

1. **Numéro de rétention** et créneaux horaires recommandés
2. **Script mot-à-mot** adapté à l'opérateur ("Bonjour, je souhaite résilier
   mon abonnement Livebox Fibre. J'ai comparé les offres sur 24 mois et Red by
   SFR à 22,99 € fixe est 369 € moins cher que mon forfait actuel...")
3. **Article de loi à citer** (L. 224-39 Code de la consommation, loi Chatel,
   loi Hamon selon le cas)
4. **Offre concurrente à citer** avec prix, source, date
5. **Guide contre-offre:** "Si l'agent vous propose X, voici comment comparer"
6. **Timing:** quand appeler (mardi-jeudi matin = meilleures chances)

### Important: PAS d'intégration code sur Day 2. Content only. L'intégration
template est un ticket Week 1 (DEV-12).

---

## Priority order

1. **GROWTH-06** (20 min) — quick win, data flywheel starts
2. **Screenshots/GIF** (1h) — needed for launch assets
3. **GROWTH-07** (2h) — prep for Week 1, not launch-blocking

Si le temps manque, couper GROWTH-07. Les deux premiers suffisent pour le launch.

---

## NOT in Growth scope Day 2

- V6 copy changes (PM validated, no changes)
- Reddit/social final post drafts (use V6 as-is, finalize Day 3 morning)
- B&YOU response (already prepared)
- URL de déploiement (Alexis)

---

## Handoff when done

Update `handoffs/growth-to-pm.md` (V7) with:
- GROWTH-06 form URL
- Screenshots/GIF list
- GROWTH-07 content status (complete or partial)
- Any new questions for PM
