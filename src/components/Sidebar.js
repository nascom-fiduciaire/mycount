import React, { useState } from 'react';
import {
  LayoutDashboard, BookOpen, PenSquare, Percent, Banknote,
  CalendarClock, ChevronRight, FileText, Table2,
  ClipboardList, Scale, Package, TrendingUp,
  Building2, BarChart3, Calculator, PieChart, Target
} from 'lucide-react';
import { MODULES } from '../data/modules';
import { exerciseGroups, exercises } from '../data/exercises/index';

// ─── Icônes théorie par label ─────────────────────────────────────────────────
const THEORY_ICONS = {
  'Prescriptions légales':       <Scale size={13} strokeWidth={1.8} />,
  'Fondements':                  <BookOpen size={13} strokeWidth={1.8} />,
  'Mécanique comptable':         <PenSquare size={13} strokeWidth={1.8} />,
  'TVA suisse':                  <Percent size={13} strokeWidth={1.8} />,
  'Salaires & charges sociales': <Banknote size={13} strokeWidth={1.8} />,
  'Marchandises & stocks':       <Package size={13} strokeWidth={1.8} />,
  'Bouclement annuel':           <CalendarClock size={13} strokeWidth={1.8} />,
  'Hors exploitation':              <TrendingUp size={13} strokeWidth={1.8} />,
  'Constitution & capital':         <Building2 size={13} strokeWidth={1.8} />,
  'Dividendes & réserves':          <BarChart3 size={13} strokeWidth={1.8} />,
  'Formes juridiques':              <Building2 size={13} strokeWidth={1.8} />,
  'Fondation SA':                   <Building2 size={13} strokeWidth={1.8} />,
  'Distribution bénéfice':          <BarChart3 size={13} strokeWidth={1.8} />,
  'Augmentation capital':           <TrendingUp size={13} strokeWidth={1.8} />,
  'Assainissement':                 <Scale size={13} strokeWidth={1.8} />,
  'Fusion & Scission':              <Building2 size={13} strokeWidth={1.8} />,
  'Liquidation':                    <ClipboardList size={13} strokeWidth={1.8} />,
  'Retraitements du bilan':         <FileText size={13} strokeWidth={1.8} />,
  'Analyse structurelle':           <BarChart3 size={13} strokeWidth={1.8} />,
  'Fonds de roulement & BFR':       <TrendingUp size={13} strokeWidth={1.8} />,
  'Ratios de liquidité':            <PieChart size={13} strokeWidth={1.8} />,
  'Ratios de rentabilité':          <TrendingUp size={13} strokeWidth={1.8} />,
  'Endettement & structure':        <Scale size={13} strokeWidth={1.8} />,
  'Flux de trésorerie':             <Banknote size={13} strokeWidth={1.8} />,
  'Seuil de rentabilité':           <Target size={13} strokeWidth={1.8} />,
  'Évaluation d\'entreprise':       <Calculator size={13} strokeWidth={1.8} />,
  'Choix d\'investissement':        <TrendingUp size={13} strokeWidth={1.8} />,
};

// ─── Icônes exercices par id ──────────────────────────────────────────────────
const EXERCISE_ICONS = {
  'base-journal':    <PenSquare size={13} strokeWidth={1.8} />,
  'tva-calculs':     <Percent size={13} strokeWidth={1.8} />,
  'tva-ecritures':   <FileText size={13} strokeWidth={1.8} />,
  'salaires-calcul': <Banknote size={13} strokeWidth={1.8} />,
  'marchandises':    <Package size={13} strokeWidth={1.8} />,
  'bouclement':           <CalendarClock size={13} strokeWidth={1.8} />,
  'societes-ecritures':   <Building2 size={13} strokeWidth={1.8} />,
  'societes-qcm':         <Building2 size={13} strokeWidth={1.8} />,
  'analyse-calculs':      <BarChart3 size={13} strokeWidth={1.8} />,
  'analyse-qcm':          <BarChart3 size={13} strokeWidth={1.8} />,
  'investissements':       <TrendingUp size={13} strokeWidth={1.8} />,
};

const iconStyle = { display: 'flex', alignItems: 'center', flexShrink: 0 };

// ─── Sélecteur de module ──────────────────────────────────────────────────────
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

