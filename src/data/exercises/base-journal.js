// Exercices — Journal comptable (cas complets multi-écritures)
// Plan comptable PME suisse · Méthode postes ouverts

export const baseJournalExercises = [

  {
    id: 'bj-01', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 2,
    title: 'Cycle d\'achat complet — Fournisseur Dupont SA',
    description: `L'entreprise commande des marchandises à Dupont SA. Voici le déroulement complet :
1. Le 02.03 : réception de la facture de Dupont SA
2. Le 10.03 : Dupont SA accorde un avoir partiel (retour d'une partie)
3. Le 25.03 : paiement du solde restant par virement bancaire`,
    note: 'Méthode postes ouverts : toutes les factures et avoirs passent par le compte Créanciers (2000), même si le paiement est rapide.',
    data: [
      { label: 'Facture Dupont SA du 02.03', value: "CHF 6'800.00 HT" },
      { label: 'Avoir du 10.03 (retour)', value: "CHF 800.00 HT" },
      { label: 'Solde payé le 25.03', value: "CHF 6'000.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '02.03 — Facture Dupont SA marchandises HT', debit: { num: '4200', label: 'Achats marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 6800 },
      { id: 'e2', libelle: '10.03 — Avoir Dupont SA retour marchandises', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '4200', label: 'Achats marchandises' }, amount: 800 },
      { id: 'e3', libelle: '25.03 — Paiement solde Dupont SA — virement', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 6000 },
    ],
  },

  {
    id: 'bj-02', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 2,
    title: 'Cycle de vente complet — Client Martin AG',
    description: `Fidulex Sàrl réalise une prestation pour Martin AG :
1. Le 05.04 : émission de la facture
2. Le 15.04 : Martin AG conteste une partie — avoir accordé
3. Le 30.04 : encaissement du solde par virement`,
    note: 'Les produits sont comptabilisés HT. La créance (Débiteurs) suit chaque mouvement.',
    data: [
      { label: 'Facture du 05.04', value: "CHF 9'500.00 HT" },
      { label: 'Avoir accordé le 15.04', value: "CHF 500.00 HT" },
      { label: 'Encaissement du 30.04', value: "CHF 9'000.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '05.04 — Facture Martin AG prestations HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Produits prestations' }, amount: 9500 },
      { id: 'e2', libelle: '15.04 — Avoir Martin AG — contestation partielle', debit: { num: '3400', label: 'Produits prestations' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 500 },
      { id: 'e3', libelle: '30.04 — Encaissement solde Martin AG', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 9000 },
    ],
  },

  {
    id: 'bj-03', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Mois de juin complet — 6 opérations',
    description: `Passez toutes les écritures du mois de juin pour Fidulex Sàrl :
1. 01.06 : Paiement loyer bureau
2. 03.06 : Réception facture téléphonie
3. 08.06 : Émission facture client Rossi SA
4. 15.06 : Paiement facture téléphonie
5. 22.06 : Encaissement Rossi SA
6. 28.06 : Paiement prime assurance RC`,
    data: [
      { label: '01.06 — Loyer bureau', value: "CHF 2'800.00" },
      { label: '03.06 — Téléphonie HT', value: "CHF 340.00" },
      { label: '08.06 — Facture Rossi SA HT', value: "CHF 4'200.00" },
      { label: '28.06 — Assurance RC', value: "CHF 620.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '01.06 — Loyer bureau juin', debit: { num: '6000', label: 'Loyers' }, credit: { num: '1020', label: 'Banque' }, amount: 2800 },
      { id: 'e2', libelle: '03.06 — Facture téléphonie HT', debit: { num: '6500', label: 'Charges admin/informatique' }, credit: { num: '2000', label: 'Créanciers' }, amount: 340 },
      { id: 'e3', libelle: '08.06 — Facture Rossi SA prestations HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Produits prestations' }, amount: 4200 },
      { id: 'e4', libelle: '15.06 — Paiement facture téléphonie', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 340 },
      { id: 'e5', libelle: '22.06 — Encaissement Rossi SA', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 4200 },
      { id: 'e6', libelle: '28.06 — Prime assurance RC', debit: { num: '6300', label: 'Assurances et taxes' }, credit: { num: '1020', label: 'Banque' }, amount: 620 },
    ],
  },

  {
    id: 'bj-04', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Acquisition et financement d\'un véhicule',
    description: `L'entreprise achète un véhicule utilitaire financé de manière mixte :
1. 10.05 : Réception facture garage — acompte banque + solde emprunt
2. 30.06 : Premier remboursement mensuel (capital + intérêts)`,
    note: 'L\'emprunt finance directement le solde au garage. Le remboursement mensuel touche capital ET intérêts séparément.',
    data: [
      { label: 'Prix véhicule HT', value: "CHF 38'000.00" },
      { label: 'Acompte banque', value: "CHF 18'000.00" },
      { label: 'Emprunt bancaire', value: "CHF 20'000.00" },
      { label: 'Remboursement capital/mois', value: "CHF 400.00" },
      { label: 'Intérêts du mois', value: "CHF 75.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '10.05 — Achat véhicule (acompte banque)', debit: { num: '1530', label: 'Parc de véhicules' }, credit: { num: '1020', label: 'Banque' }, amount: 38000, amountCredit: 18000, multiLine: true },
      { id: 'e1b', libelle: 'Financement emprunt bancaire', debit: null, credit: { num: '2300', label: 'Dettes à long terme' }, amount: null, amountCredit: 20000, isSubLine: true },
      { id: 'e2', libelle: '30.06 — Remboursement capital emprunt', debit: { num: '2300', label: 'Dettes à long terme' }, credit: { num: '1020', label: 'Banque' }, amount: 400 },
      { id: 'e3', libelle: '30.06 — Intérêts emprunt du mois', debit: { num: '6800', label: 'Charges financières' }, credit: { num: '1020', label: 'Banque' }, amount: 75 },
    ],
  },

  {
    id: 'bj-05', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Perte sur débiteur et ducroire',
    description: `Deux situations de débiteurs difficiles en décembre :
1. 05.12 : Failli SA en faillite — créance irrécouvrable → perte directe
2. 31.12 : Constitution/ajustement du ducroire (3% sur solde débiteurs)
   Le ducroire précédent était CHF 1'800 → calculer la variation`,
    note: 'La perte directe solde le Débiteur. Pour le ducroire, on ne passe QUE la variation — pas le montant total.',
    data: [
      { label: 'Créance Failli SA — irrécouvrable', value: "CHF 4'200.00" },
      { label: 'Solde débiteurs au 31.12', value: "CHF 85'000.00" },
      { label: 'Ducroire cible 3%', value: "CHF 2'550.00" },
      { label: 'Ducroire existant', value: "CHF 1'800.00" },
      { label: 'Variation à constituer', value: "CHF 750.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '05.12 — Perte sur débiteur — Failli SA insolvable', debit: { num: '6950', label: 'Pertes sur débiteurs' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 4200 },
      { id: 'e2', libelle: '31.12 — Augmentation ducroire (1\'800 → 2\'550)', debit: { num: '6960', label: 'Variation ducroire' }, credit: { num: '1109', label: 'Ducroire' }, amount: 750 },
    ],
  },

  {
    id: 'bj-06', group: 'base-journal', type: 'qcm', tag: 'base', difficulty: 1,
    title: 'Règle fondamentale — compte d\'actif',
    description: 'Pour un compte d\'actif (ex. 1020 Banque), comment enregistre-t-on une augmentation ?',
    options: [
      { id: 'a', text: 'Au crédit', correct: false },
      { id: 'b', text: 'Au débit', correct: true },
      { id: 'c', text: 'Indifféremment des deux côtés', correct: false },
      { id: 'd', text: 'Cela dépend du montant', correct: false },
    ],
    explanation: 'Un compte d\'**actif** augmente toujours au **débit** et diminue au **crédit**.\nUn compte de **passif ou fonds propres** augmente au **crédit** et diminue au **débit**.\nUne **charge** augmente au débit. Un **produit** augmente au crédit.',
  },

  {
    id: 'bj-07', group: 'base-journal', type: 'qcm', tag: 'base', difficulty: 2,
    title: 'Impact du remboursement d\'emprunt sur le résultat',
    description: 'Le remboursement de CHF 2\'000 du capital d\'un emprunt bancaire (2300) affecte-t-il le résultat de l\'exercice ?',
    options: [
      { id: 'a', text: 'Oui — c\'est un décaissement, donc une charge', correct: false },
      { id: 'b', text: 'Oui — les remboursements d\'emprunt sont des charges financières', correct: false },
      { id: 'c', text: 'Non — c\'est uniquement un mouvement bilantiel (Passif ↓ / Actif ↓)', correct: true },
      { id: 'd', text: 'Non — mais il faut quand même le passer en charges hors bilan', correct: false },
    ],
    explanation: 'Le remboursement du **capital** est un mouvement purement bilantiel :\nDébit 2300 Dettes (passif ↓) / Crédit 1020 Banque (actif ↓)\n\nSeuls les **intérêts** (compte 6800) constituent une charge qui affecte le résultat.\nRembourser une dette = apurer un passif, pas consommer une ressource.',
  },

  {
    id: 'bj-qcm-01', group: 'base-journal', type: 'qcm', tag: 'base', difficulty: 1,
    title: 'Règle fondamentale : débit et crédit',
    description: 'Quelle affirmation est correcte concernant la comptabilité en partie double ?',
    options: [
      { id: 'a', text: 'Un actif augmente au crédit', correct: false },
      { id: 'b', text: 'Une charge augmente au débit', correct: true },
      { id: 'c', text: 'Un passif augmente au débit', correct: false },
      { id: 'd', text: 'Un produit augmente au débit', correct: false },
    ],
    explanation: 'Actifs et charges augmentent au DÉBIT. Passifs, fonds propres et produits augmentent au CRÉDIT. C\'est la règle fondamentale de la partie double.',
  },

  {
    id: 'bj-qcm-02', group: 'base-journal', type: 'qcm', tag: 'base', difficulty: 1,
    title: 'Classement des comptes dans le plan comptable suisse',
    description: 'Dans le plan comptable PME suisse, quelle classe correspond aux charges d\'exploitation ?',
    options: [
      { id: 'a', text: 'Classe 1', correct: false },
      { id: 'b', text: 'Classe 3', correct: false },
      { id: 'c', text: 'Classe 4', correct: false },
      { id: 'd', text: 'Classe 5 et 6', correct: true },
    ],
    explanation: 'Classe 1 = Actifs, Classe 2 = Passifs, Classe 3 = Produits, Classes 4-8 = Charges. Les charges d\'exploitation courantes sont en classes 5 (charges de personnel) et 6 (autres charges d\'exploitation).',
  },

  {
    id: 'bj-08', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 2,
    title: 'Paiement avec escompte fournisseur',
    description: 'Fidulex Sàrl reçoit une facture fournisseur de CHF 5\'000 HT et paie dans le délai d\'escompte (2%).',
    note: 'L\'escompte obtenu est un produit financier (compte 3800).',
    data: [
      { label: 'Facture fournisseur', value: "CHF 5'000.00 HT" },
      { label: 'Escompte accordé', value: '2% si paiement sous 10 jours' },
      { label: 'Paiement', value: "CHF 4'900.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Réception facture fournisseur', debit: { num: '4000', label: 'Charges marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 5000 },
      { id: 'e2', libelle: 'Paiement avec escompte 2%', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 4900 },
      { id: 'e3', libelle: 'Escompte obtenu', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '3800', label: 'Escomptes obtenus' }, amount: 100 },
    ],
  },

  {
    id: 'bj-09', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 2,
    title: 'Perte définitive sur débiteur',
    description: 'Le client Müller AG est en faillite. Sa créance de CHF 3\'200 est définitivement perdue.',
    note: 'La perte sur débiteurs est une charge extraordinaire (6900) si elle dépasse la provision ducroire.',
    data: [
      { label: 'Créance Müller AG', value: "CHF 3'200.00" },
      { label: 'Statut', value: 'Acte de défaut de biens reçu' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Constatation perte sur débiteur Müller AG', debit: { num: '3900', label: 'Pertes sur débiteurs' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 3200 },
    ],
  },

  {
    id: 'bj-10', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 2,
    title: 'Extourne — Correction d\'écriture erronée',
    description: 'Une facture d\'électricité de CHF 850 a été comptabilisée par erreur au compte 6100 (Loyer). Corrigez l\'erreur.',
    note: 'On passe d\'abord l\'extourne (écriture inverse), puis l\'écriture correcte.',
    data: [
      { label: 'Écriture erronée', value: 'Débit 6100 / Crédit 2000 — CHF 850' },
      { label: 'Compte correct', value: '6200 Électricité, gaz' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Extourne de l\'écriture erronée', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '6100', label: 'Loyer' }, amount: 850 },
      { id: 'e2', libelle: 'Écriture correcte — Électricité', debit: { num: '6200', label: 'Électricité' }, credit: { num: '2000', label: 'Créanciers' }, amount: 850 },
    ],
  },

  {
    id: 'bj-11', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 2,
    title: 'Acquisition d\'une machine',
    description: 'Fidulex Sàrl achète une machine de production pour CHF 45\'000 payée par virement bancaire.',
    data: [
      { label: 'Machine de production', value: "CHF 45'000.00" },
      { label: 'Paiement', value: 'Virement bancaire' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Achat machine de production', debit: { num: '1500', label: 'Machines' }, credit: { num: '1020', label: 'Banque' }, amount: 45000 },
    ],
  },

  {
    id: 'bj-12', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Mois complet — Septembre d\'une PME',
    description: `Passez les 10 écritures du mois de septembre pour Fidulex Sàrl :
1. 01.09 : Paiement loyer CHF 2'500
2. 03.09 : Facture fournisseur marchandises CHF 8'000
3. 05.09 : Facture client prestations CHF 12'000
4. 10.09 : Paiement salaire net CHF 5'200
5. 10.09 : Charges sociales employé retenues CHF 800
6. 12.09 : Encaissement client facture du 05.09
7. 15.09 : Paiement facture fournisseur du 03.09
8. 20.09 : Facture téléphone CHF 180
9. 25.09 : Prélèvement privé CHF 1'000
10. 30.09 : Intérêts bancaires reçus CHF 45`,
    note: 'Comptabilisez en postes ouverts (débiteurs/créanciers). Les salaires sont simplifiés.',
    ecritures: [
      { id: 'e1', libelle: '01.09 — Paiement loyer', debit: { num: '6100', label: 'Loyer' }, credit: { num: '1020', label: 'Banque' }, amount: 2500 },
      { id: 'e2', libelle: '03.09 — Facture fournisseur marchandises', debit: { num: '4000', label: 'Charges marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 8000 },
      { id: 'e3', libelle: '05.09 — Facture client prestations', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Produits prestations' }, amount: 12000 },
      { id: 'e4', libelle: '10.09 — Paiement salaire net', debit: { num: '5000', label: 'Salaires' }, credit: { num: '1020', label: 'Banque' }, amount: 5200 },
      { id: 'e5', libelle: '10.09 — Retenue charges sociales employé', debit: { num: '5000', label: 'Salaires' }, credit: { num: '2270', label: 'Charges sociales à payer' }, amount: 800 },
      { id: 'e6', libelle: '12.09 — Encaissement client', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 12000 },
      { id: 'e7', libelle: '15.09 — Paiement fournisseur', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 8000 },
      { id: 'e8', libelle: '20.09 — Facture téléphone', debit: { num: '6500', label: 'Téléphone' }, credit: { num: '2000', label: 'Créanciers' }, amount: 180 },
      { id: 'e9', libelle: '25.09 — Prélèvement privé', debit: { num: '2800', label: 'Privé' }, credit: { num: '1020', label: 'Banque' }, amount: 1000 },
      { id: 'e10', libelle: '30.09 — Intérêts bancaires reçus', debit: { num: '1020', label: 'Banque' }, credit: { num: '3800', label: 'Produits financiers' }, amount: 45 },
    ],
  },

  {
    id: 'bj-13', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Mini exercice annuel — De l\'ouverture au bouclement',
    description: `Exercice simplifié couvrant un cycle complet :
1. Ouverture : Stock initial CHF 15'000 (débit Stock / crédit Capital)
2. Achat marchandises CHF 20'000 à crédit
3. Vente marchandises CHF 35'000 à crédit
4. Encaissement client CHF 35'000
5. Paiement fournisseur CHF 20'000
6. Amortissement mobilier CHF 3'000
7. Stock final CHF 12'000 (variation de stock)`,
    note: 'La variation de stock = Stock final − Stock initial. Si négative, c\'est une charge (diminution de stock).',
    ecritures: [
      { id: 'e1', libelle: 'Ouverture — Stock initial', debit: { num: '1200', label: 'Stock marchandises' }, credit: { num: '2800', label: 'Capital' }, amount: 15000 },
      { id: 'e2', libelle: 'Achat marchandises', debit: { num: '4000', label: 'Charges marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 20000 },
      { id: 'e3', libelle: 'Vente marchandises', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3200', label: 'Ventes marchandises' }, amount: 35000 },
      { id: 'e4', libelle: 'Encaissement client', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 35000 },
      { id: 'e5', libelle: 'Paiement fournisseur', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 20000 },
      { id: 'e6', libelle: 'Amortissement mobilier', debit: { num: '6800', label: 'Amortissements' }, credit: { num: '1500', label: 'Mobilier' }, amount: 3000 },
      { id: 'e7', libelle: 'Variation de stock (diminution)', debit: { num: '4080', label: 'Variation de stock' }, credit: { num: '1200', label: 'Stock marchandises' }, amount: 3000 },
    ],
  },
];
