export const chapter = {
  id: '06-operations-courantes',
  title: `Les opérations courantes`,
  tag: 'base',
  icon: '🔄',
  category: 'Pratique',
  content: `## 1. Définition des opérations courantes

Les opérations courantes regroupent l’ensemble des transactions
réalisées dans le cadre normal de l’activité d’une entreprise.

Elles constituent le cœur de la comptabilité quotidienne
et concernent principalement :
- les achats,
- les ventes,
- les paiements,
- les encaissements.

Ces opérations traduisent le cycle d’exploitation
et permettent de comprendre le fonctionnement économique
de l’entreprise.

---

## 2. Principe général retenu dans l’application

Dans MyCount, les opérations courantes sont traitées
selon la logique de la **comptabilité d’engagement**
et du **suivi des postes ouverts**.

Cela implique que :
- toute facture fournisseur génère une dette,
- toute facture client génère une créance,
- le paiement ou l’encaissement est enregistré séparément,
- la comptabilité reflète la réalité économique
  indépendamment des flux de trésorerie.

Cette logique correspond aux pratiques professionnelles,
aux ERP et aux principes comptables généralement admis.

---

## 3. Les achats de biens et de services

### 3.1 Réception d’une facture fournisseur

Lorsqu’une entreprise reçoit une facture fournisseur,
elle enregistre immédiatement :
- la charge ou l’actif concerné,
- la dette envers le fournisseur.

Cette écriture traduit l’existence d’une obligation
indépendamment du moment du paiement.

---

### 3.2 Impact comptable

La réception d’une facture fournisseur entraîne :
- une augmentation des charges ou de l’actif,
- une augmentation des dettes fournisseurs.

Le résultat de l’exercice est affecté
si la facture concerne une charge.

---

## 4. Le paiement des fournisseurs

### 4.1 Règlement d’une facture fournisseur

Lors du paiement d’une facture fournisseur,
l’entreprise solde la dette correspondante.

Le paiement n’a pas d’impact sur le résultat,
celui-ci ayant déjà été pris en compte
lors de la réception de la facture.

---

### 4.2 Impact comptable

Le paiement entraîne :
- une diminution des dettes fournisseurs,
- une diminution de la trésorerie.

Il s’agit d’un mouvement exclusivement bilantiel.

---

## 5. Les ventes de biens et de services

### 5.1 Émission d’une facture client

Lorsqu’une entreprise émet une facture client,
elle enregistre immédiatement :
- le produit correspondant,
- la créance envers le client.

Le produit est comptabilisé dès sa réalisation,
indépendamment du moment de l’encaissement.

---

### 5.2 Impact comptable

L’émission d’une facture client entraîne :
- une augmentation des produits,
- une augmentation des créances clients.

Le résultat de l’exercice est affecté
au moment de la facturation.

---

## 6. L’encaissement des créances clients

### 6.1 Encaissement d’une facture client

Lors de l’encaissement,
l’entreprise solde la créance correspondante.

L’encaissement n’a pas d’impact sur le résultat,
celui-ci ayant déjà été enregistré
lors de la facturation.

---

### 6.2 Impact comptable

L’encaissement entraîne :
- une augmentation de la trésorerie,
- une diminution des créances clients.

Il s’agit d’un mouvement du bilan.

---

## 7. Vision globale du cycle d’exploitation

Les opérations courantes s’inscrivent
dans un cycle économique cohérent :

1. réception d’une facture fournisseur,
2. enregistrement de la dette,
3. paiement du fournisseur,
4. émission d’une facture client,
5. enregistrement de la créance,
6. encaissement du client.

La compréhension de ce cycle est essentielle
pour analyser correctement la situation financière
et la performance de l’entreprise.

---

## 8. Erreurs conceptuelles fréquentes

Parmi les erreurs fréquemment rencontrées :

- confondre facture et paiement,
- raisonner uniquement en termes de trésorerie,
- enregistrer un paiement sans facture préalable,
- ne pas distinguer charges et mouvements bilantiels.

Ces erreurs traduisent une incompréhension
du cycle d’exploitation.

---

## 9. Lien avec les chapitres suivants

La maîtrise des opérations courantes permet
d’aborder des notions plus avancées,
notamment la TVA, les salaires
et les écritures de régularisation.

---

## 10. Exercices associés

Les exercices liés à ce chapitre visent à :
- analyser correctement des opérations courantes,
- identifier les comptes concernés,
- raisonner systématiquement en postes ouverts,
- comprendre l’impact sur le bilan et le résultat.`
};
