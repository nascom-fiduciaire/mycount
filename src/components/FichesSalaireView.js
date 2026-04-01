import React, { useState } from 'react';
import { Info, Lightbulb, ClipboardList, User } from 'lucide-react';
import { fichesSalaire } from '../data/theory/09-fiches-salaire';

function fmt(n) {
  if (n == null) return '—';
  return Number(n).toLocaleString('fr-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ─── Ligne fiche de salaire ────────────────────────────────────────────────
function LigneFiche({ label, taux, base, montant, type, detail }) {
  const [open, setOpen] = useState(false);
  const isTotal = ['total', 'net', 'cout'].includes(type);
  const colors = { deduction: '#c0392b', indemnite: '#059669', patronal: '#2563eb', total: '#0f172a', net: '#2563eb', cout: '#1e3a5f' };
  const sign = type === 'deduction' ? '− ' : type === 'indemnite' ? '+ ' : '';

  return (
    <>
      <tr
        onClick={() => detail && setOpen(o => !o)}
        style={{ cursor: detail ? 'pointer' : 'default', background: isTotal ? '#f0f3f7' : 'transparent' }}
      >
        <td style={{ padding: '7px 14px', fontSize: isTotal ? '0.84rem' : '0.81rem', fontWeight: isTotal ? 700 : 400, color: '#475569' }}>
          {label}
          {detail && <span style={{ fontSize: '0.6rem', color: '#a0aec0', marginLeft: 5 }}>{open ? '▲' : '▼'}</span>}
        </td>
        <td style={{ padding: '7px 10px', fontSize: '0.76rem', color: '#718096', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace' }}>
          {taux ? `${taux}%` : ''}{base && taux ? ` × ${fmt(base)}` : ''}
        </td>
        <td style={{ padding: '7px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: isTotal ? '0.9rem' : '0.83rem', fontWeight: isTotal ? 700 : 500, color: colors[type] || '#0f172a', textAlign: 'right', whiteSpace: 'nowrap' }}>
          {sign}{fmt(montant)}
        </td>
      </tr>
      {open && detail && (
        <tr>
          <td colSpan={3} style={{ padding: '6px 14px 10px 28px', background: '#eff6ff', fontSize: '0.78rem', color: '#475569', lineHeight: 1.55, borderBottom: '1px solid #e2e8f0' }}>
            <Info size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />{detail}
          </td>
        </tr>
      )}
    </>
  );
}

// ─── Tableau d'une étape ───────────────────────────────────────────────────
function TableauEtape({ ecritures }) {
  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, overflow: 'hidden', marginTop: 10 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.81rem' }}>
        <thead>
          <tr style={{ background: '#2563eb' }}>
            <th style={{ padding: '8px 10px', color: '#fff', textAlign: 'left', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', width: '19%' }}>Débit N°</th>
            <th style={{ padding: '8px 10px', color: '#fff', textAlign: 'left', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', width: '19%' }}>Crédit N°</th>
            <th style={{ padding: '8px 10px', color: '#fff', textAlign: 'left', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Libellé</th>
            <th style={{ padding: '8px 10px', color: '#fff', textAlign: 'right', fontSize: '0.68rem', fontWeight: 600, width: '14%' }}>Débit</th>
            <th style={{ padding: '8px 10px', color: '#fff', textAlign: 'right', fontSize: '0.68rem', fontWeight: 600, width: '14%' }}>Crédit</th>
          </tr>
        </thead>
        <tbody>
          {(ecritures || []).map((e, i) => (
            <tr key={i} style={{ background: e.isSubLine ? '#fafbfd' : '#fff' }}>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', paddingLeft: e.isSubLine ? 22 : 10 }}>
                {e.debit
                  ? <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.79rem', color: '#2563eb', fontWeight: 600 }}>{e.debit} <span style={{ color: '#718096', fontWeight: 400, fontSize: '0.7rem' }}>{e.debitLabel}</span></span>
                  : <span style={{ color: '#a0aec0' }}>—</span>}
              </td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0' }}>
                {e.credit
                  ? <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.79rem', color: '#059669', fontWeight: 600 }}>{e.credit} <span style={{ color: '#718096', fontWeight: 400, fontSize: '0.7rem' }}>{e.creditLabel}</span></span>
                  : <span style={{ color: '#a0aec0' }}>—</span>}
              </td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', color: '#718096', fontSize: '0.78rem', fontStyle: 'italic' }}>{e.libelle}</td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 600, color: '#2563eb' }}>
                {e.montantDebit != null ? fmt(e.montantDebit) : '—'}
              </td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 600, color: '#059669' }}>
                {e.montantCredit != null ? fmt(e.montantCredit) : '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Étape comptable dépliable ─────────────────────────────────────────────
function Etape({ etape, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, marginBottom: 9, overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 15px', background: open ? '#2563eb' : '#fff', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ width: 22, height: 22, borderRadius: '50%', background: open ? 'rgba(255,255,255,0.22)' : '#2563eb', color: '#fff', fontSize: '0.7rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {etape.num}
        </span>
        <span style={{ flex: 1, fontWeight: 700, fontSize: '0.84rem', color: open ? '#fff' : '#0f172a' }}>{etape.titre}</span>
        <span style={{ fontSize: '0.68rem', color: open ? 'rgba(255,255,255,0.55)' : '#a0aec0', display: 'inline-block', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.14s' }}>▼</span>
      </button>
      {open && (
        <div style={{ padding: '13px 15px', borderTop: '1px solid #e2e8f0' }}>
          {etape.explication && (
            <div style={{ background: '#eff6ff', border: '1px solid #d0e3f4', borderRadius: 5, padding: '9px 12px', fontSize: '0.8rem', color: '#475569', lineHeight: 1.6, marginBottom: 11 }}>
              <Lightbulb size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />{etape.explication}
            </div>
          )}
          <TableauEtape ecritures={etape.ecritures} />
        </div>
      )}
    </div>
  );
}

// ─── Fiche complète ────────────────────────────────────────────────────────
function FicheDetail({ fiche }) {
  const [showPatronal, setShowPatronal] = useState(false);
  const [showEcritures, setShowEcritures] = useState(false);

  if (!fiche) return null;

  return (
    <div style={{ paddingBottom: 40 }}>

      {/* Contexte */}
      <div style={{ background: '#f0f3f7', border: '1px solid #e2e8f0', borderRadius: 6, padding: '11px 15px', marginBottom: 16, fontSize: '0.81rem', color: '#475569', lineHeight: 1.65, whiteSpace: 'pre-line' }}>
        <strong style={{ color: '#0f172a', display: 'block', marginBottom: 5, fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}><ClipboardList size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />Contexte</strong>
        {fiche.contexte}
      </div>

      {/* Fiche de salaire */}
      <div style={{ border: '2px solid #2563eb', borderRadius: 8, overflow: 'hidden', marginBottom: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>

        {/* En-tête */}
        <div style={{ background: '#2563eb', padding: '12px 16px' }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>{fiche.title}</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.76rem', marginTop: 2 }}>
            {fiche.salaire.mois} · Taux : {fiche.salaire.tauxActivite}%
            {fiche.salaire.special === 'depart' && ` · ${fiche.salaire.joursTravailes}/${fiche.salaire.joursMois} jours`}
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <colgroup><col style={{ width: '52%' }} /><col style={{ width: '24%' }} /><col style={{ width: '24%' }} /></colgroup>
          <thead>
            <tr style={{ background: '#f0f3f7' }}>
              <th style={{ padding: '6px 14px', textAlign: 'left', fontSize: '0.67rem', color: '#718096', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Élément</th>
              <th style={{ padding: '6px 10px', textAlign: 'right', fontSize: '0.67rem', color: '#718096', fontWeight: 600, textTransform: 'uppercase' }}>Base / Taux</th>
              <th style={{ padding: '6px 14px', textAlign: 'right', fontSize: '0.67rem', color: '#718096', fontWeight: 600, textTransform: 'uppercase' }}>Montant CHF</th>
            </tr>
          </thead>
          <tbody>

            {/* Salaire brut */}
            <LigneFiche label="SALAIRE BRUT" montant={fiche.salaire.brut} type="total" />

            {/* Séparateur déductions */}
            <tr><td colSpan={3} style={{ padding: '3px 14px', background: '#eff6ff', fontSize: '0.68rem', color: '#2563eb', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Déductions employé <span style={{ fontWeight: 400, opacity: 0.7 }}>(cliquez pour l'explication)</span>
            </td></tr>

            {(fiche.deductionsEmploye || []).map((d, i) => (
              <LigneFiche key={i} label={d.label} taux={d.taux} base={d.taux ? fiche.salaire.brut : null} montant={d.montant} type="deduction" detail={d.detail} />
            ))}
            <LigneFiche label="Total déductions employé" montant={fiche.totalDeductionsEmploye} type="total" />

            {/* Indemnités */}
            {fiche.indemnites && fiche.indemnites.length > 0 && (
              <>
                <tr><td colSpan={3} style={{ padding: '3px 14px', background: '#f0faf5', fontSize: '0.68rem', color: '#059669', fontWeight: 700, textTransform: 'uppercase' }}>
                  Indemnités et allocations
                </td></tr>
                {fiche.indemnites.map((ind, i) => (
                  <LigneFiche key={i} label={ind.label} montant={ind.montant} type="indemnite" detail={ind.detail} />
                ))}
              </>
            )}

            {/* Salaire net */}
            <tr><td colSpan={3} style={{ height: 2, background: '#2563eb' }} /></tr>
            <tr style={{ background: '#eff6ff' }}>
              <td style={{ padding: '10px 14px', fontWeight: 700, fontSize: '0.92rem', color: '#2563eb' }}>SALAIRE NET VERSÉ</td>
              <td></td>
              <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.97rem', color: '#2563eb', textAlign: 'right' }}>
                {fmt(fiche.salaireNet)}
              </td>
            </tr>

            {/* Toggle charges patronales */}
            <tr>
              <td colSpan={3} style={{ padding: 0 }}>
                <button
                  onClick={() => setShowPatronal(s => !s)}
                  style={{ width: '100%', padding: '7px 14px', background: showPatronal ? '#1e3a5f' : '#f0f3f7', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7, borderTop: '1px solid #e2e8f0', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: showPatronal ? '#fff' : '#718096' }}
                >
                  <span style={{ display: 'inline-block', transform: showPatronal ? 'rotate(90deg)' : 'none', transition: 'transform 0.14s' }}>▶</span>
                  Charges sociales patronales (employeur)
                </button>
              </td>
            </tr>
            {showPatronal && (fiche.chargesPatronales || []).map((c, i) => (
              <LigneFiche key={i} label={c.label} taux={c.taux} base={c.taux ? fiche.salaire.brut : null} montant={c.montant} type="patronal" detail={c.detail} />
            ))}
            {showPatronal && <LigneFiche label="Total charges patronales" montant={fiche.totalChargesPatronales} type="total" />}

            {/* Coût total */}
            <tr><td colSpan={3} style={{ height: 2, background: '#2563eb' }} /></tr>
            <tr style={{ background: '#eff6ff' }}>
              <td style={{ padding: '11px 14px', fontWeight: 700, fontSize: '0.9rem', color: '#1e3a5f' }}>COÛT TOTAL EMPLOYEUR</td>
              <td style={{ padding: '11px 10px', fontSize: '0.74rem', color: '#718096', textAlign: 'right' }}>brut + charges pat.</td>
              <td style={{ padding: '11px 14px', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.97rem', color: '#1e3a5f', textAlign: 'right' }}>
                {fmt(fiche.coutTotalEmployeur)}
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* Écritures comptables */}
      <button
        onClick={() => setShowEcritures(s => !s)}
        style={{ padding: '8px 16px', borderRadius: 5, border: 'none', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600, fontFamily: 'Inter, sans-serif', background: '#2563eb', color: '#fff', marginBottom: 14 }}
      >
        {showEcritures ? '▲ Masquer les écritures' : '▼ Voir les écritures comptables'}
      </button>

      {showEcritures && (
        <div>
          <p style={{ fontSize: '0.79rem', color: '#718096', fontStyle: 'italic', marginBottom: 11 }}>
            Cliquez sur chaque étape pour afficher les écritures.
          </p>
          {(fiche.etapesComptables || []).map((etape, i) => (
            <Etape key={i} etape={etape} defaultOpen={i === 0} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Vue principale ────────────────────────────────────────────────────────
export default function FichesSalaireView() {
  const [activeId, setActiveId] = useState(fichesSalaire[0].id);
  const fiche = fichesSalaire.find(f => f.id === activeId) || fichesSalaire[0];

  return (
    <>
      <div className="topbar">
        <h2><User size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />Fiches de salaire — 6 cas pratiques</h2>
        <div className="topbar-right">
          <span className="tag tag-salaires">Salaires</span>
          <span className="topbar-meta">Taux réels 2024 · Postes ouverts</span>
        </div>
      </div>

      <div style={{ padding: '20px 26px 0' }}>
        {/* Sélecteur de fiche */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
          {fichesSalaire.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveId(f.id)}
              style={{
                padding: '6px 14px', borderRadius: 20, fontSize: '0.78rem', fontWeight: 600,
                border: `1px solid ${activeId === f.id ? '#2563eb' : '#e2e8f0'}`,
                background: activeId === f.id ? '#2563eb' : '#fff',
                color: activeId === f.id ? '#fff' : '#475569',
                cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                transition: 'all 0.12s',
              }}
            >
              {f.title}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '0 26px 40px' }}>
        <div style={{ maxWidth: 860 }}>
          <FicheDetail key={fiche.id} fiche={fiche} />
        </div>
      </div>
    </>
  );
}