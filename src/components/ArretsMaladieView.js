import React, { useState } from 'react';
import { Lightbulb, ClipboardList, Info, AlertTriangle } from 'lucide-react';

// Base de calcul : 30 jours calendriers (weekends inclus) — pratique standard suisse

const FICHES = [
  {
    id: 'arret-01',
    label: 'IJM → employeur',
    title: "Arrêt maladie — IJM assurance collective (indemnité à l'employeur)",
    situation: "Noah Renard, salaire brut CHF 6'000/mois, est en arrêt maladie 20 jours calendriers sur 30.\nL'entreprise a une assurance IJM collective (taux 80%).\nL'assureur verse l'indemnité à l'EMPLOYEUR, qui maintient le salaire net complet.\nCotisations calculées sur la part à charge de l'employeur (brut − IJM).",
    calculs: [
      { label: "Salaire brut mensuel (base 30 jours)", montant: "CHF 6'000.00", type: 'brut' },
      { label: "Indemnité IJM (80% × 6'000 × 20/30)", montant: "CHF 3'200.00", type: 'indemnite', detail: "6'000 × 80% × 20/30 = CHF 3'200 — versée par l'assureur à l'employeur" },
      { label: "Part à charge de l'employeur", montant: "CHF 2'800.00", type: 'key', detail: "6'000 − 3'200 = CHF 2'800 — base de calcul des cotisations" },
      { label: "Cotisations sur part employeur (~13.5%)", montant: "CHF 378.00", type: 'deduction', detail: "Calculées sur CHF 2'800 uniquement, pas sur les 6'000" },
      { label: "Salaire net versé à Noah Renard", montant: "CHF 5'622.00", type: 'net' },
    ],
    points: [
      "Calcul sur 30 jours calendriers (weekends inclus) — pratique standard suisse",
      "L'employé reçoit son salaire net habituel — aucune perte pour lui",
      "L'employeur récupère CHF 3'200 auprès de l'assureur IJM",
      "Cotisations sur la part à charge uniquement (CHF 2'800), pas sur les 6'000",
      "Indemnité IJM créditée au compte 5005 — diminution des charges de personnel",
    ],
    ecritures: [
      {
        titre: "Étape 1 — Salaire brut + cotisations sur part employeur",
        explication: "Cotisations calculées sur la part nette employeur (CHF 2'800), pas sur le brut total.",
        lignes: [
          { debit: '5000', debitL: 'Salaires', credit: '2270', creditL: 'Charges sociales à payer', debitM: "6'000.00", creditM: "378.00", libelle: "Salaire brut Renard — cotisations sur part employeur" },
          { debit: null, credit: '2160', creditL: 'Salaires à payer', debitM: null, creditM: "5'622.00", libelle: "Net à payer Renard", sub: true },
        ],
      },
      {
        titre: "Étape 2 — Indemnité IJM à recevoir",
        explication: "Créance sur l'assureur en actif transitoire (1180). Crédit 5005 réduit les charges de personnel.",
        lignes: [
          { debit: '1180', debitL: 'Actifs transitoires', credit: '5005', creditL: 'Indemnités reçues (IJM/LAA)', debitM: "3'200.00", creditM: "3'200.00", libelle: "Indemnité IJM à recevoir — assureur" },
        ],
      },
      {
        titre: "Étape 3 — Encaissement IJM",
        lignes: [
          { debit: '1020', debitL: 'Banque', credit: '1180', creditL: 'Actifs transitoires', debitM: "3'200.00", creditM: "3'200.00", libelle: "Encaissement IJM — virement assureur" },
        ],
      },
      {
        titre: "Étape 4 — Versements",
        lignes: [
          { debit: '2160', debitL: 'Salaires à payer', credit: '1020', creditL: 'Banque', debitM: "5'622.00", creditM: "5'622.00", libelle: "Virement salaire net Renard" },
          { debit: '2270', debitL: 'Charges sociales à payer', credit: '1020', creditL: 'Banque', debitM: "756.00", creditM: "756.00", libelle: "Versement caisses sociales" },
        ],
      },
    ],
  },

  {
    id: 'arret-02',
    label: 'Sans assurance (CO 324a)',
    title: "Arrêt maladie — sans assurance IJM (maintien légal CO 324a)",
    situation: "Léa Meyer, salaire brut CHF 4'500/mois, est en arrêt maladie 10 jours calendriers sur 30.\nL'entreprise n'a PAS d'assurance IJM collective.\nObligation légale CO 324a : l'employeur maintient le salaire selon l'ancienneté.\nL'entreprise supporte l'intégralité du coût — aucune indemnité d'assureur.\nCotisations calculées sur le salaire brut maintenu complet.",
    calculs: [
      { label: "Salaire brut maintenu (base 30 jours)", montant: "CHF 4'500.00", type: 'brut' },
      { label: "Indemnité assureur", montant: "CHF 0.00", type: 'indemnite', detail: "Aucune assurance IJM — l'employeur supporte 100%" },
      { label: "Part à charge de l'employeur", montant: "CHF 4'500.00", type: 'key', detail: "Totalité à charge selon CO 324a" },
      { label: "Cotisations employé (~13.5%)", montant: "CHF 607.50", type: 'deduction', detail: "Sur le brut maintenu complet" },
      { label: "Salaire net versé à Léa Meyer", montant: "CHF 3'892.50", type: 'net' },
    ],
    points: [
      "Calcul sur 30 jours calendriers — même base que pour l'IJM",
      "Sans assurance IJM, l'employeur supporte 100% pendant la durée légale",
      "Durée selon CO 324a et ancienneté (échelle bernoise ou zurichoise)",
      "Cotisations sur le brut maintenu complet — pas de déduction IJM",
      "Comptabilisation standard — pas de compte 5005 ni 1180",
    ],
    ecritures: [
      {
        titre: "Étape 1 — Salaire maintenu CO 324a",
        explication: "Aucune particularité — l'employeur supporte tout. Comptabilisation identique à un mois normal.",
        lignes: [
          { debit: '5000', debitL: 'Salaires', credit: '2270', creditL: 'Charges sociales à payer', debitM: "4'500.00", creditM: "607.50", libelle: "Salaire brut Léa Meyer — CO 324a" },
          { debit: null, credit: '2160', creditL: 'Salaires à payer', debitM: null, creditM: "3'892.50", libelle: "Net à payer Léa Meyer", sub: true },
        ],
      },
      {
        titre: "Étape 2 — Charges patronales",
        lignes: [
          { debit: '5700', debitL: 'Charges soc. patronales', credit: '2270', creditL: 'Charges sociales à payer', debitM: "607.50", creditM: "607.50", libelle: "Charges patronales Léa Meyer" },
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
    title: "Arrêt maladie — IJM versée directement à l'employé (salaire réduit)",
    situation: "Théo Keller, salaire brut CHF 6'000/mois, arrêt 20 jours calendriers sur 30.\nL'assureur IJM verse l'indemnité (80%) DIRECTEMENT à Théo Keller.\nL'employeur verse uniquement : part présence + complément 20% de la période d'arrêt.\nPart présence (10/30) : CHF 2'000.00\nComplément 20% arrêt (20/30) : CHF 800.00\nTotal à charge employeur : CHF 2'800.00\nCotisations sur CHF 2'800 uniquement.",
    calculs: [
      { label: "Salaire brut mensuel (base 30 jours)", montant: "CHF 6'000.00", type: 'brut' },
      { label: "Part présence (10/30)", montant: "CHF 2'000.00", type: 'info', detail: "6'000 × 10/30 — jours effectivement travaillés" },
      { label: "Complément employeur 20% arrêt (20/30)", montant: "CHF 800.00", type: 'info', detail: "6'000 × 20% × 20/30" },
      { label: "Total à charge employeur", montant: "CHF 2'800.00", type: 'key', detail: "Base de calcul des cotisations" },
      { label: "IJM 80% — versée directement à Théo Keller par assureur", montant: "CHF 3'200.00", type: 'indemnite', detail: "L'employeur ne comptabilise PAS cette indemnité" },
      { label: "Cotisations sur part employeur (~13.5%)", montant: "CHF 378.00", type: 'deduction' },
      { label: "Net versé par l'employeur à Théo Keller", montant: "CHF 2'422.00", type: 'net', detail: "L'employé reçoit en plus les CHF 3'200 de l'assureur directement" },
    ],
    points: [
      "L'assureur verse DIRECTEMENT à l'employé — l'employeur ne comptabilise pas l'indemnité",
      "L'employeur verse uniquement présence + complément 20% = CHF 2'800",
      "Pas de compte 1180 ni 5005 — la transaction IJM est hors comptabilité employeur",
      "Cotisations sur CHF 2'800 uniquement (pas sur les 6'000)",
      "Différent du cas 1 où l'employeur reçoit l'indemnité et la comptabilise",
    ],
    ecritures: [
      {
        titre: "Étape 1 — Salaire à charge de l'employeur uniquement",
        explication: "On comptabilise uniquement la part que l'employeur verse réellement (CHF 2'800). L'IJM va directement à l'employé.",
        lignes: [
          { debit: '5000', debitL: 'Salaires', credit: '2270', creditL: 'Charges sociales à payer', debitM: "2'800.00", creditM: "378.00", libelle: "Salaire Théo Keller — part employeur" },
          { debit: null, credit: '2160', creditL: 'Salaires à payer', debitM: null, creditM: "2'422.00", libelle: "Net à payer Théo Keller", sub: true },
        ],
      },
      {
        titre: "Étape 2 — Charges patronales sur part employeur",
        lignes: [
          { debit: '5700', debitL: 'Charges soc. patronales', credit: '2270', creditL: 'Charges sociales à payer', debitM: "378.00", creditM: "378.00", libelle: "Charges patronales Théo Keller (sur 2'800)" },
        ],
      },
      {
        titre: "Étape 3 — Versements",
        lignes: [
          { debit: '2160', debitL: 'Salaires à payer', credit: '1020', creditL: 'Banque', debitM: "2'422.00", creditM: "2'422.00", libelle: "Virement part employeur Théo Keller" },
          { debit: '2270', debitL: 'Charges sociales à payer', credit: '1020', creditL: 'Banque', debitM: "756.00", creditM: "756.00", libelle: "Versement caisses sociales" },
        ],
      },
    ],
  },

  {
    id: 'arret-04',
    label: 'Accident LAA / SUVA',
    title: "Accident professionnel — Indemnités journalières SUVA (LAA)",
    situation: "Lucas Morel, salaire brut CHF 5'800/mois, accident professionnel le 05.03.\nArrêt du 05.03 au 31.03 — 27 jours calendriers d'arrêt sur 30.\nSUVA : verse 80% dès le 3e jour (jours 1 et 2 à charge de l'employeur).\nJours à charge employeur : 2 jours (carence LAA).\nJours SUVA : 25 jours — indemnité versée à l'EMPLOYEUR.\nCotisations sur la part à charge de l'employeur uniquement.",
    calculs: [
      { label: "Salaire brut mensuel (base 30 jours)", montant: "CHF 5'800.00", type: 'brut' },
      { label: "Part présence (3/30)", montant: "CHF 580.00", type: 'info', detail: "5'800 × 3/30 — jours effectivement travaillés avant accident" },
      { label: "Part carence employeur (2/30)", montant: "CHF 386.67", type: 'info', detail: "5'800 × 2/30 — 2 jours à charge employeur avant SUVA" },
      { label: "Total part à charge employeur", montant: "CHF 966.67", type: 'key', detail: "Présence + carence = base cotisations" },
      { label: "Indemnité SUVA (80% × 5'800 × 25/30)", montant: "CHF 3'866.67", type: 'indemnite', detail: "Versée par la SUVA à l'employeur — compte 5005" },
      { label: "Cotisations sur part employeur (~13.5%)", montant: "CHF 130.50", type: 'deduction', detail: "Sur CHF 966.67 uniquement — pas sur les 5'800" },
      { label: "Salaire net versé à Lucas Morel", montant: "CHF 5'669.50", type: 'net' },
    ],
    points: [
      "Calcul sur 30 jours calendriers — weekends inclus",
      "Les 2 PREMIERS JOURS d'arrêt sont toujours à charge de l'employeur (délai de carence SUVA)",
      "Dès le 3e jour : SUVA verse 80% du salaire assuré (plafonné CHF 148'200/an)",
      "Indemnité SUVA versée à l'employeur → crédit compte 5005 (comme IJM)",
      "Cotisations AVS/AC : sur la part employeur uniquement (CHF 966.67)",
      "Accident NON professionnel : LAANP couvre, délai carence 1 jour",
    ],
    ecritures: [
      {
        titre: "Étape 1 — Salaire maintenu + cotisations sur part employeur",
        explication: "L'employeur maintient le salaire complet. Cotisations sur sa part uniquement (CHF 966.67).",
        lignes: [
          { debit: '5000', debitL: 'Salaires', credit: '2270', creditL: 'Charges sociales à payer', debitM: "5'800.00", creditM: "130.50", libelle: "Salaire Lucas Morel maintenu" },
          { debit: null, credit: '2160', creditL: 'Salaires à payer', debitM: null, creditM: "5'669.50", libelle: "Net à payer Lucas Morel", sub: true },
        ],
      },
      {
        titre: "Étape 2 — Indemnité SUVA à recevoir",
        explication: "Créance sur la SUVA en actif transitoire. Crédit 5005 réduit les charges de personnel.",
        lignes: [
          { debit: '1180', debitL: 'Actifs transitoires', credit: '5005', creditL: 'Indemnités reçues (IJM/LAA)', debitM: "3'866.67", creditM: "3'866.67", libelle: "Indemnité SUVA à recevoir (80% × 25 jours)" },
        ],
      },
      {
        titre: "Étape 3 — Encaissement SUVA",
        lignes: [
          { debit: '1020', debitL: 'Banque', credit: '1180', creditL: 'Actifs transitoires', debitM: "3'866.67", creditM: "3'866.67", libelle: "Encaissement SUVA — virement" },
        ],
      },
      {
        titre: "Étape 4 — Versements",
        lignes: [
          { debit: '2160', debitL: 'Salaires à payer', credit: '1020', creditL: 'Banque', debitM: "5'669.50", creditM: "5'669.50", libelle: "Virement salaire net Lucas Morel" },
          { debit: '2270', debitL: 'Charges sociales à payer', credit: '1020', creditL: 'Banque', debitM: "261.00", creditM: "261.00", libelle: "Versement caisses sociales" },
        ],
      },
    ],
  },
];

function TableauEcritures({ lignes }) {
  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: 7, overflow: 'hidden', marginTop: 10 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
        <thead>
          <tr style={{ background: '#2563eb' }}>
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
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', paddingLeft: l.sub ? 20 : 10 }}>
                {l.debit
                  ? <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#2563eb', fontWeight: 700, fontSize: '0.79rem' }}>{l.debit} <span style={{ color: '#718096', fontWeight: 400, fontSize: '0.69rem' }}>{l.debitL}</span></span>
                  : <span style={{ color: '#ccc' }}>—</span>}
              </td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0' }}>
                {l.credit
                  ? <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#059669', fontWeight: 700, fontSize: '0.79rem' }}>{l.credit} <span style={{ color: '#718096', fontWeight: 400, fontSize: '0.69rem' }}>{l.creditL}</span></span>
                  : ''}
              </td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', color: '#718096', fontStyle: 'italic', fontSize: '0.77rem' }}>{l.libelle}</td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, color: '#2563eb', fontSize: '0.8rem' }}>{l.debitM || '—'}</td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, color: '#059669', fontSize: '0.8rem' }}>{l.creditM || '—'}</td>
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
    <div style={{ border: '1px solid #e2e8f0', borderRadius: 7, marginBottom: 8, overflow: 'hidden' }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 9, padding: '9px 14px', background: open ? '#2563eb' : '#fff', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ width: 20, height: 20, borderRadius: '50%', background: open ? 'rgba(255,255,255,0.2)' : '#2563eb', color: '#fff', fontSize: '0.68rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
        <span style={{ flex: 1, fontWeight: 700, fontSize: '0.82rem', color: open ? '#fff' : '#0f172a' }}>{e.titre}</span>
        <span style={{ color: open ? 'rgba(255,255,255,0.5)' : '#a0aec0', fontSize: '0.65rem', display: 'inline-block', transform: open ? 'rotate(180deg)' : 'none' }}>▼</span>
      </button>
      {open && (
        <div style={{ padding: '12px 14px', borderTop: '1px solid #e2e8f0' }}>
          {e.explication && (
            <div style={{ background: '#eff6ff', borderRadius: 5, padding: '8px 12px', fontSize: '0.79rem', color: '#475569', lineHeight: 1.6, marginBottom: 10 }}>
              <Lightbulb size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />{e.explication}
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
    brut:      { bg: '#f0f3f7', color: '#0f172a', fw: 700 },
    indemnite: { bg: '#e6f4ed', color: '#059669', fw: 600 },
    key:       { bg: '#eff6ff', color: '#2563eb', fw: 700 },
    deduction: { bg: '#fdf0ee', color: '#c0392b', fw: 500 },
    net:       { bg: '#eff6ff', color: '#1e4a6e', fw: 700 },
    info:      { bg: '#ffffff', color: '#475569', fw: 400 },
  };

  return (
    <>
      <div className="topbar">
        <h2>Arrêts maladie & accident — 4 scénarios</h2>
        <div className="topbar-right">
          <span className="tag tag-salaires">Salaires</span>
          <span className="topbar-meta">Base 30 jours · CO 324a · LAA · IJM · SUVA</span>
        </div>
      </div>

      <div className="content" style={{ maxWidth: 900 }}>

        {/* Sélecteur */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
          {FICHES.map(f => (
            <button
              key={f.id}
              onClick={() => { setActiveId(f.id); setShowEcritures(false); }}
              style={{
                padding: '7px 14px', borderRadius: 20, fontSize: '0.78rem', fontWeight: 600,
                border: '1px solid ' + (activeId === f.id ? '#2563eb' : '#e2e8f0'),
                background: activeId === f.id ? '#2563eb' : '#fff',
                color: activeId === f.id ? '#fff' : '#475569',
                cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.12s',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Situation */}
        <div style={{ background: '#f0f3f7', border: '1px solid #e2e8f0', borderRadius: 7, padding: '12px 16px', marginBottom: 16, fontSize: '0.81rem', color: '#475569', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
          <strong style={{ color: '#0f172a', display: 'block', marginBottom: 5, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}><ClipboardList size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />Situation</strong>
          {fiche.situation}
        </div>

        {/* Tableau calculs */}
        <div style={{ border: '2px solid #2563eb', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}>
          <div style={{ background: '#2563eb', padding: '11px 16px', color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>
            {fiche.title}
          </div>
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
                    <td style={{ padding: '8px 14px', fontSize: '0.83rem', fontWeight: s.fw, color: '#475569', borderBottom: '1px solid #e2e8f0' }}>
                      {row.label}
                      {row.detail && (
                        <div style={{ fontSize: '0.74rem', color: '#718096', fontWeight: 400, marginTop: 2 }}>
                          <Info size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />{row.detail}
                        </div>
                      )}
                    </td>
                    <td style={{ padding: '8px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.86rem', fontWeight: s.fw, color: s.color, textAlign: 'right', borderBottom: '1px solid #e2e8f0' }}>
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
          <strong style={{ display: 'block', marginBottom: 8, fontSize: '0.78rem', color: '#7a5c00' }}><AlertTriangle size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />Points clés</strong>
          {fiche.points.map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 5, fontSize: '0.8rem', color: '#7a5c00', lineHeight: 1.5 }}>
              <span style={{ flexShrink: 0 }}>•</span>
              <span>{p}</span>
            </div>
          ))}
        </div>

        {/* Écritures */}
        <button
          onClick={() => setShowEcritures(s => !s)}
          style={{ padding: '8px 16px', borderRadius: 5, border: 'none', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600, fontFamily: 'Inter, sans-serif', background: '#2563eb', color: '#fff', marginBottom: 14 }}
        >
          {showEcritures ? '▲ Masquer les écritures' : '▼ Voir les écritures comptables'}
        </button>

        {showEcritures && (
          <div>
            <p style={{ fontSize: '0.79rem', color: '#718096', fontStyle: 'italic', marginBottom: 12 }}>
              Cliquez sur chaque étape pour afficher les écritures.
            </p>
            {fiche.ecritures.map((e, i) => (
              <Etape key={i} e={e} i={i} />
            ))}
          </div>
        )}

      </div>
    </>
  );
}