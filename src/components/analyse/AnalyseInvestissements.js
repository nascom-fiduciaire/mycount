import React from 'react';
import { P, H2, H3, Note, Tableau, TheoryLayout } from '../TheoryUI';

/* ═══════════════════════════════════════════════════════════════════════════
   COMPOSANTS VISUELS INTERNES
   ═══════════════════════════════════════════════════════════════════════════ */

function FormulaBox({ formula, description }) {
  return (
    <div style={{ margin: '16px 0', padding: '16px 20px', background: '#f0f4ff', border: '2px solid #2563eb', borderRadius: 12, textAlign: 'center' }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.05rem', fontWeight: 700, color: '#1e3a5f', marginBottom: 4 }}>{formula}</div>
      {description && <div style={{ fontSize: '0.78rem', color: '#64748b', fontStyle: 'italic' }}>{description}</div>}
    </div>
  );
}

function TimelineFlux({ investissement, flux, valeurResiduelle }) {
  const allItems = [];
  if (investissement) {
    allItems.push({ annee: 0, montant: -Math.abs(investissement.montant), label: investissement.label || 'Investissement' });
  }
  if (flux) {
    flux.forEach(f => allItems.push({ annee: f.annee, montant: f.montant, label: f.label || '' }));
  }
  if (valeurResiduelle && flux && flux.length > 0) {
    const lastYear = flux[flux.length - 1].annee;
    const existing = allItems.find(it => it.annee === lastYear);
    if (existing) {
      existing.montant += valeurResiduelle.montant;
      existing.label = existing.label ? existing.label + ' + VR' : 'VR';
    } else {
      allItems.push({ annee: lastYear, montant: valeurResiduelle.montant, label: 'Valeur résiduelle' });
    }
  }

  const maxAbs = Math.max(...allItems.map(it => Math.abs(it.montant)), 1);

  return (
    <div style={{ margin: '20px 0', padding: '20px 16px 12px', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0', overflowX: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 0, minHeight: 180, position: 'relative' }}>
        {/* Horizontal axis */}
        <div style={{ position: 'absolute', bottom: 50, left: 20, right: 20, height: 3, background: '#334155', borderRadius: 2 }} />
        {allItems.map((item, i) => {
          const isPositive = item.montant >= 0;
          const barHeight = Math.max((Math.abs(item.montant) / maxAbs) * 90, 12);
          return (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 72, flex: 1, position: 'relative' }}>
              {/* Amount label */}
              {isPositive ? (
                <>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', fontWeight: 700,
                    color: '#059669', marginBottom: 4, whiteSpace: 'nowrap',
                  }}>
                    +CHF {Math.abs(item.montant).toLocaleString('fr-CH')}
                  </div>
                  <div style={{
                    width: 4, height: barHeight, background: 'linear-gradient(180deg, #10b981, #059669)',
                    borderRadius: 2, marginBottom: 2,
                  }} />
                  <div style={{
                    width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
                    borderBottom: '8px solid #059669', marginBottom: -1,
                    transform: 'rotate(180deg)',
                  }} />
                </>
              ) : (
                <>
                  <div style={{ height: barHeight + 30 }} />
                  <div style={{
                    width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
                    borderTop: '8px solid #dc2626', marginTop: -1,
                  }} />
                  <div style={{
                    width: 4, height: barHeight, background: 'linear-gradient(180deg, #dc2626, #ef4444)',
                    borderRadius: 2, marginTop: 2,
                  }} />
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', fontWeight: 700,
                    color: '#dc2626', marginTop: 4, whiteSpace: 'nowrap',
                  }}>
                    -CHF {Math.abs(item.montant).toLocaleString('fr-CH')}
                  </div>
                </>
              )}
              {/* Year label */}
              <div style={{
                position: 'absolute', bottom: 0,
                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', fontWeight: 600, color: '#475569',
                background: '#e2e8f0', borderRadius: 4, padding: '2px 8px', marginTop: 4,
              }}>
                t={item.annee}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function VANCalcul({ investissement, flux, taux, van }) {
  const tauxPct = (taux * 100).toFixed(0);
  const isPositive = van >= 0;

  return (
    <div style={{
      margin: '18px 0', padding: '18px 20px', borderRadius: 12,
      border: `2px solid ${isPositive ? '#059669' : '#dc2626'}`,
      background: isPositive ? '#ecfdf5' : '#fef2f2',
    }}>
      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: 12 }}>
        Calcul de la VAN (k = {tauxPct}%)
      </div>
      {/* Investment line */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontFamily: 'JetBrains Mono, monospace', padding: '4px 0', color: '#dc2626' }}>
        <span>Investissement (t=0)</span>
        <span>-CHF {investissement.toLocaleString('fr-CH')}</span>
      </div>
      {/* Each flux actualized */}
      {flux.map((f, i) => {
        const actualise = f.montant / Math.pow(1 + taux, f.annee);
        return (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontFamily: 'JetBrains Mono, monospace', padding: '4px 0', color: '#334155' }}>
            <span>CF{f.annee}: {f.montant.toLocaleString('fr-CH')} / (1+{tauxPct}%)^{f.annee}</span>
            <span style={{ color: '#059669' }}>= CHF {Math.round(actualise).toLocaleString('fr-CH')}</span>
          </div>
        );
      })}
      {/* Separator + VAN */}
      <div style={{ borderTop: '2px solid #334155', marginTop: 10, paddingTop: 10, display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.88rem' }}>
        <span style={{ color: '#0f172a' }}>VAN</span>
        <span style={{ color: isPositive ? '#059669' : '#dc2626', fontFamily: 'JetBrains Mono, monospace' }}>
          = CHF {van.toLocaleString('fr-CH')}
        </span>
      </div>
      <div style={{ marginTop: 8, fontSize: '0.76rem', fontWeight: 600, color: isPositive ? '#059669' : '#dc2626' }}>
        {isPositive ? 'VAN positive => le projet CRÉE de la valeur' : 'VAN négative => le projet DÉTRUIT de la valeur'}
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   CHAPITRE : CHOIX D'INVESTISSEMENT
   ═══════════════════════════════════════════════════════════════════════════ */

function TabInvestissements() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          1. INTRODUCTION
          ══════════════════════════════════════════════════════════════════ */}
      <H2>1. Introduction -- La question fondamentale</H2>

      <P>
        Dans quel projet l'entreprise doit-elle investir pour créer de la valeur ? Cette question
        est sans doute la plus stratégique de toute la finance d'entreprise. Chaque investissement
        représente un pari sur l'avenir : l'entreprise sacrifie des liquidités aujourd'hui dans
        l'espoir d'en recevoir davantage demain. La direction financière doit disposer d'outils
        rigoureux pour évaluer et comparer les projets, afin de n'engager les capitaux que dans
        ceux qui créent réellement de la richesse pour les actionnaires.
      </P>

      <Note color="blue">
        <strong>Posons la question simplement :</strong> Investiriez-vous CHF 70'000 aujourd'hui si on vous promettait CHF 10'000 dans un an, CHF 20'000 dans deux ans et CHF 70'000 dans trois ans ? Le total des retours est de CHF 100'000, soit CHF 30'000 de plus que votre mise. Mais est-ce réellement une bonne affaire ? Pour répondre, il faut comprendre que CHF 1 aujourd'hui ne vaut pas CHF 1 demain.
      </Note>

      <P>
        Un investissement, au sens financier, se définit comme l'engagement de ressources monétaires
        aujourd'hui en échange de flux de trésorerie futurs incertains. Il peut s'agir de l'achat
        d'une machine, de la construction d'une usine, du lancement d'un nouveau produit, ou même
        de l'acquisition d'une autre entreprise. Dans tous les cas, la logique est identique : il
        faut comparer ce que l'on dépense maintenant à ce que l'on espère recevoir plus tard, en
        tenant compte du fait que l'argent a une valeur différente selon le moment où il est reçu.
      </P>

      <H3>Les six éléments de toute décision d'investissement</H3>

      <P>
        Tout projet d'investissement se caractérise par six éléments fondamentaux que l'analyste
        doit identifier et quantifier avec précision :
      </P>

      <Tableau
        headers={['Élément', 'Description']}
        rows={[
          ['Capitaux investis (I0)', "Le montant initial décaissé à t=0, y compris frais d'installation, BFR supplémentaire, etc."],
          ['Cash flows opérationnels', "Les flux de trésorerie nets générés chaque année par le projet (produits - charges monétaires)"],
          ['Durée de vie du projet', "Le nombre d'années pendant lesquelles le projet génère des cash flows"],
          ['Valeur résiduelle', "Le montant récupérable en fin de projet (revente du matériel, récupération du BFR)"],
          ['Fiscalité', "Le taux d'imposition qui affecte les cash flows et génère des économies via l'amortissement"],
          ["Taux d'actualisation (k)", "Le coût du capital, c'est-à-dire la rentabilité minimale exigée par les investisseurs"],
        ]}
      />

      <H3>Les six grands principes (Vernimmen)</H3>

      <P>
        L'analyse d'investissement repose sur six principes fondamentaux que tout financier doit
        intérioriser. Ces principes, formulés notamment par Vernimmen, constituent le cadre
        méthodologique indispensable pour éviter les erreurs de raisonnement les plus courantes.
      </P>

      <Note color="blue">
        <strong>Principe 1 -- Raisonner en flux de trésorerie, pas en montants comptables.</strong> Le bénéfice
        comptable intègre des éléments non monétaires (amortissements, provisions). Or, seul le cash
        compte : on ne peut distribuer que du cash, investir que du cash, rembourser que du cash.
        L'amortissement n'est pas une sortie d'argent, mais il a un effet indirect via la fiscalité.
      </Note>

      <Note color="blue">
        <strong>Principe 2 -- Raisonner marginalement.</strong> Seuls les flux INDUITS par le projet doivent
        être pris en compte. Si l'entreprise engageait déjà CHF 50'000 de charges fixes avant le
        projet, ces charges ne doivent pas être imputées au projet. On ne retient que les flux
        supplémentaires, c'est-à-dire la différence entre la situation AVEC et SANS le projet.
      </Note>

      <Note color="blue">
        <strong>Principe 3 -- Raisonner en termes d'opportunité.</strong> Si le projet utilise un terrain que
        l'entreprise possède déjà, il faut inclure dans le coût de l'investissement la valeur de
        marché de ce terrain. En effet, ne pas le vendre constitue un manque à gagner : c'est le
        coût d'opportunité. Ignorer ce coût conduit à surestimer la rentabilité du projet.
      </Note>

      <Note color="blue">
        <strong>Principe 4 -- Séparer décision d'investissement et de financement.</strong> Les charges
        d'intérêts ne doivent PAS être déduites des cash flows du projet. Le coût du financement
        est déjà intégré dans le taux d'actualisation (WACC). Les déduire des cash flows reviendrait
        à les compter deux fois.
      </Note>

      <Note color="blue">
        <strong>Principe 5 -- Prendre en compte la fiscalité.</strong> L'impôt sur le bénéfice affecte
        directement les cash flows disponibles. L'amortissement, bien que non monétaire, génère une
        économie d'impôt réelle qui doit être intégrée. On raisonne toujours en flux après impôts.
      </Note>

      <Note color="blue">
        <strong>Principe 6 -- Rester cohérent.</strong> Si les cash flows sont estimes en francs suisses
        courants (incluant l'inflation), le taux d'actualisation doit être un taux nominal. Si les
        cash flows sont en francs constants, il faut utiliser un taux réel. Mélanger les deux conduit
        à des erreurs systématiques dans l'évaluation.
      </Note>


      {/* ══════════════════════════════════════════════════════════════════
          2. VALEUR TEMPORELLE DE L'ARGENT
          ══════════════════════════════════════════════════════════════════ */}
      <H2>2. La valeur temporelle de l'argent</H2>

      <P>
        Avant d'aborder les critères de choix d'investissement, il est essentiel de comprendre un
        concept fondamental : CHF 1'000 aujourd'hui ne valent PAS la même chose que CHF 1'000 dans
        cinq ans. Trois raisons expliquent ce phénomène. Premièrement, l'inflation erode le pouvoir
        d'achat de la monnaie au fil du temps. Deuxièmement, l'argent détenu aujourd'hui peut être
        placé et générer des intérêts (coût d'opportunité). Troisièmement, un franc futur est
        incertain : plus l'échéance est lointaine, plus le risque de ne jamais le recevoir augmente.
        Ce principe est le fondement de toute la finance moderne.
      </P>

      <H3>Un exemple pour comprendre</H3>
      <P>
        Votre ami assureur vous propose d'investir CHF 4'000 aujourd'hui. Il vous promet de vous rendre CHF 5'000 dans 5 ans. Le taux d'intérêt du marché est de 10%. Est-ce une bonne affaire ?
      </P>
      <P>
        Pour le savoir, calculons combien valent aujourd'hui ces CHF 5'000 futurs : V₀ = 5'000 / (1.10)⁵ = 5'000 / 1.6105 = CHF 3'105. Autrement dit, recevoir CHF 5'000 dans 5 ans équivaut à recevoir CHF 3'105 aujourd'hui. Vous paieriez CHF 4'000 pour quelque chose qui vaut CHF 3'105 : c'est un mauvais investissement !
      </P>
      <P>
        On pourrait aussi raisonner en capitalisant : si vous placiez CHF 4'000 à 10% pendant 5 ans, vous obtiendriez 4'000 × (1.10)⁵ = 4'000 × 1.6105 = CHF 6'442. L'assureur ne vous offre que CHF 5'000 : c'est moins que ce que vous pourriez obtenir ailleurs.
      </P>

      <H3>La capitalisation</H3>

      <P>
        Capitaliser, c'est répondre à la question : si je place une somme aujourd'hui à un certain
        taux, combien aurai-je dans N années ? La formule fait intervenir les intérêts composés,
        c'est-à-dire le fait que les intérêts générés à chaque période produisent eux-mêmes des
        intérêts lors des périodes suivantes. C'est un mécanisme exponentiel, que Einstein aurait
        qualifié de "huitième merveille du monde".
      </P>

      <FormulaBox
        formula="Vn = V0 x (1 + i)^n"
        description="Vn = valeur future, V0 = valeur actuelle, i = taux d'intérêt, n = nombre de périodes"
      />

      <P>
        <strong>Exemple concret :</strong> Une PME genevoise place CHF 100'000 sur un compte à terme
        offrant un rendement annuel de 7 % pendant 6 ans. Quelle sera la valeur de ce placement
        à l'échéance ?
      </P>

      <P>
        Vn = 100'000 x (1.07)^6 = 100'000 x 1.50073 = CHF 150'073. L'entreprise reçoit
        CHF 50'073 d'intérêts au total. Notons que des intérêts simples n'auraient donné que
        100'000 x 7% x 6 = CHF 42'000. La différence de CHF 8'073 provient exclusivement de
        l'effet des intérêts composés : les intérêts de l'année 1 (CHF 7'000) génèrent eux-mêmes
        des intérêts les années suivantes.
      </P>

      <TimelineFlux
        investissement={{ montant: 100000, label: 'Placement initial' }}
        flux={[
          { annee: 6, montant: 150073 },
        ]}
      />

      <H3>L'actualisation</H3>

      <P>
        Actualiser est l'opération inverse de la capitalisation. C'est répondre à la question :
        combien suis-je prêt à payer AUJOURD'HUI pour recevoir une certaine somme dans N années ?
        Cette question est au cœur de toute évaluation financière. Actualiser, c'est traduire des
        francs futurs en francs d'aujourd'hui, en tenant compte du coût du temps et du risque.
      </P>

      <FormulaBox
        formula="V0 = Vn / (1 + i)^n"
        description="V0 = valeur actuelle (aujourd'hui), Vn = valeur future, i = taux d'actualisation"
      />

      <P>
        <strong>Exemple :</strong> Combien vaut aujourd'hui la promesse de recevoir CHF 150'000 dans
        6 ans, si le taux de rendement exige est de 7 % ? V0 = 150'000 / (1.07)^6 = 150'000 / 1.50073
        = CHF 99'951. Autrement dit, un investisseur rationnel serait prêt à payer au maximum
        CHF 99'951 aujourd'hui pour obtenir CHF 150'000 dans 6 ans, si son taux d'exigence est de 7 %.
      </P>

      <H3>Les annuités constantes</H3>

      <P>
        Dans de nombreuses situations pratiques (emprunts hypothécaires, loyers, versements de leasing),
        les flux ne sont pas ponctuels mais se répètent de manière identique sur plusieurs périodes.
        La valeur actuelle d'une série de N versements identiques de montant A, actualisés au taux i,
        se calcule grâce à la formule des annuités constantes.
      </P>

      <FormulaBox
        formula="V0 = A x [(1 - (1+i)^(-n)) / i]"
        description="A = annuité constante, i = taux par période, n = nombre de périodes"
      />

      <P>
        <strong>Exemple :</strong> Un investissement génère 5 versements annuels de CHF 1'000 chacun.
        Le taux d'actualisation est de 10 %. Quelle est la valeur actuelle de ces 5 flux ?
        V0 = 1'000 x [(1 - (1.10)^(-5)) / 0.10] = 1'000 x [(1 - 0.62092) / 0.10] = 1'000 x 3.7908
        = CHF 3'791. Recevoir CHF 1'000 par an pendant 5 ans équivaut donc à recevoir CHF 3'791
        aujourd'hui. Le facteur 3.7908 est appelé facteur d'annuité (ou facteur d'actualisation des
        annuités). On le retrouve dans les tables financieres.
      </P>

      <TimelineFlux
        investissement={null}
        flux={[
          { annee: 1, montant: 1000 },
          { annee: 2, montant: 1000 },
          { annee: 3, montant: 1000 },
          { annee: 4, montant: 1000 },
          { annee: 5, montant: 1000 },
        ]}
      />

      <H3>L'annuité différée — un piège classique</H3>
      <P>
        Attention aux annuités qui ne commencent pas immédiatement. Exemple : vous recevez CHF 1'000 par an pendant 4 ans, mais le premier versement n'arrive qu'à la fin de l'année 7 (années 7, 8, 9 et 10). Le taux est de 10%.
      </P>
      <P>
        Étape 1 : calculer la valeur de l'annuité au début de la période de versement (début année 7 = fin année 6). VA₆ = 1'000 × [(1 − 1.10⁻⁴) / 0.10] = 1'000 × 3.1699 = CHF 3'170.
      </P>
      <P>
        Étape 2 : actualiser ce montant de l'année 6 à aujourd'hui. V₀ = 3'170 / (1.10)⁶ = 3'170 / 1.7716 = CHF 1'789.
      </P>
      <P>
        Recevoir CHF 4'000 au total (4 × 1'000) entre les années 7 et 10 ne vaut que CHF 1'789 aujourd'hui. L'éloignement dans le temps réduit considérablement la valeur.
      </P>


      {/* ══════════════════════════════════════════════════════════════════
          3. LA VAN
          ══════════════════════════════════════════════════════════════════ */}
      <H2>3. La VAN -- Valeur Actuelle Nette</H2>

      <P>
        La Valeur Actuelle Nette est le critère fondamental et théoriquement le plus solide pour
        évaluer un projet d'investissement. Son principe est simple mais puissant : elle compare,
        à la même date (aujourd'hui), le coût de l'investissement et la valeur actualisée de
        tous les cash flows futurs générés par le projet. Si la somme est positive, le projet
        crée de la valeur ; si elle est négative, il en détruit.
      </P>

      <FormulaBox
        formula="VAN = -I0 + CF1/(1+k)^1 + CF2/(1+k)^2 + ... + CFn/(1+k)^n"
        description="I0 = investissement initial, CFt = cash flow de l'année t, k = taux d'actualisation (coût du capital)"
      />

      <P>
        L'interprétation de la VAN est directe et sans ambiguïté :
      </P>

      <Tableau
        headers={['VAN', 'Interprétation', 'Décision']}
        rows={[
          ['VAN positive', "Le projet rapporte PLUS que le coût du capital. Il crée de la valeur pour les actionnaires.", 'ACCEPTER'],
          ['VAN = 0', "Le projet couvre exactement le coût du capital. Il ne crée ni ne détruit de valeur.", 'Neutre'],
          ['VAN negative', "Le projet rapporte MOINS que le coût du capital. Il détruit de la valeur.", 'REJETER'],
        ]}
      />

      <P>
        Conceptuellement, une VAN de CHF 8'000 signifie que l'investisseur reçoit trois choses :
        le remboursement intégral de son capital investi, la rémunération exigée sur ce capital
        (au taux k), ET un bonus supplémentaire de CHF 8'000. C'est ce bonus qui constitue la
        creation de valeur au sens strictement financier du terme.
      </P>

      <H3>Exemple détaillé -- Projet A</H3>

      <P>
        Considérons le Projet A : une entreprise vaudoise envisage un investissement de CHF 70'000.
        Les cash flows prévisionnels sont les suivants : CHF 10'000 en année 1, CHF 20'000 en année 2,
        et CHF 70'000 en année 3. Le taux de rejet (coût du capital) est de 10 %.
      </P>

      <TimelineFlux
        investissement={{ montant: 70000, label: 'Investissement initial' }}
        flux={[
          { annee: 1, montant: 10000 },
          { annee: 2, montant: 20000 },
          { annee: 3, montant: 70000 },
        ]}
      />

      <P>
        Calculons la VAN pas a pas. Chaque cash flow futur est divisé par (1+k) élevé à la puissance
        correspondant à son année :
      </P>

      <P>
        CF1 actualisé : 10'000 / (1.10)^1 = 10'000 / 1.100 = CHF 9'091.
        CF2 actualisé : 20'000 / (1.10)^2 = 20'000 / 1.210 = CHF 16'529.
        CF3 actualisé : 70'000 / (1.10)^3 = 70'000 / 1.331 = CHF 52'592.
      </P>

      <P>
        VAN = -70'000 + 9'091 + 16'529 + 52'592 = CHF 8'212.
      </P>

      <VANCalcul
        investissement={70000}
        flux={[
          { annee: 1, montant: 10000 },
          { annee: 2, montant: 20000 },
          { annee: 3, montant: 70000 },
        ]}
        taux={0.10}
        van={8212}
      />

      <P>
        La VAN est positive (CHF 8'212). Ce projet crée de la valeur : l'investisseur reçoit son
        capital de CHF 70'000, sa rémunération de 10 % par an, ET un surplus de CHF 8'212. Le projet
        doit être accepté.
      </P>

      <H3>Exemple comparatif -- Projet B</H3>

      <P>
        Considérons maintenant le Projet B, concurrent du Projet A : investissement de CHF 80'000,
        avec des cash flows de CHF 40'000, CHF 35'000 et CHF 25'000 sur trois ans. Même taux de
        rejet de 10 %.
      </P>

      <TimelineFlux
        investissement={{ montant: 80000, label: 'Investissement initial' }}
        flux={[
          { annee: 1, montant: 40000 },
          { annee: 2, montant: 35000 },
          { annee: 3, montant: 25000 },
        ]}
      />

      <P>
        CF1 actualisé : 40'000 / 1.100 = CHF 36'364.
        CF2 actualisé : 35'000 / 1.210 = CHF 28'926.
        CF3 actualisé : 25'000 / 1.331 = CHF 18'783.
        VAN = -80'000 + 36'364 + 28'926 + 18'783 = CHF 4'073.
      </P>

      <VANCalcul
        investissement={80000}
        flux={[
          { annee: 1, montant: 40000 },
          { annee: 2, montant: 35000 },
          { annee: 3, montant: 25000 },
        ]}
        taux={0.10}
        van={4073}
      />

      <H3>Comparaison des deux projets</H3>

      <Tableau
        headers={['Critère', 'Projet A', 'Projet B']}
        rows={[
          ['Investissement initial', 'CHF 70\'000', 'CHF 80\'000'],
          ['Somme des CF non actualises', 'CHF 100\'000', 'CHF 100\'000'],
          ['VAN (k = 10%)', 'CHF 8\'212', 'CHF 4\'073'],
          ['Décision', 'Accepter (meilleur)', 'Accepter'],
        ]}
      />

      <P>
        Les deux projets ont une VAN positive, ils sont donc tous deux acceptables. Mais si
        l'entreprise ne peut choisir qu'un seul projet (projets mutuellement exclusifs), elle doit
        privilégier le Projet A dont la VAN est supérieure (CHF 8'212 contre CHF 4'073). Le Projet A
        crée davantage de valeur en termes absolus.
      </P>


      {/* ══════════════════════════════════════════════════════════════════
          4. LE TRI
          ══════════════════════════════════════════════════════════════════ */}
      <H2>4. Le TRI -- Taux de Rendement Interne</H2>

      <P>
        Le Taux de Rendement Interne est le second critère le plus utilisé en pratique. Il répond à
        une question intuitive : quel est le taux de rentabilité réel du projet ? Plus formellement,
        le TRI est le taux d'actualisation qui annule la VAN. C'est le taux pour lequel la valeur
        actualisée des cash flows futurs est exactement égale au montant investi.
      </P>

      <FormulaBox
        formula="TRI = taux k tel que VAN = 0"
        description="-I0 + CF1/(1+TRI)^1 + CF2/(1+TRI)^2 + ... + CFn/(1+TRI)^n = 0"
      />

      <P>
        La règle de décision est simple : si le TRI est supérieur au taux de rejet (coût du capital k),
        le projet est rentable et doit être accepté. Si le TRI est inférieur au coût du capital,
        le projet doit être rejeté. Intuitivement, le TRI représente le rendement maximal que le
        projet peut offrir : tant que ce rendement dépasse le coût de financement, le projet crée
        de la valeur.
      </P>

      <Tableau
        headers={['Situation', 'Interprétation', 'Décision']}
        rows={[
          ['TRI supérieur à k', 'Le projet rapporte plus que ce qu\'il coûte à financer', 'ACCEPTER'],
          ['TRI = k', 'Le projet rapporte exactement son coût de financement', 'Neutre'],
          ['TRI inférieur à k', 'Le projet rapporte moins que son coût de financement', 'REJETER'],
        ]}
      />

      <P>
        <strong>Application au Projet A :</strong> Nous avons calculé que la VAN du Projet A est de
        CHF 8'212 au taux de 10 %. Le TRI est le taux qui ramène cette VAN à zéro. Par tâtonnement
        ou à l'aide d'un tableur, on trouve que le TRI du Projet A est d'environ 17.5 %. Puisque
        17.5 % est supérieur à 10 % (le coût du capital), le critère du TRI confirme que le projet
        doit être accepté.
      </P>

      <P>
        La relation entre VAN et TRI est la suivante : lorsque le taux d'actualisation augmente,
        la VAN diminue (les cash flows futurs valent moins). Le TRI est précisément le taux où la
        VAN traverse zéro. Pour tout taux inférieur au TRI, la VAN est positive ; pour tout taux
        supérieur au TRI, la VAN est négative.
      </P>

      <H3>Limites du TRI</H3>

      <P>
        Malgré sa popularité, le TRI présente plusieurs limites que l'analyste averti doit connaître.
        Premièrement, le TRI suppose implicitement que tous les cash flows intermédiaires sont
        réinvestis au taux du TRI lui-même. Cette hypothèse est irréaliste lorsque le TRI est très
        élevé (par exemple 40 %) : il est peu probable de trouver systematiquement des placements
        à 40 %. La VAN, elle, suppose un réinvestissement au coût du capital, ce qui est bien plus
        réaliste.
      </P>

      <P>
        Deuxièmement, le TRI peut donner des résultats incohérents avec la VAN lorsqu'on compare
        des projets de tailles très différentes. Un petit projet à TRI de 50 % n'est pas forcément
        meilleur qu'un grand projet à TRI de 20 % si ce dernier crée beaucoup plus de valeur en
        termes absolus. Troisièmement, pour les projets dits "non conventionnels" (ou les cash flows
        alternent entre positifs et négatifs), il peut exister plusieurs TRI, voire aucun, ce qui
        rend le critère inutilisable.
      </P>

      <Note color="red">
        <strong>Règle d'or :</strong> En cas de conflit entre la VAN et le TRI, c'est toujours la VAN
        qui prime. La VAN mesure la creation de valeur en termes absolus (en francs), ce qui est
        in fine ce qui compte pour les actionnaires. Le TRI est un indicateur complémentaire utile,
        mais il ne doit jamais l'emporter sur la VAN dans une décision d'investissement.
      </Note>


      {/* ══════════════════════════════════════════════════════════════════
          5. LE PAYBACK
          ══════════════════════════════════════════════════════════════════ */}
      <H2>5. Le Payback -- Délai de récupération</H2>

      <P>
        Le délai de récupération (payback) répond à une question simple : en combien de temps le
        projet rembourse-t-il l'investissement initial ? C'est un critère très utilisé dans la
        pratique des PME suisses, car il est facile a comprendre et exprime une préoccupation
        legitime : la liquidite et le risque. Plus un projet recupere rapidement l'investissement,
        moins il est expose aux aleas futurs.
      </P>

      <H3>Payback statique (sans actualisation)</H3>

      <P>
        Le payback statique ignore la valeur temporelle de l'argent. On additionne simplement les
        cash flows successifs jusqu'à ce que le cumul atteigne le montant investi.
      </P>

      <P>
        <strong>Exemple :</strong> Investissement de CHF 20'000, cash flow annuel constant de
        CHF 5'000. Payback statique = 20'000 / 5'000 = 4 ans. Le projet rembourse l'investissement
        en 4 ans exactement.
      </P>

      <H3>Payback dynamique (avec actualisation)</H3>

      <P>
        Le payback dynamique est plus juste car il tient compte de la valeur temporelle de l'argent.
        On actualise chaque cash flow avant de le cumuler. Le délai de récupération est atteint
        lorsque la somme des cash flows actualisés cumulés égale l'investissement.
      </P>

      <P>
        <strong>Même exemple à 10 % :</strong> L'actualisation réduit la valeur de chaque flux futur.
        Les CHF 5'000 de l'année 1 ne valent en réalité que CHF 4'545 aujourd'hui, ceux de l'année 2
        seulement CHF 4'132, et ainsi de suite.
      </P>

      <Tableau
        headers={['Année', 'CF nominal', 'CF actualisé (10%)', 'Cumul actualisé', 'Reste à récupérer']}
        rows={[
          ['0', '-20\'000', '-20\'000', '-20\'000', '20\'000'],
          ['1', '5\'000', '4\'545', '-15\'455', '15\'455'],
          ['2', '5\'000', '4\'132', '-11\'323', '11\'323'],
          ['3', '5\'000', '3\'757', '-7\'566', '7\'566'],
          ['4', '5\'000', '3\'415', '-4\'151', '4\'151'],
          ['5', '5\'000', '3\'105', '-1\'046', '1\'046'],
          ['6', '5\'000', '2\'822', '1\'776', '0'],
        ]}
      />

      <P>
        Avec actualisation, le payback dynamique se situe entre l'année 5 et l'année 6, soit environ
        5.4 ans. On constate un écart significatif avec le payback statique de 4 ans. Le payback
        dynamique est toujours supérieur ou égal au payback statique, car l'actualisation réduit la
        valeur des flux les plus éloignés.
      </P>

      <Note color="yellow">
        <strong>Limites du payback :</strong> Le délai de récupération ignore complètement les cash flows
        qui surviennent APRES le seuil de recuperation. Un projet qui génère d'énormes flux en années 6
        à 10 sera rejeté s'il ne récupère pas l'investissement en 5 ans. C'est un critère de liquidité
        et de risque, mais PAS un critère de création de valeur. Il doit toujours être utilisé en
        complement de la VAN, jamais seul.
      </Note>

      <P>
        Le payback est néanmoins utile dans les situations suivantes : projets tres risques ou
        l'incertitude au-dela de 3-4 ans est extreme, entreprises avec des contraintes de liquidite
        fortes, ou environnements instables (technologie en rupture, marchés émergents). En Suisse,
        de nombreuses PME fixent un délai de récupération maximal de 3 à 5 ans selon le secteur.
      </P>


      {/* ══════════════════════════════════════════════════════════════════
          6. L'INVESTISSEMENT INITIAL
          ══════════════════════════════════════════════════════════════════ */}
      <H2>6. L'investissement initial — Au-delà du simple prix d'achat</H2>

      <P>
        L'investissement initial ne se limite pas au prix d'achat de l'actif. En réalité, il intègre plusieurs composantes, particulièrement dans le cas d'un remplacement de machine.
      </P>

      <FormulaBox
        formula="I₀ = Prix d'achat + Installation − Revente ancien ± Impact fiscal"
        description="Formule de l'investissement initial en cas de remplacement"
      />

      <H3>Composantes de l'investissement initial</H3>

      <Tableau
        headers={['Composante', 'Traitement', 'Exemple']}
        rows={[
          ['Prix d\'achat', 'Flux sortant', 'CHF 500\'000'],
          ['Frais d\'installation et mise en service', 'Flux sortant (à ajouter)', 'CHF 50\'000'],
          ['Revente de l\'ancien actif', 'Flux rentrant (à déduire)', '− CHF 40\'000'],
          ['Gain/perte sur vente ancien', 'Impact fiscal à calculer', '± impôt'],
          ['= Investissement initial net', 'Base pour le calcul de la VAN', 'CHF 516\'000*'],
        ]}
      />

      <Note color="yellow">
        <strong>Attention à l'impact fiscal sur la vente de l'ancien :</strong> Si vous vendez l'ancienne machine CHF 40'000 alors que sa valeur comptable est de CHF 10'000, vous réalisez un gain de CHF 30'000. Ce gain est imposable ! Avec un taux d'impôt de 20%, l'impôt supplémentaire est de 30'000 × 20% = CHF 6'000. L'investissement initial net augmente de ce montant.
      </Note>

      <H3>La variation du besoin en fonds de roulement (BFR)</H3>

      <P>
        Un investissement productif entraîne souvent une augmentation du BFR : plus de stocks de matières premières, plus de créances clients, partiellement compensées par plus de dettes fournisseurs. Cette augmentation du BFR est un flux sortant à intégrer dans l'investissement initial.
      </P>

      <P>
        En fin de projet, le BFR est récupéré (les stocks sont liquidés, les créances encaissées). C'est un flux rentrant à ajouter au dernier cash flow.
      </P>

      <Tableau
        headers={['Moment', 'BFR', 'Impact sur les flux']}
        rows={[
          ['Début du projet (année 0)', 'Augmentation du BFR', 'Flux sortant (augmente I₀)'],
          ['Fin du projet (année n)', 'Récupération du BFR', 'Flux rentrant (s\'ajoute au dernier CF)'],
        ]}
      />


      {/* ══════════════════════════════════════════════════════════════════
          7. IMPACT DE LA FISCALITE
          ══════════════════════════════════════════════════════════════════ */}
      <H2>7. L'impact de la fiscalité</H2>

      <P>
        Dans la réalité, l'analyste ne peut pas ignorer la fiscalité. L'impôt sur le bénéfice est un
        flux de trésorerie bien réel qui réduit les cash flows disponibles. En Suisse, le taux
        d'imposition effectif varie selon le canton (de 12 % à Lucerne à plus de 20 % à Genève), mais
        le raisonnement est toujours le même : il faut calculer les cash flows APRES impôts.
      </P>

      <P>
        La formule du cash flow après impôt intègre un élément crucial : l'économie d'impôt liée à
        l'amortissement. L'amortissement n'est pas un flux monétaire (l'argent a été dépensé lors de
        l'achat), mais il réduit le bénéfice imposable et donc l'impôt à payer. Ce mécanisme, appelé
        "bouclier fiscal" (tax shield), est un avantage financier réel qui augmente la valeur du projet.
      </P>

      <FormulaBox
        formula="CF après impôt = (Produits - Charges monétaires) x (1 - t) + Amortissement x t"
        description="t = taux d'imposition. Le terme 'Amortissement x t' représente l'économie d'impôt (tax shield)"
      />

      <FormulaBox
        formula="Économie d'impôt = Amortissement x Taux d'imposition"
        description="Ce flux n'existe que si l'entreprise est bénéficiaire (sinon pas d'impôt à économiser)"
      />

      <H3>Exemple -- Machine CNC PRECISION 5000</H3>

      <P>
        L'entreprise SwiSSwatch SA, basée à Neuchâtel, envisage l'achat d'une machine d'usinage pour
        CHF 60'000. Cette machine permettrait d'économiser CHF 18'000 de charges par an pendant
        5 ans. Le taux d'imposition est de 20 % et le coût du capital de 12 %. La machine est
        amortie linéairement sur 5 ans.
      </P>

      <P>
        <strong>Étape 1 -- Amortissement annuel :</strong> 60'000 / 5 = CHF 12'000 par an.
      </P>

      <P>
        <strong>Étape 2 -- Bénéfice imposable :</strong> L'économie de charges (CHF 18'000) constitue
        le produit marginal du projet. Le bénéfice imposable est donc : 18'000 - 12'000 (amortissement)
        = CHF 6'000.
      </P>

      <P>
        <strong>Étape 3 -- Impôt :</strong> 6'000 x 20 % = CHF 1'200 par an.
      </P>

      <P>
        <strong>Étape 4 -- Cash flow après impôt :</strong> Le cash flow réel est l'économie de charges
        moins l'impôt : 18'000 - 1'200 = CHF 16'800 par an. On peut vérifier avec la formule :
        18'000 x (1 - 0.20) + 12'000 x 0.20 = 14'400 + 2'400 = CHF 16'800.
      </P>

      <P>
        <strong>Étape 5 -- VAN :</strong> Les CHF 16'800 sont une annuité constante sur 5 ans. Le
        facteur d'annuité à 12 % pour 5 ans vaut 3.6048.
        VAN = -60'000 + 16'800 x 3.6048 = -60'000 + 60'561 = CHF 561.
      </P>

      <VANCalcul
        investissement={60000}
        flux={[
          { annee: 1, montant: 16800 },
          { annee: 2, montant: 16800 },
          { annee: 3, montant: 16800 },
          { annee: 4, montant: 16800 },
          { annee: 5, montant: 16800 },
        ]}
        taux={0.12}
        van={561}
      />

      <P>
        La VAN est positive mais très faible (CHF 561). Le projet est à peine rentable. Une légère
        augmentation du coût du capital ou une baisse des économies réalisées le rendrait déficitaire.
        Cet exemple illustre combien la fiscalité peut transformer un projet apparemment attractif
        en un projet marginal. Sans impots, le CF annuel serait de CHF 18'000 et la VAN de CHF 4'886,
        soit presque 9 fois plus.
      </P>

      <Note color="blue">
        <strong>Cas de remplacement :</strong> Lorsqu'une ancienne machine est revendue, un gain ou
        une perte comptable apparaît (prix de vente - valeur comptable nette). Ce gain est imposé,
        ou cette perte déduite. Il faut intégrer cet effet fiscal dans le calcul de l'investissement
        initial net.
      </Note>

      <H3>Cas de remplacement — SwiSSwatch SA</H3>

      <P>
        SwiSSwatch SA remplace une machine acquise il y a 6 ans pour CHF 1'600'000 (valeur comptable actuelle : CHF 100'000). La nouvelle machine coûte CHF 1'800'000 avec CHF 200'000 de frais d'installation. L'ancienne est reprise pour CHF 300'000. Taux d'impôt : 30%. WACC : 10%. Cash flows budgétés : CHF 600'000/an pendant 5 ans.
      </P>

      <H3>Étape 1 — Investissement initial</H3>

      <Tableau
        headers={['Élément', 'Montant']}
        rows={[
          ['Prix nouvelle machine', "CHF 1'800'000"],
          ['+ Frais d\'installation', "CHF 200'000"],
          ['− Revente ancienne machine', "− CHF 300'000"],
          ['+ Impôt sur gain comptable', "CHF 60'000"],
          ['= Investissement initial net', "CHF 1'760'000"],
        ]}
      />

      <Note color="yellow">
        <strong>Gain comptable :</strong> Revente CHF 300'000 − Valeur comptable CHF 100'000 = Gain de CHF 200'000. Impôt : 200'000 × 30% = CHF 60'000.
      </Note>

      <H3>Étape 2 — Cash flows après impôt</H3>

      <P>
        CF après impôt = CF avant impôt × (1 − t) + Amortissement × t
      </P>
      <P>
        Amortissement annuel = 1'800'000 + 200'000 = 2'000'000 / 5 = CHF 400'000.
      </P>
      <P>
        CF après impôt = 600'000 × (1 − 0.30) + 400'000 × 0.30 = 420'000 + 120'000 = CHF 540'000/an.
      </P>

      <H3>Étape 3 — VAN</H3>

      <P>
        VAN = 540'000 × [(1 − 1.10⁻⁵) / 0.10] − 1'760'000 = 540'000 × 3.7908 − 1'760'000 = 2'047'032 − 1'760'000 = CHF 287'032.
      </P>
      <P>
        VAN positive → le projet de remplacement est rentable.
      </P>


      {/* ══════════════════════════════════════════════════════════════════
          8. LE COUT DU CAPITAL (WACC / CMPC)
          ══════════════════════════════════════════════════════════════════ */}
      <H2>8. Le coût du capital (WACC / CMPC)</H2>

      <P>
        Le taux d'actualisation utilisé dans la VAN n'est pas choisi arbitrairement : c'est le coût
        moyen pondéré du capital, connu sous les acronymes WACC (Weighted Average Cost of Capital)
        ou CMPC (Coût Moyen Pondéré du Capital). Il représente la rentabilité minimale que doivent
        dégager les investissements de l'entreprise pour satisfaire l'ensemble des apporteurs de
        capitaux : actionnaires et créanciers.
      </P>

      <P>
        L'analogie pédagogique la plus parlante est celle de la note de module à la HEG. Imaginons
        un module où l'allemand a un poids de 2 et les mathématiques un poids de 3. Si vous obtenez
        5.0 en allemand et 4.0 en maths, votre moyenne pondérée est (5.0 x 2 + 4.0 x 3) / (2 + 3)
        = 22/5 = 4.4. Le WACC fonctionne exactement de la même manière : il pondère le coût de
        chaque source de financement par son poids relatif dans la structure du capital.
      </P>

      <FormulaBox
        formula="WACC = kCP x VCP/(VCP+VD) + kD x (1-t) x VD/(VCP+VD)"
        description="kCP = coût des fonds propres, kD = coût de la dette, t = taux d'impôt, VCP = valeur des fonds propres, VD = valeur de la dette"
      />

      <H3>Le coût de la dette (kD)</H3>

      <P>
        Le coût de la dette est relativement facile à observer : c'est le taux d'intérêt que
        l'entreprise paie sur ses emprunts. En pratique, on le calcule comme le rapport entre les
        charges financieres et les dettes financieres moyennes. Le point crucial est que les intérêts
        sont déductibles de l'impôt sur le bénéfice. Le coût réel de la dette est donc kD x (1-t).
        Si une entreprise emprunte à 5 % et que son taux d'imposition est de 20 %, le coût net de
        la dette n'est que de 5 % x (1 - 0.20) = 4 %. L'Etat prend en charge 20 % du coût de la
        dette via la déduction fiscale.
      </P>

      <H3>Le coût des fonds propres (kCP) via le MEDAF</H3>

      <P>
        Le coût des fonds propres est beaucoup plus délicat à estimer car il n'est pas contractuel.
        Les actionnaires n'ont pas de taux d'intérêt fixe : leur rémunération dépend du risque qu'ils
        supportent. Le modele le plus utilise pour estimer ce coût est le MEDAF (Modèle d'Évaluation
        des Actifs Financiers), ou CAPM en anglais.
      </P>

      <FormulaBox
        formula="kCP = rf + Beta x (rm - rf)"
        description="rf = taux sans risque, Beta = sensibilité au risque de marché, (rm - rf) = prime de risque du marché"
      />

      <P>
        Le taux sans risque (rf) correspond au rendement des obligations de la Confédération suisse
        (emprunt fédéral). Il représente le rendement minimal qu'un investisseur peut obtenir sans
        prendre de risque. Le Beta (coefficient de sensibilité) mesure combien l'action de l'entreprise
        fluctue par rapport au marché. Un beta de 1 signifie que l'action bouge comme le marché. Un
        beta de 1.3 (comme UBS) signifie que l'action amplifie les mouvements du marché de 30 %. Un
        beta de 0.7 (comme Nestlé) signifie que l'action est plus stable que le marché. La prime de
        risque du marché (rm - rf) est historiquement de l'ordre de 5 à 7 % en Europe.
      </P>

      <P>
        <strong>Exemple MEDAF :</strong> Soit rf = 2 % (obligations Confédération), beta = 1.1,
        prime de risque du marché = 6 %. Le coût des fonds propres est :
        kCP = 2 % + 1.1 x 6 % = 2 % + 6.6 % = 8.6 %.
        Les actionnaires de cette entreprise exigent une rentabilité minimale de 8.6 % pour
        compenser le risque qu'ils supportent.
      </P>

      <H3>Le bêta en détail — 5 facteurs explicatifs</H3>

      <P>
        Le bêta (β) mesure la sensibilité d'un titre aux fluctuations du marché. Un β de 1 signifie que le titre suit exactement le marché. Un β de 1.5 signifie qu'il amplifie les mouvements de 50%.
      </P>

      <Tableau
        headers={['Facteur', 'Impact sur le β', 'Exemple']}
        rows={[
          ['Sensibilité à la conjoncture', 'Secteur cyclique → β élevé', 'Automobile (β ≈ 1.3) vs Alimentation (β ≈ 0.7)'],
          ['Structure des coûts fixes', 'Coûts fixes élevés → β élevé', 'Compagnie aérienne (β ≈ 1.5)'],
          ['Visibilité des résultats', 'Faible visibilité → β élevé', 'Start-up tech (β ≈ 2.0)'],
          ['Taux de croissance', 'Forte croissance → β élevé', 'Entreprise en expansion rapide'],
          ['Endettement', 'Fort endettement → β élevé', 'Plus de levier = plus de risque'],
        ]}
      />

      <Note color="blue">
        <strong>En pratique suisse :</strong> Nestlé a un β d'environ 0.7 (défensif, alimentaire), tandis qu'UBS a un β d'environ 1.3 (sensible aux marchés financiers). La Confédération suisse a un taux sans risque (rf) d'environ 1%, et la prime de risque du marché suisse est estimée entre 5% et 6%.
      </Note>

      <P>
        Exemple concret : calculons le coût des fonds propres pour une PME industrielle suisse avec un β de 1.2, un taux sans risque de 1% et une prime de marché de 5.5%.
      </P>
      <P>
        kCP = 1% + 1.2 × 5.5% = 1% + 6.6% = 7.6%.
      </P>
      <P>
        Si cette PME est financée à 60% par fonds propres (kCP = 7.6%) et 40% par dette (kD = 3% avant impôt, t = 20%), alors :
      </P>
      <P>
        WACC = 60% × 7.6% + 40% × 3% × (1 − 20%) = 4.56% + 0.96% = 5.52%.
      </P>
      <P>
        Tout projet d'investissement de cette PME doit dégager un rendement supérieur à 5.52% pour créer de la valeur.
      </P>

      <H3>Exemple complet de calcul du WACC</H3>

      <P>
        Prenons une entreprise dont la structure financière est la suivante : fonds propres de
        CHF 100'000 avec un coût kCP de 10 %, dettes de CHF 50'000 avec un coût kD de 5 %, et
        un taux d'imposition de 35 %.
      </P>

      <P>
        WACC = 10 % x (100'000 / 150'000) + 5 % x (1 - 0.35) x (50'000 / 150'000)
        = 10 % x 0.6667 + 5 % x 0.65 x 0.3333
        = 6.67 % + 1.08 %
        = 7.75 %.
      </P>

      <Tableau
        headers={['Source', 'Montant (CHF)', 'Poids', 'Coût brut', 'Coût après impôt', 'Contribution au WACC']}
        rows={[
          ['Fonds propres', '100\'000', '66.7%', '10.0%', '10.0%', '6.67%'],
          ['Dettes', '50\'000', '33.3%', '5.0%', '3.25%', '1.08%'],
          ['Total', '150\'000', '100%', '', 'WACC =', '7.75%'],
        ]}
      />

      <P>
        Ce WACC de 7.75 % est le taux que l'entreprise devra utiliser comme taux d'actualisation
        dans ses calculs de VAN. Tout projet dont la rentabilité est supérieure à 7.75 % crée de
        la valeur ; tout projet en dessous en détruit.
      </P>

      <Note color="blue">
        <strong>Point théorique important :</strong> Le coût du capital préexiste à la structure
        financière. C'est fondamentalement le risque de l'actif économique (le risque des projets
        de l'entreprise) qui détermine le coût du capital total. La répartition entre fonds propres
        et dettes modifie le risque porté par chaque catégorie d'investisseurs, mais pas le coût
        total (proposition de Modigliani-Miller, hors fiscalité). La fiscalité introduit toutefois
        un avantage à la dette (bouclier fiscal), ce qui réduit le WACC lorsque l'endettement augmente.
      </Note>


      {/* ══════════════════════════════════════════════════════════════════
          9. EXEMPLE INTEGRATEUR — CAS SwiSSwatch SA
          ══════════════════════════════════════════════════════════════════ */}
      <H2>9. Exemple intégrateur -- Cas SwiSSwatch SA</H2>

      <P>
        L'entreprise SwiSSwatch SA, basée à Sion, envisage le remplacement d'une ligne de production.
        Ce cas intègre l'ensemble des concepts abordés dans ce chapitre : investissement initial net,
        fiscalité, amortissement, WACC, cash flows après impôts, et VAN. Il constitue un exercice
        de synthèse représentatif de ce que vous rencontrerez en examen.
      </P>

      <H3>Données du projet</H3>

      <Tableau
        headers={['Élément', 'Valeur']}
        rows={[
          ['Nouvelle machine', 'CHF 500\'000'],
          ['Frais d\'installation', 'CHF 50\'000'],
          ['Reprise ancienne machine (prix de vente)', 'CHF 40\'000'],
          ['Valeur comptable nette ancienne machine', 'CHF 10\'000'],
          ['Résultat d\'exploitation budgétisé', 'CHF 60\'000 / an'],
          ['Amortissement', 'Linéaire sur 5 ans'],
          ['Valeur résiduelle (fin année 5)', 'CHF 25\'000'],
          ['Taux d\'imposition', '20%'],
          ['Structure: fonds propres', '60% au coût de 18%'],
          ['Structure: dette', '40% au coût brut de 16.25%'],
        ]}
      />

      <H3>Étape 1 -- Investissement initial net</H3>

      <P>
        L'investissement total comprend le prix de la machine (CHF 500'000) et les frais d'installation
        (CHF 50'000), soit CHF 550'000. La revente de l'ancienne machine rapporte CHF 40'000, mais
        il faut prendre en compte l'effet fiscal de cette vente. La valeur comptable nette de l'ancienne
        machine est de CHF 10'000, donc le gain comptable sur la vente est de 40'000 - 10'000 =
        CHF 30'000. Ce gain est imposé à 20 %, soit un impôt de 30'000 x 20 % = CHF 6'000.
      </P>

      <P>
        Le produit net de la revente est donc : 40'000 - 6'000 = CHF 34'000.
        L'investissement initial net est : 550'000 - 34'000 = CHF 516'000.
      </P>

      <Tableau
        headers={['Élément', 'Montant (CHF)']}
        rows={[
          ['Prix nouvelle machine', '500\'000'],
          ['+ Frais d\'installation', '50\'000'],
          ['= Investissement brut', '550\'000'],
          ['- Prix de revente ancienne machine', '-40\'000'],
          ['+ Impot sur gain (30\'000 x 20%)', '+6\'000'],
          ['= Investissement initial net', '516\'000'],
        ]}
      />

      <H3>Étape 2 -- Calcul du WACC</H3>

      <P>
        WACC = kCP x poids CP + kD x (1-t) x poids dette
        = 18 % x 0.60 + 16.25 % x (1 - 0.20) x 0.40
        = 10.80 % + 5.20 %
        = 16.00 %.
      </P>

      <Tableau
        headers={['Source', 'Poids', 'Coût brut', 'Coût net', 'Contribution']}
        rows={[
          ['Fonds propres', '60%', '18.00%', '18.00%', '10.80%'],
          ['Dette', '40%', '16.25%', '13.00%', '5.20%'],
          ['', '', '', 'WACC =', '16.00%'],
        ]}
      />

      <H3>Étape 3 -- Cash flows annuels après impôt</H3>

      <P>
        L'amortissement annuel de la nouvelle machine est de 550'000 / 5 = CHF 110'000 par an
        (on amortit le coût total y compris les frais d'installation). Le bénéfice imposable est
        le résultat d'exploitation moins l'amortissement : 60'000 - 110'000 = -CHF 50'000.
        Cependant, un résultat négatif signifie qu'il n'y a pas d'impôt à payer (on suppose que
        l'entreprise peut déduire cette perte d'autres revenus).
      </P>

      <P>
        Recalculons avec la formule directe : CF après impôt = (Produits - Charges monétaires) x (1-t)
        + Amortissement x t. Ici, le résultat d'exploitation de CHF 60'000 représente déjà la différence
        entre produits et charges monétaires (hors amortissement de la nouvelle machine, celui-ci étant
        intégré pour le calcul fiscal). Le cash flow annuel est donc :
        CF = 60'000 x (1 - 0.20) + 110'000 x 0.20 = 48'000 + 22'000 = CHF 70'000 par an.
      </P>

      <H3>Étape 4 -- Valeur résiduelle nette</H3>

      <P>
        A la fin de l'annee 5, la machine est entièrement amortie (valeur comptable nette = 0). La
        revente à CHF 25'000 génère donc un gain comptable de CHF 25'000, imposé à 20 % soit
        CHF 5'000 d'impôt. Le produit net de la valeur résiduelle est : 25'000 - 5'000 = CHF 20'000.
        Ce montant s'ajoute au cash flow de l'année 5.
      </P>

      <H3>Étape 5 -- Calcul de la VAN</H3>

      <P>
        Les cash flows sont de CHF 70'000 par an pendant 5 ans, plus CHF 20'000 de valeur résiduelle
        nette en année 5 (soit CHF 90'000 en année 5). Le WACC est de 16 %.
      </P>

      <Tableau
        headers={['Année', 'Cash flow (CHF)', 'Facteur 1/(1.16)^t', 'CF actualisé (CHF)']}
        rows={[
          ['0', '-516\'000', '1.0000', '-516\'000'],
          ['1', '70\'000', '0.8621', '60\'345'],
          ['2', '70\'000', '0.7432', '52\'022'],
          ['3', '70\'000', '0.6407', '44\'847'],
          ['4', '70\'000', '0.5523', '38\'661'],
          ['5', '90\'000', '0.4761', '42\'850'],
        ]}
      />

      <P>
        VAN = -516'000 + 60'345 + 52'022 + 44'847 + 38'661 + 42'850 = -CHF 277'275.
      </P>

      <VANCalcul
        investissement={516000}
        flux={[
          { annee: 1, montant: 70000 },
          { annee: 2, montant: 70000 },
          { annee: 3, montant: 70000 },
          { annee: 4, montant: 70000 },
          { annee: 5, montant: 90000 },
        ]}
        taux={0.16}
        van={-277275}
      />

      <TimelineFlux
        investissement={{ montant: 516000, label: 'Investissement net' }}
        flux={[
          { annee: 1, montant: 70000 },
          { annee: 2, montant: 70000 },
          { annee: 3, montant: 70000 },
          { annee: 4, montant: 70000 },
          { annee: 5, montant: 70000 },
        ]}
        valeurResiduelle={{ montant: 20000 }}
      />

      <H3>Décision</H3>

      <P>
        La VAN est largement negative (-CHF 277'275). Le projet SwiSSwatch SA détruit massivement de la
        valeur. Les cash flows générés sont très insuffisants pour compenser l'investissement initial
        élevé et le coût du capital de 16 %. Le projet doit être catégoriquement rejeté.
      </P>

      <P>
        Ce résultat illustre un point essentiel : un résultat d'exploitation de CHF 60'000/an peut
        sembler correct en termes comptables, mais en termes financiers, il est totalement insuffisant
        pour rémunérer un investissement de CHF 516'000 au taux de 16 %. L'approche comptable et
        l'approche financiere divergent fondamentalement, et c'est l'approche financiere (la VAN)
        qui doit guider la décision.
      </P>

      <Note color="green">
        <strong>Résumé des critères de choix d'investissement :</strong>
      </Note>

      <Tableau
        headers={['Critère', 'Mesure', 'Règle de décision', 'Force', 'Limite']}
        rows={[
          ['VAN', 'Création de valeur en CHF', 'VAN positive = accepter', 'Critère théorique de référence', 'Nécessite une estimation fiable du taux k'],
          ['TRI', 'Taux de rendement du projet', 'TRI supérieur à k = accepter', 'Intuitif, exprimé en %', 'Hypothèse de réinvestissement, TRI multiples possibles'],
          ['Payback', 'Délai de récupération', 'Payback inférieur au seuil = accepter', 'Simple, mesure la liquidité', 'Ignore les CF après le seuil'],
          ['WACC', 'Coût du capital', 'Sert de taux de rejet pour la VAN', 'Intègre toutes les sources de financement', 'Sensible aux hypothèses du MEDAF'],
        ]}
      />

      <P>
        En pratique, l'analyste financier utilise ces critères de manière complémentaire. La VAN reste
        le critère de référence pour la décision finale, le TRI fournit une indication intuitive du
        rendement, et le payback informe sur le risque de liquidité. Le WACC, calculé à l'aide du
        MEDAF pour les fonds propres, sert de taux de rejet dans l'ensemble des calculs. La maîtrise
        de ces outils est indispensable pour tout professionnel de la finance d'entreprise.
      </P>
    </>
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
   EXPORT
   ═══════════════════════════════════════════════════════════════════════════ */

export function TabInvestissementsView() {
  return (
    <TheoryLayout title="10. Choix d'investissement" tag="tag-base" tagLabel="Analyse" meta="VAN - TRI - Payback - WACC - MEDAF">
      <TabInvestissements />
    </TheoryLayout>
  );
}

export { TabInvestissements };
