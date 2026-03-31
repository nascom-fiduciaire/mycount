import React from 'react';
import {
  TrendingUp, CheckCircle2, Circle, BookOpen,
  PenSquare, Percent, FileText, Banknote, CalendarClock,
  ChevronRight, Award, Download, RotateCcw,
  Scale, Package, Building2, BarChart3, Lock
} from 'lucide-react';
import { exercises, exerciseGroups } from '../data/exercises/index';
import { MODULES } from '../data/modules';

const tagClass  = { base: 'tag-base', tva: 'tag-tva', salaires: 'tag-salaires', bouclement: 'tag-bouclement', societes: 'tag-base', analyse: 'tag-base' };
const tagLabel  = { base: 'Base', tva: 'TVA', salaires: 'Salaires', bouclement: 'Clôture', societes: 'Sociétés', analyse: 'Analyse' };

const EXERCISE_ICONS = {
  'base-journal':       <PenSquare size={18} strokeWidth={1.6} color="#2563eb" />,
  'tva-calculs':        <Percent size={18} strokeWidth={1.6} color="#2563eb" />,
  'tva-ecritures':      <FileText size={18} strokeWidth={1.6} color="#2563eb" />,
  'salaires-calcul':    <Banknote size={18} strokeWidth={1.6} color="#059669" />,
  'salaires-ecritures': <FileText size={18} strokeWidth={1.6} color="#059669" />,
  'marchandises':       <Package size={18} strokeWidth={1.6} color="#2563eb" />,
  'bouclement':         <CalendarClock size={18} strokeWidth={1.6} color="#ea580c" />,
  'societes-ecritures': <Building2 size={18} strokeWidth={1.6} color="#2563eb" />,
  'societes-qcm':       <Building2 size={18} strokeWidth={1.6} color="#2563eb" />,
  'analyse-calculs':    <BarChart3 size={18} strokeWidth={1.6} color="#2563eb" />,
  'analyse-qcm':        <BarChart3 size={18} strokeWidth={1.6} color="#2563eb" />,
  'investissements':     <TrendingUp size={18} strokeWidth={1.6} color="#2563eb" />,
  'revision':            <RotateCcw size={18} strokeWidth={1.6} color="#7c3aed" />,
  'examen':              <Award size={18} strokeWidth={1.6} color="#7c3aed" />,
};

const THEORY_ICONS = {
  prescriptions:       <Scale size={16} strokeWidth={1.6} color="#7c3aed" />,
  fondaments:          <BookOpen size={16} strokeWidth={1.6} color="#2563eb" />,
  tva:                 <Percent size={16} strokeWidth={1.6} color="#2563eb" />,
  salaires:            <Banknote size={16} strokeWidth={1.6} color="#059669" />,
  marchandises:        <Package size={16} strokeWidth={1.6} color="#ea580c" />,
  bouclement:          <CalendarClock size={16} strokeWidth={1.6} color="#ea580c" />,
  'hors-exploitation': <TrendingUp size={16} strokeWidth={1.6} color="#2563eb" />,
  'soc-formes':         <Building2 size={16} strokeWidth={1.6} color="#2563eb" />,
  'soc-fondation':      <Building2 size={16} strokeWidth={1.6} color="#2563eb" />,
  'soc-distribution':   <BarChart3 size={16} strokeWidth={1.6} color="#2563eb" />,
  'soc-augmentation':   <TrendingUp size={16} strokeWidth={1.6} color="#2563eb" />,
  'soc-assainissement': <Scale size={16} strokeWidth={1.6} color="#ea580c" />,
  'soc-fusion':         <Building2 size={16} strokeWidth={1.6} color="#2563eb" />,
  'soc-liquidation':      <FileText size={16} strokeWidth={1.6} color="#ea580c" />,
  'anal-retraitements':   <FileText size={16} strokeWidth={1.6} color="#2563eb" />,
  'anal-structure':       <BarChart3 size={16} strokeWidth={1.6} color="#2563eb" />,
  'anal-fdr':             <TrendingUp size={16} strokeWidth={1.6} color="#2563eb" />,
  'anal-liquidite':       <Circle size={16} strokeWidth={1.6} color="#2563eb" />,
  'anal-rentabilite':     <TrendingUp size={16} strokeWidth={1.6} color="#059669" />,
  'anal-endettement':     <Scale size={16} strokeWidth={1.6} color="#ea580c" />,
  'anal-flux':            <BookOpen size={16} strokeWidth={1.6} color="#2563eb" />,
  'anal-seuil':           <Award size={16} strokeWidth={1.6} color="#ea580c" />,
  'anal-evaluation':      <BarChart3 size={16} strokeWidth={1.6} color="#059669" />,
  constitution:        <Building2 size={16} strokeWidth={1.6} color="#2563eb" />,
  dividendes:          <BarChart3 size={16} strokeWidth={1.6} color="#2563eb" />,
};

