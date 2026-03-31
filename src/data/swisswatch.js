// ═══════════════════════════════════════════════════════════════════════════════
//  BIBLE SwiSSwatch SA — Entreprise fil rouge de MyCount
//  Ce fichier centralise toutes les données de référence utilisées dans
//  la théorie et les exercices. Toute modification ici se répercute partout.
// ═══════════════════════════════════════════════════════════════════════════════

// ─── L'ENTREPRISE ────────────────────────────────────────────────────────────
export const ENTREPRISE = {
  nom: 'SwiSSwatch SA',
  forme: 'Société anonyme (SA)',
  siege: 'La Chaux-de-Fonds (NE)',
  secteur: 'Fabrication de montres et composants horlogers',
  description: 'SwiSSwatch SA est une manufacture horlogère fondée en 2023 dans l\'Arc jurassien. Elle conçoit, fabrique et commercialise des montres mécaniques et à quartz, destinées au marché suisse et à l\'exportation. L\'entreprise emploie une vingtaine de personnes et réalise un chiffre d\'affaires d\'environ CHF 3 millions.',
  nOGA: '2652 — Fabrication d\'horlogerie',
  registreCommerce: 'CHE-123.456.789',
  tva: 'CHE-123.456.789 TVA',
  dateCreation: '15 mars 2023',

  // Capital
  capitalActions: 200000,    // CHF 200'000
  nbActions: 2000,           // 2'000 actions
  valeurNominale: 100,       // CHF 100 / action
  liberationInitiale: 0.50,  // 50% libéré à la fondation

  // Banque
  banque: 'Banque Cantonale Neuchâteloise (BCN)',
  compteBancaire: 'CH93 0076 6000 1234 5678 9',
};

// ─── LES PERSONNAGES ─────────────────────────────────────────────────────────
export const PERSONNAGES = [
  {
    id: 'keller',
    prenom: 'Théo',
    nom: 'Keller',
    role: 'Fondateur & CEO',
    age: 48,
    description: 'Ancien cadre chez Swatch Group, Théo a fondé SwiSSwatch SA avec ses économies et l\'aide d\'investisseurs. Visionnaire et passionné d\'horlogerie, il gère la stratégie et les relations clients.',
    salaireBrut: 12000,
    tauxActivite: 100,
    permis: null,
    actionsDetenues: 1200, // 60% du capital
    exercices: ['fondation', 'investissements', 'stratégie', 'dividendes'],
  },
  {
    id: 'meyer',
    prenom: 'Léa',
    nom: 'Meyer',
    role: 'Directrice financière (CFO)',
    age: 38,
    description: 'Diplômée HEC Lausanne, Léa a rejoint SwiSSwatch dès la fondation. Elle supervise la comptabilité, le controlling, la trésorerie et les rapports financiers.',
    salaireBrut: 9500,
    tauxActivite: 100,
    permis: null,
    actionsDetenues: 400, // 20% du capital
    exercices: ['bouclement', 'analyse', 'TVA', 'évaluation'],
  },
  {
    id: 'dubois',
    prenom: 'Liam',
    nom: 'Dubois',
    role: 'Responsable RH & administration',
    age: 35,
    description: 'Liam gère les ressources humaines, la paie, les assurances sociales et l\'administration générale. Il est aussi responsable de la compliance.',
    salaireBrut: 7200,
    tauxActivite: 80,
    permis: null,
    actionsDetenues: 100, // 5% du capital
    exercices: ['salaires', 'charges sociales', 'arrêts', 'fiches de salaire'],
  },
  {
    id: 'renard',
    prenom: 'Noah',
    nom: 'Renard',
    role: 'Responsable commercial & export',
    age: 31,
    description: 'Noah développe les ventes en Suisse et à l\'international. Il gère les relations avec les distributeurs, les foires horlogères et le marketing.',
    salaireBrut: 7500,
    tauxActivite: 100,
    permis: null,
    actionsDetenues: 200, // 10% du capital
    exercices: ['ventes', 'TVA export', 'débiteurs', 'escomptes'],
  },
  {
    id: 'lang',
    prenom: 'Emma',
    nom: 'Lang',
    role: 'Apprentie employée de commerce CFC',
    age: 19,
    description: 'Emma effectue son apprentissage de commerce chez SwiSSwatch. Elle découvre la comptabilité, la gestion et l\'administration. C\'est le personnage auquel l\'apprenti peut s\'identifier.',
    salaireBrut: 1400,
    tauxActivite: 100,
    permis: 'B',
    impotSource: true,
    bareme: 'A0 NE',
    tauxIS: 4.5,
    actionsDetenues: 0,
    exercices: ['impôt source', 'salaire apprenti', 'découverte'],
  },
  {
    id: 'weber',
    prenom: 'Jules',
    nom: 'Weber',
    role: 'Maître horloger',
    age: 55,
    description: 'Maître horloger avec 30 ans d\'expérience, Jules est le pilier technique de l\'atelier. Il forme les apprentis horlogers et supervise l\'assemblage des montres haut de gamme.',
    salaireBrut: 8200,
    tauxActivite: 100,
    permis: null,
    actionsDetenues: 0,
    exercices: ['salaires', 'arrêt maladie', '13e salaire'],
  },
  {
    id: 'morel',
    prenom: 'Lucas',
    nom: 'Morel',
    role: 'Technicien CNC (machines)',
    age: 29,
    description: 'Lucas opère les machines CNC de précision. Titulaire d\'un permis B, il est soumis à l\'impôt à la source.',
    salaireBrut: 5800,
    tauxActivite: 100,
    permis: 'B',
    impotSource: true,
    bareme: 'A0 NE',
    tauxIS: 8.4,
    actionsDetenues: 0,
    exercices: ['impôt source', 'accident LAA', 'heures supplémentaires'],
  },
];

