import React, { useState } from 'react';

// Données inline pour éviter tout problème d'import
const FICHES = [
  {
    id: 'arret-01',
    label: 'IJM → employeur',
    title: 'Arrêt maladie — IJM assurance collective (indemnité à l\'employeur)',
    situation: `Théo Keller, salaire brut CHF 6'000/mois, est en arrêt maladie 16 jours sur 21.
L'entreprise a une assurance IJM collective (taux 80%).
L'assureur verse l'indemnité à l'EMPLOYEUR, qui maintient le salaire net complet.
Cotisations calculées uniquement sur la part à charge de l'employeur (brut − IJM).`,
    calculs: [
      { label: "Salaire brut mensuel", montant: "CHF 6'000.00", type: 'brut' },
      { label: "Indemnité IJM (80% × 6'000 × 16/21)", montant: "CHF 3'657.14", type: 'indemnite', detail: "Versée par l'assureur à l'employeur — comptabilisée en crédit 5005" },
      { label: "Part à charge de l'employeur", montant: "CHF 2'342.86", type: 'key', detail: "6'000 − 3'657.14 — base de calcul des cotisations" },
      { label: "Cotisations sur part employeur (~13.5%)", montant: "CHF 316.29", type: 'deduction', detail: "Calculées sur CHF 2'342.86 uniquement, pas sur le brut total" },
      { label: "Salaire net versé à Théo Keller", montant: "CHF 5'683.71", type: 'net' },
    ],
    points: [
      "L'employé reçoit son salaire net habituel — aucune perte pour lui",
      "L'employeur récupère CHF 3'657.14 auprès de l'assureur IJM",
      "Cotisations sur la part à charge uniquement (CHF 2'342.86), pas sur les 6'000",
      "L'indemnité IJM créditée au compte 5005 (diminution charges personnel)",
    ],
    ecritures: [
      {
        titre: "Étape 1 — Salaire brut + déductions (cotisations sur part employeur)",
        explication: "On comptabilise le brut en 5000, mais les cotisations sont calculées sur la part nette employeur.",
        lignes: [
          { debit: '5000', debitL: 'Salaires', credit: '2270', creditL: 'Charges sociales à payer', debitM: "6'000.00", creditM: '316.29', libelle: "Salaire brut Keller — cotisations sur part employeur" },
          { debit: null, credit: '2160', creditL: 'Salaires à payer', debitM: null, creditM: "5'683.71", libelle: "Net à payer Keller", sub: true },
        ],
      },
      {
        titre: "Étape 2 — Indemnité IJM à recevoir de l'assureur",
        explication: "La créance sur l'assureur est comptabilisée en actif transitoire (1180). Le crédit 5005 réduit les charges de personnel.",
        lignes: [
          { debit: '1180', debitL: 'Actifs transitoires', credit: '5005', creditL: 'Indemnités reçues (IJM/LAA)', debitM: "3'657.14", creditM: "3'657.14", libelle: "Indemnité IJM à recevoir — assureur" },
        ],
      },
      {
        titre: "Étape 3 — Encaissement indemnité IJM",
        lignes: [
          { debit: '1020', debitL: 'Banque', credit: '1180', creditL: 'Actifs transitoires', debitM: "3'657.14", creditM: "3'657.14", libelle: "Encaissement IJM — virement assureur" },
        ],
      },
      {
        titre: "Étape 4 — Versements",
        lignes: [
          { debit: '2160', debitL: 'Salaires à payer', credit: '1020', creditL: 'Banque', debitM: "5'683.71", creditM: "5'683.71", libelle: "Virement salaire net Keller" },
          { debit: '2270', debitL: 'Charges sociales à payer', credit: '1020', creditL: 'Banque', debitM: '632.58', creditM: '632.58', libelle: "Versement caisses sociales" },
        ],
      },
    ],
  },
  {
    id: 'arret-02',
    label: 'Sans assurance (CO 324a)',
    title: 'Arrêt maladie — sans assurance IJM (maintien légal CO 324a)',
    situation: `Léa Meyer, salaire brut CHF 4'500/mois, est en arrêt maladie 10 jours.
L'entreprise n'a PAS d'assurance IJM collective.
Obligation légale CO 324a : l'employeur maintient le salaire selon l'ancienneté.
L'entreprise supporte l'intégralité du coût — aucune indemnité d'assureur.
Cotisations calculées sur le salaire brut maintenu complet.`,
    calculs: [
      { label: "Salaire brut maintenu", montant: "CHF 4'500.00", type: 'brut' },
      { label: "Indemnité assureur", montant: "CHF 0.00", type: 'indemnite', detail: "Aucune assurance — l'employeur supporte tout" },
      { label: "Part à charge de l'employeur", montant: "CHF 4'500.00", type: 'key', detail: "100% à charge selon CO 324a" },
      { label: "Cotisations employé (~13.5%)", montant: "CHF 607.50", type: 'deduction' },
      { label: "Salaire net versé à Léa Meyer", montant: "CHF 3'892.50", type: 'net' },
    ],
    points: [
      "Sans assurance IJM, l'employeur supporte 100% du coût pendant la durée légale",
      "Durée selon CO 324a et ancienneté (échelle bernoise ou zurichoise)",
      "Cotisations sur le brut maintenu complet — pas de déduction IJM",
      "Comptabilisation standard — pas de compte 5005 ni 1180",
    ],
    ecritures: [
      {
        titre: "Étape 1 — Salaire maintenu CO 324a (comptabilisation standard)",
        explication: "Aucune particularité — l'employeur supporte l'intégralité. Comptabilisation identique à un mois normal.",
        lignes: [
          { debit: '5000', debitL: 'Salaires', credit: '2270', creditL: 'Charges sociales à payer', debitM: "4'500.00", creditM: '607.50', libelle: "Salaire brut Léa Meyer — CO 324a" },
          { debit: null, credit: '2160', creditL: 'Salaires à payer', debitM: null, creditM: "3'892.50", libelle: "Net à payer Léa Meyer", sub: true },
        ],
      },
      {
        titre: "Étape 2 — Charges patronales",
        lignes: [
          { debit: '5700', debitL: 'Charges soc. patronales', credit: '2270', creditL: 'Charges sociales à payer', debitM: '607.50', creditM: '607.50', libelle: "Charges patronales Léa Meyer" },
        ],
      },
      {
        titre: "Étape 3 — Versements",
        lignes: [
          { debit: '2160', debitL: 'Salaires à payer', credit: '1020', creditL: 'Banque', debitM: "3'892.50", creditM: "3'892.50", libelle: "Virement salaire net Léa Meyer" },
          { debit: '2270', debitL: 'Charges sociales à payer', credit: '1020', creditL: 'Banque', debitM: "1'215.00", creditM: "1'215.00", libelle: "Versement caisses sociales" },
        ],
      },
    ],
  },
  {
    id: 'arret-03',
    label: 'IJM → employé direct',
    title: 'Arrêt maladie — IJM versée directement à l\'employé (salaire réduit)',
    situation: `Théo Keller, salaire brut CHF 6'000/mois, arrêt 16 jours sur 21.
L'assureur IJM verse l'indemnité (80%) DIRECTEMENT à Théo Keller.
L'employeur verse uniquement la part complémentaire (20% de la période d'arrêt + jours travaillés).
Part présence (5/21) : CHF 1'428.57
Complément 20% (16/21) : CHF 914.29
Total à charge employeur : CHF 2'342.86
Cotisations sur CHF 2'342.86 uniquement.`,
    calculs: [
      { label: "Salaire brut mensuel", montant: "CHF 6'000.00", type: 'brut' },
      { label: "Part présence (5/21)", montant: "CHF 1'428.57", type: 'info', detail: "6'000 × 5/21 — jours effectivement travaillés" },
      { label: "Complément employeur 20% arrêt (16/21)", montant: "CHF 914.29", type: 'info', detail: "6'000 × 20% × 16/21" },
      { label: "Total à charge employeur", montant: "CHF 2'342.86", type: 'key', detail: "Base de calcul des cotisations" },
      { label: "IJM 80% — versée directement à Théo Keller par assureur", montant: "CHF 3'657.14", type: 'indemnite', detail: "L'employeur ne comptabilise PAS cette indemnité" },
      { label: "Cotisations sur part employeur (~13.5%)", montant: "CHF 316.29", type: 'deduction' },
      { label: "Net versé par l'employeur à Théo Keller", montant: "CHF 2'026.57", type: 'net', detail: "L'employé reçoit en plus les CHF 3'657.14 de l'assureur directement" },
    ],
    points: [
      "L'assureur verse DIRECTEMENT à l'employé → l'employeur ne comptabilise pas l'indemnité",
      "L'employeur verse uniquement : présence + complément 20% = CHF 2'342.86",
      "Pas de compte 1180 ni 5005 — la transaction IJM est hors comptabilité employeur",
      "Différent du cas 1 où l'employeur reçoit l'indemnité et la comptabilise",
    ],
    ecritures: [
      {
        titre: "Étape 1 — Salaire à charge de l'employeur uniquement",
        explication: "On comptabilise uniquement la part que l'employeur verse. L'IJM allant directement à l'employé, elle n'apparaît pas dans les livres de l'entreprise.",
        lignes: [
          { debit: '5000', debitL: 'Salaires', credit: '2270', creditL: 'Charges sociales à payer', debitM: "2'342.86", creditM: '316.29', libelle: "Salaire Théo Keller — part employeur" },
          { debit: null, credit: '2160', creditL: 'Salaires à payer', debitM: null, creditM: "2'026.57", libelle: "Net à payer Théo Keller", sub: true },
        ],
      },
      {
        titre: "Étape 2 — Charges patronales sur part employeur",
        lignes: [
          { debit: '5700', debitL: 'Charges soc. patronales', credit: '2270', creditL: 'Charges sociales à payer', debitM: '316.29', creditM: '316.29', libelle: "Charges patronales Théo Keller (sur 2'342.86)" },
        ],
      },
      {
        titre: "Étape 3 — Versements",
        lignes: [
          { debit: '2160', debitL: 'Salaires à payer', credit: '1020', creditL: 'Banque', debitM: "2'026.57", creditM: "2'026.57", libelle: "Virement part employeur Théo Keller" },
          { debit: '2270', debitL: 'Charges sociales à payer', credit: '1020', creditL: 'Banque', debitM: '632.58', creditM: '632.58', libelle: "Versement caisses sociales" },
        ],
      },
    ],
  },
  {
    id: 'arret-04',
    label: 'Accident LAA / SUVA',
    title: 'Accident professionnel — Indemnités journalières SUVA (LAA)',
    situation: `Lucas Morel, salaire brut CHF 5'800/mois, accident professionnel le 05.03.
Arrêt du 05.03 au 31.03 — 19 jours d'arrêt sur 21 jours ouvrables.
SUVA : verse 80% dès le 3e jour d'arrêt (jours 1 et 2 à charge de l'employeur).
Jours à charge employeur : 2 jours (carence).
Jours SUVA : 17 jours — indemnité versée à l'EMPLOYEUR.
Cotisations sur la part à charge de l'employeur uniquement.`,
    calculs: [
      { label: "Salaire brut mensuel", montant: "CHF 5'800.00", type: 'brut' },
      { label: "Part employeur — 2 jours carence (2/21)", montant: "CHF 1'104.76", type: 'info', detail: "5'800 × 2/21 — jours à charge avant couverture SUVA" },
      { label: "Indemnité SUVA (80% × 5'800 × 17/21)", montant: "CHF 3'761.90", type: 'indemnite', detail: "Versée par la SUVA à l'employeur — compte 5005" },
      { label: "Total à charge employeur nette", montant: "CHF 1'104.76", type: 'key', detail: "Base cotisations — la SUVA couvre le reste" },
      { label: "Cotisations sur part employeur (~13.5%)", montant: "CHF 149.14", type: 'deduction', detail: "Sur CHF 1'104.76 uniquement — pas sur les 5'800" },
      { label: "Salaire net versé à Lucas Morel", montant: "CHF 5'650.86", type: 'net' },
    ],
    points: [
      "Les 2 PREMIERS JOURS d'arrêt sont toujours à charge de l'employeur (délai de carence SUVA)",
      "Dès le 3e jour : SUVA verse 80% du salaire assuré (plafonné à CHF 148'200/an)",
      "Indemnité SUVA versée à l'employeur → crédit compte 5005 (comme IJM)",
      "Cotisations AVS/AC : calculées sur la part employeur uniquement (CHF 1'104.76)",
      "Accident NON professionnel : LAANP couvre, délai carence 1 jour",
    ],
    ecritures: [
      {
        titre: "Étape 1 — Salaire maintenu + cotisations sur part employeur",
        explication: "L'employeur maintient le salaire complet. Cotisations sur la part à sa charge uniquement (CHF 1'104.76).",
        lignes: [
          { debit: '5000', debitL: 'Salaires', credit: '2270', creditL: 'Charges sociales à payer', debitM: "5'800.00", creditM: '149.14', libelle: "Salaire Lucas Morel maintenu" },
          { debit: null, credit: '2160', creditL: 'Salaires à payer', debitM: null, creditM: "5'650.86", libelle: "Net à payer Lucas Morel", sub: true },
        ],
      },
      {
        titre: "Étape 2 — Indemnité SUVA à recevoir",
        explication: "Créance sur la SUVA comptabilisée en actif transitoire. Le crédit 5005 réduit les charges de personnel.",
        lignes: [
          { debit: '1180', debitL: 'Actifs transitoires', credit: '5005', creditL: 'Indemnités reçues (IJM/LAA)', debitM: "3'761.90", creditM: "3'761.90", libelle: "Indemnité SUVA à recevoir (80% × 17 jours)" },
        ],
      },
      {
        titre: "Étape 3 — Encaissement indemnité SUVA",
        lignes: [
          { debit: '1020', debitL: 'Banque', credit: '1180', creditL: 'Actifs transitoires', debitM: "3'761.90", creditM: "3'761.90", libelle: "Encaissement SUVA — virement" },
        ],
      },
      {
        titre: "Étape 4 — Versements",
        lignes: [
          { debit: '2160', debitL: 'Salaires à payer', credit: '1020', creditL: 'Banque', debitM: "5'650.86", creditM: "5'650.86", libelle: "Virement salaire net Lucas Morel" },
          { debit: '2270', debitL: 'Charges sociales à payer', credit: '1020', creditL: 'Banque', debitM: '298.28', creditM: '298.28', libelle: "Versement caisses sociales" },
        ],
      },
    ],
  },
];

