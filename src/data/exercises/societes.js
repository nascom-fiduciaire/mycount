// Exercices Societes — ecritures + QCM
// Droit des societes suisse · Plan comptable PME

export const societesExerciseGroups = [
  { id: 'societes-ecritures', label: 'Societes — Ecritures', icon: '🏢', tag: 'societes', description: 'Ecritures comptables liees aux societes: fondation, distribution, augmentation de capital, assainissement, fusion' },
  { id: 'societes-qcm', label: 'Societes — QCM', icon: '🏢', tag: 'societes', description: 'Questions a choix multiples sur le droit des societes et la comptabilite des SA/Sarl' },
];

export const societesExercises = [

  // ─── ECRITURES COMPTABLES ──────────────────────────────────────────

  {
    id: 'soc-e01', group: 'societes-ecritures', type: 'journal', tag: 'societes', difficulty: 1,
    title: 'Fondation SA en especes — CHOCOLAT SUISSE SA',
    description: `CHOCOLAT SUISSE SA est fondee avec un capital-actions de CHF 200'000, compose de 200 actions de CHF 1'000 (valeur nominale). Le capital est integralement libere par virement bancaire. Les frais de fondation (notaire, RC) s'elevent a CHF 5'000.`,
    note: 'Liberation integrale : le compte 1850 Actionnaires est solde apres la liberation.',
    data: [
      { label: 'Capital-actions', value: "CHF 200'000" },
      { label: 'Nombre d\'actions', value: '200 actions de CHF 1\'000' },
      { label: 'Liberation', value: '100% en especes (banque)' },
      { label: 'Frais de fondation', value: "CHF 5'000" },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Souscription du capital-actions', debit: { num: '1850', label: 'Actionnaires' }, credit: { num: '2800', label: 'Capital-actions' }, amount: 200000 },
      { id: 'e2', libelle: 'Liberation integrale par banque', debit: { num: '1020', label: 'Banque' }, credit: { num: '1850', label: 'Actionnaires' }, amount: 200000 },
      { id: 'e3', libelle: 'Frais de fondation (notaire, RC)', debit: { num: '2979', label: 'Resultats reportes' }, credit: { num: '1020', label: 'Banque' }, amount: 5000 },
    ],
    hint: 'La fondation se deroule en 2 etapes : souscription (engagement) puis liberation (paiement effectif).',
    correction: `1) Souscription : les actionnaires s'engagent a apporter CHF 200'000 → Debit 1850 / Credit 2800.
2) Liberation : versement effectif sur le compte bancaire → Debit 1020 / Credit 1850. Le compte 1850 est solde.
3) Les frais de fondation sont imputes aux resultats reportes (2979) et payes par banque.`,
  },

  {
    id: 'soc-e02', group: 'societes-ecritures', type: 'journal', tag: 'societes', difficulty: 2,
    title: 'Fondation SA avec liberation partielle — ALPES TECH SA',
    description: `ALPES TECH SA est fondee avec un capital-actions de CHF 500'000 (500 actions de CHF 1'000). Les actionnaires ne liberent que 50% du capital par virement bancaire.`,
    note: 'Le solde de CHF 250\'000 reste au compte 1850 Actionnaires : c\'est le capital non libere, exigible ulterieurement.',
    data: [
      { label: 'Capital-actions', value: "CHF 500'000" },
      { label: 'Nombre d\'actions', value: '500 actions de CHF 1\'000' },
      { label: 'Liberation', value: '50% en especes (banque)' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Souscription du capital-actions', debit: { num: '1850', label: 'Actionnaires' }, credit: { num: '2800', label: 'Capital-actions' }, amount: 500000 },
      { id: 'e2', libelle: 'Liberation 50% par banque', debit: { num: '1020', label: 'Banque' }, credit: { num: '1850', label: 'Actionnaires' }, amount: 250000 },
    ],
    hint: 'Apres liberation partielle, le compte 1850 presente un solde debiteur = capital non libere.',
    correction: `1) Souscription : engagement total des actionnaires pour CHF 500'000 → Debit 1850 / Credit 2800.
2) Liberation partielle (50%) : versement de CHF 250'000 → Debit 1020 / Credit 1850.
Le compte 1850 presente un solde debiteur de CHF 250'000 = capital souscrit mais non encore libere. Ce montant sera appele ulterieurement par le conseil d'administration.`,
  },

  {
    id: 'soc-e03', group: 'societes-ecritures', type: 'journal', tag: 'societes', difficulty: 2,
    title: 'Affectation du benefice — Decision AG',
    description: `L'assemblee generale decide de l'affectation du benefice net de CHF 80'000.
Capital-actions : CHF 300'000. Reserve legale existante : CHF 40'000.
Decisions :
1. Attribution de 5% du benefice a la reserve legale
2. Dividende brut aux actionnaires : CHF 30'000 net (soumis a l'impot anticipé de 35%)
3. Solde en reserve facultative`,
    note: 'Calcul de l\'impot anticipe (IA) : dividende net CHF 30\'000 = 65% du brut → brut = 30\'000 / 0.65 = CHF 46\'154 → IA = 46\'154 × 35% = CHF 16\'154.',
    data: [
      { label: 'Benefice net', value: "CHF 80'000" },
      { label: 'Capital-actions', value: "CHF 300'000" },
      { label: 'Reserve legale existante', value: "CHF 40'000" },
      { label: 'Attribution reserve legale', value: '5% du benefice = CHF 4\'000' },
      { label: 'Dividende net aux actionnaires', value: "CHF 30'000" },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Attribution a la reserve legale (5%)', debit: { num: '2979', label: 'Resultats reportes' }, credit: { num: '2950', label: 'Reserve legale issue du benefice' }, amount: 4000 },
      { id: 'e2', libelle: 'Dividende net aux actionnaires', debit: { num: '2979', label: 'Resultats reportes' }, credit: { num: '2850', label: 'Dividendes a payer' }, amount: 30000 },
      { id: 'e3', libelle: 'Impot anticipe 35% sur dividende brut', debit: { num: '2979', label: 'Resultats reportes' }, credit: { num: '2206', label: 'Impot anticipe a payer' }, amount: 16154 },
      { id: 'e4', libelle: 'Solde en reserve facultative', debit: { num: '2979', label: 'Resultats reportes' }, credit: { num: '2960', label: 'Reserve facultative' }, amount: 29846 },
    ],
    hint: 'Le dividende net = 65% du brut. L\'IA = 35% du brut. Verifiez que la somme des affectations = CHF 80\'000.',
    correction: `1) Reserve legale : 5% × 80'000 = CHF 4'000 → Debit 2979 / Credit 2950.
2) Dividende net : CHF 30'000 → Debit 2979 / Credit 2850.
3) IA : 30'000 / 0.65 × 0.35 = CHF 16'154 (arrondi) → Debit 2979 / Credit 2206.
4) Solde : 80'000 − 4'000 − 30'000 − 16'154 = CHF 29'846 → Debit 2979 / Credit 2960.
Controle : 4'000 + 30'000 + 16'154 + 29'846 = CHF 80'000. ✓`,
  },

  {
    id: 'soc-e04', group: 'societes-ecritures', type: 'journal', tag: 'societes', difficulty: 3,
    title: 'Augmentation de capital avec prime d\'emission',
    description: `La societe dispose de 1'000 actions de CHF 1'000 (capital CHF 1'000'000) et de reserves de CHF 250'000.
Elle emet 200 nouvelles actions avec une prime d'emission calculee sur le taux de reserves.
Les frais d'augmentation s'elevent a CHF 12'000 et sont imputes sur la prime d'emission.`,
    note: 'Taux de reserve = 250\'000 / 1\'000\'000 = 25%. Prime par action = 25% × CHF 1\'000 = CHF 250. Total prime = 200 × CHF 250 = CHF 50\'000.',
    data: [
      { label: 'Capital existant', value: "CHF 1'000'000 (1'000 actions de CHF 1'000)" },
      { label: 'Reserves existantes', value: "CHF 250'000" },
      { label: 'Nouvelles actions emises', value: '200 actions' },
      { label: 'Taux de reserve', value: '250\'000 / 1\'000\'000 = 25%' },
      { label: 'Prime par action', value: '25% x CHF 1\'000 = CHF 250' },
      { label: 'Frais d\'augmentation', value: "CHF 12'000" },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Souscription — valeur nominale (200 × CHF 1\'000)', debit: { num: '1850', label: 'Actionnaires' }, credit: { num: '2800', label: 'Capital-actions' }, amount: 200000 },
      { id: 'e2', libelle: 'Souscription — prime d\'emission (200 × CHF 250)', debit: { num: '1850', label: 'Actionnaires' }, credit: { num: '2910', label: 'Prime d\'emission' }, amount: 50000 },
      { id: 'e3', libelle: 'Liberation integrale par banque', debit: { num: '1020', label: 'Banque' }, credit: { num: '1850', label: 'Actionnaires' }, amount: 250000 },
      { id: 'e4', libelle: 'Frais d\'augmentation de capital', debit: { num: '8600', label: 'Charges exceptionnelles' }, credit: { num: '1020', label: 'Banque' }, amount: 12000 },
      { id: 'e5', libelle: 'Imputation des frais sur la prime d\'emission', debit: { num: '2910', label: 'Prime d\'emission' }, credit: { num: '8600', label: 'Charges exceptionnelles' }, amount: 12000 },
      { id: 'e6', libelle: 'Solde de la prime → reserve legale issue du capital', debit: { num: '2910', label: 'Prime d\'emission' }, credit: { num: '2900', label: 'Reserve legale issue du capital' }, amount: 38000 },
    ],
    hint: 'La prime d\'emission protege les anciens actionnaires de la dilution. Elle est transferee en reserve legale apres deduction des frais.',
    correction: `1) Souscription VN : 200 × CHF 1'000 = CHF 200'000 → Debit 1850 / Credit 2800.
2) Souscription prime : 200 × CHF 250 = CHF 50'000 → Debit 1850 / Credit 2910.
3) Liberation : CHF 200'000 + 50'000 = CHF 250'000 → Debit 1020 / Credit 1850.
4) Frais : CHF 12'000 → Debit 8600 / Credit 1020.
5) Imputation frais sur prime : CHF 12'000 → Debit 2910 / Credit 8600.
6) Solde prime : 50'000 − 12'000 = CHF 38'000 → Debit 2910 / Credit 2900.`,
  },

  {
    id: 'soc-e05', group: 'societes-ecritures', type: 'journal', tag: 'societes', difficulty: 2,
    title: 'Rachat et destruction d\'actions propres',
    description: `La societe rachete 50 de ses propres actions a CHF 1'200 l'unite (valeur nominale CHF 1'000).
Dans un second temps, l'AG decide de detruire ces actions (reduction de capital).
La difference entre le prix de rachat et la VN est imputee sur la reserve facultative.`,
    note: 'Plus-value par action : CHF 1\'200 − CHF 1\'000 = CHF 200. Total plus-value : 50 × CHF 200 = CHF 10\'000.',
    data: [
      { label: 'Actions rachetees', value: '50 actions' },
      { label: 'Prix de rachat', value: "CHF 1'200 / action" },
      { label: 'Valeur nominale', value: "CHF 1'000 / action" },
      { label: 'Total rachat', value: "50 x CHF 1'200 = CHF 60'000" },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Rachat de 50 actions propres', debit: { num: '2980', label: 'Actions propres (-)' }, credit: { num: '1020', label: 'Banque' }, amount: 60000 },
      { id: 'e2', libelle: 'Destruction — reduction du capital (VN)', debit: { num: '2800', label: 'Capital-actions' }, credit: { num: '2980', label: 'Actions propres (-)' }, amount: 50000 },
      { id: 'e3', libelle: 'Destruction — imputation plus-value sur reserve facultative', debit: { num: '2960', label: 'Reserve facultative' }, credit: { num: '2980', label: 'Actions propres (-)' }, amount: 10000 },
    ],
    hint: 'Le compte 2980 Actions propres est un poste negatif des fonds propres. A la destruction, il doit etre solde.',
    correction: `1) Rachat : 50 × CHF 1'200 = CHF 60'000 → Debit 2980 / Credit 1020.
2) Destruction — VN : 50 × CHF 1'000 = CHF 50'000 → Debit 2800 / Credit 2980.
3) Destruction — plus-value : CHF 60'000 − 50'000 = CHF 10'000 → Debit 2960 / Credit 2980.
Controle : le compte 2980 est solde (60'000 − 50'000 − 10'000 = 0). ✓`,
  },

  {
    id: 'soc-e06', group: 'societes-ecritures', type: 'journal', tag: 'societes', difficulty: 3,
    title: 'Assainissement d\'une SA en difficulte',
    description: `La societe presente une perte reportee de CHF 120'000 et un capital-actions de CHF 200'000.
Mesures d'assainissement decidees :
1. Reduction du capital-actions de 40% (coup d'accordeon)
2. Abandon de creances par les fournisseurs : CHF 15'000
3. Don de promotion economique du canton : CHF 10'000
4. Le gain d'assainissement compense les pertes reportees`,
    note: 'Le compte 8100 Produits extraordinaires regroupe tous les gains d\'assainissement avant le virement final.',
    data: [
      { label: 'Perte reportee', value: "CHF 120'000" },
      { label: 'Capital-actions', value: "CHF 200'000" },
      { label: 'Reduction du capital', value: '40% = CHF 80\'000' },
      { label: 'Abandon de creances fournisseurs', value: "CHF 15'000" },
      { label: 'Don promotion economique', value: "CHF 10'000" },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Reduction du capital-actions de 40%', debit: { num: '2800', label: 'Capital-actions' }, credit: { num: '8100', label: 'Produits extraordinaires' }, amount: 80000 },
      { id: 'e2', libelle: 'Abandon de creances fournisseurs', debit: { num: '2000', label: 'Creanciers' }, credit: { num: '8100', label: 'Produits extraordinaires' }, amount: 15000 },
      { id: 'e3', libelle: 'Don de promotion economique (banque)', debit: { num: '1020', label: 'Banque' }, credit: { num: '8100', label: 'Produits extraordinaires' }, amount: 10000 },
      { id: 'e4', libelle: 'Virement gain d\'assainissement pour compenser les pertes', debit: { num: '8100', label: 'Produits extraordinaires' }, credit: { num: '2970', label: 'Report de pertes' }, amount: 105000 },
    ],
    hint: 'Le gain total d\'assainissement = 80\'000 + 15\'000 + 10\'000 = CHF 105\'000. Ce montant compense la perte de CHF 120\'000 (solde residuel : CHF 15\'000 de perte).',
    correction: `1) Reduction capital : 200'000 × 40% = CHF 80'000 → Debit 2800 / Credit 8100.
2) Abandon creances : CHF 15'000 → Debit 2000 / Credit 8100.
3) Don cantonal : CHF 10'000 → Debit 1020 / Credit 8100.
4) Virement : CHF 105'000 → Debit 8100 / Credit 2970.
Le gain d'assainissement de CHF 105'000 compense partiellement la perte de CHF 120'000. Solde residuel au report de pertes : CHF 15'000.`,
  },

  {
    id: 'soc-e07', group: 'societes-ecritures', type: 'journal', tag: 'societes', difficulty: 3,
    title: 'Emission d\'un emprunt obligataire au-dessus du pair',
    description: `La societe emet un emprunt obligataire de CHF 500'000 (500 obligations de CHF 1'000) au taux d'emission de 103% (au-dessus du pair).
Les frais d'emission s'elevent a CHF 8'000.`,
    note: 'Emission au-dessus du pair : le disagio (prime d\'emission) est comptabilise au compte 6950 Produits financiers.',
    data: [
      { label: 'Valeur nominale emprunt', value: "CHF 500'000" },
      { label: 'Taux d\'emission', value: '103%' },
      { label: 'Produit d\'emission', value: "500'000 x 103% = CHF 515'000" },
      { label: 'Prime d\'emission', value: "CHF 15'000" },
      { label: 'Frais d\'emission', value: "CHF 8'000" },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Souscription — valeur nominale de l\'emprunt', debit: { num: '1195', label: 'Souscripteurs obligations' }, credit: { num: '2430', label: 'Emprunts obligataires' }, amount: 500000 },
      { id: 'e2', libelle: 'Prime d\'emission (103% − 100%)', debit: { num: '1195', label: 'Souscripteurs obligations' }, credit: { num: '6950', label: 'Produits financiers' }, amount: 15000 },
      { id: 'e3', libelle: 'Liberation — encaissement par banque', debit: { num: '1020', label: 'Banque' }, credit: { num: '1195', label: 'Souscripteurs obligations' }, amount: 515000 },
      { id: 'e4', libelle: 'Frais d\'emission de l\'emprunt', debit: { num: '6900', label: 'Charges financieres' }, credit: { num: '1020', label: 'Banque' }, amount: 8000 },
    ],
    hint: 'Au-dessus du pair : les souscripteurs paient plus que la valeur nominale. La difference est un produit financier pour l\'emetteur.',
    correction: `1) Souscription VN : CHF 500'000 → Debit 1195 / Credit 2430.
2) Prime : 500'000 × 3% = CHF 15'000 → Debit 1195 / Credit 6950.
3) Liberation : CHF 515'000 encaisses → Debit 1020 / Credit 1195.
4) Frais : CHF 8'000 → Debit 6900 / Credit 1020.
Controle : le compte 1195 est solde (500'000 + 15'000 − 515'000 = 0). ✓`,
  },

  {
    id: 'soc-e08', group: 'societes-ecritures', type: 'journal', tag: 'societes', difficulty: 3,
    title: 'Fusion par absorption (simplifie)',
    description: `La societe A absorbe la societe B. Bilan de la societe B :
- Actifs : CHF 400'000
- Dettes : CHF 150'000
- Actifs nets : CHF 250'000

La societe A emet 250 nouvelles actions de VN CHF 1'000 pour remunerer les actionnaires de B.`,
    note: 'Les actifs et dettes de B sont repris a leur valeur comptable (pas de goodwill dans ce cas simplifie).',
    data: [
      { label: 'Actifs societe B', value: "CHF 400'000" },
      { label: 'Dettes societe B', value: "CHF 150'000" },
      { label: 'Actifs nets', value: "CHF 250'000" },
      { label: 'Actions emises par A', value: '250 actions de CHF 1\'000' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Souscription — augmentation de capital (250 × CHF 1\'000)', debit: { num: '1850', label: 'Actionnaires' }, credit: { num: '2800', label: 'Capital-actions' }, amount: 250000 },
      { id: 'e2', libelle: 'Reprise des actifs de la societe B', debit: { num: '1009', label: 'Actifs repris' }, credit: { num: '1850', label: 'Actionnaires' }, amount: 400000 },
      { id: 'e3', libelle: 'Reprise des dettes de la societe B', debit: { num: '1850', label: 'Actionnaires' }, credit: { num: '2009', label: 'Dettes reprises' }, amount: 150000 },
    ],
    hint: 'Les actionnaires de B recoivent des actions de A en echange. Le compte 1850 est solde : 250\'000 − 400\'000 + 150\'000 = 0.',
    correction: `1) Augmentation de capital : 250 × CHF 1'000 = CHF 250'000 → Debit 1850 / Credit 2800.
2) Reprise actifs : CHF 400'000 → Debit Actifs repris / Credit 1850.
3) Reprise dettes : CHF 150'000 → Debit 1850 / Credit Dettes reprises.
Controle compte 1850 : 250'000 (debit) − 400'000 (credit) + 150'000 (debit) = 0. ✓
Les actionnaires de B detiennent desormais 250 actions de la societe A.`,
  },

  // ─── QCM ───────────────────────────────────────────────────────────

  {
    id: 'soc-q01', group: 'societes-qcm', type: 'qcm', tag: 'societes', difficulty: 1,
    title: 'Responsabilite des actionnaires dans une SA',
    description: 'Dans une societe anonyme (SA), quelle est la responsabilite des actionnaires ?',
    options: [
      { id: 'a', text: 'Illimitee et solidaire', correct: false },
      { id: 'b', text: 'Limitee aux prestations statutaires (liberation des actions souscrites)', correct: true },
      { id: 'c', text: 'Subsidiaire et illimitee', correct: false },
      { id: 'd', text: 'Solidaire mais limitee au capital', correct: false },
    ],
    explanation: 'Dans une SA, les actionnaires ne sont pas personnellement responsables des dettes de la societe. Leur risque se limite au montant de leur apport (liberation des actions souscrites). C\'est un des avantages majeurs de la SA par rapport aux societes de personnes.',
  },

  {
    id: 'soc-q02', group: 'societes-qcm', type: 'qcm', tag: 'societes', difficulty: 1,
    title: 'Capital minimum d\'une SA en Suisse',
    description: 'Quel est le capital-actions minimum pour fonder une societe anonyme (SA) en Suisse ?',
    options: [
      { id: 'a', text: 'CHF 50\'000', correct: false },
      { id: 'b', text: 'CHF 20\'000', correct: false },
      { id: 'c', text: 'CHF 100\'000', correct: true },
      { id: 'd', text: 'CHF 200\'000', correct: false },
    ],
    explanation: 'Le capital-actions minimum d\'une SA est de CHF 100\'000 (art. 621 CO). Au moins 20% de la valeur nominale de chaque action doit etre libere, avec un minimum total de CHF 50\'000. A comparer avec la Sarl dont le capital minimum est de CHF 20\'000.',
  },

  {
    id: 'soc-q03', group: 'societes-qcm', type: 'qcm', tag: 'societes', difficulty: 2,
    title: 'Reserve legale issue du benefice — plafond',
    description: 'A quel moment l\'entreprise peut-elle cesser d\'alimenter la reserve legale issue du benefice ?',
    options: [
      { id: 'a', text: 'Quand elle atteint 20% du capital-actions', correct: false },
      { id: 'b', text: 'Quand elle atteint 50% du capital-actions inscrit au RC', correct: true },
      { id: 'c', text: 'Quand elle atteint 100% du capital-actions', correct: false },
      { id: 'd', text: 'Jamais, l\'obligation est permanente', correct: false },
    ],
    explanation: 'Selon l\'art. 672 CO, 5% du benefice annuel doit etre affecte a la reserve legale issue du benefice jusqu\'a ce que celle-ci atteigne 50% du capital-actions inscrit au registre du commerce. Au-dela de ce seuil, l\'attribution n\'est plus obligatoire.',
  },

  {
    id: 'soc-q04', group: 'societes-qcm', type: 'qcm', tag: 'societes', difficulty: 2,
    title: 'Actions propres — plafond d\'acquisition',
    description: 'Quel est le pourcentage maximum d\'actions propres qu\'une SA peut acquerir dans le cas general ?',
    options: [
      { id: 'a', text: '5% du capital-actions', correct: false },
      { id: 'b', text: '10% du capital-actions', correct: true },
      { id: 'c', text: '20% du capital-actions', correct: false },
      { id: 'd', text: '25% du capital-actions', correct: false },
    ],
    explanation: 'Selon l\'art. 659 CO, une SA ne peut acquerir ses propres actions que si la valeur nominale de l\'ensemble des actions detenues ne depasse pas 10% du capital-actions. L\'acquisition necessite des fonds propres librement disponibles a hauteur du prix d\'acquisition.',
  },

  {
    id: 'soc-q05', group: 'societes-qcm', type: 'qcm', tag: 'societes', difficulty: 2,
    title: 'Perte de capital — mesures d\'assainissement',
    description: 'Selon l\'art. 725a CO, quand le conseil d\'administration doit-il prendre des mesures d\'assainissement ?',
    options: [
      { id: 'a', text: 'Des que la societe enregistre une perte annuelle', correct: false },
      { id: 'b', text: 'Quand les fonds propres sont inferieurs a la moitie du capital-actions et des reserves legales', correct: true },
      { id: 'c', text: 'Quand la tresorerie nette est negative', correct: false },
      { id: 'd', text: 'Quand le conseil d\'administration le decide librement', correct: false },
    ],
    explanation: 'L\'art. 725a CO prevoit que si le dernier bilan annuel revele que les fonds propres sont inferieurs a la moitie de la somme du capital-actions et des reserves legales, le conseil d\'administration prend des mesures propres a remedier a cette situation (assainissement). En cas de surendettement (art. 725b CO), l\'avis au juge est obligatoire.',
  },

  {
    id: 'soc-q06', group: 'societes-qcm', type: 'qcm', tag: 'societes', difficulty: 2,
    title: 'Prime a l\'emission — comptabilisation',
    description: 'Lors d\'une augmentation de capital, la prime a l\'emission (agio) est comptabilisee dans quel compte ?',
    options: [
      { id: 'a', text: '2800 Capital-actions', correct: false },
      { id: 'b', text: '2950 Reserve legale issue du benefice', correct: false },
      { id: 'c', text: '2910 Prime a l\'emission, puis transferee en 2900 Reserve legale issue du capital', correct: true },
      { id: 'd', text: '2960 Reserve facultative', correct: false },
    ],
    explanation: 'La prime a l\'emission (difference entre le prix d\'emission et la valeur nominale) est d\'abord comptabilisee au compte 2910 Prime a l\'emission. Apres deduction des eventuels frais d\'augmentation, le solde est vire au compte 2900 Reserve legale issue du capital. Elle ne passe jamais par le compte 2800 Capital-actions (qui ne contient que la valeur nominale).',
  },

  // ─── QCM SUPPLEMENTAIRES ────────────────────────────────────────────

  {
    id: 'soc-qcm-01', group: 'societes-qcm', type: 'qcm', tag: 'societes', difficulty: 1,
    title: 'Capital minimum des soci\u00e9t\u00e9s suisses',
    description: 'Quel est le capital minimum pour fonder une SA en Suisse ?',
    options: [
      { id: 'a', text: 'CHF 50\'000', correct: false },
      { id: 'b', text: 'CHF 100\'000', correct: true },
      { id: 'c', text: 'CHF 20\'000', correct: false },
      { id: 'd', text: 'Pas de minimum', correct: false },
    ],
    explanation: 'SA : capital-actions minimum CHF 100\'000, dont au moins CHF 50\'000 lib\u00e9r\u00e9s. S\u00e0rl : capital minimum CHF 20\'000 enti\u00e8rement lib\u00e9r\u00e9.',
  },

  {
    id: 'soc-qcm-02', group: 'societes-qcm', type: 'qcm', tag: 'societes', difficulty: 2,
    title: 'R\u00e9serve l\u00e9gale issue du b\u00e9n\u00e9fice',
    description: 'Quelle part du b\u00e9n\u00e9fice net annuel doit \u00eatre affect\u00e9e \u00e0 la r\u00e9serve l\u00e9gale (SA) ?',
    options: [
      { id: 'a', text: '10% jusqu\'\u00e0 50% du capital', correct: false },
      { id: 'b', text: '5% jusqu\'\u00e0 50% du capital', correct: true },
      { id: 'c', text: '20% jusqu\'\u00e0 100% du capital', correct: false },
      { id: 'd', text: 'Pas d\'obligation', correct: false },
    ],
    explanation: 'Art. 672 CO : 5% du b\u00e9n\u00e9fice net doit \u00eatre affect\u00e9 \u00e0 la r\u00e9serve l\u00e9gale g\u00e9n\u00e9rale, jusqu\'\u00e0 ce qu\'elle atteigne 50% du capital-actions.',
  },

  {
    id: 'soc-qcm-03', group: 'societes-qcm', type: 'qcm', tag: 'societes', difficulty: 2,
    title: 'Imp\u00f4t anticip\u00e9 sur les dividendes',
    description: 'Quel est le taux de l\'imp\u00f4t anticip\u00e9 (IA) sur les dividendes en Suisse ?',
    options: [
      { id: 'a', text: '15%', correct: false },
      { id: 'b', text: '25%', correct: false },
      { id: 'c', text: '35%', correct: true },
      { id: 'd', text: '8.1%', correct: false },
    ],
    explanation: 'L\'imp\u00f4t anticip\u00e9 sur les dividendes est de 35% (LIA art. 13). Il est retenu par la soci\u00e9t\u00e9 et vers\u00e9 \u00e0 l\'AFC. Le b\u00e9n\u00e9ficiaire peut le r\u00e9cup\u00e9rer via sa d\u00e9claration fiscale s\'il d\u00e9clare le revenu.',
  },

  // ─── ECRITURES SUPPLEMENTAIRES ──────────────────────────────────────

  {
    id: 'soc-ecr-03', group: 'societes-ecritures', type: 'journal', tag: 'societes', difficulty: 3,
    title: 'Augmentation de capital avec prime d\'émission',
    description: 'Alpha SA augmente son capital de CHF 200\'000 (2\'000 actions × CHF 100 nominal). Prix d\'émission : CHF 120/action. Libération intégrale par virement.',
    data: [
      { label: 'Nouvelles actions', value: '2\'000 actions' },
      { label: 'Valeur nominale', value: 'CHF 100' },
      { label: 'Prix d\'émission', value: 'CHF 120' },
      { label: 'Libération', value: '100% espèces' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Souscription — libération espèces', debit: { num: '1020', label: 'Banque' }, credit: { num: '2030', label: 'Apports promis' }, amount: 240000 },
      { id: 'e2', libelle: 'Capital-actions (valeur nominale)', debit: { num: '2030', label: 'Apports promis' }, credit: { num: '2800', label: 'Capital-actions' }, amount: 200000 },
      { id: 'e3', libelle: 'Prime d\'émission (agio)', debit: { num: '2030', label: 'Apports promis' }, credit: { num: '2900', label: 'Réserve légale issue du capital' }, amount: 40000 },
    ],
  },

  {
    id: 'soc-ecr-04', group: 'societes-ecritures', type: 'journal', tag: 'societes', difficulty: 3,
    title: 'Assainissement — Abandon de créances',
    description: 'Beta SA est en perte de capital (art. 725a CO). Le principal créancier abandonne une créance de CHF 150\'000 pour assainir la société.',
    data: [
      { label: 'Créance abandonnée', value: 'CHF 150\'000' },
      { label: 'Type', value: 'Abandon de créances (art. 725a CO)' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Abandon de créances — suppression de la dette', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '8100', label: 'Produits exceptionnels' }, amount: 150000 },
    ],
  },

  {
    id: 'soc-ecr-05', group: 'societes-ecritures', type: 'journal', tag: 'societes', difficulty: 3,
    title: 'Distribution de dividende complet',
    description: 'L\'AG de Gamma SA décide de distribuer CHF 80\'000 de dividendes :\n1. Décision de l\'AG (affectation du bénéfice)\n2. Retenue de l\'impôt anticipé (35%)\n3. Versement du dividende net aux actionnaires\n4. Versement de l\'IA à l\'AFC',
    data: [
      { label: 'Dividende brut', value: 'CHF 80\'000' },
      { label: 'Impôt anticipé (35%)', value: 'CHF 28\'000' },
      { label: 'Dividende net', value: 'CHF 52\'000' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Décision AG — affectation bénéfice', debit: { num: '2970', label: 'Bénéfice reporté' }, credit: { num: '2850', label: 'Dividendes à payer' }, amount: 80000 },
      { id: 'e2', libelle: 'Retenue impôt anticipé 35%', debit: { num: '2850', label: 'Dividendes à payer' }, credit: { num: '2215', label: 'Impôt anticipé dû' }, amount: 28000 },
      { id: 'e3', libelle: 'Versement dividende net aux actionnaires', debit: { num: '2850', label: 'Dividendes à payer' }, credit: { num: '1020', label: 'Banque' }, amount: 52000 },
      { id: 'e4', libelle: 'Versement impôt anticipé à l\'AFC', debit: { num: '2215', label: 'Impôt anticipé dû' }, credit: { num: '1020', label: 'Banque' }, amount: 28000 },
    ],
  },

  {
    id: 'soc-ecr-06', group: 'societes-ecritures', type: 'journal', tag: 'societes', difficulty: 2,
    title: 'Rachat et revente d\'actions propres',
    description: 'Delta SA rachète 100 de ses propres actions à CHF 150/action, puis les revend 3 mois plus tard à CHF 170/action.',
    data: [
      { label: 'Rachat', value: '100 actions × CHF 150 = CHF 15\'000' },
      { label: 'Revente', value: '100 actions × CHF 170 = CHF 17\'000' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Rachat actions propres', debit: { num: '2860', label: 'Actions propres (−)' }, credit: { num: '1020', label: 'Banque' }, amount: 15000 },
      { id: 'e2', libelle: 'Revente actions propres', debit: { num: '1020', label: 'Banque' }, credit: { num: '2860', label: 'Actions propres (−)' }, amount: 15000 },
      { id: 'e3', libelle: 'Plus-value sur revente', debit: { num: '1020', label: 'Banque' }, credit: { num: '2900', label: 'Réserve issue du capital' }, amount: 2000 },
    ],
  },

  {
    id: 'soc-ecr-07', group: 'societes-ecritures', type: 'journal', tag: 'societes', difficulty: 3,
    title: 'Révision — De la fondation au premier dividende',
    description: 'Epsilon SA — exercice complet :\n1. Fondation : capital CHF 100\'000 (1\'000 actions × CHF 100), libéré à 50%\n2. Libération du solde 3 mois plus tard\n3. Bénéfice de l\'exercice : CHF 40\'000\n4. Affectation réserve légale (5%)\n5. Distribution dividende CHF 30\'000',
    ecritures: [
      { id: 'e1', libelle: 'Fondation — souscription capital', debit: { num: '1020', label: 'Banque' }, credit: { num: '2800', label: 'Capital-actions' }, amount: 50000 },
      { id: 'e2', libelle: 'Capital non libéré', debit: { num: '1050', label: 'Capital non libéré' }, credit: { num: '2800', label: 'Capital-actions' }, amount: 50000 },
      { id: 'e3', libelle: 'Libération du solde', debit: { num: '1020', label: 'Banque' }, credit: { num: '1050', label: 'Capital non libéré' }, amount: 50000 },
      { id: 'e4', libelle: 'Affectation réserve légale (5%)', debit: { num: '2970', label: 'Bénéfice de l\'exercice' }, credit: { num: '2900', label: 'Réserve légale' }, amount: 2000 },
      { id: 'e5', libelle: 'Distribution dividende brut', debit: { num: '2970', label: 'Bénéfice de l\'exercice' }, credit: { num: '2850', label: 'Dividendes à payer' }, amount: 30000 },
    ],
  },

  // ─── QCM SWISSWATCH SA ──────────────────────────────────────────────

  {
    id: 'soc-qcm-04',
    group: 'societes-qcm',
    type: 'qcm',
    tag: 'societes',
    difficulty: 2,
    title: 'M\u00e9canisme de l\'imp\u00f4t anticip\u00e9',
    description: 'SwiSSwatch SA distribue un dividende de CHF 50\'000. Qui paie l\'imp\u00f4t anticip\u00e9 et \u00e0 qui ?',
    options: [
      { id: 'a', text: 'L\'actionnaire paie 35% \u00e0 l\'AFC', correct: false },
      { id: 'b', text: 'SwiSSwatch SA retient 35% et verse \u00e0 l\'AFC', correct: true },
      { id: 'c', text: 'La banque retient 35% automatiquement', correct: false },
      { id: 'd', text: 'Pas d\'imp\u00f4t anticip\u00e9 sur les dividendes', correct: false },
    ],
    explanation: 'C\'est la soci\u00e9t\u00e9 (SwiSSwatch SA) qui retient 35% sur le dividende brut et verse cette retenue \u00e0 l\'AFC. L\'actionnaire re\u00e7oit le dividende net (65%). Il peut r\u00e9cup\u00e9rer l\'IA via sa d\u00e9claration fiscale s\'il d\u00e9clare le revenu.',
  },

  {
    id: 'soc-qcm-05',
    group: 'societes-qcm',
    type: 'qcm',
    tag: 'societes',
    difficulty: 1,
    title: 'Obligation de constituer une r\u00e9serve l\u00e9gale',
    description: 'SwiSSwatch SA r\u00e9alise un b\u00e9n\u00e9fice de CHF 180\'000. Quel montant minimum doit \u00eatre affect\u00e9 \u00e0 la r\u00e9serve l\u00e9gale issue du b\u00e9n\u00e9fice ?',
    options: [
      { id: 'a', text: 'CHF 18\'000 (10%)', correct: false },
      { id: 'b', text: 'CHF 9\'000 (5%)', correct: true },
      { id: 'c', text: 'CHF 36\'000 (20%)', correct: false },
      { id: 'd', text: 'Aucune obligation', correct: false },
    ],
    explanation: 'Art. 672 CO : 5% du b\u00e9n\u00e9fice net doit \u00eatre affect\u00e9 \u00e0 la r\u00e9serve l\u00e9gale issue du b\u00e9n\u00e9fice, jusqu\'\u00e0 ce qu\'elle atteigne 50% du capital-actions. 180\'000 \u00d7 5% = CHF 9\'000.',
  },

  // ─── ECRITURES SWISSWATCH SA ────────────────────────────────────────

  {
    id: 'soc-ecr-08',
    group: 'societes-ecritures',
    type: 'journal',
    tag: 'societes',
    difficulty: 2,
    title: 'Fondation de SwiSSwatch SA \u2014 \u00c9critures compl\u00e8tes',
    description: 'Th\u00e9o Keller fonde SwiSSwatch SA avec un capital de CHF 200\'000 (2\'000 actions \u00d7 CHF 100). Lib\u00e9ration \u00e0 50% par virement bancaire. Frais de fondation CHF 3\'500 pay\u00e9s comptant.',
    data: [
      { label: 'Capital-actions', value: 'CHF 200\'000' },
      { label: 'Lib\u00e9ration', value: '50% = CHF 100\'000' },
      { label: 'Frais de fondation', value: 'CHF 3\'500' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Lib\u00e9ration 50% par banque', debit: { num: '1020', label: 'Banque' }, credit: { num: '2800', label: 'Capital-actions' }, amount: 100000 },
      { id: 'e2', libelle: 'Part non lib\u00e9r\u00e9e du capital', debit: { num: '1850', label: 'Capital non vers\u00e9' }, credit: { num: '2800', label: 'Capital-actions' }, amount: 100000 },
      { id: 'e3', libelle: 'Frais de fondation pay\u00e9s comptant', debit: { num: '6700', label: 'Autres charges d\'exploitation' }, credit: { num: '1020', label: 'Banque' }, amount: 3500 },
    ],
    correction: '1) Lib\u00e9ration 50% : D\u00e9bit 1020 Banque / Cr\u00e9dit 2800 Capital-actions = 100\'000\n2) Part non lib\u00e9r\u00e9e : D\u00e9bit 1850 Capital non vers\u00e9 / Cr\u00e9dit 2800 Capital-actions = 100\'000\n3) Frais de fondation : D\u00e9bit 6700 Autres charges d\'exploitation / Cr\u00e9dit 1020 Banque = 3\'500',
  },

  {
    id: 'soc-ecr-09',
    group: 'societes-ecritures',
    type: 'journal',
    tag: 'societes',
    difficulty: 3,
    title: 'Premier dividende de SwiSSwatch SA',
    description: 'L\'AG de SwiSSwatch SA d\u00e9cide :\n1. Affectation r\u00e9serve l\u00e9gale 5% sur b\u00e9n\u00e9fice CHF 95\'000\n2. Distribution dividende CHF 40\'000\n3. Retenue imp\u00f4t anticip\u00e9 35%\n4. Versement dividende net\n5. Versement IA \u00e0 l\'AFC\n6. Solde au b\u00e9n\u00e9fice report\u00e9',
    data: [
      { label: 'B\u00e9n\u00e9fice de l\'exercice', value: 'CHF 95\'000' },
      { label: 'R\u00e9serve l\u00e9gale (5%)', value: 'CHF 4\'750' },
      { label: 'Dividende brut', value: 'CHF 40\'000' },
      { label: 'Imp\u00f4t anticip\u00e9 (35%)', value: 'CHF 14\'000' },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Affectation r\u00e9serve l\u00e9gale (5%)', debit: { num: '2970', label: 'B\u00e9n\u00e9fice de l\'exercice' }, credit: { num: '2900', label: 'R\u00e9serve l\u00e9gale' }, amount: 4750 },
      { id: 'e2', libelle: 'Distribution dividende brut', debit: { num: '2970', label: 'B\u00e9n\u00e9fice de l\'exercice' }, credit: { num: '2261', label: 'Dividendes \u00e0 payer' }, amount: 40000 },
      { id: 'e3', libelle: 'Retenue imp\u00f4t anticip\u00e9 35%', debit: { num: '2261', label: 'Dividendes \u00e0 payer' }, credit: { num: '2206', label: 'Imp\u00f4t anticip\u00e9 d\u00fb' }, amount: 14000 },
      { id: 'e4', libelle: 'Versement dividende net aux actionnaires', debit: { num: '2261', label: 'Dividendes \u00e0 payer' }, credit: { num: '1020', label: 'Banque' }, amount: 26000 },
      { id: 'e5', libelle: 'Versement IA \u00e0 l\'AFC', debit: { num: '2206', label: 'Imp\u00f4t anticip\u00e9 d\u00fb' }, credit: { num: '1020', label: 'Banque' }, amount: 14000 },
      { id: 'e6', libelle: 'Solde au b\u00e9n\u00e9fice report\u00e9', debit: { num: '2970', label: 'B\u00e9n\u00e9fice de l\'exercice' }, credit: { num: '2960', label: 'B\u00e9n\u00e9fice report\u00e9' }, amount: 50250 },
    ],
    correction: '1) R\u00e9serve l\u00e9gale : 95\'000 \u00d7 5% = 4\'750 \u2192 D\u00e9bit 2970 / Cr\u00e9dit 2900\n2) Dividende brut : 40\'000 \u2192 D\u00e9bit 2970 / Cr\u00e9dit 2261\n3) IA 35% : 40\'000 \u00d7 35% = 14\'000 \u2192 D\u00e9bit 2261 / Cr\u00e9dit 2206\n4) Dividende net : 40\'000 \u2212 14\'000 = 26\'000 \u2192 D\u00e9bit 2261 / Cr\u00e9dit 1020\n5) Versement IA : 14\'000 \u2192 D\u00e9bit 2206 / Cr\u00e9dit 1020\n6) Solde : 95\'000 \u2212 4\'750 \u2212 40\'000 = 50\'250 \u2192 D\u00e9bit 2970 / Cr\u00e9dit 2960',
  },

  // ─── CALCUL SWISSWATCH SA ───────────────────────────────────────────

  {
    id: 'soc-calc-01',
    group: 'societes-qcm',
    type: 'calcul',
    tag: 'societes',
    difficulty: 3,
    title: 'Valeur d\'une action SwiSSwatch SA',
    description: 'Calculez la valeur intrins\u00e8que d\'une action SwiSSwatch SA.',
    data: [
      { label: 'Total actif', value: 'CHF 1\'200\'000' },
      { label: 'Total dettes', value: 'CHF 870\'000' },
      { label: 'R\u00e9serves latentes estim\u00e9es', value: 'CHF 120\'000' },
      { label: 'Nombre d\'actions', value: '2\'000' },
    ],
    champs: [
      { id: 'fp_comptable', label: 'Fonds propres comptables', placeholder: '330000', correct: 330000, tol: 1, hint: '1\'200\'000 \u2212 870\'000' },
      { id: 'fp_reels', label: 'Fonds propres r\u00e9els (avec r\u00e9serves latentes)', placeholder: '450000', correct: 450000, tol: 1, hint: '330\'000 + 120\'000' },
      { id: 'valeur_action', label: 'Valeur intrins\u00e8que par action', placeholder: '225', correct: 225, tol: 1, hint: '450\'000 / 2\'000' },
    ],
    correction: 'FP comptables : 1\'200\'000 \u2212 870\'000 = 330\'000\nFP r\u00e9els : 330\'000 + 120\'000 (r\u00e9serves latentes) = 450\'000\nValeur/action : 450\'000 / 2\'000 = CHF 225',
  },

];