// ─── L'INDÉPENDANT — Ami de Théo, sous-traitant de SwiSSwatch ──────────────
export const INDEPENDANT = {
  nom: 'Atelier Kessler',
  forme: 'Raison individuelle',
  proprietaire: 'Max Kessler',
  siege: 'Le Locle (NE)',
  description: 'Max Kessler est un maître horloger indépendant, ami de longue date de Théo Keller. Il tient un petit atelier au Locle où il réalise des travaux de finition haut de gamme (anglage, décoration de mouvements, gravure) pour SwiSSwatch SA et d\'autres manufactures. En tant qu\'indépendant, il tient une comptabilité complète avec un compte privé.',
  chiffreAffaires: 180000,
  tva: 'Assujetti (méthode effective)',
  registreCommerce: 'CHE-987.654.321',

  // Données comptables spécifiques à l\'indépendant
  capitalPropre: 45000,
  comptePriveUsages: [
    'Prélèvements en espèces pour besoins personnels',
    'Paiement d\'assurance maladie personnelle par l\'entreprise',
    'Utilisation du véhicule d\'entreprise à titre privé (part privée)',
    'Consommation de prestations propres (réparation montre personnelle)',
    'Apport supplémentaire en capital par virement personnel',
  ],
  prestationsPropres: [
    { description: 'Réparation de la montre personnelle de Max', valeur: 450, compte: '3710 Consommations propres' },
    { description: 'Fabrication d\'un cadeau pour un ami (montre gravée)', valeur: 1200, compte: '3710 Consommations propres' },
  ],
  immeubles: {
    atelier: { valeur: 320000, hypotheque: 220000, loyerFictif: 0, usage: '100% professionnel' },
    appartement: { valeur: 480000, hypotheque: 350000, loyerFictif: 18000, usage: '100% privé — loyer fictif à comptabiliser' },
  },
  titres: [
    { nom: 'Actions Swatch Group', quantite: 50, valeurAchat: 12500, valeurMarche: 14200, dividende: 375 },
    { nom: 'Obligations Confédération 2%', nominal: 20000, valeurAchat: 20000, interet: 400 },
  ],
};

