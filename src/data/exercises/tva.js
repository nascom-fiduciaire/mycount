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
];

export const tvaEcrituresExercises = [
  {
    id: 'tva-e-01', group: 'tva-ecritures', type: 'journal', tag: 'tva', difficulty: 2,
    title: 'Facture client avec TVA — émission et encaissement',
    description: `Fidulex Sàrl émet une facture pour Rossi SA (prestation) :
1. 08.05 : Émission facture (en 2 lignes : produits HT + TVA due)
2. 05.06 : Encaissement par virement`,
    note: 'Débiteur au TTC. Produits au HT. TVA due = passif séparé (2200) — jamais un produit.',
    data: [
      { label: 'Prestations HT', value: "CHF 10'000.00" },
      { label: 'TVA 8.1%', value: "CHF 810.00" },
      { label: 'Total TTC', value: "CHF 10'810.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '08.05 — Facture Rossi SA prestations HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Produits prestations' }, amount: 10810, amountCredit: 10000, multiLine: true },
      { id: 'e1b', libelle: 'TVA due 8.1%', debit: null, credit: { num: '2200', label: 'TVA due' }, amount: null, amountCredit: 810, isSubLine: true },
      { id: 'e2', libelle: '05.06 — Encaissement Rossi SA — virement', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 10810 },
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
];
