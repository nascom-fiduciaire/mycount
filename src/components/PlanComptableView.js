import React, { useState, useMemo } from 'react';
import { Search, X, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { PLAN_COMPTABLE } from '../data/planComptable';

const CLASSES = [
  { num: '1', label: 'Actif',                   color: '#2563eb' },
  { num: '2', label: 'Passif',                  color: '#059669' },
  { num: '3', label: 'Produits',                color: '#059669' },
  { num: '4', label: 'Charges marchandises',    color: '#ea580c' },
  { num: '5', label: 'Charges personnel',       color: '#ea580c' },
  { num: '6', label: 'Autres charges',          color: '#ea580c' },
  { num: '7', label: 'Hors exploitation',       color: '#64748b' },
  { num: '8', label: 'Résultats exceptionnels', color: '#64748b' },
  { num: '9', label: 'Comptes de clôture',      color: '#a0aec0' },
];

function highlightText(text, search) {
  if (!search) return text;
  const idx = text.toLowerCase().indexOf(search.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark style={{ background: '#fff3b0', borderRadius: 2, padding: '0 2px' }}>
        {text.slice(idx, idx + search.length)}
      </mark>
      {text.slice(idx + search.length)}
    </>
  );
}

export default function PlanComptableView() {
  const [search, setSearch] = useState('');
  const [activeClass, setActiveClass] = useState('all');

  const entries = useMemo(() => Object.entries(PLAN_COMPTABLE).filter(([num, label]) => {
    const matchClass = activeClass === 'all' || num.startsWith(activeClass);
    const matchSearch = !search || num.includes(search) || label.toLowerCase().includes(search.toLowerCase());
    return matchClass && matchSearch;
  }), [search, activeClass]);

  const grouped = useMemo(() => {
    const g = {};
    entries.forEach(([num, label]) => {
      const cls = num[0];
      if (!g[cls]) g[cls] = [];
      g[cls].push([num, label]);
    });
    return g;
  }, [entries]);

  const total = Object.keys(PLAN_COMPTABLE).length;

  return (
    <>
      <div className="topbar">
        <h2>Plan comptable PME suisse</h2>
        <span className="topbar-meta">Référence SKV/swisco · {total} comptes</span>
      </div>

      <div className="content">

        {/* Bandeau info */}
        <div style={{ background: 'var(--blue-pale)', border: '1px solid var(--blue-pale2)', borderRadius: 'var(--radius)', padding: '11px 16px', marginBottom: 18, fontSize: '0.82rem', color: 'var(--text2)', lineHeight: 1.6 }}>
          <strong style={{ color: 'var(--blue)' }}>Référence officielle</strong> — Plan comptable PME suisse (SKV/swisco).
          Méthode : <strong>postes ouverts</strong> — Débiteurs <strong>1100</strong> / Créanciers <strong>2000</strong> systématiques.
          Paiements bancaires : compte <strong>1020 Banque</strong>.
        </div>

        {/* Recherche */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 14, alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: 1, maxWidth: 360 }}>
            <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', display: 'flex', color: 'var(--text4)' }}>
              <Search size={15} strokeWidth={1.8} />
            </span>
            <input
              type="text"
              placeholder="Rechercher un compte ou un numéro..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', padding: '8px 12px 8px 34px', border: '1px solid var(--border2)', borderRadius: 'var(--radius-sm)', fontSize: '0.83rem', outline: 'none', background: 'var(--white)', fontFamily: 'Inter, sans-serif', color: 'var(--text)' }}
              onFocus={e => e.target.style.borderColor = 'var(--blue-light)'}
              onBlur={e => e.target.style.borderColor = 'var(--border2)'}
            />
          </div>
          {search && (
            <button onClick={() => setSearch('')} style={{ padding: '7px 10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border2)', background: 'var(--white)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', color: 'var(--text3)' }}>
              <X size={13} strokeWidth={2} /> Effacer
            </button>
          )}
          <span style={{ fontSize: '0.76rem', color: 'var(--text3)', fontFamily: 'JetBrains Mono, monospace' }}>
            {entries.length} compte{entries.length > 1 ? 's' : ''}
          </span>
        </div>

        {/* Filtres */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
          <button onClick={() => setActiveClass('all')} style={{ padding: '5px 12px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 600, border: '1px solid var(--border2)', cursor: 'pointer', fontFamily: 'Inter, sans-serif', background: activeClass === 'all' ? 'var(--blue)' : 'var(--white)', color: activeClass === 'all' ? '#fff' : 'var(--text2)', transition: 'all 0.12s' }}>
            Toutes
          </button>
          {CLASSES.map(cl => (
            <button key={cl.num} onClick={() => setActiveClass(activeClass === cl.num ? 'all' : cl.num)}
              style={{ padding: '5px 12px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 600, border: `1px solid ${activeClass === cl.num ? cl.color : 'var(--border2)'}`, cursor: 'pointer', fontFamily: 'Inter, sans-serif', background: activeClass === cl.num ? cl.color : 'var(--white)', color: activeClass === cl.num ? '#fff' : 'var(--text2)', transition: 'all 0.12s' }}>
              {cl.num} — {cl.label}
            </button>
          ))}
        </div>

        {/* Tableaux par classe */}
        {Object.keys(grouped).sort().map(cls => {
          const clsInfo = CLASSES.find(c => c.num === cls);
          const clsEntries = grouped[cls];

          return (
            <div key={cls} style={{ marginBottom: 22 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, paddingBottom: 6, borderBottom: `2px solid ${clsInfo?.color || 'var(--border)'}` }}>
                <span style={{ width: 26, height: 26, borderRadius: '50%', background: clsInfo?.color, color: '#fff', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{cls}</span>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)' }}>Classe {cls} — {clsInfo?.label}</span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text3)', fontFamily: 'JetBrains Mono, monospace', background: 'var(--surface2)', padding: '2px 7px', borderRadius: 10, border: '1px solid var(--border)' }}>
                  {clsEntries.length} compte{clsEntries.length > 1 ? 's' : ''}
                </span>
              </div>
              <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.83rem' }}>
                  <thead>
                    <tr style={{ background: clsInfo?.color || 'var(--blue)' }}>
                      <th style={{ padding: '8px 14px', color: '#fff', textAlign: 'left', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.05em', textTransform: 'uppercase', width: '12%' }}>N° Compte</th>
                      <th style={{ padding: '8px 14px', color: '#fff', textAlign: 'left', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Intitulé</th>
                      <th style={{ padding: '8px 14px', color: 'rgba(255,255,255,0.75)', textAlign: 'left', fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.05em', textTransform: 'uppercase', width: '14%' }}>Augmente au</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clsEntries.map(([num, label], i) => {
                      const isActif  = cls === '1';
                      const isPassif = cls === '2' || cls === '8' || cls === '9';
                      const isProduit= cls === '3' || cls === '7';
                      const isCharge = ['4','5','6'].includes(cls);
                      const augmente = isActif ? 'Débit' : isPassif ? 'Crédit' : isProduit ? 'Crédit' : isCharge ? 'Débit' : '—';
                      const augColor = augmente === 'Débit' ? '#2563eb' : augmente === 'Crédit' ? '#059669' : '#a0aec0';

                      return (
                        <tr key={num} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--surface2)' }}>
                          <td style={{ padding: '7px 14px', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: clsInfo?.color, fontSize: '0.85rem', borderBottom: '1px solid var(--border)' }}>
                            {num}
                          </td>
                          <td style={{ padding: '7px 14px', color: 'var(--text2)', borderBottom: '1px solid var(--border)', lineHeight: 1.4 }}>
                            {search ? highlightText(label, search) : label}
                          </td>
                          <td style={{ padding: '7px 14px', borderBottom: '1px solid var(--border)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: augColor, fontWeight: 700, fontSize: '0.78rem', fontFamily: 'JetBrains Mono, monospace' }}>
                              {augmente === 'Débit'  && <TrendingUp  size={13} strokeWidth={2} color={augColor} />}
                              {augmente === 'Crédit' && <TrendingDown size={13} strokeWidth={2} color={augColor} />}
                              {augmente === '—'      && <Minus size={13} strokeWidth={2} color={augColor} />}
                              {augmente}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}

        {entries.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text3)', fontSize: '0.86rem' }}>
            Aucun compte trouvé pour « {search} »
          </div>
        )}
      </div>
    </>
  );
}
