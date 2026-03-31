import { BookOpen, Building2, BarChart3 } from 'lucide-react';

// ─── MODULES.JS — Configuration centrale des modules ─────────────────────────

export const MODULES = [
  {
    id: 'generale',
    label: 'Comptabilité générale',
    short: 'Général',
    icon: BookOpen,
    exerciseIds: [
      'base-journal', 'tva-calculs', 'tva-ecritures',
      'marchandises', 'salaires-calcul', 'salaires-ecritures', 'bouclement', 'revision', 'examen',
    ],
    theoryGroups: [
      { label: '1. Prescriptions légales',       chapters: [], special: 'prescriptions',      exerciseGroups: [] },
      { label: '2. Fondements',                  chapters: [], special: 'fondaments',          exerciseGroups: ['base-journal'] },
      { label: '3. TVA suisse',                  chapters: [], special: 'tva',                 exerciseGroups: ['tva-calculs', 'tva-ecritures'] },
      { label: '4. Salaires & charges sociales', chapters: [], special: 'salaires',            exerciseGroups: ['salaires-calcul', 'salaires-ecritures'] },
      { label: '5. Marchandises & stocks',       chapters: [], special: 'marchandises',        exerciseGroups: ['marchandises'] },
      { label: '6. Bouclement annuel',           chapters: [], special: 'bouclement',          exerciseGroups: ['bouclement'] },
      { label: '7. Hors exploitation',           chapters: [], special: 'hors-exploitation',   exerciseGroups: [] },
    ],
    evaluation: [
      { id: 'revision', label: 'Révision transversale', icon: 'RotateCcw' },
      { id: 'examen',   label: 'Examen final',          icon: 'Award' },
    ],
    dashboardMeta: {
      prescriptions:     { desc: 'CO 957ss, principes comptables, éléments légaux',          tag: 'tag-base',      label: 'Droit CO' },
      fondaments:        { desc: 'Bilan, compte de résultat, comptes, journal',               tag: 'tag-base',      label: 'Base' },
      tva:               { desc: 'Assujettissement, taux, méthodes, décompte',                tag: 'tag-tva',       label: 'TVA' },
      salaires:          { desc: 'AVS/AI/APG, AC, LAA, LPP, fiches, arrêts',                 tag: 'tag-salaires',  label: 'Salaires' },
      marchandises:      { desc: 'Inventaire intermittent, permanent, FIFO/LIFO',             tag: 'tag-base',      label: 'Base' },
      bouclement:        { desc: 'Liquidités, débiteurs, transitoires, amortissements, impôts', tag: 'tag-bouclement', label: 'Clôture' },
      'hors-exploitation': { desc: 'Titres de placement, immeubles, réserves latentes',      tag: 'tag-base',      label: 'Base' },
    },
  },

  {
    id: 'societes',
    label: 'Comptabilité des sociétés',
    short: 'Sociétés',
    icon: Building2,
    exerciseIds: [
      'societes-ecritures', 'societes-qcm',
    ],
    theoryGroups: [
      { label: '1. Formes juridiques',      chapters: [], special: 'soc-formes',         exerciseGroups: ['societes-qcm'] },
      { label: '2. Fondation SA',           chapters: [], special: 'soc-fondation',      exerciseGroups: ['societes-ecritures'] },
      { label: '3. Distribution bénéfice',  chapters: [], special: 'soc-distribution',   exerciseGroups: ['societes-ecritures'] },
      { label: '4. Augmentation capital',   chapters: [], special: 'soc-augmentation',   exerciseGroups: ['societes-ecritures'] },
      { label: '5. Assainissement',         chapters: [], special: 'soc-assainissement', exerciseGroups: ['societes-ecritures'] },
      { label: '6. Fusion & Scission',      chapters: [], special: 'soc-fusion',         exerciseGroups: ['societes-ecritures'] },
      { label: '7. Liquidation',            chapters: [], special: 'soc-liquidation',    exerciseGroups: ['societes-ecritures'] },
    ],
    dashboardMeta: {
      'soc-formes':         { desc: 'SNC, commandite, SA, Sàrl — responsabilités et droit applicable',             tag: 'tag-base', label: 'Sociétés' },
      'soc-fondation':      { desc: 'Acte constitutif, capital minimum, apports espèces/nature',                   tag: 'tag-base', label: 'Sociétés' },
      'soc-distribution':   { desc: 'Réserve légale, dividende, impôt anticipé, rachat actions propres',            tag: 'tag-base', label: 'Sociétés' },
      'soc-augmentation':   { desc: 'Prime à l\'émission, DPS, emprunt obligataire',                               tag: 'tag-base', label: 'Sociétés' },
      'soc-assainissement': { desc: 'Perte de capital, réévaluation, abandon créances, postposition',               tag: 'tag-base', label: 'Sociétés' },
      'soc-fusion':         { desc: 'Fusion par absorption/combinaison, scission, parité d\'échange',               tag: 'tag-base', label: 'Sociétés' },
      'soc-liquidation':    { desc: 'Dissolution, vente actifs, répartition, radiation RC',                          tag: 'tag-base', label: 'Sociétés' },
    },
  },
  {
    id: 'analyse',
    label: 'Analyse financière',
    short: 'Analyse',
    icon: BarChart3,
    exerciseIds: [
      'analyse-calculs', 'analyse-qcm', 'investissements',
    ],
    theoryGroups: [
      { label: '1. Retraitements du bilan',    chapters: [], special: 'anal-retraitements',    exerciseGroups: ['analyse-calculs', 'analyse-qcm'] },
      { label: '2. Analyse structurelle',       chapters: [], special: 'anal-structure',        exerciseGroups: ['analyse-calculs', 'analyse-qcm'] },
      { label: '3. Fonds de roulement & BFR',  chapters: [], special: 'anal-fdr',              exerciseGroups: ['analyse-calculs', 'analyse-qcm'] },
      { label: '4. Ratios de liquidité',        chapters: [], special: 'anal-liquidite',        exerciseGroups: ['analyse-calculs', 'analyse-qcm'] },
      { label: '5. Ratios de rentabilité',      chapters: [], special: 'anal-rentabilite',      exerciseGroups: ['analyse-calculs', 'analyse-qcm'] },
      { label: '6. Endettement & structure',    chapters: [], special: 'anal-endettement',      exerciseGroups: ['analyse-calculs', 'analyse-qcm'] },
      { label: '7. Flux de trésorerie',         chapters: [], special: 'anal-flux',             exerciseGroups: ['analyse-calculs', 'analyse-qcm'] },
      { label: '8. Seuil de rentabilité',       chapters: [], special: 'anal-seuil',            exerciseGroups: ['analyse-calculs', 'analyse-qcm'] },
      { label: '9. Évaluation d\'entreprise',   chapters: [], special: 'anal-evaluation',       exerciseGroups: ['analyse-calculs', 'analyse-qcm'] },
      { label: '10. Choix d\'investissement',   chapters: [], special: 'anal-investissements',  exerciseGroups: ['investissements'] },
    ],
    dashboardMeta: {
      'anal-retraitements': { desc: 'Réserves latentes, réévaluation, leasing, impôt latent',          tag: 'tag-base',      label: 'Analyse' },
      'anal-structure':     { desc: 'Analyse verticale/horizontale, règles d\'or, degrés de couverture', tag: 'tag-base',     label: 'Analyse' },
      'anal-fdr':           { desc: 'Fonds de roulement net, BFR, trésorerie nette',                    tag: 'tag-base',      label: 'Analyse' },
      'anal-liquidite':     { desc: 'L1, L2, L3, délais de rotation, interprétation',                   tag: 'tag-base',      label: 'Analyse' },
      'anal-rentabilite':   { desc: 'Marges, ROE, ROA, EBITDA, décomposition DuPont',                   tag: 'tag-base',      label: 'Analyse' },
      'anal-endettement':   { desc: 'Taux d\'endettement, couverture intérêts, levier financier',       tag: 'tag-base',      label: 'Analyse' },
      'anal-flux':          { desc: 'Tableau de flux de trésorerie, méthode directe/indirecte',          tag: 'tag-base',      label: 'Analyse' },
      'anal-seuil':         { desc: 'Break-even, marge de contribution, levier opérationnel',            tag: 'tag-bouclement', label: 'Calcul' },
      'anal-evaluation':       { desc: 'Valeur substantielle, rendement, DCF, méthode des praticiens',      tag: 'tag-base',      label: 'Analyse' },
      'anal-investissements':  { desc: 'VAN, TRI, Payback, WACC, MEDAF — choix de projets',               tag: 'tag-base',      label: 'Analyse' },
    },
  },
];

export const getModule = (id) => MODULES.find(m => m.id === id) || MODULES[0];