// ─── DONNÉES FINANCIÈRES DE RÉFÉRENCE ────────────────────────────────────────
export const FINANCES = {
  // Année 1 (2023) — Fondation & démarrage
  annee1: {
    label: 'Année 1 — 2023 (Fondation & démarrage)',
    chiffreAffaires: 850000,
    achatsMatierres: 320000,
    chargesPersonnel: 280000,
    autresCharges: 120000,
    amortissements: 45000,
    resultatNet: 35000,
    effectif: 5,
    bilan: {
      liquidites: 85000,
      debiteurs: 120000,
      stocks: 95000,
      immobilisations: 380000,
      totalActif: 680000,
      creanciers: 75000,
      dettesCT: 40000,
      dettesLT: 200000,
      capitalActions: 200000,
      reserves: 0,
      benefice: 35000,
      fondsPropres: 235000,
      totalPassif: 680000,
    },
  },

  // Année 2 (2024) — Croissance
  annee2: {
    label: 'Année 2 — 2024 (Croissance)',
    chiffreAffaires: 1800000,
    achatsMatierres: 680000,
    chargesPersonnel: 520000,
    autresCharges: 210000,
    amortissements: 85000,
    resultatNet: 95000,
    effectif: 12,
    bilan: {
      liquidites: 120000,
      debiteurs: 280000,
      stocks: 180000,
      immobilisations: 620000,
      totalActif: 1200000,
      creanciers: 145000,
      dettesCT: 80000,
      dettesLT: 350000,
      capitalActions: 200000,
      reserves: 35000,
      benefice: 95000,
      fondsPropres: 330000,
      totalPassif: 1200000,
    },
  },

  // Année 3 (2025) — Structuration
  annee3: {
    label: 'Année 3 — 2025 (Structuration)',
    chiffreAffaires: 2800000,
    achatsMatierres: 1050000,
    chargesPersonnel: 780000,
    autresCharges: 320000,
    amortissements: 120000,
    resultatNet: 180000,
    effectif: 18,
    bilan: {
      liquidites: 200000,
      debiteurs: 420000,
      stocks: 280000,
      immobilisations: 900000,
      totalActif: 1800000,
      creanciers: 210000,
      dettesCT: 120000,
      dettesLT: 480000,
      capitalActions: 300000, // augmentation de capital
      reserves: 130000,
      benefice: 180000,
      fondsPropres: 610000,
      totalPassif: 1800000,
    },
  },

  // Année 4 (2026) — Maturité & analyse
  annee4: {
    label: 'Année 4 — 2026 (Maturité)',
    chiffreAffaires: 3200000,
    achatsMatierres: 1200000,
    chargesPersonnel: 880000,
    autresCharges: 350000,
    amortissements: 140000,
    resultatNet: 220000,
    effectif: 22,
    bilan: {
      liquidites: 280000,
      debiteurs: 480000,
      stocks: 320000,
      immobilisations: 1050000,
      totalActif: 2130000,
      creanciers: 240000,
      dettesCT: 140000,
      dettesLT: 520000,
      capitalActions: 300000,
      reserves: 310000,
      benefice: 220000,
      fondsPropres: 830000,
      totalPassif: 2130000,
    },
  },
};

// ─── TAUX SOCIAUX 2024 ──────────────────────────────────────────────────────
export const TAUX_SOCIAUX = {
  avs_employe: 5.3,
  avs_employeur: 5.3,
  ac_employe: 1.1,
  ac_employeur: 1.1,
  laanp_employe: 1.0,
  laa_prof_employeur: 0.5,
  lpp_coordination: 25725, // Seuil de coordination 2024
  lpp_salaire_min: 22050,  // Salaire minimum LPP
  lpp_salaire_max: 88200,  // Salaire maximum LPP
  caf_employeur: 1.6,      // Allocations familiales NE
  tva_normal: 8.1,
  tva_reduit: 2.6,
  tva_hebergement: 3.8,
  impot_benefice_ne: 15.6, // Taux effectif cantonal+fédéral NE (estimé)
};

