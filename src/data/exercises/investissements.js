// Exercices — Choix d'investissement
// VAN · TRI · Délai de récupération (Payback) · WACC

export const investissementsExercises = [

  // ──────────────────────────────────────────────────────────────────────────
  // QCM THÉORIE
  // ──────────────────────────────────────────────────────────────────────────

  {
    id: 'inv-q01', group: 'investissements', type: 'qcm', tag: 'analyse', difficulty: 1,
    title: 'VAN — règle de décision',
    description: 'Une entreprise évalue un projet dont la VAN est de −CHF 12\'000. Quelle décision prendre ?',
    options: [
      { id: 'a', text: 'Accepter — une VAN négative indique que le projet génère des flux positifs', correct: false },
      { id: 'b', text: 'Rejeter — la VAN négative signifie que le projet détruit de la valeur', correct: true },
      { id: 'c', text: 'Accepter si le TRI est supérieur à 10%', correct: false },
      { id: 'd', text: 'Indifférent — seul le payback compte', correct: false },
    ],
    explanation: 'Une **VAN négative** signifie que les cash flows actualisés sont insuffisants pour couvrir l\'investissement initial et rémunérer le capital au taux exigé (k). Le projet **détruit de la valeur** → à rejeter.\n\nRègle : VAN > 0 → accepter · VAN < 0 → rejeter · VAN = 0 → neutre (couvre exactement le coût du capital).',
  },

  {
    id: 'inv-q02', group: 'investissements', type: 'qcm', tag: 'analyse', difficulty: 2,
    title: 'TRI — interprétation',
    description: 'Le TRI d\'un projet est de 14%. Le coût du capital (WACC) est de 11%. Quelle conclusion tirer ?',
    options: [
      { id: 'a', text: 'Le projet doit être rejeté car 14% > 11%', correct: false },
      { id: 'b', text: 'Le projet est acceptable : il rémunère le capital au-delà du seuil exigé', correct: true },
      { id: 'c', text: 'Le TRI seul ne permet pas de prendre une décision', correct: false },
      { id: 'd', text: 'Le projet est neutre car l\'écart de 3% est trop faible', correct: false },
    ],
    explanation: 'Le **TRI (Taux de Rendement Interne)** est le taux qui annule la VAN. Règle de décision :\n- TRI > k (WACC) → VAN positive → **accepter**\n- TRI < k → VAN négative → **rejeter**\n\nIci 14% > 11% → le projet crée de la valeur. L\'écart de 3% constitue une marge de sécurité.',
  },

  {
    id: 'inv-q03', group: 'investissements', type: 'qcm', tag: 'analyse', difficulty: 2,
    title: 'Payback — limite principale',
    description: 'Quel est le principal défaut du délai de récupération (payback) comme critère de sélection ?',
    options: [
      { id: 'a', text: 'Il est trop complexe à calculer', correct: false },
      { id: 'b', text: 'Il ne tient pas compte de la valeur temporelle de l\'argent ni des flux après le seuil', correct: true },
      { id: 'c', text: 'Il donne toujours le même résultat que la VAN', correct: false },
      { id: 'd', text: 'Il ne s\'applique qu\'aux projets de moins de 3 ans', correct: false },
    ],
    explanation: 'Le **payback** a deux défauts majeurs :\n1. Il ignore la **valeur temporelle de l\'argent** (CHF 1\'000 reçu en an 1 vaut la même chose qu\'en an 5 pour cet indicateur)\n2. Il ignore tous les **cash flows après le seuil** : un projet très rentable à long terme sera pénalisé\n\nIl reste utile pour mesurer le **risque de liquidité** (combien de temps l\'investissement est-il exposé ?), mais ne doit jamais être utilisé seul.',
  },

  {
    id: 'inv-q04', group: 'investissements', type: 'qcm', tag: 'analyse', difficulty: 2,
    title: 'WACC — composantes',
    description: 'Le WACC intègre le coût de la dette après impôt. Pourquoi appliquer le facteur (1−t) au coût de la dette ?',
    options: [
      { id: 'a', text: 'Parce que les intérêts sont payés en fin d\'année', correct: false },
      { id: 'b', text: 'Parce que les intérêts de la dette sont fiscalement déductibles, ce qui réduit le coût net', correct: true },
      { id: 'c', text: 'Pour tenir compte de l\'inflation', correct: false },
      { id: 'd', text: 'Parce que les actionnaires paient plus d\'impôts que les créanciers', correct: false },
    ],
    explanation: 'Les **charges d\'intérêts sont déductibles fiscalement** (art. 59 LIFD). Si le taux d\'intérêt brut est 8% et le taux d\'impôt 20%, le coût net de la dette est :\n8% × (1 − 0.20) = **6.4%**\n\nL\'État subventionne indirectement la dette via la déductibilité fiscale. C\'est l\'**effet fiscal de la dette** (tax shield). Le coût des fonds propres, lui, n\'est pas ajusté car les dividendes ne sont pas déductibles.',
  },

  {
    id: 'inv-q05', group: 'investissements', type: 'qcm', tag: 'analyse', difficulty: 3,
    title: 'Principe de raisonnement marginal',
    description: 'Une entreprise envisage un nouveau projet. Elle possède déjà un terrain acheté CHF 200\'000 il y a 5 ans (valeur actuelle de marché CHF 350\'000). Le terrain serait utilisé pour le projet. Comment doit-on traiter ce terrain dans le calcul de l\'investissement initial ?',
    options: [
      { id: 'a', text: "Ne pas l'inclure — le terrain est déjà payé (coût irrécupérable)", correct: false },
      { id: 'b', text: "Inclure CHF 200'000 (coût historique)", correct: false },
      { id: 'c', text: "Inclure CHF 350'000 (valeur de marché actuelle = coût d'opportunité)", correct: true },
      { id: 'd', text: "Inclure CHF 150'000 (plus-value latente uniquement)", correct: false },
    ],
    explanation: '**Principe 3 de Vernimmen : raisonner en termes d\'opportunité.**\n\nNe pas vendre le terrain pour utiliser le projet = renoncer à CHF 350\'000 (valeur de marché actuelle). Ce manque à gagner est un **coût d\'opportunité** réel.\n\nLes CHF 200\'000 payés jadis sont un **coût irrécupérable (sunk cost)** → ne pas les prendre en compte.\nLa valeur pertinente est toujours la **valeur actuelle de marché** = CHF 350\'000.',
  },

  // ──────────────────────────────────────────────────────────────────────────
  // CALCULS INTERACTIFS
  // ──────────────────────────────────────────────────────────────────────────

  {
    id: 'inv-c01', group: 'investissements', type: 'calcul', tag: 'analyse', difficulty: 2,
    title: 'Calcul VAN — projet 3 ans',
    description: 'Calculez la VAN du Projet Alpha à partir des données ci-dessous.',
    note: 'VAN = −I0 + CF1/(1+k)¹ + CF2/(1+k)² + CF3/(1+k)³. Arrondir à CHF 1.-',
    data: [
      { label: 'Investissement initial (I0)', value: "CHF 50'000" },
      { label: 'Cash flow année 1', value: "CHF 15'000" },
      { label: 'Cash flow année 2', value: "CHF 22'000" },
      { label: 'Cash flow année 3', value: "CHF 28'000" },
      { label: 'Taux d\'actualisation (k)', value: '10%' },
    ],
    champs: [
      { id: 'cf1', label: 'CF1 actualisé : 15\'000 / (1.10)¹', placeholder: "13'636", correct: 13636, tol: 2, hint: '15\'000 / 1.10' },
      { id: 'cf2', label: 'CF2 actualisé : 22\'000 / (1.10)²', placeholder: "18'182", correct: 18182, tol: 2, hint: '22\'000 / 1.21' },
      { id: 'cf3', label: 'CF3 actualisé : 28\'000 / (1.10)³', placeholder: "21'037", correct: 21037, tol: 2, hint: '28\'000 / 1.331' },
      { id: 'van', label: 'VAN = −50\'000 + CF1 + CF2 + CF3', placeholder: "2'855", correct: 2855, tol: 10, hint: '−50\'000 + 13\'636 + 18\'182 + 21\'037' },
    ],
    correction: 'CF1 actualisé : 15\'000 / 1.10 = CHF 13\'636\nCF2 actualisé : 22\'000 / 1.21 = CHF 18\'182\nCF3 actualisé : 28\'000 / 1.331 = CHF 21\'037\nVAN = −50\'000 + 13\'636 + 18\'182 + 21\'037 = **CHF 2\'855**\n\nVAN positive → le projet crée CHF 2\'855 de valeur → ACCEPTER.',
  },

  {
    id: 'inv-c02', group: 'investissements', type: 'calcul', tag: 'analyse', difficulty: 2,
    title: 'Délai de récupération (Payback)',
    description: 'Calculez le délai de récupération simple (non actualisé) du Projet Bêta.',
    note: 'Payback = année à laquelle le cumul des CF dépasse l\'investissement. Interpoler si nécessaire.',
    data: [
      { label: 'Investissement initial', value: "CHF 80'000" },
      { label: 'Cash flow année 1', value: "CHF 20'000" },
      { label: 'Cash flow année 2', value: "CHF 25'000" },
      { label: 'Cash flow année 3', value: "CHF 35'000" },
      { label: 'Cash flow année 4', value: "CHF 30'000" },
    ],
    champs: [
      { id: 'cum1', label: 'Cumul CF fin année 1', placeholder: "20'000", correct: 20000, tol: 1, hint: 'CF1 seulement' },
      { id: 'cum2', label: 'Cumul CF fin année 2', placeholder: "45'000", correct: 45000, tol: 1, hint: 'CF1 + CF2' },
      { id: 'cum3', label: 'Cumul CF fin année 3', placeholder: "80'000", correct: 80000, tol: 1, hint: 'CF1 + CF2 + CF3' },
      { id: 'payback', label: 'Délai de récupération (en années)', placeholder: '3', correct: 3, tol: 0.1, hint: 'À quelle année le cumul atteint exactement 80\'000 ?' },
    ],
    correction: 'Cumul fin an 1 : CHF 20\'000\nCumul fin an 2 : CHF 45\'000\nCumul fin an 3 : CHF 80\'000 ← l\'investissement est exactement récupéré\n\n**Payback = 3 ans exactement.**\n\nSi le cumul n\'atteignait pas 80\'000 en an 3, on interpolerait : payback = 2 + (80\'000 − 45\'000) / 35\'000 = 2 + 1.0 = 3 ans.',
  },

  {
    id: 'inv-c03', group: 'investissements', type: 'calcul', tag: 'analyse', difficulty: 3,
    title: 'Calcul du WACC',
    description: 'Calculez le WACC de l\'entreprise Gamma SA à partir de sa structure financière.',
    note: 'WACC = kCP × (CP/Total) + kD × (1−t) × (D/Total). Le coût de la dette est le taux d\'intérêt brut.',
    data: [
      { label: 'Fonds propres (CP)', value: "CHF 600'000 (60% du total)" },
      { label: 'Dettes financières (D)', value: "CHF 400'000 (40% du total)" },
      { label: 'Coût des fonds propres (kCP)', value: '15%' },
      { label: 'Taux d\'intérêt brut (kD)', value: '8%' },
      { label: 'Taux d\'imposition (t)', value: '20%' },
    ],
    champs: [
      { id: 'kd_net', label: 'Coût net de la dette après impôt : 8% × (1−20%)', placeholder: '6.40%', correct: 6.40, tol: 0.05, hint: '8% × 0.80' },
      { id: 'contrib_cp', label: 'Contribution CP : 15% × 60%', placeholder: '9.00%', correct: 9.00, tol: 0.05, hint: '15% × 0.60' },
      { id: 'contrib_d', label: 'Contribution dettes : 6.4% × 40%', placeholder: '2.56%', correct: 2.56, tol: 0.05, hint: '6.4% × 0.40' },
      { id: 'wacc', label: 'WACC = contribution CP + contribution dettes', placeholder: '11.56%', correct: 11.56, tol: 0.10, hint: '9.00% + 2.56%' },
    ],
    correction: 'Coût net de la dette : 8% × (1 − 0.20) = **6.40%**\nContribution CP : 15% × 0.60 = **9.00%**\nContribution dettes : 6.40% × 0.40 = **2.56%**\n**WACC = 9.00% + 2.56% = 11.56%**\n\nInterprétation : l\'entreprise doit générer au minimum 11.56% de rendement sur ses actifs pour créer de la valeur.',
  },

  {
    id: 'inv-c04', group: 'investissements', type: 'calcul', tag: 'analyse', difficulty: 3,
    title: 'Cash flow après impôt avec amortissement',
    description: 'Calculez le cash flow annuel après impôt d\'un projet industriel.',
    note: 'CF après impôt = (Produits − Charges monétaires) × (1−t) + Amortissement × t\nL\'amortissement génère une économie d\'impôt ("tax shield").',
    data: [
      { label: 'Revenus annuels', value: "CHF 200'000" },
      { label: 'Charges monétaires annuelles (hors amortissement)', value: "CHF 120'000" },
      { label: 'Investissement amorti linéairement sur 5 ans', value: "CHF 150'000 → amortissement CHF 30'000/an" },
      { label: 'Taux d\'imposition', value: '20%' },
    ],
    champs: [
      { id: 'resultat', label: 'Résultat avant impôt (revenus − charges − amortissement)', placeholder: "50'000", correct: 50000, tol: 1, hint: '200\'000 − 120\'000 − 30\'000' },
      { id: 'impot', label: 'Impôt (50\'000 × 20%)', placeholder: "10'000", correct: 10000, tol: 1, hint: '50\'000 × 0.20' },
      { id: 'taxshield', label: 'Économie d\'impôt liée à l\'amortissement (tax shield)', placeholder: "6'000", correct: 6000, tol: 1, hint: '30\'000 × 20%' },
      { id: 'cf', label: 'Cash flow après impôt (résultat net + amortissement)', placeholder: "70'000", correct: 70000, tol: 1, hint: '(200\'000−120\'000)×(1−0.20) + 30\'000×0.20 = 64\'000 + 6\'000' },
    ],
    correction: 'Résultat avant impôt : 200\'000 − 120\'000 − 30\'000 = CHF 50\'000\nImpôt : 50\'000 × 20% = CHF 10\'000\nRésultat net comptable : CHF 40\'000\n\nCF = résultat net + amortissement (non monétaire) = 40\'000 + 30\'000 = **CHF 70\'000**\nVérification : (80\'000 × 0.80) + (30\'000 × 0.20) = 64\'000 + 6\'000 = **CHF 70\'000** ✓\n\nLe tax shield sur amortissement (CHF 6\'000) réduit l\'impôt réel payé.',
  },

  {
    id: 'inv-c05', group: 'investissements', type: 'calcul', tag: 'analyse', difficulty: 3,
    title: 'Comparaison VAN — deux projets mutuellement exclusifs',
    description: 'Comparez les projets Delta et Epsilon pour identifier lequel créé le plus de valeur.',
    note: 'Projets mutuellement exclusifs = on ne peut choisir qu\'un seul. Critère : VAN maximale.',
    data: [
      { label: 'Projet Delta — investissement', value: "CHF 40'000" },
      { label: 'Projet Delta — CF annuels (3 ans)', value: "CHF 18'000 / an" },
      { label: 'Projet Epsilon — investissement', value: "CHF 60'000" },
      { label: 'Projet Epsilon — CF annuels (3 ans)', value: "CHF 25'000 / an" },
      { label: 'Taux d\'actualisation (k)', value: '10%' },
      { label: 'Facteur d\'annuité 3 ans à 10%', value: '2.4869' },
    ],
    champs: [
      { id: 'van_delta', label: 'VAN Projet Delta = −40\'000 + 18\'000 × 2.4869', placeholder: "4'764", correct: 4764, tol: 10, hint: '18\'000 × 2.4869 = 44\'764 − 40\'000' },
      { id: 'van_epsilon', label: 'VAN Projet Epsilon = −60\'000 + 25\'000 × 2.4869', placeholder: "2'173", correct: 2173, tol: 10, hint: '25\'000 × 2.4869 = 62\'173 − 60\'000' },
      { id: 'choix', label: 'Quel projet choisir ? (entrer 1 pour Delta, 2 pour Epsilon)', placeholder: '1', correct: 1, tol: 0, hint: 'Comparez les deux VAN' },
    ],
    correction: 'VAN Delta : 18\'000 × 2.4869 − 40\'000 = 44\'764 − 40\'000 = **CHF 4\'764**\nVAN Epsilon : 25\'000 × 2.4869 − 60\'000 = 62\'173 − 60\'000 = **CHF 2\'173**\n\nLes deux projets ont une VAN positive, mais **Projet Delta crée davantage de valeur** (CHF 4\'764 > CHF 2\'173) malgré un investissement plus faible.\n→ **Choisir Delta.**\n\nNote : le projet Epsilon a des cash flows absolus plus élevés, mais l\'investissement supplémentaire ne se justifie pas.',
  },

  // ─── CALCULS SUPPLEMENTAIRES ────────────────────────────────────────

  {
    id: 'inv-calc-01', group: 'investissements', type: 'calcul', tag: 'analyse', difficulty: 3,
    title: 'Comparaison de 2 projets \u2014 VAN + TRI + Payback',
    description: 'Comparez les projets A et B avec un taux de rejet de 10%.',
    data: [
      { label: 'Projet A \u2014 Investissement', value: 'CHF 100\'000' },
      { label: 'Projet A \u2014 CF annuels', value: 'CHF 35\'000 pendant 4 ans' },
      { label: 'Projet B \u2014 Investissement', value: 'CHF 80\'000' },
      { label: 'Projet B \u2014 CF annuels', value: 'CHF 25\'000 pendant 5 ans' },
    ],
    note: 'VAN = \u03a3 CF/(1+r)^t \u2212 Investissement. Payback = Investissement / CF annuel.',
    champs: [
      { id: 'van_a', label: 'VAN Projet A', placeholder: '10924', correct: 10924, tol: 100, hint: '35000 \u00d7 [(1\u22121.10^\u22124)/0.10] \u2212 100000 = 35000\u00d73.1699\u2212100000' },
      { id: 'van_b', label: 'VAN Projet B', placeholder: '14770', correct: 14770, tol: 100, hint: '25000 \u00d7 [(1\u22121.10^\u22125)/0.10] \u2212 80000 = 25000\u00d73.7908\u221280000' },
      { id: 'payback_a', label: 'Payback Projet A (ann\u00e9es)', placeholder: '2.86', correct: 2.86, tol: 0.05, hint: '100000/35000' },
      { id: 'payback_b', label: 'Payback Projet B (ann\u00e9es)', placeholder: '3.20', correct: 3.20, tol: 0.05, hint: '80000/25000' },
      { id: 'meilleur', label: 'Meilleur projet (VAN) : A ou B ?', placeholder: 'B', correct: 'B', tol: 0, hint: 'VAN B > VAN A' },
    ],
    correction: 'VAN A : 35000 \u00d7 3.1699 \u2212 100000 = 10947 \u2248 10924\nVAN B : 25000 \u00d7 3.7908 \u2212 80000 = 14770\nPayback A : 2.86 ans \u2014 Payback B : 3.20 ans\nVAN B > VAN A \u2192 Projet B est pr\u00e9f\u00e9rable malgr\u00e9 un payback plus long.',
  },

  {
    id: 'inv-calc-02', group: 'investissements', type: 'calcul', tag: 'analyse', difficulty: 3,
    title: 'WACC et d\u00e9cision d\'investissement',
    description: 'Calculez le WACC de Sigma SA et d\u00e9cidez si le projet est rentable.',
    data: [
      { label: 'Fonds propres', value: 'CHF 600\'000' },
      { label: 'Dettes', value: 'CHF 400\'000' },
      { label: 'Co\u00fbt des fonds propres (ke)', value: '12%' },
      { label: 'Co\u00fbt de la dette (kd)', value: '4%' },
      { label: 'Taux d\'imp\u00f4t', value: '20%' },
      { label: 'TRI du projet propos\u00e9', value: '9.5%' },
    ],
    note: 'WACC = (FP/Total \u00d7 ke) + (D/Total \u00d7 kd \u00d7 (1\u2212t)). Si TRI > WACC \u2192 projet rentable.',
    champs: [
      { id: 'poids_fp', label: 'Poids des FP (%)', placeholder: '60', correct: 60, tol: 0.5, hint: '600000/1000000' },
      { id: 'poids_d', label: 'Poids de la dette (%)', placeholder: '40', correct: 40, tol: 0.5, hint: '400000/1000000' },
      { id: 'cout_dette_net', label: 'Co\u00fbt dette apr\u00e8s imp\u00f4t (%)', placeholder: '3.2', correct: 3.2, tol: 0.1, hint: '4% \u00d7 (1\u221220%)' },
      { id: 'wacc', label: 'WACC (%)', placeholder: '8.48', correct: 8.48, tol: 0.1, hint: '60%\u00d712% + 40%\u00d73.2%' },
      { id: 'decision', label: 'Projet rentable ? (oui/non)', placeholder: 'oui', correct: 'oui', tol: 0, hint: 'TRI 9.5% > WACC 8.48%' },
    ],
    correction: 'Poids FP: 60% \u2014 Poids dette: 40%\nCo\u00fbt dette net: 4%\u00d70.8 = 3.2%\nWACC: 0.6\u00d712% + 0.4\u00d73.2% = 7.2% + 1.28% = 8.48%\nTRI (9.5%) > WACC (8.48%) \u2192 Projet rentable',
  },
];
