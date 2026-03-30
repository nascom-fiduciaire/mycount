export const chapter = {
  id: '07-6-traitement-comptable-tva',
  title: 'TVA — Traitement comptable complet',
  tag: 'tva',
  category: 'TVA suisse',
  content: `## 1. Les deux méthodes de comptabilisation

### Comptabilisation au net (méthode effective)
Chaque facture est saisie en séparant le montant HT (compte de charges ou produits) et la TVA (compte de bilan). C'est la méthode la plus rigoureuse.

### Comptabilisation au brut (méthode DFN)
Toutes les opérations sont enregistrées au montant TTC. Aucune séparation HT/TVA en cours d'année. La TVA n'est constatée qu'au moment du décompte semestriel.

---

## 2. Comptabilisation au net — méthode effective

### Ventes de marchandises ou prestations

**Exemple :** Vente de chocolats CHF 550'000 HT au taux 2.6% → TVA = CHF 14'300 → TTC = CHF 564'300

À la facturation :
- Débit 1100 Clients CHF 564'300 / Crédit 3000 Ventes (HT) CHF 550'000
- Débit 1100 Clients (inclus ci-dessus) / Crédit 2200 TVA Due CHF 14'300

À l'encaissement :
- Débit 1020 Banque CHF 564'300 / Crédit 1100 Clients CHF 564'300

### Achats de marchandises

**Exemple :** Achats CHF 369'000 TTC au taux 2.6% → HT = CHF 359'649 → IP = CHF 9'351

À réception de la facture :
- Débit 4000 Achats (HT) CHF 359'649 / Crédit 2000 Fournisseurs CHF 369'000
- Débit 1170 IP sur achats CHF 9'351 / Crédit 2000 Fournisseurs (inclus ci-dessus)

Au paiement :
- Débit 2000 Fournisseurs CHF 369'000 / Crédit 1020 Banque CHF 369'000

### Investissements et autres charges d'exploitation

**Exemple :** Machine CHF 53'850 TTC au taux normal 8.1% → HT = CHF 49'815 → IP = CHF 4'035

- Débit 1500 Actif immobilisé (HT) CHF 49'815 / Crédit 2000 Fournisseurs CHF 53'850
- Débit 1171 IP sur inv./ACE CHF 4'035 / Crédit 2000 Fournisseurs (inclus ci-dessus)

### Décompte TVA trimestriel

Solde = 14'300 − 9'351 − 4'035 = **CHF 914 à verser à l'AFC**

- Débit 2200 TVA Due CHF 9'351 / Crédit 1170 IP sur achats CHF 9'351
- Débit 2200 TVA Due CHF 4'035 / Crédit 1171 IP sur inv./ACE CHF 4'035
- Débit 2200 TVA Due CHF 914 / Crédit 1020 Banque CHF 914

Après ces écritures, les comptes 2200, 1170 et 1171 sont tous soldés à zéro.

---

## 3. Comptabilisation au brut — méthode DFN

### Ventes (enregistrées TTC)

- Débit 1020 Banque CHF 564'300 / Crédit 3000 Ventes (TTC) CHF 564'300

Le compte 3000 enregistre le montant TTC — aucune séparation TVA en cours d'année.

### Achats (enregistrés TTC)

- Débit 4000 Achats (TTC) CHF 369'000 / Crédit 1020 Banque CHF 369'000

### Investissements (enregistrés TTC)

- Débit 1500 Actif immobilisé (TTC) CHF 53'850 / Crédit 1020 Banque CHF 53'850

### Décompte TVA semestriel (taux DFN 0.1%)

TVA due = 564'300 × 0.1% = CHF 564.30

- Débit 3000 Ventes (TTC) CHF 564.30 / Crédit 2200 TVA Due CHF 564.30
- Débit 2200 TVA Due CHF 564.30 / Crédit 1020 Banque CHF 564.30

> Note : en méthode DFN, les comptes d'actifs immobilisés incluent la TVA dans leur valeur (TTC). L'amortissement se calcule donc sur une base TTC, légèrement plus élevée que la base HT.

---

## 4. Contenu des factures — rappel

**Art. 26 al. 2 LTVA — Mentions obligatoires :**
- Nom et numéro TVA du fournisseur
- Nom du destinataire
- Date ou période de la prestation
- Nature et volume de la prestation
- Montant de la contre-prestation
- Taux d'imposition applicable et montant de la TVA due

**Art. 57 OTVA :**
Pour les tickets de caisse jusqu'à CHF 400, le nom du destinataire n'est pas obligatoire.

---

## 5. Prestations à soi-même (art. 31 LTVA)

Lorsqu'un assujetti prélève des biens ou des services de son entreprise pour un usage privé, il doit décompter la TVA comme si c'était une vente.

**Exemple :** Un boulanger prélève CHF 500 de marchandises pour usage personnel. TVA = 500 × 2.6% = CHF 13.

- Débit 8500 Prélèvements privés (ou compte privé) CHF 13 / Crédit 1170 IP sur achats CHF 13

La TVA est comptabilisée comme une réduction de l'impôt préalable — le boulanger "rend" à l'AFC la TVA qu'il avait récupérée lors de l'achat des matières.

---

## 6. Points clés à retenir

- Méthode effective : chaque facture est saisie en **HT + TVA séparément** dans des comptes distincts.
- Méthode DFN : tout est saisi en **TTC** — la TVA n'est constatée qu'au décompte semestriel.
- Après chaque décompte, les comptes **2200, 1170 et 1171 doivent être soldés à zéro**.
- Les actifs immobilisés achetés en méthode DFN sont comptabilisés **TTC** → amortissement sur base TTC.
- Les prélèvements privés doivent être **déclarés et taxés** — ne pas les omettre.
- Sans facture conforme (numéro TVA manquant), **pas de déduction d'IP possible**.
`
};