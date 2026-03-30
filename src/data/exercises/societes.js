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
    note: 'Emission au-dessus du pair : le disagio (prime d\'emission) est comptabilise au compte 7000 Produits financiers.',
    data: [
      { label: 'Valeur nominale emprunt', value: "CHF 500'000" },
      { label: 'Taux d\'emission', value: '103%' },
      { label: 'Produit d\'emission', value: "500'000 x 103% = CHF 515'000" },
      { label: 'Prime d\'emission', value: "CHF 15'000" },
      { label: 'Frais d\'emission', value: "CHF 8'000" },
    ],
    ecritures: [
      { id: 'e1', libelle: 'Souscription — valeur nominale de l\'emprunt', debit: { num: '1195', label: 'Souscripteurs obligations' }, credit: { num: '2430', label: 'Emprunts obligataires' }, amount: 500000 },
      { id: 'e2', libelle: 'Prime d\'emission (103% − 100%)', debit: { num: '1195', label: 'Souscripteurs obligations' }, credit: { num: '7000', label: 'Produits financiers' }, amount: 15000 },
      { id: 'e3', libelle: 'Liberation — encaissement par banque', debit: { num: '1020', label: 'Banque' }, credit: { num: '1195', label: 'Souscripteurs obligations' }, amount: 515000 },
      { id: 'e4', libelle: 'Frais d\'emission de l\'emprunt', debit: { num: '7010', label: 'Charges financieres' }, credit: { num: '1020', label: 'Banque' }, amount: 8000 },
    ],
    hint: 'Au-dessus du pair : les souscripteurs paient plus que la valeur nominale. La difference est un produit financier pour l\'emetteur.',
    correction: `1) Souscription VN : CHF 500'000 → Debit 1195 / Credit 2430.
2) Prime : 500'000 × 3% = CHF 15'000 → Debit 1195 / Credit 7000.
3) Liberation : CHF 515'000 encaisses → Debit 1020 / Credit 1195.
4) Frais : CHF 8'000 → Debit 7010 / Credit 1020.
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

];
