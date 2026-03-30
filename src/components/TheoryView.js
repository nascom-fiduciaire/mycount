import React, { useState, useEffect, useRef, useMemo } from 'react';
import { BookOpen, Percent, Banknote, Scale, List, ChevronUp } from 'lucide-react';
import { theoryChapters } from '../data/theory/index';

const tagLabel = { base: 'Fondements', tva: 'TVA suisse', salaires: 'Salaires', bouclement: 'Bouclement', legal: 'Droit CO' };
const tagClass  = { base: 'tag-base', tva: 'tag-tva', salaires: 'tag-salaires', bouclement: 'tag-bouclement', legal: 'tag-base' };

const TAG_ICONS = {
  base:     <BookOpen size={13} strokeWidth={1.8} />,
  tva:      <Percent size={13} strokeWidth={1.8} />,
  salaires: <Banknote size={13} strokeWidth={1.8} />,
  legal:    <Scale size={13} strokeWidth={1.8} />,
};

// ─── Parseur de tableau Markdown ──────────────────────────────────────────────
function parseTable(lines) {
  const rows = lines.map(l =>
    l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim())
  );
  if (rows.length < 2) return null;
  const headers = rows[0];
  const dataRows = rows.slice(2);
  return { headers, dataRows };
}

// ─── Composant tableau théorie ─────────────────────────────────────────────────
function TheoryTable({ headers, dataRows }) {
  return (
    <div style={{ margin: '18px 0', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
        <thead>
          <tr style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)' }}>
            {headers.map((h, i) => (
              <th key={i} style={{ padding: '10px 16px', color: '#fff', textAlign: 'left', fontWeight: 600, fontSize: '0.76rem', letterSpacing: '0.05em' }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc', borderBottom: '1px solid var(--border)' }}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: '9px 16px', color: j === 0 ? '#0f172a' : '#475569', fontWeight: j === 0 ? 600 : 400, lineHeight: 1.55, verticalAlign: 'top' }}>
                  <InlineMarkdown text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Rendu inline (gras, italique, code dans les cellules) ───────────────────
function InlineMarkdown({ text }) {
  if (!text) return null;
  const parts = [];
  let remaining = text;
  let key = 0;
  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    const italicMatch = remaining.match(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/);
    const codeMatch = remaining.match(/`(.+?)`/);

    const matches = [boldMatch, italicMatch, codeMatch]
      .filter(Boolean)
      .sort((a, b) => a.index - b.index);

    if (matches.length === 0) {
      parts.push(<span key={key++}>{remaining}</span>);
      break;
    }

    const first = matches[0];
    if (first.index > 0) {
      parts.push(<span key={key++}>{remaining.slice(0, first.index)}</span>);
    }

    if (first === boldMatch) {
      parts.push(<strong key={key++} style={{ color: '#0f172a', fontWeight: 700 }}>{first[1]}</strong>);
    } else if (first === italicMatch) {
      parts.push(<em key={key++}>{first[1]}</em>);
    } else if (first === codeMatch) {
      parts.push(<code key={key++} style={{ background: '#eff6ff', padding: '2px 6px', borderRadius: 4, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82em', color: '#2563eb', border: '1px solid #dbeafe' }}>{first[1]}</code>);
    }

    remaining = remaining.slice(first.index + first[0].length);
  }
  return <>{parts}</>;
}

// ─── Parseur de contenu principal ─────────────────────────────────────────────
function parseContent(content) {
  const lines = content.split('\n');
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim().startsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      const parsed = parseTable(tableLines);
      if (parsed) blocks.push({ type: 'table', ...parsed });
      continue;
    }

    if (line.trim().startsWith('>')) {
      const bqLines = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        bqLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      blocks.push({ type: 'blockquote', text: bqLines.join('\n') });
      continue;
    }

    if (line.trim().startsWith('###')) {
      blocks.push({ type: 'h3', text: line.trim().replace(/^###\s*/, '') });
      i++; continue;
    }
    if (line.trim().startsWith('##')) {
      const text = line.trim().replace(/^##\s*/, '');
      // Extract number if present (e.g. "1. Définition" or "1 — Définition")
      const numMatch = text.match(/^(\d+)[.\s—–-]+\s*(.*)/);
      blocks.push({
        type: 'h2',
        text,
        num: numMatch ? numMatch[1] : null,
        label: numMatch ? numMatch[2] : text,
        id: `section-${blocks.filter(b => b.type === 'h2').length}`,
      });
      i++; continue;
    }
    if (line.trim().startsWith('#')) {
      blocks.push({ type: 'h1', text: line.trim().replace(/^#\s*/, '') });
      i++; continue;
    }

    if (line.trim() === '---') {
      blocks.push({ type: 'hr' });
      i++; continue;
    }

    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      const items = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        items.push(lines[i].trim().replace(/^[-*]\s/, ''));
        i++;
      }
      blocks.push({ type: 'list', items });
      continue;
    }

    if (line.trim() === '') { i++; continue; }

    const paraLines = [];
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().startsWith('#') && !lines[i].trim().startsWith('|') && !lines[i].trim().startsWith('>') && !lines[i].trim().startsWith('- ') && !lines[i].trim().startsWith('* ') && lines[i].trim() !== '---') {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ type: 'paragraph', text: paraLines.join(' ') });
    }
  }

  return blocks;
}

// ─── Rendu d'un bloc ──────────────────────────────────────────────────────────
function Block({ block, idx }) {
  switch (block.type) {
    case 'h1':
      return <h1 key={idx} style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '32px 0 14px', letterSpacing: '-0.025em' }}><InlineMarkdown text={block.text} /></h1>;

    case 'h2':
      return (
        <div key={idx} id={block.id} style={{ margin: '36px 0 16px', display: 'flex', alignItems: 'stretch', gap: 0, borderRadius: 10, overflow: 'hidden', background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
          {block.num && (
            <div style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 48, fontWeight: 800, fontSize: '1.1rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '-0.02em', flexShrink: 0 }}>
              {block.num}
            </div>
          )}
          <div style={{ padding: '11px 18px', flex: 1, display: 'flex', alignItems: 'center' }}>
            <h2 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.01em' }}>
              <InlineMarkdown text={block.label} />
            </h2>
          </div>
        </div>
      );

    case 'h3':
      return (
        <h3 key={idx} style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', margin: '24px 0 10px', paddingBottom: 7, borderBottom: '2px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 4, height: 16, background: '#2563eb', borderRadius: 2, flexShrink: 0 }} />
          <InlineMarkdown text={block.text} />
        </h3>
      );

    case 'hr':
      return <div key={idx} style={{ height: 0, margin: '8px 0' }} />;

    case 'paragraph':
      return <p key={idx} style={{ margin: '0 0 14px', lineHeight: 1.8, color: '#475569', fontSize: '0.88rem' }}><InlineMarkdown text={block.text} /></p>;

    case 'list':
      return (
        <ul key={idx} style={{ margin: '0 0 16px', paddingLeft: 0, listStyle: 'none' }}>
          {block.items.map((item, i) => (
            <li key={i} style={{
              display: 'flex', gap: 10, marginBottom: 6, fontSize: '0.88rem', color: '#475569', lineHeight: 1.7,
              padding: '4px 0 4px 12px', borderLeft: '2px solid #dbeafe', marginLeft: 4
            }}>
              <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0, marginTop: 1, fontSize: '0.7rem' }}>&#9654;</span>
              <span><InlineMarkdown text={item} /></span>
            </li>
          ))}
        </ul>
      );

    case 'blockquote':
      return (
        <div key={idx} style={{
          margin: '18px 0', padding: '14px 18px', borderRadius: 10,
          background: 'linear-gradient(135deg, #fffbeb, #fef9c3)', border: '1px solid #fde68a',
          borderLeft: '4px solid #f59e0b',
          display: 'flex', gap: 10, alignItems: 'flex-start'
        }}>
          <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: 1 }}>&#9432;</span>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#92400e', lineHeight: 1.7, fontWeight: 500 }}>
            <InlineMarkdown text={block.text} />
          </p>
        </div>
      );

    case 'table':
      return <TheoryTable key={idx} headers={block.headers} dataRows={block.dataRows} />;

    default:
      return null;
  }
}

// ─── Table des matières flottante ─────────────────────────────────────────────
function TableOfContents({ sections, activeSection, onScrollTo }) {
  const [isOpen, setIsOpen] = useState(false);

  if (sections.length < 3) return null;

  return (
    <div style={{ position: 'sticky', top: 16, zIndex: 5 }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex', alignItems: 'center', gap: 7,
          padding: '8px 14px', borderRadius: 8,
          background: isOpen ? '#0f172a' : '#fff', color: isOpen ? '#fff' : '#475569',
          border: '1px solid #e2e8f0', cursor: 'pointer',
          fontSize: '0.76rem', fontWeight: 600, fontFamily: 'Inter, sans-serif',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          transition: 'all 0.2s',
          marginBottom: isOpen ? 0 : 0,
        }}
      >
        <List size={14} strokeWidth={2} />
        Sommaire ({sections.length})
      </button>
      {isOpen && (
        <div style={{
          background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10,
          padding: '8px 6px', marginTop: 6,
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          maxHeight: 320, overflowY: 'auto',
        }}>
          {sections.map((s, i) => (
            <button
              key={i}
              onClick={() => { onScrollTo(s.id); setIsOpen(false); }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8, width: '100%',
                padding: '7px 10px', borderRadius: 6, border: 'none', cursor: 'pointer',
                background: activeSection === s.id ? '#eff6ff' : 'transparent',
                color: activeSection === s.id ? '#2563eb' : '#475569',
                fontSize: '0.78rem', fontWeight: activeSection === s.id ? 600 : 400,
                fontFamily: 'Inter, sans-serif', textAlign: 'left',
                transition: 'all 0.12s',
              }}
            >
              {s.num && (
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', fontWeight: 700,
                  color: activeSection === s.id ? '#2563eb' : '#94a3b8',
                  minWidth: 18,
                }}>{s.num}</span>
              )}
              <span style={{ flex: 1 }}>{s.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Vue principale ────────────────────────────────────────────────────────────
export default function TheoryView({ activeTheory }) {
  const chapter = theoryChapters.find(c => c.id === activeTheory) || theoryChapters[0];
  const blocks = useMemo(() => parseContent(chapter.content || ''), [chapter.content]);
  const scrollRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);
  const [showTop, setShowTop] = useState(false);

  const sections = useMemo(() =>
    blocks.filter(b => b.type === 'h2').map(b => ({ id: b.id, num: b.num, label: b.label })),
    [blocks]
  );

  // Track which section is visible
  useEffect(() => {
    const container = scrollRef.current?.closest('.main');
    if (!container || sections.length === 0) return;

    const onScroll = () => {
      setShowTop(container.scrollTop > 300);
      const sectionEls = sections.map(s => document.getElementById(s.id)).filter(Boolean);
      let current = sections[0]?.id;
      for (const el of sectionEls) {
        const rect = el.getBoundingClientRect();
        if (rect.top < 200) current = el.id;
      }
      setActiveSection(current);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    const container = scrollRef.current?.closest('.main');
    if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <span style={{ color: 'var(--text3)', display: 'flex' }}>
            {TAG_ICONS[chapter.tag] || <BookOpen size={14} strokeWidth={1.8} />}
          </span>
          <h2>{chapter.title}</h2>
        </div>
        <div className="topbar-right">
          <span className={`tag ${tagClass[chapter.tag] || 'tag-base'}`}>
            {tagLabel[chapter.tag] || chapter.tag}
          </span>
          <span className="topbar-meta">PME suisse · CO 2015</span>
        </div>
      </div>

      <div ref={scrollRef} style={{ padding: '28px 40px 64px', position: 'relative' }}>
        <div style={{ display: 'flex', gap: 32, maxWidth: 1060, alignItems: 'flex-start' }}>

          {/* Main content */}
          <div style={{ flex: 1, maxWidth: 820, minWidth: 0 }}>
            {/* Chapter header card */}
            <div style={{
              background: 'linear-gradient(135deg, #1e293b, #0f172a)',
              borderRadius: 14, padding: '24px 28px', marginBottom: 32,
              color: '#fff', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(59,130,246,0.1)' }} />
              <div style={{ position: 'absolute', bottom: -30, right: 40, width: 80, height: 80, borderRadius: '50%', background: 'rgba(59,130,246,0.06)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span className={`tag ${tagClass[chapter.tag] || 'tag-base'}`} style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                  {tagLabel[chapter.tag] || chapter.tag}
                </span>
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'JetBrains Mono, monospace' }}>
                  {sections.length} sections
                </span>
              </div>
              <h1 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.025em', margin: 0, lineHeight: 1.3, position: 'relative' }}>
                {chapter.title}
              </h1>
            </div>

            {blocks.map((block, idx) => <Block key={idx} block={block} idx={idx} />)}
          </div>

          {/* Floating TOC - desktop only */}
          {sections.length >= 3 && (
            <div style={{ width: 200, flexShrink: 0, position: 'sticky', top: 20 }}>
              <TableOfContents sections={sections} activeSection={activeSection} onScrollTo={scrollToSection} />
            </div>
          )}
        </div>

        {/* Back to top button */}
        {showTop && (
          <button
            onClick={scrollToTop}
            style={{
              position: 'fixed', bottom: 24, right: 24, width: 40, height: 40,
              borderRadius: 10, border: '1px solid #e2e8f0', background: '#fff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s', zIndex: 20,
            }}
          >
            <ChevronUp size={18} strokeWidth={2} color="#475569" />
          </button>
        )}
      </div>
    </>
  );
}
