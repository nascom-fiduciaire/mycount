// Exercices — Journal comptable (cas complets multi-écritures)
// Plan comptable PME suisse · Méthode postes ouverts

export const baseJournalExercises = [

  {
    id: 'bj-01', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 2,
    title: 'Cycle d\'achat complet — Fournisseur Nivarox SA',
    description: `L'entreprise commande des marchandises à Nivarox SA. Voici le déroulement complet :
1. Le 02.03 : réception de la facture de Nivarox SA
2. Le 10.03 : Nivarox SA accorde un avoir partiel (retour d'une partie)
3. Le 25.03 : paiement du solde restant par virement bancaire`,
    note: 'Méthode postes ouverts : toutes les factures et avoirs passent par le compte Créanciers (2000), même si le paiement est rapide.',
    data: [
      { label: 'Facture Nivarox SA du 02.03', value: "CHF 6'800.00 HT" },
      { label: 'Avoir du 10.03 (retour)', value: "CHF 800.00 HT" },
      { label: 'Solde payé le 25.03', value: "CHF 6'000.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '02.03 — Facture Nivarox SA marchandises HT', debit: { num: '4200', label: 'Achats marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 6800 },
      { id: 'e2', libelle: '10.03 — Avoir Nivarox SA retour marchandises', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '4200', label: 'Achats marchandises' }, amount: 800 },
      { id: 'e3', libelle: '25.03 — Paiement solde Nivarox SA — virement', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 6000 },
    ],
  },

  {
    id: 'bj-02', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 2,
    title: 'Cycle de vente complet — Client Bucherer AG',
    description: `SwiSSwatch SA réalise une prestation pour Bucherer AG :
1. Le 05.04 : émission de la facture
2. Le 15.04 : Bucherer AG conteste une partie — avoir accordé
3. Le 30.04 : encaissement du solde par virement`,
    note: 'Les produits sont comptabilisés HT. La créance (Débiteurs) suit chaque mouvement.',
    data: [
      { label: 'Facture du 05.04', value: "CHF 9'500.00 HT" },
      { label: 'Avoir accordé le 15.04', value: "CHF 500.00 HT" },
      { label: 'Encaissement du 30.04', value: "CHF 9'000.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '05.04 — Facture Bucherer AG prestations HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Produits prestations' }, amount: 9500 },
      { id: 'e2', libelle: '15.04 — Avoir Bucherer AG — contestation partielle', debit: { num: '3400', label: 'Produits prestations' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 500 },
      { id: 'e3', libelle: '30.04 — Encaissement solde Bucherer AG', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 9000 },
    ],
  },

  {
    id: 'bj-03', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Mois de juin complet — 6 opérations',
    description: `Passez toutes les écritures du mois de juin pour SwiSSwatch SA :
1. 01.06 : Paiement loyer bureau
2. 03.06 : Réception facture téléphonie
3. 08.06 : Émission facture client Nivarox SA
4. 15.06 : Paiement facture téléphonie
5. 22.06 : Encaissement Nivarox SA
6. 28.06 : Paiement prime assurance RC`,
    data: [
      { label: '01.06 — Loyer bureau', value: "CHF 2'800.00" },
      { label: '03.06 — Téléphonie HT', value: "CHF 340.00" },
      { label: '08.06 — Facture Nivarox SA HT', value: "CHF 4'200.00" },
      { label: '28.06 — Assurance RC', value: "CHF 620.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '01.06 — Loyer bureau juin', debit: { num: '6000', label: 'Charges de locaux' }, credit: { num: '1020', label: 'Banque' }, amount: 2800 },
      { id: 'e2', libelle: '03.06 — Facture téléphonie HT', debit: { num: '6500', label: 'Charges d\'administration' }, credit: { num: '2000', label: 'Créanciers' }, amount: 340 },
      { id: 'e3', libelle: '08.06 — Facture Nivarox SA prestations HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Produits prestations' }, amount: 4200 },
      { id: 'e4', libelle: '15.06 — Paiement facture téléphonie', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 340 },
      { id: 'e5', libelle: '22.06 — Encaissement Nivarox SA', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 4200 },
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
      { id: 'e1b', libelle: 'Financement emprunt bancaire', debit: null, credit: { num: '2400', label: 'Emprunts bancaires' }, amount: null, amountCredit: 20000, isSubLine: true },
      { id: 'e2', libelle: '30.06 — Remboursement capital emprunt', debit: { num: '2400', label: 'Emprunts bancaires' }, credit: { num: '1020', label: 'Banque' }, amount: 400 },
      { id: 'e3', libelle: '30.06 — Intérêts emprunt du mois', debit: { num: '6900', label: 'Charges financières' }, credit: { num: '1020', label: 'Banque' }, amount: 75 },
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
      { id: 'e1', libelle: '05.12 — Perte sur débiteur — Failli SA insolvable', debit: { num: '3805', label: 'Pertes sur clients, variation du ducroire' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 4200 },
      { id: 'e2', libelle: '31.12 — Augmentation ducroire (1\'800 → 2\'550)', debit: { num: '3805', label: 'Pertes sur clients, variation du ducroire' }, credit: { num: '1109', label: 'Ducroire' }, amount: 750 },
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
    description: 'Le remboursement de CHF 2\'000 du capital d\'un emprunt bancaire (2400) affecte-t-il le résultat de l\'exercice ?',
    options: [
      { id: 'a', text: 'Oui — c\'est un décaissement, donc une charge', correct: false },
      { id: 'b', text: 'Oui — les remboursements d\'emprunt sont des charges financières', correct: false },
      { id: 'c', text: 'Non — c\'est uniquement un mouvement bilantiel (Passif ↓ / Actif ↓)', correct: true },
      { id: 'd', text: 'Non — mais il faut quand même le passer en charges hors bilan', correct: false },
    ],
    explanation: 'Le remboursement du **capital** est un mouvement purement bilantiel :\nDébit 2400 Emprunts bancaires (passif ↓) / Crédit 1020 Banque (actif ↓)\n\nSeuls les **intérêts** (compte 6900) constituent une charge qui affecte le résultat.\nRembourser une dette = apurer un passif, pas consommer une ressource.',
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
    description: 'SwiSSwatch SA reçoit une facture fournisseur de CHF 5\'000 HT et paie dans le délai d\'escompte (2%).',
    note: 'L\'escompte obtenu est un produit financier (compte 6950).',
    data: [
      { label: 'Facture fournisseur', value: "CHF 5'000.00 HT" },
      { label: 'Escompte accordé', value: '2% si paiement sous 10 jours' },
      { label: 'Paiement', value: "CHF 4'900.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Réception facture fournisseur', debit: { num: '4000', label: 'Charges marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 5000 },
      { id: 'e2', libelle: 'Paiement avec escompte 2%', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 4900 },
      { id: 'e3', libelle: 'Escompte obtenu', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '6950', label: 'Produits financiers' }, amount: 100 },
    ],
  },

  {
    id: 'bj-09', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 2,
    title: 'Perte définitive sur débiteur',
    description: 'Le client PackDesign AG est en faillite. Sa créance de CHF 3\'200 est définitivement perdue.',
    note: 'La perte sur débiteurs est comptabilisée au compte 3805 (Pertes sur clients, variation du ducroire).',
    data: [
      { label: 'Créance PackDesign AG', value: "CHF 3'200.00" },
      { label: 'Statut', value: 'Acte de défaut de biens reçu' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Constatation perte sur débiteur PackDesign AG', debit: { num: '3805', label: 'Pertes sur clients, variation du ducroire' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 3200 },
    ],
  },

  {
    id: 'bj-10', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 2,
    title: 'Extourne — Correction d\'écriture erronée',
    description: 'Une facture d\'électricité de CHF 850 a été comptabilisée par erreur au compte 6000 (Charges de locaux). Corrigez l\'erreur.',
    note: 'On passe d\'abord l\'extourne (écriture inverse), puis l\'écriture correcte.',
    data: [
      { label: 'Écriture erronée', value: 'Débit 6000 / Crédit 2000 — CHF 850' },
      { label: 'Compte correct', value: '6400 Charges d\'énergie' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Extourne de l\'écriture erronée', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '6000', label: 'Charges de locaux' }, amount: 850 },
      { id: 'e2', libelle: 'Écriture correcte — Électricité', debit: { num: '6400', label: 'Charges d\'énergie' }, credit: { num: '2000', label: 'Créanciers' }, amount: 850 },
    ],
  },

  {
    id: 'bj-11', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 2,
    title: 'Acquisition d\'une machine',
    description: 'SwiSSwatch SA achète une machine de production pour CHF 45\'000 payée par virement bancaire.',
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
    description: `Passez les 10 écritures du mois de septembre pour SwiSSwatch SA :
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
      { id: 'e1', libelle: '01.09 — Paiement loyer', debit: { num: '6000', label: 'Charges de locaux' }, credit: { num: '1020', label: 'Banque' }, amount: 2500 },
      { id: 'e2', libelle: '03.09 — Facture fournisseur marchandises', debit: { num: '4000', label: 'Charges marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 8000 },
      { id: 'e3', libelle: '05.09 — Facture client prestations', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Produits prestations' }, amount: 12000 },
      { id: 'e4', libelle: '10.09 — Paiement salaire net', debit: { num: '5000', label: 'Salaires' }, credit: { num: '1020', label: 'Banque' }, amount: 5200 },
      { id: 'e5', libelle: '10.09 — Retenue charges sociales employé', debit: { num: '5000', label: 'Salaires' }, credit: { num: '2270', label: 'Charges sociales à payer' }, amount: 800 },
      { id: 'e6', libelle: '12.09 — Encaissement client', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 12000 },
      { id: 'e7', libelle: '15.09 — Paiement fournisseur', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 8000 },
      { id: 'e8', libelle: '20.09 — Facture téléphone', debit: { num: '6500', label: 'Charges d\'administration' }, credit: { num: '2000', label: 'Créanciers' }, amount: 180 },
      { id: 'e9', libelle: '25.09 — Prélèvement privé', debit: { num: '2800', label: 'Privé' }, credit: { num: '1020', label: 'Banque' }, amount: 1000 },
      { id: 'e10', libelle: '30.09 — Intérêts bancaires reçus', debit: { num: '1020', label: 'Banque' }, credit: { num: '6950', label: 'Produits financiers' }, amount: 45 },
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
      { id: 'e6', libelle: 'Amortissement mobilier', debit: { num: '6800', label: 'Amortissements' }, credit: { num: '1510', label: 'Mobilier et installations' }, amount: 3000 },
      { id: 'e7', libelle: 'Variation de stock (diminution)', debit: { num: '4800', label: 'Variation de stocks' }, credit: { num: '1200', label: 'Stock marchandises' }, amount: 3000 },
    ],
  },

  // ── Exercices narratifs longs (10-15 écritures) ──────────────────────

  {
    id: 'bj-20', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Le Grand Démarrage — Premiers pas de SwiSSwatch SA',
    description: `SwiSSwatch SA vient de démarrer. Voici les opérations du premier mois (avril 2023) :
1. 01.04 : Théo Keller verse CHF 100'000 sur le compte bancaire (capital libéré 50%)
2. 02.04 : Paiement loyer atelier CHF 4'500
3. 03.04 : Achat centre d'usinage CNC à crédit CHF 280'000
4. 05.04 : Achat composants Nivarox SA à crédit CHF 15'000 HT + TVA 8.1%
5. 10.04 : Facture client Bucherer AG CHF 25'000 HT + TVA 8.1%
6. 12.04 : Achat mobilier bureau payé comptant CHF 8'000
7. 15.04 : Paiement prime assurance RC CHF 1'200
8. 18.04 : Encaissement Bucherer AG (totalité TTC)
9. 20.04 : Paiement partiel Nivarox SA CHF 10'000
10. 25.04 : Facture téléphonie CHF 280 à crédit
11. 28.04 : Vente comptant boutique Neuchâtel CHF 3'600 HT + TVA 8.1%
12. 30.04 : Paiement salaire Théo Keller net CHF 9'800`,
    note: 'Comptabilisez avec TVA (méthode effective, au net). Les ventes en boutique sont encaissées comptant.',
    data: [
      { label: '01.04 — Libération capital', value: "CHF 100'000.00" },
      { label: '02.04 — Loyer atelier', value: "CHF 4'500.00" },
      { label: '03.04 — Centre CNC à crédit', value: "CHF 280'000.00" },
      { label: '05.04 — Composants Nivarox HT', value: "CHF 15'000.00 + TVA 8.1%" },
      { label: '10.04 — Facture Bucherer HT', value: "CHF 25'000.00 + TVA 8.1%" },
      { label: '12.04 — Mobilier bureau', value: "CHF 8'000.00" },
      { label: '15.04 — Assurance RC', value: "CHF 1'200.00" },
      { label: '18.04 — Encaissement Bucherer TTC', value: "CHF 27'025.00" },
      { label: '20.04 — Paiement partiel Nivarox', value: "CHF 10'000.00" },
      { label: '25.04 — Téléphonie', value: "CHF 280.00" },
      { label: '28.04 — Vente boutique HT', value: "CHF 3'600.00 + TVA 8.1%" },
      { label: '30.04 — Salaire net Théo Keller', value: "CHF 9'800.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '01.04 — Libération capital Théo Keller', debit: { num: '1020', label: 'Banque' }, credit: { num: '2800', label: 'Capital-actions' }, amount: 100000 },
      { id: 'e2', libelle: '02.04 — Paiement loyer atelier avril', debit: { num: '6000', label: 'Charges de locaux' }, credit: { num: '1020', label: 'Banque' }, amount: 4500 },
      { id: 'e3', libelle: '03.04 — Achat centre d\'usinage CNC à crédit', debit: { num: '1500', label: 'Machines et appareils' }, credit: { num: '2000', label: 'Créanciers' }, amount: 280000 },
      { id: 'e4', libelle: '05.04 — Achat composants Nivarox SA HT', debit: { num: '4200', label: 'Achats marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 15000 },
      { id: 'e4b', libelle: '05.04 — TVA impôt préalable Nivarox SA', debit: { num: '1170', label: 'Impôt préalable' }, credit: { num: '2000', label: 'Créanciers' }, amount: 1215, isSubLine: true },
      { id: 'e5', libelle: '10.04 — Facture Bucherer AG prestations HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Ventes de prestations' }, amount: 25000 },
      { id: 'e5b', libelle: '10.04 — TVA due Bucherer AG', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '2200', label: 'TVA due' }, amount: 2025, isSubLine: true },
      { id: 'e6', libelle: '12.04 — Achat mobilier bureau comptant', debit: { num: '1510', label: 'Mobilier et installations' }, credit: { num: '1020', label: 'Banque' }, amount: 8000 },
      { id: 'e7', libelle: '15.04 — Paiement prime assurance RC', debit: { num: '6300', label: 'Assurances' }, credit: { num: '1020', label: 'Banque' }, amount: 1200 },
      { id: 'e8', libelle: '18.04 — Encaissement Bucherer AG TTC', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 27025 },
      { id: 'e9', libelle: '20.04 — Paiement partiel Nivarox SA', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 10000 },
      { id: 'e10', libelle: '25.04 — Facture téléphonie à crédit', debit: { num: '6500', label: 'Charges d\'administration' }, credit: { num: '2000', label: 'Créanciers' }, amount: 280 },
      { id: 'e11', libelle: '28.04 — Vente comptant boutique Neuchâtel HT', debit: { num: '1020', label: 'Banque' }, credit: { num: '3200', label: 'Ventes marchandises' }, amount: 3600 },
      { id: 'e11b', libelle: '28.04 — TVA due vente boutique', debit: { num: '1020', label: 'Banque' }, credit: { num: '2200', label: 'TVA due' }, amount: 291.60, isSubLine: true },
      { id: 'e12', libelle: '30.04 — Paiement salaire net Théo Keller', debit: { num: '5000', label: 'Salaires' }, credit: { num: '1020', label: 'Banque' }, amount: 9800 },
    ],
  },

  {
    id: 'bj-21', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Salon de Bâle — Le mois de la foire horlogère',
    description: `Juin 2024 — Noah Renard participe au salon Baselworld. Voici les opérations :
1. 01.06 : Paiement location stand salon CHF 12'000
2. 03.06 : Achat matériel marketing (brochures, kakemonos) CHF 3'500 payé comptant
3. 05.06 : Facture client Watches of Switzerland (export UK) CHF 45'000 HT (TVA 0% — export)
4. 08.06 : Achat composants ETA SA à crédit CHF 22'000 HT + TVA 8.1%
5. 10.06 : Facture client Takashimaya (export Japon) CHF 38'000 HT (TVA 0%)
6. 12.06 : Paiement salaires nets du mois CHF 42'000
7. 15.06 : Retenues sociales employés CHF 6'300
8. 18.06 : Encaissement Watches of Switzerland CHF 45'000
9. 20.06 : Paiement ETA SA intégral
10. 25.06 : Facture client Bucherer AG CHF 18'000 HT + TVA 8.1%
11. 30.06 : Charges patronales du mois CHF 6'800`,
    note: 'Les exportations (UK et Japon) sont à TVA 0% — pas de TVA facturée mais droit à l\'impôt préalable. Les ventes suisses (Bucherer) sont avec TVA 8.1%.',
    data: [
      { label: '01.06 — Location stand salon', value: "CHF 12'000.00" },
      { label: '03.06 — Matériel marketing', value: "CHF 3'500.00" },
      { label: '05.06 — Export Watches of Switzerland HT', value: "CHF 45'000.00 (TVA 0%)" },
      { label: '08.06 — Composants ETA SA HT', value: "CHF 22'000.00 + TVA 8.1%" },
      { label: '10.06 — Export Takashimaya HT', value: "CHF 38'000.00 (TVA 0%)" },
      { label: '12.06 — Salaires nets', value: "CHF 42'000.00" },
      { label: '15.06 — Retenues sociales', value: "CHF 6'300.00" },
      { label: '18.06 — Encaissement Watches of Switzerland', value: "CHF 45'000.00" },
      { label: '20.06 — Paiement ETA SA', value: "CHF 23'782.00" },
      { label: '25.06 — Facture Bucherer AG HT', value: "CHF 18'000.00 + TVA 8.1%" },
      { label: '30.06 — Charges patronales', value: "CHF 6'800.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '01.06 — Paiement location stand salon', debit: { num: '6600', label: 'Publicité' }, credit: { num: '1020', label: 'Banque' }, amount: 12000 },
      { id: 'e2', libelle: '03.06 — Achat matériel marketing comptant', debit: { num: '6600', label: 'Publicité' }, credit: { num: '1020', label: 'Banque' }, amount: 3500 },
      { id: 'e3', libelle: '05.06 — Facture Watches of Switzerland export UK', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Ventes de prestations' }, amount: 45000 },
      { id: 'e4', libelle: '08.06 — Achat composants ETA SA HT', debit: { num: '4200', label: 'Achats marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 22000 },
      { id: 'e4b', libelle: '08.06 — TVA impôt préalable ETA SA', debit: { num: '1170', label: 'Impôt préalable' }, credit: { num: '2000', label: 'Créanciers' }, amount: 1782, isSubLine: true },
      { id: 'e5', libelle: '10.06 — Facture Takashimaya export Japon', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Ventes de prestations' }, amount: 38000 },
      { id: 'e6', libelle: '12.06 — Paiement salaires nets du mois', debit: { num: '5000', label: 'Salaires' }, credit: { num: '1020', label: 'Banque' }, amount: 42000 },
      { id: 'e7', libelle: '15.06 — Retenues sociales employés', debit: { num: '5000', label: 'Salaires' }, credit: { num: '2270', label: 'Charges sociales à payer' }, amount: 6300 },
      { id: 'e8', libelle: '18.06 — Encaissement Watches of Switzerland', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 45000 },
      { id: 'e9', libelle: '20.06 — Paiement ETA SA intégral', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 23782 },
      { id: 'e10', libelle: '25.06 — Facture Bucherer AG prestations HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Ventes de prestations' }, amount: 18000 },
      { id: 'e10b', libelle: '25.06 — TVA due Bucherer AG', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '2200', label: 'TVA due' }, amount: 1458, isSubLine: true },
      { id: 'e11', libelle: '30.06 — Charges patronales du mois', debit: { num: '5700', label: 'Charges sociales' }, credit: { num: '2270', label: 'Charges sociales à payer' }, amount: 6800 },
    ],
  },

  {
    id: 'bj-22', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 3,
    title: 'L\'Accident de Lucas — Août 2024',
    description: `Août 2024 — Lucas Morel a un accident de travail le 5 août (arrêt 3 semaines). Parallèlement, l'activité continue :
1. 01.08 : Paiement loyer atelier CHF 4'500
2. 03.08 : Facture client Christ Uhren (Allemagne, export) CHF 28'000 HT
3. 05.08 : Accident de Lucas — salaire maintenu CHF 5'800 brut
4. 05.08 : Déductions sociales Lucas CHF 720
5. 10.08 : Achat composants Stettler Sapphire CHF 8'500 HT + TVA 8.1%
6. 12.08 : Indemnité SUVA reçue (80% × 15 jours) CHF 2'320
7. 15.08 : Encaissement Christ Uhren CHF 28'000
8. 20.08 : Paiement Stettler Sapphire intégral
9. 25.08 : Facture entretien machine CNC CHF 4'200 à crédit
10. 30.08 : Paiement charges sociales aux caisses CHF 14'500`,
    note: 'L\'indemnité SUVA reçue vient en diminution des charges de personnel (crédit 5000). Les exports sont à TVA 0%.',
    data: [
      { label: '01.08 — Loyer atelier', value: "CHF 4'500.00" },
      { label: '03.08 — Export Christ Uhren HT', value: "CHF 28'000.00 (TVA 0%)" },
      { label: '05.08 — Salaire brut Lucas', value: "CHF 5'800.00" },
      { label: '05.08 — Déductions sociales Lucas', value: "CHF 720.00" },
      { label: '10.08 — Composants Stettler HT', value: "CHF 8'500.00 + TVA 8.1%" },
      { label: '12.08 — Indemnité SUVA reçue', value: "CHF 2'320.00" },
      { label: '15.08 — Encaissement Christ Uhren', value: "CHF 28'000.00" },
      { label: '20.08 — Paiement Stettler intégral', value: "CHF 9'188.50" },
      { label: '25.08 — Entretien machine CNC', value: "CHF 4'200.00" },
      { label: '30.08 — Charges sociales aux caisses', value: "CHF 14'500.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '01.08 — Paiement loyer atelier', debit: { num: '6000', label: 'Charges de locaux' }, credit: { num: '1020', label: 'Banque' }, amount: 4500 },
      { id: 'e2', libelle: '03.08 — Facture Christ Uhren export Allemagne', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Ventes de prestations' }, amount: 28000 },
      { id: 'e3', libelle: '05.08 — Salaire Lucas Morel net versé', debit: { num: '5000', label: 'Salaires' }, credit: { num: '1020', label: 'Banque' }, amount: 5080 },
      { id: 'e4', libelle: '05.08 — Retenues sociales Lucas Morel', debit: { num: '5000', label: 'Salaires' }, credit: { num: '2270', label: 'Charges sociales à payer' }, amount: 720 },
      { id: 'e5', libelle: '10.08 — Achat composants Stettler Sapphire HT', debit: { num: '4200', label: 'Achats marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 8500 },
      { id: 'e5b', libelle: '10.08 — TVA impôt préalable Stettler', debit: { num: '1170', label: 'Impôt préalable' }, credit: { num: '2000', label: 'Créanciers' }, amount: 688.50, isSubLine: true },
      { id: 'e6', libelle: '12.08 — Indemnité SUVA reçue (diminution charge)', debit: { num: '1020', label: 'Banque' }, credit: { num: '5000', label: 'Salaires' }, amount: 2320 },
      { id: 'e7', libelle: '15.08 — Encaissement Christ Uhren', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 28000 },
      { id: 'e8', libelle: '20.08 — Paiement Stettler Sapphire intégral', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 9188.50 },
      { id: 'e9', libelle: '25.08 — Facture entretien machine CNC', debit: { num: '6100', label: 'Entretien, réparations' }, credit: { num: '2000', label: 'Créanciers' }, amount: 4200 },
      { id: 'e10', libelle: '30.08 — Paiement charges sociales aux caisses', debit: { num: '2270', label: 'Charges sociales à payer' }, credit: { num: '1020', label: 'Banque' }, amount: 14500 },
    ],
  },

  {
    id: 'bj-23', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Noël chez SwiSSwatch — Le rush de décembre',
    description: `Décembre 2024 — Le mois le plus chargé de l'année :
1. 01.12 : Paiement loyer atelier + bureau CHF 4'500
2. 02.12 : Grosse commande Bucherer AG — facture CHF 65'000 HT + TVA 8.1%
3. 05.12 : Achat or et platine Metalor CHF 35'000 HT + TVA 8.1%
4. 08.12 : Vente boutique Neuchâtel — encaissé CHF 12'000 HT + TVA 8.1%
5. 10.12 : Paiement salaires nets CHF 48'000
6. 10.12 : Retenues sociales employés CHF 7'200
7. 12.12 : Encaissement Bucherer AG intégral
8. 15.12 : Facture Takashimaya (export) CHF 52'000 HT
9. 18.12 : Paiement Metalor intégral
10. 20.12 : Paiement 13e salaire nets CHF 44'000
11. 22.12 : Prélèvement privé Théo Keller CHF 5'000
12. 28.12 : Charges patronales décembre CHF 7'500
13. 30.12 : Provision 13e salaire (ajustement annuel) CHF 3'200`,
    note: 'Le 13e salaire est provisionné mensuellement (compte 2300 Passifs de régularisation). En décembre, on ajuste la provision.',
    data: [
      { label: '01.12 — Loyer atelier + bureau', value: "CHF 4'500.00" },
      { label: '02.12 — Facture Bucherer HT', value: "CHF 65'000.00 + TVA 8.1%" },
      { label: '05.12 — Or et platine Metalor HT', value: "CHF 35'000.00 + TVA 8.1%" },
      { label: '08.12 — Vente boutique HT', value: "CHF 12'000.00 + TVA 8.1%" },
      { label: '10.12 — Salaires nets', value: "CHF 48'000.00" },
      { label: '10.12 — Retenues sociales', value: "CHF 7'200.00" },
      { label: '12.12 — Encaissement Bucherer TTC', value: "CHF 70'265.00" },
      { label: '15.12 — Export Takashimaya HT', value: "CHF 52'000.00 (TVA 0%)" },
      { label: '18.12 — Paiement Metalor TTC', value: "CHF 37'835.00" },
      { label: '20.12 — 13e salaire nets', value: "CHF 44'000.00" },
      { label: '22.12 — Prélèvement privé Théo', value: "CHF 5'000.00" },
      { label: '28.12 — Charges patronales', value: "CHF 7'500.00" },
      { label: '30.12 — Provision 13e salaire', value: "CHF 3'200.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '01.12 — Paiement loyer atelier + bureau', debit: { num: '6000', label: 'Charges de locaux' }, credit: { num: '1020', label: 'Banque' }, amount: 4500 },
      { id: 'e2', libelle: '02.12 — Facture Bucherer AG prestations HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Ventes de prestations' }, amount: 65000 },
      { id: 'e2b', libelle: '02.12 — TVA due Bucherer AG', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '2200', label: 'TVA due' }, amount: 5265, isSubLine: true },
      { id: 'e3', libelle: '05.12 — Achat or et platine Metalor HT', debit: { num: '4200', label: 'Achats marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 35000 },
      { id: 'e3b', libelle: '05.12 — TVA impôt préalable Metalor', debit: { num: '1170', label: 'Impôt préalable' }, credit: { num: '2000', label: 'Créanciers' }, amount: 2835, isSubLine: true },
      { id: 'e4', libelle: '08.12 — Vente boutique Neuchâtel comptant HT', debit: { num: '1020', label: 'Banque' }, credit: { num: '3200', label: 'Ventes marchandises' }, amount: 12000 },
      { id: 'e4b', libelle: '08.12 — TVA due vente boutique', debit: { num: '1020', label: 'Banque' }, credit: { num: '2200', label: 'TVA due' }, amount: 972, isSubLine: true },
      { id: 'e5', libelle: '10.12 — Paiement salaires nets décembre', debit: { num: '5000', label: 'Salaires' }, credit: { num: '1020', label: 'Banque' }, amount: 48000 },
      { id: 'e6', libelle: '10.12 — Retenues sociales employés', debit: { num: '5000', label: 'Salaires' }, credit: { num: '2270', label: 'Charges sociales à payer' }, amount: 7200 },
      { id: 'e7', libelle: '12.12 — Encaissement Bucherer AG intégral TTC', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 70265 },
      { id: 'e8', libelle: '15.12 — Facture Takashimaya export Japon', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Ventes de prestations' }, amount: 52000 },
      { id: 'e9', libelle: '18.12 — Paiement Metalor intégral TTC', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 37835 },
      { id: 'e10', libelle: '20.12 — Paiement 13e salaire nets', debit: { num: '5000', label: 'Salaires' }, credit: { num: '1020', label: 'Banque' }, amount: 44000 },
      { id: 'e11', libelle: '22.12 — Prélèvement privé Théo Keller', debit: { num: '2800', label: 'Capital-actions' }, credit: { num: '1020', label: 'Banque' }, amount: 5000 },
      { id: 'e12', libelle: '28.12 — Charges patronales décembre', debit: { num: '5700', label: 'Charges sociales' }, credit: { num: '2270', label: 'Charges sociales à payer' }, amount: 7500 },
      { id: 'e13', libelle: '30.12 — Provision 13e salaire ajustement annuel', debit: { num: '5000', label: 'Salaires' }, credit: { num: '2300', label: 'Passifs de régularisation' }, amount: 3200 },
    ],
  },

  {
    id: 'bj-24', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Le Premier Bouclement — 31 décembre, minuit',
    description: `Léa Meyer prépare le premier bouclement de SwiSSwatch SA au 31.12.2023 :
1. Amortissement centre CNC 25% dégressif — VCN CHF 280'000 × 9/12 × 25% = CHF 52'500
2. Amortissement mobilier 10% linéaire — CHF 45'000 × 10% = CHF 4'500
3. Amortissement informatique 33% linéaire — CHF 62'000 × 33% = CHF 20'460
4. Amortissement véhicule utilitaire 40% dégressif — CHF 38'000 × 40% = CHF 15'200
5. Amortissement véhicule CEO 40% dégressif — CHF 65'000 × 4/12 × 40% = CHF 8'667
6. Ajustement ducroire de CHF 0 à CHF 2'400
7. Loyer janvier N+1 payé d'avance CHF 4'500
8. Intérêts bancaires courus à recevoir CHF 350
9. Assurance payée d'avance (6 mois) CHF 3'600
10. Provision pour garantie SAV CHF 5'000
11. Provision pour impôts CHF 8'000
12. Facture audit non encore reçue CHF 6'500
13. Charges sociales décembre à provisionner CHF 4'200
14. Part privée véhicule CEO (4 mois × 0.9% × 65'000 / 12) CHF 1'950`,
    note: 'Les amortissements au prorata pour les actifs acquis en cours d\'année. Méthode indirecte pour machines et véhicules, directe pour mobilier et informatique.',
    data: [
      { label: 'CNC — VCN × 9/12 × 25%', value: "CHF 52'500.00" },
      { label: 'Mobilier — 45\'000 × 10%', value: "CHF 4'500.00" },
      { label: 'Informatique — 62\'000 × 33%', value: "CHF 20'460.00" },
      { label: 'Véhicule utilitaire — 38\'000 × 40%', value: "CHF 15'200.00" },
      { label: 'Véhicule CEO — 65\'000 × 4/12 × 40%', value: "CHF 8'667.00" },
      { label: 'Ducroire — ajustement', value: "CHF 2'400.00" },
      { label: 'Loyer payé d\'avance', value: "CHF 4'500.00" },
      { label: 'Intérêts courus', value: "CHF 350.00" },
      { label: 'Assurance payée d\'avance', value: "CHF 3'600.00" },
      { label: 'Provision garantie SAV', value: "CHF 5'000.00" },
      { label: 'Provision impôts', value: "CHF 8'000.00" },
      { label: 'Facture audit à recevoir', value: "CHF 6'500.00" },
      { label: 'Charges sociales à provisionner', value: "CHF 4'200.00" },
      { label: 'Part privée véhicule CEO', value: "CHF 1'950.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '31.12 — Amortissement centre CNC (indirect)', debit: { num: '6800', label: 'Amortissements' }, credit: { num: '1509', label: 'Amort. cumulés machines' }, amount: 52500 },
      { id: 'e2', libelle: '31.12 — Amortissement mobilier (direct)', debit: { num: '6800', label: 'Amortissements' }, credit: { num: '1510', label: 'Mobilier et installations' }, amount: 4500 },
      { id: 'e3', libelle: '31.12 — Amortissement informatique (direct)', debit: { num: '6800', label: 'Amortissements' }, credit: { num: '1520', label: 'Informatique' }, amount: 20460 },
      { id: 'e4', libelle: '31.12 — Amortissement véhicule utilitaire (indirect)', debit: { num: '6800', label: 'Amortissements' }, credit: { num: '1539', label: 'Amort. cumulés véhicules' }, amount: 15200 },
      { id: 'e5', libelle: '31.12 — Amortissement véhicule CEO (indirect)', debit: { num: '6800', label: 'Amortissements' }, credit: { num: '1539', label: 'Amort. cumulés véhicules' }, amount: 8667 },
      { id: 'e6', libelle: '31.12 — Ajustement ducroire (0 → 2\'400)', debit: { num: '3805', label: 'Pertes sur clients' }, credit: { num: '1109', label: 'Ducroire' }, amount: 2400 },
      { id: 'e7', libelle: '31.12 — Loyer janvier payé d\'avance', debit: { num: '1300', label: 'Charges payées d\'avance' }, credit: { num: '6000', label: 'Charges de locaux' }, amount: 4500 },
      { id: 'e8', libelle: '31.12 — Intérêts bancaires courus à recevoir', debit: { num: '1301', label: 'Produits à recevoir' }, credit: { num: '6950', label: 'Produits financiers' }, amount: 350 },
      { id: 'e9', libelle: '31.12 — Assurance payée d\'avance (6 mois)', debit: { num: '1300', label: 'Charges payées d\'avance' }, credit: { num: '6300', label: 'Assurances' }, amount: 3600 },
      { id: 'e10', libelle: '31.12 — Provision pour garantie SAV', debit: { num: '6700', label: 'Autres charges' }, credit: { num: '2330', label: 'Provisions CT' }, amount: 5000 },
      { id: 'e11', libelle: '31.12 — Provision pour impôts', debit: { num: '8900', label: 'Impôts directs' }, credit: { num: '2208', label: 'Impôts à payer' }, amount: 8000 },
      { id: 'e12', libelle: '31.12 — Facture audit non encore reçue', debit: { num: '6700', label: 'Autres charges' }, credit: { num: '2300', label: 'Passifs de régularisation' }, amount: 6500 },
      { id: 'e13', libelle: '31.12 — Charges sociales décembre à provisionner', debit: { num: '5700', label: 'Charges sociales' }, credit: { num: '2270', label: 'Charges sociales à payer' }, amount: 4200 },
      { id: 'e14', libelle: '31.12 — Part privée véhicule CEO', debit: { num: '2800', label: 'Capital-actions' }, credit: { num: '6200', label: 'Charges de véhicules' }, amount: 1950 },
    ],
  },

  {
    id: 'bj-25', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Le Trimestre Complet — T3 avec Décompte TVA',
    description: `Juillet à septembre 2024 — les principales opérations + le décompte TVA trimestriel :
1. 05.07 : Facture Bucherer AG CHF 80'000 HT + TVA 8.1%
2. 12.07 : Achat composants CHF 30'000 HT + TVA 8.1%
3. 01.08 : Achat machine polissage CHF 85'000 HT + TVA 8.1%
4. 15.08 : Export Watches of Switzerland CHF 45'000 (TVA 0%)
5. 20.08 : Facture Takashimaya export CHF 40'000 (TVA 0%)
6. 05.09 : Facture client suisse CHF 100'000 HT + TVA 8.1%
7. 15.09 : Achat matières CHF 45'000 HT + TVA 8.1%
8. 30.09 : Décompte TVA — virement TVA due au décompte
9. 30.09 : Décompte TVA — IP matériel au décompte
10. 30.09 : Décompte TVA — IP investissement au décompte
11. 30.09 : Paiement solde TVA à l'AFC`,
    note: 'Les exports (UK et Japon) sont à TVA 0%. L\'impôt préalable sur investissements utilise le compte 1171 (séparé du 1170). Le décompte se fait via le compte 2201.',
    data: [
      { label: '05.07 — Facture Bucherer HT', value: "CHF 80'000.00 + TVA 8.1%" },
      { label: '12.07 — Composants HT', value: "CHF 30'000.00 + TVA 8.1%" },
      { label: '01.08 — Machine polissage HT', value: "CHF 85'000.00 + TVA 8.1%" },
      { label: '15.08 — Export Watches of Switzerland', value: "CHF 45'000.00 (TVA 0%)" },
      { label: '20.08 — Export Takashimaya', value: "CHF 40'000.00 (TVA 0%)" },
      { label: '05.09 — Facture client suisse HT', value: "CHF 100'000.00 + TVA 8.1%" },
      { label: '15.09 — Achats matières HT', value: "CHF 45'000.00 + TVA 8.1%" },
      { label: 'TVA due T3', value: "CHF 14'580.00 (180'000 × 8.1%)" },
      { label: 'IP matériel T3', value: "CHF 6'075.00 (75'000 × 8.1%)" },
      { label: 'IP investissement T3', value: "CHF 6'885.00 (85'000 × 8.1%)" },
      { label: 'Solde TVA à payer', value: "CHF 1'620.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '05.07 — Facture Bucherer AG prestations HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Ventes de prestations' }, amount: 80000 },
      { id: 'e1b', libelle: '05.07 — TVA due Bucherer AG', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '2200', label: 'TVA due' }, amount: 6480, isSubLine: true },
      { id: 'e2', libelle: '12.07 — Achat composants HT', debit: { num: '4200', label: 'Achats marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 30000 },
      { id: 'e2b', libelle: '12.07 — TVA impôt préalable composants', debit: { num: '1170', label: 'Impôt préalable' }, credit: { num: '2000', label: 'Créanciers' }, amount: 2430, isSubLine: true },
      { id: 'e3', libelle: '01.08 — Achat machine polissage HT', debit: { num: '1500', label: 'Machines et appareils' }, credit: { num: '2000', label: 'Créanciers' }, amount: 85000 },
      { id: 'e3b', libelle: '01.08 — TVA IP investissement machine', debit: { num: '1171', label: 'IP investissements' }, credit: { num: '2000', label: 'Créanciers' }, amount: 6885, isSubLine: true },
      { id: 'e4', libelle: '15.08 — Facture Watches of Switzerland export UK', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Ventes de prestations' }, amount: 45000 },
      { id: 'e5', libelle: '20.08 — Facture Takashimaya export Japon', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Ventes de prestations' }, amount: 40000 },
      { id: 'e6', libelle: '05.09 — Facture client suisse prestations HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Ventes de prestations' }, amount: 100000 },
      { id: 'e6b', libelle: '05.09 — TVA due client suisse', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '2200', label: 'TVA due' }, amount: 8100, isSubLine: true },
      { id: 'e7', libelle: '15.09 — Achat matières HT', debit: { num: '4200', label: 'Achats marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 45000 },
      { id: 'e7b', libelle: '15.09 — TVA impôt préalable matières', debit: { num: '1170', label: 'Impôt préalable' }, credit: { num: '2000', label: 'Créanciers' }, amount: 3645, isSubLine: true },
      { id: 'e8', libelle: '30.09 — Décompte TVA — virement TVA due', debit: { num: '2200', label: 'TVA due' }, credit: { num: '2201', label: 'Décompte TVA' }, amount: 14580 },
      { id: 'e9', libelle: '30.09 — Décompte TVA — IP matériel', debit: { num: '2201', label: 'Décompte TVA' }, credit: { num: '1170', label: 'Impôt préalable' }, amount: 6075 },
      { id: 'e10', libelle: '30.09 — Décompte TVA — IP investissement', debit: { num: '2201', label: 'Décompte TVA' }, credit: { num: '1171', label: 'IP investissements' }, amount: 6885 },
      { id: 'e11', libelle: '30.09 — Paiement solde TVA à l\'AFC', debit: { num: '2201', label: 'Décompte TVA' }, credit: { num: '1020', label: 'Banque' }, amount: 1620 },
    ],
  },

  // ─── Max Kessler — Indépendant ───────────────────────────────────────

  {
    id: 'bj-30', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Max l\'Indépendant — Un mois chez l\'horloger',
    description: `Max Kessler, horloger indépendant au Locle, réalise ces opérations en mars :
1. 01.03 : Paiement loyer atelier CHF 1'800
2. 03.03 : Facture SwiSSwatch SA pour travaux de finition CHF 8'500 HT + TVA 8.1%
3. 05.03 : Achat outils de précision CHF 2'200 payé comptant
4. 08.03 : Prélèvement privé en espèces CHF 3'000
5. 10.03 : Paiement assurance maladie privée CHF 480
6. 12.03 : Encaissement SwiSSwatch SA (totalité TTC)
7. 15.03 : Réparation montre personnelle (prestation propre) CHF 450
8. 18.03 : Facture client privé (restauration montre ancienne) CHF 1'800 HT + TVA 8.1%
9. 25.03 : Apport personnel supplémentaire CHF 5'000
10. 30.03 : Intérêts hypothécaires atelier CHF 650`,
    note: 'Chez un indépendant, le compte 2800 sert de compte privé. Les prestations propres sont comptabilisées au compte 3710.',
    data: [
      { label: '01.03 — Loyer atelier', value: "CHF 1'800.00" },
      { label: '03.03 — Facture SwiSSwatch SA HT', value: "CHF 8'500.00 + TVA 8.1%" },
      { label: '05.03 — Outils de précision', value: "CHF 2'200.00" },
      { label: '08.03 — Prélèvement privé', value: "CHF 3'000.00" },
      { label: '10.03 — Assurance maladie privée', value: "CHF 480.00" },
      { label: '12.03 — Encaissement SwiSSwatch SA TTC', value: "CHF 9'188.50" },
      { label: '15.03 — Prestation propre (montre personnelle)', value: "CHF 450.00" },
      { label: '18.03 — Facture client privé HT', value: "CHF 1'800.00 + TVA 8.1%" },
      { label: '25.03 — Apport personnel', value: "CHF 5'000.00" },
      { label: '30.03 — Intérêts hypothécaires', value: "CHF 650.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '01.03 — Paiement loyer atelier', debit: { num: '6000', label: 'Charges de locaux' }, credit: { num: '1020', label: 'Banque' }, amount: 1800 },
      { id: 'e2', libelle: '03.03 — Facture SwiSSwatch SA travaux HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Ventes de prestations' }, amount: 8500 },
      { id: 'e2b', libelle: '03.03 — TVA due facture SwiSSwatch SA', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '2200', label: 'TVA due' }, amount: 688.50, isSubLine: true },
      { id: 'e3', libelle: '05.03 — Achat outils de précision comptant', debit: { num: '1540', label: 'Outillages' }, credit: { num: '1020', label: 'Banque' }, amount: 2200 },
      { id: 'e4', libelle: '08.03 — Prélèvement privé en espèces', debit: { num: '2800', label: 'Privé' }, credit: { num: '1000', label: 'Caisse' }, amount: 3000 },
      { id: 'e5', libelle: '10.03 — Assurance maladie privée', debit: { num: '2800', label: 'Privé' }, credit: { num: '1020', label: 'Banque' }, amount: 480 },
      { id: 'e6', libelle: '12.03 — Encaissement SwiSSwatch SA TTC', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 9188.50 },
      { id: 'e7', libelle: '15.03 — Prestation propre — réparation montre personnelle', debit: { num: '2800', label: 'Privé' }, credit: { num: '3710', label: 'Consommations propres' }, amount: 450 },
      { id: 'e8', libelle: '18.03 — Facture client privé restauration HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Ventes de prestations' }, amount: 1800 },
      { id: 'e8b', libelle: '18.03 — TVA due facture client privé', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '2200', label: 'TVA due' }, amount: 145.80, isSubLine: true },
      { id: 'e9', libelle: '25.03 — Apport personnel supplémentaire', debit: { num: '1020', label: 'Banque' }, credit: { num: '2800', label: 'Privé' }, amount: 5000 },
      { id: 'e10', libelle: '30.03 — Intérêts hypothécaires atelier', debit: { num: '6900', label: 'Charges financières' }, credit: { num: '1020', label: 'Banque' }, amount: 650 },
    ],
  },

  {
    id: 'bj-31', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 2,
    title: 'L\'Immeuble de Max — Usage mixte',
    description: `Max Kessler possède un immeuble (atelier + appartement privé). Opérations du trimestre :
1. Loyer fictif appartement (3 mois × CHF 1'500)
2. Intérêts hypothécaires trimestriels CHF 2'625
3. Réparation toiture CHF 4'800
4. Amortissement immeuble (1% linéaire × 500'000 / 4 trimestres) CHF 1'250
5. Charges de chauffage communes CHF 1'200 (60% atelier, 40% privé)
6. Taxe communale CHF 350`,
    note: 'L\'immeuble à usage mixte nécessite une ventilation entre part professionnelle et part privée. Le loyer fictif représente l\'avantage privé.',
    data: [
      { label: 'Loyer fictif appartement (3 × 1\'500)', value: "CHF 4'500.00" },
      { label: 'Intérêts hypothécaires trimestriels', value: "CHF 2'625.00" },
      { label: 'Réparation toiture', value: "CHF 4'800.00" },
      { label: 'Amortissement trimestriel (1% × 500\'000 / 4)', value: "CHF 1'250.00" },
      { label: 'Chauffage total (60% atelier / 40% privé)', value: "CHF 1'200.00" },
      { label: 'Taxe communale', value: "CHF 350.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Loyer fictif appartement privé (3 × 1\'500)', debit: { num: '2800', label: 'Privé' }, credit: { num: '7500', label: 'Produits immeubles' }, amount: 4500 },
      { id: 'e2', libelle: 'Intérêts hypothécaires trimestriels', debit: { num: '6900', label: 'Charges financières' }, credit: { num: '1020', label: 'Banque' }, amount: 2625 },
      { id: 'e3', libelle: 'Réparation toiture immeuble', debit: { num: '7510', label: 'Charges immeubles' }, credit: { num: '1020', label: 'Banque' }, amount: 4800 },
      { id: 'e4', libelle: 'Amortissement immeuble trimestriel', debit: { num: '6800', label: 'Amortissements' }, credit: { num: '1609', label: 'Ajust. valeur immeubles' }, amount: 1250 },
      { id: 'e5', libelle: 'Chauffage — part atelier (60%)', debit: { num: '7510', label: 'Charges immeubles' }, credit: { num: '1020', label: 'Banque' }, amount: 720 },
      { id: 'e5b', libelle: 'Chauffage — part privée (40%)', debit: { num: '2800', label: 'Privé' }, credit: { num: '1020', label: 'Banque' }, amount: 480, isSubLine: true },
      { id: 'e6', libelle: 'Taxe communale', debit: { num: '6300', label: 'Assurances et taxes' }, credit: { num: '1020', label: 'Banque' }, amount: 350 },
    ],
  },

  {
    id: 'bj-32', group: 'base-journal', type: 'journal', tag: 'base', difficulty: 2,
    title: 'Les Titres de Max — Actions et obligations',
    description: `Max détient des titres (actions Swatch Group et obligations Confédération). Opérations de l'année :
1. Achat 50 actions Swatch Group à CHF 250/action = CHF 12'500
2. Dividende reçu (brut CHF 375, impôt anticipé 35% = CHF 131.25)
3. Intérêts obligation Confédération CHF 400 (brut, impôt anticipé 35% = CHF 140)
4. Vente 20 actions Swatch Group à CHF 284/action = CHF 5'680 (prix achat: 20 × 250 = CHF 5'000)`,
    note: 'L\'impôt anticipé (35%) est retenu à la source et récupérable via la déclaration fiscale (compte 1176). Les gains sur titres sont comptabilisés en produits hors exploitation.',
    data: [
      { label: 'Achat 50 actions Swatch Group', value: "CHF 12'500.00 (50 × 250)" },
      { label: 'Dividende brut', value: "CHF 375.00 (net: 243.75 / IA: 131.25)" },
      { label: 'Intérêts obligation brut', value: "CHF 400.00 (net: 260.00 / IA: 140.00)" },
      { label: 'Vente 20 actions (prix vente)', value: "CHF 5'680.00 (20 × 284)" },
      { label: 'Coût d\'acquisition (20 actions)', value: "CHF 5'000.00 (20 × 250)" },
      { label: 'Gain sur vente', value: "CHF 680.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Achat 50 actions Swatch Group', debit: { num: '1400', label: 'Titres à long terme' }, credit: { num: '1020', label: 'Banque' }, amount: 12500 },
      { id: 'e2', libelle: 'Dividende net encaissé (375 − 131.25)', debit: { num: '1020', label: 'Banque' }, credit: { num: '7000', label: 'Produits accessoires' }, amount: 243.75 },
      { id: 'e2b', libelle: 'Impôt anticipé récupérable sur dividende', debit: { num: '1176', label: 'Impôt anticipé' }, credit: { num: '7000', label: 'Produits accessoires' }, amount: 131.25, isSubLine: true },
      { id: 'e3', libelle: 'Intérêts obligation nets encaissés (400 − 140)', debit: { num: '1020', label: 'Banque' }, credit: { num: '6950', label: 'Produits financiers' }, amount: 260 },
      { id: 'e3b', libelle: 'Impôt anticipé récupérable sur intérêts', debit: { num: '1176', label: 'Impôt anticipé' }, credit: { num: '6950', label: 'Produits financiers' }, amount: 140, isSubLine: true },
      { id: 'e4', libelle: 'Vente 20 actions — prix d\'acquisition', debit: { num: '1020', label: 'Banque' }, credit: { num: '1400', label: 'Titres à long terme' }, amount: 5000 },
      { id: 'e4b', libelle: 'Vente 20 actions — gain sur vente', debit: { num: '1020', label: 'Banque' }, credit: { num: '8100', label: 'Produits hors exploitation' }, amount: 680, isSubLine: true },
    ],
  },

  {
    id: 'bj-qcm-03', group: 'base-journal', type: 'qcm', tag: 'base', difficulty: 1,
    title: 'Le compte privé de l\'indépendant',
    description: 'Que se passe-t-il lorsqu\'un indépendant prélève CHF 2\'000 de la caisse pour ses besoins personnels ?',
    options: [
      { id: 'a', text: 'Débit Caisse / Crédit Privé', correct: false },
      { id: 'b', text: 'Débit Privé / Crédit Caisse', correct: true },
      { id: 'c', text: 'Débit Charges / Crédit Caisse', correct: false },
      { id: 'd', text: 'Aucune écriture nécessaire', correct: false },
    ],
    explanation: 'Le prélèvement privé AUGMENTE le compte privé (débit 2800) et DIMINUE la caisse (crédit 1000). Ce n\'est PAS une charge — c\'est un mouvement de capital.',
  },
];
