import React from 'react';
import { P, H2, H3, Note, Tableau } from '../TheoryUI';

/* ============================================================
   VISUAL COMPONENTS
   ============================================================ */

function RatioGauge({ label, value, unit = '', zones }) {
  const allMin = Math.min(...zones.map(z => z.min));
  const allMax = Math.max(...zones.map(z => z.max));
  const range = allMax - allMin;
  const clampedValue = Math.min(Math.max(value, allMin), allMax);
  const markerPercent = ((clampedValue - allMin) / range) * 100;

  return (
    <div style={{ margin: '18px 0', padding: '16px 20px', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.95rem' }}>{label}</span>
        <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#2563eb' }}>
          {typeof value === 'number' ? value.toFixed(2) : value}{unit}
        </span>
      </div>
      <div style={{ position: 'relative', height: 28, borderRadius: 8, overflow: 'hidden', display: 'flex' }}>
        {zones.map((zone, i) => {
          const width = ((zone.max - zone.min) / range) * 100;
          return (
            <div key={i} style={{
              width: `${width}%`, background: zone.color, height: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.65rem', fontWeight: 600, color: '#475569', letterSpacing: 0.3
            }}>
              {zone.label}
            </div>
          );
        })}
        <div style={{
          position: 'absolute', left: `calc(${markerPercent}% - 2px)`, top: 0, bottom: 0,
          width: 4, background: '#1e293b', borderRadius: 2, zIndex: 2
        }} />
        <div style={{
          position: 'absolute', left: `calc(${markerPercent}% - 12px)`, top: -18,
          fontSize: '0.7rem', fontWeight: 800, color: '#1e293b'
        }}>
          {'▼'}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, fontSize: '0.65rem', color: '#94a3b8' }}>
        {zones.map((zone, i) => (
          <span key={i}>{zone.min}</span>
        ))}
        <span>{zones[zones.length - 1].max}</span>
      </div>
    </div>
  );
}

function FormulaBox({ formula, description }) {
  return (
    <div style={{ margin: '16px 0', padding: '16px 20px', background: '#f0f4ff', border: '2px solid #2563eb', borderRadius: 12, textAlign: 'center' }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.05rem', fontWeight: 700, color: '#1e3a5f', marginBottom: 4 }}>{formula}</div>
      {description && <div style={{ fontSize: '0.78rem', color: '#64748b', fontStyle: 'italic' }}>{description}</div>}
    </div>
  );
}

function RatioCard({ name, formula, value, norm, interpretation, color = '#2563eb' }) {
  return (
    <div style={{
      margin: '12px 0', padding: '14px 18px', background: '#fff', borderRadius: 10,
      borderLeft: `5px solid ${color}`, boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
      display: 'flex', flexDirection: 'column', gap: 6
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.95rem' }}>{name}</span>
        <span style={{ fontWeight: 800, fontSize: '1.15rem', color }}>{value}</span>
      </div>
      {formula && <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#64748b' }}>{formula}</div>}
      {norm && <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600 }}>Norme : {norm}</div>}
      {interpretation && <div style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.5 }}>{interpretation}</div>}
    </div>
  );
}

function DuPontTree({ margeNette, rotationActifs, levier, roe }) {
  const boxStyle = (bg, border) => ({
    padding: '12px 16px', borderRadius: 10, border: `2px solid ${border}`,
    background: bg, textAlign: 'center', minWidth: 140
  });
  const labelStyle = { fontSize: '0.72rem', color: '#64748b', fontWeight: 600, marginBottom: 2 };
  const valueStyle = { fontSize: '1.1rem', fontWeight: 800 };
  const multStyle = { fontSize: '1.4rem', fontWeight: 800, color: '#94a3b8', display: 'flex', alignItems: 'center', padding: '0 6px' };

  return (
    <div style={{ margin: '20px 0', padding: '20px', background: '#f8fafc', borderRadius: 14, border: '1px solid #e2e8f0' }}>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <div style={labelStyle}>ROE (Rentabilité des fonds propres)</div>
        <div style={{ ...valueStyle, fontSize: '1.5rem', color: '#7c3aed' }}>{roe}%</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
        <div style={boxStyle('#eff6ff', '#3b82f6')}>
          <div style={labelStyle}>Marge nette</div>
          <div style={{ ...valueStyle, color: '#2563eb' }}>{margeNette}%</div>
          <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Résultat / CA</div>
        </div>
        <div style={multStyle}>{'×'}</div>
        <div style={boxStyle('#f0fdf4', '#22c55e')}>
          <div style={labelStyle}>Rotation actifs</div>
          <div style={{ ...valueStyle, color: '#16a34a' }}>{rotationActifs}x</div>
          <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>CA / Actifs</div>
        </div>
        <div style={multStyle}>{'×'}</div>
        <div style={boxStyle('#fef3c7', '#f59e0b')}>
          <div style={labelStyle}>Levier financier</div>
          <div style={{ ...valueStyle, color: '#d97706' }}>{levier}x</div>
          <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Actifs / CP</div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 12, fontSize: '0.8rem', color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
        {margeNette}% {'×'} {rotationActifs} {'×'} {levier} = {roe}%
      </div>
    </div>
  );
}

