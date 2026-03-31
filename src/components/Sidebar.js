import React from 'react';
import {
  LayoutDashboard, BookOpen, PenSquare, Percent, Banknote,
  CalendarClock, FileText, Table2,
  ClipboardList, Scale, Package, TrendingUp, RotateCcw,
  Building2, BarChart3, Calculator, PieChart, Target, Award,
  CheckCircle2, Circle
} from 'lucide-react';
import { MODULES } from '../data/modules';
import { exercises } from '../data/exercises/index';

// ---- Icon maps ----
const THEORY_ICONS = {
  'Prescriptions légales':       <Scale size={13} strokeWidth={1.8} />,
  'Fondements':                  <BookOpen size={13} strokeWidth={1.8} />,
  'TVA suisse':                  <Percent size={13} strokeWidth={1.8} />,
  'Salaires & charges sociales': <Banknote size={13} strokeWidth={1.8} />,
  'Marchandises & stocks':       <Package size={13} strokeWidth={1.8} />,
  'Bouclement annuel':           <CalendarClock size={13} strokeWidth={1.8} />,
  'Hors exploitation':           <TrendingUp size={13} strokeWidth={1.8} />,
  'Formes juridiques':           <Building2 size={13} strokeWidth={1.8} />,
  'Fondation SA':                <Building2 size={13} strokeWidth={1.8} />,
  'Distribution bénéfice':       <BarChart3 size={13} strokeWidth={1.8} />,
  'Augmentation capital':        <TrendingUp size={13} strokeWidth={1.8} />,
  'Assainissement':              <Scale size={13} strokeWidth={1.8} />,
  'Fusion & Scission':           <Building2 size={13} strokeWidth={1.8} />,
  'Liquidation':                 <ClipboardList size={13} strokeWidth={1.8} />,
  'Retraitements du bilan':      <FileText size={13} strokeWidth={1.8} />,
  'Analyse structurelle':        <BarChart3 size={13} strokeWidth={1.8} />,
  'Fonds de roulement & BFR':    <TrendingUp size={13} strokeWidth={1.8} />,
  'Ratios de liquidité':         <PieChart size={13} strokeWidth={1.8} />,
  'Ratios de rentabilité':       <TrendingUp size={13} strokeWidth={1.8} />,
  'Endettement & structure':     <Scale size={13} strokeWidth={1.8} />,
  'Flux de trésorerie':          <Banknote size={13} strokeWidth={1.8} />,
  'Seuil de rentabilité':        <Target size={13} strokeWidth={1.8} />,
  'Évaluation d\'entreprise':    <Calculator size={13} strokeWidth={1.8} />,
  'Choix d\'investissement':     <TrendingUp size={13} strokeWidth={1.8} />,
};

const EVAL_ICONS = {
  'RotateCcw': <RotateCcw size={13} strokeWidth={1.8} />,
  'Award':     <Award size={13} strokeWidth={1.8} />,
};

const iconStyle = { display: 'flex', alignItems: 'center', flexShrink: 0 };

