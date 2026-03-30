import React, { useState } from 'react';
import { P, H2, H3, Note, Loi, Tableau, Ecriture, TheoryLayout } from './TheoryUI';

// ─── COMPTE EN T ──────────────────────────────────────────────────────────────
function CompteT({ title, debit = [], credit = [], totalD, totalC, solde, soldeLabel }) {
  const maxRows = Math.max(debit.length, credit.length, 1);
  const rows = Array.from({ length: maxRows }, (_, i) => ({ d: debit[i] || null, c: credit[i] || null }));
  return (
    <div style={{ flex: '1 1 200px', minWidth: 190 }}>
      <div style={{ background: '#2563eb', color: '#fff', fontWeight: 700, fontSize: '0.75rem', padding: '5px 10px', borderRadius: '6px 6px 0 0', textAlign: 'center', letterSpacing: '0.02em' }}>{title}</div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.79rem', border: '1px solid #2563eb', borderTop: 'none' }}>
        <thead>
          <tr>
            <th style={{ padding: '4px 8px', background: '#eff6ff', color: '#2563eb', fontWeight: 700, fontSize: '0.68rem', width: '50%', borderRight: '2px solid #2563eb', textAlign: 'left' }}>Débit</th>
            <th style={{ padding: '4px 8px', background: '#e6f4ed', color: '#059669', fontWeight: 700, fontSize: '0.68rem', textAlign: 'left' }}>Crédit</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '5px 8px', borderRight: '2px solid #2563eb', verticalAlign: 'top' }}>
                {row.d && <div><div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>{row.d.label}</div><div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, color: row.d.hl ? '#2563eb' : '#0f172a' }}>{row.d.amount}</div></div>}
              </td>
              <td style={{ padding: '5px 8px', verticalAlign: 'top' }}>
                {row.c && <div><div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>{row.c.label}</div><div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, color: row.c.hl ? '#059669' : '#0f172a' }}>{row.c.amount}</div></div>}
              </td>
            </tr>
          ))}
          <tr style={{ background: '#f1f5f9', borderTop: '2px solid #2563eb' }}>
            <td style={{ padding: '5px 8px', borderRight: '2px solid #2563eb', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.78rem', color: '#2563eb' }}>{totalD || ''}</td>
            <td style={{ padding: '5px 8px', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.78rem', color: '#059669' }}>{totalC || ''}</td>
          </tr>
          {solde && (
            <tr style={{ background: '#eff6ff' }}>
              <td colSpan={2} style={{ padding: '4px 8px', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.78rem', color: '#2563eb', textAlign: 'center' }}>
                {soldeLabel || 'Solde'} : {solde}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
function GrilleT({ comptes }) {
  return <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', margin: '16px 0' }}>{comptes.map((c, i) => <CompteT key={i} {...c} />)}</div>;
}

// ─── TABLEAU RÉSULTAT ─────────────────────────────────────────────────────────
function TableauResultat({ rows, title }) {
  return (
    <div style={{ margin: '16px 0', border: '2px solid #2563eb', borderRadius: 8, overflow: 'hidden' }}>
      {title && <div style={{ background: '#2563eb', padding: '8px 16px', color: '#fff', fontWeight: 700, fontSize: '0.84rem' }}>{title}</div>}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.83rem' }}>
        <tbody>
          {rows.map(([label, note, montant, bold, sep], i) => sep
            ? <tr key={i}><td colSpan={3} style={{ height: 2, background: '#2563eb' }} /></tr>
            : (
              <tr key={i} style={{ background: bold ? '#eff6ff' : i % 2 === 0 ? '#fff' : '#f8f9fb', borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '8px 16px', fontWeight: bold ? 700 : 400, color: '#0f172a', fontSize: bold ? '0.86rem' : '0.83rem' }}>{label}</td>
                <td style={{ padding: '8px 10px', color: '#94a3b8', fontStyle: 'italic', fontSize: '0.77rem' }}>{note}</td>
                <td style={{ padding: '8px 16px', fontFamily: 'JetBrains Mono, monospace', fontWeight: bold ? 700 : 500, color: bold ? '#2563eb' : '#475569', textAlign: 'right', whiteSpace: 'nowrap' }}>{montant}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

// ─── TABLEAU FIFO / LIFO ──────────────────────────────────────────────────────
function TableauFIFO({ title, color, lignes, totalE, totalS, totalSol }) {
  return (
    <div style={{ margin: '16px 0', border: `2px solid ${color}`, borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ background: color, padding: '9px 16px', color: '#fff', fontWeight: 700, fontSize: '0.84rem' }}>{title}</div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem', minWidth: 720 }}>
          <thead>
            <tr style={{ background: '#f1f5f9' }}>
              <th rowSpan={2} style={{ padding: '7px 10px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', borderRight: '1px solid #e2e8f0', width: '18%', color: '#0f172a', fontWeight: 700 }}>Opération</th>
              <th colSpan={3} style={{ padding: '6px 10px', textAlign: 'center', borderBottom: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', color: '#2563eb', fontWeight: 700 }}>Entrées (Achats)</th>
              <th colSpan={3} style={{ padding: '6px 10px', textAlign: 'center', borderBottom: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', color: '#c0392b', fontWeight: 700 }}>Sorties (Ventes)</th>
              <th colSpan={3} style={{ padding: '6px 10px', textAlign: 'center', borderBottom: '1px solid #e2e8f0', color: '#059669', fontWeight: 700 }}>Solde (Stock)</th>
            </tr>
            <tr style={{ background: '#f8f9fb' }}>
              {['Qté', 'Prix', 'Valeur', 'Qté', 'Prix', 'Valeur', 'Qté', 'Prix(s)', 'Valeur'].map((h, i) => (
                <th key={i} style={{ padding: '5px 8px', textAlign: 'right', borderBottom: '2px solid #e2e8f0', borderRight: i === 2 || i === 5 ? '1px solid #e2e8f0' : 'none', color: '#94a3b8', fontWeight: 600, fontSize: '0.7rem' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lignes.map((l, i) => (
              <tr key={i} style={{ background: l.hl ? '#fff8e8' : l.bold ? '#eff6ff' : i % 2 === 0 ? '#fff' : '#fafbfd', borderBottom: '1px solid #e2e8f0', fontWeight: l.bold ? 700 : 400 }}>
                <td style={{ padding: '6px 10px', borderRight: '1px solid #e2e8f0', color: '#475569', fontSize: '0.78rem' }}>{l.op}</td>
                {[l.eq, l.ep, l.ev, l.sq, l.sp, l.sv, l.solq, l.solp, l.solv].map((v, j) => (
                  <td key={j} style={{ padding: '6px 8px', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', borderRight: j === 2 || j === 5 ? '1px solid #e2e8f0' : 'none', color: j < 3 ? '#2563eb' : j < 6 ? '#c0392b' : '#059669' }}>
                    {v || (v === 0 ? '0' : '—')}
                  </td>
                ))}
              </tr>
            ))}
            <tr style={{ background: '#f1f5f9', borderTop: '2px solid #e2e8f0', fontWeight: 700 }}>
              <td style={{ padding: '6px 10px', borderRight: '1px solid #e2e8f0', color: '#0f172a', fontSize: '0.8rem' }}>TOTAUX</td>
              {[totalE?.q, totalE?.p, totalE?.v, totalS?.q, totalS?.p, totalS?.v, totalSol?.q, totalSol?.p, totalSol?.v].map((v, j) => (
                <td key={j} style={{ padding: '6px 8px', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, borderRight: j === 2 || j === 5 ? '1px solid #e2e8f0' : 'none', color: j < 3 ? '#2563eb' : j < 6 ? '#c0392b' : '#059669' }}>
                  {v || '—'}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── ONGLET 1 : INVENTAIRE INTERMITTENT ──────────────────────────────────────
function TabIntermittent() {
  return (
    <div>
      <H2>1. Pourquoi inscrire les stocks au bilan ?</H2>
      <P>Lorsqu'une entreprise achète des marchandises pour les revendre, toutes les factures d'achat ne peuvent pas être considérées comme des charges de l'exercice. Une partie des marchandises achetées n'est pas encore vendue au 31 décembre — elles appartiennent au patrimoine de l'entreprise et doivent figurer à l'actif du bilan.</P>
      <Loi art="Art. 959a al. 1 ch. 1 let. d CO">
        Les stocks et les prestations de services non facturées figurent dans les actifs circulants du bilan.
      </Loi>
      <Loi art="Art. 959b al. 2 ch. 3 CO">
        Les charges de matériel figurent séparément dans le compte de résultat — l'entreprise doit distinguer ses charges d'achats dans un compte dédié.
      </Loi>
      <P>Par conséquent, deux comptes sont indispensables dès que l'entreprise gère des stocks :</P>
      <Tableau
        headers={['Compte', 'Intitulé', 'Emplacement', 'Rôle']}
        rows={[
          { cells: ['1200', 'Stock de marchandises', 'Actif circulant du bilan', 'Valeur des marchandises non encore vendues'] },
          { cells: ['4000', 'Achats de marchandises', 'Charges du compte de résultat', 'Montant des achats comptabilisés en cours d\'année'] },
        ]}
      />
      <P>Selon la taille de l'entreprise et ses besoins, on peut multiplier les comptes d'achats. Voici l'arborescence complète pour une chocolaterie :</P>
      <div style={{ margin: '12px 0', padding: '14px 18px', background: '#f8f9fb', border: '1px solid #e2e8f0', borderRadius: 7, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#475569', lineHeight: 2 }}>
        <div style={{ color: '#0f172a', fontWeight: 700 }}>4 — Charges de matériel, de marchandises et de prestations de tiers</div>
        <div style={{ paddingLeft: 20 }}>40.. Achats de matière première</div>
        <div style={{ paddingLeft: 40 }}>4010 Achats de beurre de cacao</div>
        <div style={{ paddingLeft: 40 }}>4020 Achats de sucre</div>
        <div style={{ paddingLeft: 40 }}>4030 Achats de farine</div>
        <div style={{ paddingLeft: 20 }}>42.. Achats de marchandises destinées à la revente</div>
        <div style={{ paddingLeft: 20 }}>47.. Frais d'achats et de transport</div>
        <div style={{ paddingLeft: 20 }}>48.. Variations de stocks</div>
        <div style={{ paddingLeft: 20 }}>49.. Rabais, déductions et escomptes obtenus</div>
      </div>

      <H2>2. Principe de l'inventaire intermittent</H2>
      <P>L'inventaire intermittent est la méthode la plus simple. Elle implique que l'activité de l'entreprise soit peu complexe et que les dirigeants puissent renoncer à certaines informations en cours d'année (valeur du stock, marge brute, PRAMV). Ces indicateurs ne sont disponibles qu'au 31 décembre.</P>
      <P><strong>En cours d'année :</strong> toutes les factures d'achat sont enregistrées directement en charge dans le compte <strong>4000 Achats</strong>. Le compte 1200 n'est jamais touché.</P>
      <P><strong>Au 31 décembre :</strong> on effectue un comptage physique des marchandises en stock. On comptabilise ensuite la variation entre le stock initial et le stock final pour corriger les charges.</P>
      <Loi art="Art. 958c al. 2 CO">
        Le montant de chaque poste présenté dans le bilan est justifié par un inventaire ou d'une autre manière. La prise d'inventaire est réalisée sur le terrain et fait l'objet d'un rapport écrit qui sera joint aux comptes.
      </Loi>

      <H2>3. Les opérations courantes et leurs écritures</H2>

      <H3>Achat de marchandises (méthode postes ouverts)</H3>
      <Ecriture debit="4000 Achats" credit="2000 Fournisseurs" montant="350'000" libelle="Factures d'achats de l'année" />
      <Ecriture debit="2000 Fournisseurs" credit="1020 Banque" montant="350'000" libelle="Paiement des fournisseurs" sub />

      <H3>Frais d'achats et de transport</H3>
      <Ecriture debit="4700 Frais d'achats" credit="1020 Banque" montant="20'000" libelle="Frais de transport et manutention" />

      <H3>Retour de marchandises non conformes au fournisseur</H3>
      <Ecriture debit="2000 Fournisseurs" credit="4000 Achats" montant="10'000" libelle="Marchandises retournées — avoir fournisseur" />

      <H3>Ristourne annuelle accordée par le fournisseur (5% sur CHF 340'000)</H3>
      <Ecriture debit="2000 Fournisseurs" credit="4900 Déductions obtenues" montant="17'000" libelle="Ristourne de quantité annuelle" />

      <H3>Ventes de marchandises</H3>
      <Ecriture debit="1100 Clients" credit="3000 Ventes" montant="550'000" libelle="Ventes de l'année" />
      <Ecriture debit="1020 Banque" credit="1100 Clients" montant="550'000" libelle="Encaissement clients" sub />

      <H3>Retours clients et rabais accordés</H3>
      <Ecriture debit="3800 Déductions accordées" credit="1100 Clients" montant="2'000" libelle="Retours de clients insatisfaits" />
      <Ecriture debit="3800 Déductions accordées" credit="1100 Clients" montant="10'000" libelle="Rabais divers accordés aux clients" />

      <H3>Écriture de clôture au 31 décembre — variation de stock</H3>
      <P>Après comptage physique, on compare le stock final au stock initial et on passe une écriture corrective :</P>

      <Tableau
        headers={['Situation', 'Écriture', 'Effet sur le résultat']}
        rows={[
          { cells: ['Stock final > stock initial (hausse)', 'Débit 1200 / Crédit 4000 (ou 4800)', 'Réduit les charges — marchandises non vendues retirées du résultat'] },
          { cells: ['Stock final < stock initial (baisse)', 'Débit 4000 (ou 4800) / Crédit 1200', 'Augmente les charges — déstockage comptabilisé en charge supplémentaire'] },
        ]}
      />

      <Note color="blue">
        <strong>Dans notre exemple :</strong> stock initial CHF 42'000 → stock final CHF 12'000 → diminution de CHF 30'000<br />
        Écriture : <strong>Débit 4800 Variation de stocks CHF 30'000 / Crédit 1200 Stock CHF 30'000</strong>
      </Note>

      <H2>4. Exemple complet — Chocolaterie Onyme, exercice N</H2>
      <Note>
        <strong>Données :</strong> (a) Stock initial 01.01 : CHF 42'000 | (b) Achats annuels : CHF 350'000 | (c) Frais de transport : CHF 20'000 | (d) Retour fournisseur 03.09 : CHF 10'000 | (e) Ristourne 5% sur CHF 340'000 = CHF 17'000 | (f) Ventes annuelles : CHF 550'000 | (g) Retours clients : CHF 2'000 | (h) Rabais accordés : CHF 10'000 | (i) Stock final inventaire 31.12 : CHF 12'000
      </Note>

      <H3>Comptes en T au 31 décembre</H3>
      <GrilleT comptes={[
        {
          title: '1200 Stock', 
          debit: [{ label: '(a) Solde initial', amount: "42'000" }],
          credit: [{ label: '(i) Variation', amount: "30'000", hl: true }],
          totalD: "42'000", totalC: "42'000", solde: "12'000", soldeLabel: 'Solde final',
        },
        {
          title: '4000 Achats',
          debit: [{ label: '(b) Achats', amount: "350'000" }],
          credit: [{ label: '(d) Retour', amount: "10'000" }, { label: '(e) Ristourne', amount: "17'000" }],
          totalD: "350'000", totalC: "350'000", solde: "323'000", soldeLabel: 'Solde final',
        },
        {
          title: '4700 Frais d\'achats',
          debit: [{ label: '(c) Transport', amount: "20'000" }],
          credit: [],
          totalD: "20'000", totalC: '', solde: "20'000", soldeLabel: 'Solde final',
        },
        {
          title: '4800 Variation de stocks',
          debit: [{ label: '(i) Variation', amount: "30'000", hl: true }],
          credit: [],
          totalD: "30'000", totalC: '', solde: "30'000", soldeLabel: 'Solde final',
        },
      ]} />

      <GrilleT comptes={[
        {
          title: '3000 Ventes',
          debit: [{ label: '(g) Retours', amount: "2'000" }],
          credit: [{ label: '(f) Ventes', amount: "550'000" }],
          totalD: "550'000", totalC: "550'000", solde: "548'000", soldeLabel: 'Solde final',
        },
        {
          title: '3800 Déductions accordées',
          debit: [{ label: '(g) Retours', amount: "2'000" }, { label: '(h) Rabais', amount: "10'000" }],
          credit: [],
          totalD: "12'000", totalC: '', solde: "12'000", soldeLabel: 'Solde final',
        },
        {
          title: '4900 Déductions obtenues',
          debit: [],
          credit: [{ label: '(e) Ristourne', amount: "17'000" }],
          totalD: '', totalC: "17'000", solde: "17'000", soldeLabel: 'Solde final',
        },
      ]} />

      <H3>Compte de résultat — 1er niveau au 31.12.N</H3>
      <TableauResultat
        title="Compte de résultat — Chocolaterie Onyme au 31.12.N"
        rows={[
          ['3000 Ventes', '', '+ CHF 550\'000', false],
          ['3800 Déductions accordées (retours + rabais)', '', '− CHF 12\'000', false],
          ['Chiffre d\'affaires net (CAN)', '', 'CHF 538\'000', true],
          ['', '', '', false, true],
          ['4000 Achats bruts', '', '− CHF 350\'000', false],
          ['4000 Retour fournisseur (d)', 'crédit 4000', '+ CHF 10\'000', false],
          ['4900 Ristourne obtenue (e)', '', '+ CHF 17\'000', false],
          ['4700 Frais d\'achats (c)', '', '− CHF 20\'000', false],
          ['4800 Variation de stocks (i)', 'stock diminue → charge', '− CHF 30\'000', false],
          ['Prix de revient d\'achat des marchandises vendues (PRAMV)', '', '− CHF 373\'000', true],
          ['', '', '', false, true],
          ['MARGE BRUTE', '', 'CHF 165\'000', true],
        ]}
      />

      <Note color="green">
        <strong>Formule du PRAMV :</strong> Stock initial (42'000) + Achats nets (323'000) + Frais d'achats (20'000) + Variation de stock (30'000) = <strong>CHF 415'000</strong><br /><br />
        <strong>Attention :</strong> sans comptabiliser la variation de stock (CHF 30'000), la marge brute aurait été surévaluée de CHF 30'000 — soit CHF 195'000 au lieu de CHF 165'000. L'inventaire physique est indispensable pour un résultat correct.
      </Note>

      <H2>5. Points clés à retenir</H2>
      {[
        'En cours d\'année : tout achat → débit 4000. Le compte 1200 n\'est jamais touché.',
        'Au 31.12 : une seule écriture de variation de stock, basée sur le comptage physique.',
        'Stock qui baisse → charge : Débit 4800 / Crédit 1200.',
        'Stock qui monte → réduction de charge : Débit 1200 / Crédit 4800 (ou 4000).',
        'PRAMV = Stock initial + Achats nets + Frais d\'achats ± Variation de stock.',
        'L\'inventaire physique est une obligation légale (art. 958c al. 2 CO) — conserver le rapport signé.',
        'Les retours fournisseurs réduisent le compte 4000. Les ristournes vont en 4900.',
        'Les retours clients et rabais accordés vont en 3800 (déductions sur ventes).',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.84rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>→</span>
          <span>{pt}</span>
        </div>
      ))}
    </div>
  );
}

// ─── ONGLET 2 : INVENTAIRE PERMANENT ─────────────────────────────────────────
function TabPermanent() {
  const fifoLignes = [
    { op: 'Solde initial', solq: '300', solp: '10', solv: "3'000" },
    { op: 'Achat 1 (200u × 12)', eq: '200', ep: '12', ev: "2'400", solq: '500', solp: '10/12', solv: "5'400" },
    { op: 'Vente A — 1ère tranche', sq: '300', sp: '10', sv: "3'000", solq: '200', solp: '12', solv: "2'400", hl: true },
    { op: 'Vente A — 2ème tranche', sq: '100', sp: '12', sv: "1'200", solq: '100', solp: '12', solv: "1'200", hl: true },
    { op: 'Achat 2 (300u × 14)', eq: '300', ep: '14', ev: "4'200", solq: '400', solp: '12/14', solv: "5'400" },
    { op: 'Vente B — 1ère tranche', sq: '100', sp: '12', sv: "1'200", solq: '300', solp: '14', solv: "4'200", hl: true },
    { op: 'Vente B — 2ème tranche', sq: '100', sp: '14', sv: "1'400", solq: '200', solp: '14', solv: "2'800", hl: true },
    { op: 'Achat 3 (200u × 16)', eq: '200', ep: '16', ev: "3'200", solq: '400', solp: '14/16', solv: "6'000" },
    { op: 'Vente C', sq: '100', sp: '14', sv: "1'400", solq: '300', solp: '14/16', solv: "4'600", hl: true },
  ];

  const lifoLignes = [
    { op: 'Solde initial', solq: '300', solp: '10', solv: "3'000" },
    { op: 'Achat 1 (200u × 12)', eq: '200', ep: '12', ev: "2'400", solq: '500', solp: '10/12', solv: "5'400" },
    { op: 'Vente A — 1ère tranche', sq: '200', sp: '12', sv: "2'400", solq: '300', solp: '10', solv: "3'000", hl: true },
    { op: 'Vente A — 2ème tranche', sq: '200', sp: '10', sv: "2'000", solq: '100', solp: '10', solv: "1'000", hl: true },
    { op: 'Achat 2 (300u × 14)', eq: '300', ep: '14', ev: "4'200", solq: '400', solp: '10/14', solv: "5'200" },
    { op: 'Vente B', sq: '200', sp: '14', sv: "2'800", solq: '200', solp: '10/14', solv: "2'400", hl: true },
    { op: 'Achat 3 (200u × 16)', eq: '200', ep: '16', ev: "3'200", solq: '400', solp: '10/14/16', solv: "5'600" },
    { op: 'Vente C', sq: '100', sp: '16', sv: "1'600", solq: '300', solp: '10/14/16', solv: "4'000", hl: true },
  ];

  return (
    <div>
      <H2>1. Principe — mise à jour permanente du stock</H2>
      <P>Dans l'inventaire permanent, le compte <strong>1200 Stock</strong> est mis à jour après chaque mouvement de marchandises — achat ou vente. Le dirigeant connaît en temps réel la valeur du stock, le PRAMV et la marge brute, sans attendre la clôture annuelle.</P>
      <P>Tous les achats sont enregistrés directement dans le compte <strong>1200 Stock</strong> (pas dans 4000). Lors de chaque vente, le stock est réduit du coût d'achat du bien vendu, et la contrepartie va dans le compte <strong>4000 PRAMV</strong>.</P>

      <H2>2. Les deux écritures à chaque vente</H2>
      <P>C'est la caractéristique essentielle de l'inventaire permanent : chaque vente génère <strong>deux écritures simultanées</strong> :</P>

      <H3>Écriture 1 — enregistrer le produit au prix de vente</H3>
      <Ecriture debit="1100 Clients (ou 1020 Banque)" credit="3000 Ventes" montant="prix de vente" libelle="Chiffre d'affaires réalisé" />

      <H3>Écriture 2 — sortir le stock au coût d'achat</H3>
      <Ecriture debit="4000 PRAMV" credit="1200 Stock" montant="coût d'achat" libelle="Réduction du stock au prix d'achat" />

      <Note color="blue">
        <strong>La marge brute est la différence entre ces deux montants.</strong><br />
        Exemple : achat CHF 10 / vente CHF 20 → marge = CHF 10 par article.<br />
        Après chaque vente : <strong>3000 Ventes</strong> augmente de CHF 20 et <strong>4000 PRAMV</strong> augmente de CHF 10 → marge visible en temps réel.
      </Note>

      <P>En cas de retour client, les deux écritures sont inversées :</P>
      <Ecriture debit="3800 Déductions" credit="3000 Ventes" montant="prix de vente" libelle="Annulation du produit" />
      <Ecriture debit="1200 Stock" credit="4000 PRAMV" montant="coût d'achat" libelle="Remise en stock au coût d'achat" />

      <H2>3. Exemple complet — Magasin de chocolats avec codes-barres</H2>
      <P>Madame Onyme a investi dans un système de caisse avec codes-barres qui comptabilise automatiquement chaque vente. Le système met à jour en temps réel les comptes 1200, 3000, 3800 et 4000.</P>

      <Tableau
        headers={['Donnée', 'Valeur']}
        rows={[
          { cells: ['Prix de vente', 'CHF 20.00 par assortiment'] },
          { cells: ['Coût d\'achat', 'CHF 10.00 par assortiment'] },
          { cells: ['Stock initial (a)', '3\'000 assortiments × CHF 10 = CHF 30\'000'] },
          { cells: ['Ventes annuelles (b)', '28\'000 assortiments × CHF 20 = CHF 560\'000'] },
          { cells: ['Retours clients (c)', '100 assortiments'] },
          { cells: ['Rabais clients (d)', 'CHF 30\'000'] },
          { cells: ['Achats annuels (e)', '26\'000 assortiments × CHF 10 = CHF 260\'000'] },
          { cells: ['Inventaire physique 31.12 (f)', '1\'093 assortiments = CHF 10\'930'] },
        ]}
      />

      <H3>Comptes en T après toutes les opérations</H3>
      <GrilleT comptes={[
        {
          title: '1200 Stock de chocolats',
          debit: [{ label: '(a) Solde initial', amount: "30'000" }, { label: '(c) Retours clients', amount: "1'000" }, { label: '(e) Achats 26\'000u', amount: "260'000" }],
          credit: [{ label: '(b) Ventes 28\'000u', amount: "280'000" }, { label: 'Solde théorique', amount: "11'000", hl: true }],
          totalD: "291'000", totalC: "291'000",
        },
        {
          title: '4000 PRAMV',
          debit: [{ label: '(b) Ventes 28\'000u', amount: "280'000" }],
          credit: [{ label: '(c) Retours 100u', amount: "1'000" }],
          totalD: "280'000", totalC: "280'000", solde: "279'000", soldeLabel: 'Solde final',
        },
      ]} />

      <GrilleT comptes={[
        {
          title: '3000 Ventes',
          debit: [{ label: '(c) Retours 100u', amount: "2'000" }],
          credit: [{ label: '(b) Ventes 28\'000u', amount: "560'000" }],
          totalD: "560'000", totalC: "560'000", solde: "558'000", soldeLabel: 'Solde final',
        },
        {
          title: '3800 Déductions',
          debit: [{ label: '(c) Retours 100u', amount: "2'000" }, { label: '(d) Rabais', amount: "30'000" }],
          credit: [],
          totalD: "32'000", totalC: '', solde: "32'000", soldeLabel: 'Solde final',
        },
      ]} />

      <H3>Inventaire physique de contrôle au 31.12</H3>
      <P>Le compte 1200 indique un solde théorique de <strong>CHF 11'000</strong> (1'100 assortiments). Mais le comptage physique révèle seulement <strong>1'093 assortiments = CHF 10'930</strong>.</P>
      <P>Écart : CHF 70 soit 7 assortiments non enregistrés à la caisse — vols ou oublis. On passe l'écriture corrective :</P>
      <Ecriture debit="4886 Pertes/vols" credit="1200 Stock" montant="70" libelle="Ajustement inventaire — 7 assortiments manquants (vols ou erreurs de caisse)" />
      <Note>
        Même en inventaire permanent, le <strong>comptage physique annuel est obligatoire</strong> (art. 958c al. 2 CO). Les écarts révèlent des pertes, des erreurs de saisie ou des vols. Sans ce contrôle, le stock serait surévalué de CHF 70 au bilan.
      </Note>

      <H2>4. Les méthodes d'évaluation du stock</H2>
      <P>En inventaire permanent, chaque sortie de stock doit être valorisée au prix d'achat. Lorsque les prix varient d'une commande à l'autre, il faut choisir quelle valeur utiliser. Quatre méthodes sont reconnues :</P>

      <Tableau
        headers={['Méthode', 'Principe', 'Effet en période de hausse des prix']}
        rows={[
          { cells: ['FIFO — Premier entré, premier sorti', 'Les premiers achats stockés sont vendus en premier', 'PRAMV faible → résultat élevé → plus d\'impôts. Stock final valorisé aux prix récents (proche du marché).'] },
          { cells: ['LIFO — Dernier entré, premier sorti', 'Les derniers achats stockés sont vendus en premier', 'PRAMV élevé → résultat faible → avantage fiscal. Stock final sous-évalué → réserves latentes.'] },
          { cells: ['CMP — Coût moyen pondéré', 'Prix moyen de toutes les unités en stock à chaque sortie', 'Résultat intermédiaire. Méthode équilibrée, facile à automatiser.'] },
          { cells: ['HIFO — Plus cher entré, premier sorti', 'Les unités les plus chères sont vendues en premier', 'PRAMV maximum → résultat minimum → constitution maximale de réserves latentes.'] },
        ]}
      />

      <Loi art="Art. 958c al. 1 ch. 6 CO — Permanence des méthodes">
        La présentation et les méthodes d'évaluation doivent rester stables d'un exercice à l'autre. Tout changement de méthode doit être justifié et mentionné dans l'annexe aux comptes.
      </Loi>

      <H2>5. Exemple chiffré FIFO vs LIFO — tableaux complets</H2>
      <Note>
        <strong>Données :</strong> Stock initial 300 unités à CHF 10 | Achat 1 : 200 unités à CHF 12 | Achat 2 : 300 unités à CHF 14 | Achat 3 : 200 unités à CHF 16<br />
        Vente A : 400 unités | Vente B : 200 unités | Vente C : 100 unités | Prix de vente : CHF 20/unité<br />
        Les prix d'achat sont en hausse constante — c'est le contexte le plus révélateur pour comparer FIFO et LIFO.
      </Note>

      <TableauFIFO
        title="Compte 1200 Stock — Méthode FIFO (Premier entré, premier sorti)"
        color="#2563eb"
        lignes={fifoLignes}
        totalE={{ q: "1'000", p: '—', v: "12'800" }}
        totalS={{ q: '700', p: '—', v: "8'200" }}
        totalSol={{ q: '300', p: '—', v: "4'600" }}
      />
      <Note color="blue">
        <strong>Résultat FIFO :</strong> PRAMV = CHF 8'200 — Stock final = CHF 4'600 pour 300 unités.<br />
        Les premières unités achetées (les moins chères) sont vendues en premier → le PRAMV est plus faible → la marge brute est plus élevée.
      </Note>

      <TableauFIFO
        title="Compte 1200 Stock — Méthode LIFO (Dernier entré, premier sorti)"
        color="#059669"
        lignes={lifoLignes}
        totalE={{ q: "1'000", p: '—', v: "12'800" }}
        totalS={{ q: '700', p: '—', v: "8'800" }}
        totalSol={{ q: '300', p: '—', v: "4'000" }}
      />
      <Note color="green">
        <strong>Résultat LIFO :</strong> PRAMV = CHF 8'800 — Stock final = CHF 4'000 pour 300 unités.<br />
        Les dernières unités achetées (les plus chères) sont vendues en premier → le PRAMV est plus élevé → la marge brute est plus faible → moins d'impôts.
      </Note>

      <H3>Comparaison des résultats — impact sur le résultat</H3>
      <Tableau
        headers={['Critère', 'FIFO', 'LIFO', 'Différence']}
        rows={[
          { cells: ['PRAMV (charge)', "CHF 8'200", "CHF 8'800", "+ CHF 600 avec LIFO"] },
          { cells: ['Stock final', "CHF 4'600", "CHF 4'000", "− CHF 600 avec LIFO"] },
          { cells: ['Ventes (700 × CHF 20)', "CHF 14'000", "CHF 14'000", "—"] },
          { cells: ['Marge brute', "CHF 5'800", "CHF 5'200", "− CHF 600 avec LIFO"], _bold: true },
        ]}
      />

      <Note>
        Dans cet exemple, l'écart entre FIFO et LIFO est de <strong>CHF 600</strong>. Sur une PME avec des millions de francs de stock, cet écart peut représenter des dizaines de milliers de francs d'impôts. Le choix de la méthode est donc une décision de gestion fiscale importante — mais rappel : elle doit rester constante d'un exercice à l'autre.
      </Note>

      <H2>6. Comparaison des deux méthodes</H2>
      <Tableau
        headers={['Critère', 'Inventaire intermittent', 'Inventaire permanent']}
        rows={[
          { cells: ['Mise à jour du stock (1200)', 'Une fois par an — 31.12 uniquement', 'Après chaque mouvement (achat et vente)'] },
          { cells: ['Connaissance de la marge brute', 'Uniquement au 31.12', 'En temps réel après chaque vente'] },
          { cells: ['Valeur du stock en cours d\'année', 'Inconnue', 'Connue à tout moment'] },
          { cells: ['Détection des pertes et vols', 'Difficile — visible uniquement au 31.12', 'Possible par écart entre stock théorique et physique'] },
          { cells: ['Charge administrative', 'Faible — peu d\'écritures', 'Plus élevée — deux écritures par vente'] },
          { cells: ['Nécessite un système informatique', 'Non', 'Souvent oui (codes-barres, ERP)'] },
          { cells: ['Adapté pour', 'Petites structures, activité simple', 'PME avec logistique active, pilotage fin'] },
        ]}
      />

      <H2>7. Points clés à retenir</H2>
      {[
        'Chaque achat → débit 1200 Stock (pas 4000 comme en intermittent).',
        'Chaque vente → deux écritures : produit au prix de vente (crédit 3000) + sortie de stock au coût d\'achat (débit 4000 PRAMV / crédit 1200).',
        'Le comptage physique annuel reste obligatoire même en inventaire permanent (art. 958c al. 2 CO).',
        'Les écarts entre stock théorique et réel révèlent des pertes, erreurs ou vols → écriture 4886.',
        'FIFO → résultat plus élevé en période de hausse des prix → plus d\'impôts.',
        'LIFO → résultat plus faible → avantage fiscal → génère des réserves latentes.',
        'HIFO → résultat minimum → réserves latentes maximales.',
        'La méthode choisie doit rester constante d\'un exercice à l\'autre (art. 958c al. 1 ch. 6 CO).',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.84rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>→</span>
          <span>{pt}</span>
        </div>
      ))}
    </div>
  );
}

// ─── ONGLET 3 : ÉVALUATION & PROVISIONS ─────────────────────────────────────
function TabEvaluation() {
  return (
    <div>
      <H2>1. Principe du plus bas (Lower of Cost or Market)</H2>
      <P>L&apos;article 960a CO impose d&apos;évaluer les actifs circulants au plus bas entre le coût d&apos;acquisition et la valeur de marché (ou valeur de réalisation). Ce principe s&apos;applique directement aux stocks de marchandises.</P>
      <P>Concrètement, si le stock a coûté CHF 50&apos;000 à l&apos;achat mais ne vaut plus que CHF 42&apos;000 sur le marché au 31.12, il faut le déprécier à CHF 42&apos;000.</P>
      <Loi art="Art. 960a al. 3 CO">
        Les actifs circulants avec un cours boursier ou un prix de marché observable sont évalués à ce cours ou prix. Sinon au coût d&apos;acquisition ou de revient, si celui-ci est inférieur.
      </Loi>
      <Ecriture debit="4080 Dépréciation stock" credit="1200 Stock marchandises" montant="8'000" libelle="Dépréciation stock au 31.12 — valeur de marché inférieure au coût" />

      <H2>2. Provision pour stock obsolète</H2>
      <P>En plus de la dépréciation au prix du marché, l&apos;entreprise doit constituer une provision si elle détient des marchandises invendables, endommagées, ou dont la rotation est très lente.</P>
      <P>En pratique, beaucoup de fiduciaires appliquent un abattement forfaitaire de 1/3 sur le stock (méthode dite des 2/3). Le stock est ainsi comptabilisé à 2/3 de sa valeur réelle, ce qui constitue une réserve latente autorisée par le CO.</P>
      <Note color="yellow">
        La règle des 2/3 est tolérée fiscalement en Suisse. Elle est très courante dans les PME et constitue une réserve latente légale.
      </Note>
      <Tableau
        headers={['Méthode', 'Stock réel', 'Valeur comptable', 'Réserve latente']}
        rows={[
          { cells: ['Valeur intégrale', "CHF 60'000", "CHF 60'000", 'CHF 0'] },
          { cells: ['Règle des 2/3', "CHF 60'000", "CHF 40'000", "CHF 20'000"] },
          { cells: ['Dépréciation spécifique', "CHF 60'000", "CHF 48'000", "CHF 12'000"] },
        ]}
      />

      <H2>3. Travaux en cours et produits semi-finis</H2>
      <P>Pour les entreprises de production ou de services (bureau d&apos;ingénierie, architectes, etc.), il faut également évaluer les travaux en cours au 31.12.</P>
      <P>Les travaux en cours sont évalués au coût de production (matières + main-d&apos;œuvre directe + part des frais généraux). Ils sont comptabilisés à l&apos;actif au compte 1270 (Travaux en cours).</P>
      <Ecriture debit="1270 Travaux en cours" credit="4900 Variation travaux en cours" montant="xxx" libelle="Activation des travaux en cours au 31.12" />
      <Note color="blue">
        La variation des travaux en cours est un produit (crédit 4900) qui compense les charges engagées durant l&apos;exercice pour des projets non encore facturés.
      </Note>

      <H2>4. Démarque connue et inconnue</H2>
      <P>La démarque connue comprend les marchandises identifiées comme perdues, volées ou endommagées. La démarque inconnue est la différence entre le stock théorique et le stock réel constaté lors de l&apos;inventaire physique.</P>
      <P>Les deux types de démarque augmentent le coût des marchandises vendues et réduisent le résultat.</P>
      <Ecriture debit="4000 Charges marchandises" credit="1200 Stock" montant="xxx" libelle="Constatation de la démarque (écart d'inventaire)" />
    </div>
  );
}

// ─── VUE PRINCIPALE ───────────────────────────────────────────────────────────
const TABS = [
  { id: 'intermittent', label: 'Inventaire intermittent' },
  { id: 'permanent', label: 'Inventaire permanent & méthodes FIFO/LIFO' },
  { id: 'evaluation', label: 'Évaluation & provisions' },
];

export default function MarchandisesView() {
  const [tab, setTab] = useState('intermittent');
  return (
    <TheoryLayout
      title="5. Stocks et marchandises"
      tag="tag-base"
      tagLabel="Fondements"
      meta="CO 958c · SKV/swisco"
      tabs={TABS}
      activeTab={tab}
      onTabChange={setTab}
    >
      {tab === 'intermittent' && <TabIntermittent />}
      {tab === 'permanent' && <TabPermanent />}
      {tab === 'evaluation' && <TabEvaluation />}
    </TheoryLayout>
  );
}