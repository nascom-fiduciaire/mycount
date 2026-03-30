export const chapter = {
  id: '07-3-tva-due-et-impot-prealable',
  title: 'TVA — TVA due et impôt préalable',
  tag: 'tva',
  category: 'TVA suisse',
  content: `## 1. Les deux faces de la TVA pour l'entreprise

Dans le cadre de son activité, l'entreprise assujettie est en contact avec la TVA sous deux formes opposées :

- **La TVA due** : la taxe qu'elle facture à ses clients sur ses propres prestations. Elle la collecte pour le compte de l'État et doit la reverser à l'AFC.
- **L'impôt préalable (IP)** : la taxe qu'elle paie à ses fournisseurs sur ses propres achats. Elle a le droit de la récupérer auprès de l'AFC.

Le décompte TVA est la compensation périodique entre ces deux montants.

---

## 2. La TVA due — compte 2200

La TVA due est enregistrée au **passif du bilan** dans le compte **2200 TVA Due**. C'est une dette à court terme envers l'AFC.

Elle augmente chaque fois que l'entreprise émet une facture à un client (ou encaisse une vente au comptant), et diminue lors du décompte trimestriel.

**Exemple :** Vente de chocolats CHF 550'000 HT, taux 2.6%
- TVA due = 550'000 × 2.6% = **CHF 14'300**
- Écriture : Débit 1100 Clients / Crédit 3000 Ventes (HT) CHF 550'000
- Écriture : Débit 1100 Clients / Crédit 2200 TVA Due CHF 14'300

---

## 3. L'impôt préalable sur achats — compte 1170

Le compte **1170** regroupe la TVA payée aux fournisseurs de **marchandises et matières premières**. C'est une créance à court terme sur l'AFC, inscrite à l'actif du bilan.

**Exemple :** Achat de matières premières CHF 369'000 TTC (taux 2.6%)
- HT = 369'000 ÷ 1.026 = **CHF 359'649**
- IP = 369'000 − 359'649 = **CHF 9'351**
- Écriture : Débit 4000 Achats (HT) CHF 359'649 + Débit 1170 IP sur achats CHF 9'351 / Crédit 2000 Fournisseurs CHF 369'000

---

## 4. L'impôt préalable sur investissements et ACE — compte 1171

Le compte **1171** regroupe la TVA payée aux fournisseurs pour :
- les **investissements** (machines, matériel, mobilier, véhicules)
- les **autres charges d'exploitation (ACE)** : loyers, énergie, frais administratifs, publicité, etc.

Ce compte est séparé du compte 1170 pour permettre à l'AFC de distinguer l'IP sur achats et l'IP sur investissements dans le décompte officiel.

**Exemple :** Achat d'une machine CHF 53'850 TTC (taux 8.1%)
- HT = 53'850 ÷ 1.081 = **CHF 49'815**
- IP = 53'850 − 49'815 = **CHF 4'035**
- Écriture : Débit 1500 Actif immobilisé (HT) CHF 49'815 + Débit 1171 IP Inv./ACE CHF 4'035 / Crédit 2000 Fournisseurs CHF 53'850

---

## 5. Le décompte TVA — solde entre TVA due et IP

Le décompte trimestriel consiste à solder les trois comptes TVA :

TVA à reverser = 2200 TVA Due − 1170 IP achats − 1171 IP Inv./ACE

**Exemple — Chocolaterie Onyme :**
- TVA due (2200) : CHF 14'300
- IP sur achats (1170) : CHF 9'351
- IP sur inv./ACE (1171) : CHF 4'035
- **Solde à verser à l'AFC : 14'300 − 9'351 − 4'035 = CHF 914**

Écritures du décompte :
- Débit 2200 TVA Due / Crédit 1170 IP sur achats CHF 9'351
- Débit 2200 TVA Due / Crédit 1171 IP sur inv./ACE CHF 4'035
- Débit 2200 TVA Due / Crédit 1020 Banque CHF 914

Après le décompte, les trois comptes sont soldés à zéro.

---

## 6. Décompte favorable — l'AFC rembourse

Si les IP dépassent la TVA due (cas fréquent des exportateurs ou des entreprises en phase d'investissement), l'AFC rembourse le solde :

**Exemple :**
- TVA due : CHF 0 (exportations — taux 0%)
- IP sur achats : CHF 8'500
- Solde : l'AFC rembourse **CHF 8'500**

Écriture : Débit 2200 TVA Due / Crédit 1170 IP CHF 8'500 (solde négatif en 2200) puis Débit 1020 Banque / Crédit 2200 CHF 8'500

---

## 7. Conditions de déduction de l'impôt préalable

L'IP n'est pas déductible automatiquement. Trois conditions doivent être remplies (art. 28 LTVA) :

1. L'entreprise est **assujettie** à la TVA.
2. Les achats sont utilisés pour des **prestations imposables** (pas exclues).
3. La facture du fournisseur est **conforme** : numéro TVA, taux applicable, montant TVA clairement indiqués (art. 26 LTVA).

> Une facture reçue sans numéro TVA ne permet pas la déduction de l'IP, même si la TVA est visible en chiffres. L'AFC peut refuser la déduction lors d'un contrôle.

---

## 8. Affectation mixte — IP partiellement déductible

Si une entreprise réalise à la fois des prestations imposables et des prestations exclues, l'IP ne peut être déduit qu'en proportion de l'activité imposable (art. 30 LTVA).

**Exemple :** une fiduciaire réalise 80% de prestations imposables et 20% de prestations exclues (formations non imposées). Elle ne peut déduire que 80% de son IP.

---

## 9. Points clés à retenir

- **2200 TVA Due** = passif = TVA collectée sur les ventes → à reverser à l'AFC.
- **1170 IP sur achats** = actif = TVA payée sur achats de marchandises → récupérable.
- **1171 IP sur inv./ACE** = actif = TVA payée sur investissements et charges → récupérable.
- Le décompte solde ces trois comptes → versement ou remboursement AFC.
- Une facture fournisseur **non conforme** prive du droit à la déduction de l'IP.
- En cas d'activité **mixte** (imposable + exclue), l'IP n'est que partiellement déductible.
`
};