// ---- Module Switcher ----
function ModuleSwitcher({ activeModule, setActiveModule, setView }) {
  return (
    <div style={{ padding: '12px 13px 8px', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 4 }}>
      <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8, paddingLeft: 2, fontWeight: 600 }}>Module</div>
      <div style={{ display: 'flex', gap: 6 }}>
        {MODULES.map(mod => {
          const Icon = mod.icon;
          const isActive = activeModule === mod.id;
          return (
            <button
              key={mod.id}
              onClick={() => { setActiveModule(mod.id); setView('dashboard'); }}
              title={mod.label}
              style={{
                flex: 1, padding: '8px 4px', borderRadius: 8, border: 'none', cursor: 'pointer',
                background: isActive ? 'rgba(37,99,235,0.3)' : 'rgba(255,255,255,0.04)',
                boxShadow: isActive ? 'inset 0 0 0 1px rgba(59,130,246,0.25)' : 'none',
                transition: 'all 0.18s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
              }}
            >
              <Icon size={15} strokeWidth={isActive ? 2 : 1.6} color={isActive ? '#93bbfc' : 'rgba(255,255,255,0.35)'} />
              <span style={{ fontSize: '0.57rem', fontWeight: isActive ? 700 : 500, color: isActive ? '#fff' : 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif', lineHeight: 1.2, textAlign: 'center', letterSpacing: '0.01em' }}>{mod.short}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ---- Helper: chapter completion status ----
function getChapterStatus(group, scores) {
  const groupIds = group.exerciseGroups || [];
  if (groupIds.length === 0) return { done: 0, total: 0, status: 'none' };
  const chapterExercises = exercises.filter(e => groupIds.includes(e.group));
  const total = chapterExercises.length;
  const done = chapterExercises.filter(e => scores[e.id]).length;
  if (total === 0) return { done: 0, total: 0, status: 'none' };
  if (done === total) return { done, total, status: 'complete' };
  if (done > 0) return { done, total, status: 'partial' };
  return { done: 0, total, status: 'empty' };
}

// ---- Strip number prefix for icon lookup ----
function stripNumber(label) {
  return label.replace(/^\d+\.\s*/, '');
}

// ---- Main Component ----
export default function Sidebar({
  view, setView, activeTheory, setActiveTheory, activeGroup, setActiveGroup,
  scores, activeModule, setActiveModule, activeChapter, setActiveChapter, className,
}) {
  const mod = MODULES.find(m => m.id === activeModule) || MODULES[0];
  const theoryGroups = mod.theoryGroups;

  // Total exercises for this module
  const moduleExercises = exercises.filter(e => (mod.exerciseIds || []).includes(e.group));
  const totalEx = moduleExercises.length;
  const doneEx = Object.keys(scores).filter(k => moduleExercises.find(e => e.id === k)).length;

  return (
    <div className={`sidebar ${className || ''}`}>

      {/* Logo */}
      <div className="sidebar-logo">
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <img src="/logo.svg" alt="MyCount" style={{ width: 32, height: 32, borderRadius: 9, flexShrink: 0, boxShadow: '0 2px 8px rgba(37,99,235,0.2)' }} />
          <div>
            <h1>MyCount</h1>
            <p>Comptabilité fiduciaire · CH</p>
          </div>
        </div>
      </div>

      {/* Module Switcher */}
      <ModuleSwitcher activeModule={activeModule} setActiveModule={setActiveModule} setView={setView} />

      {/* Mon parcours */}
      <div className="sidebar-section">
        <div className="sidebar-section-title">Mon parcours</div>
        <button className={`sidebar-item ${view === 'dashboard' ? 'active' : ''}`} onClick={() => setView('dashboard')}>
          <span style={iconStyle}><LayoutDashboard size={14} strokeWidth={1.8} /></span>
          <span style={{ flex: 1 }}>Tableau de bord</span>
          <span className="badge">{doneEx}/{totalEx}</span>
        </button>
        <button className={`sidebar-item ${view === 'plan-comptable' ? 'active' : ''}`} onClick={() => setView('plan-comptable')}>
          <span style={iconStyle}><Table2 size={14} strokeWidth={1.8} /></span>
          <span style={{ flex: 1 }}>Plan comptable</span>
        </button>
      </div>

      {/* Chapitres */}
      <div className="sidebar-section">
        <div className="sidebar-section-title">Chapitres</div>
        {theoryGroups.map(group => {
          const { done, total, status } = getChapterStatus(group, scores);
          const isActive = view === 'chapter' && activeChapter && activeChapter.special === group.special;
          const cleanLabel = stripNumber(group.label);

          // Status icon
          let statusIcon;
          if (status === 'complete') {
            statusIcon = <CheckCircle2 size={12} color="#22c55e" strokeWidth={2.2} />;
          } else if (status === 'partial') {
            statusIcon = <CheckCircle2 size={12} color="#3b82f6" strokeWidth={2.2} />;
          } else {
            statusIcon = <Circle size={12} color="rgba(255,255,255,0.2)" strokeWidth={1.8} />;
          }

          return (
            <button
              key={group.special}
              className={`sidebar-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveChapter(group)}
            >
              <span style={iconStyle}>
                {THEORY_ICONS[cleanLabel] || <BookOpen size={13} strokeWidth={1.8} />}
              </span>
              <span style={{ flex: 1 }}>{group.label}</span>
              {total > 0 && (
                <span className="badge">{done}/{total}</span>
              )}
              <span style={{ ...iconStyle, marginLeft: 2 }}>{statusIcon}</span>
            </button>
          );
        })}
      </div>

      {/* Evaluation (only if module has it) */}
      {mod.evaluation && mod.evaluation.length > 0 && (
        <div className="sidebar-section">
          <div className="sidebar-section-title">Evaluation</div>
          {mod.evaluation.map(ev => {
            const isActive = view === 'exercises' && activeGroup === ev.id;
            return (
              <button
                key={ev.id}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
                onClick={() => { setView('exercises'); setActiveGroup(ev.id); }}
              >
                <span style={iconStyle}>
                  {EVAL_ICONS[ev.icon] || <PenSquare size={13} strokeWidth={1.8} />}
                </span>
                <span style={{ flex: 1 }}>{ev.label}</span>
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
}