function TableauEcritures({ lignes }) {
  return (
    <div style={{ border: '1px solid #dde2ea', borderRadius: 7, overflow: 'hidden', marginTop: 10 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
        <thead>
          <tr style={{ background: '#2c5f8a' }}>
            <th style={{ padding: '7px 10px', color: '#fff', textAlign: 'left', fontSize: '0.67rem', fontWeight: 600, textTransform: 'uppercase', width: '20%' }}>Débit</th>
            <th style={{ padding: '7px 10px', color: '#fff', textAlign: 'left', fontSize: '0.67rem', fontWeight: 600, textTransform: 'uppercase', width: '20%' }}>Crédit</th>
            <th style={{ padding: '7px 10px', color: '#fff', textAlign: 'left', fontSize: '0.67rem', fontWeight: 600, textTransform: 'uppercase' }}>Libellé</th>
            <th style={{ padding: '7px 10px', color: '#fff', textAlign: 'right', fontSize: '0.67rem', fontWeight: 600, width: '12%' }}>Débit CHF</th>
            <th style={{ padding: '7px 10px', color: '#fff', textAlign: 'right', fontSize: '0.67rem', fontWeight: 600, width: '12%' }}>Crédit CHF</th>
          </tr>
        </thead>
        <tbody>
          {lignes.map((l, i) => (
            <tr key={i} style={{ background: l.sub ? '#fafbfd' : '#fff' }}>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #dde2ea', paddingLeft: l.sub ? 20 : 10 }}>
                {l.debit ? <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#2c5f8a', fontWeight: 700 }}>{l.debit} <span style={{ color: '#718096', fontWeight: 400, fontSize: '0.7rem' }}>{l.debitL}</span></span> : <span style={{ color: '#ccc' }}>—</span>}
              </td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #dde2ea' }}>
                {l.credit ? <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#1a7a4a', fontWeight: 700 }}>{l.credit} <span style={{ color: '#718096', fontWeight: 400, fontSize: '0.7rem' }}>{l.creditL}</span></span> : ''}
              </td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #dde2ea', color: '#718096', fontStyle: 'italic', fontSize: '0.77rem' }}>{l.libelle}</td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #dde2ea', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, color: '#2c5f8a' }}>{l.debitM || '—'}</td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #dde2ea', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, color: '#1a7a4a' }}>{l.creditM || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Etape({ e, i }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div style={{ border: '1px solid #dde2ea', borderRadius: 7, marginBottom: 8, overflow: 'hidden' }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 9, padding: '9px 14px', background: open ? '#2c5f8a' : '#fff', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ width: 20, height: 20, borderRadius: '50%', background: open ? 'rgba(255,255,255,0.2)' : '#2c5f8a', color: '#fff', fontSize: '0.68rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
        <span style={{ flex: 1, fontWeight: 700, fontSize: '0.82rem', color: open ? '#fff' : '#1a2332' }}>{e.titre}</span>
        <span style={{ color: open ? 'rgba(255,255,255,0.5)' : '#a0aec0', fontSize: '0.65rem', transform: open ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>▼</span>
      </button>
      {open && (
        <div style={{ padding: '12px 14px', borderTop: '1px solid #dde2ea' }}>
          {e.explication && (
            <div style={{ background: '#e8f0f8', borderRadius: 5, padding: '8px 12px', fontSize: '0.79rem', color: '#4a5568', lineHeight: 1.6, marginBottom: 10 }}>
              💡 {e.explication}
            </div>
          )}
          <TableauEcritures lignes={e.lignes} />
        </div>
      )}
    </div>
  );
}

export default function ArretsMaladieView() {
  const [activeId, setActiveId] = useState('arret-01');
  const [showEcritures, setShowEcritures] = useState(false);
  const fiche = FICHES.find(f => f.id === activeId) || FICHES[0];

  const typeStyle = {
    brut:      { bg: '#f0f3f7', color: '#1a2332', fw: 700 },
    indemnite: { bg: '#e6f4ed', color: '#1a7a4a', fw: 600 },
    key:       { bg: '#e8f0f8', color: '#2c5f8a', fw: 700 },
    deduction: { bg: '#fdf0ee', color: '#c0392b', fw: 500 },
    net:       { bg: '#e8f0f8', color: '#1e4a6e', fw: 700 },
    info:      { bg: '#fff',    color: '#4a5568', fw: 400 },
  };

  return (
    <>
      <div className="topbar">
        <h2>Arrêts maladie & accident — 4 scénarios</h2>
        <div className="topbar-right">
          <span className="tag tag-salaires">Salaires</span>
          <span className="topbar-meta">CO 324a · LAA · IJM · SUVA</span>
        </div>
      </div>

      <div className="content" style={{ maxWidth: 900 }}>

        {/* Sélecteur */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
          {FICHES.map(f => (
            <button key={f.id} onClick={() => { setActiveId(f.id); setShowEcritures(false); }}
              style={{ padding: '7px 14px', borderRadius: 20, fontSize: '0.78rem', fontWeight: 600, border: `1px solid ${activeId === f.id ? '#2c5f8a' : '#dde2ea'}`, background: activeId === f.id ? '#2c5f8a' : '#fff', color: activeId === f.id ? '#fff' : '#4a5568', cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.12s' }}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Situation */}
        <div style={{ background: '#f0f3f7', border: '1px solid #dde2ea', borderRadius: 7, padding: '12px 16px', marginBottom: 16, fontSize: '0.81rem', color: '#4a5568', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
          <strong style={{ color: '#1a2332', display: 'block', marginBottom: 5, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>📋 Situation</strong>
          {fiche.situation}
        </div>

        {/* Tableau calculs */}
        <div style={{ border: '2px solid #2c5f8a', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}>
          <div style={{ background: '#2c5f8a', padding: '11px 16px', color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>{fiche.title}</div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f0f3f7' }}>
                <th style={{ padding: '6px 14px', textAlign: 'left', fontSize: '0.67rem', color: '#718096', fontWeight: 600, textTransform: 'uppercase' }}>Élément</th>
                <th style={{ padding: '6px 14px', textAlign: 'right', fontSize: '0.67rem', color: '#718096', fontWeight: 600, textTransform: 'uppercase', width: '22%' }}>Montant CHF</th>
              </tr>
            </thead>
            <tbody>
              {fiche.calculs.map((row, i) => {
                const s = typeStyle[row.type] || typeStyle.info;
                return (
                  <tr key={i} style={{ background: s.bg }}>
                    <td style={{ padding: '8px 14px', fontSize: '0.83rem', fontWeight: s.fw, color: '#4a5568', borderBottom: '1px solid #dde2ea' }}>
                      {row.label}
                      {row.detail && <div style={{ fontSize: '0.74rem', color: '#718096', fontWeight: 400, marginTop: 2 }}>ℹ️ {row.detail}</div>}
                    </td>
                    <td style={{ padding: '8px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.86rem', fontWeight: s.fw, color: s.color, textAlign: 'right', borderBottom: '1px solid #dde2ea' }}>
                      {row.montant}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Points clés */}
        <div style={{ background: '#fffbf0', border: '1px solid #f0d98a', borderRadius: 7, padding: '12px 16px', marginBottom: 16 }}>
          <strong style={{ display: 'block', marginBottom: 8, fontSize: '0.78rem', color: '#7a5c00' }}>⚠️ Points clés</strong>
          {fiche.points.map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 5, fontSize: '0.8rem', color: '#7a5c00', lineHeight: 1.5 }}>
              <span style={{ flexShrink: 0 }}>•</span><span>{p}</span>
            </div>
          ))}
        </div>

        {/* Écritures */}
        <button onClick={() => setShowEcritures(s => !s)}
          style={{ padding: '8px 16px', borderRadius: 5, border: 'none', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600, fontFamily: 'Inter, sans-serif', background: '#2c5f8a', color: '#fff', marginBottom: 14 }}>
          {showEcritures ? '▲ Masquer les écritures' : '▼ Voir les écritures comptables'}
        </button>

        {showEcritures && (
          <div>
            <p style={{ fontSize: '0.79rem', color: '#718096', fontStyle: 'italic', marginBottom: 12 }}>Cliquez sur chaque étape pour afficher les écritures.</p>
            {fiche.ecritures.map((e, i) => <Etape key={i} e={e} i={i} />)}
          </div>
        )}

      </div>
    </>
  );
}