// ─── FOURNISSEURS & CLIENTS RÉCURRENTS ───────────────────────────────────────
export const PARTENAIRES = {
  fournisseurs: [
    { nom: 'Nivarox-FAR SA', type: 'Composants (spiraux, ressorts)', localisation: 'Le Locle (NE)' },
    { nom: 'Metalor Technologies', type: 'Métaux précieux (or, platine)', localisation: 'Marin-Epagnier (NE)' },
    { nom: 'ETA SA (Swatch Group)', type: 'Mouvements mécaniques', localisation: 'Granges (SO)' },
    { nom: 'Stettler Sapphire', type: 'Verres saphir', localisation: 'Lyss (BE)' },
    { nom: 'PackDesign AG', type: 'Emballages et écrins', localisation: 'Zurich (ZH)' },
  ],
  clients: [
    { nom: 'Bucherer AG', type: 'Distributeur Suisse', localisation: 'Lucerne (LU)' },
    { nom: 'Watches of Switzerland', type: 'Distributeur UK', localisation: 'Londres (GB)', export: true },
    { nom: 'Takashimaya Ltd', type: 'Distributeur Japon', localisation: 'Tokyo (JP)', export: true },
    { nom: 'Christ Uhren', type: 'Distributeur Allemagne', localisation: 'Hagen (DE)', export: true },
    { nom: 'Boutique SwiSSwatch', type: 'Vente directe (propre boutique)', localisation: 'Neuchâtel (NE)' },
  ],
};

// ─── IMMOBILISATIONS ─────────────────────────────────────────────────────────
export const IMMOBILISATIONS = [
  { compte: '1500', label: 'Centre d\'usinage CNC 5 axes', valeurAcquisition: 280000, dateAchat: '01.04.2023', dureeVie: 10, tauxLineaire: 10, tauxDegressif: 25, methode: 'indirect' },
  { compte: '1500', label: 'Machine de polissage automatique', valeurAcquisition: 85000, dateAchat: '01.07.2023', dureeVie: 8, tauxLineaire: 12.5, tauxDegressif: 30, methode: 'indirect' },
  { compte: '1510', label: 'Mobilier bureau & atelier', valeurAcquisition: 45000, dateAchat: '15.03.2023', dureeVie: 10, tauxLineaire: 10, tauxDegressif: 25, methode: 'direct' },
  { compte: '1520', label: 'Système ERP + postes informatiques', valeurAcquisition: 62000, dateAchat: '01.04.2023', dureeVie: 3, tauxLineaire: 33.3, tauxDegressif: 50, methode: 'direct' },
  { compte: '1530', label: 'Véhicule utilitaire (livraisons)', valeurAcquisition: 38000, dateAchat: '01.06.2023', dureeVie: 5, tauxLineaire: 20, tauxDegressif: 40, methode: 'indirect' },
  { compte: '1530', label: 'Véhicule de fonction (CEO)', valeurAcquisition: 65000, dateAchat: '01.09.2023', dureeVie: 5, tauxLineaire: 20, tauxDegressif: 40, methode: 'indirect' },
];

