// Exercices TVA — Calculs HT/TTC + Écritures + Décompte

export const tvaCalcExercises = [
  {
    id: 'tva-c-01', group: 'tva-calculs', type: 'qcm', tag: 'tva', difficulty: 1,
    title: 'Calcul TTC depuis HT — taux normal 8.1%',
    description: "Une facture affiche CHF 15'000.00 HT, taux normal 8.1%. Quel est le TTC ?",
    options: [
      { id: 'a', text: "CHF 16'215.00", correct: true },
      { id: 'b', text: "CHF 16'500.00", correct: false },
      { id: 'c', text: "CHF 15'810.00", correct: false },
      { id: 'd', text: "CHF 15'121.50", correct: false },
    ],
    explanation: "TTC = HT × (1 + taux) = 15'000 × 1.081 = **CHF 16'215.00**\nTVA = 15'000 × 0.081 = CHF 1'215.00",
  },
  {
    id: 'tva-c-02', group: 'tva-calculs', type: 'qcm', tag: 'tva', difficulty: 2,
    title: 'Calcul HT depuis TTC — taux normal',
    description: "Un ticket affiche CHF 1'296.00 TVA incluse (8.1%). Quel est le HT ?",
    options: [
      { id: 'a', text: "CHF 1'200.00", correct: true },
      { id: 'b', text: "CHF 1'190.94", correct: false },
      { id: 'c', text: "CHF 1'204.80", correct: false },
      { id: 'd', text: "CHF 1'150.00", correct: false },
    ],
    explanation: "HT = TTC ÷ (1 + taux) = 1'296 ÷ 1.081 = **CHF 1'200.00**\nTVA = 1'296 − 1'200 = CHF 96.00\n\nErreur classique : diviser par 0.081 au lieu de 1.081.",
  },
  {
    id: 'tva-c-03', group: 'tva-calculs', type: 'qcm', tag: 'tva', difficulty: 1,
    title: 'Taux applicable — denrées alimentaires',
    description: "Une épicerie facture CHF 800 HT de denrées alimentaires. TTC ?",
    options: [
      { id: 'a', text: "CHF 864.80 — taux 8.1%", correct: false },
      { id: 'b', text: "CHF 830.40 — taux 3.8%", correct: false },
      { id: 'c', text: "CHF 820.80 — taux 2.6%", correct: true },
      { id: 'd', text: "CHF 800.00 — exonéré", correct: false },
    ],
    explanation: "Denrées alimentaires → **taux réduit 2.6%**\nTTC = 800 × 1.026 = **CHF 820.80**\n\nTaux 2024 : Normal 8.1% / Hébergement 3.8% / Réduit 2.6%",
  },
  {
    id: 'tva-c-04', group: 'tva-calculs', type: 'qcm', tag: 'tva', difficulty: 1,
    title: 'Taux hébergement — nuit d\'hôtel',
    description: "Facture hôtel CHF 380.00 TTC. Quel taux TVA a été appliqué ?",
    options: [
      { id: 'a', text: "8.1% — taux normal", correct: false },
      { id: 'b', text: "2.6% — taux réduit", correct: false },
      { id: 'c', text: "3.8% — taux spécial hébergement", correct: true },
      { id: 'd', text: "0% — exonéré", correct: false },
    ],
    explanation: "L'hébergement (hôtels, B&B, camping) → **taux spécial 3.8%**\nHT = 380 ÷ 1.038 = CHF 366.09 — TVA = CHF 13.91",
  },
  {
    id: 'tva-c-05', group: 'tva-calculs', type: 'qcm', tag: 'tva', difficulty: 2,
    title: 'Montant à comptabiliser en charges',
    description: "Facture fournisseur : HT CHF 2'400 — TVA 8.1% CHF 194.40 — TTC CHF 2'594.40. Vous êtes assujetti TVA. Quel montant passez-vous au compte de charges ?",
    options: [
      { id: 'a', text: "CHF 2'594.40 (TTC)", correct: false },
      { id: 'b', text: "CHF 2'400.00 (HT)", correct: true },
      { id: 'c', text: "CHF 194.40 (TVA seulement)", correct: false },
      { id: 'd', text: "CHF 2'497.20 (HT + 50% TVA)", correct: false },
    ],
    explanation: "En méthode effective : **charges toujours comptabilisées HT**.\nCHF 2'400 → compte de charges (4xxx/6xxx)\nCHF 194.40 → compte 1170 Impôt préalable\nCHF 2'594.40 → compte 2000 Créanciers (TTC)",
  },

  {
    id: 'tva-qcm-06', group: 'tva-calculs', type: 'qcm', tag: 'tva', difficulty: 2,
    title: 'Méthode effective vs taux de la dette fiscale nette',
    description: 'Quelle affirmation est correcte concernant les deux méthodes de décompte TVA ?',
    options: [
      { id: 'a', text: 'La TDFN permet de récupérer l\'impôt préalable', correct: false },
      { id: 'b', text: 'La méthode effective est obligatoire au-delà de CHF 5,005 millions de CA', correct: true },
      { id: 'c', text: 'La TDFN utilise toujours le taux normal de 8.1%', correct: false },
      { id: 'd', text: 'Les deux méthodes donnent toujours le même résultat', correct: false },
    ],
    explanation: 'La TDFN est un taux forfaitaire simplifié — on ne récupère pas l\'impôt préalable séparément. Elle est réservée aux CA < CHF 5,005 millions et impôt dû < CHF 109\'000.',
  },

  {
    id: 'tva-qcm-07', group: 'tva-calculs', type: 'qcm', tag: 'tva', difficulty: 2,
    title: 'Prestations exonérées de TVA',
    description: 'Laquelle de ces prestations est exonérée de TVA en Suisse (art. 21 LTVA) ?',
    options: [
      { id: 'a', text: 'Vente de marchandises en magasin', correct: false },
      { id: 'b', text: 'Location d\'un appartement', correct: true },
      { id: 'c', text: 'Réparation automobile', correct: false },
      { id: 'd', text: 'Conseil juridique', correct: false },
    ],
    explanation: 'La location immobilière est exonérée de TVA (art. 21 al. 2 ch. 21 LTVA). L\'assujetti peut opter pour l\'imposition volontaire s\'il loue à des assujettis TVA.',
  },

  {
    id: 'tva-qcm-08', group: 'tva-calculs', type: 'qcm', tag: 'tva', difficulty: 1,
    title: 'Retrouver le montant HT à partir du TTC',
    description: 'Un montant TTC est de CHF 5\'405. Le taux de TVA est de 8.1%. Quel est le montant HT ?',
    options: [
      { id: 'a', text: 'CHF 5\'000.00', correct: true },
      { id: 'b', text: 'CHF 4\'967.25', correct: false },
      { id: 'c', text: 'CHF 4\'985.00', correct: false },
      { id: 'd', text: 'CHF 5\'405.00', correct: false },
    ],
    explanation: 'HT = TTC / (1 + taux) = 5\'405 / 1.081 = CHF 5\'000.00. On divise par 1.081, on ne soustrait pas 8.1% du TTC (erreur fréquente).',
  },

  {
    id: 'tva-calc-01', group: 'tva-calculs', type: 'calcul', tag: 'tva', difficulty: 2,
    title: 'Calcul décompte TVA trimestriel',
    description: 'Calculez le décompte TVA du T2 2024 pour SwiSSwatch SA.',
    note: 'Pour trouver le HT à partir du TTC : HT = TTC / 1.081',
    data: [
      { label: 'Ventes TTC T2', value: "CHF 108'100" },
      { label: 'Achats TTC T2', value: "CHF 43'240" },
      { label: 'Taux TVA', value: '8.1%' },
    ],
    champs: [
      { id: 'ventes_ht', label: 'Ventes HT', placeholder: '100\'000', correct: 100000, tol: 1, hint: '108\'100 / 1.081' },
      { id: 'tva_due', label: 'TVA due (8.1%)', placeholder: '8\'100', correct: 8100, tol: 1, hint: '100\'000 × 8.1%' },
      { id: 'achats_ht', label: 'Achats HT', placeholder: '40\'000', correct: 40000, tol: 1, hint: '43\'240 / 1.081' },
      { id: 'ip', label: 'Impôt préalable', placeholder: '3\'240', correct: 3240, tol: 1, hint: '40\'000 × 8.1%' },
      { id: 'solde', label: 'Solde TVA dû', placeholder: '4\'860', correct: 4860, tol: 1, hint: '8\'100 − 3\'240' },
    ],
    correction: 'Ventes HT : 108\'100 / 1.081 = 100\'000 — TVA due : 100\'000 × 8.1% = 8\'100\nAchats HT : 43\'240 / 1.081 = 40\'000 — IP : 40\'000 × 8.1% = 3\'240\nSolde dû à l\'AFC : 8\'100 − 3\'240 = CHF 4\'860',
  },
];

