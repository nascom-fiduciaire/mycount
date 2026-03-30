import React, { useState } from 'react';

function fmt(n) {
  if (n === null || n === undefined) return '—';
  return Number(n).toLocaleString('fr-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ─── Ligne de la fiche ─────────────────────────────────────────────────────
function LigneFiche({ label, taux, base, montant, type, detail }) {
  const [showDetail, setShowDetail] = useState(false);

  const colorMap = {
    deduction: 'var(--red)',
    indemnite: 'var(--green)',
    patronal: 'var(--blue)',
    total: 'var(--text)',
    net: 'var(--blue)',
    cout: 'var(--blue-dark)',
  };

  const sign = type === 'deduction' ? '−' : type === 'indemnite' ? '+' : '';

  return (
    <>
      <tr
        style={{ cursor: detail ? 'pointer' : 'default', background: type === 'total' || type === 'net' || type === 'cout' ? 'var(--surface2)' : 'transparent' }}
        onClick={() => detail && setShowDetail(s => !s)}
      >
        <td style={{
          padding: '7px 14px',
          fontSize: type === 'total' || type === 'net' || type === 'cout' ? '0.84rem' : '0.82rem',
          fontWeight: type === 'total' || type === 'net' || type === 'cout' ? 700 : 400,
          color: 'var(--text2)',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          {label}
          {detail && <span style={{ fontSize: '0.65rem', color: 'var(--text4)', marginLeft: 4 }}>
            {showDetail ? '▲' : '▼'}
          </span>}
        </td>
        <td style={{ padding: '7px 10px', fontSize: '0.78rem', color: 'var(--text3)', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace' }}>
          {taux ? `${taux}%` : ''}{base && taux ? ` × ${fmt(base)}` : ''}
        </td>
        <td style={{
          padding: '7px 14px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: type === 'total' || type === 'net' || type === 'cout' ? '0.9rem' : '0.84rem',
          fontWeight: type === 'total' || type === 'net' || type === 'cout' ? 700 : 500,
          color: colorMap[type] || 'var(--text)',
          textAlign: 'right',
          whiteSpace: 'nowrap',
        }}>
          {sign} {fmt(montant)}
        </td>
      </tr>
      {showDetail && detail && (
        <tr>
          <td colSpan={3} style={{ padding: '6px 14px 10px 28px', background: 'var(--blue-pale)', fontSize: '0.78rem', color: 'var(--text2)', lineHeight: 1.55, borderBottom: '1px solid var(--border)' }}>
            ℹ️ {detail}
          </td>
        </tr>
      )}
    </>
  );
}

// ─── Tableau journal d'une étape ───────────────────────────────────────────
function TableauEtape({ ecritures }) {
  return (
    <div className="journal-wrap" style={{ marginTop: 10 }}>
      <table className="journal-table">
        <thead>
          <tr>
            <th style={{ width: '18%' }}>Débit N°</th>
            <th style={{ width: '18%' }}>Crédit N°</th>
            <th style={{ width: '36%' }}>Libellé</th>
            <th style={{ width: '14%', textAlign: 'right' }}>Débit CHF</th>
            <th style={{ width: '14%', textAlign: 'right' }}>Crédit CHF</th>
          </tr>
        </thead>
        <tbody>
          {ecritures.map((e, i) => (
            <tr key={i} className={e.isSubLine ? 'row-sub' : 'row-main'}>
              <td className={e.isSubLine ? 'indent-cell' : ''}>
                {e.debit ? (
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--blue)', fontWeight: 600 }}>
                    {e.debit} <span style={{ color: 'var(--text3)', fontWeight: 400, fontSize: '0.72rem' }}>{e.debitLabel}</span>
                  </span>
                ) : '—'}
              </td>
              <td>
                {e.credit ? (
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--green)', fontWeight: 600 }}>
                    {e.credit} <span style={{ color: 'var(--text3)', fontWeight: 400, fontSize: '0.72rem' }}>{e.creditLabel}</span>
                  </span>
                ) : '—'}
              </td>
              <td><span className="libelle-text">{e.libelle}</span></td>
              <td style={{ textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', fontWeight: 600, color: 'var(--blue)' }}>
                {e.montantDebit != null ? fmt(e.montantDebit) : '—'}
              </td>
              <td style={{ textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', fontWeight: 600, color: 'var(--green)' }}>
                {e.montantCredit != null ? fmt(e.montantCredit) : '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Section étape comptable ───────────────────────────────────────────────
function EtapeComptable({ etape, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false);

  return (
    <div style={{
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      marginBottom: 10,
      overflow: 'hidden',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: 10,
          padding: '11px 16px', background: open ? 'var(--blue)' : 'var(--white)',
          border: 'none', cursor: 'pointer', textAlign: 'left',
          transition: 'background 0.15s',
        }}
      >
        <span style={{
          width: 24, height: 24, borderRadius: '50%',
          background: open ? 'rgba(255,255,255,0.25)' : 'var(--blue)',
          color: '#fff', fontSize: '0.72rem', fontWeight: 700,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>{etape.num}</span>
        <span style={{ flex: 1, fontWeight: 700, fontSize: '0.86rem', color: open ? '#fff' : 'var(--text)' }}>
          {etape.titre}
        </span>
        <span style={{ fontSize: '0.7rem', color: open ? 'rgba(255,255,255,0.6)' : 'var(--text4)', transition: 'transform 0.15s', transform: open ? 'rotate(180deg)' : 'none' }}>
          ▼
        </span>
      </button>

      {open && (
        <div style={{ padding: '14px 16px', borderTop: '1px solid var(--border)' }}>
          {etape.explication && (
            <div style={{
              background: 'var(--blue-pale)', border: '1px solid var(--blue-pale2)',
              borderRadius: 'var(--radius-sm)', padding: '10px 13px',
              fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.6,
              marginBottom: 12,
            }}>
              💡 {etape.explication}
            </div>
          )}
          <TableauEtape ecritures={etape.ecritures} />
        </div>
      )}
    </div>
  );
}

// ─── Composant principal Fiche de Salaire ─────────────────────────────────
export default function PayslipExercise({ ex }) {
  const [showPatronal, setShowPatronal] = useState(false);
  const [showEcritures, setShowEcritures] = useState(false);

  return (
    <div>
      {/* Contexte */}
      <div style={{
        background: 'var(--surface2)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-sm)', padding: '12px 16px', marginBottom: 18,
        fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.65,
        whiteSpace: 'pre-line',
      }}>
        <strong style={{ color: 'var(--text)', display: 'block', marginBottom: 6, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          📋 Contexte
        </strong>
        {ex.contexte}
      </div>

      {/* ── FICHE DE SALAIRE ─────────────────────────────────────── */}
      <div style={{
        border: '2px solid var(--blue)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        marginBottom: 20,
        boxShadow: 'var(--shadow)',
      }}>
        {/* En-tête */}
        <div style={{ background: 'var(--blue)', padding: '14px 18px' }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
            FICHE DE SALAIRE — {ex.title.split('—')[1]?.trim() || ex.title}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem', marginTop: 3 }}>
            {ex.salaire.mois} · Taux d'activité : {ex.salaire.tauxActivite}%
            {ex.salaire.special === 'depart' && ` · ${ex.salaire.joursTravailes}/${ex.salaire.joursMois} jours travaillés`}
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <colgroup>
            <col style={{ width: '52%' }} />
            <col style={{ width: '24%' }} />
            <col style={{ width: '24%' }} />
          </colgroup>
          <thead>
            <tr style={{ background: 'var(--surface2)' }}>
              <th style={{ padding: '7px 14px', textAlign: 'left', fontSize: '0.68rem', color: 'var(--text3)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Élément</th>
              <th style={{ padding: '7px 10px', textAlign: 'right', fontSize: '0.68rem', color: 'var(--text3)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Base / Taux</th>
              <th style={{ padding: '7px 14px', textAlign: 'right', fontSize: '0.68rem', color: 'var(--text3)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Montant CHF</th>
            </tr>
          </thead>
          <tbody>

            {/* Salaire brut */}
            <LigneFiche
              label="SALAIRE BRUT"
              taux={ex.salaire.tauxActivite !== 100 ? `${ex.salaire.tauxActivite}% de ${fmt(ex.salaire.brut100 || ex.salaire.brut)}` : null}
              montant={ex.salaire.brut}
              type="total"
            />

            {/* Séparateur */}
            <tr><td colSpan={3} style={{ padding: '4px 14px', background: 'var(--blue-pale)', fontSize: '0.7rem', color: 'var(--blue)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Déductions employé <span style={{ fontWeight: 400, opacity: 0.7 }}>(cliquez sur une ligne pour l'explication)</span>
            </td></tr>

            {/* Déductions */}
            {ex.deductionsEmploye.map((d, i) => (
              <LigneFiche key={i} label={d.label} taux={d.taux} base={d.taux ? ex.salaire.brut : null} montant={d.montant} type="deduction" detail={d.detail} />
            ))}

            {/* Total déductions */}
            <LigneFiche label="Total déductions employé" montant={ex.totalDeductionsEmploye} type="total" />

            {/* Indemnités */}
            {ex.indemnites && ex.indemnites.length > 0 && (
              <>
                <tr><td colSpan={3} style={{ padding: '4px 14px', background: '#f0faf5', fontSize: '0.7rem', color: 'var(--green)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Indemnités et allocations
                </td></tr>
                {ex.indemnites.map((ind, i) => (
                  <LigneFiche key={i} label={ind.label} montant={ind.montant} type="indemnite" detail={ind.detail} />
                ))}
              </>
            )}

            {/* Salaire net */}
            <tr><td colSpan={3} style={{ height: 3, background: 'var(--blue)' }} /></tr>
            <tr style={{ background: 'var(--blue-pale)' }}>
              <td style={{ padding: '11px 14px', fontWeight: 700, fontSize: '0.95rem', color: 'var(--blue)' }}>SALAIRE NET VERSÉ</td>
              <td></td>
              <td style={{ padding: '11px 14px', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '1rem', color: 'var(--blue)', textAlign: 'right' }}>
                {fmt(ex.salaireNet)}
              </td>
            </tr>

            {/* Charges patronales toggle */}
            <tr>
              <td colSpan={3} style={{ padding: 0 }}>
                <button
                  onClick={() => setShowPatronal(s => !s)}
                  style={{
                    width: '100%', padding: '8px 14px', background: showPatronal ? 'var(--blue-dark)' : 'var(--surface2)',
                    border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
                    borderTop: '1px solid var(--border)',
                    fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: showPatronal ? '#fff' : 'var(--text3)',
                  }}
                >
                  <span style={{ transform: showPatronal ? 'rotate(90deg)' : 'none', transition: 'transform 0.15s', display: 'inline-block' }}>▶</span>
                  Charges sociales patronales (à la charge de l'employeur)
                </button>
              </td>
            </tr>

            {showPatronal && ex.chargesPatronales.map((c, i) => (
              <LigneFiche key={i} label={c.label} taux={c.taux} base={c.taux ? ex.salaire.brut : null} montant={c.montant} type="patronal" detail={c.detail} />
            ))}

            {showPatronal && (
              <LigneFiche label="Total charges patronales" montant={ex.totalChargesPatronales} type="total" />
            )}

            {/* Coût total */}
            <tr><td colSpan={3} style={{ height: 2, background: 'var(--blue)' }} /></tr>
            <tr style={{ background: '#e8f0f8' }}>
              <td style={{ padding: '12px 14px', fontWeight: 700, fontSize: '0.92rem', color: 'var(--blue-dark)' }}>COÛT TOTAL EMPLOYEUR</td>
              <td style={{ padding: '12px 10px', fontSize: '0.77rem', color: 'var(--text3)', textAlign: 'right' }}>brut + charges pat.</td>
              <td style={{ padding: '12px 14px', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '1rem', color: 'var(--blue-dark)', textAlign: 'right' }}>
                {fmt(ex.coutTotalEmployeur)}
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* ── ÉCRITURES COMPTABLES ─────────────────────────────────── */}
      <div>
        <button
          onClick={() => setShowEcritures(s => !s)}
          className="btn btn-primary"
          style={{ marginBottom: 14 }}
        >
          {showEcritures ? '▲ Masquer les écritures comptables' : '▼ Afficher les écritures comptables'}
        </button>

        {showEcritures && (
          <div>
            <div style={{ marginBottom: 12, fontSize: '0.82rem', color: 'var(--text3)', fontStyle: 'italic' }}>
              Cliquez sur chaque étape pour afficher les écritures correspondantes.
            </div>
            {ex.etapesComptables.map((etape, i) => (
              <EtapeComptable key={i} etape={etape} defaultOpen={i === 0} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
