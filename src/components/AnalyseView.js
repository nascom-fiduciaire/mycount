import React from 'react';
import { TheoryLayout } from './TheoryUI';

// ─── Chapitres détaillés (fichiers séparés pour la maintenabilité) ────────────
import { AnalRetraitementsView, AnalStructureView, AnalFDRView } from './analyse/AnalyseChap1to3';
import { TabLiquidite, TabRentabilite, TabEndettement } from './analyse/AnalyseChap4to6';
import { TabFlux, TabSeuil, TabEvaluation } from './analyse/AnalyseChap7to9';
import { TabInvestissements } from './analyse/AnalyseInvestissements';

// ─── Réexport chapitres 1-3 (déjà wrappés dans TheoryLayout) ─────────────────
export { AnalRetraitementsView, AnalStructureView, AnalFDRView };

// ─── Chapitres 4-6 : wrapper dans TheoryLayout ───────────────────────────────
export function AnalLiquiditeView() {
  return <TheoryLayout title="4. Ratios de liquidité" tag="tag-base" tagLabel="Analyse" meta="L1 · L2 · L3 · Rotation"><TabLiquidite /></TheoryLayout>;
}
export function AnalRentabiliteView() {
  return <TheoryLayout title="5. Ratios de rentabilité" tag="tag-base" tagLabel="Analyse" meta="ROE · ROA · EBITDA · DuPont"><TabRentabilite /></TheoryLayout>;
}
export function AnalEndettementView() {
  return <TheoryLayout title="6. Endettement & structure du capital" tag="tag-base" tagLabel="Analyse" meta="Levier financier · D/E"><TabEndettement /></TheoryLayout>;
}

// ─── Chapitres 7-9 : wrapper dans TheoryLayout ───────────────────────────────
export function AnalFluxView() {
  return <TheoryLayout title="7. Tableau de flux de trésorerie" tag="tag-base" tagLabel="Analyse" meta="CO 961 · Cash-flow"><TabFlux /></TheoryLayout>;
}
export function AnalSeuilView() {
  return <TheoryLayout title="8. Seuil de rentabilité" tag="tag-bouclement" tagLabel="Calcul" meta="Break-even · Marge de contribution"><TabSeuil /></TheoryLayout>;
}
export function AnalEvaluationView() {
  return <TheoryLayout title="9. Évaluation d'entreprise" tag="tag-base" tagLabel="Analyse" meta="DCF · Praticiens · Substanzwert"><TabEvaluation /></TheoryLayout>;
}

// ─── Chapitre Investissements ─────────────────────────────────────────────────
export function AnalInvestissementsView() {
  return (
    <TheoryLayout
      title="10. Choix d'investissement"
      tag="tag-base"
      tagLabel="Analyse"
      meta="VAN · TRI · Payback · WACC · MEDAF"
    >
      <TabInvestissements />
    </TheoryLayout>
  );
}

// ─── Export par défaut ───────────────────────────────────────────────────────
export default function AnalyseView() {
  return <AnalRetraitementsView />;
}
