// Exercices — Bouclement annuel

export const bouclementExercises = [
  {
    id: 'boucl-01', group: 'bouclement', type: 'journal', tag: 'bouclement', difficulty: 2,
    title: 'Amortissements annuels — 3 actifs',
    description: `Au 31.12, comptabilisez les amortissements sur 3 actifs :
1. Mobilier (1520) : CHF 24'000 à 20% linéaire
2. Informatique (1540) : CHF 15'000 à 33% linéaire
3. Véhicule (1530) : CHF 45'000 à 25% linéaire`,
    note: 'Amortissement linéaire = valeur × taux. Toujours : Débit 6700 / Crédit compte d\'actif concerné.',
    data: [
      { label: 'Mobilier (1520) — 20%', value: "CHF 4'800.00" },
      { label: 'Informatique (1540) — 33%', value: "CHF 4'950.00" },
      { label: 'Véhicule (1530) — 25%', value: "CHF 11'250.00" },
    ],
    ecritures: [
      { id: 'e1', libelle: '31.12 — Amortissement mobilier (20% × 24\'000)', debit: { num: '6700', label: 'Amortissements' }, credit: { num: '1520', label: 'Mobilier et installations' }, amount: 4800 },
      { id: 'e2', libelle: '31.12 — Amortissement informatique (33% × 15\'000)', debit: { num: '6700', label: 'Amortissements' }, credit: { num: '1540', label: 'Matériel informatique' }, amount: 4950 },
      { id: 'e3', libelle: '31.12 — Amortissement véhicule (25% × 45\'000)', debit: { num: '6700', label: 'Amortissements' }, credit: { num: '1530', label: 'Parc de véhicules' }, amount: 11250 },
    ],
  },

  {
    id: 'boucl-02', group: 'bouclement', type: 'journal', tag: 'bouclement', difficulty: 3,
    title: 'Régularisations fin d\'année — 4 écritures',
    description: `Au 31.12, passez les 4 régularisations suivantes :
1. Prime assurance payée 01.10 pour 01.10.N–30.09.N+1 : CHF 3'600 → reporter 9 mois (actif transitoire)
2. Intérêts bancaires décembre courus non facturés : CHF 380
3. Loyer janvier N+1 encaissé en décembre N : CHF 2'800
4. Prestations décembre réalisées, facture pas encore émise : CHF 4'500 HT`,
    note: 'Principe d\'indépendance des exercices : tout produit réalisé et toute charge consommée appartient à l\'exercice, quels que soient les flux de trésorerie.',
    data: [
      { label: 'Assurance — 9 mois à reporter sur N+1', value: "CHF 2'700.00 → actif transitoire" },
      { label: 'Intérêts courus non facturés', value: "CHF 380.00 → passif transitoire" },
      { label: 'Loyer janvier N+1 reçu en avance', value: "CHF 2'800.00 → passif transitoire" },
      { label: 'Prestations décembre non facturées', value: "CHF 4'500.00 → actif transitoire" },
    ],
    ecritures: [
      { id: 'e1', libelle: '31.12 — Charge payée d\'avance assurance (9 mois N+1)', debit: { num: '1180', label: 'Actifs transitoires' }, credit: { num: '6300', label: 'Assurances et taxes' }, amount: 2700 },
      { id: 'e2', libelle: '31.12 — Intérêts bancaires à payer (courus)', debit: { num: '6800', label: 'Charges financières' }, credit: { num: '2280', label: 'Passifs transitoires' }, amount: 380 },
      { id: 'e3', libelle: '31.12 — Loyer janvier N+1 reçu d\'avance', debit: { num: '1020', label: 'Banque' }, credit: { num: '2280', label: 'Passifs transitoires' }, amount: 2800 },
      { id: 'e4', libelle: '31.12 — Produits à recevoir (prestations décembre)', debit: { num: '1180', label: 'Actifs transitoires' }, credit: { num: '3400', label: 'Produits prestations' }, amount: 4500 },
    ],
  },

  {
    id: 'boucl-03', group: 'bouclement', type: 'journal', tag: 'bouclement', difficulty: 3,
    title: 'Bouclement complet — 5 opérations simultanées',
    description: `Bouclement 31.12 de Fidulex Sàrl — 5 opérations :
1. Amortissement mobilier CHF 6'000 (20% de CHF 30'000)
2. Provision impôts estimés CHF 12'500
3. Honoraires décembre non facturés CHF 7'200 HT
4. Frais audit non encore facturés CHF 3'800
5. Augmentation ducroire : actuel CHF 4'200 → cible CHF 5'100`,
    data: [
      { label: 'Amortissement mobilier', value: "CHF 6'000.00" },
      { label: 'Provision impôts', value: "CHF 12'500.00" },
      { label: 'Honoraires à recevoir HT', value: "CHF 7'200.00" },
      { label: 'Frais audit à payer', value: "CHF 3'800.00" },
      { label: 'Variation ducroire', value: "CHF 900.00 (augmentation)" },
    ],
    ecritures: [
      { id: 'e1', libelle: '31.12 — Amortissement mobilier 20%', debit: { num: '6700', label: 'Amortissements' }, credit: { num: '1520', label: 'Mobilier et installations' }, amount: 6000 },
      { id: 'e2', libelle: '31.12 — Provision impôts directs estimés', debit: { num: '8500', label: 'Impôts directs' }, credit: { num: '2500', label: 'Provisions' }, amount: 12500 },
      { id: 'e3', libelle: '31.12 — Honoraires décembre à recevoir', debit: { num: '1180', label: 'Actifs transitoires' }, credit: { num: '3400', label: 'Produits prestations' }, amount: 7200 },
      { id: 'e4', libelle: '31.12 — Frais audit à payer (non facturés)', debit: { num: '6500', label: 'Charges admin/informatique' }, credit: { num: '2280', label: 'Passifs transitoires' }, amount: 3800 },
      { id: 'e5', libelle: '31.12 — Augmentation ducroire (4\'200 → 5\'100)', debit: { num: '6960', label: 'Variation ducroire' }, credit: { num: '1109', label: 'Ducroire' }, amount: 900 },
    ],
  },

  {
    id: 'boucl-04', group: 'bouclement', type: 'qcm', tag: 'bouclement', difficulty: 2,
    title: 'Charge payée d\'avance — montant à reporter',
    description: "Le 01.09.N, prime assurance CHF 6'000 pour 01.09.N au 31.08.N+1. Actif transitoire au 31.12.N ?",
    options: [
      { id: 'a', text: "CHF 4'000 (8 mois N+1)", correct: true },
      { id: 'b', text: "CHF 2'000 (4 mois N)", correct: false },
      { id: 'c', text: "CHF 6'000 (totalité)", correct: false },
      { id: 'd', text: "CHF 0", correct: false },
    ],
    explanation: "Consommé en N : sept-oct-nov-déc = 4 mois → charge N = 6'000 × 4/12 = CHF 2'000\nRestant N+1 : jan à août = 8 mois → **actif transitoire = CHF 4'000**\n\nÉcriture : Débit 1180 CHF 4'000 / Crédit 6300 CHF 4'000",
  },

  // ─── QCM SUPPLÉMENTAIRES ──────────────────────────────────────────────
  {
    id: 'boucl-qcm-02', group: 'bouclement', type: 'qcm', tag: 'bouclement', difficulty: 1,
    title: 'Principe de prudence au bouclement',
    description: 'Lequel de ces principes s\'applique lors du bouclement annuel ?',
    options: [
      { id: 'a', text: 'On comptabilise les gains potentiels d\u00e8s qu\'ils sont probables', correct: false },
      { id: 'b', text: 'On ne comptabilise que les pertes r\u00e9alis\u00e9es', correct: false },
      { id: 'c', text: 'On comptabilise toutes les pertes pr\u00e9visibles, m\u00eame non r\u00e9alis\u00e9es', correct: true },
      { id: 'd', text: 'On peut reporter les pertes \u00e0 l\'exercice suivant', correct: false },
    ],
    explanation: 'Le principe de prudence impose de comptabiliser toutes les pertes pr\u00e9visibles (m\u00eame non encore r\u00e9alis\u00e9es) mais interdit de comptabiliser les gains non encore r\u00e9alis\u00e9s.',
  },

  {
    id: 'boucl-qcm-03', group: 'bouclement', type: 'qcm', tag: 'bouclement', difficulty: 2,
    title: 'Actifs et passifs transitoires',
    description: 'L\'entreprise a pay\u00e9 CHF 6\'000 en d\u00e9cembre pour une assurance couvrant janvier \u00e0 juin de l\'ann\u00e9e suivante. Quelle \u00e9criture de bouclement ?',
    options: [
      { id: 'a', text: 'D\u00e9bit Actifs transitoires / Cr\u00e9dit Charges d\'assurance CHF 3\'000', correct: false },
      { id: 'b', text: 'D\u00e9bit Charges pay\u00e9es d\'avance / Cr\u00e9dit Charges d\'assurance CHF 6\'000', correct: true },
      { id: 'c', text: 'D\u00e9bit Charges d\'assurance / Cr\u00e9dit Passifs transitoires CHF 6\'000', correct: false },
      { id: 'd', text: 'Aucune \u00e9criture n\u00e9cessaire', correct: false },
    ],
    explanation: 'L\'assurance a \u00e9t\u00e9 pay\u00e9e et comptabilis\u00e9e en charges. Mais CHF 6\'000 concerne l\'exercice suivant (jan-juin). Il faut extourner la totalit\u00e9 : D\u00e9bit 1300 Charges pay\u00e9es d\'avance / Cr\u00e9dit 6300 Assurances.',
  },

  // ─── JOURNAUX SUPPLÉMENTAIRES ─────────────────────────────────────────
  {
    id: 'boucl-04', group: 'bouclement', type: 'journal', tag: 'bouclement', difficulty: 2,
    title: 'Amortissement d\u00e9gressif \u2014 V\u00e9hicule',
    description: 'Un v\u00e9hicule acquis pour CHF 40\'000 est amorti \u00e0 40% d\u00e9gressif (m\u00e9thode indirecte). Valeur comptable nette actuelle : CHF 24\'000. Passez l\'\u00e9criture d\'amortissement.',
    data: [
      { label: 'Valeur d\'acquisition', value: 'CHF 40\'000' },
      { label: 'Valeur comptable nette', value: 'CHF 24\'000' },
      { label: 'Taux', value: '40% d\u00e9gressif' },
    ],
    note: 'D\u00e9gressif = taux appliqu\u00e9 sur la valeur r\u00e9siduelle (nette), pas sur la valeur d\'acquisition.',
    ecritures: [
      { id: 'e1', libelle: 'Amortissement v\u00e9hicule 40% d\u00e9gressif', debit: { num: '6830', label: 'Amortissements v\u00e9hicules' }, credit: { num: '1539', label: 'Ajustement valeur v\u00e9hicules' }, amount: 9600 },
    ],
  },

  {
    id: 'boucl-05', group: 'bouclement', type: 'journal', tag: 'bouclement', difficulty: 2,
    title: 'Provisions de fin d\'ann\u00e9e',
    description: 'Bouclement 31.12 \u2014 passez les 3 provisions :\n1. Provision pour imp\u00f4ts estim\u00e9s : CHF 15\'000\n2. Provision pour garantie SAV : CHF 8\'000\n3. Provision pour proc\u00e8s en cours : CHF 25\'000',
    ecritures: [
      { id: 'e1', libelle: 'Provision pour imp\u00f4ts', debit: { num: '8900', label: 'Charge d\'imp\u00f4ts' }, credit: { num: '2300', label: 'Provision imp\u00f4ts' }, amount: 15000 },
      { id: 'e2', libelle: 'Provision pour garantie SAV', debit: { num: '6800', label: 'Charges d\'exploitation' }, credit: { num: '2330', label: 'Provision garanties' }, amount: 8000 },
      { id: 'e3', libelle: 'Provision pour proc\u00e8s', debit: { num: '6800', label: 'Charges d\'exploitation' }, credit: { num: '2350', label: 'Provision litiges' }, amount: 25000 },
    ],
  },

  {
    id: 'boucl-06', group: 'bouclement', type: 'journal', tag: 'bouclement', difficulty: 3,
    title: 'Bouclement complet \u2014 8 op\u00e9rations',
    description: 'Passez toutes les \u00e9critures de bouclement au 31.12 :\n1. Amortissement mobilier CHF 5\'000 (lin\u00e9aire, m\u00e9thode directe)\n2. Amortissement v\u00e9hicule CHF 8\'000 (d\u00e9gressif, m\u00e9thode indirecte)\n3. Provision ducroire port\u00e9e \u00e0 CHF 3\'000 (solde actuel CHF 1\'500)\n4. Loyer pay\u00e9 d\'avance CHF 2\'500 (janvier N+1)\n5. Int\u00e9r\u00eats courus \u00e0 recevoir CHF 600\n6. Provision pour imp\u00f4ts CHF 12\'000\n7. Facture d\'audit \u00e0 provisionner CHF 4\'000\n8. Charges sociales provisionn\u00e9es CHF 1\'800',
    ecritures: [
      { id: 'e1', libelle: 'Amortissement mobilier (lin\u00e9aire direct)', debit: { num: '6800', label: 'Amortissements' }, credit: { num: '1500', label: 'Mobilier' }, amount: 5000 },
      { id: 'e2', libelle: 'Amortissement v\u00e9hicule (d\u00e9gressif indirect)', debit: { num: '6830', label: 'Amortissements v\u00e9hicules' }, credit: { num: '1539', label: 'Ajustement valeur v\u00e9hicules' }, amount: 8000 },
      { id: 'e3', libelle: 'Ajustement provision ducroire', debit: { num: '3900', label: 'Pertes sur d\u00e9biteurs' }, credit: { num: '1109', label: 'Ducroire' }, amount: 1500 },
      { id: 'e4', libelle: 'Loyer pay\u00e9 d\'avance (actif transitoire)', debit: { num: '1300', label: 'Charges pay\u00e9es d\'avance' }, credit: { num: '6100', label: 'Loyer' }, amount: 2500 },
      { id: 'e5', libelle: 'Int\u00e9r\u00eats courus \u00e0 recevoir', debit: { num: '1300', label: 'Produits \u00e0 recevoir' }, credit: { num: '3800', label: 'Produits financiers' }, amount: 600 },
      { id: 'e6', libelle: 'Provision pour imp\u00f4ts', debit: { num: '8900', label: 'Charge d\'imp\u00f4ts' }, credit: { num: '2300', label: 'Provision imp\u00f4ts' }, amount: 12000 },
      { id: 'e7', libelle: 'Provision frais d\'audit', debit: { num: '6700', label: 'Honoraires' }, credit: { num: '2300', label: 'Charges \u00e0 payer' }, amount: 4000 },
      { id: 'e8', libelle: 'Charges sociales provisionn\u00e9es', debit: { num: '5700', label: 'Charges sociales' }, credit: { num: '2270', label: 'Charges sociales \u00e0 payer' }, amount: 1800 },
    ],
  },

  // ─── CALCUL SUPPLÉMENTAIRE ────────────────────────────────────────────
  {
    id: 'boucl-calc-01', group: 'bouclement', type: 'calcul', tag: 'bouclement', difficulty: 2,
    title: 'Tableau d\'amortissement \u2014 Lin\u00e9aire vs d\u00e9gressif',
    description: 'Machine acquise CHF 50\'000, dur\u00e9e 5 ans. Comparez les deux m\u00e9thodes pour l\'ann\u00e9e 2.',
    data: [
      { label: 'Valeur d\'acquisition', value: 'CHF 50\'000' },
      { label: 'Dur\u00e9e de vie', value: '5 ans' },
      { label: 'Taux lin\u00e9aire', value: '20%' },
      { label: 'Taux d\u00e9gressif', value: '40%' },
    ],
    champs: [
      { id: 'lin_an1', label: 'Amortissement lin\u00e9aire ann\u00e9e 1', placeholder: '10000', correct: 10000, tol: 1, hint: '50000 \u00d7 20%' },
      { id: 'lin_an2', label: 'Amortissement lin\u00e9aire ann\u00e9e 2', placeholder: '10000', correct: 10000, tol: 1, hint: 'M\u00eame montant chaque ann\u00e9e' },
      { id: 'deg_an1', label: 'Amortissement d\u00e9gressif ann\u00e9e 1', placeholder: '20000', correct: 20000, tol: 1, hint: '50000 \u00d7 40%' },
      { id: 'deg_an2', label: 'Amortissement d\u00e9gressif ann\u00e9e 2', placeholder: '12000', correct: 12000, tol: 1, hint: '(50000-20000) \u00d7 40% = 30000 \u00d7 40%' },
      { id: 'vcn_lin_an2', label: 'VCN lin\u00e9aire fin ann\u00e9e 2', placeholder: '30000', correct: 30000, tol: 1, hint: '50000 - 10000 - 10000' },
      { id: 'vcn_deg_an2', label: 'VCN d\u00e9gressif fin ann\u00e9e 2', placeholder: '18000', correct: 18000, tol: 1, hint: '50000 - 20000 - 12000' },
    ],
    correction: 'Lin\u00e9aire : 50\'000 \u00d7 20% = 10\'000/an. VCN fin an 2 = 30\'000\nD\u00e9gressif an 1 : 50\'000 \u00d7 40% = 20\'000. VCN = 30\'000\nD\u00e9gressif an 2 : 30\'000 \u00d7 40% = 12\'000. VCN = 18\'000',
  },
];
