export const journalLibreExercises = [
  {
    id: 'jl-01', group: 'base-journal', type: 'journal-libre', tag: 'base', difficulty: 3,
    title: 'Journal libre \u2014 Semaine chez SwiSSwatch SA',
    description: `Passez toutes les \u00e9critures n\u00e9cessaires pour cette semaine chez SwiSSwatch SA. \u00c0 vous de d\u00e9terminer combien d'\u00e9critures il faut et dans quel ordre.

Lundi : R\u00e9ception facture fournisseur Nivarox SA CHF 8\u2019000 HT + TVA 8.1%
Mardi : \u00c9mission facture client Bucherer AG CHF 15\u2019000 HT + TVA 8.1%
Mercredi : Paiement loyer atelier CHF 4\u2019500
Jeudi : Encaissement Bucherer AG (totalit\u00e9 TTC)
Vendredi : Paiement Nivarox SA (totalit\u00e9 TTC)`,
    note: 'D\u00e9terminez vous-m\u00eame le nombre d\'\'ecritures n\u00e9cessaires. Pensez \u00e0 s\u00e9parer le montant HT et la TVA.',
    ecritures: [
      { id: 'e1', debit: { num: '4200' }, credit: { num: '2000' }, amount: 8000 },
      { id: 'e1b', debit: { num: '1170' }, credit: { num: '2000' }, amount: 648 },
      { id: 'e2', debit: { num: '1100' }, credit: { num: '3400' }, amount: 15000 },
      { id: 'e2b', debit: { num: '1100' }, credit: { num: '2200' }, amount: 1215 },
      { id: 'e3', debit: { num: '6000' }, credit: { num: '1020' }, amount: 4500 },
      { id: 'e4', debit: { num: '1020' }, credit: { num: '1100' }, amount: 16215 },
      { id: 'e5', debit: { num: '2000' }, credit: { num: '1020' }, amount: 8648 },
    ],
  },
  {
    id: 'jl-02', group: 'base-journal', type: 'journal-libre', tag: 'base', difficulty: 2,
    title: 'Journal libre \u2014 Premiers achats de SwiSSwatch',
    description: `SwiSSwatch SA vient de d\u00e9marrer. Passez les \u00e9critures pour ces 3 op\u00e9rations :

1. Th\u00e9o Keller verse CHF 100\u2019000 de capital sur le compte bancaire
2. Achat d'une machine CNC \u00e0 cr\u00e9dit pour CHF 45\u2019000
3. Achat de composants pour CHF 5\u2019000 pay\u00e9 comptant par banque`,
    note: 'Pas de TVA dans cet exercice pour simplifier.',
    ecritures: [
      { id: 'e1', debit: { num: '1020' }, credit: { num: '2800' }, amount: 100000 },
      { id: 'e2', debit: { num: '1500' }, credit: { num: '2000' }, amount: 45000 },
      { id: 'e3', debit: { num: '4200' }, credit: { num: '1020' }, amount: 5000 },
    ],
  },
  {
    id: 'jl-03', group: 'base-journal', type: 'journal-libre', tag: 'base', difficulty: 3,
    title: 'Journal libre \u2014 Bouclement simplifi\u00e9',
    description: `Passez les \u00e9critures de bouclement au 31.12 pour SwiSSwatch SA :

- Amortissement machine CNC : CHF 45\u2019000, 20% lin\u00e9aire, m\u00e9thode directe
- Provision ducroire : porter de CHF 0 \u00e0 CHF 1\u2019200
- Loyer janvier pay\u00e9 d'avance : CHF 4\u2019500
- Provision pour imp\u00f4ts : CHF 12\u2019000`,
    note: 'D\u00e9terminez les comptes et les montants. L\'amortissement lin\u00e9aire = valeur \u00d7 taux.',
    ecritures: [
      { id: 'e1', debit: { num: '6800' }, credit: { num: '1500' }, amount: 9000 },
      { id: 'e2', debit: { num: '3805' }, credit: { num: '1109' }, amount: 1200 },
      { id: 'e3', debit: { num: '1300' }, credit: { num: '6000' }, amount: 4500 },
      { id: 'e4', debit: { num: '8900' }, credit: { num: '2208' }, amount: 12000 },
    ],
  },
];
