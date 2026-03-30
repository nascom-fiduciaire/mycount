import React from 'react';

// ─── Paragraph ───────────────────────────────────────────────────────────────
export function P({ children }) {
  return <p style={{ fontSize: '0.87rem', color: '#475569', lineHeight: 1.85, margin: '0 0 14px' }}>{children}</p>;
}

// ─── Heading H2 — avec badge numérique si le texte commence par un chiffre ──
export function H2({ children, id }) {
  const text = typeof children === 'string' ? children : '';
  const numMatch = text.match(/^(\d+)[.\s—–-]+\s*(.*)/);

  if (numMatch) {
    return (
      <div id={id} className="theory-h2" style={{
        display: 'flex', alignItems: 'stretch',
        borderRadius: 10, overflow: 'hidden', background: '#fff',
        border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #2563eb, #3b82f6)', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          minWidth: 48, fontWeight: 800, fontSize: '1.1rem',
          fontFamily: 'JetBrains Mono, monospace', letterSpacing: '-0.02em', flexShrink: 0,
        }}>
          {numMatch[1]}
        </div>
        <div style={{ padding: '11px 18px', flex: 1, display: 'flex', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.01em' }}>
            {numMatch[2]}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className="theory-h2" style={{
      display: 'flex', alignItems: 'stretch',
      borderRadius: 10, overflow: 'hidden', background: '#fff',
      border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    }}>
      <div style={{
        width: 5, background: 'linear-gradient(135deg, #2563eb, #3b82f6)', flexShrink: 0,
      }} />
      <div style={{ padding: '11px 18px', flex: 1, display: 'flex', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.01em' }}>
          {children}
        </h2>
      </div>
    </div>
  );
}

// ─── Heading H3 ──────────────────────────────────────────────────────────────
export function H3({ children }) {
  return (
    <h3 style={{
      fontSize: '0.92rem', fontWeight: 700, color: '#0f172a',
      margin: '24px 0 10px', paddingBottom: 7, borderBottom: '2px solid #e2e8f0',
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <span style={{ width: 4, height: 16, background: '#2563eb', borderRadius: 2, flexShrink: 0 }} />
      {children}
    </h3>
  );
}

// ─── Note / Callout ──────────────────────────────────────────────────────────
const NOTE_STYLES = {
  blue:   { bg: '#eff6ff',  border: '#2563eb', text: '#1e3a5f', icon: '\u2139\uFE0F' },
  green:  { bg: '#ecfdf5',  border: '#059669', text: '#065f46', icon: '\u2705' },
  red:    { bg: '#fef2f2',  border: '#dc2626', text: '#991b1b', icon: '\u26A0\uFE0F' },
  yellow: { bg: 'linear-gradient(135deg, #fffbeb, #fef9c3)', border: '#f59e0b', text: '#92400e', icon: '\u2139' },
};

export function Note({ children, color }) {
  const s = NOTE_STYLES[color] || NOTE_STYLES.yellow;
  const isGradient = s.bg.includes('gradient');
  return (
    <div style={{
      margin: '16px 0', padding: '14px 18px', borderRadius: 10,
      background: isGradient ? s.bg : s.bg,
      border: `1px solid ${color === 'yellow' ? '#fde68a' : s.border}20`,
      borderLeft: `4px solid ${s.border}`,
      fontSize: '0.85rem', color: s.text, lineHeight: 1.75,
      display: 'flex', gap: 10, alignItems: 'flex-start',
    }}>
      <span style={{ fontSize: '0.95rem', flexShrink: 0, marginTop: 1 }}>{s.icon}</span>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}

// ─── Loi (articles de loi) ───────────────────────────────────────────────────
export function Loi({ children, art }) {
  return (
    <div style={{
      margin: '14px 0', padding: '12px 16px', borderRadius: 10,
      background: '#f5f3ff', border: '1px solid #ddd6fe', borderLeft: '4px solid #7c3aed',
      fontSize: '0.84rem', color: '#5b21b6', lineHeight: 1.75,
      display: 'flex', gap: 10, alignItems: 'flex-start',
    }}>
      <span style={{ fontSize: '0.9rem', flexShrink: 0, marginTop: 1 }}>{'\u2696\uFE0F'}</span>
      <div style={{ flex: 1 }}>
        {art && <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', fontWeight: 700, color: '#7c3aed', marginBottom: 4, letterSpacing: '0.02em' }}>{art}</div>}
        {children}
      </div>
    </div>
  );
}

// ─── Tableau ─────────────────────────────────────────────────────────────────
export function Tableau({ headers: headersProp, rows: rowsProp, colonnes, lignes, caption, titre, color }) {
  const headers = headersProp || colonnes || [];
  const rows = rowsProp || lignes || [];
  const cap = caption || titre;
  return (
    <div style={{ margin: '16px 0', border: '1px solid #e2e8f0', borderRadius: 10, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      {cap && <div style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)', padding: '9px 16px', color: '#fff', fontWeight: 700, fontSize: '0.82rem' }}>{cap}</div>}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.83rem' }}>
          {!cap && (
            <thead><tr style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)' }}>{headers.map((h, i) => <th key={i} style={{ padding: '9px 14px', color: '#fff', textAlign: 'left', fontWeight: 600, fontSize: '0.76rem', letterSpacing: '0.04em' }}>{h}</th>)}</tr></thead>
          )}
          {cap && (
            <thead><tr style={{ background: '#f8fafc' }}>{headers.map((h, i) => <th key={i} style={{ padding: '8px 14px', color: '#0f172a', textAlign: 'left', fontWeight: 600, fontSize: '0.76rem' }}>{h}</th>)}</tr></thead>
          )}
          <tbody>
            {rows.map((row, i) => {
              const cells = row.cells || (Array.isArray(row) ? row : []);
              return (
              <tr key={i} style={{
                background: row._bold ? '#eff6ff' : row._sep ? '#f8fafc' : i % 2 === 0 ? '#fff' : '#f8fafc',
                borderBottom: '1px solid #e2e8f0', fontWeight: row._bold ? 700 : 400,
              }}>
                {cells.map((cell, j) => (
                  <td key={j} style={{
                    padding: '9px 14px', color: j === 0 ? '#0f172a' : '#475569',
                    fontSize: '0.83rem', borderRight: j < cells.length - 1 ? '1px solid #f1f5f9' : 'none',
                    fontFamily: row._mono && j > 0 ? 'JetBrains Mono, monospace' : 'inherit',
                  }}>{cell}</td>
                ))}
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Ecriture comptable ──────────────────────────────────────────────────────
export function Ecriture({ debit, credit, montant, libelle, sub }) {
  return (
    <div style={{
      display: 'flex', gap: 8, alignItems: 'center',
      padding: '9px 14px', background: sub ? '#f8fafc' : '#f1f5f9',
      borderLeft: sub ? '2px solid #e2e8f0' : '3px solid #2563eb',
      margin: '4px 0', borderRadius: '0 8px 8px 0', fontSize: '0.83rem', flexWrap: 'wrap',
    }}>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: '#2563eb', minWidth: 170 }}>Debit {debit}</span>
      <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>{'\u2192'}</span>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: '#059669', minWidth: 170 }}>Credit {credit}</span>
      {montant && <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: '#0f172a', marginLeft: 'auto' }}>CHF {montant}</span>}
      {libelle && <span style={{ color: '#94a3b8', fontStyle: 'italic', fontSize: '0.79rem', width: '100%', paddingLeft: 10 }}>{libelle}</span>}
    </div>
  );
}

// ─── Compte en T ─────────────────────────────────────────────────────────────
export function CompteT({ title, debit = [], credit = [], solde, soldeLabel, soldeColor }) {
  const maxRows = Math.max(debit.length, credit.length, 1);
  const rows = Array.from({ length: maxRows }, (_, i) => ({ d: debit[i] || null, c: credit[i] || null }));
  return (
    <div style={{ flex: '1 1 190px', minWidth: 180 }}>
      <div style={{
        background: 'linear-gradient(135deg, #2563eb, #3b82f6)', color: '#fff',
        fontWeight: 700, fontSize: '0.76rem', padding: '7px 10px',
        borderRadius: '8px 8px 0 0', textAlign: 'center', letterSpacing: '0.02em',
      }}>{title}</div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', border: '1px solid #2563eb', borderTop: 'none' }}>
        <thead>
          <tr>
            <th style={{ padding: '5px 8px', background: '#eff6ff', color: '#2563eb', fontWeight: 700, fontSize: '0.69rem', width: '50%', borderRight: '2px solid #2563eb', textAlign: 'left' }}>Debit</th>
            <th style={{ padding: '5px 8px', background: '#ecfdf5', color: '#059669', fontWeight: 700, fontSize: '0.69rem', textAlign: 'left' }}>Credit</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '5px 8px', borderRight: '2px solid #2563eb', verticalAlign: 'top', minHeight: 28 }}>
                {row.d && <div><div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>{row.d.label}</div><div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, color: '#2563eb' }}>{row.d.amount}</div></div>}
              </td>
              <td style={{ padding: '5px 8px', verticalAlign: 'top' }}>
                {row.c && <div><div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>{row.c.label}</div><div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, color: '#059669' }}>{row.c.amount}</div></div>}
              </td>
            </tr>
          ))}
          {solde && (
            <tr style={{ background: soldeColor === 'green' ? '#ecfdf5' : '#eff6ff', borderTop: '2px solid #2563eb' }}>
              <td colSpan={2} style={{ padding: '5px 8px', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.8rem', color: soldeColor === 'green' ? '#059669' : '#2563eb', textAlign: 'center' }}>
                {soldeLabel || 'Solde'} : {solde}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export function GrilleT({ comptes }) {
  return <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', margin: '16px 0' }}>{comptes.map((c, i) => <CompteT key={i} {...c} />)}</div>;
}

// ─── Onglets de navigation ───────────────────────────────────────────────────
export function TabBar({ tabs, active, onChange }) {
  return (
    <div style={{
      display: 'flex', gap: 2, marginBottom: 28, background: '#f1f5f9',
      padding: 4, borderRadius: 10, flexWrap: 'wrap',
    }}>
      {tabs.map(t => (
        <button key={t.id} onClick={() => onChange(t.id)} style={{
          padding: '9px 18px', border: 'none', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600,
          fontFamily: 'Inter, sans-serif', borderRadius: 8,
          background: active === t.id ? '#fff' : 'transparent',
          color: active === t.id ? '#0f172a' : '#64748b',
          boxShadow: active === t.id ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.18s ease', whiteSpace: 'nowrap',
        }}>{t.label}</button>
      ))}
    </div>
  );
}

// ─── Layout wrapper théorie ──────────────────────────────────────────────────
export function TheoryLayout({ title, tag, tagLabel, meta, tabs, activeTab, onTabChange, children }) {
  return (
    <>
      <div className="topbar">
        <h2>{title}</h2>
        <div className="topbar-right">
          {tag && <span className={`tag ${tag}`}>{tagLabel}</span>}
          {meta && <span className="topbar-meta">{meta}</span>}
        </div>
      </div>

      <div className="content theory-content" style={{ maxWidth: 960 }}>
        {tabs && <TabBar tabs={tabs} active={activeTab} onChange={onTabChange} />}
        {children}
      </div>
    </>
  );
}
