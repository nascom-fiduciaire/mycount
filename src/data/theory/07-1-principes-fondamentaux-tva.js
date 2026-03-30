export const chapter = {
  id: '07-1-principes-fondamentaux-tva',
  title: 'TVA — Principes et mécanisme de la chaîne',
  tag: 'tva',
  category: 'TVA suisse',
  content: `## 1. Qu'est-ce que la TVA ?

La taxe sur la valeur ajoutée (TVA) est un impôt indirect sur la consommation. Elle est prélevée à chaque étape de la chaîne de production et de distribution, mais elle n'est définitivement supportée que par le consommateur final.

En Suisse, la TVA est entrée en vigueur le 1er janvier 1995. Elle est régie par la **Loi fédérale régissant la taxe sur la valeur ajoutée (LTVA)**, complétée par l'Ordonnance (OTVA) et les publications thématiques de l'Administration fédérale des contributions (AFC).

---

## 2. Le rôle de l'entreprise assujettie

L'entreprise assujettie n'est pas le contribuable final — elle est l'intermédiaire fiscal de l'État. Elle collecte la TVA pour le compte de l'État en la facturant à ses clients, et peut récupérer la TVA payée à ses propres fournisseurs (l'impôt préalable).

La TVA facturée **n'appartient jamais à l'entreprise** — elle constitue une dette temporaire envers l'AFC, à reverser périodiquement lors du décompte TVA.

---

## 3. Le mécanisme de la chaîne — exemple chiffré complet

La TVA est perçue à chaque stade de création de valeur. Voici un exemple avec quatre agents économiques et le taux normal de 8.1% :

**Étape 1 — Le bûcheron** coupe du bois et le vend à une scierie.
- Prix de vente HT : CHF 50.00 | TVA 8.1% : CHF 4.05 | Prix TTC : CHF 54.05
- IP déductible : CHF 0 | **Décompte AFC : CHF 4.05**

**Étape 2 — La scierie** achète le bois et vend des planches à un ébéniste.
- Prix de vente HT : CHF 125.00 | TVA 8.1% : CHF 10.15 | Prix TTC : CHF 135.15
- IP payé au bûcheron : CHF 4.05 | **Décompte AFC : CHF 10.15 − 4.05 = CHF 6.10**

**Étape 3 — L'ébéniste** fabrique une armoire et la vend à un magasin.
- Prix de vente HT : CHF 250.00 | TVA 8.1% : CHF 20.25 | Prix TTC : CHF 270.25
- IP payé à la scierie : CHF 10.15 | **Décompte AFC : CHF 20.25 − 10.15 = CHF 10.10**

**Étape 4 — Le magasin** vend l'armoire au consommateur final.
- Prix de vente HT : CHF 400.00 | TVA 8.1% : CHF 32.40 | Prix TTC : CHF 432.40
- IP payé à l'ébéniste : CHF 20.25 | **Décompte AFC : CHF 32.40 − 20.25 = CHF 12.15**

**Total TVA encaissée par l'AFC : 4.05 + 6.10 + 10.10 + 12.15 = CHF 32.40**

> Ce montant correspond exactement à la TVA payée par le consommateur final sur le prix de vente de CHF 400. L'AFC a récupéré la totalité de l'impôt grâce aux décomptes périodiques des entreprises, sans aucun contact direct avec le consommateur.

---

## 4. La TVA n'est ni une charge ni un produit

C'est le principe comptable fondamental de la TVA : elle est un poste transitoire du bilan. Elle ne modifie pas le résultat de l'entreprise.

- La TVA collectée sur les ventes → **Passif du bilan** : compte 2200 TVA Due (dette envers l'AFC)
- La TVA payée sur les achats → **Actif du bilan** : compte 1170 ou 1171 IP (créance sur l'AFC)
- Les comptes de charges (4xxx) et de produits (3xxx) n'enregistrent que les montants **hors taxe**

Exception importante : si l'entreprise réalise des prestations exclues du champ de l'impôt sans avoir opté pour leur imposition, elle ne peut pas récupérer l'IP — la TVA devient alors définitivement une **charge** pour elle.

---

## 5. L'impôt préalable — conditions de déduction

L'impôt préalable (IP) est la TVA que l'entreprise a payée à ses fournisseurs. Elle peut la déduire de la TVA due à l'AFC, à condition que :

- l'entreprise soit assujettie à la TVA,
- les achats soient utilisés pour des **prestations imposables** (et non exclues),
- la facture du fournisseur soit **conforme** : numéro TVA, taux d'imposition, montant de la TVA mentionnés (art. 26 LTVA).

> Si les achats financent des prestations exclues (ex. : une clinique qui achète du matériel pour des soins médicaux non imposés), le droit à la déduction de l'IP est perdu. La TVA est définitivement une charge.

---

## 6. Articles de loi essentiels

- **Art. 1 LTVA** — Objet et principes généraux
- **Art. 10 LTVA** — Assujettissement et seuils
- **Art. 18 LTVA** — Prestations imposables
- **Art. 21 LTVA** — Prestations exclues du champ de l'impôt
- **Art. 23 LTVA** — Prestations exonérées
- **Art. 25 LTVA** — Taux de l'impôt
- **Art. 26 LTVA** — Contenu des factures
- **Art. 28 ss LTVA** — Déduction de l'impôt préalable
- **Art. 35 et 36 LTVA** — Périodicité et forme du décompte

---

## 7. Points clés à retenir

- La TVA est supportée par le **consommateur final** — les entreprises sont de simples collecteurs.
- La TVA ne figure **jamais** dans les charges ou produits — elle est toujours au bilan.
- L'impôt préalable est une **créance sur l'AFC**, récupérée lors du décompte périodique.
- Prestations **exclues** → IP non déductible. Prestations **exonérées** → IP déductible (taux 0%).
- Une facture non conforme (sans numéro TVA, sans taux) ne donne **pas droit** à la déduction de l'IP.
`
};