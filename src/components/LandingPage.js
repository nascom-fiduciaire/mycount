import React, { useState, useEffect } from 'react';
import { BookOpen, PenSquare, BarChart3, Table2, Building2, ArrowRight, ExternalLink } from 'lucide-react';

export default function LandingPage({ onStart, onSelectModule }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isMobile = width < 640;
  const isTablet = width < 1024;

  /* ───── styles ───── */
  const s = {
    page: {
      minHeight: '100vh',
      width: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      fontFamily: "'Inter', -apple-system, sans-serif",
      color: '#0f172a',
      WebkitFontSmoothing: 'antialiased',
    },

    /* HERO */
    hero: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2744 50%, #0f1729 100%)',
      padding: isMobile ? '60px 20px' : '80px 40px',
      position: 'relative',
      overflow: 'hidden',
    },
    heroGlow: {
      position: 'absolute',
      width: 600,
      height: 600,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
    },
    logo: {
      width: 80,
      height: 80,
      borderRadius: 20,
      marginBottom: 24,
      position: 'relative',
      zIndex: 1,
    },
    heroTitle: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: 800,
      color: '#fff',
      letterSpacing: '-0.02em',
      marginBottom: 12,
      position: 'relative',
      zIndex: 1,
    },
    heroSub: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      color: 'rgba(255,255,255,0.6)',
      maxWidth: 520,
      lineHeight: 1.6,
      marginBottom: 28,
      position: 'relative',
      zIndex: 1,
    },
    badge: {
      display: 'inline-block',
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 100,
      padding: '8px 20px',
      fontSize: '0.8rem',
      color: 'rgba(255,255,255,0.65)',
      marginBottom: 36,
      letterSpacing: '0.01em',
      position: 'relative',
      zIndex: 1,
    },
    cta: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: '#2563eb',
      color: '#fff',
      border: 'none',
      borderRadius: 12,
      padding: isMobile ? '14px 28px' : '16px 36px',
      fontSize: isMobile ? '0.95rem' : '1.05rem',
      fontWeight: 700,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      zIndex: 1,
      boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
    },
    heroFootnote: {
      marginTop: 20,
      fontSize: '0.78rem',
      color: 'rgba(255,255,255,0.35)',
      position: 'relative',
      zIndex: 1,
    },

    /* FEATURES */
    section: (bg) => ({
      padding: isMobile ? '48px 20px' : '60px 40px',
      background: bg,
    }),
    sectionTitle: {
      textAlign: 'center',
      fontSize: isMobile ? '1.35rem' : '1.6rem',
      fontWeight: 800,
      color: '#0f172a',
      marginBottom: 48,
      letterSpacing: '-0.01em',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(4, 1fr)',
      gap: 20,
      maxWidth: 1100,
      margin: '0 auto',
    },
    featureCard: {
      background: '#fff',
      border: '1px solid #e2e6ee',
      borderRadius: 14,
      padding: 24,
      boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)',
      transition: 'all 0.2s ease',
    },
    featureIcon: (bg) => ({
      width: 44,
      height: 44,
      borderRadius: 12,
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    }),
    featureTitle: {
      fontSize: '0.95rem',
      fontWeight: 700,
      color: '#0f172a',
      marginBottom: 8,
    },
    featureDesc: {
      fontSize: '0.82rem',
      color: '#475569',
      lineHeight: 1.6,
    },

    /* MODULES */
    modulesGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(3, 1fr)',
      gap: 24,
      maxWidth: 1100,
      margin: '0 auto',
    },
    moduleCard: (accentColor) => ({
      background: '#fff',
      border: '1px solid #e2e6ee',
      borderRadius: 16,
      padding: 28,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      borderTop: `3px solid ${accentColor}`,
      boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
    }),
    moduleIcon: (bg) => ({
      width: 48,
      height: 48,
      borderRadius: 14,
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18,
    }),
    moduleTitle: {
      fontSize: '1.1rem',
      fontWeight: 700,
      color: '#0f172a',
      marginBottom: 10,
    },
    moduleDesc: {
      fontSize: '0.82rem',
      color: '#475569',
      lineHeight: 1.6,
      marginBottom: 14,
      flex: 1,
    },
    moduleMeta: {
      fontSize: '0.75rem',
      color: '#94a3b8',
      fontWeight: 600,
      marginBottom: 18,
    },
    moduleBtn: (color) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: color,
      color: '#fff',
      border: 'none',
      borderRadius: 10,
      padding: '10px 20px',
      fontSize: '0.85rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontFamily: "'Inter', sans-serif",
      alignSelf: 'flex-start',
    }),

    /* FOOTER */
    footer: {
      background: '#0d1b2a',
      padding: isMobile ? '40px 20px' : '48px 40px',
      textAlign: 'center',
    },
    footerText: {
      fontSize: '0.82rem',
      color: 'rgba(255,255,255,0.45)',
      lineHeight: 1.8,
      maxWidth: 560,
      margin: '0 auto',
    },
    footerCopy: {
      fontSize: '0.75rem',
      color: 'rgba(255,255,255,0.25)',
      marginTop: 20,
    },
    footerLink: {
      color: 'rgba(255,255,255,0.45)',
      textDecoration: 'none',
      fontSize: '0.75rem',
      marginTop: 10,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      transition: 'color 0.15s ease',
    },
  };

  /* ───── hover helpers ───── */
  const [hoveredCta, setHoveredCta] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredModule, setHoveredModule] = useState(null);

  /* ───── data ───── */
  const features = [
    { icon: BookOpen, color: '#eff6ff', iconColor: '#2563eb', title: 'Theorie complete', desc: '24+ chapitres detailles couvrant les prescriptions legales, le bilan, la TVA, les salaires, les societes et l\'analyse financiere.' },
    { icon: PenSquare, color: '#ecfdf5', iconColor: '#059669', title: '100+ exercices interactifs', desc: 'QCM, ecritures comptables, calculs, fiches de salaire interactives. Correction automatique et feedback immediat.' },
    { icon: BarChart3, color: '#f5f3ff', iconColor: '#7c3aed', title: '3 modules progressifs', desc: 'Comptabilite generale, comptabilite des societes et analyse financiere. Du bilan de base au DCF.' },
    { icon: Table2, color: '#fff7ed', iconColor: '#ea580c', title: 'Plan comptable PME', desc: 'Le plan comptable suisse PME integre (SKV/swisco) avec recherche instantanee par numero ou libelle.' },
  ];

  // Use proper French with accents in the rendered text
  const modules = [
    {
      id: 'generale',
      icon: BookOpen,
      color: '#2563eb',
      bg: '#eff6ff',
      title: 'Comptabilit\u00e9 g\u00e9n\u00e9rale',
      desc: 'Prescriptions l\u00e9gales, fondements, TVA, salaires, marchandises, bouclement, hors exploitation',
      meta: '7 chapitres \u00b7 8 groupes d\u2019exercices',
    },
    {
      id: 'societes',
      icon: Building2,
      color: '#7c3aed',
      bg: '#f5f3ff',
      title: 'Comptabilit\u00e9 des soci\u00e9t\u00e9s',
      desc: 'Formes juridiques, fondation SA, distribution, augmentation capital, assainissement, fusion, liquidation',
      meta: '7 chapitres \u00b7 2 groupes d\u2019exercices',
    },
    {
      id: 'analyse',
      icon: BarChart3,
      color: '#059669',
      bg: '#ecfdf5',
      title: 'Analyse financi\u00e8re',
      desc: 'Retraitements, structure, FDR, liquidit\u00e9, rentabilit\u00e9, endettement, flux, seuil, \u00e9valuation, investissements',
      meta: '10 chapitres \u00b7 3 groupes d\u2019exercices',
    },
  ];

  return (
    <div style={s.page}>
      {/* ───── HERO ───── */}
      <section style={s.hero}>
        <div style={s.heroGlow} />
        <img src="/logo.svg" alt="MyCount" style={s.logo} />
        <h1 style={s.heroTitle}>MyCount</h1>
        <p style={{ ...s.heroSub, maxWidth: 600 }}>
          Ce site propose des ressources pour apprendre la comptabilité et la finance suisse. Il est destiné aux étudiants en formation commerciale, aux apprentis en fiduciaire, mais aussi à toute personne souhaitant découvrir la comptabilité ou se perfectionner dans ce domaine.
        </p>
        <p style={{ ...s.heroSub, maxWidth: 560, fontSize: isMobile ? '0.88rem' : '0.95rem', marginBottom: 32, color: 'rgba(255,255,255,0.5)' }}>
          Théorie détaillée, exercices interactifs avec correction automatique, fiches de salaire à compléter, plan comptable intégré — tout est là pour apprendre à votre rythme.
        </p>
        <div style={s.badge}>
          {'\ud83c\udde8\ud83c\udded'} Conforme au droit suisse
        </div>
        <button
          style={{
            ...s.cta,
            ...(hoveredCta ? { background: '#1d4ed8', transform: 'translateY(-1px)', boxShadow: '0 6px 24px rgba(37,99,235,0.45)' } : {}),
          }}
          onMouseEnter={() => setHoveredCta(true)}
          onMouseLeave={() => setHoveredCta(false)}
          onClick={onStart}
        >
          Commencer l'apprentissage
          <ArrowRight size={18} />
        </button>
        <p style={{ ...s.heroFootnote, marginTop: 20, fontSize: '0.76rem' }}>Nous vous souhaitons beaucoup de plaisir dans votre apprentissage !</p>
      </section>

      {/* ───── FEATURES ───── */}
      <section style={s.section('#ffffff')}>
        <h2 style={s.sectionTitle}>
          Tout ce qu{'\u2019'}il faut pour ma{'\u00ee'}triser la comptabilit{'\u00e9'} suisse
        </h2>
        <div style={s.featuresGrid}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                style={{
                  ...s.featureCard,
                  ...(hoveredCard === i ? { transform: 'translateY(-3px)', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04)' } : {}),
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={s.featureIcon(f.color)}>
                  <Icon size={20} color={f.iconColor} strokeWidth={2.2} />
                </div>
                <div style={s.featureTitle}>{f.title === 'Theorie complete' ? 'Th\u00e9orie compl\u00e8te' : f.title === '100+ exercices interactifs' ? '100+ exercices interactifs' : f.title === '3 modules progressifs' ? '3 modules progressifs' : 'Plan comptable PME'}</div>
                <div style={s.featureDesc}>
                  {i === 0 && '24+ chapitres d\u00e9taill\u00e9s couvrant les prescriptions l\u00e9gales, le bilan, la TVA, les salaires, les soci\u00e9t\u00e9s et l\u2019analyse financi\u00e8re.'}
                  {i === 1 && 'QCM, \u00e9critures comptables, calculs, fiches de salaire interactives. Correction automatique et feedback imm\u00e9diat.'}
                  {i === 2 && 'Comptabilit\u00e9 g\u00e9n\u00e9rale, comptabilit\u00e9 des soci\u00e9t\u00e9s et analyse financi\u00e8re. Du bilan de base au DCF.'}
                  {i === 3 && 'Le plan comptable suisse PME int\u00e9gr\u00e9 (SKV/swisco) avec recherche instantan\u00e9e par num\u00e9ro ou libell\u00e9.'}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ───── MODULES ───── */}
      <section style={s.section('#f0f2f7')}>
        <h2 style={s.sectionTitle}>Choisissez votre module</h2>
        <div style={s.modulesGrid}>
          {modules.map((m) => {
            const Icon = m.icon;
            const isHovered = hoveredModule === m.id;
            return (
              <div
                key={m.id}
                style={{
                  ...s.moduleCard(m.color),
                  ...(isHovered ? { transform: 'translateY(-4px)', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.04)' } : {}),
                }}
                onMouseEnter={() => setHoveredModule(m.id)}
                onMouseLeave={() => setHoveredModule(null)}
              >
                <div style={s.moduleIcon(m.bg)}>
                  <Icon size={24} color={m.color} strokeWidth={2} />
                </div>
                <div style={s.moduleTitle}>{m.title}</div>
                <div style={s.moduleDesc}>{m.desc}</div>
                <div style={s.moduleMeta}>{m.meta}</div>
                <button
                  style={{
                    ...s.moduleBtn(m.color),
                    ...(isHovered ? { opacity: 0.9 } : {}),
                  }}
                  onClick={() => {
                    onSelectModule(m.id);
                    onStart();
                  }}
                >
                  Commencer
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer style={s.footer}>
        <p style={s.footerText}>
          <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>MyCount</strong>
          {' \u2014 Plateforme d\u2019apprentissage de la comptabilit\u00e9 et finance suisse'}
          <br />
          {'Bas\u00e9 sur le Code des obligations suisse, la LTVA, et les normes SKV/swisco'}
        </p>
        <p style={s.footerCopy}>{'\u00a9'} 2024-2026 MyCount {'\u00b7'} Tous droits r{'\u00e9'}serv{'\u00e9'}s</p>
        <a
          href="https://github.com/nascom-fiduciaire/mycount"
          target="_blank"
          rel="noopener noreferrer"
          style={s.footerLink}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}
        >
          <ExternalLink size={14} />
          GitHub
        </a>
      </footer>
    </div>
  );
}
