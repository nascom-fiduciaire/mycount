// Exercices Analyse financiere — Calculs de ratios + QCM theorie

export const analyseExerciseGroups = [
  { id: 'analyse-calculs', label: 'Analyse — Calculs', icon: '📊', tag: 'analyse', description: 'Calculs de ratios, FRN, BFR, seuil de rentabilité, évaluation' },
  { id: 'analyse-qcm', label: 'Analyse — QCM', icon: '📊', tag: 'analyse', description: 'Questions théoriques sur l\'analyse financière et l\'interprétation des ratios' },
];

export const analyseExercises = [
  // ──────────────────────────────────────────────
  //  CALCULS
  // ──────────────────────────────────────────────

  {
    id: 'ana-c01',
    group: 'analyse-calculs',
    type: 'calcul',
    tag: 'analyse',
    difficulty: 1,
    title: 'Ratios de liquidité',
    description: "Calculez les trois ratios de liquidité à partir du bilan simplifié ci-dessous.",
    data: [
      { label: 'Actifs circulants (AC)', value: "CHF 520'000" },
      { label: 'dont Stocks', value: "CHF 180'000" },
      { label: 'dont Trésorerie', value: "CHF 85'000" },
      { label: 'Capitaux étrangers court terme (CE CT)', value: "CHF 310'000" },
    ],
    champs: [
      { id: 'l3', label: 'Liquidité générale (L3)', placeholder: 'Ex: 1.68', correct: 1.68, tol: 0.01, hint: 'AC / CE CT' },
      { id: 'l2', label: 'Liquidité réduite (L2)', placeholder: 'Ex: 1.10', correct: 1.10, tol: 0.01, hint: '(AC − Stocks) / CE CT' },
      { id: 'l1', label: 'Liquidité immédiate (L1)', placeholder: 'Ex: 0.27', correct: 0.27, tol: 0.01, hint: 'Trésorerie / CE CT' },
    ],
    correction:
      "**L3 (liquidité générale)** = AC / CE CT = 520'000 / 310'000 = **1.68**\n\n" +
      "**L2 (liquidité réduite)** = (AC − Stocks) / CE CT = (520'000 − 180'000) / 310'000 = 340'000 / 310'000 = **1.10**\n\n" +
      "**L1 (liquidité immédiate)** = Trésorerie / CE CT = 85'000 / 310'000 = **0.27**\n\n" +
      "Interprétation : L3 > 1 est satisfaisant. L2 > 1 signifie que l'entreprise peut couvrir ses dettes CT sans vendre ses stocks. L1 de 0.27 est correct (norme : 0.2–0.5).",
  },

  {
    id: 'ana-c02',
    group: 'analyse-calculs',
    type: 'calcul',
    tag: 'analyse',
    difficulty: 2,
    title: 'Fonds de roulement net et BFR',
    description: "Calculez le fonds de roulement net (FRN), le besoin en fonds de roulement (BFR) et la trésorerie nette.",
    data: [
      { label: 'Actifs circulants (AC)', value: "CHF 680'000" },
      { label: 'Actifs immobilisés (AI)', value: "CHF 920'000" },
      { label: 'Capitaux propres (CP)', value: "CHF 750'000" },
      { label: 'Capitaux étrangers long terme (CE LT)', value: "CHF 400'000" },
      { label: 'Capitaux étrangers court terme (CE CT)', value: "CHF 450'000" },
      { label: 'Stocks', value: "CHF 220'000" },
      { label: 'Créances clients', value: "CHF 310'000" },
      { label: 'Dettes fournisseurs', value: "CHF 195'000" },
    ],
    champs: [
      { id: 'frn', label: 'Fonds de roulement net (FRN)', placeholder: "Ex: 230'000", correct: 230000, tol: 1, hint: 'AC − CE CT  ou  (CP + CE LT) − AI' },
      { id: 'bfr', label: 'Besoin en fonds de roulement (BFR)', placeholder: "Ex: 335'000", correct: 335000, tol: 1, hint: 'Stocks + Créances clients − Dettes fournisseurs' },
      { id: 'tn', label: 'Trésorerie nette (TN)', placeholder: "Ex: -105'000", correct: -105000, tol: 1, hint: 'FRN − BFR' },
    ],
    correction:
      "**FRN** = AC − CE CT = 680'000 − 450'000 = **CHF 230'000**\n" +
      "Vérification : (CP + CE LT) − AI = (750'000 + 400'000) − 920'000 = 1'150'000 − 920'000 = **CHF 230'000** ✓\n\n" +
      "**BFR** = Stocks + Créances clients − Dettes fournisseurs = 220'000 + 310'000 − 195'000 = **CHF 335'000**\n\n" +
      "**TN** = FRN − BFR = 230'000 − 335'000 = **CHF −105'000**\n\n" +
      "Interprétation : le FRN est positif (les AI sont bien financées), mais le BFR dépasse le FRN, ce qui crée un déficit de trésorerie de CHF 105'000.",
  },

  {
    id: 'ana-c03',
    group: 'analyse-calculs',
    type: 'calcul',
    tag: 'analyse',
    difficulty: 2,
    title: 'Marges et rentabilité',
    description: "À partir du compte de résultat simplifié, calculez les marges et le résultat net.",
    data: [
      { label: 'Chiffre d\'affaires (CA)', value: "CHF 2'800'000" },
      { label: 'Coût des marchandises vendues', value: "CHF 1'680'000" },
      { label: 'Charges de personnel', value: "CHF 560'000" },
      { label: 'Autres charges d\'exploitation', value: "CHF 280'000" },
      { label: 'Amortissements', value: "CHF 120'000" },
      { label: 'Intérêts', value: "CHF 45'000" },
      { label: 'Impôts', value: "CHF 23'000" },
    ],
    champs: [
      { id: 'mbrute', label: 'Marge brute (%)', placeholder: 'Ex: 40', correct: 40, tol: 0.1, hint: '(CA − CMV) / CA × 100' },
      { id: 'ebitda', label: 'EBITDA (CHF)', placeholder: "Ex: 280'000", correct: 280000, tol: 1, hint: 'CA − CMV − Personnel − Autres charges' },
      { id: 'mebitda', label: 'Marge EBITDA (%)', placeholder: 'Ex: 10', correct: 10, tol: 0.1, hint: 'EBITDA / CA × 100' },
      { id: 'bnet', label: 'Bénéfice net (CHF)', placeholder: "Ex: 92'000", correct: 92000, tol: 1, hint: 'EBITDA − Amort. − Intérêts − Impôts' },
      { id: 'mnette', label: 'Marge nette (%)', placeholder: 'Ex: 3.29', correct: 3.29, tol: 0.05, hint: 'Bénéfice net / CA × 100' },
    ],
    correction:
      "**Marge brute** = (CA − CMV) / CA = (2'800'000 − 1'680'000) / 2'800'000 = 1'120'000 / 2'800'000 = **40%**\n\n" +
      "**EBITDA** = CA − CMV − Personnel − Autres charges\n= 2'800'000 − 1'680'000 − 560'000 − 280'000 = **CHF 280'000**\n\n" +
      "**Marge EBITDA** = 280'000 / 2'800'000 = **10%**\n\n" +
      "**EBIT** = EBITDA − Amortissements = 280'000 − 120'000 = CHF 160'000\n" +
      "**EBT** = EBIT − Intérêts = 160'000 − 45'000 = CHF 115'000\n" +
      "**Bénéfice net** = EBT − Impôts = 115'000 − 23'000 = **CHF 92'000**\n\n" +
      "**Marge nette** = 92'000 / 2'800'000 × 100 = **3.29%**",
  },

  {
    id: 'ana-c04',
    group: 'analyse-calculs',
    type: 'calcul',
    tag: 'analyse',
    difficulty: 2,
    title: 'ROE et ROA',
    description: "Calculez la rentabilité des fonds propres (ROE) et la rentabilité des actifs (ROA).",
    data: [
      { label: 'Bénéfice net', value: "CHF 156'000" },
      { label: 'Charges d\'intérêts', value: "CHF 48'000" },
      { label: 'Capitaux propres (CP)', value: "CHF 1'200'000" },
      { label: 'Total actifs', value: "CHF 2'400'000" },
    ],
    champs: [
      { id: 'roe', label: 'ROE (%)', placeholder: 'Ex: 13', correct: 13, tol: 0.1, hint: 'Bénéfice net / CP × 100' },
      { id: 'roa', label: 'ROA (%)', placeholder: 'Ex: 8.5', correct: 8.5, tol: 0.1, hint: '(Bénéfice net + Intérêts) / Total actifs × 100' },
    ],
    correction:
      "**ROE** = Bénéfice net / Capitaux propres = 156'000 / 1'200'000 = **13%**\n\n" +
      "**ROA** = (Bénéfice net + Intérêts) / Total actifs = (156'000 + 48'000) / 2'400'000 = 204'000 / 2'400'000 = **8.5%**\n\n" +
      "Le ROE (13%) est supérieur au ROA (8.5%), ce qui indique un effet de levier financier positif : la dette rapporte davantage qu'elle ne coûte.",
  },

  {
    id: 'ana-c05',
    group: 'analyse-calculs',
    type: 'calcul',
    tag: 'analyse',
    difficulty: 2,
    title: 'Délais de rotation',
    description: "Calculez les délais de rotation des créances, des dettes fournisseurs et des stocks.",
    data: [
      { label: 'Créances clients', value: "CHF 185'000" },
      { label: 'Chiffre d\'affaires TTC', value: "CHF 2'160'000" },
      { label: 'Dettes fournisseurs', value: "CHF 120'000" },
      { label: 'Achats TTC', value: "CHF 1'296'000" },
      { label: 'Stock moyen', value: "CHF 240'000" },
      { label: 'Coût des marchandises vendues (CMV)', value: "CHF 1'200'000" },
    ],
    champs: [
      { id: 'dcl', label: 'Délai clients (jours)', placeholder: 'Ex: 30.8', correct: 30.8, tol: 0.5, hint: 'Créances / CA TTC × 360' },
      { id: 'dfo', label: 'Délai fournisseurs (jours)', placeholder: 'Ex: 33.3', correct: 33.3, tol: 0.5, hint: 'Dettes fourn. / Achats TTC × 360' },
      { id: 'rstock', label: 'Rotation des stocks (fois)', placeholder: 'Ex: 5', correct: 5, tol: 0.1, hint: 'CMV / Stock moyen' },
      { id: 'dstock', label: 'Durée de stockage (jours)', placeholder: 'Ex: 72', correct: 72, tol: 1, hint: '360 / Rotation stocks' },
    ],
    correction:
      "**Délai clients** = Créances / CA TTC × 360 = 185'000 / 2'160'000 × 360 = **30.8 jours**\n\n" +
      "**Délai fournisseurs** = Dettes fourn. / Achats TTC × 360 = 120'000 / 1'296'000 × 360 = **33.3 jours**\n\n" +
      "**Rotation des stocks** = CMV / Stock moyen = 1'200'000 / 240'000 = **5 fois**\n" +
      "**Durée de stockage** = 360 / 5 = **72 jours**\n\n" +
      "Interprétation : les clients paient en ~31 jours, l'entreprise paie ses fournisseurs en ~33 jours. Le décalage est faible. Les stocks tournent 5 fois par an (72 jours de stock).",
  },

  {
    id: 'ana-c06',
    group: 'analyse-calculs',
    type: 'calcul',
    tag: 'analyse',
    difficulty: 3,
    title: 'Seuil de rentabilité',
    description: "Calculez le seuil de rentabilité en quantité et en CHF, puis la marge de sécurité si le CA réel est de CHF 1'100'000.",
    data: [
      { label: 'Prix de vente unitaire', value: 'CHF 85' },
      { label: 'Coût variable unitaire', value: 'CHF 51' },
      { label: 'Charges fixes totales', value: "CHF 340'000" },
      { label: 'CA réel', value: "CHF 1'100'000" },
    ],
    champs: [
      { id: 'mcu', label: 'Marge de contribution unitaire (CHF)', placeholder: 'Ex: 34', correct: 34, tol: 0.01, hint: 'PV − CV' },
      { id: 'tmc', label: 'Taux de marge de contribution (%)', placeholder: 'Ex: 40', correct: 40, tol: 0.1, hint: 'MC / PV × 100' },
      { id: 'srq', label: 'Seuil de rentabilité (unités)', placeholder: "Ex: 10'000", correct: 10000, tol: 1, hint: 'CF / MC unitaire' },
      { id: 'srchf', label: 'Seuil de rentabilité (CHF)', placeholder: "Ex: 850'000", correct: 850000, tol: 1, hint: 'SR quantité × PV  ou  CF / taux MC' },
      { id: 'ms', label: 'Marge de sécurité (CHF)', placeholder: "Ex: 250'000", correct: 250000, tol: 1, hint: 'CA réel − SR en CHF' },
      { id: 'mspct', label: 'Marge de sécurité (%)', placeholder: 'Ex: 22.7', correct: 22.7, tol: 0.2, hint: 'Marge de sécurité / CA réel × 100' },
    ],
    correction:
      "**MC unitaire** = PV − CV = 85 − 51 = **CHF 34**\n\n" +
      "**Taux MC** = 34 / 85 × 100 = **40%**\n\n" +
      "**SR en quantité** = CF / MC unitaire = 340'000 / 34 = **10'000 unités**\n\n" +
      "**SR en CHF** = 10'000 × 85 = **CHF 850'000**\nVérification : CF / taux MC = 340'000 / 0.40 = CHF 850'000 ✓\n\n" +
      "**Marge de sécurité** = CA réel − SR = 1'100'000 − 850'000 = **CHF 250'000**\n\n" +
      "**Marge de sécurité (%)** = 250'000 / 1'100'000 × 100 = **22.7%**\n\n" +
      "L'entreprise peut perdre 22.7% de son CA avant d'atteindre le seuil de rentabilité.",
  },

  {
    id: 'ana-c07',
    group: 'analyse-calculs',
    type: 'calcul',
    tag: 'analyse',
    difficulty: 3,
    title: 'Tableau de flux de trésorerie (méthode indirecte)',
    description: "Reconstituez les trois catégories du tableau de flux et calculez la variation de trésorerie.",
    data: [
      { label: 'Bénéfice net', value: "CHF 180'000" },
      { label: 'Amortissements', value: "CHF 95'000" },
      { label: 'Augmentation des stocks', value: "CHF −30'000" },
      { label: 'Diminution des créances clients', value: "CHF +15'000" },
      { label: 'Augmentation des dettes fournisseurs', value: "CHF +20'000" },
      { label: 'Achats d\'immobilisations', value: "CHF −250'000" },
      { label: 'Vente d\'immobilisation', value: "CHF +40'000" },
      { label: 'Nouvel emprunt', value: "CHF +200'000" },
      { label: 'Remboursement d\'emprunt', value: "CHF −80'000" },
      { label: 'Dividendes versés', value: "CHF −60'000" },
    ],
    champs: [
      { id: 'cfe', label: 'CF exploitation (CHF)', placeholder: "Ex: 280'000", correct: 280000, tol: 1, hint: 'Bénéf. net + Amort. + Variation BFR' },
      { id: 'cfi', label: 'CF investissement (CHF)', placeholder: "Ex: -210'000", correct: -210000, tol: 1, hint: 'Achats immo + Ventes immo' },
      { id: 'cff', label: 'CF financement (CHF)', placeholder: "Ex: 60'000", correct: 60000, tol: 1, hint: 'Emprunt − Remboursement − Dividendes' },
      { id: 'vt', label: 'Variation de trésorerie (CHF)', placeholder: "Ex: 130'000", correct: 130000, tol: 1, hint: 'CF expl. + CF invest. + CF financ.' },
    ],
    correction:
      "**CF exploitation** :\n" +
      "Bénéfice net : +180'000\n" +
      "Amortissements : +95'000 (charge non décaissée)\n" +
      "Augmentation stocks : −30'000\n" +
      "Diminution créances : +15'000\n" +
      "Augmentation dettes fournisseurs : +20'000\n" +
      "**Total CF exploitation = 180'000 + 95'000 − 30'000 + 15'000 + 20'000 = CHF 280'000**\n\n" +
      "**CF investissement** :\n" +
      "Achats immobilisations : −250'000\n" +
      "Vente immobilisation : +40'000\n" +
      "**Total CF investissement = −250'000 + 40'000 = CHF −210'000**\n\n" +
      "**CF financement** :\n" +
      "Nouvel emprunt : +200'000\n" +
      "Remboursement : −80'000\n" +
      "Dividendes : −60'000\n" +
      "**Total CF financement = 200'000 − 80'000 − 60'000 = CHF 60'000**\n\n" +
      "**Variation de trésorerie** = 280'000 + (−210'000) + 60'000 = **CHF 130'000**",
  },

  {
    id: 'ana-c08',
    group: 'analyse-calculs',
    type: 'calcul',
    tag: 'analyse',
    difficulty: 3,
    title: 'Effet de levier financier',
    description: "Calculez le ROA, le coût de la dette et le ROE en appliquant la formule de l'effet de levier financier.",
    data: [
      { label: 'Total actifs', value: "CHF 1'000'000" },
      { label: 'Capitaux propres (CP)', value: "CHF 400'000" },
      { label: 'Capitaux étrangers (CE)', value: "CHF 600'000" },
      { label: 'EBIT', value: "CHF 120'000" },
      { label: 'Charges d\'intérêts', value: "CHF 30'000" },
      { label: 'Taux d\'imposition', value: '20%' },
    ],
    champs: [
      { id: 'roa', label: 'ROA avant impôt (%)', placeholder: 'Ex: 12', correct: 12, tol: 0.1, hint: 'EBIT / Total actifs × 100' },
      { id: 'cout', label: 'Coût de la dette (%)', placeholder: 'Ex: 5', correct: 5, tol: 0.1, hint: 'Intérêts / CE × 100' },
      { id: 'roe', label: 'ROE (%)', placeholder: 'Ex: 18', correct: 18, tol: 0.2, hint: '[ROA + (ROA − i) × CE/CP] × (1 − t)' },
    ],
    correction:
      "**ROA avant impôt** = EBIT / Total actifs = 120'000 / 1'000'000 = **12%**\n\n" +
      "**Coût de la dette** = Intérêts / CE = 30'000 / 600'000 = **5%**\n\n" +
      "**Levier financier (CE/CP)** = 600'000 / 400'000 = **1.5**\n\n" +
      "**ROE** = [ROA + (ROA − i) × CE/CP] × (1 − t)\n" +
      "= [12% + (12% − 5%) × 1.5] × (1 − 0.20)\n" +
      "= [12% + 7% × 1.5] × 0.80\n" +
      "= [12% + 10.5%] × 0.80\n" +
      "= 22.5% × 0.80\n" +
      "= **18%**\n\n" +
      "L'effet de levier est positif (ROA 12% > coût dette 5%), ce qui amplifie la rentabilité des CP de 12% à 18% après impôt.",
  },

  {
    id: 'ana-c09',
    group: 'analyse-calculs',
    type: 'calcul',
    tag: 'analyse',
    difficulty: 3,
    title: 'Évaluation : méthode des praticiens',
    description: "Évaluez l'entreprise selon la méthode des praticiens suisse (pondération : 1× valeur substantielle + 2× valeur de rendement, divisé par 3).",
    data: [
      { label: 'Fonds propres comptables', value: "CHF 800'000" },
      { label: 'Réserves latentes nettes', value: "CHF 200'000" },
      { label: 'Bénéfice moyen (5 dernières années)', value: "CHF 150'000" },
      { label: 'Taux de capitalisation', value: '8%' },
    ],
    champs: [
      { id: 'vs', label: 'Valeur substantielle (CHF)', placeholder: "Ex: 1'000'000", correct: 1000000, tol: 1, hint: 'FP comptables + Réserves latentes' },
      { id: 'vr', label: 'Valeur de rendement (CHF)', placeholder: "Ex: 1'875'000", correct: 1875000, tol: 1, hint: 'Bénéfice moyen / Taux de capitalisation' },
      { id: 'vp', label: 'Valeur des praticiens (CHF)', placeholder: "Ex: 1'583'333", correct: 1583333, tol: 5, hint: '(1 × VS + 2 × VR) / 3' },
    ],
    correction:
      "**Valeur substantielle** = FP comptables + Réserves latentes = 800'000 + 200'000 = **CHF 1'000'000**\n\n" +
      "**Valeur de rendement** = Bénéfice moyen / Taux de capitalisation = 150'000 / 0.08 = **CHF 1'875'000**\n\n" +
      "**Valeur des praticiens** = (1 × VS + 2 × VR) / 3\n" +
      "= (1 × 1'000'000 + 2 × 1'875'000) / 3\n" +
      "= (1'000'000 + 3'750'000) / 3\n" +
      "= 4'750'000 / 3\n" +
      "= **CHF 1'583'333**\n\n" +
      "La pondération 2/3 rendement et 1/3 substance reflète la pratique fiscale suisse. La valeur de rendement, supérieure à la valeur substantielle, indique une bonne capacité bénéficiaire (goodwill positif).",
  },

  {
    id: 'ana-c10',
    group: 'analyse-calculs',
    type: 'calcul',
    tag: 'analyse',
    difficulty: 2,
    title: 'Analyse structurelle du bilan',
    description: "Analysez la structure du bilan en calculant les ratios de financement et les degrés de couverture.",
    data: [
      { label: 'Trésorerie', value: "CHF 80'000" },
      { label: 'Créances', value: "CHF 220'000" },
      { label: 'Stocks', value: "CHF 150'000" },
      { label: 'Immobilisations (AI)', value: "CHF 550'000" },
      { label: 'Total actif', value: "CHF 1'000'000" },
      { label: 'CE court terme', value: "CHF 300'000" },
      { label: 'CE long terme', value: "CHF 250'000" },
      { label: 'Capitaux propres (CP)', value: "CHF 450'000" },
    ],
    champs: [
      { id: 'pac', label: 'Part des actifs circulants (%)', placeholder: 'Ex: 45', correct: 45, tol: 0.1, hint: 'AC / Total actif × 100' },
      { id: 'pai', label: 'Part des actifs immobilisés (%)', placeholder: 'Ex: 55', correct: 55, tol: 0.1, hint: 'AI / Total actif × 100' },
      { id: 'dend', label: 'Degré d\'endettement (%)', placeholder: 'Ex: 55', correct: 55, tol: 0.1, hint: 'CE total / Total passif × 100' },
      { id: 'dauto', label: 'Degré d\'autofinancement (%)', placeholder: 'Ex: 45', correct: 45, tol: 0.1, hint: 'CP / Total passif × 100' },
      { id: 'couv1', label: 'Degré de couverture 1 (%)', placeholder: 'Ex: 81.8', correct: 81.8, tol: 0.2, hint: 'CP / AI × 100' },
      { id: 'couv2', label: 'Degré de couverture 2 (%)', placeholder: 'Ex: 127.3', correct: 127.3, tol: 0.2, hint: '(CP + CE LT) / AI × 100' },
    ],
    correction:
      "**AC** = Trésorerie + Créances + Stocks = 80'000 + 220'000 + 150'000 = CHF 450'000\n\n" +
      "**Part AC** = 450'000 / 1'000'000 = **45%**\n" +
      "**Part AI** = 550'000 / 1'000'000 = **55%**\n\n" +
      "**CE total** = CE CT + CE LT = 300'000 + 250'000 = CHF 550'000\n" +
      "**Degré d'endettement** = 550'000 / 1'000'000 = **55%**\n" +
      "**Degré d'autofinancement** = 450'000 / 1'000'000 = **45%**\n\n" +
      "**Couverture 1** = CP / AI = 450'000 / 550'000 = **81.8%**\n" +
      "(Règle d'or : devrait être ≥ 100%, ici non respectée)\n\n" +
      "**Couverture 2** = (CP + CE LT) / AI = (450'000 + 250'000) / 550'000 = 700'000 / 550'000 = **127.3%**\n" +
      "(Règle d'argent : > 100%, respectée ✓)",
  },

  // ──────────────────────────────────────────────
  //  QCM
  // ──────────────────────────────────────────────

  {
    id: 'ana-q01',
    group: 'analyse-qcm',
    type: 'qcm',
    tag: 'analyse',
    difficulty: 1,
    title: 'Liquidité réduite (L2)',
    description: "Que mesure le ratio de liquidité réduite (L2) ?",
    options: [
      { id: 'a', text: "La capacité à payer toutes les dettes de l'entreprise", correct: false },
      { id: 'b', text: 'La capacité à payer les dettes à court terme sans vendre les stocks', correct: true },
      { id: 'c', text: 'La trésorerie disponible immédiatement', correct: false },
      { id: 'd', text: "Le degré d'endettement de l'entreprise", correct: false },
    ],
    explanation:
      "La liquidité réduite **L2 = (AC − Stocks) / CE CT** mesure la capacité de l'entreprise à honorer ses engagements à court terme en utilisant uniquement les éléments rapidement convertibles en liquidités (créances et trésorerie), sans devoir vendre les stocks.\n\n" +
      "a) Faux : c'est la solvabilité, pas la liquidité.\n" +
      "c) Faux : c'est la liquidité immédiate (L1 = Trésorerie / CE CT).\n" +
      "d) Faux : le degré d'endettement = CE / Total passif.",
  },

  {
    id: 'ana-q02',
    group: 'analyse-qcm',
    type: 'qcm',
    tag: 'analyse',
    difficulty: 1,
    title: 'Fonds de roulement net négatif',
    description: "Un fonds de roulement net (FRN) négatif signifie :",
    options: [
      { id: 'a', text: "L'entreprise est en faillite", correct: false },
      { id: 'b', text: 'Les actifs immobilisés sont partiellement financés par des dettes à court terme', correct: true },
      { id: 'c', text: "L'entreprise n'a pas de stocks", correct: false },
      { id: 'd', text: 'Le BFR est trop élevé', correct: false },
    ],
    explanation:
      "FRN = (CP + CE LT) − AI. Un FRN négatif signifie que les capitaux permanents (CP + CE LT) ne suffisent pas à financer la totalité des actifs immobilisés. Une partie des AI est donc financée par des dettes à court terme, ce qui est risqué pour la stabilité financière.\n\n" +
      "a) Faux : un FRN négatif est un signal d'alerte, mais pas forcément une faillite.\n" +
      "c) Faux : les stocks n'ont aucun lien direct avec le FRN.\n" +
      "d) Faux : un BFR élevé affecte la trésorerie nette, pas le FRN.",
  },

  {
    id: 'ana-q03',
    group: 'analyse-qcm',
    type: 'qcm',
    tag: 'analyse',
    difficulty: 2,
    title: 'Effet de levier financier',
    description: "L'effet de levier financier est positif lorsque :",
    options: [
      { id: 'a', text: "L'entreprise n'a pas de dettes", correct: false },
      { id: 'b', text: 'Le ROA est supérieur au coût de la dette', correct: true },
      { id: 'c', text: 'Le ROE est inférieur au ROA', correct: false },
      { id: 'd', text: 'Les charges fixes dépassent les charges variables', correct: false },
    ],
    explanation:
      "L'effet de levier est positif lorsque la **rentabilité économique (ROA) > coût de la dette (i)**. Dans ce cas, chaque franc emprunté rapporte plus qu'il ne coûte, ce qui augmente la rentabilité des fonds propres (ROE > ROA).\n\n" +
      "a) Faux : sans dette, il n'y a pas de levier du tout.\n" +
      "c) Faux : c'est l'inverse — un levier positif donne ROE > ROA.\n" +
      "d) Faux : cela concerne le levier opérationnel, pas le levier financier.",
  },

  {
    id: 'ana-q04',
    group: 'analyse-qcm',
    type: 'qcm',
    tag: 'analyse',
    difficulty: 2,
    title: 'Réduction du BFR',
    description: "Pour réduire le besoin en fonds de roulement (BFR), l'entreprise peut :",
    options: [
      { id: 'a', text: 'Augmenter le délai de paiement accordé aux clients', correct: false },
      { id: 'b', text: 'Diminuer le stock de sécurité', correct: false },
      { id: 'c', text: 'Raccourcir le délai de paiement des fournisseurs', correct: false },
      { id: 'd', text: "Accélérer l'encaissement des créances clients", correct: true },
    ],
    explanation:
      "BFR = Stocks + Créances clients − Dettes fournisseurs. Pour **réduire** le BFR, il faut :\n" +
      "- Réduire les créances (encaisser plus vite) ✓\n" +
      "- Réduire les stocks\n" +
      "- Augmenter les dettes fournisseurs (payer plus tard)\n\n" +
      "a) Faux : augmenter le délai clients augmente les créances → BFR augmente.\n" +
      "b) Diminuer les stocks réduit le BFR, mais « stock de sécurité » seul ne suffit pas à qualifier la meilleure action.\n" +
      "c) Faux : raccourcir le délai fournisseurs réduit les dettes → BFR augmente.\n" +
      "d) Correct : encaisser plus vite réduit les créances → BFR diminue.",
  },

  {
    id: 'ana-q05',
    group: 'analyse-qcm',
    type: 'qcm',
    tag: 'analyse',
    difficulty: 2,
    title: 'Seuil de rentabilité',
    description: "Au seuil de rentabilité :",
    options: [
      { id: 'a', text: 'Le bénéfice est maximal', correct: false },
      { id: 'b', text: 'La marge de contribution totale couvre exactement les charges fixes', correct: true },
      { id: 'c', text: 'Les charges variables sont nulles', correct: false },
      { id: 'd', text: "Le chiffre d'affaires est au maximum", correct: false },
    ],
    explanation:
      "Au seuil de rentabilité (break-even), le résultat est nul : **Marge de contribution totale = Charges fixes**.\n\n" +
      "Résultat = MC totale − CF = 0 → MC totale = CF\n\n" +
      "a) Faux : au seuil, le bénéfice est nul (ni profit ni perte).\n" +
      "c) Faux : au seuil, il y a des ventes, donc des charges variables.\n" +
      "d) Faux : le CA au seuil est le minimum pour ne pas perdre d'argent, pas le maximum.",
  },

  {
    id: 'ana-q06',
    group: 'analyse-qcm',
    type: 'qcm',
    tag: 'analyse',
    difficulty: 2,
    title: 'Méthode des praticiens',
    description: "Dans la méthode des praticiens suisse, quelle pondération est appliquée ?",
    options: [
      { id: 'a', text: '1/3 valeur de rendement + 2/3 valeur substantielle', correct: false },
      { id: 'b', text: '1/2 valeur de rendement + 1/2 valeur substantielle', correct: false },
      { id: 'c', text: '2/3 valeur de rendement + 1/3 valeur substantielle', correct: true },
      { id: 'd', text: '100% valeur de rendement', correct: false },
    ],
    explanation:
      "La méthode des praticiens suisse pondère la **valeur de rendement 2 fois** et la **valeur substantielle 1 fois** :\n\n" +
      "**Valeur = (1 × VS + 2 × VR) / 3**\n\n" +
      "Cela donne 2/3 de poids au rendement et 1/3 à la substance, reflétant l'importance de la capacité bénéficiaire future dans l'évaluation d'une entreprise en continuité d'exploitation.",
  },

  {
    id: 'ana-q07',
    group: 'analyse-qcm',
    type: 'qcm',
    tag: 'analyse',
    difficulty: 2,
    title: 'Amortissements dans le tableau de flux',
    description: "Les amortissements sont ajoutés au bénéfice net dans le tableau de flux (méthode indirecte) parce que :",
    options: [
      { id: 'a', text: 'Ils représentent un gain pour l\'entreprise', correct: false },
      { id: 'b', text: 'Ce sont des charges comptabilisées sans décaissement de trésorerie', correct: true },
      { id: 'c', text: 'Ils augmentent la trésorerie disponible', correct: false },
      { id: 'd', text: 'Ils sont déductibles fiscalement', correct: false },
    ],
    explanation:
      "Dans la méthode indirecte, on part du bénéfice net (qui a déjà déduit les amortissements). Or les amortissements sont des **charges non décaissées** (non-cash) : ils réduisent le bénéfice comptable sans affecter la trésorerie. On les rajoute donc pour obtenir le cash-flow réel.\n\n" +
      "a) Faux : les amortissements ne sont pas un gain, c'est un ajustement.\n" +
      "c) Faux : les amortissements n'augmentent pas la trésorerie ; on corrige simplement le bénéfice.\n" +
      "d) Vrai en soi, mais ce n'est pas la raison de l'ajustement dans le tableau de flux.",
  },

  {
    id: 'ana-q08',
    group: 'analyse-qcm',
    type: 'qcm',
    tag: 'analyse',
    difficulty: 3,
    title: 'Décomposition DuPont du ROE',
    description: "La décomposition DuPont du ROE est :",
    options: [
      { id: 'a', text: 'Marge nette × Rotation des actifs × Levier financier', correct: true },
      { id: 'b', text: 'EBITDA / CA × CA / CE', correct: false },
      { id: 'c', text: 'Bénéfice / CA × CA / CP', correct: false },
      { id: 'd', text: "ROA × Taux d'endettement", correct: false },
    ],
    explanation:
      "La décomposition DuPont décompose le ROE en trois facteurs :\n\n" +
      "**ROE = (Bénéfice net / CA) × (CA / Total actifs) × (Total actifs / CP)**\n" +
      "= Marge nette × Rotation des actifs × Levier financier\n\n" +
      "Cela permet d'identifier si la rentabilité provient de la profitabilité (marge), de l'efficacité opérationnelle (rotation) ou de la structure financière (levier).\n\n" +
      "b) Faux : utilise l'EBITDA et les CE, pas la bonne formule.\n" +
      "c) Faux : omet le levier financier (actifs/CP) en simplifiant en deux facteurs.\n" +
      "d) Faux : le taux d'endettement n'est pas le levier financier (actifs/CP).",
  },
];