function exportScores(scores) {
  const data = {
    export_date: new Date().toISOString().split('T')[0],
    application: 'MyCount',
    total_completes: Object.keys(scores).length,
    total_corrects: Object.values(scores).filter(s => s.score >= 0.99).length,
    scores: Object.entries(scores).map(([id, s]) => ({
      exercice: id, groupe: s.group,
      score: Math.round(s.score * 100) + '%', correct: s.score >= 0.99,
    })),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `mycount_scores_${data.export_date}.json`; a.click();
  URL.revokeObjectURL(url);
}

// ─── Coming soon placeholder ──────────────────────────────────────────────────
function ComingSoon({ mod }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px 40px', textAlign: 'center' }}>
      <div style={{ width: 72, height: 72, borderRadius: 18, background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: '0 4px 12px rgba(37,99,235,0.08)' }}>
        <mod.icon size={32} strokeWidth={1.5} color="#2563eb" />
      </div>
      <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px', letterSpacing: '-0.02em' }}>{mod.label}</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 16px', background: '#f1f5f9', borderRadius: 20, marginBottom: 20, border: '1px solid #e2e8f0' }}>
        <Lock size={13} strokeWidth={2} color="#94a3b8" />
        <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>En cours de développement</span>
      </div>
      <p style={{ fontSize: '0.87rem', color: '#94a3b8', maxWidth: 420, lineHeight: 1.75, margin: 0 }}>
        Ce module sera disponible prochainement. Le contenu est en cours de préparation et sera ajouté progressivement.
      </p>
    </div>
  );
}