export const tvaEcrituresExercises = [
  {
    id: 'tva-e-01', group: 'tva-ecritures', type: 'journal', tag: 'tva', difficulty: 2,
    title: 'Facture client avec TVA — émission et encaissement',
    description: `SwiSSwatch SA émet une facture pour Nivarox SA (prestation) :
1. 08.05 : Émission facture (en 2 lignes : produits HT + TVA due)
2. 05.06 : Encaissement par virement`,
    note: 'Débiteur au TTC. Produits au HT. TVA due = passif séparé (2200) — jamais un produit.',
    data: [
      { label: 'Prestations HT', value: "CHF 10'000.00" },
      { label: 'TVA 8.1%', value: "CHF 810.00" },
      { label: 'Total TTC', value: "CHF 10'810.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '08.05 — Facture Nivarox SA prestations HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Produits prestations' }, amount: 10810, amountCredit: 10000, multiLine: true },
      { id: 'e1b', libelle: 'TVA due 8.1%', debit: null, credit: { num: '2200', label: 'TVA due' }, amount: null, amountCredit: 810, isSubLine: true },
      { id: 'e2', libelle: '05.06 — Encaissement Nivarox SA — virement', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 10810 },
    ],
  },

  {
    id: 'tva-e-02', group: 'tva-ecritures', type: 'journal', tag: 'tva', difficulty: 2,
    title: 'Facture fournisseur avec TVA — réception et paiement',
    description: `Réception facture de Matériaux SA :
1. 12.06 : Réception facture (charges HT + impôt préalable)
2. 30.06 : Paiement par virement`,
    note: 'Charges au HT. Impôt préalable (1170) = actif séparé. Créancier (2000) au TTC.',
    data: [
      { label: 'Achats HT', value: "CHF 5'500.00" },
      { label: 'Impôt préalable 8.1%', value: "CHF 445.50" },
      { label: 'Total TTC', value: "CHF 5'945.50" },
    ],
    ecritures: [
      { id: 'e1', libelle: '12.06 — Facture Matériaux SA achats HT', debit: { num: '4000', label: 'Achats matières' }, credit: { num: '2000', label: 'Créanciers' }, amount: 5500, amountCredit: 5945.50, multiLine: true },
      { id: 'e1b', libelle: 'Impôt préalable 8.1%', debit: { num: '1170', label: 'Impôt préalable' }, credit: null, amount: 445.50, amountCredit: null, isSubLine: true },
      { id: 'e2', libelle: '30.06 — Paiement Matériaux SA — virement', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 5945.50 },
    ],
  },

  {
    id: 'tva-e-03', group: 'tva-ecritures', type: 'journal', tag: 'tva', difficulty: 3,
    title: 'Décompte TVA trimestriel — clôture et paiement',
    description: `Fin de trimestre T1 — soldez les comptes TVA et payez l'AFC :
1. Virement TVA due (2200) → compte décompte (2201)
2. Virement impôt préalable (1170) → compte décompte (2201)
3. Paiement solde net à l'AFC`,
    data: [
      { label: 'TVA due (compte 2200)', value: "CHF 8'640.00" },
      { label: 'Impôt préalable (compte 1170)', value: "CHF 3'456.00" },
      { label: 'Solde net à payer AFC', value: "CHF 5'184.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Virement TVA due → décompte AFC', debit: { num: '2200', label: 'TVA due' }, credit: { num: '2201', label: 'Décompte TVA AFC' }, amount: 8640 },
      { id: 'e2', libelle: 'Virement impôt préalable → décompte AFC', debit: { num: '2201', label: 'Décompte TVA AFC' }, credit: { num: '1170', label: 'Impôt préalable' }, amount: 3456 },
      { id: 'e3', libelle: 'Paiement solde TVA à l\'AFC — virement', debit: { num: '2201', label: 'Décompte TVA AFC' }, credit: { num: '1020', label: 'Banque' }, amount: 5184 },
    ],
  },

  {
    id: 'tva-e-04', group: 'tva-ecritures', type: 'journal', tag: 'tva', difficulty: 3,
    title: 'Cycle TVA trimestriel complet',
    description: `SwiSSwatch SA clôture le T1 2024 :
1. Total ventes HT du trimestre : CHF 80'000 → TVA due 8.1%
2. Total achats HT du trimestre : CHF 30'000 → Impôt préalable 8.1%
3. Virement du solde TVA dû à l'AFC`,
    note: 'TVA due = 80\'000 × 8.1% = 6\'480. Impôt préalable = 30\'000 × 8.1% = 2\'430. Solde dû = 6\'480 − 2\'430 = CHF 4\'050.',
    data: [
      { label: 'Ventes T1 HT', value: "CHF 80'000" },
      { label: 'Achats T1 HT', value: "CHF 30'000" },
      { label: 'Taux TVA', value: '8.1%' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Décompte TVA — virement TVA due au compte AFC', debit: { num: '2200', label: 'TVA due' }, credit: { num: '2201', label: 'Décompte TVA' }, amount: 6480 },
      { id: 'e2', libelle: 'Décompte TVA — impôt préalable récupéré', debit: { num: '2201', label: 'Décompte TVA' }, credit: { num: '1170', label: 'Impôt préalable' }, amount: 2430 },
      { id: 'e3', libelle: 'Virement du solde TVA à l\'AFC', debit: { num: '2201', label: 'Décompte TVA' }, credit: { num: '1020', label: 'Banque' }, amount: 4050 },
    ],
  },

  {
    id: 'tva-e-05', group: 'tva-ecritures', type: 'journal', tag: 'tva', difficulty: 3,
    title: 'Facturation multi-taux TVA',
    description: `SwiSSwatch SA émet une facture combinée :
1. Prestations de conseil : CHF 5'000 HT (taux normal 8.1%)
2. Hébergement hôtelier : CHF 2'000 HT (taux spécial 3.8%)
Le client paie la totalité par virement.`,
    data: [
      { label: 'Conseil HT', value: "CHF 5'000 (TVA 8.1%)" },
      { label: 'Hébergement HT', value: "CHF 2'000 (TVA 3.8%)" },
      { label: 'TVA conseil', value: 'CHF 405.00' },
      { label: 'TVA hébergement', value: 'CHF 76.00' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Facture — prestations conseil HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Produits prestations' }, amount: 5000 },
      { id: 'e2', libelle: 'Facture — TVA 8.1% sur conseil', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '2200', label: 'TVA due' }, amount: 405 },
      { id: 'e3', libelle: 'Facture — hébergement HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Produits prestations' }, amount: 2000 },
      { id: 'e4', libelle: 'Facture — TVA 3.8% sur hébergement', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '2200', label: 'TVA due' }, amount: 76 },
      { id: 'e5', libelle: 'Encaissement total client', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 7481 },
    ],
  },
];
