import { baseJournalExercises } from './base-journal';
import { tvaCalcExercises, tvaEcrituresExercises } from './tva';
import { bouclementExercises } from './bouclement';
import { salairesCalcExercises, salairesEcrituresExercises } from './salaires';
import { arretsExercises } from './arrets';
import { marchandisesExercises } from './marchandises';
import { societesExerciseGroups, societesExercises } from './societes';
import { analyseExerciseGroups, analyseExercises } from './analyse';
import { investissementsExercises } from './investissements';
import { revisionExercises } from './revision';

export const exerciseGroups = [
  { id: 'base-journal',        label: 'Journal — Cas complets',      icon: '📝', tag: 'base',       description: 'Situations complètes avec plusieurs écritures liées' },
  { id: 'tva-calculs',         label: 'TVA — Calculs HT/TTC',        icon: '🔢', tag: 'tva',        description: 'Conversions HT ↔ TTC, identification des taux' },
  { id: 'tva-ecritures',       label: 'TVA — Écritures complètes',   icon: '✏️', tag: 'tva',        description: 'Cycles complets : facture + paiement + décompte' },
  { id: 'marchandises',        label: 'Marchandises & stocks',       icon: '📦', tag: 'base',       description: 'Inventaire intermittent/permanent, FIFO, LIFO, CMP' },
  { id: 'salaires-calcul',     label: 'Salaires — Calculs',          icon: '💰', tag: 'salaires',   description: 'Calculs interactifs : net, charges patronales, arrêts' },
  { id: 'salaires-ecritures',  label: 'Salaires — Écritures',        icon: '💼', tag: 'salaires',   description: 'Comptabilisation complète des salaires et charges' },
  { id: 'bouclement',          label: 'Bouclement annuel',           icon: '📅', tag: 'bouclement', description: 'Amortissements, régularisations, ducroire, clôture' },
  ...societesExerciseGroups,
  ...analyseExerciseGroups,
  { id: 'investissements',     label: 'Investissements',             icon: '📈', tag: 'analyse',    description: 'VAN, TRI, Payback, WACC — choix de projets' },
  { id: 'revision',            label: 'Révision transversale',       icon: '🔄', tag: 'base',       description: 'Cas complets mélangeant plusieurs thèmes : achats, ventes, TVA, salaires, bouclement' },
];

export const exercises = [
  ...baseJournalExercises,
  ...tvaCalcExercises,
  ...tvaEcrituresExercises,
  ...marchandisesExercises,
  ...salairesCalcExercises,
  ...arretsExercises,
  ...salairesEcrituresExercises,
  ...bouclementExercises,
  ...societesExercises,
  ...analyseExercises,
  ...investissementsExercises,
  ...revisionExercises,
];
