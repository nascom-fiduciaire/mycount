export const chapter = {
  id: '07-5-moment-imposition-et-methodes-decompte',
  title: 'TVA — Décompte TVA : périodicité et méthodes',
  tag: 'tva',
  category: 'TVA suisse',
  content: `## 1. Périodicité du décompte TVA

**Art. 35 al. 1 LTVA :**
> Le décompte TVA est en règle générale établi **trimestriellement** pour la méthode effective, et **semestriellement** pour la méthode du taux de la dette fiscale nette.

En cas de demande fondée, l'AFC peut autoriser d'autres périodes (mensuelle notamment pour les assujettis qui remboursent régulièrement).

---

## 2. Base du décompte : convenues ou reçues

**Art. 39 al. 1 LTVA :**
> Par défaut, le décompte est établi sur la base des **contre-prestations convenues** — c'est-à-dire les montants facturés, qu'ils aient été payés ou non.

Cela signifie que la TVA est due dès l'émission de la facture, même si le client n'a pas encore payé. C'est le système le plus courant — il correspond à la comptabilité en postes ouverts.

**Art. 39 al. 2 LTVA :**
> Sur demande motivée, l'AFC peut autoriser le décompte selon les **contre-prestations reçues** — c'est-à-dire uniquement les montants effectivement encaissés.

Ce système est avantageux pour les entreprises qui accordent de longs délais de paiement — la TVA n'est due qu'à l'encaissement. Mais il nécessite une comptabilité de trésorerie plus rigoureuse.

---

## 3. Délais de dépôt et de paiement

Le décompte TVA et le paiement doivent être remis à l'AFC dans les **60 jours** suivant la fin de la période de décompte.

En cas de retard, des intérêts moratoires sont dus (taux fixé par le Conseil fédéral). Un retard répété peut entraîner des amendes.

---

## 4. Les deux méthodes de décompte

### Méthode effective (art. 36 LTVA)

La méthode effective consiste à déterminer précisément :
- la TVA due sur les ventes (crédit du compte 2200),
- l'impôt préalable déductible sur les achats et investissements (débits des comptes 1170 et 1171),
- et à calculer le solde.

C'est la méthode de droit commun — elle s'applique à toutes les entreprises. Elle est plus exigeante administrativement mais donne un résultat exact.

**Structure du décompte effectif :**
- Chiffre d'affaires imposable (HT) par taux
- TVA due calculée par taux
- Impôt préalable sur achats de marchandises
- Impôt préalable sur investissements et autres charges d'exploitation
- Solde = TVA due − IP total

### Méthode du taux de la dette fiscale nette (art. 37 LTVA)

La méthode DFN est une méthode simplifiée réservée aux petites entreprises. Au lieu de comptabiliser séparément la TVA sur chaque facture, on applique un taux forfaitaire au chiffre d'affaires TTC.

**Conditions (art. 37 al. 1 LTVA) :**
- CA annuel ≤ CHF 5'024'000
- Montant d'impôt calculé ≤ CHF 108'000

**Formule :** TVA due = CA TTC × taux DFN

Le taux DFN est fixé par l'AFC selon la branche d'activité. Il est inférieur au taux légal car il tient compte d'un impôt préalable moyen de la branche.

---

## 5. Exemple comparatif des deux méthodes

**Situation :** Chocolaterie Onyme, CA HT CHF 550'000 (taux 2.6%), achats CHF 369'000 TTC (taux 2.6%), investissements CHF 53'850 TTC (taux 8.1%).

**Méthode effective :**
- TVA due : 550'000 × 2.6% = CHF 14'300
- IP sur achats : 369'000 × 0.026 ÷ 1.026 = CHF 9'351
- IP sur investissements : 53'850 × 0.081 ÷ 1.081 = CHF 4'035
- **Solde à verser : 14'300 − 9'351 − 4'035 = CHF 914**

**Méthode DFN (taux DFN 0.1%) :**
- CA TTC = 550'000 × 1.026 = CHF 564'300
- TVA due = 564'300 × 0.1% = **CHF 564.30**

> Dans cet exemple, la méthode DFN est nettement plus avantageuse (CHF 564 vs CHF 914). Cela s'explique par le fait que le taux DFN de 0.1% pour la fabrication alimentaire tient compte d'un IP très élevé dans cette branche.

---

## 6. Engagement minimum — méthode DFN

**Art. 37 al. 4 LTVA :**
L'assujetti qui choisit la méthode DFN doit l'appliquer pendant **au moins une période fiscale complète** (une année). Il peut revenir à la méthode effective sur demande à l'AFC, mais pas en cours d'année.

---

## 7. Points clés à retenir

- Méthode effective → décompte **trimestriel** | Méthode DFN → décompte **semestriel**.
- Par défaut, décompte sur **contre-prestations convenues** (facturées) — même si pas encore payées.
- Sur autorisation AFC : décompte sur **contre-prestations reçues** (encaissées).
- Le décompte et le paiement sont à remettre dans les **60 jours** après la fin de la période.
- Méthode DFN : conditions CA ≤ CHF 5'024'000 et impôt ≤ CHF 108'000 — engagement minimum 1 an.
- Le choix de la méthode a un impact financier direct — comparer les deux avant de choisir.
`
};