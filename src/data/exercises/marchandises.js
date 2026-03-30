// Exercices marchandises — inventaire intermittent + permanent + FIFO/LIFO/CMP

export const marchandisesExercises = [

  // ─── QCM ─────────────────────────────────────────────────────────────────
  {
    id: 'march-q-01', group: 'marchandises', type: 'qcm', tag: 'base', difficulty: 1,
    title: 'Inventaire intermittent — où vont les achats ?',
    description: 'Dans la méthode de l\'inventaire intermittent, où sont comptabilisées les factures d\'achat de marchandises en cours d\'année ?',
    options: [
      { id: 'a', text: 'Débit 1200 Stock', correct: false },
      { id: 'b', text: 'Débit 4000 Achats', correct: true },
      { id: 'c', text: 'Débit 4800 Variation de stocks', correct: false },
      { id: 'd', text: 'Débit 6000 Charges diverses', correct: false },
    ],
    explanation: 'En inventaire intermittent, les achats sont directement en charge (4000). Le stock 1200 n\'est mis à jour qu\'une fois par an au 31.12, sur la base du comptage physique.',
  },

  {
    id: 'march-q-02', group: 'marchandises', type: 'qcm', tag: 'base', difficulty: 2,
    title: 'Variation de stock — sens de l\'écriture',
    description: 'Au 31.12, le stock initial était CHF 30\'000 et le stock final (inventaire) est CHF 45\'000. Quelle écriture faut-il passer ?',
    options: [
      { id: 'a', text: 'Débit 4800 / Crédit 1200 → CHF 15\'000 (le stock a augmenté = charge supplémentaire)', correct: false },
      { id: 'b', text: 'Débit 1200 / Crédit 4800 → CHF 15\'000 (le stock a augmenté = réduction des charges)', correct: true },
      { id: 'c', text: 'Débit 1200 / Crédit 4000 → CHF 45\'000 (on reporte le stock final)', correct: false },
      { id: 'd', text: 'Aucune écriture — le stock se met à jour automatiquement', correct: false },
    ],
    explanation: 'Stock final (45\'000) > stock initial (30\'000) → les marchandises achetées n\'ont pas toutes été vendues. On déplace CHF 15\'000 des charges vers l\'actif : Débit 1200 / Crédit 4800 (ou 4000). Le PRAMV est réduit d\'autant.',
  },

  {
    id: 'march-q-03', group: 'marchandises', type: 'qcm', tag: 'base', difficulty: 2,
    title: 'FIFO vs LIFO — impact sur le résultat',
    description: 'Les prix d\'achat augmentent chaque trimestre. Quelle méthode génère le résultat le plus élevé ?',
    options: [
      { id: 'a', text: 'LIFO — les derniers achats (les plus chers) sont vendus en premier', correct: false },
      { id: 'b', text: 'FIFO — les premiers achats (les moins chers) sont vendus en premier', correct: true },
      { id: 'c', text: 'CMP — le prix moyen donne toujours le résultat le plus élevé', correct: false },
      { id: 'd', text: 'Le résultat est identique quelle que soit la méthode', correct: false },
    ],
    explanation: 'En période de hausse des prix, FIFO sort les articles les moins chers en premier → PRAMV plus faible → marge brute plus élevée → résultat plus élevé (mais aussi plus d\'impôts). LIFO fait l\'inverse et génère le résultat le plus faible (avantage fiscal).',
  },

  {
    id: 'march-q-04', group: 'marchandises', type: 'qcm', tag: 'base', difficulty: 2,
    title: 'Inventaire permanent — deux écritures à la vente',
    description: 'En inventaire permanent, une vente de marchandises (coût d\'achat CHF 600, prix de vente CHF 1\'000) génère combien d\'écritures ?',
    options: [
      { id: 'a', text: 'Une seule — on enregistre uniquement la vente CHF 1\'000', correct: false },
      { id: 'b', text: 'Deux — la vente au prix de vente ET la sortie du stock au coût d\'achat', correct: true },
      { id: 'c', text: 'Trois — vente, sortie stock, et constatation de la marge', correct: false },
      { id: 'd', text: 'Une seule — on enregistre uniquement le PRAMV CHF 600', correct: false },
    ],
    explanation: 'En inventaire permanent, chaque vente génère deux écritures :\n1. Produit au prix de vente : Débit 1100 Clients / Crédit 3000 Ventes CHF 1\'000\n2. Sortie de stock au coût d\'achat : Débit 4000 PRAMV / Crédit 1200 Stock CHF 600\nLa différence (CHF 400) est la marge brute.',
  },

  // ─── CALCULS INTERACTIFS ─────────────────────────────────────────────────
  {
    id: 'march-calc-01', group: 'marchandises', type: 'calcul', tag: 'base', difficulty: 2,
    title: 'Calcul du PRAMV — inventaire intermittent',
    description: 'Calculez le prix de revient d\'achat des marchandises vendues (PRAMV) et la marge brute.',
    note: 'PRAMV = Stock initial + Achats nets − Stock final. Achats nets = Achats bruts − Retours − Ristournes.',
    data: [
      { label: 'Stock initial (01.01)', value: "CHF 42'000" },
      { label: 'Achats bruts de l\'année', value: "CHF 350'000" },
      { label: 'Retours fournisseurs', value: "CHF 10'000" },
      { label: 'Ristourne annuelle obtenue', value: "CHF 17'000" },
      { label: 'Stock final (31.12 — inventaire)', value: "CHF 12'000" },
      { label: 'Chiffre d\'affaires net', value: "CHF 538'000" },
    ],
    champs: [
      { id: 'achats_nets', label: 'Achats nets (bruts − retours − ristourne)', placeholder: "323'000", correct: 323000, tol: 1, hint: '350\'000 − 10\'000 − 17\'000' },
      { id: 'variation', label: 'Variation de stock (signe : − si stock diminue)', placeholder: "30'000", correct: 30000, tol: 1, hint: 'Stock initial − Stock final = 42\'000 − 12\'000' },
      { id: 'pramv', label: 'PRAMV total', placeholder: "353'000", correct: 353000, tol: 1, hint: 'Achats nets + variation de stock' },
      { id: 'marge', label: 'Marge brute', placeholder: "185'000", correct: 185000, tol: 1, hint: 'CA net − PRAMV' },
    ],
    correction: 'Achats nets : 350\'000 − 10\'000 − 17\'000 = CHF 323\'000\nVariation stock : 42\'000 − 12\'000 = CHF 30\'000 (stock diminue → charge supplémentaire)\nPRAMV : 323\'000 + 30\'000 = CHF 353\'000\nMarge brute : 538\'000 − 353\'000 = CHF 185\'000',
  },

  {
    id: 'march-calc-02', group: 'marchandises', type: 'calcul', tag: 'base', difficulty: 3,
    title: 'FIFO vs LIFO — impact chiffré',
    description: 'Calculez le PRAMV et le stock final selon les méthodes FIFO et LIFO pour les données ci-dessous.',
    note: 'FIFO : on vend d\'abord les plus anciens achats. LIFO : on vend d\'abord les plus récents.',
    data: [
      { label: 'Stock initial (100 unités)', value: "CHF 10.00/unité = CHF 1'000" },
      { label: 'Achat 1 (200 unités)', value: "CHF 12.00/unité" },
      { label: 'Achat 2 (300 unités)', value: "CHF 14.00/unité" },
      { label: 'Ventes totales', value: '400 unités' },
    ],
    champs: [
      { id: 'fifo_pramv', label: 'PRAMV méthode FIFO (400 unités vendues)', placeholder: "4'600", correct: 4600, tol: 10, hint: '100×10 + 200×12 + 100×14' },
      { id: 'fifo_stock', label: 'Stock final FIFO (200 unités restantes)', placeholder: "2'800", correct: 2800, tol: 10, hint: '200 unités à CHF 14' },
      { id: 'lifo_pramv', label: 'PRAMV méthode LIFO (400 unités vendues)', placeholder: "4'800", correct: 4800, tol: 10, hint: '300×14 + 100×12' },
      { id: 'lifo_stock', label: 'Stock final LIFO (200 unités restantes)', placeholder: "2'600", correct: 2600, tol: 10, hint: '100×10 + 100×12' },
      { id: 'diff', label: 'Différence de PRAMV (LIFO − FIFO)', placeholder: '200', correct: 200, tol: 5, hint: '4\'800 − 4\'600' },
    ],
    correction: 'FIFO (vend 100×10 + 200×12 + 100×14) : PRAMV = 1\'000 + 2\'400 + 1\'400 = CHF 4\'600 / Stock final = 200×14 = CHF 2\'800\nLIFO (vend 300×14 + 100×12) : PRAMV = 4\'200 + 1\'200 = CHF 4\'800 / Stock final = 100×10 + 100×12 = CHF 2\'600\nDifférence : CHF 200 de PRAMV supplémentaire avec LIFO → résultat plus faible de CHF 200',
  },

  // ─── JOURNAUX ────────────────────────────────────────────────────────────
  {
    id: 'march-j-01', group: 'marchandises', type: 'journal', tag: 'base', difficulty: 2,
    title: 'Écritures inventaire intermittent — clôture annuelle',
    description: 'Passez les écritures de clôture pour les stocks au 31.12.\nStock initial : CHF 42\'000 — Stock final après inventaire : CHF 12\'000.',
    note: 'La diminution de stock (42\'000 → 12\'000) est une charge supplémentaire. On débit 4800 et on crédit 1200.',
    data: [
      { label: 'Stock initial', value: "CHF 42'000" },
      { label: 'Stock final (inventaire physique)', value: "CHF 12'000" },
      { label: 'Variation', value: "− CHF 30'000 (stock diminue)" },
    ],
    ecritures: [
      { id: 'e1', libelle: '31.12 — Variation de stocks (diminution)', debit: { num: '4800', label: 'Variation de stocks' }, credit: { num: '1200', label: 'Stock de marchandises' }, amount: 30000 },
    ],
  },

  {
    id: 'march-j-02', group: 'marchandises', type: 'journal', tag: 'base', difficulty: 2,
    title: 'Écritures inventaire intermittent — stock en hausse',
    description: 'Passez les écritures de clôture pour les stocks au 31.12.\nStock initial : CHF 15\'000 — Stock final après inventaire : CHF 22\'000.',
    note: 'La hausse du stock (15\'000 → 22\'000) réduit les charges. On débite 1200 et on crédite 4800.',
    data: [
      { label: 'Stock initial', value: "CHF 15'000" },
      { label: 'Stock final (inventaire physique)', value: "CHF 22'000" },
      { label: 'Variation', value: "+ CHF 7'000 (stock augmente)" },
    ],
    ecritures: [
      { id: 'e1', libelle: '31.12 — Variation de stocks (augmentation)', debit: { num: '1200', label: 'Stock de marchandises' }, credit: { num: '4800', label: 'Variation de stocks' }, amount: 7000 },
    ],
  },

  {
    id: 'march-j-03', group: 'marchandises', type: 'journal', tag: 'base', difficulty: 3,
    title: 'Inventaire permanent — achat et vente',
    description: 'Passez les écritures pour un achat et une vente en inventaire permanent.\nAchat : 50 unités à CHF 80 (payées par banque).\nVente : 30 unités à CHF 120 (encaissées par banque).',
    note: 'La vente génère deux écritures : produit au prix de vente + sortie de stock au coût d\'achat.',
    data: [
      { label: 'Coût d\'achat', value: '50 × CHF 80 = CHF 4\'000' },
      { label: 'Prix de vente', value: '30 × CHF 120 = CHF 3\'600' },
      { label: 'Coût des 30 unités vendues', value: '30 × CHF 80 = CHF 2\'400' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Achat 50 unités à CHF 80 — inventaire permanent', debit: { num: '1200', label: 'Stock marchandises' }, credit: { num: '1020', label: 'Banque' }, amount: 4000 },
      { id: 'e2', libelle: 'Vente 30 unités à CHF 120 — produit', debit: { num: '1020', label: 'Banque' }, credit: { num: '3000', label: 'Ventes' }, amount: 3600 },
      { id: 'e3', libelle: 'Sortie de stock au coût d\'achat (30 × CHF 80)', debit: { num: '4000', label: 'PRAMV' }, credit: { num: '1200', label: 'Stock marchandises' }, amount: 2400 },
    ],
  },
];
