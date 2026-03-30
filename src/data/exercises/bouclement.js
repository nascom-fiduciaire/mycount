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
];
