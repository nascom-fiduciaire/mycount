export const revisionExercises = [
  {
    id: 'rev-01', group: 'revision', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Révision — Mois complet d\'une PME (mixte)',
    description: `Passez les écritures du mois d'octobre pour SwiSSwatch SA. Ce cas mélange achats, ventes, TVA, salaires et paiements :
1. 02.10 : Facture client Nivarox SA — prestation CHF 8'000 HT + TVA 8.1%
2. 05.10 : Facture fournisseur marchandises CHF 5'000 HT + TVA 8.1%
3. 10.10 : Paiement loyer CHF 2'200
4. 15.10 : Salaire brut CHF 6'000 — déductions employé CHF 750 — net versé CHF 5'250
5. 20.10 : Encaissement client Nivarox SA (totalité TTC)
6. 25.10 : Paiement fournisseur (totalité TTC)
7. 30.10 : Amortissement mensuel mobilier CHF 500 (méthode directe)`,
    note: 'Comptabilisez avec TVA (méthode effective, postes ouverts). Les salaires sont simplifiés.',
    data: [
      { label: 'TVA sur vente (8.1%)', value: 'CHF 648.00' },
      { label: 'TVA sur achat (8.1%)', value: 'CHF 405.00' },
      { label: 'Total TTC client', value: 'CHF 8\'648.00' },
      { label: 'Total TTC fournisseur', value: 'CHF 5\'405.00' },
    ],
    ecritures: [
      { id: 'e1', libelle: '02.10 — Facture client prestations HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Produits prestations' }, amount: 8000 },
      { id: 'e2', libelle: '02.10 — TVA 8.1% sur facture client', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '2200', label: 'TVA due' }, amount: 648 },
      { id: 'e3', libelle: '05.10 — Facture fournisseur marchandises HT', debit: { num: '4000', label: 'Charges marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 5000 },
      { id: 'e4', libelle: '05.10 — Impôt préalable TVA 8.1%', debit: { num: '1170', label: 'Impôt préalable' }, credit: { num: '2000', label: 'Créanciers' }, amount: 405 },
      { id: 'e5', libelle: '10.10 — Paiement loyer', debit: { num: '6000', label: 'Charges de locaux' }, credit: { num: '1020', label: 'Banque' }, amount: 2200 },
      { id: 'e6', libelle: '15.10 — Salaire brut', debit: { num: '5000', label: 'Salaires' }, credit: { num: '1020', label: 'Banque' }, amount: 5250 },
      { id: 'e7', libelle: '15.10 — Déductions sociales employé', debit: { num: '5000', label: 'Salaires' }, credit: { num: '2270', label: 'Charges sociales à payer' }, amount: 750 },
      { id: 'e8', libelle: '20.10 — Encaissement client TTC', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 8648 },
      { id: 'e9', libelle: '25.10 — Paiement fournisseur TTC', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 5405 },
      { id: 'e10', libelle: '30.10 — Amortissement mobilier', debit: { num: '6800', label: 'Amortissements' }, credit: { num: '1510', label: 'Mobilier et installations' }, amount: 500 },
    ],
  },

  {
    id: 'rev-02', group: 'revision', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Révision — Exercice annuel simplifié',
    description: `Exercice annuel de SwiSSwatch SA — de l'ouverture au bouclement :
1. Ouverture : Banque CHF 50'000, Capital CHF 50'000
2. Achat marchandises à crédit CHF 15'000
3. Vente marchandises à crédit CHF 28'000
4. Paiement fournisseur CHF 15'000
5. Encaissement client CHF 28'000
6. Paiement salaires nets CHF 8'000
7. Charges sociales retenues CHF 1'200
8. Amortissement mobilier CHF 2'000
9. Provision impôts CHF 1'500`,
    note: 'Écritures sans TVA pour simplifier. Focus sur le cycle complet.',
    ecritures: [
      { id: 'e1', libelle: 'Ouverture — Banque', debit: { num: '1020', label: 'Banque' }, credit: { num: '2800', label: 'Capital' }, amount: 50000 },
      { id: 'e2', libelle: 'Achat marchandises', debit: { num: '4000', label: 'Charges marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 15000 },
      { id: 'e3', libelle: 'Vente marchandises', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3200', label: 'Ventes marchandises' }, amount: 28000 },
      { id: 'e4', libelle: 'Paiement fournisseur', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 15000 },
      { id: 'e5', libelle: 'Encaissement client', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 28000 },
      { id: 'e6', libelle: 'Salaires nets versés', debit: { num: '5000', label: 'Salaires' }, credit: { num: '1020', label: 'Banque' }, amount: 8000 },
      { id: 'e7', libelle: 'Charges sociales retenues', debit: { num: '5000', label: 'Salaires' }, credit: { num: '2270', label: 'Charges sociales à payer' }, amount: 1200 },
      { id: 'e8', libelle: 'Amortissement mobilier', debit: { num: '6800', label: 'Amortissements' }, credit: { num: '1510', label: 'Mobilier et installations' }, amount: 2000 },
      { id: 'e9', libelle: 'Provision impôts', debit: { num: '8900', label: 'Impôts directs' }, credit: { num: '2208', label: 'Impôts directs à payer' }, amount: 1500 },
    ],
  },

  {
    id: 'rev-03', group: 'revision', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Cas intégrateur — Compta + TVA + Salaires + Bouclement',
    description: `Cas complet couvrant tous les thèmes pour SwiSSwatch SA (novembre + bouclement) :
1. 01.11 : Facture client CHF 10'000 HT + TVA 8.1% = CHF 10'810
2. 05.11 : Facture fournisseur CHF 4'000 HT + TVA 8.1% = CHF 4'324
3. 10.11 : Salaire brut CHF 7'000 — déductions CHF 870 — net CHF 6'130
4. 10.11 : Charges patronales CHF 910
5. 15.11 : Encaissement client TTC
6. 20.11 : Paiement fournisseur TTC
7. 30.11 : Amortissement mensuel véhicule CHF 800 (indirect)
8. 30.11 : Loyer payé d'avance CHF 2'500 (actif transitoire)`,
    note: 'Exercice complet mélangeant compta courante, TVA, salaires et bouclement.',
    data: [
      { label: 'TVA sur vente', value: 'CHF 810.00' },
      { label: 'TVA sur achat', value: 'CHF 324.00' },
    ],
    ecritures: [
      { id: 'e1', libelle: '01.11 — Facture client HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Produits prestations' }, amount: 10000 },
      { id: 'e2', libelle: '01.11 — TVA 8.1% client', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '2200', label: 'TVA due' }, amount: 810 },
      { id: 'e3', libelle: '05.11 — Facture fournisseur HT', debit: { num: '4000', label: 'Charges marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 4000 },
      { id: 'e4', libelle: '05.11 — Impôt préalable TVA', debit: { num: '1170', label: 'Impôt préalable' }, credit: { num: '2000', label: 'Créanciers' }, amount: 324 },
      { id: 'e5', libelle: '10.11 — Salaire brut → net versé', debit: { num: '5000', label: 'Salaires' }, credit: { num: '1020', label: 'Banque' }, amount: 6130 },
      { id: 'e6', libelle: '10.11 — Déductions sociales', debit: { num: '5000', label: 'Salaires' }, credit: { num: '2270', label: 'Charges sociales à payer' }, amount: 870 },
      { id: 'e7', libelle: '10.11 — Charges patronales', debit: { num: '5700', label: 'Charges sociales' }, credit: { num: '2270', label: 'Charges sociales à payer' }, amount: 910 },
      { id: 'e8', libelle: '15.11 — Encaissement client TTC', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 10810 },
      { id: 'e9', libelle: '20.11 — Paiement fournisseur TTC', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 4324 },
      { id: 'e10', libelle: '30.11 — Amortissement véhicule (indirect)', debit: { num: '6800', label: 'Amortissements' }, credit: { num: '1539', label: 'Ajust. valeur véhicules' }, amount: 800 },
      { id: 'e11', libelle: '30.11 — Loyer payé d\'avance', debit: { num: '1300', label: 'Charges payées d\'avance' }, credit: { num: '6000', label: 'Charges de locaux' }, amount: 2500 },
    ],
  },
];
