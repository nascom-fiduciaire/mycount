// Fiches de salaire — données théoriques
// Taux réels 2024 · Plan comptable PME suisse

export const fichesSalaire = [

  {
    id: 'sal-fiche-01',
    title: 'Employé standard 100% — M. Dupont',
    contexte: `M. Dupont travaille à 100% chez Fidulex Sàrl depuis 3 ans.
Salaire brut mensuel : CHF 7'200.
Pas d'enfants, pas d'impôt à la source (permis C / suisse).
LPP employé : CHF 360 / patronale : CHF 432.`,
    salaire: { brut: 7200, tauxActivite: 100, mois: 'Janvier 2024' },
    deductionsEmploye: [
      { label: 'AVS / AI / APG', taux: 5.30, base: 7200, montant: 381.60, compte: '2270', detail: 'Taux légal 2024 : 5.3% sur le salaire brut. Aucun plafond.' },
      { label: 'Assurance-chômage (AC)', taux: 1.10, base: 7200, montant: 79.20, compte: '2270', detail: 'Taux légal 2024 : 1.1%. Plafond annuel CHF 148\'200 (CHF 12\'350/mois) — non atteint.' },
      { label: 'LPP (prévoyance prof.)', taux: null, base: null, montant: 360.00, compte: '2270', detail: 'Montant fixé par le plan de prévoyance. Varie selon l\'âge et le plan.' },
      { label: 'LAA non prof. (LAANP)', taux: 1.00, base: 7200, montant: 72.00, compte: '2270', detail: 'Accidents non professionnels. Taux indicatif 2024.' },
    ],
    totalDeductionsEmploye: 892.80,
    indemnites: [],
    totalIndemnites: 0,
    salaireNet: 6307.20,
    chargesPatronales: [
      { label: 'AVS / AI / APG', taux: 5.30, base: 7200, montant: 381.60, compte: '5700', detail: 'Même taux que l\'employé. Part entièrement à la charge de l\'employeur.' },
      { label: 'Assurance-chômage (AC)', taux: 1.10, base: 7200, montant: 79.20, compte: '5710', detail: 'Même taux, même plafond.' },
      { label: 'LPP (prévoyance prof.)', taux: null, base: null, montant: 432.00, compte: '5720', detail: 'Part patronale ≥ part employé selon plan.' },
      { label: 'LAA professionnelle', taux: 0.50, base: 7200, montant: 36.00, compte: '5730', detail: 'Accidents professionnels. À la charge exclusive de l\'employeur.' },
    ],
    totalChargesPatronales: 928.80,
    coutTotalEmployeur: 8128.80,
    etapesComptables: [
      {
        num: 1, titre: 'Comptabilisation du salaire brut et des déductions employé',
        explication: 'On enregistre la charge totale (salaire brut) en débitant le compte 5000. Les déductions employé vont en 2270. Le solde à verser à M. Dupont va en 2160.',
        ecritures: [
          { libelle: 'Salaire brut M. Dupont — janvier 2024', debit: '5000', debitLabel: 'Salaires', credit: '2270', creditLabel: 'Charges sociales à payer', montantDebit: 7200, montantCredit: 892.80, isMulti: true },
          { libelle: 'Salaire net à payer M. Dupont', debit: null, debitLabel: null, credit: '2160', creditLabel: 'Salaires à payer', montantDebit: null, montantCredit: 6307.20, isSubLine: true },
        ],
      },
      {
        num: 2, titre: 'Charges sociales patronales',
        explication: 'Les charges patronales sont un coût supplémentaire. Elles s\'ajoutent au salaire brut. On débite les comptes 5700–5730 et on crédite le compte 2270.',
        ecritures: [
          { libelle: 'AVS/AI/APG patronales', debit: '5700', debitLabel: 'Charges AVS patronales', credit: '2270', creditLabel: 'Charges sociales à payer', montantDebit: 381.60, montantCredit: 381.60 },
          { libelle: 'AC patronales', debit: '5710', debitLabel: 'Charges AC patronales', credit: '2270', creditLabel: 'Charges sociales à payer', montantDebit: 79.20, montantCredit: 79.20 },
          { libelle: 'LPP patronales', debit: '5720', debitLabel: 'Charges LPP patronales', credit: '2270', creditLabel: 'Charges sociales à payer', montantDebit: 432.00, montantCredit: 432.00 },
          { libelle: 'LAA professionnelle', debit: '5730', debitLabel: 'Charges LAA prof.', credit: '2270', creditLabel: 'Charges sociales à payer', montantDebit: 36.00, montantCredit: 36.00 },
        ],
      },
      {
        num: 3, titre: 'Versement du salaire net à M. Dupont',
        explication: 'On solde le compte 2160 par virement bancaire. Aucun impact sur le résultat.',
        ecritures: [
          { libelle: 'Virement salaire net M. Dupont', debit: '2160', debitLabel: 'Salaires à payer', credit: '1020', creditLabel: 'Banque', montantDebit: 6307.20, montantCredit: 6307.20 },
        ],
      },
      {
        num: 4, titre: 'Versement des charges sociales aux caisses',
        explication: 'On solde le compte 2270 : déductions employé (892.80) + charges patronales (928.80) = CHF 1\'821.60 versés aux caisses AVS, AC, LPP, LAA.',
        ecritures: [
          { libelle: 'Versement caisses sociales (AVS+AC+LPP+LAA)', debit: '2270', debitLabel: 'Charges sociales à payer', credit: '1020', creditLabel: 'Banque', montantDebit: 1821.60, montantCredit: 1821.60 },
        ],
      },
    ],
  },

  {
    id: 'sal-fiche-02',
    title: 'Temps partiel 60% — Mme Chen',
    contexte: `Mme Chen travaille à 60% chez Fidulex Sàrl.
Salaire brut à 100% : CHF 6'500 → brut effectif 60% : CHF 3'900.
Pas d'impôt à la source. Pas d'enfants.
LPP employé : CHF 156 / patronale : CHF 195.`,
    salaire: { brut: 3900, tauxActivite: 60, brut100: 6500, mois: 'Janvier 2024' },
    deductionsEmploye: [
      { label: 'AVS / AI / APG', taux: 5.30, base: 3900, montant: 206.70, compte: '2270', detail: 'Calculé sur le brut effectif CHF 3\'900 (pas sur le 100%).' },
      { label: 'Assurance-chômage (AC)', taux: 1.10, base: 3900, montant: 42.90, compte: '2270', detail: 'Plafond non atteint.' },
      { label: 'LPP (prévoyance prof.)', taux: null, base: null, montant: 156.00, compte: '2270', detail: 'Salaire annuel CHF 46\'800 — au-dessus du seuil LPP obligatoire.' },
      { label: 'LAA non prof. (LAANP)', taux: 1.00, base: 3900, montant: 39.00, compte: '2270', detail: 'Calculé sur le brut effectif.' },
    ],
    totalDeductionsEmploye: 444.60,
    indemnites: [],
    totalIndemnites: 0,
    salaireNet: 3455.40,
    chargesPatronales: [
      { label: 'AVS / AI / APG', taux: 5.30, base: 3900, montant: 206.70, compte: '5700', detail: 'Part patronale = part employé.' },
      { label: 'Assurance-chômage (AC)', taux: 1.10, base: 3900, montant: 42.90, compte: '5710', detail: '' },
      { label: 'LPP (prévoyance prof.)', taux: null, base: null, montant: 195.00, compte: '5720', detail: 'Part patronale > part employé selon plan.' },
      { label: 'LAA professionnelle', taux: 0.50, base: 3900, montant: 19.50, compte: '5730', detail: '' },
    ],
    totalChargesPatronales: 464.10,
    coutTotalEmployeur: 4364.10,
    etapesComptables: [
      {
        num: 1, titre: 'Salaire brut + déductions employé',
        explication: 'Même logique qu\'à 100% — toutes les cotisations sont calculées sur le brut effectif CHF 3\'900.',
        ecritures: [
          { libelle: 'Salaire brut Mme Chen 60% — janvier', debit: '5000', debitLabel: 'Salaires', credit: '2270', creditLabel: 'Charges sociales à payer', montantDebit: 3900, montantCredit: 444.60, isMulti: true },
          { libelle: 'Salaire net à payer Mme Chen', debit: null, debitLabel: null, credit: '2160', creditLabel: 'Salaires à payer', montantDebit: null, montantCredit: 3455.40, isSubLine: true },
        ],
      },
      {
        num: 2, titre: 'Charges patronales',
        explication: 'Calculées sur CHF 3\'900. Coût total = 3\'900 + 464.10 = CHF 4\'364.10.',
        ecritures: [
          { libelle: 'Charges patronales Mme Chen (AVS+AC+LPP+LAA)', debit: '5700', debitLabel: 'Charges sociales patronales', credit: '2270', creditLabel: 'Charges sociales à payer', montantDebit: 464.10, montantCredit: 464.10 },
        ],
      },
      {
        num: 3, titre: 'Versement salaire net',
        ecritures: [
          { libelle: 'Virement salaire net Mme Chen', debit: '2160', debitLabel: 'Salaires à payer', credit: '1020', creditLabel: 'Banque', montantDebit: 3455.40, montantCredit: 3455.40 },
        ],
      },
      {
        num: 4, titre: 'Versement caisses sociales',
        explication: 'Total = 444.60 + 464.10 = CHF 908.70.',
        ecritures: [
          { libelle: 'Versement caisses sociales Mme Chen', debit: '2270', debitLabel: 'Charges sociales à payer', credit: '1020', creditLabel: 'Banque', montantDebit: 908.70, montantCredit: 908.70 },
        ],
      },
    ],
  },

  {
    id: 'sal-fiche-03',
    title: 'Impôt à la source — M. Silva (permis B)',
    contexte: `M. Silva, ressortissant portugais, permis B, célibataire.
Salaire brut : CHF 5'800/mois.
Taux IS barème A GE : 12.5% sur le salaire brut.
LPP employé : CHF 290 / patronale : CHF 348.`,
    salaire: { brut: 5800, tauxActivite: 100, mois: 'Janvier 2024' },
    deductionsEmploye: [
      { label: 'AVS / AI / APG', taux: 5.30, base: 5800, montant: 307.40, compte: '2270', detail: 'L\'IS n\'a pas d\'impact sur les cotisations AVS.' },
      { label: 'Assurance-chômage (AC)', taux: 1.10, base: 5800, montant: 63.80, compte: '2270', detail: '' },
      { label: 'LPP (prévoyance prof.)', taux: null, base: null, montant: 290.00, compte: '2270', detail: 'Identique pour IS et non-IS.' },
      { label: 'LAA non prof. (LAANP)', taux: 1.00, base: 5800, montant: 58.00, compte: '2270', detail: '' },
      { label: 'Impôt à la source (IS)', taux: 12.50, base: 5800, montant: 725.00, compte: '2271', detail: 'Barème A GE. Retenu par l\'employeur, versé à l\'AFC cantonale. Compte 2271 — séparé de 2270 !' },
    ],
    totalDeductionsEmploye: 1444.20,
    indemnites: [],
    totalIndemnites: 0,
    salaireNet: 4355.80,
    chargesPatronales: [
      { label: 'AVS / AI / APG', taux: 5.30, base: 5800, montant: 307.40, compte: '5700', detail: 'L\'IS ne modifie pas les charges patronales.' },
      { label: 'Assurance-chômage (AC)', taux: 1.10, base: 5800, montant: 63.80, compte: '5710', detail: '' },
      { label: 'LPP (prévoyance prof.)', taux: null, base: null, montant: 348.00, compte: '5720', detail: '' },
      { label: 'LAA professionnelle', taux: 0.50, base: 5800, montant: 29.00, compte: '5730', detail: '' },
    ],
    totalChargesPatronales: 748.20,
    coutTotalEmployeur: 6548.20,
    etapesComptables: [
      {
        num: 1, titre: 'Salaire brut + déductions sociales + impôt à la source',
        explication: 'L\'IS va au compte 2271 (séparé de 2270) car il est versé à l\'administration cantonale, pas aux caisses sociales.',
        ecritures: [
          { libelle: 'Salaire brut M. Silva — janvier', debit: '5000', debitLabel: 'Salaires', credit: '2270', creditLabel: 'Charges sociales à payer', montantDebit: 5800, montantCredit: 719.20, isMulti: true },
          { libelle: 'Impôt à la source retenu (IS)', debit: null, debitLabel: null, credit: '2271', creditLabel: 'IS à payer', montantDebit: null, montantCredit: 725.00, isSubLine: true },
          { libelle: 'Salaire net à payer M. Silva', debit: null, debitLabel: null, credit: '2160', creditLabel: 'Salaires à payer', montantDebit: null, montantCredit: 4355.80, isSubLine: true },
        ],
      },
      {
        num: 2, titre: 'Charges patronales',
        explication: 'Non impactées par l\'IS — calculées sur le brut comme pour tout employé.',
        ecritures: [
          { libelle: 'Charges patronales M. Silva', debit: '5700', debitLabel: 'Charges sociales patronales', credit: '2270', creditLabel: 'Charges sociales à payer', montantDebit: 748.20, montantCredit: 748.20 },
        ],
      },
      {
        num: 3, titre: 'Versement salaire net à M. Silva',
        ecritures: [
          { libelle: 'Virement salaire net M. Silva', debit: '2160', debitLabel: 'Salaires à payer', credit: '1020', creditLabel: 'Banque', montantDebit: 4355.80, montantCredit: 4355.80 },
        ],
      },
      {
        num: 4, titre: 'Versement IS à l\'administration cantonale',
        explication: 'L\'IS est versé séparément — on solde le compte 2271.',
        ecritures: [
          { libelle: 'Versement IS — Administration cantonale GE', debit: '2271', debitLabel: 'IS à payer', credit: '1020', creditLabel: 'Banque', montantDebit: 725.00, montantCredit: 725.00 },
        ],
      },
      {
        num: 5, titre: 'Versement caisses sociales',
        explication: 'Total 2270 = 719.20 + 748.20 = CHF 1\'467.40.',
        ecritures: [
          { libelle: 'Versement caisses sociales M. Silva', debit: '2270', debitLabel: 'Charges sociales à payer', credit: '1020', creditLabel: 'Banque', montantDebit: 1467.40, montantCredit: 1467.40 },
        ],
      },
    ],
  },

  {
    id: 'sal-fiche-04',
    title: 'Allocations familiales + indemnités — Mme Rossi',
    contexte: `Mme Rossi, 2 enfants (8 et 12 ans), permis C.
Salaire brut : CHF 6'200/mois.
AF Genève : CHF 311 × 2 = CHF 622.
Indemnité repas : 20j × CHF 16 = CHF 320.
Indemnité km : CHF 120. LPP employé : CHF 310 / patronale : CHF 372.`,
    salaire: { brut: 6200, tauxActivite: 100, mois: 'Janvier 2024' },
    deductionsEmploye: [
      { label: 'AVS / AI / APG', taux: 5.30, base: 6200, montant: 328.60, compte: '2270', detail: 'Calculé sur le salaire brut CHF 6\'200. Les AF et indemnités ne sont pas soumises à l\'AVS.' },
      { label: 'Assurance-chômage (AC)', taux: 1.10, base: 6200, montant: 68.20, compte: '2270', detail: '' },
      { label: 'LPP (prévoyance prof.)', taux: null, base: null, montant: 310.00, compte: '2270', detail: 'AF et indemnités exclus de la base LPP.' },
      { label: 'LAA non prof. (LAANP)', taux: 1.00, base: 6200, montant: 62.00, compte: '2270', detail: '' },
    ],
    totalDeductionsEmploye: 768.80,
    indemnites: [
      { label: 'Allocations familiales (2 × CHF 311)', montant: 622.00, detail: 'Versées par l\'employeur, refacturées à la caisse AF. Non soumises aux cotisations.' },
      { label: 'Indemnité repas (20j × CHF 16)', montant: 320.00, detail: 'Remboursement de frais. Non soumis aux cotisations dans les limites admises.' },
      { label: 'Indemnité km', montant: 120.00, detail: 'Remboursement frais déplacement. Non soumis aux cotisations.' },
    ],
    totalIndemnites: 1062.00,
    salaireNet: 6493.20,
    chargesPatronales: [
      { label: 'AVS / AI / APG', taux: 5.30, base: 6200, montant: 328.60, compte: '5700', detail: '' },
      { label: 'Assurance-chômage (AC)', taux: 1.10, base: 6200, montant: 68.20, compte: '5710', detail: '' },
      { label: 'LPP (prévoyance prof.)', taux: null, base: null, montant: 372.00, compte: '5720', detail: '' },
      { label: 'LAA professionnelle', taux: 0.50, base: 6200, montant: 31.00, compte: '5730', detail: '' },
      { label: 'Allocations familiales (caisse AF)', taux: null, base: null, montant: 622.00, compte: '5760', detail: 'Avancées par l\'employeur, remboursées par la caisse AF.' },
    ],
    totalChargesPatronales: 1421.80,
    coutTotalEmployeur: 7621.80,
    etapesComptables: [
      {
        num: 1, titre: 'Salaire brut + déductions',
        explication: 'Déductions calculées uniquement sur le brut CHF 6\'200. AF et indemnités non soumises aux cotisations.',
        ecritures: [
          { libelle: 'Salaire brut Mme Rossi — janvier', debit: '5000', debitLabel: 'Salaires', credit: '2270', creditLabel: 'Charges sociales à payer', montantDebit: 6200, montantCredit: 768.80, isMulti: true },
          { libelle: 'Salaire net à payer', debit: null, debitLabel: null, credit: '2160', creditLabel: 'Salaires à payer', montantDebit: null, montantCredit: 5431.20, isSubLine: true },
        ],
      },
      {
        num: 2, titre: 'Allocations familiales',
        explication: 'Les AF sont avancées par l\'employeur puis remboursées par la caisse AF. On débite 5760 et on crédite 2160.',
        ecritures: [
          { libelle: 'Allocations familiales Mme Rossi (2 enfants)', debit: '5760', debitLabel: 'Allocations familiales', credit: '2160', creditLabel: 'Salaires à payer', montantDebit: 622.00, montantCredit: 622.00 },
        ],
      },
      {
        num: 3, titre: 'Indemnités repas et km',
        explication: 'Remboursements de frais — augmentent le net à verser sans créer de cotisations.',
        ecritures: [
          { libelle: 'Indemnités repas + km Mme Rossi', debit: '5800', debitLabel: 'Autres charges personnel', credit: '2160', creditLabel: 'Salaires à payer', montantDebit: 440.00, montantCredit: 440.00 },
        ],
      },
      {
        num: 4, titre: 'Charges patronales',
        ecritures: [
          { libelle: 'Charges patronales Mme Rossi', debit: '5700', debitLabel: 'Charges sociales patronales', credit: '2270', creditLabel: 'Charges sociales à payer', montantDebit: 799.80, montantCredit: 799.80 },
        ],
      },
      {
        num: 5, titre: 'Versement total à Mme Rossi',
        explication: 'Net (5\'431.20) + AF (622) + indemnités (440) = CHF 6\'493.20.',
        ecritures: [
          { libelle: 'Virement net total Mme Rossi', debit: '2160', debitLabel: 'Salaires à payer', credit: '1020', creditLabel: 'Banque', montantDebit: 6493.20, montantCredit: 6493.20 },
        ],
      },
      {
        num: 6, titre: 'Versement caisses sociales',
        ecritures: [
          { libelle: 'Versement caisses sociales', debit: '2270', debitLabel: 'Charges sociales à payer', credit: '1020', creditLabel: 'Banque', montantDebit: 1568.60, montantCredit: 1568.60 },
        ],
      },
    ],
  },

  {
    id: 'sal-fiche-05',
    title: '13e salaire — provision mensuelle + versement décembre',
    contexte: `Équipe Fidulex Sàrl — masse salariale mensuelle brute : CHF 20'000.
Le 13e est provisionné chaque mois (1/12).
En décembre, le 13e brut est versé (CHF 20'000).
Taux global déductions employé ~13.5% / charges patronales ~14%.`,
    salaire: { brut: 20000, tauxActivite: 100, mois: 'Provision mensuelle — Janvier 2024', special: 'provision13e' },
    provision: { montantMensuel: 1667, chargesPatronalesMensuelles: 233 },
    deductionsEmploye: [
      { label: 'AVS / AI / APG (5.3%)', taux: 5.30, base: 20000, montant: 1060.00, compte: '2270', detail: 'Sur le brut du 13e.' },
      { label: 'AC (1.1%)', taux: 1.10, base: 20000, montant: 220.00, compte: '2270', detail: '' },
      { label: 'LPP + LAANP (forfait)', taux: null, base: null, montant: 1420.00, compte: '2270', detail: 'Forfait estimatif.' },
    ],
    totalDeductionsEmploye: 2700.00,
    indemnites: [],
    totalIndemnites: 0,
    salaireNet: 17300.00,
    chargesPatronales: [
      { label: 'AVS / AI / APG (5.3%)', taux: 5.30, base: 20000, montant: 1060.00, compte: '5700', detail: '' },
      { label: 'AC (1.1%)', taux: 1.10, base: 20000, montant: 220.00, compte: '5710', detail: '' },
      { label: 'LPP + LAA + AF (forfait)', taux: null, base: null, montant: 1520.00, compte: '5720', detail: '' },
    ],
    totalChargesPatronales: 2800.00,
    coutTotalEmployeur: 22800.00,
    etapesComptables: [
      {
        num: 1, titre: 'Janvier–Novembre : provision mensuelle 1/12',
        explication: 'Chaque mois on anticipe 1/12 du 13e brut. On crédite 2280 Passifs transitoires (provision).',
        ecritures: [
          { libelle: 'Provision 13e salaire (1/12 de 20\'000)', debit: '5000', debitLabel: 'Salaires', credit: '2280', creditLabel: 'Passifs transitoires', montantDebit: 1667, montantCredit: 1667 },
          { libelle: 'Provision charges patronales 13e', debit: '5700', debitLabel: 'Charges sociales patronales', credit: '2280', creditLabel: 'Passifs transitoires', montantDebit: 233, montantCredit: 233 },
        ],
      },
      {
        num: 2, titre: 'Décembre : déductions employé sur le 13e',
        explication: 'On solde la provision 2280 et on passe les déductions sur le brut total du 13e.',
        ecritures: [
          { libelle: 'Déductions employé 13e (solde provision)', debit: '2280', debitLabel: 'Passifs transitoires', credit: '2270', creditLabel: 'Charges sociales à payer', montantDebit: 2700, montantCredit: 2700 },
          { libelle: '13e net à payer', debit: '2280', debitLabel: 'Passifs transitoires', credit: '2160', creditLabel: 'Salaires à payer', montantDebit: 17300, montantCredit: 17300 },
        ],
      },
      {
        num: 3, titre: 'Charges patronales 13e',
        ecritures: [
          { libelle: 'Charges patronales 13e (solde provision)', debit: '2280', debitLabel: 'Passifs transitoires', credit: '2270', creditLabel: 'Charges sociales à payer', montantDebit: 2800, montantCredit: 2800 },
        ],
      },
      {
        num: 4, titre: 'Versement 13e net',
        ecritures: [
          { libelle: 'Virement 13e salaire net (équipe)', debit: '2160', debitLabel: 'Salaires à payer', credit: '1020', creditLabel: 'Banque', montantDebit: 17300, montantCredit: 17300 },
        ],
      },
      {
        num: 5, titre: 'Versement caisses sociales sur 13e',
        ecritures: [
          { libelle: 'Versement caisses sociales 13e', debit: '2270', debitLabel: 'Charges sociales à payer', credit: '1020', creditLabel: 'Banque', montantDebit: 5500, montantCredit: 5500 },
        ],
      },
    ],
  },

  {
    id: 'sal-fiche-06',
    title: 'Départ en cours de mois — M. Favre (prorata)',
    contexte: `M. Favre quitte l'entreprise le 20 mars (dernier jour travaillé).
Mars : 21 jours ouvrables — M. Favre a travaillé 14 jours.
Salaire brut mensuel : CHF 8'400.
Brut proratisé : 8'400 × 14/21 = CHF 5'600.
Solde vacances : 3 jours × (8'400/21) = CHF 1'200.
Indemnité de départ : CHF 2'000. LPP employé : CHF 280 / patronale : CHF 336.`,
    salaire: { brut: 5600, brutMensuel: 8400, tauxActivite: 100, joursTravailes: 14, joursMois: 21, mois: 'Mars 2024', special: 'depart' },
    deductionsEmploye: [
      { label: 'AVS / AI / APG', taux: 5.30, base: 5600, montant: 296.80, compte: '2270', detail: 'Sur le brut proratisé CHF 5\'600.' },
      { label: 'Assurance-chômage (AC)', taux: 1.10, base: 5600, montant: 61.60, compte: '2270', detail: '' },
      { label: 'LPP (prévoyance prof.)', taux: null, base: null, montant: 280.00, compte: '2270', detail: 'Proratisé.' },
      { label: 'LAA non prof. (LAANP)', taux: 1.00, base: 5600, montant: 56.00, compte: '2270', detail: '' },
    ],
    totalDeductionsEmploye: 694.40,
    indemnites: [
      { label: 'Solde vacances (3 jours)', montant: 1200.00, detail: 'Acquises non prises. Soumises aux cotisations AVS/AC/LPP.' },
      { label: 'Indemnité de départ', montant: 2000.00, detail: 'En principe soumise à l\'AVS. Traitement fiscal selon montant.' },
    ],
    totalIndemnites: 3200.00,
    salaireNet: 8105.60,
    chargesPatronales: [
      { label: 'AVS / AI / APG', taux: 5.30, base: 5600, montant: 296.80, compte: '5700', detail: '' },
      { label: 'Assurance-chômage (AC)', taux: 1.10, base: 5600, montant: 61.60, compte: '5710', detail: '' },
      { label: 'LPP (prévoyance prof.)', taux: null, base: null, montant: 336.00, compte: '5720', detail: '' },
      { label: 'LAA professionnelle', taux: 0.50, base: 5600, montant: 28.00, compte: '5730', detail: '' },
    ],
    totalChargesPatronales: 722.40,
    coutTotalEmployeur: 9522.40,
    etapesComptables: [
      {
        num: 1, titre: 'Salaire brut proratisé + déductions',
        explication: 'Toutes les cotisations sont calculées sur le brut effectif CHF 5\'600 (14/21 jours).',
        ecritures: [
          { libelle: 'Salaire brut proratisé M. Favre (14/21 mars)', debit: '5000', debitLabel: 'Salaires', credit: '2270', creditLabel: 'Charges sociales à payer', montantDebit: 5600, montantCredit: 694.40, isMulti: true },
          { libelle: 'Salaire net à payer M. Favre', debit: null, debitLabel: null, credit: '2160', creditLabel: 'Salaires à payer', montantDebit: null, montantCredit: 4905.60, isSubLine: true },
        ],
      },
      {
        num: 2, titre: 'Solde vacances et indemnité de départ',
        ecritures: [
          { libelle: 'Solde vacances M. Favre (3 jours)', debit: '5000', debitLabel: 'Salaires', credit: '2160', creditLabel: 'Salaires à payer', montantDebit: 1200, montantCredit: 1200 },
          { libelle: 'Indemnité de départ M. Favre', debit: '5800', debitLabel: 'Autres charges personnel', credit: '2160', creditLabel: 'Salaires à payer', montantDebit: 2000, montantCredit: 2000 },
        ],
      },
      {
        num: 3, titre: 'Charges patronales',
        ecritures: [
          { libelle: 'Charges patronales M. Favre', debit: '5700', debitLabel: 'Charges sociales patronales', credit: '2270', creditLabel: 'Charges sociales à payer', montantDebit: 722.40, montantCredit: 722.40 },
        ],
      },
      {
        num: 4, titre: 'Versement solde de tout compte',
        explication: 'Total net = 4\'905.60 + 1\'200 + 2\'000 = CHF 8\'105.60.',
        ecritures: [
          { libelle: 'Virement solde de tout compte M. Favre', debit: '2160', debitLabel: 'Salaires à payer', credit: '1020', creditLabel: 'Banque', montantDebit: 8105.60, montantCredit: 8105.60 },
        ],
      },
      {
        num: 5, titre: 'Versement caisses sociales',
        ecritures: [
          { libelle: 'Versement caisses sociales M. Favre', debit: '2270', debitLabel: 'Charges sociales à payer', credit: '1020', creditLabel: 'Banque', montantDebit: 1416.80, montantCredit: 1416.80 },
        ],
      },
    ],
  },

];
