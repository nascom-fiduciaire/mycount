export const examenExercises = [
  {
    id: 'exam-final', group: 'examen', type: 'exam', tag: 'base', difficulty: 3,
    title: 'Examen final — SwiSSwatch SA (Année complète)',
    description: 'Cet examen couvre l\'ensemble des thématiques abordées dans MyCount. Il se compose de 6 parties : théorie, écritures courantes, salaires, bouclement, analyse financière et investissement. Bonne chance !',
    totalPoints: 85,
    sections: [
      // ── PARTIE 1 : THÉORIE (8 QCM × 2 pts = 16 pts) ──
      {
        id: 'part1',
        title: 'Partie 1 — Théorie générale',
        type: 'qcm-multi',
        points: 16,
        description: '8 questions à choix multiples. Une seule réponse correcte par question.',
        questions: [
          {
            id: 'q1',
            text: 'À partir de quel chiffre d\'affaires une entreprise individuelle est-elle obligée de tenir une comptabilité complète (CO art. 957) ?',
            options: [
              { id: 'a', text: 'CHF 100\'000', correct: false },
              { id: 'b', text: 'CHF 500\'000', correct: true },
              { id: 'c', text: 'CHF 1\'000\'000', correct: false },
              { id: 'd', text: 'Dès le premier franc', correct: false },
            ],
            explanation: 'Art. 957 al. 1 CO : les entreprises individuelles et sociétés de personnes doivent tenir une comptabilité complète si leur CA dépasse CHF 500\'000.',
          },
          {
            id: 'q2',
            text: 'Le principe de prudence en comptabilité suisse signifie que :',
            options: [
              { id: 'a', text: 'On comptabilise les gains dès qu\'ils sont probables', correct: false },
              { id: 'b', text: 'On comptabilise toutes les pertes prévisibles, même non réalisées', correct: true },
              { id: 'c', text: 'On sous-estime systématiquement les actifs de 50%', correct: false },
              { id: 'd', text: 'On ne distribue jamais de dividendes', correct: false },
            ],
            explanation: 'Le principe de prudence impose de comptabiliser toutes les pertes prévisibles mais interdit de comptabiliser les gains non encore réalisés.',
          },
          {
            id: 'q3',
            text: 'Une charge augmente :',
            options: [
              { id: 'a', text: 'Au crédit', correct: false },
              { id: 'b', text: 'Au débit', correct: true },
              { id: 'c', text: 'Ni l\'un ni l\'autre', correct: false },
              { id: 'd', text: 'Ça dépend du type de charge', correct: false },
            ],
            explanation: 'Règle fondamentale : les actifs et les charges augmentent au DÉBIT. Les passifs, fonds propres et produits augmentent au CRÉDIT.',
          },
          {
            id: 'q4',
            text: 'Le taux normal de TVA en Suisse (2024) est de :',
            options: [
              { id: 'a', text: '7.7%', correct: false },
              { id: 'b', text: '8.1%', correct: true },
              { id: 'c', text: '2.6%', correct: false },
              { id: 'd', text: '3.8%', correct: false },
            ],
            explanation: 'Depuis le 1er janvier 2024 : taux normal 8.1%, taux réduit 2.6% (alimentation, médicaments), taux hébergement 3.8%.',
          },
          {
            id: 'q5',
            text: 'Le taux de cotisation AVS/AI/APG employé en 2024 est de :',
            options: [
              { id: 'a', text: '5.3%', correct: true },
              { id: 'b', text: '6.4%', correct: false },
              { id: 'c', text: '1.1%', correct: false },
              { id: 'd', text: '10.6%', correct: false },
            ],
            explanation: 'AVS/AI/APG employé : 5.3% (paritaire — l\'employeur paie aussi 5.3%). Le total est de 10.6% partagé 50/50.',
          },
          {
            id: 'q6',
            text: 'La méthode d\'amortissement dégressif applique le taux sur :',
            options: [
              { id: 'a', text: 'La valeur d\'acquisition', correct: false },
              { id: 'b', text: 'La valeur résiduelle (nette)', correct: true },
              { id: 'c', text: 'La moitié de la valeur d\'acquisition', correct: false },
              { id: 'd', text: 'Le chiffre d\'affaires', correct: false },
            ],
            explanation: 'Dégressif = taux × valeur résiduelle. L\'amortissement diminue chaque année car la base diminue. Linéaire = taux × valeur d\'acquisition (constant).',
          },
          {
            id: 'q7',
            text: 'Le capital minimum pour fonder une SA en Suisse est de :',
            options: [
              { id: 'a', text: 'CHF 20\'000', correct: false },
              { id: 'b', text: 'CHF 50\'000', correct: false },
              { id: 'c', text: 'CHF 100\'000', correct: true },
              { id: 'd', text: 'CHF 200\'000', correct: false },
            ],
            explanation: 'SA : capital minimum CHF 100\'000 dont au minimum CHF 50\'000 libérés (ou 20% par action si supérieur). Sàrl : CHF 20\'000 entièrement libéré.',
          },
          {
            id: 'q8',
            text: 'Un ratio de liquidité générale (L3) inférieur à 1 signifie :',
            options: [
              { id: 'a', text: 'L\'entreprise est très rentable', correct: false },
              { id: 'b', text: 'Les actifs circulants ne couvrent pas les dettes à court terme', correct: true },
              { id: 'c', text: 'L\'entreprise a trop de liquidités', correct: false },
              { id: 'd', text: 'Le ratio est optimal', correct: false },
            ],
            explanation: 'L3 = Actifs circulants / Dettes à court terme. Un L3 < 1 signifie risque de liquidité. La norme est L3 > 1.5.',
          },
        ],
      },

      // ── PARTIE 2 : ÉCRITURES COURANTES (6 écritures × 3 pts = 18 pts) ──
      {
        id: 'part2',
        title: 'Partie 2 — Écritures courantes',
        type: 'journal',
        points: 18,
        description: 'SwiSSwatch SA — mois d\'octobre. Passez les 6 écritures suivantes.',
        data: [
          { label: 'Facture client Bucherer AG', value: 'CHF 12\'000 HT + TVA 8.1%' },
          { label: 'Achat composants Nivarox SA', value: 'CHF 5\'000 HT + TVA 8.1%' },
          { label: 'Loyer atelier octobre', value: 'CHF 4\'500' },
          { label: 'Encaissement Bucherer AG', value: 'CHF 12\'972 TTC' },
          { label: 'Paiement Nivarox SA', value: 'CHF 5\'405 TTC' },
          { label: 'Prélèvement privé Théo Keller', value: 'CHF 2\'000' },
        ],
        ecritures: [
          { id: 'e1', libelle: 'Facture Bucherer AG — prestations HT', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '3400', label: 'Ventes de prestations' }, amount: 12000 },
          { id: 'e1b', libelle: 'TVA 8.1% sur facture Bucherer AG', debit: { num: '1100', label: 'Débiteurs' }, credit: { num: '2200', label: 'TVA due' }, amount: 972, isSubLine: true },
          { id: 'e2', libelle: 'Achat composants Nivarox SA — HT', debit: { num: '4200', label: 'Achats marchandises' }, credit: { num: '2000', label: 'Créanciers' }, amount: 5000 },
          { id: 'e2b', libelle: 'Impôt préalable TVA 8.1%', debit: { num: '1170', label: 'Impôt préalable' }, credit: { num: '2000', label: 'Créanciers' }, amount: 405, isSubLine: true },
          { id: 'e3', libelle: 'Loyer atelier octobre', debit: { num: '6000', label: 'Charges de locaux' }, credit: { num: '1020', label: 'Banque' }, amount: 4500 },
          { id: 'e4', libelle: 'Encaissement Bucherer AG TTC', debit: { num: '1020', label: 'Banque' }, credit: { num: '1100', label: 'Débiteurs' }, amount: 12972 },
          { id: 'e5', libelle: 'Paiement Nivarox SA TTC', debit: { num: '2000', label: 'Créanciers' }, credit: { num: '1020', label: 'Banque' }, amount: 5405 },
          { id: 'e6', libelle: 'Prélèvement privé Théo Keller', debit: { num: '2800', label: 'Capital / Privé' }, credit: { num: '1020', label: 'Banque' }, amount: 2000 },
        ],
      },

      // ── PARTIE 3 : FICHE DE SALAIRE (6 champs × 2 pts = 12 pts) ──
      {
        id: 'part3',
        title: 'Partie 3 — Salaire de Jules Weber',
        type: 'calcul',
        points: 12,
        description: 'Calculez la fiche de salaire de Jules Weber (maître horloger, 100%, CHF 8\'200 brut).',
        data: [
          { label: 'Salaire brut mensuel', value: 'CHF 8\'200.00' },
          { label: 'AVS/AI/APG employé', value: '5.3%' },
          { label: 'AC employé', value: '1.1%' },
          { label: 'LAANP', value: '1.0%' },
          { label: 'LPP employé (forfait)', value: 'CHF 410.00' },
        ],
        champs: [
          { id: 'avs', label: 'AVS/AI/APG (5.3%)', correct: 434.60, tol: 0.10, hint: '8\'200 × 5.3%' },
          { id: 'ac', label: 'AC (1.1%)', correct: 90.20, tol: 0.10, hint: '8\'200 × 1.1%' },
          { id: 'laanp', label: 'LAANP (1.0%)', correct: 82.00, tol: 0.10, hint: '8\'200 × 1.0%' },
          { id: 'total_ded', label: 'Total déductions', correct: 1016.80, tol: 0.10, hint: '434.60 + 90.20 + 82.00 + 410.00' },
          { id: 'net', label: 'Salaire net', correct: 7183.20, tol: 0.10, hint: '8\'200 − 1\'016.80' },
          { id: 'cout', label: 'Coût employeur (brut + charges pat. estimées 13%)', correct: 9266.00, tol: 5, hint: '8\'200 + (8\'200 × 13%)' },
        ],
        correction: 'AVS : 8\'200 × 5.3% = 434.60\nAC : 90.20 — LAANP : 82.00 — LPP : 410.00\nTotal déductions : 1\'016.80\nNet : 8\'200 − 1\'016.80 = CHF 7\'183.20\nCoût employeur : 8\'200 × 1.13 ≈ CHF 9\'266',
      },

      // ── PARTIE 4 : BOUCLEMENT (5 écritures × 3 pts = 15 pts) ──
      {
        id: 'part4',
        title: 'Partie 4 — Bouclement 31.12',
        type: 'journal',
        points: 15,
        description: 'Bouclement annuel de SwiSSwatch SA au 31.12. Passez les 5 écritures.',
        data: [
          { label: '1. Amortissement centre CNC', value: 'CHF 280\'000 × 25% dégressif, VCN CHF 210\'000' },
          { label: '2. Amortissement véhicule (indirect)', value: 'CHF 65\'000 × 20% linéaire = CHF 13\'000' },
          { label: '3. Loyer janvier N+1 payé d\'avance', value: 'CHF 4\'500' },
          { label: '4. Ajustement ducroire', value: 'Actuel CHF 3\'000, cible CHF 4\'800' },
          { label: '5. Provision impôts', value: 'CHF 28\'000' },
        ],
        ecritures: [
          { id: 'e1', libelle: 'Amortissement centre CNC (25% dégressif sur VCN)', debit: { num: '6800', label: 'Amortissements' }, credit: { num: '1509', label: 'Ajustement valeur machines' }, amount: 52500 },
          { id: 'e2', libelle: 'Amortissement véhicule CEO (20% linéaire indirect)', debit: { num: '6800', label: 'Amortissements' }, credit: { num: '1539', label: 'Ajustement valeur véhicules' }, amount: 13000 },
          { id: 'e3', libelle: 'Loyer payé d\'avance (actif transitoire)', debit: { num: '1300', label: 'Charges payées d\'avance' }, credit: { num: '6000', label: 'Charges de locaux' }, amount: 4500 },
          { id: 'e4', libelle: 'Ajustement ducroire (+1\'800)', debit: { num: '3805', label: 'Pertes sur clients' }, credit: { num: '1109', label: 'Ducroire' }, amount: 1800 },
          { id: 'e5', libelle: 'Provision impôts', debit: { num: '8900', label: 'Impôts directs' }, credit: { num: '2208', label: 'Impôts directs à payer' }, amount: 28000 },
        ],
      },

      // ── PARTIE 5 : ANALYSE FINANCIÈRE (6 champs × 2 pts = 12 pts) ──
      {
        id: 'part5',
        title: 'Partie 5 — Analyse financière',
        type: 'calcul',
        points: 12,
        description: 'Calculez les ratios financiers de SwiSSwatch SA (année 2).',
        data: [
          { label: 'Liquidités', value: 'CHF 120\'000' },
          { label: 'Créances clients', value: 'CHF 280\'000' },
          { label: 'Stocks', value: 'CHF 180\'000' },
          { label: 'Actifs immobilisés', value: 'CHF 620\'000' },
          { label: 'Dettes à court terme', value: 'CHF 225\'000' },
          { label: 'Dettes à long terme', value: 'CHF 350\'000' },
          { label: 'Fonds propres', value: 'CHF 330\'000' },
          { label: 'Résultat net', value: 'CHF 95\'000' },
        ],
        champs: [
          { id: 'l1', label: 'Liquidité immédiate (L1)', correct: 0.53, tol: 0.02, hint: '120\'000 / 225\'000' },
          { id: 'l2', label: 'Liquidité réduite (L2)', correct: 1.78, tol: 0.02, hint: '(120\'000 + 280\'000) / 225\'000' },
          { id: 'l3', label: 'Liquidité générale (L3)', correct: 2.58, tol: 0.02, hint: '(120+280+180) / 225\'000' },
          { id: 'frn', label: 'Fonds de roulement net (FRN)', correct: 355000, tol: 1000, hint: 'AC − DCT = 580\'000 − 225\'000' },
          { id: 'roe', label: 'ROE en % (Résultat/FP)', correct: 28.79, tol: 0.5, hint: '95\'000 / 330\'000 × 100' },
          { id: 'endettement', label: 'Taux d\'endettement en %', correct: 47.83, tol: 0.5, hint: '(225+350) / (225+350+330+295) × 100... attention au total passif!' },
        ],
        correction: 'L1: 120/225 = 0.53 — L2: 400/225 = 1.78 — L3: 580/225 = 2.58\nFRN: 580 − 225 = 355\'000\nROE: 95/330 = 28.79%\nEndettement: 575/1\'200 = 47.92% (total actif = 1\'200\'000)',
      },

      // ── PARTIE 6 : INVESTISSEMENT (4 champs × 3 pts = 12 pts) ──
      {
        id: 'part6',
        title: 'Partie 6 — Décision d\'investissement',
        type: 'calcul',
        points: 12,
        description: 'SwiSSwatch SA envisage l\'achat d\'une nouvelle ligne de polissage automatisée pour CHF 180\'000. Elle génèrerait des économies de CHF 52\'000/an pendant 5 ans. Le WACC est de 8%.',
        data: [
          { label: 'Investissement', value: 'CHF 180\'000' },
          { label: 'Cash flows annuels', value: 'CHF 52\'000 pendant 5 ans' },
          { label: 'WACC', value: '8%' },
          { label: 'Facteur d\'annuité (5 ans, 8%)', value: '3.9927' },
        ],
        champs: [
          { id: 'cf_actualises', label: 'CF actualisés (52\'000 × 3.9927)', correct: 207620, tol: 100, hint: '52\'000 × 3.9927' },
          { id: 'van', label: 'VAN', correct: 27620, tol: 100, hint: '207\'620 − 180\'000' },
          { id: 'payback', label: 'Payback statique (années)', correct: 3.46, tol: 0.05, hint: '180\'000 / 52\'000' },
          { id: 'decision', label: 'Accepter le projet ? (oui/non)', correct: 'oui', tol: 0, hint: 'VAN > 0' },
        ],
        correction: 'CF actualisés : 52\'000 × 3.9927 = CHF 207\'620\nVAN : 207\'620 − 180\'000 = CHF 27\'620 (positive)\nPayback : 180\'000 / 52\'000 = 3.46 ans\nDécision : OUI — VAN positive, le projet crée de la valeur.',
      },
    ],
  },
];
