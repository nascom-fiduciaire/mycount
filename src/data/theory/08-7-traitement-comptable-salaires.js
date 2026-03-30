export const chapter = {
  id: 'sal-07',
  title: `Traitement comptable des salaires`,
  tag: 'salaires',
  icon: '👤',
  category: 'Salaires',
  content: `## 1. Cadre et hypothèses de départ

Afin d’illustrer le traitement comptable des salaires,
les hypothèses suivantes sont retenues :

- employé à 100 %
- salaire mensuel brut : CHF 6’000.–
- pas d’impôt à la source
- pas d’allocations familiales versées via le salaire
- méthode : contre-prestations convenues
- comptabilité d’engagement
- plan comptable PME suisse

Les taux utilisés sont indicatifs mais réalistes
(la logique prime sur les taux exacts).

---

## 2. Structure économique du salaire (rappel)

À partir du salaire brut de CHF 6’000.– :

- déductions sociales employé
- salaire net versé
- charges sociales employeur
- coût total du personnel

La comptabilité doit refléter
chacune de ces composantes distinctement.

---

## 3. Bases de calcul (exemple chiffré)

### 3.1 Déductions sociales côté employé (exemple)

| Déduction | Base | Taux indicatif | Montant |
|---------|------|---------------|---------|
| AVS / AI / APG | 6’000 | 5.3 % | 318.00 |
| AC | 6’000 | 1.1 % | 66.00 |
| LPP | selon plan | forfait | 300.00 |
| LAA non prof. | 6’000 | 1.0 % | 60.00 |

**Total déductions employé** : CHF 744.00  

**Salaire net à payer** :  
6’000.00 − 744.00 = **CHF 5’256.00**

---

### 3.2 Charges sociales côté employeur (exemple)

| Charge | Base | Taux indicatif | Montant |
|------|------|---------------|---------|
| AVS / AI / APG | 6’000 | 5.3 % | 318.00 |
| AC | 6’000 | 1.1 % | 66.00 |
| LPP | selon plan | forfait | 300.00 |
| LAA prof. | 6’000 | 0.8 % | 48.00 |
| Allocations familiales | 6’000 | 2.5 % | 150.00 |

**Total charges employeur** : CHF 882.00  

**Coût total du personnel** :  
6’000.00 + 882.00 = **CHF 6’882.00**

---

## 4. MÉTHODE A — Comptabilisation via comptes de bilan (méthode professionnelle)

### 4.1 Comptabilisation du salaire brut

Constatation de la charge salariale :

Débit  
- 5000 Charges de salaires : 6’000.00  

Crédit  
- 2010 Dettes envers le personnel : 6’000.00  

---

### 4.2 Comptabilisation des déductions sociales employé

Transfert des retenues vers les dettes sociales :

Débit  
- 2010 Dettes envers le personnel : 744.00  

Crédit  
- 2030 Dettes AVS / AI / APG : 318.00  
- 2031 Dettes AC : 66.00  
- 2032 Dettes LPP (part employé) : 300.00  
- 2033 Dettes LAA NP : 60.00  

Le solde du compte 2010 correspond désormais
au salaire net à payer (CHF 5’256.00).

---

### 4.3 Comptabilisation des charges sociales employeur

Constatation des charges sociales employeur :

Débit  
- 5700 Charges sociales employeur : 882.00  

Crédit  
- 2030 Dettes AVS / AI / APG : 318.00  
- 2031 Dettes AC : 66.00  
- 2032 Dettes LPP (part employeur) : 300.00  
- 2034 Dettes LAA prof. : 48.00  
- 2035 Dettes allocations familiales : 150.00  

---

### 4.4 Paiement du salaire net

Versement du salaire au collaborateur :

Débit  
- 2010 Dettes envers le personnel : 5’256.00  

Crédit  
- 1020 Banque : 5’256.00  

---

### 4.5 Paiement des charges sociales

Lors du paiement aux différentes caisses :

Débit  
- 2030 Dettes AVS / AI / APG : 636.00  
- 2031 Dettes AC : 132.00  
- 2032 Dettes LPP : 600.00  
- 2033 Dettes LAA NP : 60.00  
- 2034 Dettes LAA prof. : 48.00  
- 2035 Dettes allocations familiales : 150.00  

Crédit  
- 1020 Banque : 1’626.00  

---

## 5. MÉTHODE B — Comptabilisation directe en charges (comparaison)

### 5.1 Écriture simplifiée possible

Débit  
- 5000 Charges de salaires (net) : 5’256.00  
- 5700 Charges sociales employeur : 882.00  

Crédit  
- 1020 Banque : 6’138.00  

Les cotisations sociales sont ensuite payées séparément.

---

### 5.2 Limites de cette méthode

- aucune visibilité des dettes sociales,
- impossible de contrôler la cohérence avec les décomptes,
- mauvaise lecture du bilan,
- non conforme à une logique ERP.

Cette méthode est **tolérée** uniquement
dans des contextes très simplifiés,
mais **non recommandée**.

---

## 6. Lecture du bilan et du résultat

### Résultat
- Charges de salaires : 6’000.00
- Charges sociales employeur : 882.00

### Bilan (avant paiements)
- Dettes envers le personnel : 5’256.00
- Dettes sociales : 1’626.00

La comptabilité reflète fidèlement
les obligations de l’entreprise.

---

## 7. Position dasn l'application

Dans l'application:
- la **méthode A est la norme**,
- la méthode B est présentée à titre comparatif,
- tout raisonnement pédagogique repose
  sur la comptabilité d’engagement
  et les postes ouverts.

---

## 8. Erreurs graves à éviter

- comptabiliser uniquement le salaire net,
- passer les charges sociales directement en banque,
- confondre charges et dettes,
- ignorer la période de rattachement,
- ne pas pouvoir reconstituer un salaire
  à partir du journal.

Ces erreurs sont **structurelles**
et inacceptables en pratique fiduciaire.`
};
