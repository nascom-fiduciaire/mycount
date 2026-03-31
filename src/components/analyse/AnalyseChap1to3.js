import React from 'react';
import { P, H2, H3, Note, Loi, Tableau, Ecriture, TheoryLayout } from '../TheoryUI';

/* ═══════════════════════════════════════════════════════════════════════════
   COMPOSANTS VISUELS INTERNES
   ═══════════════════════════════════════════════════════════════════════════ */

function BilanVisuel({ title, actif, passif, total }) {
  const totalActif = actif.reduce((s, a) => s + a.montant, 0);
  const totalPassif = passif.reduce((s, p) => s + p.montant, 0);
  const barMax = Math.max(totalActif, totalPassif);

  return (
    <div style={{ margin: '20px 0', border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
      {title && (
        <div style={{ background: 'linear-gradient(135deg, #1e3a5f, #2563eb)', padding: '10px 18px', color: '#fff', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.01em' }}>
          {title}
        </div>
      )}
      <div style={{ display: 'flex', gap: 0 }}>
        {/* ACTIF */}
        <div style={{ flex: 1, borderRight: '2px solid #2563eb', padding: '14px 16px' }}>
          <div style={{ fontWeight: 700, fontSize: '0.78rem', color: '#2563eb', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Actif</div>
          {actif.map((a, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: 3 }}>
                <span style={{ color: '#334155' }}>{a.label}</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, color: '#0f172a' }}>CHF {a.montant.toLocaleString('fr-CH')}</span>
              </div>
              <div style={{ height: 14, background: '#f1f5f9', borderRadius: 7, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${(a.montant / barMax) * 100}%`, background: a.color || '#3b82f6', borderRadius: 7, transition: 'width 0.5s ease' }} />
              </div>
            </div>
          ))}
          <div style={{ marginTop: 12, paddingTop: 8, borderTop: '2px solid #2563eb', display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.82rem', color: '#1e3a5f' }}>
            <span>Total Actif</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>CHF {(total || totalActif).toLocaleString('fr-CH')}</span>
          </div>
        </div>
        {/* PASSIF */}
        <div style={{ flex: 1, padding: '14px 16px' }}>
          <div style={{ fontWeight: 700, fontSize: '0.78rem', color: '#059669', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Passif</div>
          {passif.map((p, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: 3 }}>
                <span style={{ color: '#334155' }}>{p.label}</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, color: '#0f172a' }}>CHF {p.montant.toLocaleString('fr-CH')}</span>
              </div>
              <div style={{ height: 14, background: '#f1f5f9', borderRadius: 7, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${(p.montant / barMax) * 100}%`, background: p.color || '#10b981', borderRadius: 7, transition: 'width 0.5s ease' }} />
              </div>
            </div>
          ))}
          <div style={{ marginTop: 12, paddingTop: 8, borderTop: '2px solid #059669', display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.82rem', color: '#065f46' }}>
            <span>Total Passif</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>CHF {(total || totalPassif).toLocaleString('fr-CH')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarreProportionnelle({ segments, title }) {
  const total = segments.reduce((s, seg) => s + seg.value, 0);
  return (
    <div style={{ margin: '18px 0' }}>
      {title && <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: 8 }}>{title}</div>}
      <div style={{ display: 'flex', height: 32, borderRadius: 8, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
        {segments.map((seg, i) => {
          const pct = seg.pct || ((seg.value / total) * 100);
          return (
            <div key={i} style={{
              width: `${pct}%`, background: seg.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.68rem', fontWeight: 700, color: '#fff', textShadow: '0 1px 2px rgba(0,0,0,0.3)',
              minWidth: pct > 5 ? 0 : 2,
            }}>
              {pct > 8 ? `${pct.toFixed(0)}%` : ''}
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', gap: 14, marginTop: 6, flexWrap: 'wrap' }}>
        {segments.map((seg, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.72rem', color: '#475569' }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: seg.color, flexShrink: 0 }} />
            {seg.label} ({(seg.pct || ((seg.value / total) * 100)).toFixed(1)}%)
          </div>
        ))}
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

function WaterfallVisuel({ items }) {
  const maxVal = Math.max(...items.map(it => Math.abs(it.value)));
  return (
    <div style={{ margin: '18px 0', padding: '16px', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0' }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: i < items.length - 1 ? 10 : 0 }}>
          <div style={{ width: 140, fontSize: '0.78rem', fontWeight: item.bold ? 700 : 400, color: '#334155', textAlign: 'right' }}>{item.label}</div>
          <div style={{ flex: 1, height: 28, background: '#e2e8f0', borderRadius: 6, position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', left: item.value >= 0 ? '50%' : `${50 - (Math.abs(item.value) / maxVal) * 50}%`,
              width: `${(Math.abs(item.value) / maxVal) * 50}%`, height: '100%',
              background: item.color || (item.value >= 0 ? '#3b82f6' : '#ef4444'), borderRadius: 6,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.7rem', fontWeight: 700, color: '#fff',
            }}>
              CHF {item.value.toLocaleString('fr-CH')}
            </div>
          </div>
          {i < items.length - 1 && !item.bold && (
            <div style={{ fontSize: '1rem', color: '#94a3b8' }}>{items[i + 1] && items[i + 1].value < items[i].value ? '\u2193' : '\u2192'}</div>
          )}
        </div>
      ))}
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   CHAPITRE 1 : RETRAITEMENTS DU BILAN
   ═══════════════════════════════════════════════════════════════════════════ */

function TabRetraitements() {
  return (
    <>
      {/* ── 1. Pourquoi retraiter le bilan ─────────────────────────────── */}
      <H2>1. Pourquoi retraiter le bilan ?</H2>

      <P>
        Lorsqu'une entreprise suisse publie ses comptes annuels, elle respecte les dispositions du Code des obligations (CO),
        en particulier les articles 957 et suivants. Or, le droit suisse est fondamentalement marqué par le principe de prudence :
        il est non seulement permis, mais encourager de sous-estimer la valeur des actifs et de surestimer les passifs.
        Cette approche protège les créanciers, mais elle a une conséquence majeure pour l'analyste financier : le bilan publié
        ne reflète pas la réalité économique de l'entreprise.
      </P>

      <P>
        Prenons une analogie simple pour bien comprendre. Imaginez que vous souhaitiez évaluer une maison.
        Le propriétaire vous montre ses comptes : la maison a été achetée CHF 800'000 il y a 20 ans,
        et il l'a amortie comptablement à CHF 200'000. Allez-vous considérer que la maison vaut CHF 200'000 ?
        Bien sûr que non. Un expert immobilier vous dira que cette maison vaut probablement CHF 1'200'000 sur le marché actuel.
        L'écart entre la valeur comptable (CHF 200'000) et la valeur réelle (CHF 1'200'000) constitue ce qu'on appelle
        une réserve latente de CHF 1'000'000.
      </P>

      <P>
        Le retraitement du bilan consiste précisément à corriger ces distorsions pour passer du bilan légal (ou "fiscal")
        au bilan économique (ou "retraité"). C'est une étape indispensable avant toute analyse financière sérieuse.
        Sans retraitement, on risque de sous-estimer massivement les fonds propres réels de l'entreprise,
        de surestimer son endettement relatif, et donc de tirer des conclusions erronées sur sa santé financière.
        En pratique, dans les PME suisses, les réserves latentes peuvent représenter 30 % à 50 % du total du bilan,
        ce qui rend leur identification absolument critique.
      </P>

      <Loi art="Art. 960a al. 1 CO">
        Les actifs sont évalués au plus à leur coût d'acquisition ou à leur coût de revient.
        Il est possible de procéder à des amortissements, des corrections de valeur et des provisions
        supérieurs à ce qui est économiquement nécessaire.
      </Loi>

      <Note color="blue">
        Retenez cette idée fondamentale : le bilan publié est un bilan "pessimiste par construction".
        Le retraitement permet de retrouver la réalité économique pour prendre des décisions éclairées.
      </Note>

      {/* ── 2. Les réserves latentes ───────────────────────────────────── */}
      <H2>2. Les réserves latentes</H2>

      <P>
        Une réserve latente existe chaque fois que la valeur comptable d'un actif est inférieure à sa valeur réelle,
        ou chaque fois qu'un passif est surestimé par rapport au risque qu'il couvre réellement.
        Le terme "latente" signifie que cette réserve est invisible dans les comptes publiés : elle n'apparaît nulle part
        explicitement. C'est une richesse cachée de l'entreprise, connue uniquement de la direction et, le cas échéant,
        de l'organe de révision.
      </P>

      <P>
        Les réserves latentes ont quatre sources principales. Premièrement, les amortissements excessifs : lorsqu'une
        machine est amortie en 5 ans alors que sa durée de vie économique est de 10 ans, elle atteint une valeur
        comptable de zéro alors qu'elle fonctionne encore parfaitement. Deuxièmement, les provisions excédentaires :
        une provision pour litiges de CHF 500'000 alors que le risque réel est estimé à CHF 200'000 crée une réserve
        latente de CHF 300'000 au passif. Troisièmement, les stocks sous-évalués : l'utilisation de la méthode LIFO
        (Last In, First Out) en période d'inflation conduit à sous-estimer la valeur des stocks par rapport à leur
        coût de remplacement. Quatrièmement, les immeubles et terrains : ces actifs sont comptabilisés au coût
        historique moins amortissements, mais leur valeur de marché peut être considérablement supérieure,
        surtout dans les agglomérations suisses où l'immobilier a fortement progressé.
      </P>

      <H3>Exemple concret : machine industrielle</H3>

      <P>
        Prenons une machine CNC achetée par SwiSSwatch SA pour CHF 100'000. Comptablement, l'entreprise a choisi
        un amortissement linéaire sur 5 ans, soit CHF 20'000 par an. Après 5 ans, la valeur comptable est donc de
        CHF 0. Pourtant, un expert technique estime que cette machine, bien entretenue, a encore une valeur de marché
        de CHF 35'000 et pourrait fonctionner 3 années supplémentaires. La différence entre la valeur comptable
        (CHF 0) et la valeur réelle (CHF 35'000) constitue une réserve latente de CHF 35'000.
      </P>

      <Tableau
        caption="Réserve latente sur machine CNC"
        headers={['Elément', 'Valeur comptable', 'Valeur réelle', 'Réserve latente']}
        rows={[
          { cells: ['Machine CNC (5 ans)', 'CHF 0', 'CHF 35\'000', 'CHF 35\'000'], _mono: true },
          { cells: ['Amort. comptable : 5 ans', 'CHF 20\'000/an', '', ''], _mono: true },
          { cells: ['Durée économique réelle', '8 ans', '', ''], _mono: true },
        ]}
      />

      <P>
        Si l'entreprise avait utilisé la durée de vie économique réelle de 8 ans, l'amortissement annuel aurait été
        de CHF 12'500 (soit 100'000 / 8), et après 5 ans la valeur nette comptable serait encore de CHF 37'500
        (soit 100'000 - 5 x 12'500). L'écart entre les deux méthodes est flagrant : CHF 37'500 contre CHF 0.
        C'est exactement ce type de correction que le retraitement permet de réaliser.
      </P>

      {/* ── 3. Types de retraitements ─────────────────────────────────── */}
      <H2>3. Types de retraitements</H2>

      <H3>a) Amortissements excessifs</H3>

      <P>
        C'est la source la plus fréquente de réserves latentes. Le principe de prudence du CO autorise
        des amortissements supérieurs à l'usure réelle. Par exemple, les tables fiscales suisses prévoient
        un amortissement de 25 % dégressif sur les machines, ce qui les amène à une valeur résiduelle très
        faible en quelques années. Pour retraiter, on recalcule l'amortissement sur la base de la durée
        de vie économique réelle estimée par des experts techniques. La différence entre la valeur comptable
        actuelle et la valeur recalculée représente la réserve latente sur cet actif.
      </P>

      <P>
        Reprenons l'exemple d'SwiSSwatch SA. L'entreprise possède des véhicules utilitaires achetés CHF 60'000,
        amortis en 3 ans (linéaire, soit CHF 20'000/an). Après 3 ans, valeur comptable = CHF 0.
        Un garage estime la valeur de revente à CHF 18'000. Retraitement : on augmente l'actif de CHF 18'000.
        On identifie une réserve latente brute de CHF 18'000 sur ce poste.
      </P>

      <H3>b) Provisions excédentaires</H3>

      <P>
        Les provisions sont des dettes estimées : l'entreprise anticipe un risque futur et met de l'argent de côté.
        Le problème est que la prudence pousse souvent les dirigeants à provisionner davantage que nécessaire.
        Une provision pour garantie de CHF 150'000 alors que les retours historiques ne dépassent jamais CHF 80'000
        crée une réserve latente de CHF 70'000. Pour retraiter, on ramène la provision à son niveau économiquement
        justifié. La partie excédentaire est reclassée dans les fonds propres retraités.
      </P>

      <H3>c) Leasing hors bilan</H3>

      <P>
        En droit suisse, le leasing financier n'est pas toujours inscrit au bilan (contrairement aux normes IFRS).
        L'entreprise utilise un bien (véhicule, machine) sans qu'il apparaisse dans ses actifs, et les loyers sont
        simplement comptabilisés comme charges. Pour obtenir une image fidèle, le retraitement consiste à intégrer
        la valeur du bien en leasing dans les actifs immobilisés et la dette de leasing résiduelle dans les capitaux
        étrangers à long terme. Cette opération augmente simultanément l'actif et le passif du bilan.
      </P>

      <P>
        Supposons qu'SwiSSwatch SA a un contrat de leasing pour un véhicule dont la valeur initiale est CHF 45'000.
        Après 2 ans de leasing sur 5, la valeur résiduelle de l'engagement est d'environ CHF 27'000.
        Le retraitement consiste à inscrire CHF 27'000 en actif immobilisé (véhicule) et CHF 27'000 en dette
        à long terme (engagement de leasing). L'écriture de retraitement se présente comme suit :
      </P>

      <Ecriture debit="Véhicules (AI)" credit="Dettes de leasing (CE LT)" montant="27'000" libelle="Intégration du leasing financier hors bilan" />

      <H3>d) Goodwill et frais de fondation</H3>

      <P>
        Certains bilans affichent encore un poste "goodwill" ou "frais de fondation" à l'actif.
        En analyse financière, ces postes sont souvent considérés comme des non-valeurs : ils ne représentent
        pas un actif tangible qu'on pourrait vendre séparément. Le retraitement consiste à les éliminer de l'actif
        et à réduire les fonds propres d'autant. Si SwiSSwatch SA affiche un goodwill de CHF 50'000,
        on retranche CHF 50'000 de l'actif et CHF 50'000 des fonds propres. Le bilan total diminue des deux côtés.
      </P>

      <H3>e) Stocks sous-évalués (LIFO vs FIFO)</H3>

      <P>
        La méthode d'évaluation des stocks influence directement leur valeur au bilan. La méthode LIFO
        suppose que les dernières marchandises achetées (les plus chères en période d'inflation) sont vendues
        en premier, ce qui laisse au bilan les marchandises les plus anciennes (les moins chères).
        En passant au coût de remplacement actuel (proche du FIFO), la valeur des stocks augmente.
        Par exemple, des stocks évalués CHF 120'000 en LIFO pourraient valoir CHF 155'000 au coût de remplacement,
        soit une réserve latente de CHF 35'000.
      </P>

      <H3>f) Immeubles sous-évalués</H3>

      <P>
        Les immeubles constituent souvent la réserve latente la plus importante dans les entreprises suisses.
        Un bâtiment industriel acheté CHF 1'500'000 il y a 15 ans et amorti à CHF 900'000 peut avoir une valeur
        de marché de CHF 2'200'000. La réserve latente brute est alors de CHF 1'300'000 (2'200'000 - 900'000).
        Pour les terrains, la réserve peut être encore plus spectaculaire car les terrains ne sont pas amortis
        mais leur valeur de marché peut avoir doublé ou triplé dans les zones urbaines suisses.
      </P>

      {/* ── 4. Impact fiscal des retraitements ────────────────────────── */}
      <H2>4. Impact fiscal des retraitements</H2>

      <P>
        Un point crucial souvent négligé par les étudiants est l'impact fiscal des réserves latentes.
        Si une réserve latente est "dissoute" (c'est-à-dire si l'actif est vendu à sa valeur réelle ou
        si la provision excédentaire est libérée), la différence constitue un bénéfice imposable.
        L'entreprise devra payer des impôts sur ce bénéfice extraordinaire.
        Par conséquent, la réserve latente n'appartient pas entièrement à l'entreprise : une partie
        reviendra au fisc.
      </P>

      <FormulaBox
        formula="Réserve latente nette = Réserve latente brute x (1 - taux d'impôt)"
        description="Le taux effectif moyen en Suisse varie entre 12% et 22% selon le canton. On utilise souvent 20% comme approximation."
      />

      <P>
        Prenons un exemple concret. SwiSSwatch SA possède un immeuble dont la réserve latente brute est
        de CHF 200'000 (valeur de marché CHF 1'100'000 contre valeur comptable CHF 900'000).
        Si l'entreprise vendait cet immeuble à sa valeur de marché, elle réaliserait un bénéfice de CHF 200'000.
        Avec un taux d'impôt effectif de 20 %, l'impôt serait de CHF 40'000.
        La réserve latente nette est donc de CHF 200'000 x (1 - 0.20) = CHF 160'000.
        C'est cette valeur nette qui vient augmenter les fonds propres retraités.
      </P>

      <Tableau
        caption="Calcul de la réserve latente nette (immeuble)"
        headers={['Elément', 'Montant CHF']}
        rows={[
          { cells: ['Valeur de marché de l\'immeuble', '1\'100\'000'], _mono: true },
          { cells: ['Valeur comptable', '900\'000'], _mono: true },
          { cells: ['Réserve latente brute', '200\'000'], _bold: true, _mono: true },
          { cells: ['Impôt latent (20%)', '- 40\'000'], _mono: true },
          { cells: ['Réserve latente nette', '160\'000'], _bold: true, _mono: true },
        ]}
      />

      <Note color="red">
        Ne jamais oublier l'impôt latent. Une erreur fréquente aux examens est d'ajouter la totalité
        de la réserve latente brute aux fonds propres. Il faut toujours déduire l'impôt latent,
        car cette part ne reviendra jamais à l'actionnaire.
      </Note>

      <P>
        Notons que l'impôt latent est inscrit au passif du bilan retraité comme une dette potentielle
        envers le fisc. Il apparaît généralement sous le poste "Impôts latents" ou "Provisions pour impôts différés"
        dans les capitaux étrangers à long terme. Cette dette n'existe pas encore juridiquement, mais elle est
        économiquement certaine si les réserves latentes venaient à être réalisées.
      </P>

      {/* ── 5. Exemple complet SwiSSwatch SA ─────────────────────────── */}
      <H2>5. Exemple complet de retraitement : SwiSSwatch SA</H2>

      <P>
        SwiSSwatch SA est une PME industrielle basée à Sion, spécialisée dans la fabrication de composants
        mécaniques de précision. Voici son bilan publié au 31 décembre N, établi selon les normes du CO.
        Nous allons identifier quatre retraitements et construire le bilan économique retraité.
      </P>

      <BilanVisuel
        title="Bilan publié SwiSSwatch SA au 31.12.N"
        actif={[
          { label: 'Liquidités', montant: 80000, color: '#60a5fa' },
          { label: 'Créances clients', montant: 220000, color: '#93c5fd' },
          { label: 'Stocks', montant: 150000, color: '#a5b4fc' },
          { label: 'Machines et équipements', montant: 180000, color: '#818cf8' },
          { label: 'Immeuble', montant: 600000, color: '#6366f1' },
        ]}
        passif={[
          { label: 'Dettes fournisseurs', montant: 130000, color: '#34d399' },
          { label: 'Dettes bancaires CT', montant: 90000, color: '#6ee7b7' },
          { label: 'Emprunt hypothécaire', montant: 350000, color: '#a7f3d0' },
          { label: 'Provisions diverses', montant: 120000, color: '#d1fae5' },
          { label: 'Capital-actions', montant: 200000, color: '#fbbf24' },
          { label: 'Réserves et report', montant: 340000, color: '#fcd34d' },
        ]}
        total={1230000}
      />

      <H3>Retraitement n.1 : Amortissements excessifs sur machines</H3>

      <P>
        L'analyse révèle que les machines, inscrites pour CHF 180'000 au bilan, ont été amorties de manière
        accélérée. Un expert technique estime leur valeur économique réelle à CHF 280'000. La réserve latente
        brute est de CHF 100'000 (280'000 - 180'000). Après impôt latent de 20 %, la réserve latente nette
        est de CHF 80'000 (100'000 x 0.80). On augmente l'actif "Machines" de CHF 100'000, on inscrit
        CHF 20'000 en impôts latents au passif, et les fonds propres augmentent de CHF 80'000.
      </P>

      <H3>Retraitement n.2 : Provisions excédentaires</H3>

      <P>
        Les provisions diverses de CHF 120'000 comprennent une provision pour litiges de CHF 70'000.
        L'avocat de l'entreprise estime le risque réel à CHF 25'000. La provision excédentaire est de
        CHF 45'000 (70'000 - 25'000). Réserve latente brute : CHF 45'000. Après impôt latent (20 %) :
        réserve latente nette = CHF 36'000. On diminue les provisions de CHF 45'000,
        on inscrit CHF 9'000 en impôts latents, et les fonds propres augmentent de CHF 36'000.
      </P>

      <H3>Retraitement n.3 : Immeuble sous-évalué</H3>

      <P>
        L'immeuble est inscrit à CHF 600'000 au bilan (coût historique CHF 900'000, amortissements cumulés
        CHF 300'000). Une expertise immobilière récente évalue ce bien à CHF 950'000. La réserve latente
        brute est de CHF 350'000 (950'000 - 600'000). Après impôt latent (20 %) : réserve latente nette =
        CHF 280'000. L'actif "Immeuble" passe de CHF 600'000 à CHF 950'000.
        Les impôts latents augmentent de CHF 70'000 et les fonds propres de CHF 280'000.
      </P>

      <H3>Retraitement n.4 : Stocks (LIFO vers coût de remplacement)</H3>

      <P>
        Les stocks sont évalués à CHF 150'000 selon la méthode LIFO. Le coût de remplacement actuel
        est estimé à CHF 185'000. La réserve latente brute est de CHF 35'000. Après impôt latent (20 %) :
        réserve latente nette = CHF 28'000. L'actif "Stocks" passe de CHF 150'000 à CHF 185'000.
        Les impôts latents augmentent de CHF 7'000 et les fonds propres de CHF 28'000.
      </P>

      <Tableau
        caption="Synthèse des retraitements SwiSSwatch SA"
        headers={['Retraitement', 'RL brute', 'Impôt latent (20%)', 'RL nette']}
        rows={[
          { cells: ['Machines (amort. excessifs)', 'CHF 100\'000', 'CHF 20\'000', 'CHF 80\'000'], _mono: true },
          { cells: ['Provisions excédentaires', 'CHF 45\'000', 'CHF 9\'000', 'CHF 36\'000'], _mono: true },
          { cells: ['Immeuble sous-évalué', 'CHF 350\'000', 'CHF 70\'000', 'CHF 280\'000'], _mono: true },
          { cells: ['Stocks (LIFO/remplacement)', 'CHF 35\'000', 'CHF 7\'000', 'CHF 28\'000'], _mono: true },
          { cells: ['TOTAL', 'CHF 530\'000', 'CHF 106\'000', 'CHF 424\'000'], _bold: true, _mono: true },
        ]}
      />

      <P>
        Maintenant, construisons le bilan retraité. Les fonds propres publiés étaient de CHF 540'000
        (capital-actions CHF 200'000 + réserves et report CHF 340'000). Après les retraitements, les fonds
        propres économiques s'élèvent à CHF 964'000 (540'000 + 424'000). C'est presque le double de la valeur
        publiée. Ce résultat illustre à quel point le bilan publié peut sous-estimer la véritable solidité
        financière d'une PME suisse.
      </P>

      <BilanVisuel
        title="Bilan retraité SwiSSwatch SA au 31.12.N"
        actif={[
          { label: 'Liquidités', montant: 80000, color: '#60a5fa' },
          { label: 'Créances clients', montant: 220000, color: '#93c5fd' },
          { label: 'Stocks (réévalués)', montant: 185000, color: '#a5b4fc' },
          { label: 'Machines (réévaluées)', montant: 280000, color: '#818cf8' },
          { label: 'Immeuble (réévalué)', montant: 950000, color: '#6366f1' },
        ]}
        passif={[
          { label: 'Dettes fournisseurs', montant: 130000, color: '#34d399' },
          { label: 'Dettes bancaires CT', montant: 90000, color: '#6ee7b7' },
          { label: 'Emprunt hypothécaire', montant: 350000, color: '#a7f3d0' },
          { label: 'Provisions (corrigées)', montant: 75000, color: '#d1fae5' },
          { label: 'Impôts latents', montant: 106000, color: '#fca5a5' },
          { label: 'Capital-actions', montant: 200000, color: '#fbbf24' },
          { label: 'Réserves + RL nettes', montant: 764000, color: '#fcd34d' },
        ]}
        total={1715000}
      />

      <Note color="green">
        Les fonds propres passent de CHF 540'000 (bilan publié) à CHF 964'000 (bilan retraité),
        soit une augmentation de 78.5 %. Le degré d'endettement réel est donc bien inférieur
        à ce que laissait supposer le bilan publié. C'est l'objectif fondamental du retraitement :
        révéler la vraie capacité financière de l'entreprise.
      </Note>
    </>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   CHAPITRE 2 : ANALYSE STRUCTURELLE
   ═══════════════════════════════════════════════════════════════════════════ */

function TabStructure() {
  return (
    <>
      {/* ── 1. Introduction ───────────────────────────────────────────── */}
      <H2>1. Lire un bilan, c'est comprendre une structure</H2>

      <P>
        Lorsqu'on ouvre un bilan pour la première fois, on est confronté à une série de chiffres absolus :
        CHF 500'000 de stocks, CHF 1'200'000 de fonds propres, CHF 800'000 de dettes bancaires.
        Ces montants, pris isolément, ne nous disent rien de significatif. CHF 500'000 de stocks,
        est-ce beaucoup ? Pour une grande surface alimentaire comme Migros, c'est dérisoire.
        Pour un bureau d'architectes de cinq personnes, c'est extraordinaire. Tout est question de proportion.
      </P>

      <P>
        L'analyse structurelle transforme les montants absolus en pourcentages relatifs, ce qui permet
        de comparer des entreprises de tailles très différentes, de suivre l'évolution d'une même entreprise
        dans le temps, et de détecter des déséquilibres financiers potentiellement dangereux.
        Elle repose sur deux techniques complémentaires : l'analyse verticale (chaque poste en pourcentage du total)
        et l'analyse horizontale (variation d'un poste entre deux exercices).
      </P>

      <P>
        Maintenant que nous comprenons l'intérêt de cette approche, voyons comment elle se met en pratique
        avec les comptes retraités d'SwiSSwatch SA.
      </P>

      {/* ── 2. Analyse verticale du bilan ─────────────────────────────── */}
      <H2>2. Analyse verticale du bilan</H2>

      <P>
        Le principe de l'analyse verticale est simple : on exprime chaque poste du bilan en pourcentage
        du total du bilan. Côté actif, on distingue la part circulante (liquidités, créances, stocks)
        de la part immobilisée (machines, immeubles, participations). Côté passif, on distingue
        les capitaux étrangers à court terme, les capitaux étrangers à long terme, et les fonds propres.
        Ces proportions révèlent la structure fondamentale de l'entreprise.
      </P>

      <P>
        Une entreprise industrielle comme SwiSSwatch SA aura typiquement une part d'actifs immobilisés
        élevée (machines, immeubles d'usine), tandis qu'une entreprise de services aura des actifs
        principalement circulants (créances clients, liquidités). De même, une entreprise très endettée
        aura une proportion de fonds propres faible, ce qui la rend vulnérable en cas de ralentissement.
        Il n'existe pas de structure "idéale" universelle, mais il existe des repères par secteur
        que l'analyste doit connaître.
      </P>

      <P>
        Appliquons l'analyse verticale au bilan retraité d'SwiSSwatch SA. Le total du bilan
        retraité est de CHF 1'715'000. Calculons les pourcentages pour chaque poste.
      </P>

      <Tableau
        caption="Analyse verticale du bilan retraité SwiSSwatch SA"
        headers={['Actif', 'CHF', '% Bilan', '', 'Passif', 'CHF', '% Bilan']}
        rows={[
          { cells: ['Liquidités', '80\'000', '4.7%', '', 'Dettes fournisseurs', '130\'000', '7.6%'], _mono: true },
          { cells: ['Créances clients', '220\'000', '12.8%', '', 'Dettes bancaires CT', '90\'000', '5.2%'], _mono: true },
          { cells: ['Stocks', '185\'000', '10.8%', '', 'Emprunt hypothécaire', '350\'000', '20.4%'], _mono: true },
          { cells: ['AC total', '485\'000', '28.3%', '', 'Provisions', '75\'000', '4.4%'], _bold: true, _mono: true },
          { cells: ['Machines', '280\'000', '16.3%', '', 'Impôts latents', '106\'000', '6.2%'], _mono: true },
          { cells: ['Immeuble', '950\'000', '55.4%', '', 'CE total', '751\'000', '43.8%'], _mono: true },
          { cells: ['AI total', '1\'230\'000', '71.7%', '', 'Fonds propres', '964\'000', '56.2%'], _bold: true, _mono: true },
          { cells: ['TOTAL ACTIF', '1\'715\'000', '100%', '', 'TOTAL PASSIF', '1\'715\'000', '100%'], _bold: true, _mono: true },
        ]}
      />

      <BarreProportionnelle
        title="Structure de l'actif"
        segments={[
          { label: 'Liquidités', value: 80000, color: '#60a5fa' },
          { label: 'Créances', value: 220000, color: '#93c5fd' },
          { label: 'Stocks', value: 185000, color: '#a5b4fc' },
          { label: 'Machines', value: 280000, color: '#818cf8' },
          { label: 'Immeuble', value: 950000, color: '#6366f1' },
        ]}
      />

      <BarreProportionnelle
        title="Structure du passif"
        segments={[
          { label: 'CE court terme', value: 220000, color: '#f87171' },
          { label: 'CE long terme', value: 531000, color: '#fb923c' },
          { label: 'Fonds propres', value: 964000, color: '#34d399' },
        ]}
      />

      <P>
        Que nous révèle cette structure ? Premièrement, l'actif est dominé par l'immeuble (55.4 %),
        ce qui est typique d'une PME industrielle propriétaire de ses locaux. Les actifs circulants
        ne représentent que 28.3 % du total, ce qui signifie que l'essentiel de la richesse est immobilisé.
        Deuxièmement, les fonds propres représentent 56.2 % du total du bilan, ce qui est un ratio
        très solide. En Suisse, on considère généralement qu'un ratio de fonds propres supérieur à 40 %
        est sain pour une entreprise industrielle. SwiSSwatch SA dépasse largement ce seuil.
      </P>

      <Note color="blue">
        Repères sectoriels en Suisse : Industrie = fonds propres 35-50 %, Commerce = 25-40 %,
        Services = 40-60 %. Un ratio inférieur à 20 % est un signal d'alarme sérieux quel que soit le secteur.
      </Note>

      {/* ── 3. Analyse verticale du CR ────────────────────────────────── */}
      <H2>3. Analyse verticale du compte de résultat</H2>

      <P>
        L'analyse verticale du compte de résultat suit le même principe, mais la base de référence
        n'est plus le total du bilan : c'est le chiffre d'affaires (CA). Chaque poste de charge
        est exprimé en pourcentage du CA, ce qui permet de voir immédiatement quelle part du revenu
        est absorbée par chaque catégorie de coûts. Les marges intermédiaires (marge brute, EBITDA,
        résultat d'exploitation, résultat net) sont des indicateurs clés de la rentabilité.
      </P>

      <P>
        La marge brute mesure ce qui reste après déduction du coût des marchandises vendues. C'est
        un indicateur fondamental de la compétitivité commerciale : si la marge brute baisse, cela
        signifie que les prix de vente diminuent ou que les coûts d'achat augmentent, ou les deux.
        L'EBITDA (résultat avant intérêts, impôts, dépréciations et amortissements) mesure la
        performance opérationnelle pure, indépendamment des choix de financement et d'amortissement.
        Le résultat net, en bas du tableau, montre ce qui revient in fine à l'actionnaire.
      </P>

      <Tableau
        caption="Compte de résultat SwiSSwatch SA (exercice N) - Analyse verticale"
        headers={['Poste', 'CHF', '% du CA']}
        rows={[
          { cells: ['Chiffre d\'affaires net', '2\'400\'000', '100.0%'], _bold: true, _mono: true },
          { cells: ['Coût des marchandises vendues', '-1\'080\'000', '-45.0%'], _mono: true },
          { cells: ['Marge brute', '1\'320\'000', '55.0%'], _bold: true, _mono: true },
          { cells: ['Charges de personnel', '-780\'000', '-32.5%'], _mono: true },
          { cells: ['Autres charges d\'exploitation', '-240\'000', '-10.0%'], _mono: true },
          { cells: ['EBITDA', '300\'000', '12.5%'], _bold: true, _mono: true },
          { cells: ['Amortissements', '-96\'000', '-4.0%'], _mono: true },
          { cells: ['Résultat d\'exploitation (EBIT)', '204\'000', '8.5%'], _bold: true, _mono: true },
          { cells: ['Charges financières', '-28\'000', '-1.2%'], _mono: true },
          { cells: ['Résultat avant impôts', '176\'000', '7.3%'], _mono: true },
          { cells: ['Impôts', '-35\'200', '-1.5%'], _mono: true },
          { cells: ['Résultat net', '140\'800', '5.9%'], _bold: true, _mono: true },
        ]}
      />

      <P>
        L'interprétation de ce tableau est riche d'enseignements. La marge brute de 55 % est bonne pour
        une entreprise industrielle (la moyenne du secteur se situe entre 40 % et 60 %).
        Les charges de personnel absorbent 32.5 % du CA, ce qui est significatif mais cohérent pour une
        activité de fabrication de précision nécessitant une main-d'oeuvre qualifiée. L'EBITDA de 12.5 %
        indique une rentabilité opérationnelle correcte. Le résultat net de 5.9 % est satisfaisant
        et laisse une marge pour l'autofinancement.
      </P>

      <P>
        Un signal d'alerte serait une marge brute en baisse d'une année sur l'autre, ou des charges
        de personnel qui dépasseraient 40 % du CA sans justification par la nature de l'activité.
        De même, si les charges financières dépassent 3-4 % du CA, cela peut indiquer un endettement
        excessif pesant sur la rentabilité.
      </P>

      {/* ── 4. Analyse horizontale ────────────────────────────────────── */}
      <H2>4. Analyse horizontale (évolution N-1 / N)</H2>

      <P>
        L'analyse horizontale complète l'analyse verticale en ajoutant la dimension temporelle.
        Au lieu de regarder les proportions à un instant donné, on compare les valeurs entre deux
        exercices (ou plus) pour identifier les tendances. La formule de base est simple :
      </P>

      <FormulaBox
        formula="Variation % = (Valeur N - Valeur N-1) / Valeur N-1 x 100"
        description="Une variation positive indique une augmentation, une variation négative une diminution."
      />

      <P>
        L'analyse horizontale est particulièrement utile pour détecter des signaux d'alerte.
        Par exemple, si le chiffre d'affaires stagne ou diminue tandis que les stocks augmentent,
        cela peut indiquer des difficultés de vente et un risque d'obsolescence des stocks.
        Si les créances clients augmentent beaucoup plus vite que le CA, cela peut signifier
        que les clients paient de plus en plus tard, ce qui met en danger la trésorerie.
        A l'inverse, une croissance du CA accompagnée d'une croissance proportionnelle des charges
        de personnel peut être tout à fait saine si l'entreprise recrute pour répondre à la demande.
      </P>

      <Tableau
        caption="Analyse horizontale du bilan SwiSSwatch SA (N-1 vs N)"
        headers={['Poste', 'N-1 (CHF)', 'N (CHF)', 'Variation CHF', 'Variation %']}
        rows={[
          { cells: ['Liquidités', '95\'000', '80\'000', '-15\'000', '-15.8%'], _mono: true },
          { cells: ['Créances clients', '180\'000', '220\'000', '+40\'000', '+22.2%'], _mono: true },
          { cells: ['Stocks', '160\'000', '185\'000', '+25\'000', '+15.6%'], _mono: true },
          { cells: ['Machines', '310\'000', '280\'000', '-30\'000', '-9.7%'], _mono: true },
          { cells: ['Immeuble', '980\'000', '950\'000', '-30\'000', '-3.1%'], _mono: true },
          { cells: ['Total Actif', '1\'725\'000', '1\'715\'000', '-10\'000', '-0.6%'], _bold: true, _mono: true },
          { cells: [''], _sep: true },
          { cells: ['CA', '2\'280\'000', '2\'400\'000', '+120\'000', '+5.3%'], _bold: true, _mono: true },
        ]}
      />

      <P>
        Que nous dit ce tableau ? Le chiffre d'affaires a progressé de 5.3 %, ce qui est positif.
        Cependant, les créances clients ont augmenté de 22.2 %, soit beaucoup plus vite que le CA.
        C'est un signal d'alerte : les clients paient-ils plus tard ? Y a-t-il un gros client en difficulté ?
        Les stocks ont également augmenté de 15.6 %, soit trois fois plus vite que le CA : y a-t-il
        des invendus qui s'accumulent ? Enfin, les liquidités ont baissé de 15.8 %, ce qui est cohérent
        avec l'augmentation des créances et des stocks (l'argent est "coincé" dans le cycle d'exploitation).
      </P>

      <Note color="yellow">
        Deux signaux d'alerte classiques en analyse horizontale : (1) Stocks qui augmentent plus vite que le CA = risque d'obsolescence.
        (2) Créances qui augmentent plus vite que le CA = détérioration des délais de paiement clients.
      </Note>

      {/* ── 5. Règles d'or du financement ─────────────────────────────── */}
      <H2>5. Règles d'or du financement</H2>

      <P>
        Au-delà des proportions, l'analyse structurelle vérifie le respect de principes fondamentaux
        de financement appelés "règles d'or". Le principe central est simple à comprendre : la durée
        du financement doit correspondre à la durée d'utilisation de l'actif financé. Un immeuble
        que l'on prévoit d'utiliser pendant 20 ans ne peut pas être financé par un crédit bancaire
        à 6 mois. Si la banque refuse de renouveler le crédit, l'entreprise serait contrainte de vendre
        l'immeuble en urgence, probablement à perte.
      </P>

      <P>
        Le degré de couverture 1 (DC1) mesure dans quelle proportion les actifs immobilisés sont
        financés par les fonds propres seuls. Un DC1 supérieur à 100 % signifie que les fonds propres
        suffisent à financer tous les actifs immobilisés, ce qui constitue une situation idéale
        mais rarement atteinte dans la pratique.
      </P>

      <FormulaBox
        formula="DC1 = Capitaux propres / Actifs immobilisés x 100"
        description="Idéal : supérieur ou égal à 100% (rare en pratique). Minimum souhaitable : 60-70%."
      />

      <P>
        Le degré de couverture 2 (DC2) est encore plus important. Il mesure dans quelle proportion
        les capitaux permanents (fonds propres + capitaux étrangers à long terme) couvrent les actifs
        immobilisés. Ce ratio DOIT impérativement être supérieur à 100 %. S'il est inférieur à 100 %,
        cela signifie qu'une partie des actifs immobilisés est financée par des dettes à court terme,
        ce qui constitue un déséquilibre financier dangereux.
      </P>

      <FormulaBox
        formula="DC2 = (Capitaux propres + CE long terme) / Actifs immobilisés x 100"
        description="DOIT ABSOLUMENT être supérieur ou égal a 100%. Inférieur = déséquilibre grave."
      />

      <P>
        Calculons ces ratios pour SwiSSwatch SA. Les actifs immobilisés représentent CHF 1'230'000
        (machines CHF 280'000 + immeuble CHF 950'000). Les fonds propres sont de CHF 964'000.
        Les capitaux étrangers à long terme comprennent l'emprunt hypothécaire CHF 350'000,
        les provisions corrigées CHF 75'000 et les impôts latents CHF 106'000, soit CHF 531'000.
      </P>

      <Tableau
        caption="Degrés de couverture SwiSSwatch SA"
        headers={['Ratio', 'Calcul', 'Résultat', 'Evaluation']}
        rows={[
          { cells: ['DC1', '964\'000 / 1\'230\'000', '78.4%', 'Bon (fonds propres couvrent 78% des AI)'], _mono: true },
          { cells: ['DC2', '(964\'000 + 531\'000) / 1\'230\'000', '121.5%', 'Excellent (marge de sécurité de 21.5%)'], _mono: true },
        ]}
      />

      <P>
        Le DC2 de 121.5 % signifie que les capitaux permanents dépassent les actifs immobilisés
        de CHF 265'000 environ. Cet excédent constitue le fonds de roulement net, que nous étudierons
        en détail dans le chapitre suivant. Il représente une marge de sécurité qui permet à l'entreprise
        de faire face à des imprévus sans mettre en péril le financement de ses immobilisations.
      </P>

      <Note color="red">
        Un DC2 inférieur à 100 % est un signal d'alarme majeur. Cela signifie que l'entreprise finance
        une partie de ses actifs immobilisés (bâtiment, machines) avec des dettes à court terme (crédit
        fournisseur, découvert bancaire). En cas de non-renouvellement de ces crédits, l'entreprise
        pourrait être contrainte de liquider des actifs dans l'urgence.
      </Note>

      {/* ── 6. Exemple complet d'analyse structurelle ─────────────────── */}
      <H2>6. Synthèse : analyse structurelle complète d'SwiSSwatch SA</H2>

      <P>
        Rassemblons maintenant tous les éléments de notre analyse structurelle pour formuler des
        conclusions opérationnelles. La structure de l'actif montre une entreprise fortement immobilisée
        (71.7 % du bilan), ce qui est cohérent avec son activité industrielle mais implique un besoin
        important de capitaux permanents. La structure du passif est rassurante avec 56.2 % de fonds propres,
        bien au-dessus des normes sectorielles. Le DC2 de 121.5 % confirme un financement équilibré.
      </P>

      <P>
        Cependant, l'analyse horizontale révèle deux points de vigilance. L'augmentation des créances clients
        de 22.2 % (contre un CA en hausse de seulement 5.3 %) suggère un allongement des délais d'encaissement
        qu'il faudrait investiguer. L'augmentation des stocks de 15.6 % mériterait également une analyse
        plus approfondie pour s'assurer qu'il ne s'agit pas d'invendus.
      </P>

      <P>
        L'analyse verticale du compte de résultat montre une rentabilité correcte avec un résultat net
        de 5.9 % du CA. Les charges de personnel de 32.5 % sont maîtrisées et cohérentes avec l'activité.
        L'EBITDA de 12.5 % assure une capacité d'autofinancement suffisante pour renouveler les équipements
        et rembourser les dettes. Ces constats nous amènent naturellement à l'analyse de la trésorerie
        et du besoin en fonds de roulement, que nous aborderons dans le chapitre suivant.
      </P>
    </>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   CHAPITRE 3 : FONDS DE ROULEMENT NET & BFR
   ═══════════════════════════════════════════════════════════════════════════ */

function TabFDR() {
  return (
    <>
      {/* ── 1. Le cycle d'exploitation ────────────────────────────────── */}
      <H2>1. Le cycle d'exploitation : comprendre le besoin permanent de trésorerie</H2>

      <P>
        Pour comprendre le fonds de roulement et le besoin en fonds de roulement, il faut d'abord
        comprendre le cycle d'exploitation. Toute entreprise qui vend des biens ou des services suit
        un cycle qui commence par l'achat de matières premières ou de marchandises, se poursuit par
        le stockage et éventuellement la transformation, puis par la vente, et se termine par
        l'encaissement du paiement. Ce cycle prend du temps : entre le moment où l'entreprise décaisse
        de l'argent pour acheter et le moment où elle encaisse le produit de la vente, il s'écoule
        plusieurs semaines, voire plusieurs mois.
      </P>

      <P>
        Prenons l'exemple d'un restaurateur pour bien illustrer ce concept. Il achète ses ingrédients
        le lundi et paie son fournisseur immédiatement (décaissement jour 1). Il prépare les plats
        et sert ses clients du mardi au vendredi. Les clients paient par carte de crédit, mais
        le terminal de paiement ne reverse l'argent qu'au bout de 3 à 5 jours ouvrables.
        Résultat : le restaurateur a payé ses fournisseurs le lundi, mais ne recevra l'argent
        de ses ventes que le vendredi ou le lundi suivant. Pendant 5 à 7 jours, il doit financer
        cette avance de trésorerie. Et ce cycle se répète chaque semaine, créant un besoin permanent.
      </P>

      <P>
        Ce qui rend ce phénomène crucial, c'est qu'il touche aussi les entreprises rentables.
        Une entreprise peut afficher un bénéfice de CHF 500'000 dans son compte de résultat et
        se retrouver à court de trésorerie si ses clients paient à 90 jours et que ses fournisseurs
        exigent un paiement à 30 jours. Le bénéfice comptable et la trésorerie disponible sont deux
        choses très différentes. C'est pourquoi on dit souvent que "le bénéfice est une opinion,
        la trésorerie est un fait". Des entreprises parfaitement rentables font faillite chaque année
        parce qu'elles n'ont pas su gérer leur cycle de trésorerie.
      </P>

      <Note color="yellow">
        Rappel essentiel : une entreprise ne fait pas faillite parce qu'elle n'est pas rentable.
        Elle fait faillite parce qu'elle ne peut plus payer ses dettes à leur échéance.
        C'est la cessation de paiement, pas la perte comptable, qui déclenche la faillite (art. 725 CO).
      </Note>

      {/* ── 2. Le fonds de roulement net (FRN) ───────────────────────── */}
      <H2>2. Le fonds de roulement net (FRN)</H2>

      <P>
        Le fonds de roulement net est l'un des indicateurs les plus importants de l'analyse financière.
        Il mesure la marge de manoeuvre dont dispose l'entreprise pour financer son cycle d'exploitation.
        Il peut être calculé de deux manières différentes, mais le résultat est toujours identique.
        Comprendre pourquoi ces deux formules donnent le même résultat est fondamental pour maîtriser
        l'équilibre du bilan.
      </P>

      <FormulaBox
        formula="FRN = Actifs circulants - Capitaux étrangers court terme"
        description="Approche par le haut du bilan (liquidité)"
      />

      <FormulaBox
        formula="FRN = (Capitaux propres + CE long terme) - Actifs immobilisés"
        description="Approche par le bas du bilan (financement permanent)"
      />

      <P>
        Pourquoi ces deux formules sont-elles équivalentes ? C'est une conséquence directe de l'équation
        fondamentale du bilan : Actif = Passif. Si l'on développe, on a : AC + AI = CE CT + CE LT + CP.
        En réarrangeant : AC - CE CT = CP + CE LT - AI. Les deux côtés de cette égalité sont exactement
        les deux formules du FRN. C'est un résultat mathématique, pas une approximation.
      </P>

      <P>
        La première formule (par le haut) est intuitive : elle montre directement de combien les actifs
        liquides dépassent les dettes à payer rapidement. Si le FRN est positif, l'entreprise dispose
        d'un coussin de sécurité. La deuxième formule (par le bas) est plus éclairante sur les causes :
        elle montre que le FRN est l'excédent des capitaux permanents par rapport aux emplois permanents.
        Autrement dit, c'est la partie des ressources stables qui n'est pas absorbée par les immobilisations
        et qui reste disponible pour financer le cycle d'exploitation.
      </P>

      <H3>Calcul du FRN pour SwiSSwatch SA</H3>

      <P>
        Reprenons les chiffres du bilan retraité d'SwiSSwatch SA.
        Par la première formule : FRN = AC - CE CT = 485'000 - 220'000 = CHF 265'000.
        Par la deuxième formule : FRN = (CP + CE LT) - AI = (964'000 + 531'000) - 1'230'000
        = 1'495'000 - 1'230'000 = CHF 265'000. Les deux formules donnent bien le même résultat.
      </P>

      <Tableau
        caption="Calcul du FRN par les deux méthodes"
        headers={['Méthode', 'Calcul', 'Résultat']}
        rows={[
          { cells: ['Par le haut : AC - CE CT', '485\'000 - 220\'000', 'CHF 265\'000'], _mono: true },
          { cells: ['Par le bas : (CP + CE LT) - AI', '(964\'000 + 531\'000) - 1\'230\'000', 'CHF 265\'000'], _mono: true },
        ]}
      />

      <BilanVisuel
        title="Visualisation du FRN : l'excédent des AC sur les CE CT"
        actif={[
          { label: 'Actifs circulants', montant: 485000, color: '#60a5fa' },
          { label: 'Actifs immobilisés', montant: 1230000, color: '#6366f1' },
        ]}
        passif={[
          { label: 'CE court terme', montant: 220000, color: '#f87171' },
          { label: 'CE long terme', montant: 531000, color: '#fb923c' },
          { label: 'Fonds propres', montant: 964000, color: '#34d399' },
        ]}
        total={1715000}
      />

      <P>
        Un FRN de CHF 265'000 signifie qu'SwiSSwatch SA dispose d'une marge de sécurité confortable.
        Même si certaines créances clients s'avéraient irrécouvrables ou si certains stocks perdaient
        de la valeur, l'entreprise pourrait encore faire face à ses dettes à court terme. En règle
        générale, on considère qu'un FRN positif et croissant est un signe de bonne santé financière.
        Un FRN négatif, en revanche, est un signal d'alarme grave : il signifie que des dettes à court
        terme financent des actifs immobilisés, ce qui crée un risque de liquidité permanent.
      </P>

      <Note color="blue">
        Le FRN est à l'entreprise ce que l'épargne de précaution est à un ménage : c'est le matelas
        financier qui permet d'absorber les chocs sans devoir vendre les meubles en urgence.
        Plus le cycle d'exploitation est long ou incertain, plus le FRN doit être élevé.
      </Note>

      {/* ── 3. Le besoin en fonds de roulement (BFR) ──────────────────── */}
      <H2>3. Le besoin en fonds de roulement (BFR)</H2>

      <P>
        Maintenant que nous comprenons le FRN, voyons comment le cycle d'exploitation crée un besoin
        permanent de financement. Le besoin en fonds de roulement (BFR) quantifie précisément ce besoin.
        Il mesure le montant d'argent immobilisé dans le cycle d'exploitation, c'est-à-dire l'argent
        que l'entreprise doit avancer avant de le récupérer auprès de ses clients.
      </P>

      <FormulaBox
        formula="BFR = (Stocks + Créances clients) - Dettes fournisseurs"
        description="Plus précisément : Actifs circulants d'exploitation - Passifs circulants d'exploitation"
      />

      <P>
        Pour bien comprendre cette formule, examinons chaque composante. Les stocks représentent
        de l'argent qui a été dépensé pour acheter des marchandises ou des matières premières,
        mais qui n'a pas encore été transformé en chiffre d'affaires. Tant que le stock est dans
        l'entrepôt, l'argent est "gelé". Les créances clients représentent des ventes réalisées mais
        pas encore encaissées : l'entreprise a livré la marchandise, a comptabilisé le revenu,
        mais l'argent n'est pas encore sur son compte bancaire. Ces deux postes augmentent le besoin
        de financement.
      </P>

      <P>
        A l'inverse, les dettes fournisseurs représentent un financement gratuit : l'entreprise
        a reçu les marchandises mais ne les a pas encore payées. Chaque jour de délai de paiement
        accordé par un fournisseur est un jour de financement gratuit pour l'entreprise. C'est pourquoi
        les dettes fournisseurs viennent en déduction dans le calcul du BFR.
      </P>

      <H3>BFR positif vs BFR négatif</H3>

      <P>
        Dans la grande majorité des cas, le BFR est positif. Cela signifie que l'entreprise a besoin
        de trésorerie pour financer son cycle d'exploitation. C'est le cas de presque toutes les
        entreprises industrielles, commerciales B2B, et de services avec facturation différée.
        Plus les stocks sont importants, plus les délais clients sont longs, et plus les fournisseurs
        exigent un paiement rapide, plus le BFR est élevé.
      </P>

      <P>
        Un BFR négatif est plus rare et se rencontre principalement dans la distribution alimentaire
        (comme Migros ou Coop en Suisse). Dans ce modèle, les clients paient comptant (au passage
        en caisse), mais les fournisseurs sont payés à 30, 60 ou même 90 jours. L'entreprise
        encaisse donc l'argent avant de devoir payer ses fournisseurs, ce qui génère une trésorerie
        excédentaire qui peut être placée. C'est un avantage financier considérable.
      </P>

      <H3>Calcul du BFR pour SwiSSwatch SA</H3>

      <P>
        Appliquons la formule aux chiffres d'SwiSSwatch SA. Les stocks s'élèvent à CHF 185'000,
        les créances clients à CHF 220'000, et les dettes fournisseurs à CHF 130'000.
        BFR = (185'000 + 220'000) - 130'000 = 405'000 - 130'000 = CHF 275'000.
      </P>

      <Tableau
        caption="Calcul du BFR SwiSSwatch SA"
        headers={['Composante', 'Montant CHF', 'Effet sur BFR']}
        rows={[
          { cells: ['Stocks', '185\'000', 'Augmente le BFR (+)'], _mono: true },
          { cells: ['Créances clients', '220\'000', 'Augmente le BFR (+)'], _mono: true },
          { cells: ['Dettes fournisseurs', '130\'000', 'Diminue le BFR (-)'], _mono: true },
          { cells: ['BFR total', '275\'000', ''], _bold: true, _mono: true },
        ]}
      />

      <P>
        Ce BFR de CHF 275'000 signifie qu'SwiSSwatch SA doit financer en permanence CHF 275'000
        de besoins liés à son cycle d'exploitation. Ce montant est relativement stable d'une année
        sur l'autre (sauf en cas de forte croissance ou de changement des conditions commerciales).
        La question fondamentale est : comment ce besoin est-il financé ? C'est là qu'intervient
        la relation entre le FRN et le BFR.
      </P>

      {/* ── 4. La trésorerie nette ────────────────────────────────────── */}
      <H2>4. La trésorerie nette : l'équilibre financier global</H2>

      <P>
        La trésorerie nette est le résultat final de l'équation d'équilibre financier.
        Elle représente ce qui reste (ou ce qui manque) après que le fonds de roulement net
        a couvert le besoin en fonds de roulement. C'est l'indicateur ultime de la santé
        de trésorerie de l'entreprise.
      </P>

      <FormulaBox
        formula="Trésorerie nette = FRN - BFR"
        description="C'est le 'résultat' de l'équilibre financier. TN = Liquidités - Dettes bancaires CT"
      />

      <P>
        Si la trésorerie nette est positive, cela signifie que le FRN est suffisant pour couvrir
        le BFR, et il reste un excédent de liquidités que l'entreprise peut placer ou utiliser
        pour des investissements. Si la trésorerie nette est négative, cela signifie que le FRN
        est insuffisant pour couvrir le BFR, et l'entreprise doit recourir à un financement bancaire
        à court terme (crédit de caisse, ligne de crédit, découvert) pour combler le déficit.
        Une trésorerie nette négative n'est pas forcément catastrophique (beaucoup d'entreprises
        fonctionnent ainsi), mais elle crée une dépendance vis-à-vis des banques.
      </P>

      <H3>Calcul pour SwiSSwatch SA</H3>

      <P>
        Pour SwiSSwatch SA : TN = FRN - BFR = 265'000 - 275'000 = CHF -10'000.
        La trésorerie nette est légèrement négative. Vérifions avec la formule directe :
        TN = Liquidités - Dettes bancaires CT = 80'000 - 90'000 = CHF -10'000. Le résultat est
        identique, ce qui confirme la cohérence de nos calculs.
      </P>

      <WaterfallVisuel
        items={[
          { label: 'FRN', value: 265000, color: '#3b82f6', bold: true },
          { label: 'BFR', value: -275000, color: '#ef4444' },
          { label: 'Trésorerie nette', value: -10000, color: '#f59e0b', bold: true },
        ]}
      />

      <Tableau
        caption="Equilibre financier SwiSSwatch SA"
        headers={['Indicateur', 'Montant CHF', 'Interprétation']}
        rows={[
          { cells: ['Fonds de roulement net (FRN)', '265\'000', 'Positif : marge de sécurité sur le financement des AI'], _mono: true },
          { cells: ['Besoin en fonds de roulement (BFR)', '275\'000', 'Le cycle d\'exploitation absorbe CHF 275\'000'], _mono: true },
          { cells: ['Trésorerie nette (TN)', '-10\'000', 'Légèrement négative : petit découvert bancaire'], _bold: true, _mono: true },
        ]}
      />

      <P>
        La trésorerie nette de CHF -10'000 n'est pas alarmante en soi : c'est un écart très faible
        qui peut être comblé par un petit crédit de caisse. Cependant, la tendance est à surveiller.
        Si le BFR continue d'augmenter (à cause de créances clients en hausse, comme nous l'avons
        observé dans l'analyse horizontale) sans que le FRN ne progresse, la trésorerie nette
        pourrait devenir significativement négative, ce qui augmenterait la dépendance bancaire
        et les frais financiers.
      </P>

      {/* ── 5. Leviers pour améliorer le BFR ──────────────────────────── */}
      <H2>5. Leviers d'action pour améliorer le BFR</H2>

      <P>
        L'un des grands avantages de l'analyse du BFR est qu'elle identifie directement les leviers
        d'action à disposition du management pour améliorer la trésorerie. Chaque composante du BFR
        peut être optimisée, et les effets sont souvent immédiats et significatifs. Examinons les
        trois principaux leviers.
      </P>

      <H3>Levier 1 : Réduire les délais clients</H3>

      <P>
        Plus les clients paient vite, moins l'entreprise a besoin de financer les créances.
        Plusieurs actions sont possibles : facturer immédiatement à la livraison (et non en fin de mois),
        proposer un escompte pour paiement anticipé (par exemple 2 % de remise pour paiement sous 10 jours
        au lieu de 30), mettre en place des relances systématiques, et exiger des acomptes pour les
        grosses commandes.
      </P>

      <P>
        Impact chiffré : si SwiSSwatch SA réduit son délai moyen d'encaissement de 33 jours à 25 jours
        (soit une réduction de 8 jours), le montant des créances diminuerait proportionnellement.
        Créances actuelles : CHF 220'000 pour un CA de CHF 2'400'000, soit un délai moyen de
        220'000 / (2'400'000/360) = 33 jours. Avec 25 jours : créances = 2'400'000 x 25/360 = CHF 166'667.
        Gain de trésorerie : 220'000 - 166'667 = CHF 53'333. Cet argent se retrouverait directement
        sur le compte bancaire sans aucun emprunt supplémentaire.
      </P>

      <H3>Levier 2 : Allonger les délais fournisseurs</H3>

      <P>
        Négocier des conditions de paiement plus longues auprès des fournisseurs est un levier
        symétrique. Si le délai fournisseur passe de 30 jours à 45 jours, le montant des dettes
        fournisseurs augmente, ce qui réduit mécaniquement le BFR. Attention cependant : cette
        stratégie a des limites, car des délais trop longs peuvent détériorer la relation
        commerciale ou entraîner la perte d'escomptes avantageux.
      </P>

      <P>
        Impact chiffré : les achats annuels d'SwiSSwatch SA s'élèvent à environ CHF 1'080'000
        (coût des marchandises vendues). Délai actuel : 130'000 / (1'080'000/360) = 43 jours.
        Si le délai passe à 55 jours : dettes fournisseurs = 1'080'000 x 55/360 = CHF 165'000.
        Gain de BFR : 165'000 - 130'000 = CHF 35'000.
      </P>

      <H3>Levier 3 : Réduire les stocks</H3>

      <P>
        Chaque franc de stock est un franc immobilisé qui ne produit rien. La gestion des stocks
        est un enjeu majeur pour le BFR. Les méthodes de juste-à-temps (JAT), une meilleure
        prévision de la demande, la réduction du nombre de références, et l'optimisation des
        quantités de commande permettent de réduire le niveau de stock sans affecter le service client.
      </P>

      <P>
        Impact chiffré : si SwiSSwatch SA réduit ses stocks de CHF 185'000 à CHF 150'000
        (soit une réduction de 19 %), le BFR diminue directement de CHF 35'000. Combiné avec les
        deux autres leviers, l'effet total serait de : 53'333 + 35'000 + 35'000 = CHF 123'333.
        Le BFR passerait de CHF 275'000 à CHF 151'667, et la trésorerie nette deviendrait positive
        à CHF 113'333 (265'000 - 151'667). L'entreprise n'aurait plus besoin de découvert bancaire
        et pourrait même placer ses excédents.
      </P>

      <Tableau
        caption="Impact des leviers d'optimisation du BFR"
        headers={['Levier', 'Action', 'Gain CHF', 'Nouveau BFR']}
        rows={[
          { cells: ['Situation actuelle', '', '', 'CHF 275\'000'], _mono: true },
          { cells: ['Délais clients', '33j vers 25j', 'CHF 53\'333', 'CHF 221\'667'], _mono: true },
          { cells: ['Délais fournisseurs', '43j vers 55j', 'CHF 35\'000', 'CHF 186\'667'], _mono: true },
          { cells: ['Réduction stocks', '185k vers 150k', 'CHF 35\'000', 'CHF 151\'667'], _mono: true },
          { cells: ['Total', 'Combinaison des 3 leviers', 'CHF 123\'333', 'CHF 151\'667'], _bold: true, _mono: true },
        ]}
      />

      <Note color="green">
        L'optimisation du BFR est souvent le moyen le plus rapide et le moins coûteux d'améliorer
        la trésorerie d'une entreprise. Contrairement à un emprunt bancaire, elle ne génère ni
        intérêts ni endettement supplémentaire. C'est pourquoi les directeurs financiers la considèrent
        comme une priorité permanente.
      </Note>

      {/* ── 6. Exemple complet et stress test ─────────────────────────── */}
      <H2>6. Exemple complet et simulation de crise : SwiSSwatch SA</H2>

      <P>
        Pour conclure ce chapitre, réalisons une synthèse complète de l'analyse du fonds de roulement
        et du BFR d'SwiSSwatch SA, puis simulons un scénario de crise pour mesurer la résilience
        de l'entreprise. Cette simulation, souvent appelée "stress test", est un outil précieux
        pour anticiper les conséquences d'événements défavorables.
      </P>

      <Tableau
        caption="Bilan retraité SwiSSwatch SA - Postes clés pour l'analyse du FRN/BFR"
        headers={['Poste', 'Montant CHF', 'Catégorie']}
        rows={[
          { cells: ['Liquidités', '80\'000', 'AC hors exploitation'], _mono: true },
          { cells: ['Créances clients', '220\'000', 'AC d\'exploitation'], _mono: true },
          { cells: ['Stocks', '185\'000', 'AC d\'exploitation'], _mono: true },
          { cells: ['Machines', '280\'000', 'AI'], _mono: true },
          { cells: ['Immeuble', '950\'000', 'AI'], _mono: true },
          { cells: ['Total Actif', '1\'715\'000', ''], _bold: true, _mono: true },
          { cells: [''], _sep: true },
          { cells: ['Dettes fournisseurs', '130\'000', 'CE CT d\'exploitation'], _mono: true },
          { cells: ['Dettes bancaires CT', '90\'000', 'CE CT hors exploitation'], _mono: true },
          { cells: ['Emprunt hypothécaire', '350\'000', 'CE LT'], _mono: true },
          { cells: ['Provisions', '75\'000', 'CE LT'], _mono: true },
          { cells: ['Impôts latents', '106\'000', 'CE LT'], _mono: true },
          { cells: ['Fonds propres', '964\'000', 'CP'], _mono: true },
          { cells: ['Total Passif', '1\'715\'000', ''], _bold: true, _mono: true },
        ]}
      />

      <Tableau
        caption="Récapitulatif FRN / BFR / TN en situation normale"
        headers={['Indicateur', 'Formule', 'Résultat']}
        rows={[
          { cells: ['FRN (par le haut)', '485\'000 - 220\'000', 'CHF 265\'000'], _mono: true },
          { cells: ['FRN (par le bas)', '(964\'000 + 531\'000) - 1\'230\'000', 'CHF 265\'000'], _mono: true },
          { cells: ['BFR', '(185\'000 + 220\'000) - 130\'000', 'CHF 275\'000'], _mono: true },
          { cells: ['Trésorerie nette', '265\'000 - 275\'000', 'CHF -10\'000'], _bold: true, _mono: true },
        ]}
      />

      <H3>Simulation de crise : un client majeur ne paie pas</H3>

      <P>
        Imaginons maintenant qu'un client important d'SwiSSwatch SA, qui représente une créance
        de CHF 85'000, fasse faillite et que cette créance devienne irrécouvrable. C'est un scénario
        malheureusement courant dans le tissu économique suisse, où la faillite d'un seul partenaire
        peut déclencher des difficultés en cascade.
      </P>

      <P>
        Conséquences immédiates : la créance de CHF 85'000 doit être amortie, ce qui diminue les
        actifs circulants et réduit les fonds propres (perte sur débiteur). Les créances passent
        de CHF 220'000 à CHF 135'000. Les fonds propres diminuent de CHF 85'000 (le résultat de
        l'exercice absorbe cette perte) et passent de CHF 964'000 à CHF 879'000.
      </P>

      <P>
        Recalculons tous nos indicateurs.
        FRN = (80'000 + 135'000 + 185'000) - 220'000 = 400'000 - 220'000 = CHF 180'000.
        Le FRN a diminué de CHF 85'000 (passant de 265'000 à 180'000).
        BFR = (185'000 + 135'000) - 130'000 = CHF 190'000.
        Le BFR a diminué de CHF 85'000 aussi (les créances ont baissé).
        TN = 180'000 - 190'000 = CHF -10'000.
        La trésorerie nette reste à CHF -10'000, car la perte sur débiteur réduit à la fois le FRN et le BFR
        du même montant.
      </P>

      <Tableau
        caption="Impact de la perte sur débiteur de CHF 85'000"
        headers={['Indicateur', 'Avant', 'Après', 'Variation']}
        rows={[
          { cells: ['Créances clients', '220\'000', '135\'000', '-85\'000'], _mono: true },
          { cells: ['Fonds propres', '964\'000', '879\'000', '-85\'000'], _mono: true },
          { cells: ['FRN', '265\'000', '180\'000', '-85\'000'], _mono: true },
          { cells: ['BFR', '275\'000', '190\'000', '-85\'000'], _mono: true },
          { cells: ['Trésorerie nette', '-10\'000', '-10\'000', '0'], _bold: true, _mono: true },
        ]}
      />

      <P>
        Ce résultat peut sembler surprenant : la trésorerie nette ne change pas alors que l'entreprise
        vient de perdre CHF 85'000. L'explication est que la créance était déjà une promesse d'argent,
        pas de l'argent réel. Sa disparition élimine simultanément un actif circulant et un besoin
        de financement. En revanche, ce qui change profondément, c'est la solidité de l'entreprise :
        les fonds propres ont fondu de CHF 85'000, et le ratio de fonds propres passe de 56.2 %
        à 53.9 %. L'entreprise a perdu une partie de sa substance.
      </P>

      <P>
        Mais le scénario pourrait être pire. Si la perte sur débiteur entraîne une crise de confiance
        auprès de la banque, celle-ci pourrait exiger le remboursement du découvert de CHF 90'000.
        L'entreprise devrait alors mobiliser ses liquidités (CHF 80'000) et trouver CHF 10'000
        supplémentaires, par exemple en négociant un allongement du délai fournisseur ou en accélérant
        l'encaissement des autres créances. Sans cette capacité d'adaptation, l'entreprise pourrait
        se retrouver en difficulté malgré des fonds propres encore largement positifs.
      </P>

      <Note color="red">
        Ce stress test illustre un principe fondamental : la faillite ne vient pas d'un bilan
        déséquilibré, mais d'une incapacité à payer ses dettes à l'échéance. Même avec CHF 879'000
        de fonds propres, une entreprise peut se retrouver en cessation de paiement si ses actifs
        ne sont pas suffisamment liquides. C'est toute l'importance de l'analyse FRN/BFR/TN :
        elle transforme des données statiques (le bilan) en un diagnostic dynamique de la capacité
        de paiement.
      </Note>

      <P>
        En conclusion de ce chapitre, retenons que le triptyque FRN - BFR - Trésorerie nette
        forme un système cohérent qui permet de comprendre comment l'entreprise finance son activité
        quotidienne. Le FRN représente les ressources disponibles, le BFR représente le besoin
        permanent lié au cycle d'exploitation, et la trésorerie nette est la résultante de ces
        deux forces. L'objectif du gestionnaire est de maintenir un équilibre sain entre ces trois
        grandeurs, en agissant sur les leviers opérationnels (délais clients, délais fournisseurs,
        niveaux de stocks) et, si nécessaire, sur la structure financière (augmentation de capital,
        emprunt à long terme, cession d'actifs non stratégiques).
      </P>
    </>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   EXPORTS
   ═══════════════════════════════════════════════════════════════════════════ */

export function AnalRetraitementsView() {
  return (
    <TheoryLayout title="1. Retraitements du bilan" tag="tag-base" tagLabel="Analyse" meta="CO 959a - 960a">
      <TabRetraitements />
    </TheoryLayout>
  );
}

export function AnalStructureView() {
  return (
    <TheoryLayout title="2. Analyse structurelle" tag="tag-base" tagLabel="Analyse" meta="Verticale - Horizontale - Couverture">
      <TabStructure />
    </TheoryLayout>
  );
}

export function AnalFDRView() {
  return (
    <TheoryLayout title="3. Fonds de roulement et BFR" tag="tag-base" tagLabel="Analyse" meta="FRN - BFR - Trésorerie nette">
      <TabFDR />
    </TheoryLayout>
  );
}
