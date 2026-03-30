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
    explanation: 'L\'indemnité IJM reçue est comptabilisée au crédit du compte **5005 Indemnités reçues** — un sous-compte de charges personnel qui vient en diminution du coût du personnel.\n\nÉcriture à la réception :\nDébit 1180 Actifs transitoires CHF 2\'500 / Crédit 5005 Indemnités CHF 2\'500\n\nPuis à l\'encaissement :\nDébit 1020 Banque / Crédit 1180',
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
];
