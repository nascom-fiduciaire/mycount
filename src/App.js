import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import TheoryView from './components/TheoryView';
import ExerciseView from './components/ExerciseView';
import Dashboard from './components/Dashboard';
import PlanComptableView from './components/PlanComptableView';
import FichesSalaireView from './components/FichesSalaireView';
import ArretsMaladieView from './components/ArretsMaladieView';
import MarchandisesView from './components/MarchandisesView';
import SalairesView from './components/SalairesView';
import TVAView from './components/TVAView';
import FondamentsView from './components/FondamentsView';
import PrescriptionsView from './components/PrescriptionsView';
import BouclementView from './components/BouclementView';
import HorsExploitationView from './components/HorsExploitationView';
import { SocFormesView, SocFondationView, SocDistributionView, SocAugmentationView, SocAssainissementView, SocFusionView, SocLiquidationView } from './components/SocietesView';
import { AnalRetraitementsView, AnalStructureView, AnalFDRView, AnalLiquiditeView, AnalRentabiliteView, AnalEndettementView, AnalFluxView, AnalSeuilView, AnalEvaluationView, AnalInvestissementsView } from './components/AnalyseView';

const STORAGE_KEY = 'mycount_scores_v1';
const MODULE_KEY  = 'mycount_module_v1';

function loadScores() {
  try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : {}; } catch { return {}; }
}
function saveScores(scores) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(scores)); } catch {}
}

export default function App() {
  const [view,         setView]         = useState('dashboard');
  const [activeTheory, setActiveTheory] = useState('01-introduction');
  const [activeGroup,  setActiveGroup]  = useState('base-journal');
  const [activeModule, setActiveModule] = useState(() => {
    try { return localStorage.getItem(MODULE_KEY) || 'generale'; } catch { return 'generale'; }
  });
  const [scores, setScores] = useState(loadScores);
  const [showLanding, setShowLanding] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => { saveScores(scores); }, [scores]);
  useEffect(() => {
    try { localStorage.setItem(MODULE_KEY, activeModule); } catch {}
  }, [activeModule]);

  const scrollTop        = () => { if (scrollRef.current) scrollRef.current.scrollTop = 0; };
  const closeSidebar     = () => setSidebarOpen(false);
  const handleSetView    = (v)  => { setView(v);          closeSidebar(); setTimeout(scrollTop, 10); };
  const handleSetTheory  = (id) => { setActiveTheory(id); closeSidebar(); setTimeout(scrollTop, 10); };
  const handleSetGroup   = (id) => { setActiveGroup(id);  closeSidebar(); setTimeout(scrollTop, 10); };
  const handleSetModule  = (id) => { setActiveModule(id); setView('dashboard'); closeSidebar(); setTimeout(scrollTop, 10); };

  const handleResetScores = () => {
    if (window.confirm('Remettre tous les scores à zéro ?')) {
      setScores({});
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  if (showLanding) {
    return (
      <LandingPage
        onStart={() => setShowLanding(false)}
        onSelectModule={(id) => { handleSetModule(id); setShowLanding(false); }}
      />
    );
  }

  return (
    <div className="app">
      {/* Bouton hamburger mobile */}
      <button className="hamburger" onClick={() => setSidebarOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>
      {/* Overlay mobile */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar} />}
      <Sidebar
        view={view}                 setView={handleSetView}
        activeTheory={activeTheory} setActiveTheory={handleSetTheory}
        activeGroup={activeGroup}   setActiveGroup={handleSetGroup}
        activeModule={activeModule} setActiveModule={handleSetModule}
        scores={scores}
        className={sidebarOpen ? 'open' : ''}
      />
      <div className="main" ref={scrollRef}>
        {view === 'dashboard'         && <Dashboard scores={scores} setView={handleSetView} setActiveGroup={handleSetGroup} setActiveTheory={handleSetTheory} onReset={handleResetScores} activeModule={activeModule} />}
        {view === 'theory'            && <TheoryView activeTheory={activeTheory} />}
        {view === 'exercises'         && <ExerciseView activeGroup={activeGroup} setActiveGroup={handleSetGroup} scores={scores} setScores={setScores} />}
        {view === 'plan-comptable'    && <PlanComptableView />}
        {view === 'fiches-salaire'    && <FichesSalaireView />}
        {view === 'arrets-maladie'    && <ArretsMaladieView />}
        {view === 'marchandises'      && <MarchandisesView />}
        {view === 'salaires'          && <SalairesView />}
        {view === 'tva'               && <TVAView />}
        {view === 'fondaments'        && <FondamentsView />}
        {view === 'prescriptions'     && <PrescriptionsView />}
        {view === 'bouclement'        && <BouclementView />}
        {view === 'hors-exploitation' && <HorsExploitationView />}
        {view === 'soc-formes'         && <SocFormesView />}
        {view === 'soc-fondation'      && <SocFondationView />}
        {view === 'soc-distribution'   && <SocDistributionView />}
        {view === 'soc-augmentation'   && <SocAugmentationView />}
        {view === 'soc-assainissement' && <SocAssainissementView />}
        {view === 'soc-fusion'         && <SocFusionView />}
        {view === 'soc-liquidation'    && <SocLiquidationView />}
        {view === 'anal-retraitements'  && <AnalRetraitementsView />}
        {view === 'anal-structure'      && <AnalStructureView />}
        {view === 'anal-fdr'            && <AnalFDRView />}
        {view === 'anal-liquidite'      && <AnalLiquiditeView />}
        {view === 'anal-rentabilite'    && <AnalRentabiliteView />}
        {view === 'anal-endettement'    && <AnalEndettementView />}
        {view === 'anal-flux'           && <AnalFluxView />}
        {view === 'anal-seuil'          && <AnalSeuilView />}
        {view === 'anal-evaluation'     && <AnalEvaluationView />}
        {view === 'anal-investissements' && <AnalInvestissementsView />}
      </div>
    </div>
  );
}