// ─── Composant principal ──────────────────────────────────────────────────────
export default function Sidebar({ view, setView, activeTheory, setActiveTheory, activeGroup, setActiveGroup, scores, activeModule, setActiveModule }) {

  // Récupérer le module actif
  const mod = MODULES.find(m => m.id === activeModule) || MODULES[0];
  const theoryGroups = mod.theoryGroups;
  const moduleExerciseGroups = exerciseGroups.filter(g => (mod.exerciseIds || []).includes(g.id));
  const moduleExercises = exercises.filter(e => (mod.exerciseIds || []).includes(e.group));

  const totalEx = moduleExercises.length;
  const doneEx = Object.keys(scores).filter(k => moduleExercises.find(e => e.id === k)).length;

  const [open, setOpen] = useState({});
  const toggle = (key) => setOpen(p => ({ ...p, [key]: !p[key] }));

  return (
    <div className="sidebar">

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

      {/* Sélecteur de module */}
      <ModuleSwitcher activeModule={activeModule} setActiveModule={setActiveModule} setView={setView} />

      {/* Navigation principale */}
      <div className="sidebar-section">
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

      {/* Théorie — dynamique selon le module */}
      <div className="sidebar-section">
        <div className="sidebar-section-title">Théorie</div>
        {theoryGroups.map(group => {
          const hasChapters = (group.chapters || []).length > 0;

          // Groupe "special" sans chapitres → lien direct
          if (group.special && !hasChapters) {
            const isActive = view === group.special;
            return (
              <button
                key={group.label}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
                onClick={() => setView(group.special)}
              >
                <span style={iconStyle}>
                  {THEORY_ICONS[group.label] || <BookOpen size={13} strokeWidth={1.8} />}
                </span>
                <span style={{ flex: 1 }}>{group.label}</span>
              </button>
            );
          }

          // Groupe avec chapitres → accordion
          const key = `theory-${group.label}`;
          const isOpen = !!open[key];
          const groupActive = (view === 'theory' && group.chapters?.some(c => c.id === activeTheory));

          return (
            <div key={group.label}>
              <button
                onClick={() => toggle(key)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8, width: '100%',
                  background: groupActive && !isOpen ? 'rgba(255,255,255,0.08)' : 'none',
                  border: 'none', padding: '7px 10px', borderRadius: 5, cursor: 'pointer',
                  color: isOpen ? '#fff' : 'rgba(255,255,255,0.6)',
                  fontSize: '0.77rem', fontWeight: isOpen ? 600 : 400,
                  fontFamily: 'Inter, sans-serif', transition: 'all 0.12s', textAlign: 'left',
                }}
              >
                <span style={{ ...iconStyle, color: isOpen ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.35)' }}>
                  {THEORY_ICONS[group.label] || <BookOpen size={13} strokeWidth={1.8} />}
                </span>
                <span style={{ flex: 1 }}>{group.label}</span>
                <span style={{ fontSize: '0.58rem', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)', padding: '1px 5px', borderRadius: 10, fontFamily: 'JetBrains Mono, monospace', marginRight: 3 }}>
                  {group.chapters?.length || 0}
                </span>
                <span style={{ ...iconStyle, color: 'rgba(255,255,255,0.3)', transition: 'transform 0.18s', transform: isOpen ? 'rotate(90deg)' : 'none' }}>
                  <ChevronRight size={12} strokeWidth={2} />
                </span>
              </button>

              {isOpen && (
                <div style={{ paddingLeft: 6, marginBottom: 2 }}>
                  {(group.chapters || []).map(ch => (
                    <button
                      key={ch.id}
                      className={`sidebar-item ${view === 'theory' && activeTheory === ch.id ? 'active' : ''}`}
                      onClick={() => { setView('theory'); setActiveTheory(ch.id); }}
                      style={{ paddingLeft: 14, fontSize: '0.74rem' }}
                    >
                      <span style={{ ...iconStyle, opacity: 0.5 }}><FileText size={12} strokeWidth={1.8} /></span>
                      <span style={{ flex: 1 }}>{ch.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Exercices — filtrés par module */}
      {moduleExerciseGroups.length > 0 && (
        <div className="sidebar-section">
          <div className="sidebar-section-title">Exercices</div>
          {moduleExerciseGroups.map(g => {
            const gEx = moduleExercises.filter(e => e.group === g.id);
            const gDone = gEx.filter(e => scores[e.id]).length;
            const isActive = view === 'exercises' && activeGroup === g.id;
            return (
              <button
                key={g.id}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
                onClick={() => { setView('exercises'); setActiveGroup(g.id); }}
              >
                <span style={{ ...iconStyle, opacity: 0.7 }}>
                  {EXERCISE_ICONS[g.id] || <PenSquare size={13} strokeWidth={1.8} />}
                </span>
                <span style={{ flex: 1 }}>{g.label}</span>
                <span className="badge">{gDone}/{gEx.length}</span>
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
}