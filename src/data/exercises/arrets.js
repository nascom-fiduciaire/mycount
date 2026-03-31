// Exercices arrêts maladie / accident — calculs interactifs
// Ajout dans le groupe salaires-calcul

export const arretsExercises = [

  {
    id: 'arret-calc-01', group: 'salaires-calcul', type: 'calcul', tag: 'salaires', difficulty: 3,
    title: 'Arrêt maladie — IJM reçue par l\'employeur',
    description: 'M. Rossi (CHF 6\'000/mois) est en arrêt 16 jours sur 21. Assurance IJM 80%, indemnité versée à l\'employeur. Calculez les montants clés.',
    note: 'Cotisations calculées sur la part à charge de l\'employeur (brut − IJM), pas sur le brut total.',
    data: [
      { label: 'Salaire brut mensuel', value: "CHF 6'000.00" },
      { label: 'Jours d\'arrêt', value: '16 sur 21 jours ouvrables' },
      { label: 'Taux IJM', value: '80%' },
      { label: 'Taux cotisations (simplifié)', value: '13.5% (employé + patronal)' },
    ],
    champs: [
      { id: 'ijm', label: 'Indemnité IJM (80% × 6\'000 × 16/21)', placeholder: "3'657.14", correct: 3657.14, tol: 1, hint: '6\'000 × 0.8 × 16/21' },
      { id: 'part_emp', label: 'Part à charge de l\'employeur', placeholder: "2'342.86", correct: 2342.86, tol: 1, hint: '6\'000 − indemnité IJM' },
      { id: 'cotisations', label: 'Cotisations sur part employeur (13.5%)', placeholder: '316.29', correct: 316.29, tol: 1, hint: '2\'342.86 × 13.5%' },
      { id: 'net', label: 'Salaire net versé à M. Rossi', placeholder: "5'683.71", correct: 5683.71, tol: 2, hint: '6\'000 − cotisations sur 6\'000 (pas sur 2\'342)' },
    ],
    correction: 'IJM : 6\'000 × 80% × 16/21 = CHF 3\'657.14\nPart employeur : 6\'000 − 3\'657.14 = CHF 2\'342.86\nCotisations sur part emp. : 2\'342.86 × 13.5% = CHF 316.29\nNet : 6\'000 − (6\'000 × 13.5%) = CHF 5\'190 environ (cotisations sur brut habituel)',
  },

  {
    id: 'arret-calc-02', group: 'salaires-calcul', type: 'calcul', tag: 'salaires', difficulty: 2,
    title: 'Arrêt maladie — sans assurance IJM (CO 324a)',
    description: 'Mme Chen (CHF 4\'500/mois) est en arrêt 10 jours. Pas d\'assurance IJM. Calculez le coût pour l\'employeur.',
    note: 'Sans assurance, l\'employeur supporte 100% du coût. Cotisations sur le brut maintenu complet.',
    data: [
      { label: 'Salaire brut mensuel', value: "CHF 4'500.00" },
      { label: 'Jours d\'arrêt', value: '10 sur 21 jours' },
      { label: 'Indemnité assureur', value: 'Aucune' },
      { label: 'Cotisations employé (13.5%)', value: 'Sur brut complet' },
    ],
    champs: [
      { id: 'part_emp', label: 'Part à charge employeur (tout)', placeholder: "4'500.00", correct: 4500, tol: 0.10, hint: 'Sans assurance = brut complet' },
      { id: 'cotis_emp', label: 'Cotisations employé (13.5%)', placeholder: '607.50', correct: 607.50, tol: 1, hint: '4\'500 × 13.5%' },
      { id: 'net', label: 'Salaire net versé à Mme Chen', placeholder: "3'892.50", correct: 3892.50, tol: 1, hint: '4\'500 − cotisations' },
      { id: 'cout_total', label: 'Coût total employeur (brut + charges pat.)', placeholder: "5'107.50", correct: 5107.50, tol: 2, hint: '4\'500 + charges patronales (13.5%)' },
    ],
    correction: 'Part employeur : CHF 4\'500 (totalité — pas d\'assurance)\nCotisations employé : 4\'500 × 13.5% = CHF 607.50\nNet : 4\'500 − 607.50 = CHF 3\'892.50\nCoût total : 4\'500 + (4\'500 × 13.5%) = CHF 5\'107.50',
  },

  {
    id: 'arret-calc-03', group: 'salaires-calcul', type: 'calcul', tag: 'salaires', difficulty: 3,
    title: 'Accident LAA — indemnités SUVA',
    description: 'M. Silva (CHF 5\'800/mois) accident le 05.03, arrêt 19 jours (21 jours ouvrables). SUVA verse 80% dès jour 3. Calculez les montants.',
    note: 'Les 2 premiers jours sont toujours à charge de l\'employeur. SUVA couvre dès le 3e jour. Cotisations sur la part employeur uniquement.',
    data: [
      { label: 'Salaire brut mensuel', value: "CHF 5'800.00" },
      { label: 'Jours ouvrables du mois', value: '21 jours' },
      { label: 'Jours à charge employeur (carence)', value: '2 jours' },
      { label: 'Jours couverts SUVA (80%)', value: '17 jours' },
    ],
    champs: [
      { id: 'part_emp', label: 'Part à charge employeur (2/21)', placeholder: "1'104.76", correct: 1104.76, tol: 1, hint: '5\'800 × 2/21' },
      { id: 'suva', label: 'Indemnité SUVA (80% × 5\'800 × 17/21)', placeholder: "3'761.90", correct: 3761.90, tol: 1, hint: '5\'800 × 0.8 × 17/21' },
      { id: 'cotisations', label: 'Cotisations sur part employeur (13.5%)', placeholder: '149.14', correct: 149.14, tol: 1, hint: '1\'104.76 × 13.5%' },
      { id: 'total_brut', label: 'Vérification : part emp. + SUVA', placeholder: "4'866.66", correct: 4866.66, tol: 2, hint: '1\'104.76 + 3\'761.90' },
    ],
    correction: 'Part employeur (2 jours) : 5\'800 × 2/21 = CHF 1\'104.76\nIndemnité SUVA (17 jours) : 5\'800 × 80% × 17/21 = CHF 3\'761.90\nCotisations sur part emp. : 1\'104.76 × 13.5% = CHF 149.14\nTotal couvert : 1\'104.76 + 3\'761.90 = CHF 4\'866.66 (reste à charge présence 2j et jours travaillés)',
  },

  {
    id: 'arret-calc-04', group: 'salaires-calcul', type: 'qcm', tag: 'salaires', difficulty: 2,
    title: 'Compte pour l\'indemnité IJM reçue',
    description: 'L\'entreprise reçoit une indemnité IJM de CHF 2\'500 de l\'assureur. Quel crédit passe-t-on ?',
    options: [
      { id: 'a', text: '3600 Autres produits d\'exploitation', correct: false },
      { id: 'b', text: '5005 Indemnités reçues (IJM/LAA)', correct: true },
      { id: 'c', text: '5000 Salaires (diminution directe)', correct: false },
      { id: 'd', text: '2000 Créanciers', correct: false },
    ],
    explanation: 'L\'indemnité IJM reçue est comptabilisée au crédit du compte **5005 Indemnités reçues** — un sous-compte de charges personnel qui vient en diminution du coût du personnel.\n\nÉcriture à la réception :\nDébit 1301 Produits à recevoir CHF 2\'500 / Crédit 5005 Indemnités CHF 2\'500\n\nPuis à l\'encaissement :\nDébit 1020 Banque / Crédit 1301',
  },

  {
    id: 'arret-calc-05', group: 'salaires-calcul', type: 'qcm', tag: 'salaires', difficulty: 2,
    title: 'Cotisations pendant un arrêt maladie',
    description: 'M. Rossi (brut CHF 6\'000) est en arrêt. L\'assureur IJM verse CHF 2\'500 à l\'employeur. Sur quelle base calcule-t-on les cotisations AVS/AC ?',
    options: [
      { id: 'a', text: "Sur CHF 6'000 (brut complet)", correct: false },
      { id: 'b', text: "Sur CHF 2'500 (indemnité IJM seulement)", correct: false },
      { id: 'c', text: "Sur CHF 3'500 (part à charge de l'employeur = brut − IJM)", correct: true },
      { id: 'd', text: "Aucune cotisation pendant un arrêt", correct: false },
    ],
    explanation: 'Les cotisations sont calculées sur la **part à charge réelle de l\'employeur** = brut − indemnité IJM = 6\'000 − 2\'500 = **CHF 3\'500**.\n\nL\'indemnité IJM (CHF 2\'500) n\'est pas soumise aux cotisations sociales ordinaires car elle provient de l\'assureur, pas de l\'employeur.',
  },

  {
    id: 'arret-calc-06', group: 'salaires-calcul', type: 'calcul', tag: 'salaires', difficulty: 3,
    title: 'Accident professionnel LAA — Indemnité SUVA',
    description: 'M. Favre gagne CHF 6\'000 brut/mois et est victime d\'un accident professionnel. Il est en arrêt 45 jours.',
    note: 'Les 3 premiers jours : l\'employeur paie 80% du salaire. Dès le 4e jour : la SUVA verse 80%.',
    data: [
      { label: 'Salaire brut mensuel', value: 'CHF 6\'000' },
      { label: 'Durée arrêt', value: '45 jours' },
      { label: 'Délai de carence LAA', value: '3 jours (employeur paie 80%)' },
      { label: 'Indemnité SUVA', value: '80% du salaire dès le 4e jour' },
    ],
    champs: [
      { id: 'salaire_jour', label: 'Salaire journalier (÷ 30)', placeholder: '200', correct: 200, tol: 1, hint: '6000 / 30' },
      { id: 'carence', label: 'Carence employeur (3j × 80%)', placeholder: '480', correct: 480, tol: 1, hint: '200 × 80% × 3' },
      { id: 'jours_suva', label: 'Jours couverts SUVA', placeholder: '42', correct: 42, tol: 0, hint: '45 − 3' },
      { id: 'indemnite_suva', label: 'Indemnité SUVA totale', placeholder: '6720', correct: 6720, tol: 1, hint: '200 × 80% × 42' },
    ],
    correction: 'Salaire journalier : 6000/30 = 200\nCarence (3j) : 200 × 80% × 3 = 480 (à charge employeur)\nSUVA (42j) : 200 × 80% × 42 = 6720\nTotal perçu par l\'employé : 480 + 6720 = CHF 7200',
  },

  {
    id: 'arret-calc-07', group: 'salaires-calcul', type: 'calcul', tag: 'salaires', difficulty: 3,
    title: 'Maladie longue durée — IJM sur 3 mois',
    description: 'Mme Blanc (brut CHF 5\'400/mois) est en arrêt maladie 90 jours. L\'entreprise a une assurance IJM (indemnités journalières maladie).',
    data: [
      { label: 'Salaire brut', value: 'CHF 5\'400/mois' },
      { label: 'Durée arrêt', value: '90 jours' },
      { label: 'Délai d\'attente IJM', value: '30 jours' },
      { label: 'Prestation IJM', value: '80% du salaire dès le 31e jour' },
      { label: 'Obligation employeur (CO)', value: 'Salaire intégral pendant le délai d\'attente' },
    ],
    champs: [
      { id: 'salaire_jour', label: 'Salaire journalier', placeholder: '180', correct: 180, tol: 1, hint: '5400 / 30' },
      { id: 'employeur_30j', label: 'Coût employeur (30 premiers jours)', placeholder: '5400', correct: 5400, tol: 1, hint: '180 × 30 = salaire complet' },
      { id: 'jours_ijm', label: 'Jours couverts par IJM', placeholder: '60', correct: 60, tol: 0, hint: '90 − 30' },
      { id: 'indemnite_ijm', label: 'Indemnité IJM totale (80%)', placeholder: '8640', correct: 8640, tol: 1, hint: '180 × 80% × 60' },
    ],
    correction: 'Salaire journalier : 5400/30 = 180\n30 premiers jours : employeur paie 100% = 5400\nJours IJM : 90 − 30 = 60 jours\nIJM : 180 × 80% × 60 = 8640',
  },
];
