import React, { useState, useEffect } from 'react';
import {
  ChevronLeft, ChevronRight, CheckCircle2, XCircle,
  Lightbulb, BookOpen, RotateCcw, Send,
  PenSquare, Percent, FileText, Banknote, CalendarClock
} from 'lucide-react';
import { exercises, exerciseGroups } from '../data/exercises/index';
import { COMPTES_CLES } from '../data/planComptable';
import PayslipExercise from './PayslipExercise';

function fmt(n) {
  if (n === null || n === undefined) return '';
  return Number(n).toLocaleString('fr-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function parseAmt(s) {
  if (!s) return null;
  const n = parseFloat(s.replace(/['\s]/g, '').replace(',', '.'));
  return isNaN(n) ? null : n;
}
function close(a, b, tol = 0.05) {
  return a !== null && b !== null && Math.abs(a - b) <= tol;
}

const tagClass  = { base: 'tag-base', tva: 'tag-tva', salaires: 'tag-salaires', bouclement: 'tag-bouclement', societes: 'tag-base', analyse: 'tag-base' };
const tagLabel  = { base: 'Base', tva: 'TVA', salaires: 'Salaires', bouclement: 'Clôture', societes: 'Sociétés', analyse: 'Analyse' };
const diffLabel = { 1: 'Facile', 2: 'Intermédiaire', 3: 'Avancé' };
const diffColor = { 1: '#1a7a4a', 2: '#d4600a', 3: '#c0392b' };
const diffBg    = { 1: '#e6f4ed', 2: '#fef3e8', 3: '#fdf0ee' };

const GROUP_ICONS = {
  'base-journal':    <PenSquare size={14} strokeWidth={1.8} />,
  'tva-calculs':     <Percent size={14} strokeWidth={1.8} />,
  'tva-ecritures':   <FileText size={14} strokeWidth={1.8} />,
  'salaires-calcul': <Banknote size={14} strokeWidth={1.8} />,
  'bouclement':      <CalendarClock size={14} strokeWidth={1.8} />,
};

// ─── QCM ────────────────────────────────────────────────────────────────────
function QCMExercise({ ex, onComplete }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!selected) return;
    setSubmitted(true);
    const ok = ex.options.find(o => o.id === selected)?.correct;
    setTimeout(() => onComplete(ok ? 1 : 0), 600);
  };

  const getClass = (opt) => {
    if (!submitted) return selected === opt.id ? 'selected' : '';
    if (opt.correct) return 'correct';
    if (selected === opt.id && !opt.correct) return 'wrong';
    return '';
  };

  const isCorrect = submitted && ex.options.find(o => o.id === selected)?.correct;

  return (
    <div>
      <div className="qcm-options">
        {ex.options.map(opt => (
          <div key={opt.id} className={`qcm-option ${getClass(opt)}`} onClick={() => !submitted && setSelected(opt.id)}>
            <span className="qcm-letter">{opt.id.toUpperCase()}.</span>
            <span>{opt.text}</span>
            {submitted && opt.correct && <CheckCircle2 size={15} strokeWidth={2} color="#1a7a4a" style={{ marginLeft: 'auto', flexShrink: 0 }} />}
            {submitted && selected === opt.id && !opt.correct && <XCircle size={15} strokeWidth={2} color="#c0392b" style={{ marginLeft: 'auto', flexShrink: 0 }} />}
          </div>
        ))}
      </div>
      {submitted && (
        <div className={`feedback ${isCorrect ? 'success' : 'error'}`}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            {isCorrect
              ? <CheckCircle2 size={16} strokeWidth={2} color="#1a7a4a" style={{ flexShrink: 0, marginTop: 1 }} />
              : <XCircle size={16} strokeWidth={2} color="#c0392b" style={{ flexShrink: 0, marginTop: 1 }} />}
            <span style={{ whiteSpace: 'pre-line' }}>
              <strong>{isCorrect ? 'Correct !' : 'Incorrect.'}</strong>{' '}{ex.explanation}
            </span>
          </div>
        </div>
      )}
      {!submitted && (
        <div className="btn-row">
          <button className="btn btn-primary" onClick={handleSubmit} disabled={!selected}>
            <Send size={14} strokeWidth={2} /> Valider
          </button>
        </div>
      )}
    </div>
  );
}

// ─── JOURNAL ────────────────────────────────────────────────────────────────
function JournalExercise({ ex, onComplete }) {
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState({});

  const set = (key, val) => setInputs(p => ({ ...p, [key]: val }));
  const get = (key) => inputs[key] || '';

  const getFields = () => {
    const fields = [];
    ex.ecritures.forEach(e => {
      if (e.debit) fields.push({ key: `${e.id}_da`, correct: e.debit.num });
      if (e.credit) fields.push({ key: `${e.id}_ca`, correct: e.credit.num });
      if (e.amount != null) fields.push({ key: `${e.id}_dam`, correct: e.amount, isAmt: true });
      if (e.amountCredit != null) fields.push({ key: `${e.id}_cam`, correct: e.amountCredit, isAmt: true });
    });
    return fields;
  };

  const handleSubmit = () => {
    const fields = getFields();
    const res = {};
    let correct = 0;
    fields.forEach(f => {
      const val = get(f.key).trim();
      const ok = f.isAmt ? close(parseAmt(val), f.correct) : val === String(f.correct);
      res[f.key] = ok;
      if (ok) correct++;
    });
    setResults(res);
    setSubmitted(true);
    setTimeout(() => onComplete(fields.length > 0 ? correct / fields.length : 1), 600);
  };

  const cls = (key) => !submitted ? '' : results[key] ? 'correct' : 'wrong';
  const allOk  = submitted && Object.values(results).every(Boolean);
  const someOk = submitted && Object.values(results).some(Boolean);

  return (
    <div>
      <div className="journal-wrap">
        <table className="journal-table">
          <thead>
            <tr>
              <th style={{ width: '16%' }}>N° Débit</th>
              <th style={{ width: '16%' }}>N° Crédit</th>
              <th style={{ width: '34%' }}>Libellé</th>
              <th style={{ width: '17%' }}>Débit CHF</th>
              <th style={{ width: '17%' }}>Crédit CHF</th>
            </tr>
          </thead>
          <tbody>
            {ex.ecritures.map(e => (
              <tr key={e.id} className={e.isSubLine ? 'row-sub' : 'row-main'}>
                <td className={e.isSubLine ? 'indent-cell' : ''}>
                  {e.debit
                    ? <input className={`journal-input ${cls(`${e.id}_da`)}`} value={get(`${e.id}_da`)} onChange={ev => set(`${e.id}_da`, ev.target.value)} placeholder="1000" disabled={submitted} />
                    : <span style={{ color: 'var(--text4)', fontSize: '0.75rem' }}>—</span>}
                </td>
                <td>
                  {e.credit
                    ? <input className={`journal-input ${cls(`${e.id}_ca`)}`} value={get(`${e.id}_ca`)} onChange={ev => set(`${e.id}_ca`, ev.target.value)} placeholder="2000" disabled={submitted} />
                    : <span style={{ color: 'var(--text4)', fontSize: '0.75rem' }}>—</span>}
                </td>
                <td><span className="libelle-text">{e.libelle}</span></td>
                <td>
                  {e.amount != null
                    ? <input className={`journal-input ${cls(`${e.id}_dam`)}`} value={get(`${e.id}_dam`)} onChange={ev => set(`${e.id}_dam`, ev.target.value)} placeholder="0.00" disabled={submitted} />
                    : <span style={{ color: 'var(--text4)', fontSize: '0.75rem' }}>—</span>}
                </td>
                <td>
                  {e.amountCredit != null
                    ? <input className={`journal-input ${cls(`${e.id}_cam`)}`} value={get(`${e.id}_cam`)} onChange={ev => set(`${e.id}_cam`, ev.target.value)} placeholder="0.00" disabled={submitted} />
                    : <span style={{ color: 'var(--text4)', fontSize: '0.75rem' }}>—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {submitted && (
        <>
          <div className={`feedback ${allOk ? 'success' : someOk ? 'partial' : 'error'}`}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              {allOk
                ? <CheckCircle2 size={16} strokeWidth={2} color="#1a7a4a" style={{ flexShrink: 0, marginTop: 1 }} />
                : <XCircle size={16} strokeWidth={2} color={someOk ? '#d4600a' : '#c0392b'} style={{ flexShrink: 0, marginTop: 1 }} />}
              <span>
                {allOk
                  ? 'Toutes les écritures sont correctes !'
                  : `${Object.values(results).filter(Boolean).length} / ${Object.values(results).length} valeurs correctes. Vérifiez les champs en rouge.`}
              </span>
            </div>
          </div>
          <div className="correction-wrap">
            <table className="correction-table">
              <thead>
                <tr><th>N°</th><th>Débit</th><th>Crédit</th><th>Libellé</th><th>Débit</th><th>Crédit</th></tr>
              </thead>
              <tbody>
                {ex.ecritures.map((e, i) => (
                  <tr key={e.id}>
                    <td style={{ color: 'var(--text4)', fontSize: '0.72rem' }}>{e.isSubLine ? '' : i + 1}</td>
                    <td className="c-debit">{e.debit ? `${e.debit.num} ${e.debit.label}` : ''}</td>
                    <td className="c-credit">{e.credit ? `${e.credit.num} ${e.credit.label}` : ''}</td>
                    <td style={{ color: 'var(--text3)', fontStyle: 'italic', fontFamily: 'Inter', fontSize: '0.78rem' }}>{e.libelle}</td>
                    <td className="c-amount">{e.amount != null ? fmt(e.amount) : ''}</td>
                    <td className="c-amount">{e.amountCredit != null ? fmt(e.amountCredit) : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <div className="btn-row">
        {!submitted
          ? <button className="btn btn-primary" onClick={handleSubmit}><Send size={14} strokeWidth={2} /> Valider les écritures</button>
          : <button className="btn btn-secondary" onClick={() => { setInputs({}); setSubmitted(false); setResults({}); }}><RotateCcw size={14} strokeWidth={2} /> Recommencer</button>}
      </div>
    </div>
  );
}

// ─── CALCUL ──────────────────────────────────────────────────────────────────
function CalculExercise({ ex, onComplete }) {
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState({});

  const set = (id, val) => setInputs(p => ({ ...p, [id]: val }));
  const get = (id) => inputs[id] || '';

  const handleSubmit = () => {
    const res = {};
    let correct = 0;
    ex.champs.forEach(c => {
      const val = parseAmt(get(c.id));
      const ok = close(val, c.correct, c.tol || 0.10);
      res[c.id] = ok;
      if (ok) correct++;
    });
    setResults(res);
    setSubmitted(true);
    setTimeout(() => onComplete(ex.champs.length > 0 ? correct / ex.champs.length : 1), 600);
  };

  const handleReset = () => {
    setInputs({});
    setSubmitted(false);
    setResults({});
  };

  const cls = (id) => !submitted ? '' : results[id] ? 'correct' : 'wrong';
  const allOk = submitted && Object.values(results).every(Boolean);
  const someOk = submitted && Object.values(results).some(Boolean);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '16px 0' }}>
        {ex.champs.map(c => (
          <div key={c.id} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px',
            background: 'var(--bg2)', borderRadius: 8, border: '1px solid var(--border1)',
          }}>
            <label style={{ flex: '0 0 55%', fontSize: '0.82rem', fontWeight: 500, color: 'var(--text2)' }}>
              {c.label}
            </label>
            <input
              className={`journal-input ${cls(c.id)}`}
              value={get(c.id)}
              onChange={ev => set(c.id, ev.target.value)}
              placeholder="Votre réponse"
              disabled={submitted}
              style={{ flex: 1, textAlign: 'right' }}
            />
            {submitted && c.hint && (
              <span style={{ fontSize: '0.7rem', color: 'var(--text4)', whiteSpace: 'nowrap' }}>
                <Lightbulb size={11} strokeWidth={1.8} color="#7a5c00" style={{ marginRight: 3, verticalAlign: '-1px' }} />
                {c.hint}
              </span>
            )}
          </div>
        ))}
      </div>

      {submitted && (
        <>
          <div className={`feedback ${allOk ? 'success' : someOk ? 'partial' : 'error'}`}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              {allOk
                ? <CheckCircle2 size={16} strokeWidth={2} color="#1a7a4a" style={{ flexShrink: 0, marginTop: 1 }} />
                : <XCircle size={16} strokeWidth={2} color={someOk ? '#d4600a' : '#c0392b'} style={{ flexShrink: 0, marginTop: 1 }} />}
              <span>
                {allOk
                  ? 'Tous les calculs sont corrects !'
                  : `${Object.values(results).filter(Boolean).length} / ${Object.values(results).length} valeurs correctes. Vérifiez les champs en rouge.`}
              </span>
            </div>
          </div>
          {ex.correction && (
            <div className="correction-wrap" style={{ padding: '14px 16px', fontSize: '0.82rem', lineHeight: 1.65, whiteSpace: 'pre-line', color: 'var(--text2)' }}>
              <strong style={{ display: 'block', marginBottom: 6 }}>Correction :</strong>
              {ex.correction}
            </div>
          )}
        </>
      )}

      <div className="btn-row">
        {!submitted
          ? <button className="btn btn-primary" onClick={handleSubmit}><Send size={14} strokeWidth={2} /> Valider</button>
          : <button className="btn btn-secondary" onClick={handleReset}><RotateCcw size={14} strokeWidth={2} /> Recommencer</button>}
      </div>
    </div>
  );
}

// ─── PAYSLIP INTERACTIVE ─────────────────────────────────────────────────────
function PayslipInteractiveExercise({ ex, onComplete }) {
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState({});
  const [showCharges, setShowCharges] = useState(true);

  const set = (key, val) => setInputs(p => ({ ...p, [key]: val }));
  const get = (key) => inputs[key] || '';

  const allFields = () => {
    const fields = [];
    ex.reponses.deductions.forEach((d, i) => {
      fields.push({ key: `ded_${i}`, correct: d.montant });
    });
    fields.push({ key: 'net', correct: ex.reponses.net });
    if (ex.reponses.chargesPatronales) {
      ex.reponses.chargesPatronales.forEach((c, i) => {
        fields.push({ key: `cp_${i}`, correct: c.montant });
      });
      fields.push({ key: 'totalCP', correct: ex.reponses.totalChargesPatronales });
      fields.push({ key: 'coutTotal', correct: ex.reponses.coutTotal });
    }
    return fields;
  };

  const handleSubmit = () => {
    const fields = allFields();
    const res = {};
    let correct = 0;
    fields.forEach(f => {
      const val = parseAmt(get(f.key));
      const ok = close(val, f.correct, 0.10);
      res[f.key] = ok;
      if (ok) correct++;
    });
    setResults(res);
    setSubmitted(true);
    setTimeout(() => onComplete(fields.length > 0 ? correct / fields.length : 1), 600);
  };

  const handleReset = () => {
    setInputs({});
    setSubmitted(false);
    setResults({});
  };

  const cls = (key) => !submitted ? '' : results[key] ? 'correct' : 'wrong';
  const allOk = submitted && Object.values(results).every(Boolean);
  const someOk = submitted && Object.values(results).some(Boolean);

  const slipRowStyle = {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '7px 12px', borderBottom: '1px solid var(--border1)', fontSize: '0.82rem',
  };
  const sectionTitle = {
    fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em',
    color: 'var(--text3)', padding: '10px 12px 4px', borderBottom: '2px solid var(--border2)',
  };
  const totalRowStyle = {
    ...slipRowStyle, fontWeight: 700, background: 'var(--bg2)', borderBottom: '2px solid var(--border2)',
  };

  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', margin: '16px 0' }}>
      {/* LEFT: Salary slip */}
      <div style={{ flex: '0 0 60%', border: '1px solid var(--border2)', borderRadius: 10, background: 'var(--bg1)', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '14px 16px', background: 'var(--bg2)', borderBottom: '2px solid var(--border2)' }}>
          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text1)' }}>Fiche de salaire — {ex.salaire.mois}</div>
          <div style={{ display: 'flex', gap: 20, marginTop: 6, fontSize: '0.78rem', color: 'var(--text3)' }}>
            <span>Taux d'activité : <strong>{ex.salaire.tauxActivite}%</strong></span>
            <span>Salaire brut : <strong>CHF {fmt(ex.salaire.brut)}</strong></span>
          </div>
        </div>

        {/* Déductions employé */}
        <div style={sectionTitle}>Déductions employé</div>
        {ex.reponses.deductions.map((d, i) => (
          <div key={`ded_${i}`} style={slipRowStyle}>
            <span style={{ color: 'var(--text2)' }}>{d.label}</span>
            <input
              className={`journal-input ${cls(`ded_${i}`)}`}
              value={get(`ded_${i}`)}
              onChange={ev => set(`ded_${i}`, ev.target.value)}
              placeholder="0.00"
              disabled={submitted}
              style={{ width: 110, textAlign: 'right' }}
            />
          </div>
        ))}

        {/* Salaire net */}
        <div style={totalRowStyle}>
          <span style={{ color: 'var(--text1)' }}>Salaire net</span>
          <input
            className={`journal-input ${cls('net')}`}
            value={get('net')}
            onChange={ev => set('net', ev.target.value)}
            placeholder="0.00"
            disabled={submitted}
            style={{ width: 110, textAlign: 'right', fontWeight: 700 }}
          />
        </div>

        {/* Charges patronales */}
        {ex.reponses.chargesPatronales && (
          <>
            <div style={{ ...sectionTitle, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => setShowCharges(p => !p)}>
              Charges patronales
              <ChevronRight size={13} strokeWidth={2} style={{ transform: showCharges ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
            </div>
            {showCharges && (
              <>
                {ex.reponses.chargesPatronales.map((c, i) => (
                  <div key={`cp_${i}`} style={slipRowStyle}>
                    <span style={{ color: 'var(--text2)' }}>{c.label}</span>
                    <input
                      className={`journal-input ${cls(`cp_${i}`)}`}
                      value={get(`cp_${i}`)}
                      onChange={ev => set(`cp_${i}`, ev.target.value)}
                      placeholder="0.00"
                      disabled={submitted}
                      style={{ width: 110, textAlign: 'right' }}
                    />
                  </div>
                ))}
                <div style={totalRowStyle}>
                  <span style={{ color: 'var(--text1)' }}>Total charges patronales</span>
                  <input
                    className={`journal-input ${cls('totalCP')}`}
                    value={get('totalCP')}
                    onChange={ev => set('totalCP', ev.target.value)}
                    placeholder="0.00"
                    disabled={submitted}
                    style={{ width: 110, textAlign: 'right', fontWeight: 700 }}
                  />
                </div>
                <div style={{ ...totalRowStyle, background: 'var(--bg3, var(--bg2))' }}>
                  <span style={{ color: 'var(--text1)' }}>Coût total employeur</span>
                  <input
                    className={`journal-input ${cls('coutTotal')}`}
                    value={get('coutTotal')}
                    onChange={ev => set('coutTotal', ev.target.value)}
                    placeholder="0.00"
                    disabled={submitted}
                    style={{ width: 110, textAlign: 'right', fontWeight: 700 }}
                  />
                </div>
              </>
            )}
          </>
        )}

        {/* Feedback */}
        {submitted && (
          <div style={{ padding: '0 12px 12px' }}>
            <div className={`feedback ${allOk ? 'success' : someOk ? 'partial' : 'error'}`}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                {allOk
                  ? <CheckCircle2 size={16} strokeWidth={2} color="#1a7a4a" style={{ flexShrink: 0, marginTop: 1 }} />
                  : <XCircle size={16} strokeWidth={2} color={someOk ? '#d4600a' : '#c0392b'} style={{ flexShrink: 0, marginTop: 1 }} />}
                <span>
                  {allOk
                    ? 'Fiche de salaire correcte !'
                    : `${Object.values(results).filter(Boolean).length} / ${Object.values(results).length} montants corrects. Vérifiez les champs en rouge.`}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="btn-row" style={{ padding: '8px 12px 14px' }}>
          {!submitted
            ? <button className="btn btn-primary" onClick={handleSubmit}><Send size={14} strokeWidth={2} /> Valider la fiche</button>
            : <button className="btn btn-secondary" onClick={handleReset}><RotateCcw size={14} strokeWidth={2} /> Recommencer</button>}
        </div>
      </div>

      {/* RIGHT: Reference panel */}
      <div style={{
        flex: '0 0 38%', position: 'sticky', top: 20,
        background: '#eef4fb', border: '1px solid #c4d9f0', borderRadius: 10, padding: '14px 16px',
      }}>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2c5f8a', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
          <BookOpen size={14} strokeWidth={1.8} color="#2c5f8a" />
          Taux de référence 2024
        </div>
        <table style={{ width: '100%', fontSize: '0.75rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #c4d9f0' }}>
              <th style={{ textAlign: 'left', padding: '4px 6px', color: '#2c5f8a', fontWeight: 600 }}>Rubrique</th>
              <th style={{ textAlign: 'right', padding: '4px 6px', color: '#2c5f8a', fontWeight: 600 }}>Taux</th>
              <th style={{ textAlign: 'left', padding: '4px 6px', color: '#2c5f8a', fontWeight: 600 }}>Base</th>
            </tr>
          </thead>
          <tbody>
            {ex.references && ex.references.map((r, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #d6e4f0' }}>
                <td style={{ padding: '4px 6px', color: 'var(--text2)' }}>{r.label}</td>
                <td style={{ padding: '4px 6px', textAlign: 'right', fontWeight: 600, color: 'var(--text1)' }}>{r.taux}</td>
                <td style={{ padding: '4px 6px', color: 'var(--text3)', fontStyle: 'italic' }}>{r.base}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── EXAM ───────────────────────────────────────────────────────────────────
function ExamExercise({ ex, onComplete }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [sectionScores, setSectionScores] = useState({});
  const [sectionCompleted, setSectionCompleted] = useState({});
  const [examFinished, setExamFinished] = useState(false);

  // Per-section state
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [results, setResults] = useState({});
  // QCM-multi selections: { sectionIdx: { questionId: optionId } }
  const [qcmSelections, setQcmSelections] = useState({});

  const sections = ex.sections || [];
  const section = sections[currentSection];

  const set = (key, val) => setInputs(p => ({ ...p, [key]: val }));
  const get = (key) => inputs[key] || '';
  const isSubmitted = !!submitted[currentSection];

  // ── QCM-multi validation ──
  const validateQcmMulti = () => {
    const sel = qcmSelections[currentSection] || {};
    const res = {};
    let correct = 0;
    section.questions.forEach(q => {
      const picked = sel[q.id];
      const ok = !!q.options.find(o => o.id === picked && o.correct);
      res[q.id] = ok;
      if (ok) correct++;
    });
    const total = section.questions.length;
    const pts = total > 0 ? Math.round((correct / total) * section.points) : 0;
    setResults(p => ({ ...p, [currentSection]: res }));
    setSubmitted(p => ({ ...p, [currentSection]: true }));
    setSectionScores(p => ({ ...p, [currentSection]: pts }));
    setSectionCompleted(p => ({ ...p, [currentSection]: true }));
  };

  // ── Journal validation ──
  const validateJournal = () => {
    const fields = [];
    section.ecritures.forEach(e => {
      if (e.debit) fields.push({ key: `${currentSection}_${e.id}_da`, correct: e.debit.num });
      if (e.credit) fields.push({ key: `${currentSection}_${e.id}_ca`, correct: e.credit.num });
      if (e.amount != null) fields.push({ key: `${currentSection}_${e.id}_dam`, correct: e.amount, isAmt: true });
      if (e.amountCredit != null) fields.push({ key: `${currentSection}_${e.id}_cam`, correct: e.amountCredit, isAmt: true });
    });
    const res = {};
    let correct = 0;
    fields.forEach(f => {
      const val = get(f.key).trim();
      const ok = f.isAmt ? close(parseAmt(val), f.correct) : val === String(f.correct);
      res[f.key] = ok;
      if (ok) correct++;
    });
    const pts = fields.length > 0 ? Math.round((correct / fields.length) * section.points) : 0;
    setResults(p => ({ ...p, [currentSection]: res }));
    setSubmitted(p => ({ ...p, [currentSection]: true }));
    setSectionScores(p => ({ ...p, [currentSection]: pts }));
    setSectionCompleted(p => ({ ...p, [currentSection]: true }));
  };

  // ── Calcul validation ──
  const validateCalcul = () => {
    const res = {};
    let correct = 0;
    section.champs.forEach(c => {
      const val = parseAmt(get(`${currentSection}_${c.id}`));
      const ok = close(val, c.correct, c.tol || 0.10);
      res[`${currentSection}_${c.id}`] = ok;
      if (ok) correct++;
    });
    const pts = section.champs.length > 0 ? Math.round((correct / section.champs.length) * section.points) : 0;
    setResults(p => ({ ...p, [currentSection]: res }));
    setSubmitted(p => ({ ...p, [currentSection]: true }));
    setSectionScores(p => ({ ...p, [currentSection]: pts }));
    setSectionCompleted(p => ({ ...p, [currentSection]: true }));
  };

  const handleValidate = () => {
    if (section.type === 'qcm-multi') validateQcmMulti();
    else if (section.type === 'journal') validateJournal();
    else if (section.type === 'calcul') validateCalcul();
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      // Exam finished
      setExamFinished(true);
      const totalMax = sections.reduce((s, sec) => s + sec.points, 0);
      const totalScore = sections.reduce((s, _, i) => s + (sectionScores[i] || 0), 0);
      onComplete(totalMax > 0 ? totalScore / totalMax : 0);
    }
  };

  const cls = (key) => {
    const secRes = results[currentSection] || {};
    if (!isSubmitted) return '';
    return secRes[key] ? 'correct' : 'wrong';
  };

  // ── Summary card ──
  if (examFinished) {
    const totalMax = sections.reduce((s, sec) => s + sec.points, 0);
    const totalScore = sections.reduce((s, _, i) => s + (sectionScores[i] || 0), 0);
    const pct = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0;
    const note = Math.min(6, Math.max(1, 1 + 5 * (totalScore / totalMax)));
    const noteRounded = Math.round(note * 10) / 10;
    const passed = noteRounded >= 4.0;

    return (
      <div style={{
        maxWidth: 520, margin: '24px auto', background: 'var(--bg1, #fff)', border: '2px solid var(--border2, #ddd)',
        borderRadius: 14, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', overflow: 'hidden',
      }}>
        <div style={{
          padding: '18px 24px', background: passed ? '#e6f4ed' : '#fdf0ee',
          borderBottom: '2px solid var(--border2, #ddd)', textAlign: 'center',
        }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text1)', letterSpacing: '0.02em' }}>
            RESULTATS DE L'EXAMEN
          </div>
        </div>
        <div style={{ padding: '16px 24px' }}>
          {sections.map((sec, i) => (
            <div key={sec.id} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '9px 0', borderBottom: '1px solid var(--border1, #eee)', fontSize: '0.84rem',
            }}>
              <span style={{ color: 'var(--text2)', fontWeight: 500 }}>{sec.title}</span>
              <span style={{
                fontWeight: 700, fontVariantNumeric: 'tabular-nums',
                color: (sectionScores[i] || 0) >= sec.points * 0.6 ? '#1a7a4a' : '#c0392b',
              }}>
                {sectionScores[i] || 0}/{sec.points} pts
              </span>
            </div>
          ))}
        </div>
        <div style={{
          padding: '16px 24px', background: 'var(--bg2, #f8f8f8)',
          borderTop: '2px solid var(--border2, #ddd)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text1)' }}>TOTAL</span>
            <span style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--text1)' }}>
              {totalScore}/{totalMax} points ({pct}%)
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text1)' }}>Note</span>
            <span style={{
              fontSize: '1.1rem', fontWeight: 800,
              color: passed ? '#1a7a4a' : '#c0392b',
            }}>
              {noteRounded.toFixed(1)} / 6
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ── Section rendering ──
  const progressPct = sections.length > 0 ? ((currentSection + 1) / sections.length) * 100 : 0;
  const secRes = results[currentSection] || {};

  const renderQcmMulti = () => {
    const sel = qcmSelections[currentSection] || {};
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {section.questions.map((q, qi) => {
          const picked = sel[q.id];
          const qOk = isSubmitted && secRes[q.id];
          return (
            <div key={q.id} style={{
              padding: '14px 16px', background: 'var(--bg2)', borderRadius: 10,
              border: isSubmitted ? `2px solid ${qOk ? '#1a7a4a' : '#c0392b'}` : '1px solid var(--border1)',
            }}>
              <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text1)', marginBottom: 10 }}>
                {qi + 1}. {q.text}
              </div>
              <div className="qcm-options">
                {q.options.map(opt => {
                  let optClass = '';
                  if (!isSubmitted) {
                    optClass = picked === opt.id ? 'selected' : '';
                  } else {
                    if (opt.correct) optClass = 'correct';
                    else if (picked === opt.id && !opt.correct) optClass = 'wrong';
                  }
                  return (
                    <div key={opt.id} className={`qcm-option ${optClass}`}
                      onClick={() => {
                        if (isSubmitted) return;
                        setQcmSelections(p => ({
                          ...p,
                          [currentSection]: { ...(p[currentSection] || {}), [q.id]: opt.id }
                        }));
                      }}>
                      <span className="qcm-letter">{opt.id.toUpperCase()}.</span>
                      <span>{opt.text}</span>
                      {isSubmitted && opt.correct && <CheckCircle2 size={15} strokeWidth={2} color="#1a7a4a" style={{ marginLeft: 'auto', flexShrink: 0 }} />}
                      {isSubmitted && picked === opt.id && !opt.correct && <XCircle size={15} strokeWidth={2} color="#c0392b" style={{ marginLeft: 'auto', flexShrink: 0 }} />}
                    </div>
                  );
                })}
              </div>
              {isSubmitted && q.explanation && (
                <div style={{ marginTop: 8, fontSize: '0.78rem', color: qOk ? '#1a7a4a' : '#c0392b', fontStyle: 'italic' }}>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const renderJournal = () => (
    <div className="journal-wrap">
      <table className="journal-table">
        <thead>
          <tr>
            <th style={{ width: '16%' }}>N Debit</th>
            <th style={{ width: '16%' }}>N Credit</th>
            <th style={{ width: '34%' }}>Libelle</th>
            <th style={{ width: '17%' }}>Debit CHF</th>
            <th style={{ width: '17%' }}>Credit CHF</th>
          </tr>
        </thead>
        <tbody>
          {section.ecritures.map(e => (
            <tr key={e.id} className={e.isSubLine ? 'row-sub' : 'row-main'}>
              <td className={e.isSubLine ? 'indent-cell' : ''}>
                {e.debit
                  ? <input className={`journal-input ${cls(`${currentSection}_${e.id}_da`)}`} value={get(`${currentSection}_${e.id}_da`)} onChange={ev => set(`${currentSection}_${e.id}_da`, ev.target.value)} placeholder="1000" disabled={isSubmitted} />
                  : <span style={{ color: 'var(--text4)', fontSize: '0.75rem' }}>--</span>}
              </td>
              <td>
                {e.credit
                  ? <input className={`journal-input ${cls(`${currentSection}_${e.id}_ca`)}`} value={get(`${currentSection}_${e.id}_ca`)} onChange={ev => set(`${currentSection}_${e.id}_ca`, ev.target.value)} placeholder="2000" disabled={isSubmitted} />
                  : <span style={{ color: 'var(--text4)', fontSize: '0.75rem' }}>--</span>}
              </td>
              <td><span className="libelle-text">{e.libelle}</span></td>
              <td>
                {e.amount != null
                  ? <input className={`journal-input ${cls(`${currentSection}_${e.id}_dam`)}`} value={get(`${currentSection}_${e.id}_dam`)} onChange={ev => set(`${currentSection}_${e.id}_dam`, ev.target.value)} placeholder="0.00" disabled={isSubmitted} />
                  : <span style={{ color: 'var(--text4)', fontSize: '0.75rem' }}>--</span>}
              </td>
              <td>
                {e.amountCredit != null
                  ? <input className={`journal-input ${cls(`${currentSection}_${e.id}_cam`)}`} value={get(`${currentSection}_${e.id}_cam`)} onChange={ev => set(`${currentSection}_${e.id}_cam`, ev.target.value)} placeholder="0.00" disabled={isSubmitted} />
                  : <span style={{ color: 'var(--text4)', fontSize: '0.75rem' }}>--</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderCalcul = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '16px 0' }}>
      {section.champs.map(c => (
        <div key={c.id} style={{
          display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px',
          background: 'var(--bg2)', borderRadius: 8, border: '1px solid var(--border1)',
        }}>
          <label style={{ flex: '0 0 55%', fontSize: '0.82rem', fontWeight: 500, color: 'var(--text2)' }}>
            {c.label}
          </label>
          <input
            className={`journal-input ${cls(`${currentSection}_${c.id}`)}`}
            value={get(`${currentSection}_${c.id}`)}
            onChange={ev => set(`${currentSection}_${c.id}`, ev.target.value)}
            placeholder="Votre reponse"
            disabled={isSubmitted}
            style={{ flex: 1, textAlign: 'right' }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {/* Exam header */}
      <div style={{
        textAlign: 'center', marginBottom: 8, fontSize: '1.05rem', fontWeight: 800,
        color: 'var(--text1)', letterSpacing: '0.02em',
      }}>
        {ex.title || 'EXAMEN FINAL'}
      </div>

      {/* Progress bar */}
      <div style={{
        height: 6, background: 'var(--border1, #e0e0e0)', borderRadius: 3, margin: '0 0 12px', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${progressPct}%`, background: 'var(--blue, #3b82f6)',
          borderRadius: 3, transition: 'width 0.3s ease',
        }} />
      </div>

      {/* Section tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
        {sections.map((sec, i) => {
          const isActive = i === currentSection;
          const isDone = !!sectionCompleted[i];
          const canClick = isActive || isDone;
          return (
            <button key={sec.id}
              onClick={() => canClick && setCurrentSection(i)}
              style={{
                padding: '5px 12px', borderRadius: 20, fontSize: '0.72rem', fontWeight: 600,
                border: isActive ? '2px solid var(--blue, #3b82f6)' : '1px solid var(--border2, #ddd)',
                background: isDone ? '#e6f4ed' : isActive ? 'var(--bg1, #fff)' : 'var(--bg2, #f5f5f5)',
                color: isDone ? '#1a7a4a' : isActive ? 'var(--blue, #3b82f6)' : 'var(--text3, #999)',
                cursor: canClick ? 'pointer' : 'default',
                opacity: canClick ? 1 : 0.5,
                display: 'flex', alignItems: 'center', gap: 4,
              }}>
              {isDone && <CheckCircle2 size={12} strokeWidth={2} color="#1a7a4a" />}
              P{i + 1} {sec.title.replace(/^Partie \d+ —\s*/, '')}
            </button>
          );
        })}
      </div>

      {/* Current section */}
      <div style={{
        padding: '18px 20px', background: 'var(--bg1, #fff)', border: '1px solid var(--border2, #ddd)',
        borderRadius: 12, marginBottom: 16,
      }}>
        <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text1)', marginBottom: 4 }}>
          {section.title}
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text3)', marginBottom: 14 }}>
          {section.points} points
        </div>

        {section.description && (
          <div className="exercise-desc" style={{ whiteSpace: 'pre-line', marginBottom: 14 }}>
            {section.description}
          </div>
        )}

        {section.data && section.data.length > 0 && (
          <div className="data-table-wrap" style={{ marginBottom: 14 }}>
            <table className="data-table">
              <thead><tr><th>Donnee</th><th>Valeur</th></tr></thead>
              <tbody>{section.data.map((d, i) => <tr key={i}><td>{d.label}</td><td>{d.value}</td></tr>)}</tbody>
            </table>
          </div>
        )}

        {section.type === 'qcm-multi' && renderQcmMulti()}
        {section.type === 'journal' && renderJournal()}
        {section.type === 'calcul' && renderCalcul()}

        {/* Section score feedback */}
        {isSubmitted && (
          <div className={`feedback ${(sectionScores[currentSection] || 0) >= section.points * 0.6 ? 'success' : (sectionScores[currentSection] || 0) > 0 ? 'partial' : 'error'}`}
            style={{ marginTop: 14 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {(sectionScores[currentSection] || 0) >= section.points * 0.6
                ? <CheckCircle2 size={16} strokeWidth={2} color="#1a7a4a" style={{ flexShrink: 0 }} />
                : <XCircle size={16} strokeWidth={2} color={(sectionScores[currentSection] || 0) > 0 ? '#d4600a' : '#c0392b'} style={{ flexShrink: 0 }} />}
              <span style={{ fontWeight: 600 }}>
                {sectionScores[currentSection] || 0}/{section.points} points
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="btn-row">
        {!isSubmitted ? (
          <button className="btn btn-primary" onClick={handleValidate}>
            <Send size={14} strokeWidth={2} /> Valider la partie
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleNext}>
            {currentSection < sections.length - 1 ? 'Section suivante' : 'Voir les resultats'}{' '}
            <ChevronRight size={15} strokeWidth={2} />
          </button>
        )}
      </div>
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────
export default function ExerciseView({ activeGroup, setActiveGroup, scores, setScores }) {
  const group = exerciseGroups.find(g => g.id === activeGroup) || exerciseGroups[0];
  const groupExercises = exercises.filter(e => e.group === activeGroup);
  const [idx, setIdx] = useState(0);
  const [completed, setCompleted] = useState({});

  useEffect(() => { setIdx(0); setCompleted({}); }, [activeGroup]);

  const current = groupExercises[idx];

  if (!current) return (
    <>
      <div className="topbar"><h2>Exercices</h2></div>
      <div className="content"><p style={{ color: 'var(--text3)' }}>Aucun exercice dans ce groupe.</p></div>
    </>
  );

  const handleComplete = (score) => {
    setCompleted(p => ({ ...p, [current.id]: score }));
    setScores(p => ({ ...p, [current.id]: { score, group: activeGroup } }));
  };

  const relevantAccounts = current.type === 'journal' && current.ecritures
    ? COMPTES_CLES.filter(c => {
        const nums = current.ecritures.flatMap(e => [e.debit?.num, e.credit?.num].filter(Boolean));
        return nums.includes(c.num);
      }).slice(0, 14)
    : [];

  return (
    <>
      <div className="topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: 'var(--text3)', display: 'flex' }}>
            {GROUP_ICONS[group.id]}
          </span>
          <h2>{group.label}</h2>
        </div>
        <div className="topbar-right">
          <span className={`tag ${tagClass[group.tag]}`}>{tagLabel[group.tag]}</span>
          <span className="topbar-meta">{idx + 1} / {groupExercises.length}</span>
        </div>
      </div>

      <div className="content">
        {/* Tabs groupes */}
        <div className="exercise-groups">
          {exerciseGroups.map(g => (
            <button key={g.id} className={`group-btn ${activeGroup === g.id ? 'active' : ''}`} onClick={() => setActiveGroup(g.id)}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                {GROUP_ICONS[g.id]}
                {g.label}
              </span>
            </button>
          ))}
        </div>

        <div className="exercise-card">
          <div className="exercise-meta">
            <span className="exercise-num">EX-{String(idx + 1).padStart(2, '0')}</span>
            <span className={`tag ${tagClass[current.tag]}`}>{tagLabel[current.tag]}</span>
            <span style={{
              fontSize: '0.66rem', padding: '2px 7px', borderRadius: 4, fontWeight: 600,
              background: diffBg[current.difficulty], color: diffColor[current.difficulty],
            }}>
              {diffLabel[current.difficulty]}
            </span>
          </div>

          <div className="exercise-title">{current.title}</div>
          <div className="exercise-desc" style={{ whiteSpace: 'pre-line' }}>{current.description}</div>

          {current.data && current.data.length > 0 && (
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Donnée</th><th>Valeur</th></tr></thead>
                <tbody>{current.data.map((d, i) => <tr key={i}><td>{d.label}</td><td>{d.value}</td></tr>)}</tbody>
              </table>
            </div>
          )}

          {current.note && (
            <div className="hint-box">
              <Lightbulb size={15} strokeWidth={1.8} color="#7a5c00" style={{ flexShrink: 0, marginTop: 1 }} />
              <span><strong>Méthode :</strong> {current.note}</span>
            </div>
          )}

          {current.type === 'journal' && relevantAccounts.length > 0 && (
            <div className="pc-ref">
              <div className="pc-ref-title">
                <BookOpen size={13} strokeWidth={1.8} color="#2c5f8a" />
                Plan comptable — Comptes de référence
              </div>
              <div className="pc-ref-grid">
                {relevantAccounts.map(c => (
                  <div key={c.num} className="pc-ref-item">
                    <span className="pc-num">{c.num}</span><span>{c.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {current.type === 'qcm'     && <QCMExercise     key={`${current.id}-${idx}`} ex={current} onComplete={handleComplete} />}
          {current.type === 'journal' && <JournalExercise key={`${current.id}-${idx}`} ex={current} onComplete={handleComplete} />}
          {current.type === 'payslip' && <PayslipExercise key={`${current.id}-${idx}`} ex={current} />}
          {current.type === 'calcul'  && <CalculExercise  key={`${current.id}-${idx}`} ex={current} onComplete={handleComplete} />}
          {current.type === 'payslip-interactive' && <PayslipInteractiveExercise key={`${current.id}-${idx}`} ex={current} onComplete={handleComplete} />}
          {current.type === 'exam' && <ExamExercise key={`${current.id}-${idx}`} ex={current} onComplete={handleComplete} />}
        </div>

        {/* Navigation */}
        <div className="btn-row">
          <button className="btn btn-secondary" onClick={() => setIdx(i => Math.max(0, i - 1))} disabled={idx === 0}>
            <ChevronLeft size={15} strokeWidth={2} /> Précédent
          </button>
          <button className="btn btn-secondary" onClick={() => setIdx(i => Math.min(groupExercises.length - 1, i + 1))} disabled={idx === groupExercises.length - 1}>
            Suivant <ChevronRight size={15} strokeWidth={2} />
          </button>
        </div>

        {/* Points de progression */}
        <div className="progress-dots">
          {groupExercises.map((e, i) => (
            <div key={e.id} className="progress-dot" onClick={() => setIdx(i)} title={e.title}
              style={{
                background: completed[e.id] !== undefined
                  ? (completed[e.id] >= 0.99 ? 'var(--green)' : completed[e.id] >= 0.5 ? 'var(--orange)' : 'var(--red)')
                  : i === idx ? 'var(--blue)' : 'var(--border2)',
                border: i === idx ? '2px solid var(--blue-dark)' : '2px solid transparent',
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