// ─── Dashboard principal ──────────────────────────────────────────────────────
export default function Dashboard({ scores, setView, setActiveGroup, setActiveTheory, onReset, activeModule }) {
  const mod = MODULES.find(m => m.id === activeModule) || MODULES[0];

  // Si le module est "coming soon"
  if (mod.comingSoon) return <><div className="topbar"><h2>{mod.label}</h2></div><ComingSoon mod={mod} /></>;

  // Exercices du module
  const modExercises = exercises.filter(e => (mod.exerciseIds || []).includes(e.group));
  const modGroups = exerciseGroups.filter(g => (mod.exerciseIds || []).includes(g.id));
  const total   = modExercises.length;
  const done    = Object.keys(scores).filter(k => modExercises.find(e => e.id === k)).length;
  const correct = Object.values(scores).filter((s, i) => {
    const id = Object.keys(scores)[i];
    return s.score >= 0.99 && modExercises.find(e => e.id === id);
  }).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <>
      <div className="topbar">
        <h2>Tableau de bord — {mod.label}</h2>
        <div className="topbar-right">
          <span className="topbar-meta">Plan comptable PME suisse · Postes ouverts</span>
          {done > 0 && <>
            <button onClick={() => exportScores(scores)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 13px', borderRadius: 7, border: '1px solid var(--border)', background: 'var(--white)', cursor: 'pointer', fontSize: '0.76rem', color: 'var(--text2)', fontFamily: 'Inter, sans-serif', fontWeight: 500, transition: 'all 0.15s' }}>
              <Download size={13} strokeWidth={2} /> Exporter
            </button>
            <button onClick={onReset} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 13px', borderRadius: 7, border: '1px solid var(--border)', background: 'var(--white)', cursor: 'pointer', fontSize: '0.76rem', color: 'var(--text3)', fontFamily: 'Inter, sans-serif', fontWeight: 500, transition: 'all 0.15s' }}>
              <RotateCcw size={13} strokeWidth={2} /> Reset
            </button>
          </>}
        </div>
      </div>

      <div className="content">
        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <TrendingUp size={19} strokeWidth={1.8} color="#2563eb" />
              </div>
              <div><div className="stat-value">{pct}%</div><div className="stat-label">Progression</div></div>
            </div>
            <div className="progress-bar"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
          </div>
          <div className="stat-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Circle size={19} strokeWidth={1.8} color="#2563eb" />
              </div>
              <div><div className="stat-value">{done}</div><div className="stat-label">Complétés</div></div>
            </div>
          </div>
          <div className="stat-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CheckCircle2 size={19} strokeWidth={1.8} color="#059669" />
              </div>
              <div><div className="stat-value" style={{ color: '#059669' }}>{correct}</div><div className="stat-label">Corrects</div></div>
            </div>
          </div>
          <div className="stat-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #fff7ed, #fed7aa)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Award size={19} strokeWidth={1.8} color="#ea580c" />
              </div>
              <div><div className="stat-value" style={{ color: '#ea580c' }}>{total - done}</div><div className="stat-label">Restants</div></div>
            </div>
          </div>
        </div>

        {/* Exercices */}
        {modGroups.length > 0 && (
          <>
            <div className="section-title">Exercices pratiques</div>
            <div className="chapter-grid" style={{ marginBottom: 28 }}>
              {modGroups.map(g => {
                const gEx = modExercises.filter(e => e.group === g.id);
                const gDone = gEx.filter(e => scores[e.id]).length;
                const gCorrect = gEx.filter(e => scores[e.id]?.score >= 0.99).length;
                return (
                  <div key={g.id} className="chapter-card" onClick={() => { setActiveGroup(g.id); setView('exercises'); }}>
                    <div className="chapter-card-header">
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #f0f4fa, #e2e8f0)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {EXERCISE_ICONS[g.id]}
                      </div>
                      <span className="chapter-card-title">{g.label}</span>
                    </div>
                    <div className="chapter-card-desc">{g.description}</div>
                    <div className="chapter-card-footer">
                      <span className={`tag ${tagClass[g.tag]}`}>{tagLabel[g.tag]}</span>
                      <span className="chapter-card-score">{gCorrect}/{gEx.length}</span>
                      <ChevronRight size={14} strokeWidth={1.8} color="#a0aec0" style={{ marginLeft: 4 }} />
                    </div>
                    <div className="progress-bar" style={{ marginTop: 8 }}>
                      <div className="progress-fill" style={{ width: `${gEx.length > 0 ? (gDone / gEx.length) * 100 : 0}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Cours théoriques */}
        {mod.theoryGroups.length > 0 && (
          <>
            <div className="section-title">Cours théoriques</div>
            <div className="chapter-grid">
              {mod.theoryGroups.map(group => {
                if (group.special) {
                  const meta = mod.dashboardMeta[group.special];
                  if (!meta) return null;
                  return (
                    <div key={group.special} className="chapter-card" onClick={() => setView(group.special)}>
                      <div className="chapter-card-header">
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #f0f4fa, #e2e8f0)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          {THEORY_ICONS[group.special]}
                        </div>
                        <span className="chapter-card-title">{group.label}</span>
                      </div>
                      <div className="chapter-card-desc">{meta.desc}</div>
                      <div className="chapter-card-footer">
                        <span className={`tag ${meta.tag}`}>{meta.label}</span>
                        <ChevronRight size={14} strokeWidth={1.8} color="#a0aec0" style={{ marginLeft: 'auto' }} />
                      </div>
                    </div>
                  );
                }
                return (group.chapters || []).map(ch => (
                  <div key={ch.id} className="chapter-card" onClick={() => { setActiveTheory(ch.id); setView('theory'); }}>
                    <div className="chapter-card-header">
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #f0f4fa, #e2e8f0)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <BookOpen size={16} strokeWidth={1.6} color="#2563eb" />
                      </div>
                      <span className="chapter-card-title">{ch.title}</span>
                    </div>
                    <div className="chapter-card-footer">
                      <span className="tag tag-base">Base</span>
                      <ChevronRight size={14} strokeWidth={1.8} color="#a0aec0" style={{ marginLeft: 'auto' }} />
                    </div>
                  </div>
                ));
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}