// Plan comptable PME suisse – référence officielle SKV/swisco
// Utilisé dans toute l'application MyCount
// Méthode : postes ouverts (créanciers/débiteurs systématiques)

export const PLAN_COMPTABLE = {
  // ─── CLASSE 1 : ACTIF ─────────────────────────────────────────────
  '1000': 'Caisse',
  '1010': 'Chèques postaux',
  '1020': 'Banque',
  '1060': 'Titres cotés (court terme)',
  '1100': 'Débiteurs suisses',
  '1101': 'Débiteurs étrangers',
  '1109': 'Ducroire (correction de valeur débiteurs)',
  '1140': 'Avances et acomptes versés',
  '1170': 'Impôt préalable (TVA récupérable)',
  '1176': 'Impôt préalable – investissements',
  '1180': 'Actifs transitoires (charges payées d\'avance / produits à recevoir)',
  '1200': 'Stocks de marchandises',
  '1210': 'Stocks de matières premières',
  '1260': 'Produits finis',
  '1300': 'Immobilisations financières',
  '1400': 'Participations',
  '1441': 'Prêts',
  '1500': 'Machines et appareils',
  '1520': 'Mobilier et installations',
  '1530': 'Parc de véhicules',
  '1540': 'Matériel informatique',
  '1600': 'Immeubles',
  '1700': 'Immobilisations incorporelles',
  '1800': 'Capital non libéré',

  // ─── CLASSE 2 : PASSIF ────────────────────────────────────────────
  '2000': 'Créanciers suisses',
  '2001': 'Créanciers étrangers',
  '2100': 'Dettes bancaires à court terme',
  '2140': 'Avances et acomptes reçus de clients',
  '2200': 'TVA due (TVA sur ventes)',
  '2201': 'Décompte TVA (solde à payer AFC)',
  '2206': 'TVA due – investissements',
  '2261': 'Dividendes à payer',
  '2270': 'Charges sociales à payer (AVS/AI/APG/AC/LPP/LAA)',
  '2271': 'Impôt à la source à payer',
  '2275': 'Allocations familiales à payer',
  '2279': 'Autres charges sociales à payer',
  '2280': 'Passifs transitoires (produits reçus d\'avance / charges à payer)',
  '2300': 'Dettes à long terme',
  '2400': 'Dettes hypothécaires',
  '2500': 'Provisions',
  '2800': 'Capital-actions / capital social',
  '2900': 'Réserve légale issue du capital',
  '2950': 'Réserve légale issue du bénéfice',
  '2960': 'Réserves facultatives issues du bénéfice',
  '2970': 'Bénéfice/perte reporté(e)',
  '2979': 'Bénéfice/perte de l\'exercice',

  // ─── CLASSE 3 : PRODUITS D'EXPLOITATION ──────────────────────────
  '3000': 'Ventes de produits finis',
  '3200': 'Ventes de marchandises',
  '3400': 'Produits de prestations de services',
  '3600': 'Autres produits d\'exploitation',
  '3700': 'Produits annexes (loyers, honoraires)',
  '3800': 'Variation des stocks et des travaux en cours',
  '3900': 'Travaux effectués par l\'entreprise pour elle-même',

  // ─── CLASSE 4 : CHARGES DE MATIÈRES ET MARCHANDISES ─────────────
  '4000': 'Achats de matières premières',
  '4200': 'Achats de marchandises',
  '4400': 'Variation de stocks – matières premières',
  '4500': 'Variation de stocks – marchandises',
  '4900': 'Charges de matières annexes',

  // ─── CLASSE 5 : CHARGES DE PERSONNEL ─────────────────────────────
  '5000': 'Salaires et appointements',
  '5700': 'Charges sociales (AVS/AI/APG – part patronale)',
  '5710': 'Charges AC (assurance-chômage – part patronale)',
  '5720': 'Charges LPP (prévoyance professionnelle – part patronale)',
  '5730': 'Charges LAA (accidents professionnels – part patronale)',
  '5740': 'Charges LAANP (accidents non professionnels – part patronale)',
  '5750': 'Charges IJM (indemnités journalières maladie – part patronale)',
  '5760': 'Allocations familiales',
  '5800': 'Autres charges de personnel',
  '5820': 'Frais de formation et perfectionnement',
  '5900': 'Salaires de l\'organe dirigeant',

  // ─── CLASSE 6 : AUTRES CHARGES D'EXPLOITATION ────────────────────
  '6000': 'Loyers',
  '6100': 'Entretien, réparations, remplacement',
  '6200': 'Véhicules et transports',
  '6300': 'Assurances et taxes',
  '6400': 'Énergie et déchets',
  '6500': 'Charges d\'administration et d\'informatique',
  '6600': 'Publicité et relations publiques',
  '6700': 'Amortissements',
  '6800': 'Charges financières (intérêts, commissions)',
  '6900': 'Autres charges d\'exploitation',
  '6950': 'Pertes sur débiteurs',
  '6960': 'Variation ducroire',

  // ─── CLASSE 7 : RÉSULTATS HORS EXPLOITATION ──────────────────────
  '7000': 'Produits financiers (intérêts)',
  '7010': 'Produits de participations',
  '7100': 'Produits immobiliers',
  '7500': 'Charges immobilières',
  '7900': 'Résultats hors exploitation',

  // ─── CLASSE 8 : RÉSULTATS EXCEPTIONNELS ──────────────────────────
  '8000': 'Produits hors exploitation / exceptionnels',
  '8100': 'Charges hors exploitation / exceptionnelles',
  '8500': 'Impôts directs',
  '8900': 'Résultat de l\'exercice',

  // ─── CLASSE 9 : COMPTES DE CLÔTURE ───────────────────────────────
  '9000': 'Bilan d\'ouverture',
  '9100': 'Compte de résultat',
  '9200': 'Compte de bilan',
};

// Comptes les plus utilisés dans les exercices (pour référence rapide)
export const COMPTES_CLES = [
  { num: '1000', label: 'Caisse' },
  { num: '1020', label: 'Banque' },
  { num: '1100', label: 'Débiteurs' },
  { num: '1109', label: 'Ducroire' },
  { num: '1170', label: 'Impôt préalable (TVA récup.)' },
  { num: '1180', label: 'Actifs transitoires' },
  { num: '1200', label: 'Stocks marchandises' },
  { num: '2000', label: 'Créanciers' },
  { num: '2200', label: 'TVA due' },
  { num: '2201', label: 'Décompte TVA AFC' },
  { num: '2270', label: 'Charges sociales à payer' },
  { num: '2280', label: 'Passifs transitoires' },
  { num: '2800', label: 'Capital-actions' },
  { num: '2970', label: 'Bénéfice/perte reporté' },
  { num: '3000', label: 'Ventes produits / prestations' },
  { num: '3200', label: 'Ventes marchandises' },
  { num: '3400', label: 'Produits de services' },
  { num: '4000', label: 'Achats matières premières' },
  { num: '4200', label: 'Achats marchandises' },
  { num: '5000', label: 'Salaires' },
  { num: '5700', label: 'Charges AVS/AI/APG patronales' },
  { num: '5710', label: 'Charges AC patronales' },
  { num: '5720', label: 'Charges LPP patronales' },
  { num: '5730', label: 'Charges LAA patronales' },
  { num: '6000', label: 'Loyers' },
  { num: '6700', label: 'Amortissements' },
  { num: '6800', label: 'Charges financières' },
  { num: '7000', label: 'Produits financiers' },
  { num: '8500', label: 'Impôts directs' },
];

export function getAccountLabel(num) {
  return PLAN_COMPTABLE[num] || num;
}