// ─── ARC NARRATIF — ÉVÉNEMENTS CLÉS PAR ANNÉE ───────────────────────────────
export const EVENEMENTS = {
  annee1: [
    { mois: 'Mars', event: 'Fondation de SwiSSwatch SA — capital CHF 200\'000, 50% libéré' },
    { mois: 'Avril', event: 'Location de l\'atelier à La Chaux-de-Fonds — loyer CHF 4\'500/mois' },
    { mois: 'Avril', event: 'Achat du centre d\'usinage CNC — CHF 280\'000' },
    { mois: 'Mai', event: 'Premiers achats de composants — fournisseurs Nivarox et ETA' },
    { mois: 'Juin', event: 'Embauche de Jules Weber (maître horloger)' },
    { mois: 'Juillet', event: 'Première vente — 50 montres à Bucherer AG' },
    { mois: 'Septembre', event: 'Embauche de Noah Renard (commercial)' },
    { mois: 'Octobre', event: 'Première exportation — Watches of Switzerland (Londres)' },
    { mois: 'Décembre', event: 'Premier bouclement annuel — résultat net CHF 35\'000' },
  ],
  annee2: [
    { mois: 'Janvier', event: 'Libération des 50% restants du capital' },
    { mois: 'Février', event: 'Embauche de Lucas Morel (technicien CNC, permis B)' },
    { mois: 'Mars', event: 'AG — affectation du bénéfice an 1 (réserve légale + report)' },
    { mois: 'Avril', event: 'Achat machine de polissage — CHF 85\'000' },
    { mois: 'Mai', event: 'Embauche de Emma Lang (apprentie, permis B)' },
    { mois: 'Juin', event: 'Salon Baselworld — contrat avec Takashimaya (Japon)' },
    { mois: 'Août', event: 'Accident de travail de Lucas Morel — arrêt 3 semaines (LAA)' },
    { mois: 'Octobre', event: 'Maladie de Jules Weber — arrêt 6 semaines (IJM)' },
    { mois: 'Novembre', event: 'Emprunt bancaire CHF 200\'000 pour financer la croissance' },
    { mois: 'Décembre', event: 'Bouclement annuel — résultat net CHF 95\'000' },
  ],
  annee3: [
    { mois: 'Janvier', event: 'Introduction d\'un système d\'inventaire permanent (FIFO)' },
    { mois: 'Mars', event: 'AG — premier dividende CHF 40\'000 + affectation réserves' },
    { mois: 'Avril', event: 'Augmentation de capital CHF 100\'000 (prime d\'émission CHF 20\'000)' },
    { mois: 'Mai', event: 'Émission d\'un emprunt obligataire CHF 300\'000 à 3%' },
    { mois: 'Juillet', event: 'Acquisition d\'un concurrent (petit atelier à Bienne) — goodwill CHF 50\'000' },
    { mois: 'Septembre', event: 'Rachat de 50 actions propres à CHF 180/action' },
    { mois: 'Octobre', event: 'Lancement nouvelle collection "Glacier" — investissement marketing CHF 80\'000' },
    { mois: 'Décembre', event: 'Bouclement annuel — résultat net CHF 180\'000' },
  ],
  annee4: [
    { mois: 'Février', event: 'Analyse financière complète par Léa Meyer (tous les ratios)' },
    { mois: 'Mars', event: 'AG — dividende CHF 80\'000 + réserves' },
    { mois: 'Mai', event: 'Projet d\'investissement : nouvelle ligne de production automatisée CHF 500\'000' },
    { mois: 'Juin', event: 'Calcul du WACC et de la VAN du projet' },
    { mois: 'Septembre', event: 'Offre de rachat d\'un groupe horloger — évaluation de SwiSSwatch SA' },
    { mois: 'Octobre', event: 'Évaluation par méthode des praticiens et DCF' },
    { mois: 'Novembre', event: 'Décision : refus de l\'offre, SwiSSwatch reste indépendante' },
    { mois: 'Décembre', event: 'Bouclement annuel — résultat net CHF 220\'000' },
  ],
};

// ─── PRODUITS ────────────────────────────────────────────────────────────────
export const PRODUITS = [
  { ref: 'SW-001', nom: 'Classic Méca', type: 'Montre mécanique', prixVente: 1200, coutProduction: 480, description: 'Mouvement automatique, boîtier acier, bracelet cuir' },
  { ref: 'SW-002', nom: 'Sport Chrono', type: 'Chronographe', prixVente: 2400, coutProduction: 920, description: 'Chronographe, étanche 200m, bracelet acier' },
  { ref: 'SW-003', nom: 'Glacier', type: 'Collection prestige', prixVente: 4800, coutProduction: 1800, description: 'Or rose, cadran nacre, édition limitée 200 pièces' },
  { ref: 'SW-Q01', nom: 'QuartzLine', type: 'Montre quartz', prixVente: 450, coutProduction: 150, description: 'Mouvement quartz suisse, design épuré, entrée de gamme' },
];
