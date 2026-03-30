export const chapter = {
  id: '07-4-calculs-tva',
  title: 'TVA — Taux applicables et calculs HT / TTC',
  tag: 'tva',
  category: 'TVA suisse',
  content: `## 1. Les taux de TVA en vigueur (2024)

**Art. 25 LTVA — Taux de l'impôt :**

| Taux | Désignation | Champ d'application |
|---|---|---|
| **8.1%** | Taux normal | Toutes les prestations non mentionnées ci-dessous |
| **2.6%** | Taux réduit | Denrées alimentaires, eau, médicaments, livres, journaux |
| **3.8%** | Taux spécial hébergement | Nuitées à l'hôtel — avec ou sans petit-déjeuner |

---

## 2. Taux réduit 2.6% — détails

Le taux réduit s'applique à (art. 25 al. 2 LTVA) :
- Denrées alimentaires destinées à la consommation humaine (y compris eau du robinet, mais **pas** les boissons alcooliques ni le tabac)
- Médicaments
- Journaux, revues, livres sans caractère publicitaire (y compris les livres électroniques)

> **Attention :** les mêmes denrées alimentaires servies dans un restaurant ou un café sont taxées au **taux normal de 8.1%** (art. 25 al. 3 LTVA). Le contexte de consommation change le taux applicable.

---

## 3. Taux spécial 3.8% — hébergement

Le taux spécial s'applique aux prestations du secteur hôtelier : logement avec ou sans petit-déjeuner, même si le petit-déjeuner est facturé séparément. Il ne s'applique **pas** au restaurant de l'hôtel (taux normal).

---

## 4. Formules de calcul — maîtrise absolue requise

### Passage de HT à TTC

> **TTC = HT × (1 + taux)**

Exemples :
- CHF 100.00 HT × 1.081 = CHF 108.10 TTC (taux 8.1%)
- CHF 100.00 HT × 1.026 = CHF 102.60 TTC (taux 2.6%)
- CHF 100.00 HT × 1.038 = CHF 103.80 TTC (taux 3.8%)

### Passage de TTC à HT

> **HT = TTC ÷ (1 + taux)**

Exemples :
- CHF 108.10 TTC ÷ 1.081 = CHF 100.00 HT
- CHF 102.60 TTC ÷ 1.026 = CHF 100.00 HT
- CHF 103.80 TTC ÷ 1.038 = CHF 100.00 HT

### Calcul de la TVA seule depuis le TTC

> **TVA = TTC × taux ÷ (1 + taux)**

Exemples :
- CHF 108.10 × 0.081 ÷ 1.081 = **CHF 8.10** de TVA
- CHF 102.60 × 0.026 ÷ 1.026 = **CHF 2.60** de TVA

### Calcul de la TVA depuis le HT (plus simple)

> **TVA = HT × taux**

- CHF 100.00 × 8.1% = CHF 8.10
- CHF 100.00 × 2.6% = CHF 2.60

---

## 5. Tableau récapitulatif des diviseurs et multiplicateurs

| Taux | HT → TTC | TTC → HT | TVA sur HT |
|---|---|---|---|
| 8.1% | × 1.081 | ÷ 1.081 | × 0.081 |
| 2.6% | × 1.026 | ÷ 1.026 | × 0.026 |
| 3.8% | × 1.038 | ÷ 1.038 | × 0.038 |

---

## 6. Exemples pratiques complets

**Exemple 1 — Pharmacien (taux réduit 2.6%)**
- Ventes annuelles TTC : CHF 205'200
- HT = 205'200 ÷ 1.026 = **CHF 200'000**
- TVA due = 205'200 − 200'000 = **CHF 5'200** (ou 200'000 × 2.6%)

**Exemple 2 — Hôtel (taux hébergement 3.8%)**
- Nuitées annuelles HT : CHF 350'000
- TTC = 350'000 × 1.038 = **CHF 363'300**
- TVA due = 350'000 × 3.8% = **CHF 13'300**

**Exemple 3 — Restaurant (taux normal 8.1%)**
- CA mensuel HT : CHF 48'000
- TVA mensuelle = 48'000 × 8.1% = **CHF 3'888**
- CA mensuel TTC = 48'000 × 1.081 = **CHF 51'888**

**Exemple 4 — Facture avec taux mixtes**
Un traiteur facture à un client : livraison de repas CHF 300 HT (taux 2.6%) + service de décoration CHF 100 HT (taux 8.1%).
- TVA sur repas = 300 × 2.6% = CHF 7.80
- TVA sur décoration = 100 × 8.1% = CHF 8.10
- Total facture TTC = 400 + 7.80 + 8.10 = **CHF 415.90**

La facture doit mentionner les deux taux séparément (art. 26 al. 2 let. f LTVA).

---

## 7. Erreurs fréquentes de calcul

> **Erreur classique :** pour passer de TTC à HT, certains déduisent simplement le taux.
> CHF 108.10 − 8.1% = CHF 99.34 ← **FAUX**
> La formule correcte est : 108.10 ÷ 1.081 = **CHF 100.00**

> **Explication :** le taux de TVA s'applique sur le HT, pas sur le TTC. 8.1% de CHF 100 = CHF 8.10. Mais 8.1% de CHF 108.10 = CHF 8.76 ← incorrect.

---

## 8. Points clés à retenir

- Trois taux en vigueur : **8.1%** (normal), **2.6%** (réduit), **3.8%** (hébergement).
- Denrées alimentaires vendues en magasin = **2.6%** / servies au restaurant = **8.1%**.
- Formule clé TTC → HT : **diviser par (1 + taux)** — ne jamais soustraire le taux directement.
- Formule clé HT → TVA : **multiplier par le taux**.
- En cas de taux mixtes sur une même facture, mentionner **chaque taux séparément** sur la facture.
`
};