function WaterfallBar({ items }) {
  const maxVal = Math.max(...items.map(it => Math.abs(it.value)));
  return (
    <div style={{ margin: '18px 0', padding: '16px', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
      {items.map((item, i) => {
        const widthPct = (Math.abs(item.value) / maxVal) * 100;
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 8, gap: 10 }}>
            <div style={{ width: 160, fontSize: '0.78rem', fontWeight: 600, color: '#334155', textAlign: 'right' }}>
              {item.label}
            </div>
            <div style={{ flex: 1, height: 22, background: '#e2e8f0', borderRadius: 6, overflow: 'hidden' }}>
              <div style={{
                width: `${widthPct}%`, height: '100%', background: item.color || '#3b82f6',
                borderRadius: 6, transition: 'width 0.3s'
              }} />
            </div>
            <div style={{ width: 100, fontSize: '0.82rem', fontWeight: 700, color: '#1e293b', textAlign: 'right' }}>
              CHF {item.value.toLocaleString('fr-CH')}
            </div>
            {item.margin !== undefined && (
              <div style={{ width: 60, fontSize: '0.75rem', fontWeight: 700, color: item.color || '#3b82f6', textAlign: 'right' }}>
                {item.margin}%
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function LeverageComparison({ scenarios }) {
  const maxRoe = Math.max(...scenarios.map(s => Math.abs(s.roe)));
  return (
    <div style={{ margin: '18px 0', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {scenarios.map((s, i) => (
        <div key={i} style={{
          flex: '1 1 200px', padding: '16px', borderRadius: 12,
          background: s.roe >= 0 ? '#f0fdf4' : '#fef2f2',
          border: `2px solid ${s.roe >= 0 ? '#22c55e' : '#ef4444'}`,
          textAlign: 'center'
        }}>
          <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#334155', marginBottom: 8 }}>{s.label}</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 4 }}>CP : CHF {s.cp.toLocaleString('fr-CH')}</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 4 }}>CE : CHF {s.ce.toLocaleString('fr-CH')}</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: 10 }}>CE/CP : {s.levier}</div>
          <div style={{
            fontSize: '1.6rem', fontWeight: 800,
            color: s.roe >= 0 ? '#16a34a' : '#dc2626'
          }}>
            ROE = {s.roe}%
          </div>
          <div style={{
            marginTop: 8, height: 8, background: '#e2e8f0', borderRadius: 4, overflow: 'hidden'
          }}>
            <div style={{
              width: `${(Math.abs(s.roe) / maxRoe) * 100}%`, height: '100%',
              background: s.roe >= 0 ? '#22c55e' : '#ef4444', borderRadius: 4
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   ZONES DEFINITIONS (reusable)
   ============================================================ */
const zonesL3 = [
  { min: 0, max: 1.0, color: '#fee2e2', label: 'Danger' },
  { min: 1.0, max: 1.5, color: '#fef9c3', label: 'Faible' },
  { min: 1.5, max: 2.0, color: '#dcfce7', label: 'Bon' },
  { min: 2.0, max: 3.0, color: '#dbeafe', label: 'Excellent' }
];
const zonesL2 = [
  { min: 0, max: 0.5, color: '#fee2e2', label: 'Danger' },
  { min: 0.5, max: 1.0, color: '#fef9c3', label: 'Faible' },
  { min: 1.0, max: 1.5, color: '#dcfce7', label: 'Bon' },
  { min: 1.5, max: 2.5, color: '#dbeafe', label: 'Excellent' }
];
const zonesL1 = [
  { min: 0, max: 0.1, color: '#fee2e2', label: 'Insuffisant' },
  { min: 0.1, max: 0.2, color: '#fef9c3', label: 'Faible' },
  { min: 0.2, max: 0.3, color: '#dcfce7', label: 'Norme' },
  { min: 0.3, max: 0.6, color: '#dbeafe', label: 'Élevé' }
];
const zonesEndettement = [
  { min: 0, max: 40, color: '#dcfce7', label: 'Faible' },
  { min: 40, max: 60, color: '#fef9c3', label: 'Correct' },
  { min: 60, max: 80, color: '#fed7aa', label: 'Risqué' },
  { min: 80, max: 100, color: '#fee2e2', label: 'Danger' }
];
const zonesCouverture = [
  { min: 0, max: 1.5, color: '#fee2e2', label: 'Danger' },
  { min: 1.5, max: 3, color: '#fef9c3', label: 'Faible' },
  { min: 3, max: 5, color: '#dcfce7', label: 'Bon' },
  { min: 5, max: 10, color: '#dbeafe', label: 'Excellent' }
];

/* ============================================================
   CHAPTER 4 — RATIOS DE LIQUIDITÉ
   ============================================================ */

export function TabLiquidite() {
  return (
    <>
      {/* -------- INTRODUCTION -------- */}
      <H2>1. Introduction — La liquidité, c’est la survie</H2>

      <P>
        La liquidité constitue la pierre angulaire de la santé financière à court terme de toute entreprise. Une société peut afficher un bénéfice net impressionnant dans son compte de résultat et pourtant se retrouver en situation de cessation de paiement si elle ne dispose pas des fonds nécessaires pour régler ses factures à échéance. Ce paradoxe fondamental de la finance d’entreprise a provoqué la faillite de nombreuses sociétés pourtant rentables, en particulier celles en forte croissance dont le besoin en fonds de roulement augmente plus vite que leur capacité à générer du cash.
      </P>

      <P>
        L’analyse de la liquidité répond à une question précise : l’entreprise est-elle en mesure d’honorer ses engagements financiers à court terme, c’est-à-dire ceux dont l’échéance intervient dans les douze prochains mois ? Il s’agit principalement des dettes fournisseurs, des salaires, des charges sociales, des acomptes d’impôts et des échéances de prêts bancaires à court terme. L’incapacité de faire face à ces obligations déclenche une procédure de poursuite (LP) en Suisse, pouvant conduire à la faillite.
      </P>

      <P>
        Il est essentiel de distinguer la liquidité de la solvabilité. La solvabilité s’intéresse à la capacité de l’entreprise à rembourser l’ensemble de ses dettes, y compris celles à long terme ; c’est une perspective structurelle. La liquidité, en revanche, se concentre sur le très court terme et la capacité opérationnelle à payer au jour le jour. Une entreprise peut être solvable sans être liquide, et inversement, une entreprise liquide peut être insolvable si ses actifs valent globalement moins que ses dettes.
      </P>

      <Note>
        Imaginez que vous possédez un appartement d’une valeur de CHF 500’000, mais que vous n’avez pas CHF 50 dans votre porte-monnaie pour payer votre café au restaurant. Vous êtes solvable (votre patrimoine dépasse largement vos dettes) mais vous n’êtes pas liquide (vous ne pouvez pas payer votre consommation immédiate). L’entreprise fait face au même dilemme lorsque ses actifs sont immobilisés et ses liquidités insuffisantes.
      </Note>

      <P>
        En pratique, les créanciers et les banquiers suisses examinent systématiquement trois niveaux de liquidité, classés du plus large au plus restrictif : la liquidité générale (L3), la liquidité réduite (L2) et la liquidité immédiate (L1). Chaque niveau filtre un type d’actif supplémentaire pour obtenir une image de plus en plus prudente de la capacité de paiement. Nous allons examiner chacun en détail avec des exemples chiffrés concrets.
      </P>

      {/* -------- L3 -------- */}
      <H2>2. Liquidité générale (L3) — Current Ratio</H2>

      <P>
        La liquidité générale, appelée également current ratio dans la terminologie anglo-saxonne, est le ratio de liquidité le plus couramment utilisé. Il met en rapport l’ensemble des actifs circulants (trésorerie, créances, stocks, actifs de régularisation) avec l’ensemble des capitaux étrangers à court terme (dettes fournisseurs, dettes bancaires CT, passifs de régularisation). Ce ratio répond à la question suivante : si l’entreprise devait liquider tous ses actifs à court terme, pourrait-elle couvrir toutes ses dettes à court terme ?
      </P>

      <FormulaBox
        formula="L3 = Actifs circulants / Capitaux étrangers court terme"
        description="Current Ratio — compare l’ensemble de l’AC aux dettes CT"
      />

      <P>
        Un L3 de 1.8 signifie que pour chaque franc suisse de dette à court terme, l’entreprise dispose de CHF 1.80 d’actifs mobilisables dans l’année. En d’autres termes, après avoir remboursé toutes ses dettes CT, il resterait CHF 0.80 par franc de dette, ce qui constitue une marge de sécurité confortable. La norme suisse généralement acceptée pour les PME se situe entre 1.5 et 2.0. Un ratio inférieur à 1.0 signale un danger immédiat : les actifs circulants ne suffisent pas à couvrir les dettes court terme, ce qui crée un déficit structurel de liquidité.
      </P>

      <P>
        Cependant, le L3 présente une limite importante : il traite tous les actifs circulants de manière équivalente. Or, un stock de marchandises spécialisées (par exemple, des pièces détachées pour machines industrielles) n’est pas aussi facilement convertible en cash que des créances clients à 30 jours. Un L3 de 2.0 n’a pas la même signification si 80% des actifs circulants sont en trésorerie ou si 80% sont constitués de stocks potentiellement obsolètes. C’est pourquoi les analystes complètent toujours le L3 par le L2.
      </P>

      <P>
        Prenons un exemple concret. La société HELVETIA PRECISION SA, fabricant de composants horlogers à Bienne, présente le bilan simplifié suivant au 31 décembre N :
      </P>

      <Tableau
        titre="Bilan simplifié HELVETIA PRECISION SA (en CHF)"
        colonnes={['Actifs', 'Montant', 'Passifs', 'Montant']}
        lignes={[
          ['Trésorerie', '120’000', 'Dettes fournisseurs', '280’000'],
          ['Créances clients', '350’000', 'Dettes bancaires CT', '150’000'],
          ['Stocks', '430’000', 'Passifs régularisation', '70’000'],
          ['Actifs régularisation', '25’000', 'Total CE court terme', '500’000'],
          ['Total actifs circulants', '925’000', '', ''],
          ['Immobilisations', '1’075’000', 'CE long terme', '600’000'],
          ['', '', 'Capitaux propres', '900’000'],
          ['Total actifs', '2’000’000', 'Total passifs', '2’000’000'],
        ]}
      />

      <P>
        Calcul du L3 : Actifs circulants (CHF 925’000) / CE court terme (CHF 500’000) = 1.85. Ce ratio se situe dans la fourchette normale de 1.5 à 2.0, ce qui signifie que la société dispose d’une marge de sécurité satisfaisante pour honorer ses engagements à court terme. Pour chaque franc de dette CT, elle possède CHF 1.85 d’actifs circulants.
      </P>

      <RatioGauge label="L3 — Current Ratio" value={1.85} zones={zonesL3} />

      {/* -------- L2 -------- */}
      <H2>3. Liquidité réduite (L2) — Quick Ratio / Acid Test</H2>

      <P>
        La liquidité réduite, également connue sous le nom de quick ratio ou acid test en anglais, affine l’analyse en excluant les stocks du numérateur. Pourquoi exclure les stocks ? Parce qu’ils représentent la composante la moins liquide des actifs circulants. Vendre un stock nécessite du temps (trouver un acheteur, négocier un prix), peut impliquer des décotes significatives en cas de vente forcée, et comporte un risque d’obsolescence non négligeable (par exemple, des collections de mode invendues, des composants technologiques dépassés, ou des denrées périssables).
      </P>

      <FormulaBox
        formula="L2 = (Actifs circulants − Stocks) / CE court terme"
        description="Quick Ratio — exclut les stocks, considérés comme les actifs les moins liquides"
      />

      <P>
        La norme pour le L2 est généralement fixée à 1.0 ou plus. Un L2 égal à 1.0 signifie que l’entreprise peut couvrir toutes ses dettes à court terme uniquement avec sa trésorerie et ses créances, sans avoir à vendre le moindre article de stock. C’est une mesure beaucoup plus conservatrice et donc plus rassurante pour les créanciers. Un L2 inférieur à 0.7 est généralement considéré comme préoccupant, car il signifie que l’entreprise dépend fortement de la vente de ses stocks pour payer ses dettes.
      </P>

      <P>
        L’écart entre le L3 et le L2 est également révélateur. Si le L3 est de 2.0 mais le L2 tombe à 0.6, cela signifie que les stocks représentent une part disproportionnée des actifs circulants, ce qui peut signaler un problème de surstock, de marchandises invendues ou de mauvaise gestion des approvisionnements. Les secteurs à forte composante de stocks (commerce de détail, distribution) auront naturellement un écart plus important que les sociétés de services.
      </P>

      <P>
        Pour HELVETIA PRECISION SA, le calcul donne : (CHF 925’000 − CHF 430’000) / CHF 500’000 = CHF 495’000 / CHF 500’000 = 0.99. Ce ratio est très légèrement inférieur à 1.0, ce qui indique que sans recourir à la vente de stocks, l’entreprise couvrirait presque exactement ses dettes à court terme. La situation est acceptable mais mérite attention : une dégradation des encaissements clients pourrait créer un problème.
      </P>

      <RatioGauge label="L2 — Quick Ratio" value={0.99} zones={zonesL2} />

      {/* -------- L1 -------- */}
      <H2>4. Liquidité immédiate (L1) — Cash Ratio</H2>

      <P>
        La liquidité immédiate représente le test le plus strict de la capacité de paiement. Seuls les actifs immédiatement disponibles sont pris en compte au numérateur : la caisse, les comptes bancaires courants et les placements à très court terme (marché monétaire). Les créances clients, même à 30 jours, sont exclues car elles ne sont pas encore encaissées et comportent un risque de retard ou de défaut de paiement (ducroire).
      </P>

      <FormulaBox
        formula="L1 = Trésorerie / CE court terme"
        description="Cash Ratio — ne compte que le cash immédiatement disponible"
      />

      <P>
        La norme pour le L1 se situe entre 0.2 et 0.3, ce qui peut paraître faible. En réalité, il serait inefficient pour une entreprise de conserver une très grande part de cash inactif. De l’argent qui dort sur un compte bancaire ne génère quasiment aucun rendement et représente un coût d’opportunité important. Un L1 supérieur à 0.5 peut signaler une trésorerie excessive qui devrait être investie, rembourser des dettes, ou être distribuée aux actionnaires. À l’inverse, un L1 inférieur à 0.1 indique une vulnérabilité immédiate : l’entreprise n’a même pas de quoi payer 10% de ses dettes CT avec sa trésorerie actuelle.
      </P>

      <P>
        Pour HELVETIA PRECISION SA : CHF 120’000 / CHF 500’000 = 0.24. Ce ratio se situe pile dans la norme idéale. L’entreprise dispose de suffisamment de liquidités immédiates pour faire face aux urgences sans pour autant immobiliser du capital improductivement. Elle pourrait payer immédiatement 24% de ses dettes court terme, ce qui est satisfaisant dans la mesure où toutes les dettes n’arrivent pas à échéance simultanément.
      </P>

      <RatioGauge label="L1 — Cash Ratio" value={0.24} zones={zonesL1} />

      {/* -------- RATIOS DE ROTATION -------- */}
      <H2>5. Ratios de rotation (Activity Ratios)</H2>

      <P>
        L’analyse statique des ratios L1, L2 et L3 ne suffit pas pour comprendre pleinement la situation de liquidité d’une entreprise. En effet, la liquidité est aussi une question de vitesse : à quelle rapidité les actifs circulants se transforment-ils en espèces ? Un stock qui se vend en 15 jours est beaucoup plus « liquide » qu’un stock identique qui met 180 jours à trouver preneur. De même, des créances clients réglées en 20 jours contribuent bien davantage à la liquidité que des créances qui traînent pendant 90 jours. C’est l’objet des ratios de rotation, qui mesurent la dynamique de conversion des actifs et passifs circulants.
      </P>

      <H3>5.1 Délai moyen de recouvrement des créances</H3>

      <FormulaBox
        formula="Délai créances = (Créances clients × 360) / CA TTC"
        description="Résultat en jours — durée moyenne avant encaissement des factures clients"
      />

      <P>
        Ce ratio exprime en combien de jours, en moyenne, les clients règlent leurs factures. Il se calcule en multipliant le solde des créances clients par 360 (convention bancaire suisse) et en divisant par le chiffre d’affaires TTC (avec TVA, car les créances au bilan incluent la TVA). Un délai court est favorable à la liquidité : l’argent rentre plus vite dans les caisses de l’entreprise, réduisant le besoin de financement externe.
      </P>

      <P>
        L’interprétation de ce ratio doit toujours se faire en comparaison avec les conditions de paiement accordées. Si l’entreprise facture à 30 jours net et que le délai moyen observé est de 31 jours, la gestion des encaissements est excellente. En revanche, si le délai observé est de 55 jours, cela révèle un problème sérieux de recouvrement : soit les clients paient en retard, soit les relances sont insuffisantes, soit les conditions de paiement ne sont pas respectées. Chaque jour de retard supplémentaire coûte de l’argent à l’entreprise sous forme de coût de financement du poste clients.
      </P>

      <P>
        Pour HELVETIA PRECISION SA, le chiffre d’affaires HT s’élève à CHF 2’000’000 et le CA TTC (TVA 8.1%) à CHF 2’162’000. Délai créances = (CHF 350’000 × 360) / CHF 2’162’000 = 58.3 jours. Si les conditions de paiement sont de 30 jours, ce résultat est préoccupant. Les clients mettent près de deux mois pour payer, soit le double du délai accordé. L’entreprise devrait intensifier ses relances et envisager des escomptes pour paiement anticipé (par exemple, 2% de réduction si paiement dans les 10 jours).
      </P>

      <RatioCard
        name="Délai de recouvrement"
        formula="(350'000 × 360) / 2'162'000"
        value="58.3 jours"
        norm="Selon conditions de paiement (idéalement 30-45 jours)"
        interpretation="Délai élevé — les clients paient en retard. Nécessite un renforcement du processus de relance."
        color="#f59e0b"
      />

      <H3>5.2 Délai moyen de paiement des fournisseurs</H3>

      <FormulaBox
        formula="Délai fournisseurs = (Dettes fournisseurs × 360) / Achats TTC"
        description="Résultat en jours — durée moyenne avant que l’entreprise paie ses fournisseurs"
      />

      <P>
        Ce ratio mesure le temps moyen que prend l’entreprise pour régler ses propres fournisseurs. Contrairement au délai de recouvrement des créances où un délai court est favorable, ici un délai plus long peut être avantageux pour l’entreprise. Chaque jour supplémentaire durant lequel l’entreprise conserve les fonds représente un financement gratuit accordé par le fournisseur. C’est ce que les financiers appellent le « crédit fournisseur », une source de financement à court terme qui ne coûte rien tant que les conditions de paiement sont respectées.
      </P>

      <P>
        Toutefois, il ne faut pas abuser de cette stratégie. Payer systématiquement en retard détériore les relations avec les fournisseurs, peut entraîner des pénalités de retard et risque de compromettre les conditions commerciales futures (perdre des rabais, devoir payer d’avance). L’idéal est de payer au dernier jour des conditions accordées, ni avant ni après. En Suisse, un délai fournisseur de 30 à 45 jours est considéré comme normal pour la plupart des secteurs.
      </P>

      <P>
        Pour HELVETIA PRECISION SA, les achats HT s’élèvent à CHF 1’100’000, soit CHF 1’189’100 TTC (TVA 8.1%). Délai fournisseurs = (CHF 280’000 × 360) / CHF 1’189’100 = 84.8 jours. Ce délai est très long et suggère que l’entreprise retarde significativement ses paiements. Si les conditions des fournisseurs sont de 30 jours, HELVETIA PRECISION paie avec près de 55 jours de retard, ce qui est risqué pour ses relations commerciales.
      </P>

      <RatioCard
        name="Délai fournisseurs"
        formula="(280'000 × 360) / 1'189'100"
        value="84.8 jours"
        norm="30-45 jours (selon conditions)"
        interpretation="Très long — possible indicateur de tensions de trésorerie ou de stratégie délibérée de financement par les fournisseurs."
        color="#ef4444"
      />

      <H3>5.3 Rotation des stocks</H3>

      <FormulaBox
        formula="Rotation des stocks = Coût des marchandises vendues (CMV) / Stock moyen"
        description="Résultat en nombre de fois — combien de fois le stock est renouvelé dans l’année"
      />

      <FormulaBox
        formula="Durée de stockage = 360 / Rotation des stocks"
        description="Conversion en jours — durée moyenne de séjour d’un article en stock"
      />

      <P>
        La rotation des stocks mesure l’efficacité de la gestion des inventaires. Une rotation élevée signifie que les marchandises se vendent rapidement et que le capital immobilisé en stocks est rapidement récupéré. Une rotation faible indique des stocks qui stagnent, avec les risques associés : obsolescence, dépréciation, coûts de stockage (entrepôt, assurance, manutention). Le stock moyen se calcule idéalement comme la moyenne des stocks en début et fin d’exercice : (Stock initial + Stock final) / 2.
      </P>

      <P>
        Les normes varient considérablement selon les secteurs. Un supermarqué peut avoir une rotation de 25 à 50 fois par an (stock moyen de 7 à 15 jours), tandis qu’un négociant en machines-outils tournera peut-être seulement 2 à 4 fois par an (stock moyen de 90 à 180 jours). L’important est de comparer la rotation avec celle du secteur et avec l’évolution historique de l’entreprise elle-même.
      </P>

      <P>
        Pour HELVETIA PRECISION SA, le CMV s’élève à CHF 1’100’000 et le stock moyen à CHF 430’000 (en l’absence de stock initial, on prend le stock final). Rotation = CHF 1’100’000 / CHF 430’000 = 2.56 fois par an. Durée de stockage = 360 / 2.56 = 141 jours. Le stock moyen séjourne près de 5 mois dans l’entreprise. Pour un fabricant de composants horlogers, cette durée est relativement longue et pourrait indiquer un surstock ou des produits à faible rotation qui devraient être soldés.
      </P>

      <RatioCard
        name="Rotation des stocks"
        formula="1'100'000 / 430'000"
        value="2.56x (141 jours)"
        norm="Dépend du secteur (industrie : 4-8x)"
        interpretation="Rotation faible — stocks séjournant trop longtemps. Améliorer la gestion des approvisionnements."
        color="#f59e0b"
      />

      {/* -------- EXEMPLE COMPLET ALPINE TECH -------- */}
      <H2>6. Exemple complet — ALPINE TECH SA</H2>

      <P>
        ALPINE TECH SA est une PME suisse basée à Lausanne, spécialisée dans la fabrication et la vente d’instruments de mesure pour le secteur environnemental. L’entreprise emploie 45 personnes et réalise un chiffre d’affaires de CHF 4’800’000. Analysons sa situation de liquidité en détail à partir de ses états financiers au 31 décembre N.
      </P>

      <Tableau
        titre="Bilan ALPINE TECH SA au 31.12.N (en CHF)"
        colonnes={['Actifs', 'Montant', 'Passifs', 'Montant']}
        lignes={[
          ['Caisse et banque', '185’000', 'Dettes fournisseurs', '420’000'],
          ['Créances clients', '580’000', 'Dettes bancaires CT', '200’000'],
          ['Stocks matières premières', '290’000', 'Charges à payer', '130’000'],
          ['Stocks produits finis', '210’000', 'Impôts à payer', '50’000'],
          ['Actifs transitoires', '35’000', 'Total CE court terme', '800’000'],
          ['Total actifs circulants', '1’300’000', '', ''],
          ['', '', 'Emprunt bancaire LT', '700’000'],
          ['Machines et équipements', '1’400’000', 'Provision LT', '100’000'],
          ['Véhicules', '200’000', 'Total CE long terme', '800’000'],
          ['Immobilisations incorporelles', '100’000', '', ''],
          ['Total actifs immobilisés', '1’700’000', 'Capital-actions', '500’000'],
          ['', '', 'Réserves légales', '350’000'],
          ['', '', 'Bénéfice reporté', '550’000'],
          ['', '', 'Résultat de l’exercice', '200’000'],
          ['', '', 'Total capitaux propres', '1’400’000' ],
          ['Total actifs', '3’000’000', 'Total passifs', '3’000’000'],
        ]}
      />

      <Tableau
        titre="Données complémentaires"
        colonnes={['Elément', 'Montant CHF']}
        lignes={[
          ['Chiffre d’affaires HT', '4’800’000'],
          ['CA TTC (TVA 8.1%)', '5’188’800'],
          ['CMV', '2’640’000'],
          ['Achats HT', '2’500’000'],
          ['Achats TTC (TVA 8.1%)', '2’702’500'],
          ['Stock moyen', '500’000'],
          ['Conditions clients', '30 jours net'],
          ['Conditions fournisseurs', '45 jours net'],
        ]}
      />

      <P>
        Procédons maintenant au calcul systématique de tous les ratios de liquidité :
      </P>

      <P>
        Liquidité générale L3 = CHF 1’300’000 / CHF 800’000 = 1.63. Le ratio est dans la norme (1.5-2.0), ce qui signifie qu’ALPINE TECH dispose d’un coussin de sécurité suffisant pour couvrir ses dettes à court terme, bien que la marge soit relativement mince.
      </P>

      <RatioGauge label="L3 — Liquidité générale" value={1.63} zones={zonesL3} />

      <P>
        Liquidité réduite L2 = (CHF 1’300’000 − CHF 500’000) / CHF 800’000 = CHF 800’000 / CHF 800’000 = 1.00. Le L2 atteint exactement le seuil minimum de la norme. Sans vendre un seul article de stock, l’entreprise peut tout juste couvrir ses dettes CT. C’est acceptable, mais sans marge de manoeuvre. Toute dégradation des créances ou perte de trésorerie pourrait devenir problématique.
      </P>

      <RatioGauge label="L2 — Liquidité réduite" value={1.00} zones={zonesL2} />

      <P>
        Liquidité immédiate L1 = CHF 185’000 / CHF 800’000 = 0.23. Le cash ratio se situe dans la fourchette idéale de 0.2 à 0.3. L’entreprise dispose d’une trésorerie adéquate : ni trop (ce qui serait un gaspillage), ni trop peu (ce qui serait dangereux).
      </P>

      <RatioGauge label="L1 — Liquidité immédiate" value={0.23} zones={zonesL1} />

      <P>
        Délai de recouvrement des créances = (CHF 580’000 × 360) / CHF 5’188’800 = 40.2 jours. Les conditions étant de 30 jours net, les clients paient en moyenne avec 10 jours de retard. Ce n’est pas catastrophique mais représente un manque à gagner significatif : 10 jours de décalage sur CHF 580’000 de créances coûtent environ CHF 4’800 en intérêts (au taux de 3%) que l’entreprise doit financer.
      </P>

      <P>
        Délai de paiement fournisseurs = (CHF 420’000 × 360) / CHF 2’702’500 = 55.9 jours. Les conditions étant de 45 jours, l’entreprise paie en moyenne avec environ 11 jours de retard. Ce décalage lui procure un financement gratuit mais pourrait dégrader les relations avec les fournisseurs stratégiques.
      </P>

      <P>
        Rotation des stocks = CHF 2’640’000 / CHF 500’000 = 5.28 fois par an, soit une durée de stockage de 360 / 5.28 = 68 jours. Pour un fabricant d’instruments, cette rotation est raisonnable. Les stocks séjournent en moyenne un peu plus de deux mois, ce qui correspond aux délais de production et de livraison du secteur.
      </P>

      <Tableau
        titre="Synthèse des ratios de liquidité — ALPINE TECH SA"
        colonnes={['Ratio', 'Valeur', 'Norme', 'Appréciation']}
        lignes={[
          ['L3 — Liquidité générale', '1.63', '1.5 – 2.0', 'Correct — marge limitée'],
          ['L2 — Liquidité réduite', '1.00', '≥ 1.0', 'Limite basse — à surveiller'],
          ['L1 — Liquidité immédiate', '0.23', '0.2 – 0.3', 'Bon — trésorerie adéquate'],
          ['Délai créances', '40.2 j', '30 j (conditions)', 'Retard de 10 jours'],
          ['Délai fournisseurs', '55.9 j', '45 j (conditions)', 'Léger retard de paiement'],
          ['Rotation des stocks', '5.28x (68 j)', 'Secteur : 4-8x', 'Dans la norme du secteur'],
        ]}
      />

      <Note>
        Conclusion de l’analyse de liquidité d’ALPINE TECH SA : la situation est globalement saine mais sans marge de manoeuvre significative. Le L2 à 1.00 est le principal point de vigilance. L’amélioration du recouvrement des créances (réduction de 10 jours du délai) permettrait de dégager environ CHF 145’000 de trésorerie supplémentaire, renforçant significativement les ratios L1 et L2. Recommandation : mettre en place un processus de relance automatisé et envisager des escomptes pour paiement anticipé.
      </Note>

      {/* -------- FIN CHAPITRE 4 -------- */}
    </>
  );
}

/* ============================================================
   CHAPTER 5 — RATIOS DE RENTABILITÉ
   ============================================================ */

export function TabRentabilite() {
  return (
    <>
      {/* -------- INTRODUCTION -------- */}
      <H2>1. Introduction — Rentabilité vs Liquidité</H2>

      <P>
        Si la liquidité répond à la question « L’entreprise peut-elle payer ses factures ? », la rentabilité répond à une question tout aussi fondamentale : « L’entreprise gagne-t-elle suffisamment d’argent ? ». Une entreprise peut être parfaitement liquide tout en étant non rentable : elle brûle progressivement ses réserves de trésorerie et ses fonds propres pour couvrir ses pertes, comme un navire qui flotte encore mais prend l’eau. À terme, la non-rentabilité détruit inévitablement la liquidité.
      </P>

      <P>
        Le cas inverse existe également : une entreprise en forte croissance peut être très rentable sur le papier (son compte de résultat affiche des bénéfices) mais connaître des tensions de liquidité sévères. C’est le paradoxe de la croissance rentable : le chiffre d’affaires augmente, ce qui nécessite davantage de stocks, de créances clients, et d’investissements en immobilisations. Le cash sort plus vite qu’il ne rentre, créant un gouffre de trésorerie malgré une rentabilité comptable positive. De nombreuses startups en hypercroissance ont fait faillite pour cette raison.
      </P>

      <P>
        L’analyse de la rentabilité s’articule autour de trois dimensions complémentaires. La rentabilité commerciale mesure la capacité de l’entreprise à dégager des marges sur ses ventes : combien reste-t-il après avoir payé les coûts ? La rentabilité économique (ROA — Return on Assets) évalue l’efficacité avec laquelle l’entreprise utilise l’ensemble de ses actifs pour générer du profit, indépendamment de sa structure de financement. Enfin, la rentabilité financière (ROE — Return on Equity) intéresse spécifiquement les actionnaires : quel rendement obtiennent-ils sur leur investissement ?
      </P>

      {/* -------- MARGES -------- */}
      <H2>2. Les marges du compte de résultat — La cascade de la rentabilité</H2>

      <P>
        Le plan comptable suisse PME organise le compte de résultat sous forme de cascade, partant du chiffre d’affaires brut pour aboutir au résultat net, en soustrayant progressivement les différentes catégories de charges. Chaque niveau intermédiaire constitue un indicateur de performance spécifique, et le calcul de la marge correspondante (en pourcentage du CA) permet de comparer des entreprises de tailles différentes et de suivre l’évolution dans le temps.
      </P>

      <H3>2.1 La marge brute</H3>

      <FormulaBox
        formula="Marge brute = (CA net − Coût des marchandises vendues) / CA net × 100"
        description="Mesure le pricing power et l’efficacité des achats"
      />

      <P>
        La marge brute est le premier niveau de rentabilité. Elle ne prend en compte que le coût direct des marchandises ou matières premières nécessaires à la production ou la vente. Elle répond à la question : après avoir payé ce que l’entreprise vend, combien lui reste-t-il pour couvrir tous ses autres frais ? Une marge brute élevée indique soit un fort pouvoir de fixation des prix (produits de luxe, brevet, niche), soit une grande efficacité dans les achats et la production. Les secteurs de services affichent typiquement des marges brutes très élevées (70-90%) car ils n’ont quasiment pas de coût de marchandises, tandis que le commerce de détail opère avec des marges brutes faibles (20-40%).
      </P>

      <P>
        Illustrons avec ALPINE TECH SA dont le CA net est de CHF 4’800’000 et le CMV de CHF 2’640’000. La marge brute en valeur absolue est de CHF 2’160’000, soit un taux de marge brute de (2’160’000 / 4’800’000) × 100 = 45.0%. Cela signifie que sur chaque franc de vente, il reste CHF 0.45 après avoir payé les coûts directs de production. Cette marge doit couvrir l’ensemble des frais généraux, des salaires administratifs, des amortissements, des intérêts et des impôts.
      </P>

      <H3>2.2 L’EBITDA et la marge EBITDA</H3>

      <FormulaBox
        formula="EBITDA = Résultat d’exploitation + Amortissements et dépréciations"
        description="Earnings Before Interest, Taxes, Depreciation and Amortization"
      />

      <FormulaBox
        formula="Marge EBITDA = EBITDA / CA net × 100"
        description="Mesure la capacité de l’entreprise à générer du cash opérationnel"
      />

      <P>
        L’EBITDA est devenu l’un des indicateurs les plus utilisés en analyse financière et en évaluation d’entreprise. Il représente le résultat d’exploitation avant les amortissements, les intérêts et les impôts. Pourquoi ajouter les amortissements au résultat d’exploitation ? Parce que l’amortissement est une charge comptable qui ne correspond à aucune sortie de trésorerie réelle durant l’exercice : c’est la répartition sur plusieurs années du coût d’un investissement déjà payé. L’EBITDA se rapproche donc du flux de trésorerie opérationnel et donne une image plus fidèle de la « capacité bénéficiaire en cash » de l’entreprise.
      </P>

      <P>
        De plus, l’EBITDA permet de comparer des entreprises ayant des politiques d’amortissement différentes. Deux entreprises identiques utilisant des durées d’amortissement différentes (par exemple 5 ans contre 10 ans pour le même type de machines) afficheront des EBIT différents mais un EBITDA identique. C’est pourquoi cet indicateur est particulièrement prisé lors de transactions de fusion-acquisition.
      </P>

      <H3>2.3 L’EBIT et la marge opérationnelle</H3>

      <FormulaBox
        formula="EBIT = Résultat d’exploitation (avant intérêts et impôts)"
        description="Earnings Before Interest and Taxes — mesure la performance opérationnelle pure"
      />

      <FormulaBox
        formula="Marge EBIT = EBIT / CA net × 100"
        description="Aussi appelée marge opérationnelle ou operating margin"
      />

      <P>
        L’EBIT, ou résultat d’exploitation, inclut les amortissements mais exclut les charges financières (intérêts sur emprunts) et les impôts. C’est l’indicateur clé de la performance opérationnelle de l’entreprise : il mesure combien l’activité principale génère de bénéfice, indépendamment de la manière dont elle est financée (dette ou fonds propres) et du régime fiscal applicable. Un manager est jugé sur l’EBIT car il maîtrise les ventes et les coûts opérationnels, mais pas les décisions de financement ni la fiscalité.
      </P>

      <H3>2.4 Le résultat net et la marge nette</H3>

      <FormulaBox
        formula="Marge nette = Résultat net / CA net × 100"
        description="Le « bottom line » — ce qui reste pour les actionnaires, en pourcentage du CA"
      />

      <P>
        Le résultat net représente le bénéfice final après déduction de toutes les charges sans exception : coût des marchandises, frais de personnel, loyers, amortissements, intérêts sur emprunts, impôts sur le bénéfice, et éléments exceptionnels. C’est le montant qui revient aux actionnaires et qui peut être soit distribué sous forme de dividendes, soit conservé dans l’entreprise pour financer sa croissance future (bénéfice reporté). La marge nette est l’indicateur le plus complet mais aussi le plus influencé par des éléments hors exploitation.
      </P>

      <P>
        Construisons la cascade complète pour ALPINE TECH SA avec les données suivantes : CA net CHF 4’800’000, CMV CHF 2’640’000, charges de personnel CHF 1’200’000, autres charges d’exploitation CHF 360’000, amortissements CHF 280’000, charges d’intérêts CHF 56’000, impôts CHF 64’000.
      </P>

      <WaterfallBar items={[
        { label: 'CA net', value: 4800000, color: '#3b82f6', margin: 100.0 },
        { label: 'Marge brute', value: 2160000, color: '#22c55e', margin: 45.0 },
        { label: 'EBITDA', value: 600000, color: '#8b5cf6', margin: 12.5 },
        { label: 'EBIT', value: 320000, color: '#f59e0b', margin: 6.7 },
        { label: 'Résultat net', value: 200000, color: '#ef4444', margin: 4.2 },
      ]} />

      <Tableau
        titre="Cascade du compte de résultat — ALPINE TECH SA"
        colonnes={['Poste', 'Montant CHF', 'Calcul marge', 'Taux']}
        lignes={[
          ['Chiffre d’affaires net', '4’800’000', '—', '100.0%'],
          ['− CMV', '−2’640’000', '', ''],
          ['= Marge brute', '2’160’000', '2’160’000 / 4’800’000', '45.0%'],
          ['− Charges de personnel', '−1’200’000', '', ''],
          ['− Autres charges exploitation', '−360’000', '', ''],
          ['= EBITDA', '600’000', '600’000 / 4’800’000', '12.5%'],
          ['− Amortissements', '−280’000', '', ''],
          ['= EBIT', '320’000', '320’000 / 4’800’000', '6.7%'],
          ['− Charges d’intérêts', '−56’000', '', ''],
          ['= Résultat avant impôts', '264’000', '', '5.5%'],
          ['− Impôts', '−64’000', '', ''],
          ['= Résultat net', '200’000', '200’000 / 4’800’000', '4.2%'],
        ]}
      />

      <P>
        L’analyse de la cascade révèle qu’ALPINE TECH SA dégage une marge brute solide de 45%, ce qui est typique d’un fabricant de produits techniques à valeur ajoutée. Cependant, les charges de personnel et les autres frais d’exploitation absorbent une part importante de cette marge, ne laissant qu’un EBITDA de 12.5%. Après amortissements, la marge EBIT tombe à 6.7%, ce qui est correct mais pas exceptionnel. La marge nette finale de 4.2% signifie que sur chaque CHF 100 de ventes, il ne reste que CHF 4.20 de bénéfice pour les actionnaires.
      </P>

      {/* -------- ROE -------- */}
      <H2>3. ROE — Rentabilité des fonds propres</H2>

      <FormulaBox
        formula="ROE = Résultat net / Capitaux propres × 100"
        description="Return on Equity — rendement pour les actionnaires"
      />

      <P>
        Le ROE (Return on Equity) est le ratio de rentabilité qui intéresse le plus directement les actionnaires et les investisseurs. Il mesure le rendement obtenu sur les fonds propres investis dans l’entreprise. Si le ROE est de 14%, cela signifie que pour chaque CHF 100 que les actionnaires ont investi (sous forme de capital-actions, de réserves et de bénéfices reportés), l’entreprise a généré CHF 14 de bénéfice net durant l’exercice.
      </P>

      <P>
        La norme générale pour le ROE se situe entre 8% et 15% pour les PME suisses, mais varie fortement selon le secteur et le profil de risque. Les entreprises technologiques à forte croissance peuvent afficher des ROE de 20% à 30%, tandis que les secteurs réglementés ou à faible risque (services publics, immobilier) se contentent de 5% à 10%. Le ROE doit au minimum dépasser le rendement d’un placement sans risque (obligations de la Confédération) augmenté d’une prime de risque, sinon les actionnaires auraient intérêt à retirer leur capital pour le placer ailleurs.
      </P>

      <P>
        Attention : un ROE élevé n’est pas forcément bon signe. Il peut résulter d’un endettement excessif plutôt que d’une performance opérationnelle supérieure. Si les fonds propres sont très faibles (par exemple, après des pertes accumulées qui ont érodé les réserves), même un bénéfice modeste produira un ROE élevé en pourcentage, masquant une situation fragile. C’est pourquoi le ROE doit toujours être analysé conjointement avec les ratios d’endettement et décomposé via le modèle DuPont.
      </P>

      <P>
        Pour ALPINE TECH SA : ROE = CHF 200’000 / CHF 1’400’000 × 100 = 14.3%. Ce ratio est dans la fourchette haute des normes suisses et indique que les actionnaires obtiennent un rendement satisfaisant sur leur investissement. Chaque franc de fonds propres génère environ 14 centimes de bénéfice annuel.
      </P>

      <RatioCard
        name="ROE — Rentabilité des fonds propres"
        formula="200'000 / 1'400'000 × 100"
        value="14.3%"
        norm="8-15% (PME suisses)"
        interpretation="Bon rendement pour les actionnaires, dans la fourchette haute des normes."
        color="#7c3aed"
      />

      {/* -------- ROA -------- */}
      <H2>4. ROA — Rentabilité économique</H2>

      <FormulaBox
        formula="ROA = (Résultat net + Charges d’intérêts) / Total des actifs × 100"
        description="Return on Assets — performance économique indépendante du financement"
      />

      <P>
        Le ROA (Return on Assets) mesure l’efficacité avec laquelle l’entreprise utilise l’ensemble de ses actifs pour générer du profit. La particularité de ce ratio est qu’il ajoute les charges d’intérêts au résultat net au numérateur. Pourquoi ? Parce que les actifs sont financés à la fois par les fonds propres et par les dettes. Le résultat net rémunère les actionnaires, et les charges d’intérêts rémunèrent les créanciers. La somme des deux représente le rendement total généré par les actifs pour l’ensemble des apporteurs de capitaux.
      </P>

      <P>
        Cette logique rend le ROA indépendant de la structure de financement. Deux entreprises identiques dans leurs opérations mais financées différemment (l’une avec 80% de fonds propres, l’autre avec 80% de dettes) auront le même ROA, ce qui permet une comparaison objective de la performance opérationnelle. Le ROE, en revanche, sera très différent entre ces deux entreprises en raison de l’effet de levier financier que nous examinerons au chapitre 6.
      </P>

      <P>
        La norme pour le ROA se situe généralement entre 5% et 10% pour les PME suisses. Les secteurs à forte intensité capitalistique (industrie lourde, immobilier) tendent vers le bas de la fourchette car ils nécessitent des investissements massifs en actifs immobilisés. Les sociétés de services, opérant avec relativement peu d’actifs, peuvent atteindre des ROA de 15% ou plus.
      </P>

      <P>
        Pour ALPINE TECH SA : ROA = (CHF 200’000 + CHF 56’000) / CHF 3’000’000 × 100 = CHF 256’000 / CHF 3’000’000 × 100 = 8.5%. Ce ROA est satisfaisant et indique que les actifs de l’entreprise génèrent un rendement économique correct. La différence entre le ROE (14.3%) et le ROA (8.5%) s’explique par l’effet de levier financier : l’entreprise emprunte à un taux inférieur au ROA, ce qui amplifie le rendement pour les actionnaires.
      </P>

      <RatioCard
        name="ROA — Rentabilité économique"
        formula="(200'000 + 56'000) / 3'000'000 × 100"
        value="8.5%"
        norm="5-10% (PME suisses)"
        interpretation="Performance économique correcte. ROE (14.3%) > ROA (8.5%) : effet de levier positif."
        color="#16a34a"
      />

      {/* -------- DUPONT -------- */}
      <H2>5. Décomposition DuPont — L’équation fondamentale de la rentabilité</H2>

      <P>
        La décomposition DuPont est l’un des outils les plus puissants de l’analyse financière. Elle permet de comprendre d’où vient la rentabilité d’une entreprise en décomposant le ROE en trois facteurs multiplicatifs, chacun représentant une dimension stratégique distincte. Deux entreprises affichant le même ROE de 15% peuvent y parvenir par des stratégies fondamentalement différentes, et la décomposition DuPont révèle ces différences.
      </P>

      <FormulaBox
        formula="ROE = (Résultat net / CA) × (CA / Actifs) × (Actifs / CP)"
        description="= Marge nette × Rotation des actifs × Levier financier"
      />

      <P>
        Le premier facteur, la marge nette (Résultat net / CA), mesure combien l’entreprise gagne par franc de vente. C’est la dimension « rentabilité commerciale ». Une entreprise qui vend des montres de luxe à CHF 50’000 peut se permettre une marge nette de 20% car chaque vente génère CHF 10’000 de bénéfice. Un discounter alimentaire, en revanche, opère avec une marge nette de 1-2% seulement.
      </P>

      <P>
        Le deuxième facteur, la rotation des actifs (CA / Total actifs), mesure combien de francs de chiffre d’affaires chaque franc investi en actifs génère. C’est la dimension « efficacité opérationnelle ». Un supermarqué avec des rayons constamment renouvelés peut avoir une rotation de 3-4x (chaque franc d’actif génère 3-4 francs de vente par an), tandis qu’un promoteur immobilier dont les actifs sont constitués d’immeubles en construction a une rotation inférieure à 0.5x.
      </P>

      <P>
        Le troisième facteur, le levier financier (Total actifs / Capitaux propres), mesure dans quelle proportion les actifs dépassent les fonds propres, c’est-à-dire dans quelle mesure l’entreprise recourt à l’endettement. Un levier de 2.0x signifie que les actifs sont le double des fonds propres, donc 50% du financement provient de la dette. Plus le levier est élevé, plus le ROE est amplifié (positivement si l’entreprise est rentable, négativement si elle perd de l’argent). C’est l’épée à double tranchant de la dette.
      </P>

      <P>
        Appliquons la décomposition à ALPINE TECH SA. Marge nette = CHF 200’000 / CHF 4’800’000 = 4.17%. Rotation des actifs = CHF 4’800’000 / CHF 3’000’000 = 1.60x. Levier financier = CHF 3’000’000 / CHF 1’400’000 = 2.14x. Vérification : 4.17% × 1.60 × 2.14 = 14.3% = ROE. La décomposition est cohérente.
      </P>

      <DuPontTree margeNette={4.17} rotationActifs={1.60} levier={2.14} roe={14.3} />

      <P>
        L’analyse révèle que le ROE élevé d’ALPINE TECH SA (14.3%) ne s’explique pas par une marge nette exceptionnelle (4.17% est modeste), mais principalement par une bonne rotation des actifs (1.60x) et un levier financier significatif (2.14x). L’entreprise compense ses marges relativement faibles par une utilisation efficace de ses actifs et un recours raisonnable à l’endettement. Si elle parvenait à améliorer sa marge nette de 1 point (de 4.17% à 5.17%), le ROE passerait à environ 17.7%, soit une amélioration substantielle.
      </P>

      <H3>5.1 Trois stratégies, un même ROE</H3>

      <P>
        Pour illustrer la puissance de la décomposition DuPont, comparons trois entreprises fictives opérant dans des secteurs très différents mais affichant toutes un ROE de 15%. Chacune y parvient par une combinaison fondamentalement différente des trois facteurs.
      </P>

      <Tableau
        titre="Trois stratégies pour un ROE de 15%"
        colonnes={['Facteur', 'LUXOR SA (Horlogerie)', 'RAPID DISTRI SA (Distribution)', 'ALPEN IMMO SA (Immobilier)']}
        lignes={[
          ['Marge nette', '15.0%', '1.5%', '5.0%'],
          ['Rotation des actifs', '0.50x', '4.0x', '0.60x'],
          ['Levier financier', '2.0x', '2.5x', '5.0x'],
          ['ROE', '15.0 × 0.50 × 2.0 = 15%', '1.5 × 4.0 × 2.5 = 15%', '5.0 × 0.60 × 5.0 = 15%'],
          ['Stratégie dominante', 'Marge élevée', 'Volume élevé', 'Levier élevé'],
        ]}
      />

      <P>
        LUXOR SA, fabricant horloger de luxe, génère son ROE grâce à des marges exceptionnelles (15%). Chaque montre vendue rapporte beaucoup, mais les ventes sont rares et les actifs élevés (ateliers, stocks de métaux précieux). RAPID DISTRI SA, chaîne de distribution alimentaire, opère avec des marges microscopiques (1.5%) mais fait tourner ses actifs 4 fois par an : le volume compense la marge. ALPEN IMMO SA, promoteur immobilier, utilise un levier financier massif (5.0x, soit 80% de dettes) pour amplifier un rendement économique modeste. Cette dernière stratégie est la plus risquée car le moindre retournement du marché peut éliminer les fonds propres.
      </P>

      {/* -------- EXEMPLE COMPLET -------- */}
      <H2>6. Exemple complet — ALPINE TECH SA, comparaison N et N-1</H2>

      <P>
        Pour illustrer l’utilité de l’analyse de la rentabilité dans le temps, comparons les performances d’ALPINE TECH SA sur deux exercices. L’année N-1 a été marquée par un chiffre d’affaires inférieur (CHF 4’200’000) mais des charges d’exploitation proportionnellement plus faibles. Voici les données complètes des deux exercices.
      </P>

      <Tableau
        titre="Comparaison des performances N-1 / N — ALPINE TECH SA"
        colonnes={['Indicateur', 'N-1', 'N', 'Évolution']}
        lignes={[
          ['CA net', 'CHF 4’200’000', 'CHF 4’800’000', '+14.3%'],
          ['Marge brute', 'CHF 1’932’000 (46.0%)', 'CHF 2’160’000 (45.0%)', '−1.0 pt'],
          ['EBITDA', 'CHF 567’000 (13.5%)', 'CHF 600’000 (12.5%)', '−1.0 pt'],
          ['EBIT', 'CHF 315’000 (7.5%)', 'CHF 320’000 (6.7%)', '−0.8 pt'],
          ['Résultat net', 'CHF 195’000 (4.6%)', 'CHF 200’000 (4.2%)', '−0.4 pt'],
          ['Total actifs', 'CHF 2’600’000', 'CHF 3’000’000', '+15.4%'],
          ['Capitaux propres', 'CHF 1’200’000', 'CHF 1’400’000', '+16.7%'],
          ['ROE', '16.3%', '14.3%', '−2.0 pt'],
          ['ROA', '9.4%', '8.5%', '−0.9 pt'],
        ]}
      />

      <P>
        L’analyse comparative révèle un paradoxe apparent : le chiffre d’affaires a progressé de 14.3% et le bénéfice net a augmenté en valeur absolue (de CHF 195’000 à CHF 200’000), mais toutes les marges se sont dégradées. La croissance du CA a été obtenue au prix d’une pression sur les marges, probablement en raison de baisses de prix pour gagner des parts de marché ou d’une hausse des coûts de production non répercutée sur les prix de vente.
      </P>

      <P>
        De même, le ROE a diminué de 16.3% à 14.3% malgré un bénéfice supérieur, parce que les fonds propres ont augmenté plus rapidement que le bénéfice (+16.7% contre +2.6%). Le ROA a également reculé car les actifs ont crû de 15.4% alors que le résultat opérationnel n’a augmenté que marginalement. La décomposition DuPont confirme : la marge nette a diminué (de 4.6% à 4.2%), la rotation des actifs a légèrement baissé (de 1.62x à 1.60x), et le levier financier est resté stable (de 2.17x à 2.14x).
      </P>

      <Note>
        Recommandations pour ALPINE TECH SA : la croissance du CA est encourageante mais la dégradation des marges est préoccupante. L’entreprise devrait (1) analyser la structure de coûts pour identifier les postes en dérapage, (2) évaluer si les baisses de prix consenties se justifient par la conquete de parts de marché durables, (3) améliorer l’efficacité opérationnelle pour restaurer les marges EBITDA et EBIT, et (4) s’assurer que les investissements en actifs supplémentaires généreront un rendement suffisant dans les années à venir.
      </Note>

    </>
  );
}

/* ============================================================
   CHAPTER 6 — RATIOS D’ENDETTEMENT & STRUCTURE
   ============================================================ */

export function TabEndettement() {
  return (
    <>
      {/* -------- INTRODUCTION -------- */}
      <H2>1. Introduction — Le financement est un choix stratégique</H2>

      <P>
        Toute entreprise doit financer ses actifs. Ces actifs — machines, stocks, créances, trésorerie — sont nécessaires à l’exploitation mais doivent être acquis avec des ressources financières qui proviennent de deux sources fondamentales : les fonds propres (capital-actions, réserves, bénéfices reportés) apportés par les actionnaires, et les capitaux étrangers (dettes bancaires, obligations, dettes fournisseurs) fournis par les créanciers. Le choix entre ces deux sources constitue une décision stratégique majeure, connue sous le nom de « structure du capital ».
      </P>

      <P>
        Les fonds propres présentent l’avantage de ne pas générer d’obligation de remboursement ni de charges d’intérêts fixes. En cas de mauvaise année, l’entreprise peut simplement ne pas verser de dividende. Cependant, les fonds propres sont la source de financement la plus coûteuse pour deux raisons : d’une part, les actionnaires exigent un rendement élevé (prime de risque) car ils sont les derniers servis en cas de liquidation ; d’autre part, les dividendes versés ne sont pas déductibles fiscalement, contrairement aux intérêts sur emprunts.
      </P>

      <P>
        Les capitaux étrangers, à l’inverse, coûtent généralement moins cher que les fonds propres grâce à la déductibilité fiscale des intérêts (le bouclier fiscal) et au risque moindre pour les créanciers (qui sont remboursés avant les actionnaires). En revanche, l’endettement crée des obligations fixes de paiement : l’entreprise doit payer ses intérêts et rembourser le capital quoi qu’il arrive, même si elle traverse une période difficile. Un endettement excessif peut conduire à la cessation de paiement et à la faillite si les flux de trésorerie deviennent insuffisants.
      </P>

      <P>
        Trouver le juste équilibre entre fonds propres et dettes est donc un exercice délicat. Trop de dettes augmente le risque de faillite ; pas assez de dettes signifie que l’entreprise n’exploite pas pleinement le levier financier et paie son financement plus cher que nécessaire. L’analyse de la structure du capital vise précisément à évaluer cet équilibre à travers une batterie de ratios que nous allons examiner en détail.
      </P>

      {/* -------- RATIOS DE STRUCTURE -------- */}
      <H2>2. Ratios de structure du capital</H2>

      <H3>2.1 Taux d’endettement</H3>

      <FormulaBox
        formula="Taux d’endettement = Capitaux étrangers / Total du passif × 100"
        description="Part de la dette dans le financement total de l’entreprise"
      />

      <P>
        Le taux d’endettement exprime la proportion du financement total qui provient de sources externes (dettes). Un taux de 55% signifie que sur chaque franc d’actif, CHF 0.55 sont financés par de la dette et CHF 0.45 par des fonds propres. La norme suisse pour les PME fixe généralement un seuil de 60% à ne pas dépasser, bien que cette limite varie selon les secteurs. Les entreprises immobilières opèrent couramment avec des taux de 70% ou plus (en raison de la valeur de garantie élevée des immeubles), tandis que les sociétés de conseil technologique maintiennent souvent des taux inférieurs à 30%.
      </P>

      <P>
        Pour ALPINE TECH SA, les capitaux étrangers totaux comprennent le CE court terme (CHF 800’000) et le CE long terme (CHF 800’000), soit CHF 1’600’000. Le taux d’endettement est de CHF 1’600’000 / CHF 3’000’000 × 100 = 53.3%. Ce taux est acceptable et reste nettement en-dessous du seuil de 60%. L’entreprise conserve une marge de manoeuvre pour contracter de la dette supplémentaire si nécessaire, par exemple pour financer un investissement stratégique.
      </P>

      <RatioGauge
        label="Taux d’endettement"
        value={53.3}
        unit="%"
        zones={zonesEndettement}
      />

      <H3>2.2 Taux d’autofinancement (taux de fonds propres)</H3>

      <FormulaBox
        formula="Taux d’autofinancement = Capitaux propres / Total du passif × 100"
        description="Part des fonds propres dans le financement total — complément du taux d’endettement"
      />

      <P>
        Le taux d’autofinancement est le complément mathématique du taux d’endettement : la somme des deux égale toujours 100%. Ce ratio mesure dans quelle mesure l’entreprise se finance par ses propres moyens. Un taux élevé indique une grande autonomie financière et une résilience en période de crise (pas de charges d’intérêts à payer même si le CA baisse). La norme suisse recommande un minimum de 40% de fonds propres, soit un maximum de 60% de dettes.
      </P>

      <P>
        Pour ALPINE TECH SA : CHF 1’400’000 / CHF 3’000’000 × 100 = 46.7%. L’entreprise dépasse confortablement le seuil minimum de 40%, ce qui témoigne d’une base de fonds propres solide. Cette assise permet d’absorber des pertes éventuelles sans mettre en danger la solvabilité et offre une crédibilité auprès des banques pour d’éventuels financements futurs.
      </P>

      <RatioCard
        name="Taux d’autofinancement"
        formula="1'400'000 / 3'000'000 × 100"
        value="46.7%"
        norm="Supérieur à 40%"
        interpretation="Bonne assise de fonds propres. L’entreprise dispose d’une autonomie financière confortable."
        color="#16a34a"
      />

      <H3>2.3 Ratio dette / fonds propres (Debt-to-Equity)</H3>

      <FormulaBox
        formula="Debt-to-Equity = Capitaux étrangers / Capitaux propres"
        description="Aussi appelé gearing — le ratio le plus utilisé au niveau international"
      />

      <P>
        Le ratio dette sur fonds propres est probablement l’indicateur de structure le plus utilisé au niveau international, notamment dans les covenants bancaires (clauses contractuelles des contrats de prêt). Il exprime directement combien de francs de dette l’entreprise porte pour chaque franc de fonds propres. La norme générale est de rester en dessous de 2.0, ce qui signifie que les dettes ne doivent pas dépasser le double des fonds propres. Au-delà de ce seuil, les banques considèrent généralement le risque comme élevé et peuvent exiger des taux d’intérêt majorisés ou des garanties supplémentaires.
      </P>

      <P>
        Pour ALPINE TECH SA : CHF 1’600’000 / CHF 1’400’000 = 1.14. Ce ratio signifie que pour chaque franc de fonds propres, l’entreprise a CHF 1.14 de dettes. La structure est équilibrée et bien en deçà du seuil critique de 2.0. L’entreprise pourrait théoriquement doubler sa dette (passer à un D/E de 2.28) avant d’atteindre un niveau considéré comme risqué, mais cela ne serait pas recommandable sans croissance proportionnelle de la rentabilité.
      </P>

      <RatioCard
        name="Debt-to-Equity (D/E)"
        formula="1'600'000 / 1'400'000"
        value="1.14x"
        norm="Inférieur à 2.0"
        interpretation="Structure équilibrée. L’entreprise n’est pas surchargée de dettes."
        color="#2563eb"
      />

      {/* -------- RATIOS DE COUVERTURE -------- */}
      <H2>3. Ratios de couverture</H2>

      <H3>3.1 Couverture des intérêts (Interest Coverage Ratio)</H3>

      <FormulaBox
        formula="Couverture des intérêts = EBIT / Charges d’intérêts"
        description="Combien de fois l’entreprise peut payer ses intérêts avec son bénéfice opérationnel"
      />

      <P>
        Le ratio de couverture des intérêts est l’un des indicateurs les plus scrutés par les banquiers lors de l’évaluation d’une demande de crédit. Il mesure combien de fois le résultat d’exploitation (EBIT) couvre les charges d’intérêts annuelles. En d’autres termes, il indique de combien l’EBIT pourrait baisser avant que l’entreprise ne soit plus en mesure de payer ses intérêts. Un ratio de 5x signifie que l’EBIT pourrait être divisé par 5 et que l’entreprise pourrait encore servir sa dette. Un ratio inférieur à 1x est catastrophique : l’activité opérationnelle ne génère même pas assez pour payer les intérêts.
      </P>

      <P>
        La norme minimale est généralement fixée à 3x, et idéalement 5x ou plus pour les entreprises industrielles soumises à des cycles économiques. Les banques suisses, réputées pour leur prudence, exigent souvent un minimum de 4x dans les contrats de prêt. En dessous de 2x, l’entreprise est considérée comme vulnérable : un léger retournement de conjoncture pourrait compromettre sa capacité à servir sa dette.
      </P>

      <P>
        Pour ALPINE TECH SA : EBIT (CHF 320’000) / Charges d’intérêts (CHF 56’000) = 5.71x. Ce ratio est excellent et offre une marge de sécurité confortable. L’EBIT pourrait baisser de plus de 80% avant que l’entreprise ne soit incapable de payer ses intérêts. Les banquiers apprécieront cette couverture généreuse lors du renouvellement des lignes de crédit.
      </P>

      <RatioGauge
        label="Couverture des intérêts"
        value={5.71}
        unit="x"
        zones={zonesCouverture}
      />

      <H3>3.2 Capacité de remboursement</H3>

      <FormulaBox
        formula="Capacité de remboursement = Dettes financières nettes / Cash-flow opérationnel"
        description="Résultat en années — nombre d’années nécessaires pour rembourser toute la dette"
      />

      <P>
        La capacité de remboursement traduit en années le temps nécessaire pour que l’entreprise rembourse l’intégralité de ses dettes financières nettes (c’est-à-dire dettes bancaires CT et LT moins la trésorerie) en y consacrant la totalité de son cash-flow opérationnel (EBITDA simplifié = résultat net + amortissements). La norme se situe généralement en dessous de 5 à 7 ans pour les PME. Au-delà de 7 ans, la charge de remboursement est considérée comme trop lourde et la capacité de l’entreprise à faire face à ses engagements devient incertaine.
      </P>

      <P>
        Pour ALPINE TECH SA, les dettes financières comprennent les dettes bancaires CT (CHF 200’000) et l’emprunt bancaire LT (CHF 700’000), soit CHF 900’000 au total. En déduisant la trésorerie (CHF 185’000), les dettes financières nettes s’élèvent à CHF 715’000. Le cash-flow opérationnel simplifié est de CHF 200’000 (résultat net) + CHF 280’000 (amortissements) = CHF 480’000. Capacité de remboursement = CHF 715’000 / CHF 480’000 = 1.49 années. Ce résultat est excellent : en théorie, l’entreprise pourrait rembourser toutes ses dettes financières en un an et demi. Cela lui laisse une très large marge pour emprunter davantage si un projet d’investissement attractif se présente.
      </P>

      <RatioCard
        name="Capacité de remboursement"
        formula="715'000 / 480'000"
        value="1.49 années"
        norm="Inférieur à 5-7 ans"
        interpretation="Excellent — capacité de remboursement très rapide. Marge considérable pour emprunter davantage."
        color="#16a34a"
      />

      {/* -------- EFFET DE LEVIER -------- */}
      <H2>4. L’effet de levier financier — Le concept clé</H2>

      <P>
        L’effet de levier financier est le concept le plus important de toute l’analyse de la structure du capital, et possiblement l’un des concepts les plus importants de la finance d’entreprise dans son ensemble. Il explique comment et pourquoi l’endettement peut amplifier la rentabilité des fonds propres, mais aussi la détruire lorsque les conditions se retournent. Maîtriser ce concept est indispensable pour tout candidat au brevet fédéral.
      </P>

      <P>
        L’idée fondamentale est simple : si une entreprise peut emprunter de l’argent à un taux d’intérêt inférieur au rendement qu’elle génère sur les actifs financés par cet emprunt, la différence de rendement profite entièrement aux actionnaires. Plus l’entreprise emprunte dans ces conditions, plus le ROE est amplifié. C’est un mécanisme de multiplication de la richesse des actionnaires par la dette, d’où le terme « levier ».
      </P>

      <FormulaBox
        formula="ROE = ROA + (ROA − i) × CE / CP"
        description="où i = coût moyen de la dette, (ROA − i) = spread de levier, CE/CP = bras de levier"
      />

      <P>
        Décomposons cette formule essentielle. Le ROA représente le rendement économique de l’entreprise, c’est-à-dire ce que les actifs rapportent avant toute considération de financement. Le terme (ROA − i) est le « spread de levier » ou « différentiel de levier » : c’est l’écart entre ce que les actifs rapportent et ce que la dette coûte. Quand ce spread est positif (ROA supérieur à i), chaque franc emprunté génère un surplus de rendement qui profite aux actionnaires. Le terme CE/CP est le « bras de levier » : c’est le multiplicateur, le rapport entre dette et fonds propres. Plus ce ratio est élevé, plus l’amplification est forte.
      </P>

      <H3>4.1 Exemple 1 : Levier positif (ROA supérieur au coût de la dette)</H3>

      <P>
        Considérons une entreprise avec un total d’actifs de CHF 1’000’000 générant un EBIT de CHF 120’000, soit un ROA de 12% (nous simplifions en ignorant les impôts pour la clarté de la démonstration). Le coût de la dette est de 4%. Comparons trois scénarios de financement différents pour illustrer l’amplification progressive du ROE par l’endettement.
      </P>

      <Tableau
        titre="Effet de levier positif (ROA = 12%, coût dette = 4%)"
        colonnes={['', 'Scénario A : 0% dette', 'Scénario B : 50% dette', 'Scénario C : 70% dette']}
        lignes={[
          ['Total actifs', 'CHF 1’000’000', 'CHF 1’000’000', 'CHF 1’000’000'],
          ['Capitaux propres', 'CHF 1’000’000', 'CHF 500’000', 'CHF 300’000'],
          ['Capitaux étrangers', 'CHF 0', 'CHF 500’000', 'CHF 700’000'],
          ['CE / CP', '0.0', '1.0', '2.33'],
          ['EBIT (ROA 12%)', 'CHF 120’000', 'CHF 120’000', 'CHF 120’000'],
          ['− Intérêts (4%)', 'CHF 0', 'CHF 20’000', 'CHF 28’000'],
          ['= Résultat net', 'CHF 120’000', 'CHF 100’000', 'CHF 92’000'],
          ['ROE', '12.0%', '20.0%', '30.7%'],
          ['Vérification DuPont', '12 + (12−4)×0', '12 + (12−4)×1', '12 + (12−4)×2.33'],
        ]}
      />

      <LeverageComparison scenarios={[
        { label: 'Scénario A (0% dette)', cp: 1000000, ce: 0, levier: '0.0', roe: 12.0 },
        { label: 'Scénario B (50% dette)', cp: 500000, ce: 500000, levier: '1.0', roe: 20.0 },
        { label: 'Scénario C (70% dette)', cp: 300000, ce: 700000, levier: '2.33', roe: 30.7 },
      ]} />

      <P>
        L’effet est spectaculaire. Dans le scénario A sans dette, le ROE égale le ROA à 12%. Dans le scénario B avec 50% de dette, le ROE bondit à 20% : la différence entre le ROA (12%) et le coût de la dette (4%), soit un spread de 8 points, est multipliée par le bras de levier (1.0) et ajoutée au ROA de base. Dans le scénario C avec 70% de dette, le ROE atteint 30.7% : le même spread de 8 points est multiplié par un bras de levier de 2.33, ajoutant 18.7 points au ROA de base. Les actionnaires du scénario C gagnent 2.5 fois plus de rendement que ceux du scénario A, bien que l’entreprise génère exactement le même EBIT.
      </P>

      <P>
        Notons cependant que le bénéfice net en valeur absolue diminue avec l’endettement (de CHF 120’000 à CHF 92’000) car les intérêts absorbent une part croissante de l’EBIT. Mais le ROE augmente parce que les fonds propres diminuent encore plus vite que le bénéfice. C’est l’essence du levier : faire plus avec moins de fonds propres.
      </P>

      <H3>4.2 Exemple 2 : Levier négatif (ROA inférieur au coût de la dette)</H3>

      <P>
        Le levier financier est une épée à double tranchant. Lorsque la rentabilité économique tombe en dessous du coût de la dette, le mécanisme s’inverse brutalement et la dette détruit de la valeur pour les actionnaires. Imaginons que notre entreprise traverse une année difficile et que l’EBIT tombe à CHF 30’000 (ROA = 3%), tandis que le coût de la dette reste à 4%.
      </P>

      <Tableau
        titre="Effet de levier négatif (ROA = 3%, coût dette = 4%)"
        colonnes={['', 'Scénario A : 0% dette', 'Scénario B : 50% dette', 'Scénario C : 70% dette']}
        lignes={[
          ['Total actifs', 'CHF 1’000’000', 'CHF 1’000’000', 'CHF 1’000’000'],
          ['Capitaux propres', 'CHF 1’000’000', 'CHF 500’000', 'CHF 300’000'],
          ['Capitaux étrangers', 'CHF 0', 'CHF 500’000', 'CHF 700’000'],
          ['CE / CP', '0.0', '1.0', '2.33'],
          ['EBIT (ROA 3%)', 'CHF 30’000', 'CHF 30’000', 'CHF 30’000'],
          ['− Intérêts (4%)', 'CHF 0', 'CHF 20’000', 'CHF 28’000'],
          ['= Résultat net', 'CHF 30’000', 'CHF 10’000', 'CHF 2’000'],
          ['ROE', '3.0%', '2.0%', '0.7%'],
          ['Vérification DuPont', '3 + (3−4)×0', '3 + (3−4)×1', '3 + (3−4)×2.33'],
        ]}
      />

      <LeverageComparison scenarios={[
        { label: 'Scénario A (0% dette)', cp: 1000000, ce: 0, levier: '0.0', roe: 3.0 },
        { label: 'Scénario B (50% dette)', cp: 500000, ce: 500000, levier: '1.0', roe: 2.0 },
        { label: 'Scénario C (70% dette)', cp: 300000, ce: 700000, levier: '2.33', roe: 0.7 },
      ]} />

      <P>
        Le retournement est saisissant. Dans le scénario A, le ROE de 3% égale le ROA : sans dette, pas de levier, ni positif ni négatif. Dans le scénario B, le spread de levier est désormais négatif : (3% − 4%) = −1%, multiplié par le bras de levier de 1.0, donne −1 point soustrait du ROA. Le ROE tombe à 2%, inférieur au ROA. Dans le scénario C, l’effet destructeur est amplifié : −1% × 2.33 = −2.33 points, réduisant le ROE à 0.7%. L’entreprise la plus endettée est quasiment à l’équilibre, alors qu’elle gère les mêmes actifs avec le même EBIT.
      </P>

      <P>
        Et si la situation se dégradait encore ? Si le ROA tombait à 2%, le scénario C afficherait un ROE négatif : 2% + (2% − 4%) × 2.33 = 2% − 4.66% = −2.66%. L’entreprise serait en perte nette alors qu’elle génère encore un EBIT positif de CHF 20’000. La totalité de ce bénéfice opérationnel serait absorbée par les intérêts (CHF 28’000), détruisant les fonds propres. C’est exactement ce mécanisme qui a provoqué la faillite de nombreuses entreprises immobilières fortement endettées lors de la crise financière.
      </P>

      <Note>
        Règle d’or de l’effet de levier : si ROA est supérieur au coût de la dette, l’endettement amplifie le ROE (levier positif). Si ROA est inférieur au coût de la dette, l’endettement détruit le ROE (levier négatif). Le basculement se produit exactement au point où ROA = coût de la dette. À ce point, le ROE égale le ROA quel que soit le niveau d’endettement.
      </Note>

      {/* -------- NORMES ET TABLEAU -------- */}
      <H2>5. Synthèse des normes et interprétation</H2>

      <P>
        Le tableau ci-dessous rassemble l’ensemble des ratios d’endettement et de structure avec leurs formules, les normes généralement acceptées en Suisse, et les zones de danger. Il est important de rappeler que ces normes sont des repères indicatifs et non des règles absolues. Chaque secteur, chaque modèle économique et chaque situation spécifique peut justifier des écarts par rapport à ces normes. Un analyste compétent compare toujours les ratios avec ceux du secteur d’activité et avec l’évolution historique de l’entreprise.
      </P>

      <Tableau
        titre="Référentiel des ratios d’endettement — Normes suisses"
        colonnes={['Ratio', 'Formule', 'Norme', 'Zone de danger']}
        lignes={[
          ['Taux d’endettement', 'CE / Total passif × 100', 'Inférieur à 60%', 'Supérieur à 70%'],
          ['Taux d’autofinancement', 'CP / Total passif × 100', 'Supérieur à 40%', 'Inférieur à 30%'],
          ['Debt-to-Equity', 'CE / CP', 'Inférieur à 2.0', 'Supérieur à 3.0'],
          ['Couverture des intérêts', 'EBIT / Charges intérêts', 'Supérieur à 3.0x', 'Inférieur à 1.5x'],
          ['Capacité remboursement', 'Dette nette / CF op.', 'Inférieur à 5-7 ans', 'Supérieur à 10 ans'],
        ]}
      />

      <P>
        Les normes varient significativement selon les secteurs d’activité. Les sociétés de services (conseil, informatique) ont généralement un endettement faible car elles n’ont pas besoin d’investissements lourds. Les entreprises commerciales ont un endettement modéré, constitué principalement de crédits fournisseurs et de lignes de crédit. Les entreprises industrielles présentent un endettement plus élevé en raison des investissements en équipements. Le secteur immobilier se distingue par un endettement structurellement très élevé (60-80%) car les immeubles servent de garantie hypothécaire et génèrent des flux de trésorerie réguliers.
      </P>

      <Tableau
        titre="Taux d’endettement par secteur (moyennes suisses indicatives)"
        colonnes={['Secteur', 'Taux endettement moyen', 'D/E moyen', 'Couverture intérêts']}
        lignes={[
          ['Services / Conseil', '25-40%', '0.3 – 0.7', '8 – 15x'],
          ['Commerce de détail', '40-55%', '0.7 – 1.2', '4 – 8x'],
          ['Industrie manufacturière', '45-60%', '0.8 – 1.5', '3 – 7x'],
          ['Immobilier', '60-80%', '1.5 – 4.0', '2 – 5x'],
          ['Hôtellerie / Restauration', '50-65%', '1.0 – 2.0', '2 – 5x'],
        ]}
      />

      {/* -------- EXEMPLE COMPLET -------- */}
      <H2>6. Exemple complet — ALPINE TECH SA</H2>

      <P>
        Reprenons les données d’ALPINE TECH SA pour une analyse complète de la structure du capital et de l’endettement. Nous disposons de toutes les informations nécessaires grâce au bilan et au compte de résultat détaillés dans les chapitres précédents. Calculons systématiquement chaque ratio puis interprétons l’ensemble.
      </P>

      <Tableau
        titre="Synthèse des ratios d’endettement — ALPINE TECH SA"
        colonnes={['Ratio', 'Calcul', 'Valeur', 'Norme', 'Appréciation']}
        lignes={[
          ['Taux d’endettement', '1’600’000 / 3’000’000', '53.3%', 'Inf. à 60%', 'Correct'],
          ['Taux d’autofinancement', '1’400’000 / 3’000’000', '46.7%', 'Sup. à 40%', 'Bon'],
          ['Debt-to-Equity', '1’600’000 / 1’400’000', '1.14x', 'Inf. à 2.0', 'Bon'],
          ['Couverture intérêts', '320’000 / 56’000', '5.71x', 'Sup. à 3.0x', 'Excellent'],
          ['Capacité remboursement', '715’000 / 480’000', '1.49 ans', 'Inf. à 5-7 ans', 'Excellent'],
        ]}
      />

      <H3>6.1 Analyse de l’effet de levier d’ALPINE TECH SA</H3>

      <P>
        Vérifions si ALPINE TECH SA bénéficie d’un effet de levier positif. Le ROA est de 8.5%, et nous devons déterminer le coût moyen de la dette. Les charges d’intérêts s’élèvent à CHF 56’000 pour des capitaux étrangers portant intérêt de CHF 900’000 (dettes bancaires CT CHF 200’000 + emprunt LT CHF 700’000). Le coût moyen de la dette est donc de CHF 56’000 / CHF 900’000 = 6.2%. Notons que les dettes fournisseurs et autres passifs d’exploitation ne portent pas intérêt et ne sont donc pas inclus dans ce calcul.
      </P>

      <P>
        Appliquons la formule de l’effet de levier : ROE = ROA + (ROA − i) × CE/CP. Le spread de levier est de 8.5% − 6.2% = 2.3 points. Le bras de levier (en ne considérant que les dettes portant intérêt) est de CHF 900’000 / CHF 1’400’000 = 0.64. L’amplification est de 2.3% × 0.64 = 1.5 points. ROE théorique = 8.5% + 1.5% = 10.0%. Ce calcul simplifié donne un ROE inférieur au ROE réel de 14.3% car il ne prend pas en compte l’effet des dettes non portant intérêt (fournisseurs, charges à payer), qui constituent un financement gratuit supplémentaire amplifiant encore le ROE.
      </P>

      <P>
        Le spread de levier positif de 2.3 points confirme qu’ALPINE TECH SA tire profit de son endettement. Chaque franc emprunté génère 2.3 centimes de rendement supplémentaire pour les actionnaires par rapport à ce qu’il coûte en intérêts. L’entreprise a donc intérêt à maintenir un niveau d’endettement raisonnable tant que le ROA reste supérieur au coût de la dette.
      </P>

      <H3>6.2 Perspective bancaire — ALPINE TECH SA obtiendrait-elle un prêt ?</H3>

      <P>
        Mettons-nous dans la position d’un analyste crédit d’une banque suisse. ALPINE TECH SA souhaite emprunter CHF 400’000 supplémentaires pour financer l’acquisition d’une nouvelle ligne de production. Voici l’évaluation que ferait la banque sur la base des ratios actuels et projetés.
      </P>

      <Tableau
        titre="Analyse bancaire — Avant et après emprunt supplémentaire de CHF 400’000"
        colonnes={['Critère', 'Avant', 'Après (projeté)', 'Norme bancaire', 'Verdict']}
        lignes={[
          ['Taux d’endettement', '53.3%', '58.8%', 'Max 65%', 'Acceptable'],
          ['Debt-to-Equity', '1.14x', '1.43x', 'Max 2.5x', 'Acceptable'],
          ['Couverture intérêts', '5.71x', '4.27x*', 'Min 3.0x', 'Acceptable'],
          ['Capacité remboursement', '1.49 ans', '2.32 ans**', 'Max 7 ans', 'Bon'],
          ['Taux CP', '46.7%', '41.2%', 'Min 35%', 'Acceptable'],
        ]}
      />

      <P>
        *En supposant un taux de 5% sur le nouvel emprunt : charges d’intérêts supplémentaires de CHF 20’000, soit total de CHF 76’000. Couverture = 320’000 / 76’000 = 4.21x. **Dettes financières nettes : CHF 1’115’000, cash-flow identique de CHF 480’000. Capacité = 2.32 ans.
      </P>

      <P>
        Conclusion de l’analyse bancaire : tous les ratios restent dans les normes après l’emprunt supplémentaire. La couverture des intérêts diminue de 5.71x à 4.21x mais reste largement au-dessus du seuil critique de 3.0x. La capacité de remboursement passe de 1.49 à 2.32 années, ce qui reste excellent. Le taux de fonds propres à 41.2% dépasse encore confortablement le minimum de 35% exigé par la plupart des banques suisses. Sur la base de ces chiffres, la banque accepterait très probablement la demande de crédit, sous réserve d’un business plan crédible pour la nouvelle ligne de production et de garanties adéquates.
      </P>

      <Note>
        Synthèse globale de la structure financière d’ALPINE TECH SA : l’entreprise présente une structure de capital saine et équilibrée. L’endettement est modéré (à 53.3%), l’effet de levier est positif (ROA de 8.5% contre un coût de dette de 6.2%), et la capacité de remboursement est excellente (1.49 années). L’entreprise dispose d’une marge d’endettement supplémentaire significative pour financer sa croissance. Le principal risque serait une dégradation de la rentabilité opérationnelle (baisse du ROA en dessous du coût de la dette), qui inverserait l’effet de levier. La direction doit donc veiller à maintenir un ROA supérieur à 6-7% pour continuer à bénéficier de l’endettement.
      </Note>

    </>
  );
}

const AnalyseChap4to6 = { TabLiquidite, TabRentabilite, TabEndettement };
export default AnalyseChap4to6;
