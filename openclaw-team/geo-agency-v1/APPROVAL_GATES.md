# Approval Gates

Tout ce qui suit demande validation humaine explicite avant execution.

## Gate A - Public content

- publication ou modification en prod d'une page
- mise en ligne de `llms.txt`
- ajout d'un FAQ public
- ajout de comparatifs ou claims concurrentiels

## Gate B - Crawl and indexation

- changement `robots.txt`
- ajout ou retrait `noindex`
- changement canonical
- redirects
- soumission ou modification sitemap
- activation IndexNow ou equivalents

## Gate C - Brand and entity footprint

- creation ou edition Wikipedia, Wikidata, Reddit, LinkedIn, GBP, YouTube
- outreach ou demande d'avis
- citations ou backlinks obtenus via action externe

## Gate D - Legal and trust

- statistiques non verifiables
- promesses de resultat
- claims de conformite
- sujets YMYL
- mentions de clients, logos, cas clients, reviews

## Gate E - Scale

- generation de plus de 20 URLs
- toute logique programmatique a partir d'un dataset externe
- toute automatisation qui peut creer du contenu duplique

## Format de demande d'approbation

Chaque demande doit tenir en 6 lignes:

1. Action
2. Why now
3. Risk if wrong
4. Evidence
5. Rollback
6. Decision needed by
