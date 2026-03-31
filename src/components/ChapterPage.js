import React from 'react';
import { BookOpen, ChevronRight, CheckCircle2, Circle } from 'lucide-react';
import { exerciseGroups, exercises } from '../data/exercises/index';

export default function ChapterPage({ chapter, onOpenTheory, onOpenExercise, scores }) {
  // Collect exercises belonging to this chapter's exerciseGroups
  const chapterExGroups = (chapter.exerciseGroups || []);
  const chapterExercises = exercises.filter(e => chapterExGroups.includes(e.group));
  const doneCount = chapterExercises.filter(e => scores[e.id]).length;
  const totalCount = chapterExercises.length;
  const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

  // Group exercises by their group id for display
  const groupedExercises = chapterExGroups.map(gId => {
    const groupMeta = exerciseGroups.find(g => g.id === gId);
    const groupExercises = exercises.filter(e => e.group === gId);
    return { id: gId, label: groupMeta?.label || gId, exercises: groupExercises };
  });

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 24px' }}>

      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>
          {chapter.label}
        </h1>
      </div>

      {/* Theory Card */}
      <div style={{
        background: '#fff', borderRadius: 12, padding: '22px 26px',
        boxShadow: '0 1px 6px rgba(0,0,0,0.06)', borderLeft: '4px solid #3b82f6',
        marginBottom: 28, display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <div style={{
          width: 42, height: 42, borderRadius: 10, background: 'rgba(59,130,246,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <BookOpen size={20} color="#3b82f6" strokeWidth={1.8} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 2 }}>
            Theorie
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1e293b' }}>
            {chapter.label}
          </div>
        </div>
        <button
          onClick={onOpenTheory}
          style={{
            background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 8,
            padding: '9px 18px', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 6, transition: 'background 0.15s',
            fontFamily: 'Inter, sans-serif',
          }}
          onMouseOver={e => e.currentTarget.style.background = '#2563eb'}
          onMouseOut={e => e.currentTarget.style.background = '#3b82f6'}
        >
          Lire la theorie <ChevronRight size={14} strokeWidth={2.2} />
        </button>
      </div>

      {/* Exercises Section */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1e293b', marginBottom: 16 }}>
          Exercices pratiques
        </h2>

        {chapterExGroups.length === 0 ? (
          <div style={{
            background: '#f8fafc', borderRadius: 10, padding: '28px 24px',
            textAlign: 'center', color: '#94a3b8', fontSize: '0.88rem',
          }}>
            Pas d'exercices pour ce chapitre
          </div>
        ) : (
          groupedExercises.map(group => (
            <div key={group.id} style={{ marginBottom: 18 }}>
              {/* Group header */}
              <div style={{
                fontSize: '0.78rem', fontWeight: 600, color: '#64748b',
                marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.03em',
              }}>
                {group.label}
              </div>

              {/* Exercise list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {group.exercises.map(ex => {
                  const done = !!scores[ex.id];
                  const score = scores[ex.id];
                  const partial = score && score < 100;
                  return (
                    <button
                      key={ex.id}
                      onClick={() => onOpenExercise(group.id)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 12,
                        background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10,
                        padding: '12px 16px', cursor: 'pointer', textAlign: 'left',
                        transition: 'all 0.15s', fontFamily: 'Inter, sans-serif',
                      }}
                      onMouseOver={e => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(59,130,246,0.08)'; }}
                      onMouseOut={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      {/* Status dot */}
                      {done && !partial ? (
                        <CheckCircle2 size={18} color="#22c55e" strokeWidth={2} />
                      ) : partial ? (
                        <CheckCircle2 size={18} color="#f59e0b" strokeWidth={2} />
                      ) : (
                        <Circle size={18} color="#cbd5e1" strokeWidth={1.8} />
                      )}

                      {/* Title */}
                      <span style={{ flex: 1, fontSize: '0.88rem', fontWeight: 500, color: '#334155' }}>
                        {ex.title || ex.id}
                      </span>

                      {/* Difficulty tag */}
                      {ex.difficulty && (
                        <span style={{
                          fontSize: '0.65rem', fontWeight: 600, padding: '2px 8px',
                          borderRadius: 20, background:
                            ex.difficulty === 'facile' ? 'rgba(34,197,94,0.1)' :
                            ex.difficulty === 'moyen' ? 'rgba(245,158,11,0.1)' :
                            'rgba(239,68,68,0.1)',
                          color:
                            ex.difficulty === 'facile' ? '#16a34a' :
                            ex.difficulty === 'moyen' ? '#d97706' :
                            '#dc2626',
                        }}>
                          {ex.difficulty}
                        </span>
                      )}

                      <ChevronRight size={14} color="#94a3b8" strokeWidth={2} />
                    </button>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Progress Bar */}
      {totalCount > 0 && (
        <div style={{
          background: '#fff', borderRadius: 12, padding: '18px 22px',
          boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '0.82rem', color: '#64748b', fontWeight: 500 }}>
            <span>Progression du chapitre</span>
            <span style={{ fontWeight: 700, color: '#1e293b' }}>{doneCount}/{totalCount}</span>
          </div>
          <div className="progress-bar" style={{ height: 8, background: '#e2e8f0', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{
              width: `${pct}%`, height: '100%', borderRadius: 4,
              background: pct === 100 ? '#22c55e' : '#3b82f6',
              transition: 'width 0.4s ease',
            }} />
          </div>
        </div>
      )}
    </div>
  );
}
