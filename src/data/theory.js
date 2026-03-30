export const theoryChapters = [
  {
    id: 'intro',
    title: 'Introduction à la comptabilité',
    icon: '📘',
    tag: 'base',
    content: `# Introduction à la comptabilité

## Qu'est-ce que la comptabilité ?

La comptabilité est le **système d'enregistrement, de classification et de synthèse** des opérations financières d'une entreprise. Elle permet de produire des informations fiables pour la prise de décision.

En Suisse, les obligations comptables sont définies par le **Code des obligations (CO)**, notamment aux articles 957 et suivants.

---

## Les acteurs

- **L'entreprise** : tient sa comptabilité et produit ses comptes annuels
- **Le fiduciaire** : assiste, contrôle, établit les comptes pour les clients
- **L'autorité fiscale** : utilise les comptes comme base d'imposition

---

## Les principes fondamentaux

### Principe de la partie double
Chaque opération est enregistrée **deux fois** : au débit d'un compte et au crédit d'un autre. Le total des débits est toujours égal au total des crédits.

### Principe de continuité
On suppose que l'entreprise **continue son activité** dans un avenir prévisible.

### Principe de prudence
Les **pertes probables** sont comptabilisées dès qu'elles sont prévisibles. Les profits ne sont reconnus que lorsqu'ils sont réalisés.

### Principe d'annualité
Les comptes sont établis sur une **période de 12 mois** (exercice comptable).

---

## Les documents comptables principaux

1. **Le journal** : enregistrement chronologique de toutes les opérations
2. **Le grand-livre** : regroupement par compte
3. **Le bilan** : photographie du patrimoine à une date donnée
4. **Le compte de résultat** : résumé des produits et charges sur la période

---

## Équation fondamentale

> **Actif = Passif + Capitaux propres**

Ou encore : **Actif = Dettes + Fonds propres**

Cette équation est toujours vraie. Si elle ne l'est pas, il y a une erreur.
`
  },
  {
    id: 'bilan',
    title: 'Le bilan',
    icon: '⚖️',
    tag: 'base',
    content: `# Le bilan

## Définition

Le bilan est un **document de synthèse** qui présente la situation patrimoniale de l'entreprise à une date précise (généralement le 31 décembre).

Il se compose de deux parties :
- **L'actif** (ce que l'entreprise possède)
- **Le passif** (ce que l'entreprise doit + les fonds propres)

> La règle d'or : **Total Actif = Total Passif**

---

## Structure de l'actif

### Actif circulant (court terme)
- Liquidités (caisse, banque, CCP)
- Débiteurs (créances clients)
- Stocks
- Actifs transitoires (charges payées d'avance)

### Actif immobilisé (long terme)
- Immobilisations corporelles (machines, véhicules, immeubles)
- Immobilisations incorporelles (logiciels, brevets)
- Immobilisations financières (participations)

---

## Structure du passif

### Capitaux étrangers à court terme (< 1 an)
- Créanciers fournisseurs
- Dettes bancaires à court terme
- Passifs transitoires (produits reçus d'avance, charges à payer)
- TVA due
- Charges sociales à payer

### Capitaux étrangers à long terme (> 1 an)
- Emprunts bancaires à long terme
- Hypothèques

### Capitaux propres
- Capital-actions / capital social
- Réserves
- Bénéfice / perte de l'exercice

---

## Exemple de bilan simplifié

| **ACTIF** | CHF | **PASSIF** | CHF |
|---|---|---|---|
| Caisse | 2'000 | Créanciers | 15'000 |
| Banque | 48'000 | Emprunt banque | 50'000 |
| Débiteurs | 35'000 | Capital | 100'000 |
| Stock | 20'000 | Réserves | 10'000 |
| Mobilier | 30'000 | Bénéfice | 10'000 |
| **Total** | **185'000** | **Total** | **185'000** |

---

## Points de vigilance

- Le bilan **s'équilibre toujours** — si ce n'est pas le cas, il y a une erreur
- Les actifs sont classés du **moins liquide au plus liquide** (ou l'inverse selon la présentation)
- Le résultat de l'exercice **figure au passif** (bénéfice = augmentation des fonds propres)
`
  },
  {
    id: 'resultat',
    title: 'Compte de résultat',
    icon: '📊',
    tag: 'base',
    content: `# Le compte de résultat

## Définition

Le compte de résultat présente l'ensemble des **produits et des charges** d'un exercice comptable. Il détermine le **résultat net** (bénéfice ou perte).

> **Résultat = Produits − Charges**

---

## Structure

### Produits (recettes)
- Chiffre d'affaires (ventes de biens et services)
- Produits financiers (intérêts reçus)
- Produits exceptionnels

### Charges (dépenses)
- Achats de marchandises / matières
- Charges de personnel (salaires + charges sociales)
- Loyer, électricité, assurances
- Amortissements
- Charges financières (intérêts payés)

---

## Résultat net

| Cas | Résultat |
|---|---|
| Produits > Charges | **Bénéfice** ✅ |
| Charges > Produits | **Perte** ❌ |

---

## Important : HT ou TTC ?

> En comptabilité suisse (méthode effective TVA), les **produits et charges sont enregistrés hors taxe (HT)**. La TVA est comptabilisée séparément.

---

## Lien avec le bilan

Le résultat net calculé dans le compte de résultat **est reporté au bilan** dans les capitaux propres :
- **Bénéfice** → augmente les fonds propres
- **Perte** → diminue les fonds propres
`
  },
  {
    id: 'comptes',
    title: 'Les comptes',
    icon: '🗂️',
    tag: 'base',
    content: `# Les comptes

## Principe de la partie double

Chaque écriture comptable touche **au moins deux comptes** : un compte est débité, un autre est crédité. Le total débit = total crédit.

---

## Le compte en T

Un compte se représente en T :

\`\`\`
          NOM DU COMPTE
    ┌─────────┬─────────┐
    │  DÉBIT  │ CRÉDIT  │
    └─────────┴─────────┘
\`\`\`

### Règles de fonctionnement

| Type de compte | Augmentation | Diminution |
|---|---|---|
| **Actif** | Débit | Crédit |
| **Passif / Fonds propres** | Crédit | Débit |
| **Charges** | Débit | Crédit |
| **Produits** | Crédit | Débit |

---

## Mnémotechnique

> **A**ctif → **A**ugmente au **D**ébit  
> **P**assif → **P**aye au **C**rédit (augmente au crédit)

---

## Plan comptable suisse (PME)

Les comptes sont organisés par classes :

| Classe | Contenu |
|---|---|
| **1** | Actif |
| **2** | Passif (dettes + fonds propres) |
| **3** | Produits |
| **4** | Charges de matières et marchandises |
| **5** | Charges de personnel |
| **6** | Autres charges d'exploitation |
| **7** | Résultats hors exploitation |
| **8** | Résultats exceptionnels et hors période |
| **9** | Clôture |

---

## Comptes fréquents en fiduciaire

| Compte | Description |
|---|---|
| 1000 | Caisse |
| 1020 | Banque |
| 1100 | Débiteurs |
| 2000 | Créanciers |
| 2200 | TVA due |
| 1170 | Impôt préalable |
| 2270 | Charges sociales à payer |
| 3000 | Chiffre d'affaires |
| 4000 | Achats de marchandises |
| 5000 | Salaires |
`
  },
  {
    id: 'journal',
    title: 'Journal comptable',
    icon: '📝',
    tag: 'base',
    content: `# Le journal comptable

## Définition

Le journal est le **registre chronologique** de toutes les opérations. Chaque ligne (écriture) respecte la règle de la partie double.

---

## Format d'une écriture

| Date | Compte débité | Compte crédité | Libellé | Débit | Crédit |
|---|---|---|---|---|---|
| 01.03 | 1020 Banque | 3000 Produits | Encaissement client | 10'810 | 10'000 |
| 01.03 | | 2200 TVA due | TVA 8.1% | | 810 |

---

## Règles de base

1. **Débit à gauche, crédit à droite**
2. **Total débit = Total crédit** pour chaque écriture
3. **Libellé clair** pour identifier l'opération
4. **Pièce justificative** obligatoire (facture, ticket, extrait bancaire)

---

## Écritures types

### Vente avec TVA (méthode effective)
- **Débit** Débiteurs (TTC)
- **Crédit** Produits (HT)
- **Crédit** TVA due

### Achat avec TVA (méthode effective)
- **Débit** Charges/Achats (HT)
- **Débit** Impôt préalable
- **Crédit** Créanciers (TTC)

### Encaissement client
- **Débit** Banque
- **Crédit** Débiteurs

### Paiement fournisseur
- **Débit** Créanciers
- **Crédit** Banque

---

## Postes ouverts

En fiduciaire, on utilise systématiquement les comptes **Débiteurs** et **Créanciers** (postes ouverts), même pour les opérations au comptant — cela permet de suivre précisément qui doit quoi.
`
  },
  {
    id: 'tva-principes',
    title: 'TVA — Principes fondamentaux',
    icon: '🔵',
    tag: 'tva',
    content: `# TVA — Principes fondamentaux

## Définition et logique générale

La taxe sur la valeur ajoutée (TVA) est un **impôt indirect sur la consommation**. Elle est supportée, en définitive, par le consommateur final.

Les entreprises assujetties agissent comme **collecteurs** : elles facturent la TVA à leurs clients, déduisent (sous conditions) la TVA supportée sur leurs achats, puis versent à l'État le solde.

> **La TVA n'est pas un revenu de l'entreprise.**

---

## TVA due vs Impôt préalable

| | TVA due | Impôt préalable |
|---|---|---|
| **Sur quoi** | Ventes / prestations | Achats / charges |
| **Nature comptable** | Dette envers l'État (passif) | Créance sur l'État (actif) |
| **Compte** | 2200 | 1170 |

---

## Taux de TVA en Suisse (2024)

| Taux | % | Application |
|---|---|---|
| **Normal** | 8.1% | Prestations courantes |
| **Réduit** | 2.6% | Denrées alimentaires, médicaments, livres, journaux |
| **Spécial hébergement** | 3.8% | Nuitées hôtelières |

> Dans les calculs, on utilise toujours le taux en forme décimale : 8.1% = 0.081

---

## Assujettissement

Une entreprise devient assujettie lorsqu'elle dépasse **CHF 100'000** de chiffre d'affaires imposable par an.

En dessous de ce seuil : assujettissement volontaire possible (intéressant si beaucoup d'impôt préalable à récupérer).

---

## Opérations imposables, exclues, exonérées

| Type | TVA facturée | Impôt préalable déductible |
|---|---|---|
| **Imposable** | Oui | Oui |
| **Exclue** (santé, assurances, formation...) | Non | Non |
| **Exonérée** (exportations...) | Non | Oui |

> **Point clé** : la nature de l'opération détermine le droit à la déduction de l'impôt préalable. C'est là que se situent souvent les erreurs.
`
  },
  {
    id: 'tva-calculs',
    title: 'TVA — Calculs HT / TTC',
    icon: '🔢',
    tag: 'tva',
    content: `# TVA — Calculs HT / TTC

## Formules essentielles

### Si le montant est HT (hors taxe)

\`\`\`
TVA = HT × taux
TTC = HT × (1 + taux)
\`\`\`

**Exemple (taux 8.1%) :**
- HT : CHF 10'000.00
- TVA : 10'000 × 0.081 = **CHF 810.00**
- TTC : 10'000 + 810 = **CHF 10'810.00**

---

### Si le montant est TTC (TVA incluse)

\`\`\`
HT = TTC ÷ (1 + taux)
TVA = TTC − HT
\`\`\`

**Exemple (taux 8.1%) :**
- TTC : CHF 10'810.00
- HT : 10'810 ÷ 1.081 = **CHF 10'000.00**
- TVA : 10'810 − 10'000 = **CHF 810.00**

---

## Tableau récapitulatif

| Taux | Diviseur TTC→HT | Multiplicateur HT→TTC |
|---|---|---|
| 8.1% | 1.081 | × 1.081 |
| 2.6% | 1.026 | × 1.026 |
| 3.8% | 1.038 | × 1.038 |

---

## Erreurs fréquentes

❌ Calculer la TVA en divisant TTC par le taux (faux !)  
✅ Toujours diviser TTC par **(1 + taux)**

❌ Enregistrer le montant TTC comme chiffre d'affaires  
✅ Le chiffre d'affaires = **HT uniquement**

---

## Décompte TVA — Solde à payer

> **Solde TVA = TVA due (ventes) − Impôt préalable (achats)**

- Solde **positif** → TVA à verser à l'État (AFC)
- Solde **négatif** → TVA à récupérer (créance)
`
  },
  {
    id: 'tva-comptabilisation',
    title: 'TVA — Comptabilisation',
    icon: '✏️',
    tag: 'tva',
    content: `# TVA — Comptabilisation (méthode effective)

## Principe

En méthode effective :
- Les **produits/ventes** sont comptabilisés **HT**
- Les **charges/achats** sont comptabilisés **HT**
- La **TVA due** et l'**impôt préalable** sont comptabilisés **séparément**
- Les **débiteurs/créanciers** sont toujours au montant **TTC**

---

## Écriture 1 — Facture client (vente)

Données : Prestation HT 10'000 + TVA 8.1% 810 = TTC 10'810

| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 1100 Débiteurs | Facture client n°X | **10'810** | |
| 3000 Produits | Prestation HT | | **10'000** |
| 2200 TVA due | TVA 8.1% | | **810** |

---

## Écriture 2 — Encaissement client

| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 1020 Banque | Paiement client n°X | **10'810** | |
| 1100 Débiteurs | Apurement débiteur | | **10'810** |

---

## Écriture 3 — Facture fournisseur (achat)

Données : Achat HT 4'000 + TVA 8.1% 324 = TTC 4'324

| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 4000 Achats | Achat marchandises HT | **4'000** | |
| 1170 Impôt préalable | TVA récupérable | **324** | |
| 2000 Créanciers | Facture fournisseur n°Y | | **4'324** |

---

## Écriture 4 — Paiement fournisseur

| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 2000 Créanciers | Apurement créancier | **4'324** | |
| 1020 Banque | Paiement fournisseur | | **4'324** |

---

## Décompte TVA — Écriture de clôture

Sur la période : TVA due 810 − Impôt préalable 324 = **Solde 486 à payer**

| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 2200 TVA due | Solde TVA due | **810** | |
| 1170 Impôt préalable | Impôt préalable | | **324** |
| 2201 Décompte TVA AFC | Solde à payer | | **486** |

Puis au paiement :

| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 2201 Décompte TVA AFC | Paiement AFC | **486** | |
| 1020 Banque | | | **486** |
`
  },
  {
    id: 'salaires-principes',
    title: 'Salaires — Principes',
    icon: '👤',
    tag: 'salaires',
    content: `# Salaires — Principes fondamentaux

## Les trois niveaux de salaire

| Niveau | Définition |
|---|---|
| **Salaire brut** | Montant convenu dans le contrat de travail |
| **Salaire net** | Ce que reçoit l'employé (brut − déductions employé) |
| **Coût employeur** | Ce que paie l'entreprise (brut + charges patronales) |

---

## Schéma général

\`\`\`
SALAIRE BRUT
  − Déductions employé (AVS/AI/APG, AC, AM, LPP)
  − Impôt à la source (si applicable)
= SALAIRE NET (versé à l'employé)

SALAIRE BRUT
  + Charges patronales (AVS/AI/APG, AC, LPP, LAA, AF)
= COÛT EMPLOYEUR TOTAL
\`\`\`

---

## Les assurances sociales

### Déductions employé (prélevées sur le brut)

| Assurance | Taux employé (env.) | Base |
|---|---|---|
| AVS/AI/APG | 5.30% | Salaire brut |
| AC (Assurance chômage) | 1.10% | Jusqu'à CHF 148'200 |
| AM (Assurance maternité) | inclus AVS | — |
| LPP (2e pilier) | Variable | Salaire coordonné |

### Charges patronales (payées en plus par l'employeur)

| Assurance | Taux employeur (env.) | Note |
|---|---|---|
| AVS/AI/APG | 5.30% | Identique à l'employé |
| AC | 1.10% | Identique à l'employé |
| LPP | Variable | Souvent ≥ part employé |
| LAA (accidents) | Variable | Selon branche/risque |
| AF (allocations familiales) | Variable | Selon canton |

> **Important** : les taux sont approximatifs et varient selon les caisses, les années et les situations. Toujours vérifier les taux en vigueur.

---

## Exemple simplifié

Salaire brut : CHF 6'000

| Élément | Montant |
|---|---|
| Salaire brut | 6'000 |
| − AVS/AI/APG employé (5.30%) | − 318 |
| − AC (1.10%) | − 66 |
| − LPP employé (ex. 5%) | − 300 |
| **= Salaire net** | **5'316** |
| + AVS/AI/APG employeur (5.30%) | + 318 |
| + AC (1.10%) | + 66 |
| + LPP employeur (ex. 6%) | + 360 |
| + LAA/AF (ex. 3%) | + 180 |
| **= Coût employeur total** | **6'924** |
`
  },
  {
    id: 'salaires-comptabilisation',
    title: 'Salaires — Comptabilisation',
    icon: '💼',
    tag: 'salaires',
    content: `# Salaires — Comptabilisation

## Vue d'ensemble

La comptabilisation des salaires s'effectue en **3 étapes** :
1. Enregistrement du salaire brut et des déductions
2. Versement du salaire net à l'employé
3. Versement des charges sociales aux caisses

---

## Écriture 1 — Comptabilisation du salaire

Exemple : Brut 6'000, déductions employé 684, net 5'316

| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 5000 Salaires | Salaire brut | **6'000** | |
| 2270 Charges sociales à payer | Déductions employé | | **684** |
| 2160 Salaires à payer | Net à verser | | **5'316** |

---

## Écriture 2 — Versement salaire net

| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 2160 Salaires à payer | Virement salaire | **5'316** | |
| 1020 Banque | | | **5'316** |

---

## Écriture 3 — Charges patronales

Part employeur (ex. 924 pour notre exemple) :

| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 5800 Charges sociales | Part patronale | **924** | |
| 2270 Charges sociales à payer | À verser aux caisses | | **924** |

---

## Écriture 4 — Versement aux caisses

Total à verser (déductions employé + part employeur) = 684 + 924 = **1'608**

| Compte | Libellé | Débit | Crédit |
|---|---|---|---|
| 2270 Charges sociales à payer | Paiement caisses | **1'608** | |
| 1020 Banque | | | **1'608** |

---

## Points de vigilance

- Les **salaires sont enregistrés bruts** en charges
- Les **déductions employé ne sont pas une charge** supplémentaire (elles sont dans le brut)
- Les **charges patronales sont une charge supplémentaire** pour l'employeur
- Le compte **2270** regroupe toutes les charges sociales à verser (employé + employeur)
`
  }
];