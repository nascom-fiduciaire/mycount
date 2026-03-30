import React from 'react';
import { P, H2, H3, Note, Loi, Tableau } from '../TheoryUI';

// ─── Visual Components ──────────────────────────────────────────────────────

function FormulaBox({ formula, description }) {
  return (
    <div style={{ margin: '16px 0', padding: '16px 20px', background: '#f0f4ff', border: '2px solid #2563eb', borderRadius: 12, textAlign: 'center' }}>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.05rem', fontWeight: 700, color: '#1e3a5f', marginBottom: 4 }}>{formula}</div>
      {description && <div style={{ fontSize: '0.78rem', color: '#64748b', fontStyle: 'italic' }}>{description}</div>}
    </div>
  );
}

function FluxDiagram({ exploitation, investissement, financement, variation }) {
  const fmt = (n) => (n >= 0 ? '+' : '') + n.toLocaleString('fr-CH') + ' CHF';
  const boxStyle = (val) => ({
    flex: 1,
    padding: '14px 10px',
    borderRadius: 10,
    textAlign: 'center',
    background: val >= 0 ? '#ecfdf5' : '#fef2f2',
    border: `2px solid ${val >= 0 ? '#10b981' : '#ef4444'}`,
    color: val >= 0 ? '#065f46' : '#991b1b',
  });

  return (
    <div style={{ margin: '20px 0' }}>
      <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
        <div style={boxStyle(exploitation)}>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>Exploitation</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.95rem' }}>{fmt(exploitation)}</div>
        </div>
        <div style={boxStyle(investissement)}>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>Investissement</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.95rem' }}>{fmt(investissement)}</div>
        </div>
        <div style={boxStyle(financement)}>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>Financement</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.95rem' }}>{fmt(financement)}</div>
        </div>
      </div>
      <div style={{ textAlign: 'center', fontSize: '1.3rem', color: '#94a3b8', margin: '4px 0' }}>&#8595;</div>
      <div style={{
        padding: '12px 20px', borderRadius: 10, textAlign: 'center',
        background: variation >= 0 ? '#ecfdf5' : '#fef2f2',
        border: `3px solid ${variation >= 0 ? '#10b981' : '#ef4444'}`,
      }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#64748b', marginBottom: 2 }}>Variation nette de trésorerie</div>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 800, fontSize: '1.15rem', color: variation >= 0 ? '#065f46' : '#991b1b' }}>{fmt(variation)}</div>
      </div>
    </div>
  );
}

function BreakEvenChart({ chargesFixes, tauxMC, seuilCA, caReel }) {
  const maxCA = Math.max(caReel, seuilCA) * 1.15;
  const seuilPct = (seuilCA / maxCA) * 100;
  const caReelPct = (caReel / maxCA) * 100;
  const margeSec = caReel - seuilCA;
  const margeSecPct = caReel > 0 ? ((margeSec / caReel) * 100).toFixed(1) : 0;

  return (
    <div style={{ margin: '20px 0', padding: '20px', background: '#fafafa', borderRadius: 12, border: '1px solid #e2e8f0' }}>
      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f172a', marginBottom: 12, textAlign: 'center' }}>Analyse du seuil de rentabilité</div>
      <div style={{ position: 'relative', height: 50, background: '#e2e8f0', borderRadius: 8, overflow: 'hidden', marginBottom: 8 }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: seuilPct + '%', background: 'linear-gradient(90deg, #fecaca, #fca5a5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#991b1b' }}>Charges fixes: {chargesFixes.toLocaleString('fr-CH')} CHF</span>
        </div>
        {caReel > seuilCA && (
          <div style={{
            position: 'absolute', left: seuilPct + '%', top: 0, bottom: 0,
            width: (caReelPct - seuilPct) + '%', background: 'linear-gradient(90deg, #bbf7d0, #86efac)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#065f46' }}>Marge: {margeSec.toLocaleString('fr-CH')} CHF</span>
          </div>
        )}
        <div style={{
          position: 'absolute', left: seuilPct + '%', top: 0, bottom: 0,
          width: 3, background: '#dc2626', zIndex: 2,
        }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#64748b' }}>
        <span>0 CHF</span>
        <span style={{ color: '#dc2626', fontWeight: 700 }}>Seuil: {seuilCA.toLocaleString('fr-CH')} CHF</span>
        <span style={{ color: '#065f46', fontWeight: 700 }}>CA réel: {caReel.toLocaleString('fr-CH')} CHF</span>
      </div>
      <div style={{ textAlign: 'center', marginTop: 8, fontSize: '0.72rem', color: '#475569' }}>
        Taux MC: {(tauxMC * 100).toFixed(1)}% | Marge de sécurité: {margeSecPct}%
      </div>
    </div>
  );
}

function WaterfallChart({ steps }) {
  const maxVal = Math.max(...steps.map(s => Math.abs(s.value)), 1);

  return (
    <div style={{ margin: '20px 0', padding: '16px', background: '#fafafa', borderRadius: 12, border: '1px solid #e2e8f0' }}>
      {steps.map((step, i) => {
        const pct = (Math.abs(step.value) / maxVal) * 100;
        const col = step.color || (step.value >= 0 ? '#10b981' : '#ef4444');
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
            <div style={{ width: 160, fontSize: '0.72rem', fontWeight: 600, color: '#334155', textAlign: 'right', paddingRight: 10, flexShrink: 0 }}>{step.label}</div>
            <div style={{ flex: 1, position: 'relative', height: 26 }}>
              <div style={{
                height: '100%', width: pct + '%', background: col, borderRadius: 5,
                display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 8,
              }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#fff' }}>
                  {(step.value >= 0 ? '+' : '') + step.value.toLocaleString('fr-CH')} CHF
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CHAPITRE 7 — TABLEAU DE FLUX DE TRÉSORERIE
// ═══════════════════════════════════════════════════════════════════════════════

export function TabFlux() {
  return (
    <>
      {/* ─── 7.1 Introduction ─── */}
      <H2>1. Introduction — Pourquoi le tableau de flux ?</H2>
      <P>
        Le bilan est une photographie de la situation patrimoniale de l'entreprise à un instant T. Il montre ce que l'entreprise possède
        (actifs) et ce qu'elle doit (passifs) à la date de clôture. Cependant, cette photographie ne nous dit rien sur les mouvements
        de trésorerie qui se sont produits pendant l'exercice. De la même manière, le compte de résultat mesure la performance économique
        de l'exercice, mais il est établi sur la base de l'engagement (accrual basis), ce qui signifie que les produits sont enregistrés
        lorsqu'ils sont réalisés, pas lorsqu'ils sont encaissés, et les charges sont enregistrées lorsqu'elles sont engagées, pas lorsqu'elles
        sont décaissées.
      </P>
      <P>
        Le tableau de flux de trésorerie répond à une question fondamentale que ni le bilan ni le compte de résultat ne peuvent résoudre
        de manière satisfaisante : d'où vient l'argent et où est-il allé pendant l'exercice ? Cette question est cruciale pour comprendre
        la santé financière réelle d'une entreprise. Un résultat net positif ne garantit pas que l'entreprise dispose de liquidités suffisantes
        pour payer ses factures, investir dans son développement ou rembourser ses dettes. Inversement, une entreprise peut afficher un
        résultat déficitaire tout en disposant d'un flux de trésorerie positif grâce à des amortissements élevés.
      </P>
      <P>
        Considérez cette analogie courante : le compte de résultat vous annonce que votre entreprise a gagné CHF 100'000 de bénéfice.
        Pourtant, en consultant votre relevé bancaire, vous constatez que votre compte a diminué de CHF 50'000 pendant la même période.
        Comment est-ce possible ? C'est précisément le tableau de flux de trésorerie qui explique cette différence apparemment paradoxale.
        Peut-être avez-vous investi dans une nouvelle machine (pas de charge au CR, mais sortie de cash), ou peut-être vos clients
        n'ont-ils pas encore payé leurs factures (produit comptabilisé, mais pas d'entrée de cash).
      </P>

      <Loi titre="Art. 961 CO — Obligation légale">
        Les entreprises soumises au contrôle ordinaire (chiffre d'affaires supérieur à CHF 40 millions, total du bilan supérieur
        à CHF 20 millions, ou plus de 250 employés à plein temps) doivent établir un tableau de flux de trésorerie dans le cadre
        de leurs comptes annuels. Même lorsque l'entreprise n'est pas soumise à cette obligation légale, l'établissement d'un
        tableau de flux constitue une pratique de gestion interne indispensable pour piloter la trésorerie.
      </Loi>

      <P>
        En pratique, les banques et les investisseurs accordent une attention particulière au tableau de flux de trésorerie.
        Un prêteur veut savoir si l'entreprise génère suffisamment de cash pour rembourser ses emprunts. Un investisseur veut
        comprendre si le bénéfice affiché se traduit effectivement en liquidités disponibles. Le tableau de flux est souvent
        considéré comme le document financier le plus difficile à manipuler, car les mouvements de cash sont objectifs et
        vérifiables — contrairement à certains choix comptables qui peuvent embellir le résultat.
      </P>

      {/* ─── 7.2 Les 3 catégories de flux ─── */}
      <H2>2. Les trois catégories de flux</H2>
      <P>
        Le tableau de flux de trésorerie décompose l'ensemble des mouvements de cash en trois catégories distinctes, chacune
        correspondant à un type d'activité économique. Cette décomposition est essentielle car elle permet de comprendre
        non seulement le montant total de la variation de trésorerie, mais surtout la nature des flux qui l'ont provoquée.
        Une variation positive de CHF 200'000 n'a pas la même signification selon qu'elle provient de l'exploitation
        courante ou de la vente d'un immeuble.
      </P>

      <H3>Flux d'exploitation (operating cash flow)</H3>
      <P>
        Les flux d'exploitation représentent le cash généré ou consommé par l'activité courante de l'entreprise, c'est-à-dire
        par son cœur de métier. C'est le moteur de l'entreprise. Si une boulangerie fabrique et vend du pain, les encaissements
        des ventes de pain et les paiements de la farine, des salaires du boulanger et du loyer constituent des flux d'exploitation.
        Ce flux est le plus important de tous car il mesure la capacité de l'entreprise à générer du cash par ses propres moyens,
        sans avoir besoin d'emprunter ni de vendre des actifs.
      </P>
      <P>
        Lorsque le flux d'exploitation est négatif de manière durable, cela signifie que l'activité courante de l'entreprise
        consomme plus de cash qu'elle n'en génère. C'est un signal d'alarme majeur : l'entreprise brûle ses réserves de trésorerie
        et devra tôt ou tard emprunter ou vendre des actifs pour survivre. Une situation temporairement négative peut s'expliquer
        par une forte croissance (augmentation des stocks et des créances), mais si elle persiste sur plusieurs exercices,
        le modèle d'affaires est fondamentalement en question. Les composantes principales de ce flux incluent les encaissements
        clients, les paiements aux fournisseurs, les salaires versés, les impôts payés et les charges d'exploitation courantes.
      </P>

      <H3>Flux d'investissement (investing cash flow)</H3>
      <P>
        Les flux d'investissement correspondent au cash utilisé pour acquérir ou entretenir l'outil de production de l'entreprise,
        ainsi qu'au cash récupéré lors de la cession d'actifs immobilisés. Lorsqu'une entreprise achète une nouvelle machine
        pour CHF 350'000, cette sortie de cash apparaît dans les flux d'investissement. De même, si elle vend un ancien véhicule
        pour CHF 25'000, cette entrée de cash figure également dans cette catégorie. En temps normal, le flux d'investissement
        est négatif, car une entreprise saine investit régulièrement pour maintenir et développer son appareil productif.
        Un flux d'investissement durablement positif peut signifier que l'entreprise vend ses actifs, ce qui n'est pas forcément
        un bon signe — sauf en cas de restructuration délibérée.
      </P>

      <H3>Flux de financement (financing cash flow)</H3>
      <P>
        Les flux de financement regroupent l'ensemble des opérations financières entre l'entreprise et ses apporteurs de capitaux,
        qu'il s'agisse des actionnaires (capitaux propres) ou des prêteurs (capitaux étrangers). Les augmentations de capital,
        les nouveaux emprunts bancaires et les émissions d'obligations constituent des entrées de cash dans cette catégorie.
        Inversement, les remboursements d'emprunts, les rachats d'actions propres et les distributions de dividendes constituent
        des sorties de cash. Un flux de financement positif indique que l'entreprise lève des fonds extérieurs ; un flux négatif
        indique qu'elle rembourse ses dettes ou rétribue ses actionnaires.
      </P>

      <FluxDiagram
        exploitation={280000}
        investissement={-150000}
        financement={-80000}
        variation={50000}
      />

      <Note>
        La somme des trois flux donne toujours la variation nette de trésorerie de l'exercice. Dans cet exemple,
        CHF 280'000 (exploitation) - CHF 150'000 (investissement) - CHF 80'000 (financement) = CHF 50'000 de variation
        positive. La trésorerie de l'entreprise a donc augmenté de CHF 50'000 pendant l'exercice.
      </Note>

      {/* ─── 7.3 Méthode indirecte ─── */}
      <H2>3. Méthode indirecte (la plus courante en Suisse)</H2>
      <P>
        La méthode indirecte est ainsi nommée parce qu'elle ne part pas directement des encaissements et décaissements réels.
        Au lieu de cela, elle prend comme point de départ le résultat net (un chiffre comptable, pas un chiffre de trésorerie)
        et le corrige progressivement pour éliminer tous les éléments qui ne correspondent pas à des mouvements de cash.
        Le principe fondamental est le suivant : le résultat net inclut des charges qui n'ont occasionné aucune sortie
        d'argent (comme les amortissements) et des produits qui n'ont occasionné aucune entrée d'argent (comme la dissolution
        de provisions). Il faut donc neutraliser ces éléments pour obtenir le flux de cash réel.
      </P>
      <P>
        La première correction concerne les amortissements. Lorsqu'une machine achetée CHF 500'000 est amortie de CHF 100'000
        par année, cette charge de CHF 100'000 réduit le résultat net, mais aucun franc n'a quitté le compte en banque pendant
        l'exercice. L'argent est sorti lors de l'achat initial, pas lors de l'amortissement. Par conséquent, on rajoute les
        amortissements au résultat net pour corriger cette distorsion. De manière similaire, la constitution de provisions
        (par exemple CHF 50'000 de provisions pour risques) réduit le résultat sans sortie de cash, et leur dissolution
        augmente le résultat sans entrée de cash.
      </P>
      <P>
        La deuxième correction, souvent la plus complexe à comprendre, concerne la variation du besoin en fonds de roulement (BFR).
        Le BFR représente la différence entre les actifs circulants d'exploitation (stocks et créances) et les dettes d'exploitation
        (dettes fournisseurs). Lorsque les stocks augmentent de CHF 30'000 pendant l'exercice, cela signifie que l'entreprise a
        acheté pour CHF 30'000 de marchandises de plus qu'elle n'en a vendu. Cet achat représente une sortie de cash non reflétée
        dans le résultat (car la charge n'apparaît qu'au moment de la vente). On soustrait donc cette augmentation.
      </P>
      <P>
        De même, lorsque les créances clients augmentent de CHF 45'000, cela signifie que l'entreprise a effectué CHF 45'000
        de ventes supplémentaires qui n'ont pas encore été encaissées. Le résultat inclut ces ventes comme produit, mais le cash
        n'est pas encore entré. On soustrait donc cette augmentation. En revanche, lorsque les dettes fournisseurs augmentent de
        CHF 20'000, cela signifie que l'entreprise a reçu des marchandises ou services dont elle n'a pas encore payé la facture.
        La charge est dans le résultat, mais le cash n'est pas encore sorti. On rajoute donc cette augmentation.
      </P>

      <Tableau
        titre="Construction du flux d'exploitation — Méthode indirecte"
        colonnes={['Élément', 'Montant CHF', 'Explication']}
        lignes={[
          ['Résultat net', '180\'000', 'Point de départ : bénéfice comptable de l\'exercice'],
          ['+ Amortissements', '95\'000', 'Charge non-cash : aucune sortie de trésorerie'],
          ['- Augmentation des stocks', '-30\'000', 'Cash consommé : achats non encore vendus'],
          ['+ Diminution des créances', '+15\'000', 'Cash récupéré : encaissement de ventes antérieures'],
          ['+ Augmentation dettes frs', '+20\'000', 'Cash économisé : charges engagées non encore payées'],
          ['= CF exploitation', '280\'000', 'Cash réel généré par l\'activité courante'],
        ]}
      />

      <P>
        Détaillons cet exemple. L'entreprise a réalisé un résultat net de CHF 180'000. Ce chiffre provient du compte de résultat
        et inclut toutes les charges et tous les produits de l'exercice, qu'ils aient ou non entraîné un mouvement de trésorerie.
        Les amortissements de CHF 95'000 sont la première correction : l'entreprise a comptabilisé cette charge pour refléter
        l'usure de ses immobilisations, mais aucun paiement n'a été effectué. En rajoutant les CHF 95'000, on neutralise cette
        charge non-cash et on obtient un sous-total de CHF 275'000.
      </P>
      <P>
        Les stocks ont augmenté de CHF 30'000 pendant l'exercice, ce qui signifie que l'entreprise a acheté et stocké pour
        CHF 30'000 de marchandises supplémentaires. Cet achat a nécessité une sortie de cash, mais la charge correspondante
        n'apparaîtra dans le compte de résultat que lorsque ces marchandises seront vendues (en tant que coût des marchandises
        vendues). On soustrait donc ces CHF 30'000. Les créances clients ont diminué de CHF 15'000, ce qui est une bonne nouvelle
        pour la trésorerie : l'entreprise a encaissé CHF 15'000 de factures antérieures, générant une entrée de cash qui
        n'apparaît pas dans le résultat de l'exercice courant. On rajoute donc ces CHF 15'000.
      </P>
      <P>
        Enfin, les dettes fournisseurs ont augmenté de CHF 20'000, ce qui signifie que l'entreprise a bénéficié de CHF 20'000
        de credit-fournisseur supplémentaire. Les charges correspondantes sont enregistrées dans le résultat, mais le paiement
        effectif n'a pas encore eu lieu. On rajoute ces CHF 20'000. Le flux d'exploitation final s'élève donc à CHF 280'000,
        soit CHF 100'000 de plus que le résultat net. Cette différence de CHF 100'000 s'explique principalement par les
        amortissements (CHF 95'000) et par l'amélioration nette du BFR (CHF 5'000).
      </P>

      {/* ─── 7.4 Méthode directe ─── */}
      <H2>4. Méthode directe</H2>
      <P>
        Contrairement à la méthode indirecte, la méthode directe part directement des encaissements et décaissements réels.
        Elle est plus intuitive car elle correspond à ce que l'on voit sur le relevé bancaire : combien d'argent est entré
        et combien est sorti. Cependant, elle nécessite des données plus détaillées car il faut connaître le montant exact
        des encaissements clients (qui differe du chiffre d'affaires à cause des variations de créances) et le montant exact
        des paiements fournisseurs (qui differe des achats à cause des variations de dettes fournisseurs).
      </P>
      <P>
        Pour calculer les encaissements clients, on part du chiffre d'affaires et on ajuste pour la variation des créances.
        Si le CA est de CHF 2'000'000 et que les créances ont diminué de CHF 15'000, alors les encaissements clients sont de
        CHF 2'015'000 (on a encaissé le CA de l'exercice plus CHF 15'000 de factures antérieures). Pour les paiements fournisseurs,
        on part des achats et on ajuste pour la variation des dettes. Si les achats sont de CHF 1'200'000 et que les dettes
        fournisseurs ont augmenté de CHF 20'000, alors les paiements réels sont de CHF 1'180'000 (on a payé moins que les achats
        car on a bénéficié de credit supplémentaire).
      </P>

      <Tableau
        titre="Construction du flux d'exploitation — Méthode directe"
        colonnes={['Élément', 'Montant CHF']}
        lignes={[
          ['Encaissements clients (CA +/- variation créances)', '2\'015\'000'],
          ['- Paiements fournisseurs (achats +/- variation dettes)', '-1\'180\'000'],
          ['- Paiements salaires', '-380\'000'],
          ['- Autres charges d\'exploitation payées', '-125\'000'],
          ['- Impôts payés', '-50\'000'],
          ['= CF exploitation', '280\'000'],
        ]}
      />

      <P>
        Notez que les deux méthodes aboutissent au même résultat de CHF 280'000. C'est logique car elles mesurent
        toutes les deux le même phénomène — le cash génère par l'exploitation — mais par des chemins différents.
        La méthode indirecte part du résultat et le corrige ; la méthode directe part des flux réels et les additionne.
        En Suisse, la méthode indirecte est largement prédominante car elle est plus facile à préparer (on dispose
        déjà du bilan et du compte de résultat) et elle permet de comprendre le lien entre résultat comptable et
        trésorerie. La méthode directe est néanmoins considérée comme plus transparente par les normes internationales
        (IFRS) et est parfois exigée en complement.
      </P>

      {/* ─── 7.5 Flux d'investissement et de financement ─── */}
      <H2>5. Flux d'investissement et de financement</H2>
      <P>
        Les flux d'investissement retracent toutes les opérations liées à l'acquisition et à la cession d'actifs à long terme.
        Lorsqu'une entreprise achète une machine de production pour CHF 250'000, cette sortie de cash figure dans les flux
        d'investissement. De même, la construction d'un nouveau bâtiment pour CHF 800'000, l'acquisition d'un logiciel pour
        CHF 45'000 ou l'achat de participations dans une filiale pour CHF 500'000 sont toutes des sorties d'investissement.
        En sens inverse, la vente d'un ancien véhicule pour CHF 18'000, la cession d'un terrain pour CHF 300'000 ou l'encaissement
        de dividendes provenant de participations sont des entrées d'investissement.
      </P>

      <Tableau
        titre="Flux d'investissement — Exemple"
        colonnes={['Élément', 'Montant CHF']}
        lignes={[
          ['- Achat machine de production', '-250\'000'],
          ['- Achat logiciel ERP', '-45\'000'],
          ['+ Vente ancien véhicule', '+18\'000'],
          ['+ Dividendes reçus de participations', '+12\'000'],
          ['= CF investissement', '-265\'000'],
        ]}
      />

      <P>
        Les flux de financement couvrent les opérations entre l'entreprise et ses apporteurs de capitaux. Du côté des
        capitaux propres, une augmentation de capital (émission de nouvelles actions) génère une entrée de cash, tandis
        que le versement de dividendes aux actionnaires constitue une sortie. Du côté des capitaux étrangers, la contraction
        d'un nouvel emprunt bancaire génère une entrée, tandis que le remboursement d'un emprunt existant constitue une sortie.
        Il est important de distinguer le remboursement du capital (flux de financement) du paiement des intérêts (généralement
        classé dans les flux d'exploitation ou de financement selon la norme appliquée).
      </P>

      <Tableau
        titre="Flux de financement — Exemple"
        colonnes={['Élément', 'Montant CHF']}
        lignes={[
          ['+ Nouvel emprunt bancaire', '+200\'000'],
          ['- Remboursement emprunt existant', '-150\'000'],
          ['- Dividendes versés', '-60\'000'],
          ['= CF financement', '-10\'000'],
        ]}
      />

      {/* ─── 7.6 Contrôle et interprétation ─── */}
      <H2>6. Contrôle et interprétation</H2>
      <P>
        Le contrôle arithmétique du tableau de flux est simple mais fondamental : la trésorerie de début d'exercice,
        augmentée (ou diminuée) de la somme des trois flux, doit donner exactement la trésorerie de fin d'exercice.
        Ce contrôle constitue une vérification de cohérence incontournable. Si le calcul ne tombe pas juste, cela signifie
        qu'un mouvement de trésorerie a été oublié ou mal classé. En pratique, la trésorerie comprend les liquidités
        (caisse, banque, CCP) éventuellement nettes des découverts bancaires à court terme.
      </P>

      <FormulaBox
        formula="Trésorerie début + CF exploitation + CF investissement + CF financement = Trésorerie fin"
        description="Équation de contrôle du tableau de flux de trésorerie"
      />

      <P>
        Au-delà du simple contrôle arithmétique, l'analyse de la combinaison des trois flux révèle le profil financier
        de l'entreprise. Ce profil permet de diagnostiquer la situation économique et d'anticiper les évolutions futures.
        Il existe plusieurs profils types que l'on rencontre fréquemment en pratique, chacun correspondant à une phase
        de vie de l'entreprise ou à un état de santé financière spécifique.
      </P>

      <H3>Profil 1 : Entreprise saine et mature</H3>
      <WaterfallChart steps={[
        { label: 'CF Exploitation', value: 350000, color: '#10b981' },
        { label: 'CF Investissement', value: -180000, color: '#ef4444' },
        { label: 'CF Financement', value: -120000, color: '#f59e0b' },
        { label: 'Variation nette', value: 50000, color: '#2563eb' },
      ]} />
      <P>
        L'entreprise saine et mature présente un flux d'exploitation largement positif, ce qui signifie qu'elle génère
        suffisamment de cash par son activité courante pour financer à la fois ses investissements de maintien et de
        développement (flux d'investissement négatif) et rembourser ses dettes ou distribuer des dividendes (flux de
        financement négatif). C'est le profil idéal car l'entreprise est autonome financièrement et ne dépend pas de
        financements extérieurs pour fonctionner. Elle investit dans son avenir tout en rémunérant ses actionnaires.
      </P>

      <H3>Profil 2 : Entreprise en forte croissance</H3>
      <WaterfallChart steps={[
        { label: 'CF Exploitation', value: 200000, color: '#10b981' },
        { label: 'CF Investissement', value: -500000, color: '#ef4444' },
        { label: 'CF Financement', value: 350000, color: '#f59e0b' },
        { label: 'Variation nette', value: 50000, color: '#2563eb' },
      ]} />
      <P>
        L'entreprise en forte croissance génère un flux d'exploitation positif mais insuffisant pour couvrir des investissements
        très importants. Elle doit donc recourir à des financements extérieurs (emprunts ou augmentation de capital) pour
        combler la différence. Ce profil est typique des entreprises qui se développent rapidement et construisent leurs
        capacités de production. Il n'est pas inquiétant à condition que les investissements généreront des revenus futurs
        suffisants pour rembourser les emprunts contractés.
      </P>

      <H3>Profil 3 : Entreprise en difficulté</H3>
      <WaterfallChart steps={[
        { label: 'CF Exploitation', value: -80000, color: '#ef4444' },
        { label: 'CF Investissement', value: 150000, color: '#10b981' },
        { label: 'CF Financement', value: 100000, color: '#f59e0b' },
        { label: 'Variation nette', value: 170000, color: '#2563eb' },
      ]} />
      <P>
        L'entreprise en difficulté affiche un flux d'exploitation négatif : son activité courante consomme du cash au lieu
        d'en générer. Pour survivre, elle est contrainte de vendre des actifs (flux d'investissement positif) et d'emprunter
        davantage (flux de financement positif). Ce profil est un signal d'alerte sévère. La vente d'actifs est un expédient
        temporaire qui affaiblit l'outil de production, et l'augmentation de l'endettement accroît les charges d'intérêts
        futures. Si la situation perdure, l'entreprise risque l'insolvabilité.
      </P>

      {/* ─── 7.7 Exemple complet ALPINE TECH SA ─── */}
      <H2>7. Exemple complet — ALPINE TECH SA</H2>
      <P>
        ALPINE TECH SA est une entreprise zurichoise de composants électroniques. Voici les informations disponibles
        pour l'exercice 2025 : résultat net de CHF 220'000, amortissements de CHF 130'000, augmentation des stocks
        de CHF 45'000, augmentation des créances clients de CHF 60'000, augmentation des dettes fournisseurs de CHF 35'000,
        constitution d'une provision pour garantie de CHF 25'000. L'entreprise a acheté une nouvelle ligne de production
        pour CHF 380'000 et vendu une ancienne machine pour CHF 40'000. Elle a contracté un emprunt de CHF 200'000,
        rembourse un emprunt existant de CHF 100'000 et verse des dividendes de CHF 80'000. La trésorerie au 01.01.2025
        était de CHF 150'000.
      </P>

      <Tableau
        titre="Flux d'exploitation — Méthode indirecte"
        colonnes={['Élément', 'Montant CHF']}
        lignes={[
          ['Résultat net', '220\'000'],
          ['+ Amortissements', '+130\'000'],
          ['+ Provision pour garantie', '+25\'000'],
          ['- Augmentation des stocks', '-45\'000'],
          ['- Augmentation des créances', '-60\'000'],
          ['+ Augmentation dettes fournisseurs', '+35\'000'],
          ['= CF exploitation', '305\'000'],
        ]}
      />

      <P>
        Le flux d'exploitation s'élève à CHF 305'000. L'entreprise génère un cash-flow opérationnel significativement
        supérieur à son résultat net (CHF 305'000 vs CHF 220'000). La différence de CHF 85'000 s'explique principalement
        par les amortissements et la provision (CHF 155'000 de charges non-cash) partiellement compenses par la
        détérioration du BFR (CHF 70'000 de cash absorbe par la croissance des stocks et créances, nette de la hausse
        des dettes fournisseurs).
      </P>

      <Tableau
        titre="Flux d'investissement"
        colonnes={['Élément', 'Montant CHF']}
        lignes={[
          ['- Achat ligne de production', '-380\'000'],
          ['+ Vente ancienne machine', '+40\'000'],
          ['= CF investissement', '-340\'000'],
        ]}
      />

      <Tableau
        titre="Flux de financement"
        colonnes={['Élément', 'Montant CHF']}
        lignes={[
          ['+ Nouvel emprunt', '+200\'000'],
          ['- Remboursement emprunt', '-100\'000'],
          ['- Dividendes versés', '-80\'000'],
          ['= CF financement', '+20\'000'],
        ]}
      />

      <FluxDiagram
        exploitation={305000}
        investissement={-340000}
        financement={20000}
        variation={-15000}
      />

      <P>
        Le contrôle donne : Trésorerie début CHF 150'000 + CHF 305'000 - CHF 340'000 + CHF 20'000 = CHF 135'000.
        La trésorerie a donc diminué de CHF 15'000 pendant l'exercice. L'interprétation révèle un profil d'entreprise
        en croissance : le flux d'exploitation est solidement positif (CHF 305'000), mais l'investissement massif dans
        une nouvelle ligne de production (CHF 380'000 brut) dépasse le cash opérationnel. L'entreprise a du emprunter
        CHF 200'000 pour financer partiellement cet investissement, tout en remboursant CHF 100'000 d'emprunts anterieurs
        et en distribuant CHF 80'000 de dividendes. La légère baisse de trésorerie de CHF 15'000 est tout a fait acceptable
        dans un contexte d'investissement productif.
      </P>

      <Note>
        Retenez que le flux d'exploitation est le flux le plus important. Un flux d'exploitation durablement positif
        est le signe d'un modèle d'affaires viable. Les flux d'investissement et de financement sont des choix
        stratégiques : investir pour croitre, emprunter pour se développer, distribuer pour rémunérer les actionnaires.
        C'est la combinaison des trois flux et leur evolution dans le temps qui permet un diagnostic complet.
      </Note>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CHAPITRE 8 — SEUIL DE RENTABILITÉ
// ═══════════════════════════════════════════════════════════════════════════════

export function TabSeuil() {
  return (
    <>
      {/* ─── 8.1 Introduction ─── */}
      <H2>1. Introduction — Le point mort</H2>
      <P>
        Toute entreprise, qu'elle soit une boulangerie artisanale à Fribourg ou une multinationale à Genève, doit
        atteindre un niveau minimum de chiffre d'affaires avant de commencer à réaliser un bénéfice. En dessous de
        ce niveau, l'entreprise fonctionne à perte ; au-dessus, elle dégage un profit. Ce niveau critique est appelé
        le seuil de rentabilité, ou point mort (en anglais, break-even point). Comprendre ce concept et savoir le
        calculer est fondamental pour toute décision de gestion : fixer un prix de vente, lancer un nouveau produit,
        décider d'un investissement ou restructurer les coûts.
      </P>
      <P>
        Le concept de seuil de rentabilité a été développé et formalisé dans les années 1920 par des économistes et
        ingénieurs industriels qui cherchaient à comprendre la relation entre les volumes de production, les coûts
        et les profits dans les usines manufacturières. Depuis lors, il est devenu un outil incontournable de la
        gestion d'entreprise, enseigné dans toutes les écoles de commerce et utilisé quotidiennement par les directeurs
        financiers du monde entier. Sa force réside dans sa simplicité : avec seulement trois informations (charges fixes,
        prix de vente et coût variable unitaire), on peut déterminer le volume de ventes nécessaire pour couvrir
        l'ensemble des coûts.
      </P>
      <P>
        Le seuil de rentabilité n'est pas seulement un exercice théorique. En pratique, il guide des décisions
        stratégiques majeures. Avant de lancer un nouveau produit, le directeur commercial calculera le seuil de
        rentabilité pour estimer si le volume de ventes attendu est réaliste. Avant de signer un bail pour de nouveaux
        locaux (augmentation des charges fixes), le directeur financier évaluera l'impact sur le seuil. Lors d'une
        négociation salariale (augmentation des charges variables ou fixes), le DRH devra comprendre les conséquences
        sur le point mort de l'entreprise.
      </P>

      {/* ─── 8.2 Charges fixes vs charges variables ─── */}
      <H2>2. Charges fixes vs charges variables — la distinction fondamentale</H2>
      <P>
        La distinction entre charges fixes et charges variables est la pierre angulaire de l'analyse du seuil de
        rentabilité. Cette classification repose sur le comportement de la charge par rapport au volume d'activité.
        Une charge est considérée comme fixe si son montant ne varie pas (ou très peu) lorsque le volume de production
        ou de vente change. Elle doit être payée quel que soit le niveau d'activité, y compris si l'entreprise ne
        réalise aucune vente. Le loyer du local commercial en est l'exemple le plus parlant : que la boutique accueille
        5 clients ou 500 clients par jour, le loyer mensuel reste identique.
      </P>
      <P>
        Les charges fixes comprennent typiquement les loyers des locaux commerciaux et industriels, les salaires du
        personnel fixe (direction, administration, personnel non directement lié à la production), les amortissements
        des immobilisations (machines, véhicules, mobilier), les primes d'assurance annuelles, les abonnements
        (téléphonie, informatique, licences logicielles), les intérêts sur les emprunts à long terme, et les impôts
        fonciers. Ces charges constituent le socle incompressible que l'entreprise doit couvrir avant de pouvoir
        envisager un quelconque bénéfice. Plus les charges fixes sont élevées, plus le seuil de rentabilité est
        haut, et plus l'entreprise est vulnérable en cas de baisse d'activité.
      </P>
      <P>
        À l'opposé, une charge variable évolue proportionnellement au volume d'activité. Si vous ne produisez rien,
        la charge variable est nulle. Si vous doublez votre production, la charge variable double également. Les
        matières premières illustrent parfaitement ce comportement : pour fabriquer un gâteau, il faut CHF 4.50 de
        farine, beurre et sucre. Pour 100 gâteaux, il faut CHF 450, pour 1'000 gâteaux, CHF 4'500. La proportionnalité
        est directe et linéaire. Les autres charges variables typiques incluent les emballages, les commissions de vente
        (souvent un pourcentage du chiffre d'affaires), les frais de transport par unité expédiée, et l'énergie directement
        liée à la production (électricité des machines).
      </P>
      <P>
        En réalité, certaines charges ne sont ni purement fixes ni purement variables. On les appelle charges semi-variables
        ou charges mixtes. L'énergie électrique en est un bon exemple : l'entreprise paie un abonnement fixe (partie fixe)
        plus une consommation qui augmente avec la production (partie variable). Les salaires avec composante variable
        (salaire fixe + commissions) sont un autre exemple fréquent. Pour les besoins de l'analyse du seuil de rentabilité,
        il est nécessaire de décomposer chaque charge semi-variable en sa composante fixe et sa composante variable.
        Cette décomposition peut être estimée par analyse statistique (méthode des moindres carrés) ou par jugement
        basé sur l'expérience.
      </P>

      <Tableau
        titre="Classification des charges — Exemples pratiques"
        colonnes={['Charge', 'Type', 'Justification']}
        lignes={[
          ['Loyer des locaux', 'Fixe', 'Identique quel que soit le volume de production'],
          ['Salaire du directeur', 'Fixe', 'Remuneration mensuelle indépendante de l\'activité'],
          ['Amortissement machines', 'Fixe', 'Charge annuelle constante (amortissement linéaire)'],
          ['Assurance RC', 'Fixe', 'Prime annuelle invariable'],
          ['Abonnement téléphonique', 'Fixe', 'Forfait mensuel constant'],
          ['Interets hypothécaires', 'Fixe', 'Montant défini par le contrat de prêt'],
          ['Comptable externe', 'Fixe', 'Mandat annuel à prix convenu'],
          ['Matières premières', 'Variable', 'Proportionnel au volume de production'],
          ['Emballages', 'Variable', 'Un emballage par unité vendue'],
          ['Commissions de vente (5%)', 'Variable', 'Proportionnel au chiffre d\'affaires'],
          ['Frais de livraison par colis', 'Variable', 'Un envoi par commande cliente'],
          ['Sous-traitance production', 'Variable', 'Coût par piece produite'],
          ['Electricite production', 'Semi-variable', 'Abonnement fixe + consommation variable'],
          ['Salaire + bonus', 'Semi-variable', 'Salaire de base fixe + prime sur résultats'],
          ['Telephone mobile employés', 'Semi-variable', 'Forfait fixe + dépassements variables'],
          ['Entretien machines', 'Semi-variable', 'Contrat annuel + réparations selon usage'],
        ]}
      />

      {/* ─── 8.3 Marge de contribution ─── */}
      <H2>3. La marge de contribution (marge sur coûts variables)</H2>
      <P>
        La marge de contribution, également appelée marge sur coûts variables, est le concept central de l'analyse du
        seuil de rentabilité. Elle représente la différence entre le prix de vente d'un produit et son coût variable
        unitaire. En d'autres termes, c'est le montant qui reste, pour chaque unité vendue, une fois que les coûts
        directement liés a cette unité ont été couverts. Ce montant résiduel est la contribution de chaque vente a la
        couverture des charges fixes. C'est pourquoi on l'appelle marge de contribution : chaque unité vendue contribue
        à absorber les charges fixes.
      </P>

      <FormulaBox
        formula="MC unitaire = Prix de vente unitaire - Coût variable unitaire"
        description="La marge de contribution unitaire mesure la contribution de chaque unité vendue à la couverture des charges fixes"
      />

      <FormulaBox
        formula="Taux de MC = (MC totale / Chiffre d'affaires) x 100"
        description="Le taux de marge exprime la proportion du chiffre d'affaires qui contribue à couvrir les charges fixes"
      />

      <P>
        Prenons un exemple concret. Une entreprise vend des montres à CHF 150 l'unité. Le coût variable par montre
        (composants, assemblage, emballage, transport) est de CHF 65. La marge de contribution unitaire est donc de
        CHF 150 - CHF 65 = CHF 85 par montre. Cela signifie que chaque montre vendue génère CHF 85 qui servent à
        couvrir les charges fixes. Si les charges fixes mensuelles sont de CHF 42'500, l'entreprise a besoin de vendre
        suffisamment de montres pour que la somme des marges de contribution atteigne CHF 42'500. Le taux de marge
        de contribution est de 85 / 150 = 56.7%, ce qui signifie que 56.7 centimes de chaque franc de chiffre d'affaires
        contribuent à couvrir les charges fixes.
      </P>
      <P>
        L'importance de la marge de contribution va au-delà du simple calcul du seuil de rentabilité. Elle permet
        de comparer la rentabilité de différents produits, de prendre des décisions de prix et de prioritiser les
        efforts commerciaux. Un produit avec une marge de contribution élevée mérite plus d'attention commerciale
        qu'un produit à faible marge, car chaque vente supplémentaire apporte davantage à la couverture des charges
        fixes et au bénéfice. Si la marge de contribution unitaire est négative (le prix de vente ne couvre même pas
        les coûts variables), chaque vente supplémentaire aggrave la perte. Dans ce cas, plus l'entreprise vend, plus
        elle perd d'argent — une situation catastrophique qui exigé une révision immediate du prix ou une réduction
        des coûts variables.
      </P>

      <Note>
        Attention : une marge de contribution positive ne garantit pas un bénéfice. Elle garantit seulement que chaque
        vente contribue à la couverture des charges fixes. Le bénéfice n'apparaît que lorsque le total des marges de
        contribution dépasse le total des charges fixes, c'est-à-dire au-delà du seuil de rentabilité.
      </Note>

      {/* ─── 8.4 Le seuil de rentabilité ─── */}
      <H2>4. Le seuil de rentabilité (break-even point)</H2>

      <FormulaBox
        formula="Seuil en quantite = Charges fixes / MC unitaire"
        description="Nombre d'unités à vendre pour couvrir l'ensemble des charges (fixes + variables)"
      />

      <FormulaBox
        formula="Seuil en CHF = Charges fixes / Taux de MC"
        description="Chiffre d'affaires minimum nécessaire pour atteindre le point mort"
      />

      <P>
        Appliquons ces formules à un exemple détaillé. ALPINE BOULANGERIE est une boulangerie artisanale situee a
        Lausanne. Elle vend son pain signature au prix de CHF 4.50 la piece. Les coûts variables par pain comprennent
        CHF 0.80 de farine de qualité supérieure, CHF 0.25 de levure et autres ingredients, CHF 0.40 d'énergie
        directe du four, CHF 0.20 d'emballage et CHF 0.15 de divers (sachets, étiquettes). Le total des coûts
        variables par pain s'élève donc à CHF 1.80.
      </P>
      <P>
        La marge de contribution unitaire est de CHF 4.50 - CHF 1.80 = CHF 2.70 par pain. Cela signifie que chaque
        pain vendu génère CHF 2.70 pour couvrir les charges fixes. Les charges fixes mensuelles de la boulangerie
        sont les suivantes : loyer du local CHF 3'000, salaire du boulanger (fixe) CHF 4'500, assurances CHF 350,
        amortissement du four et du mobilier CHF 250. Le total des charges fixes mensuelles est de CHF 8'100.
      </P>
      <P>
        Le seuil de rentabilité en quantite est de CHF 8'100 / CHF 2.70 = 3'000 pains par mois. La boulangerie
        doit vendre exactement 3'000 pains par mois pour couvrir l'ensemble de ses charges, c'est-à-dire pour que
        son résultat soit exactement nul. En termes de chiffre d'affaires, cela représente 3'000 x CHF 4.50 =
        CHF 13'500 par mois. On peut vérifier avec la formule en CHF : CHF 8'100 / (2.70 / 4.50) = CHF 8'100 / 0.60 =
        CHF 13'500. Les deux méthodes donnent naturellement le même résultat.
      </P>
      <P>
        Vérification complete : au seuil de rentabilité (3'000 pains), les produits sont de 3'000 x CHF 4.50 = CHF 13'500.
        Les charges variables totales sont de 3'000 x CHF 1.80 = CHF 5'400. Les charges fixes totales sont de CHF 8'100.
        Le résultat est de CHF 13'500 - CHF 5'400 - CHF 8'100 = CHF 0.00. Le point mort est atteint. Si la boulangerie
        vend 3'001 pains, elle dégage un bénéfice de CHF 2.70. Si elle n'en vend que 2'999, elle subit une perte de CHF 2.70.
        Chaque pain au-delà du seuil rapporte la totalite de la marge de contribution en tant que bénéfice pur.
      </P>

      <BreakEvenChart
        chargesFixes={8100}
        tauxMC={0.60}
        seuilCA={13500}
        caReel={18000}
      />

      <P>
        Supposons qu'ALPINE BOULANGERIE vend en réalité 4'000 pains par mois, soit un chiffre d'affaires réel de
        CHF 18'000. Le bénéfice est de (4'000 - 3'000) x CHF 2.70 = 1'000 x CHF 2.70 = CHF 2'700 par mois.
        On peut le vérifier : CA CHF 18'000 - charges variables CHF 7'200 (4'000 x 1.80) - charges fixes CHF 8'100
        = CHF 2'700. La boulangerie dépasse son seuil de 1'000 pains, ce qui génère un bénéfice mensuel de CHF 2'700.
      </P>

      {/* ─── 8.5 La marge de sécurité ─── */}
      <H2>5. La marge de sécurité</H2>

      <FormulaBox
        formula="Marge de sécurité (MS) = CA réel - Seuil de rentabilité"
        description="Montant en CHF dont le CA peut baisser avant d'atteindre le point mort"
      />

      <FormulaBox
        formula="MS% = (CA réel - SR) / CA réel x 100"
        description="Proportion du CA qui constitue un coussin de sécurité"
      />

      <P>
        La marge de sécurité mesure l'écart entre le chiffre d'affaires réel de l'entreprise et son seuil de rentabilité.
        Elle répond à une question essentielle pour le dirigeant : de combien mon chiffre d'affaires peut-il diminuer
        avant que l'entreprise ne commence à perdre de l'argent ? Plus cette marge est élevée, plus l'entreprise est
        résiliente face àux fluctuations du marché, aux crises économiques ou à la perte d'un client important.
      </P>
      <P>
        Reprenons l'exemple d'ALPINE BOULANGERIE. Le chiffre d'affaires réel est de CHF 18'000 et le seuil de
        rentabilité est de CHF 13'500. La marge de sécurité en montant est de CHF 18'000 - CHF 13'500 = CHF 4'500.
        En pourcentage, MS% = CHF 4'500 / CHF 18'000 x 100 = 25%. Cela signifie que le chiffre d'affaires de la
        boulangerie peut baisser de 25% avant d'atteindre le point mort. Si les ventes chutent d'un quart (par
        exemple à cause de travaux dans la rue ou de l'ouverture d'un concurrent), la boulangerie sera encore a
        l'équilibré. Au-delà de 25% de baisse, elle commencera à perdre de l'argent.
      </P>
      <P>
        Les normes d'appréciation de la marge de sécurité varient selon les secteurs, mais en règle générale, une
        marge supérieure a 20% est considérée comme confortable et rassurante pour les prêteurs et les investisseurs.
        Une marge entre 10% et 20% est correcte mais nécessite une vigilance accrue. Une marge inférieure à 10% est
        fragile et expose l'entreprise à un risque significatif de perte en cas de ralentissement même modere de
        l'activité. Les entreprises presentant des marges de sécurité très faibles doivent envisager des mesures
        de réduction des charges fixes, d'augmentation des prix ou de diversification de leur activité.
      </P>

      {/* ─── 8.6 Le levier opérationnel ─── */}
      <H2>6. Le levier opérationnel</H2>

      <FormulaBox
        formula="Levier opérationnel (LO) = MC totale / Résultat d'exploitation"
        description="Facteur multiplicateur de l'impact d'une variation du CA sur le résultat"
      />

      <P>
        Le levier opérationnel mesure la sensibilite du résultat d'exploitation aux variations du chiffre d'affaires.
        Un levier opérationnel de 3 signifie que si le chiffre d'affaires augmenté de 1%, le résultat d'exploitation
        augmenté de 3%. C'est un effet multiplicateur qui fonctionne dans les deux sens : il amplifie les gains en
        période de croissance, mais aussi les pertes en période de recession. Ce levier est directement lié à la
        structure de coûts de l'entreprise, et plus spécifiquement à la proportion de charges fixes par rapport aux
        charges variables.
      </P>
      <P>
        Une entreprise avec une forte proportion de charges fixes possède un levier opérationnel élevé. Prenons
        l'exemple d'une compagnie aerienne : les charges fixes (avions, personnel navigant, maintenance, aeroport)
        représentent facilement 70-80% des charges totales. Si le nombre de passagers augmenté de 10%, les charges
        variables (repas, carburant marginal) augmentent peu, mais le résultat peut augmenter de 30-40%. Inversement,
        si le nombre de passagers chute de 10%, le résultat s'effondre dans les memes proportions. À l'opposé, un
        cabinet de conseil à des charges essentiellement variables (honoraires des consultants) et un levier opérationnel
        faible. Son résultat est plus stable, mais son potentiel de croissance du bénéfice est également plus limite.
      </P>
      <P>
        Illustrons par un exemple chiffre. L'entreprise MONTAGNA SA présente un chiffre d'affaires de CHF 500'000,
        des charges variables de CHF 200'000 et des charges fixes de CHF 200'000. La marge de contribution totale
        est de CHF 300'000 et le résultat d'exploitation est de CHF 100'000. Le levier opérationnel est donc de
        300'000 / 100'000 = 3. Si le CA augmenté de 10% (passe à CHF 550'000), les charges variables augmentent
        proportionnellement à CHF 220'000, les charges fixes restent à CHF 200'000, et le résultat passe a
        CHF 550'000 - CHF 220'000 - CHF 200'000 = CHF 130'000, soit une augmentation de 30% (3 fois l'augmentation
        du CA de 10%). De même, si le CA baisse de 10%, le résultat chute à CHF 70'000, soit une baisse de 30%.
      </P>

      <Note>
        Le levier opérationnel est un indicateur de risque. Les entreprises à fort levier (industrie lourde, hotellerie,
        transport aerien) offrent un potentiel de gain élevé en période favorable mais sont très vulnérables en période
        de baisse. Les entreprises à faible levier (services, conseil) sont plus stables mais offrent un potentiel de
        croissance du résultat plus modeste. La connaissance du levier opérationnel est essentielle pour évaluer le
        risque d'une entreprise et pour prendre des décisions d'investissement éclairées.
      </Note>

      {/* ─── 8.7 Applications pratiques ─── */}
      <H2>7. Applications pratiques et décisions</H2>
      <P>
        Le seuil de rentabilité est un outil de décision polyvalent qui intervient dans de nombreuses situations
        de gestion courante. Examinons quatre applications concretes qui illustrent sa puissance analytique et
        son utilite opérationnelle pour le dirigeant d'entreprise.
      </P>

      <H3>Application 1 : Decision de prix minimum</H3>
      <P>
        Un client important demande un rabais de 15% sur une commande de 500 unités. Le prix normal est de CHF 80
        et le coût variable unitaire est de CHF 35. A prix normal, la MC unitaire est de CHF 45. Avec le rabais
        de 15%, le prix passe à CHF 68, et la MC unitaire tombe à CHF 33. La commande génère donc une MC totale
        de 500 x CHF 33 = CHF 16'500. Tant que la MC unitaire reste positive (prix supérieur àux coûts variables),
        la commande contribue à la couverture des charges fixes et mérite d'être acceptée, à condition que le prix
        réduit ne cannibalise pas les ventes à prix normal.
      </P>

      <H3>Application 2 : Faire ou sous-traiter (make or buy)</H3>
      <P>
        L'entreprise fabrique un composant au coût variable de CHF 12 par piece, avec des charges fixes dédiées de
        CHF 60'000 par an. Un sous-traitant propose le même composant à CHF 18 par piece. A quel volume est-il
        préférable de fabriquer en interne ? Le seuil d'indifference est : CHF 60'000 / (CHF 18 - CHF 12) = 10'000
        pieces. Au-dessus de 10'000 pieces, la fabrication interne est plus économique car les charges fixes sont
        réparties sur un plus grand nombre de pieces. En dessous de 10'000 pieces, la sous-traitance est préférable.
      </P>

      <H3>Application 3 : Lancement d'un nouveau produit</H3>
      <P>
        L'entreprise envisage de lancer une nouvelle gamme de chocolats. L'investissement génère CHF 120'000 de
        charges fixes supplémentaires (amortissement machine, marketing, salaire chocolatier). Le prix de vente
        est de CHF 12 et le coût variable de CHF 4.80, soit une MC de CHF 7.20. Le seuil est de 120'000 / 7.20 =
        16'667 tablettes par an, soit environ 1'389 par mois. L'étude de marché estime les ventes a 2'000 tablettes
        par mois. La marge de sécurité serait de (2'000 - 1'389) / 2'000 = 30.6%, ce qui est confortable. Le
        lancement semble economiquement justifie.
      </P>

      <H3>Application 4 : Impact d'une restructuration</H3>
      <P>
        L'entreprise envisage de remplacer 3 employés de production (salaires fixes CHF 210'000) par un robot
        industriel (amortissement CHF 80'000, mais charges variables réduites de CHF 3 par unité). Les charges
        fixes baissent de CHF 130'000 (210'000 - 80'000), et la MC unitaire augmenté de CHF 3. Si l'entreprise
        vend 50'000 unités, l'économie annuelle est de CHF 130'000 + (50'000 x CHF 3) = CHF 280'000. Le seuil
        de rentabilité diminué grâce à la réduction des charges fixes et à l'augmentation de la MC unitaire.
      </P>

      {/* ─── 8.8 Exemple multi-produits ─── */}
      <H2>8. Exemple complet — Analyse multi-produits</H2>
      <P>
        La plupart des entreprises ne vendent pas un seul produit mais une gamme de produits ayant chacun un prix,
        un coût variable et donc une marge de contribution différents. Le calcul du seuil de rentabilité multi-produits
        nécessite de déterminer un taux de marge de contribution moyen pondéré par le mix de ventes. Illustrons cela
        avec CHOCOLATERIE DU LAC SA, qui fabrique deux produits.
      </P>

      <Tableau
        titre="Données par produit — CHOCOLATERIE DU LAC SA"
        colonnes={['Élément', 'Chocolat noir', 'Chocolat au lait']}
        lignes={[
          ['Prix de vente unitaire', 'CHF 8.00', 'CHF 6.00'],
          ['Coût variable unitaire', 'CHF 3.20', 'CHF 2.70'],
          ['MC unitaire', 'CHF 4.80', 'CHF 3.30'],
          ['Taux de MC', '60.0%', '55.0%'],
          ['Volume annuel prévu', '15\'000 tablettes', '25\'000 tablettes'],
          ['CA prévu', 'CHF 120\'000', 'CHF 150\'000'],
        ]}
      />

      <P>
        Les charges fixes communes s'élèvent à CHF 100'000 par an (loyer, administration, marketing général).
        Le chiffre d'affaires total prévu est de CHF 120'000 + CHF 150'000 = CHF 270'000. La MC totale prévue
        est de (15'000 x CHF 4.80) + (25'000 x CHF 3.30) = CHF 72'000 + CHF 82'500 = CHF 154'500. Le taux de
        MC moyen pondéré est de CHF 154'500 / CHF 270'000 = 57.2%. Le seuil de rentabilité en CHF est de
        CHF 100'000 / 0.572 = CHF 174'825, ce qui représente 64.7% du CA prévu.
      </P>
      <P>
        La marge de sécurité est de CHF 270'000 - CHF 174'825 = CHF 95'175, soit 35.2% du CA prévu. Cette marge
        est très confortable. Notons que si le mix de ventes change (par exemple, plus de chocolat au lait et moins
        de chocolat noir), le taux de MC moyen change également, car le chocolat noir à un taux plus élevé. Un
        glissement du mix vers le chocolat au lait abaisserait le taux de MC moyen et augmenterait le seuil de
        rentabilité. Cette sensibilite au mix produit est une information cruciale pour la stratégie commerciale.
      </P>

      <BreakEvenChart
        chargesFixes={100000}
        tauxMC={0.572}
        seuilCA={174825}
        caReel={270000}
      />

      <Tableau
        titre="Synthèse multi-produits"
        colonnes={['Indicateur', 'Valeur']}
        lignes={[
          ['Charges fixes totales', 'CHF 100\'000'],
          ['CA total prévu', 'CHF 270\'000'],
          ['MC totale prévue', 'CHF 154\'500'],
          ['Taux de MC moyen pondéré', '57.2%'],
          ['Seuil de rentabilité (CA)', 'CHF 174\'825'],
          ['Marge de sécurité', 'CHF 95\'175 (35.2%)'],
          ['Résultat prévu', 'CHF 54\'500'],
          ['Levier opérationnel', '2.83'],
        ]}
      />

      <Note>
        Retenez ces ordres de grandeur pour l'interprétation : une marge de sécurité supérieure a 20% est confortable,
        un levier opérationnel au-dessus de 3 indique une sensibilite élevée aux variations de volume. Le seuil de
        rentabilité n'est pas un chiffre statique — il évolue avec les prix, les coûts et la structure de charges.
        Le dirigeant doit le recalculer régulièrement pour adapter sa stratégie aux conditions changeantes du marché.
      </Note>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CHAPITRE 9 — ÉVALUATION D'ENTREPRISE
// ═══════════════════════════════════════════════════════════════════════════════

export function TabEvaluation() {
  return (
    <>
      {/* ─── 9.1 Introduction ─── */}
      <H2>1. Introduction — Combien vaut une entreprise ?</H2>
      <P>
        La question de la valeur d'une entreprise se pose dans de nombreuses situations de la vie économique et
        juridique. Lors d'une vente ou d'une acquisition, l'acheteur et le vendeur doivent s'accorder sur un prix,
        qui résulte d'une négociation fondée sur des évaluations respectives. Dans le cadre d'une succession, les
        héritiers doivent connaître la valeur de l'entreprise familiale pour partager équitablement le patrimoine.
        En cas de divorce, l'entreprise détenue par l'un des conjoints doit être évaluée pour le calcul de la
        liquidation du régime matrimonial. Les autorités fiscales évaluent les entreprises pour déterminer l'impôt
        sur la fortune des actionnaires, et les sociétés qui envisagent une introduction en bourse (IPO) doivent
        établir un prix d'émission fondé sur une évaluation rigoureuse.
      </P>
      <P>
        Il est fondamental de comprendre que la valeur d'une entreprise n'est pas une donnée objective et unique.
        Elle dépend de la méthode d'évaluation choisie, des hypothèses retenues par l'évaluateur, de la perspective
        adoptée (acheteur, vendeur, fisc) et du contexte de la transaction. Deux évaluateurs compétents appliquant
        des méthodes différentes ou des hypothèses différentes arriveront à des valeurs différentes. C'est pourquoi
        la bonne pratique consiste toujours à utiliser plusieurs méthodes et à exprimer le résultat sous forme de
        fourchette plutôt que de chiffre unique. Un évaluateur qui annonce "cette entreprise vaut exactement CHF
        1'234'567" fait preuve d'une précision illusoire qui ne reflète pas la réalité inhérente du processus
        d'évaluation.
      </P>
      <P>
        Trois approches fondamentales structurent le domaine de l'évaluation d'entreprise. L'approche patrimoniale
        (aussi appelée approche substantielle ou Substanzwert en allemand) répond à la question : que possède
        l'entreprise ? Elle évalue les actifs nets de l'entreprise à leur valeur réelle. L'approche par le rendement
        (Ertragswert) répond à la question : que gagne l'entreprise ? Elle capitalise la capacité bénéficiaire pour
        déterminer la valeur. L'approche par le marché répond à la question : que valent les entreprises comparables ?
        Elle utilise les multiples de valorisation observés sur le marché. Chacune de ces approches a ses forces et
        ses faiblesses, et c'est leur combinaison qui permet l'estimation la plus fiable.
      </P>

      {/* ─── 9.2 Valeur substantielle ─── */}
      <H2>2. Valeur substantielle (valeur intrinsèque / Substanzwert)</H2>

      <FormulaBox
        formula="Valeur substantielle = Fonds propres comptables + Réserves latentes nettes"
        description="Valeur réelle du patrimoine net de l'entreprise, corrigée des sous-évaluations comptables"
      />

      <P>
        La valeur substantielle représente le patrimoine réel de l'entreprise, c'est-à-dire la valeur de ses actifs
        diminuée de ses dettes, le tout évalué à des valeurs aussi proches que possible de la réalité économique.
        Le point de départ est la valeur comptable des fonds propres telle qu'elle figure au bilan. Cependant, les
        valeurs comptables sont rarement égales aux valeurs réelles, car la comptabilité suit des règles de prudence
        qui conduisent systématiquement à sous-évaluer les actifs. C'est le phénomène des réserves latentes.
      </P>
      <P>
        Les réserves latentes résultent de la différence entre la valeur réelle (de marché) d'un actif et sa valeur
        comptable. Elles naissent de trois mécanismes principaux. Premièrement, les amortissements excessifs : lorsqu'une
        machine achetée CHF 200'000 est amortie à CHF 50'000 au bilan alors qu'elle vaut encore CHF 90'000 sur le
        marché de l'occasion, la réserve latente est de CHF 40'000. Deuxièmement, les immeubles sous-évalués : un
        immeuble acquis il y a 20 ans pour CHF 500'000 et amorti à CHF 300'000 au bilan peut valoir CHF 900'000
        sur le marché immobilier actuel, générant une réserve latente de CHF 600'000. Troisièmement, les provisions
        excédentaires : une provision pour litiges de CHF 80'000 dont le risque réel est estimé à CHF 50'000 contient
        une réserve latente de CHF 30'000.
      </P>
      <P>
        Il est important de prendre en compte l'impôt latent sur les réserves latentes. Si l'entreprise devait
        effectivement réaliser ces réserves latentes (par exemple en vendant l'immeuble), elle devrait payer un
        impôt sur le gain. Ce taux d'imposition latent est généralement estimé entre 15% et 25% selon le canton
        et la nature du gain. En pratique, un taux de 20% est fréquemment utilisé comme approximation pour les
        évaluations en Suisse. Les réserves latentes nettes d'impôt s'ajoutent aux fonds propres comptables pour
        donner la valeur substantielle.
      </P>

      <P>
        Appliquons cette méthode a ALPINE TECH SA. Les fonds propres comptables figurant au bilan s'élèvent a
        CHF 800'000. L'analyse détaillée des actifs révèle les réserves latentes suivantes. L'immeuble commercial,
        inscrit au bilan pour CHF 400'000, à une valeur de marché estimée par un expert immobilier à CHF 550'000,
        soit une réserve latente de CHF 150'000. Une machine de production, inscrite à CHF 60'000 après amortissement,
        possède une valeur réelle d'utilisation de CHF 100'000, soit une réserve latente de CHF 40'000. Enfin, une
        provision pour risques de CHF 80'000 est jugée excédentaire de CHF 30'000 par rapport au risque réel estimé.
      </P>

      <Tableau
        titre="Calcul de la valeur substantielle — ALPINE TECH SA"
        colonnes={['Élément', 'Montant CHF']}
        lignes={[
          ['Fonds propres comptables', '800\'000'],
          ['Réserve latente immeuble', '+150\'000'],
          ['Réserve latente machine', '+40\'000'],
          ['Provision excédentaire', '+30\'000'],
          ['Total réserves latentes brutes', '220\'000'],
          ['Impôt latent (20%)', '-44\'000'],
          ['Réserves latentes nettes', '176\'000'],
          ['Valeur substantielle', '976\'000'],
        ]}
      />

      <P>
        La valeur substantielle d'ALPINE TECH SA est estimée à CHF 976'000, soit CHF 176'000 de plus que les fonds
        propres comptables. Cette méthode présente l'avantage d'être relativement objective car elle se fonde sur
        des valeurs d'actifs constatables et vérifiables. Elle est particulièrement adaptee pour les entreprises dont
        la valeur réside principalement dans leur patrimoine immobilier ou materiel (sociétés immobilieres, entreprises
        industrielles à forte base d'actifs). En revanche, elle présente une limitation majeure : elle ignore totalement
        la capacité bénéficiaire de l'entreprise. Deux entreprises possedant exactement les memes actifs peuvent avoir
        des performances très différentes selon la qualité de leur management, de leur stratégie commerciale et de leur
        positionnement de marché. La valeur substantielle ne capture pas cette différence.
      </P>

      {/* ─── 9.3 Valeur de rendement ─── */}
      <H2>3. Valeur de rendement (Ertragswert)</H2>

      <FormulaBox
        formula="Valeur de rendement = Bénéfice net moyen / Taux de capitalisation"
        description="Valeur de l'entreprise basee sur sa capacité à générer des profits futurs"
      />

      <P>
        La valeur de rendement repose sur un principe simple et puissant : une entreprise vaut ce qu'elle rapporte.
        Plus précisément, la valeur d'une entreprise est egale à la valeur actuelle de tous ses benefices futurs.
        Si l'on suppose que l'entreprise générera un bénéfice stable et perpétuel, cette valeur actuelle se calculé
        en divisant le bénéfice annuel par un taux de capitalisation (aussi appelé taux d'actualisation ou taux de
        rendement exigé). Ce taux représente le rendement que l'investisseur exigé pour son capital, compte tenu du
        risque associe à l'entreprise.
      </P>
      <P>
        Le bénéfice net moyen est généralement calculé sur la base des trois a cinq derniers exercices, après
        elimination des éléments exceptionnels qui ne sont pas représentatifs de la capacité bénéficiaire récurrente.
        Par exemple, si l'entreprise a réalisé un gain exceptionnel de CHF 200'000 sur la vente d'un immeuble
        en 2024, ce montant sera exclu du calcul car il ne se reproduira pas chaque année. De même, une provision
        exceptionnelle pour un litige unique sera retraitee. L'objectif est d'obtenir un bénéfice représentatif de
        la performance normale et récurrente de l'entreprise, que l'on appelle bénéfice normalisé.
      </P>
      <P>
        Le taux de capitalisation est la variable la plus sensible de l'évaluation. Il se compose d'un taux sans
        risque (base) auquel on ajoute une prime de risque spécifique à l'entreprise. En Suisse, le taux sans risque
        correspond généralement au rendement des obligations de la Confederation, qui se situe actuellement autour de
        1.5% (ce taux peut varier selon les conditions de marché). La prime de risque reflète les incertitudes propres
        à l'entreprise et à son secteur : volatilité du résultat, dépendance à un client cle, qualité du management,
        position concurrentielle, taille de l'entreprise. Pour les PME suisses, cette prime se situe typiquement entre
        4% et 8%, ce qui donne un taux de capitalisation total de 6% a 10%.
      </P>
      <P>
        La relation entre le taux de capitalisation et la valeur est inverse et fondamentale à comprendre. Un taux
        plus bas implique une valeur plus haute, car l'investisseur se contente d'un rendement plus faible et est
        donc prêt à payer plus cher. Un taux plus élevé implique une valeur plus basse, car l'investisseur exigé
        un rendement plus élevé pour compenser un risque percu comme plus important. Cette relation expliqué pourquoi
        le choix du taux fait l'objet de débats intenses lors des évaluations : une variation d'un ou deux points de
        pourcentage peut modifier la valeur de l'entreprise de manière très significative.
      </P>

      <P>
        Calculons la valeur de rendement d'ALPINE TECH SA. Les benefices nets des cinq derniers exercices sont les
        suivants : 2021 CHF 100'000, 2022 CHF 110'000, 2023 CHF 135'000, 2024 CHF 140'000 (dont CHF 15'000 de gain
        exceptionnel a exclure), 2025 CHF 130'000. Le bénéfice normalisé de 2024 est de CHF 125'000. La moyenne
        des benefices normalises est de (100'000 + 110'000 + 135'000 + 125'000 + 130'000) / 5 = CHF 120'000.
        Le taux de capitalisation retenu est de 8%, base sur un taux sans risque de 1.5% et une prime de risque de
        6.5% (entreprise de taille moyenne, secteur technologique, clientele diversifiée). La valeur de rendement est
        de CHF 120'000 / 0.08 = CHF 1'500'000.
      </P>

      <Tableau
        titre="Sensibilite de la valeur au taux de capitalisation"
        colonnes={['Taux', 'Calcul', 'Valeur de rendement']}
        lignes={[
          ['6%', '120\'000 / 0.06', 'CHF 2\'000\'000'],
          ['7%', '120\'000 / 0.07', 'CHF 1\'714\'286'],
          ['8%', '120\'000 / 0.08', 'CHF 1\'500\'000'],
          ['9%', '120\'000 / 0.09', 'CHF 1\'333\'333'],
          ['10%', '120\'000 / 0.10', 'CHF 1\'200\'000'],
        ]}
      />

      <P>
        Ce tableau de sensibilite illustre l'impact considérable du taux de capitalisation. Entre un taux de 6%
        et un taux de 10%, la valeur varie de CHF 2'000'000 à CHF 1'200'000, soit un écart de CHF 800'000 — plus
        que les fonds propres comptables de l'entreprise. C'est la raison pour laquelle le choix et la justification
        du taux font l'objet de discussions approfondies lors de toute évaluation sérieuse. L'avantage de la méthode
        par le rendement est qu'elle se concentre sur ce qui importe le plus pour un investisseur : la capacité de
        l'entreprise à générer des benefices. Sa limitation principale est sa dépendance à des hypothèses subjectives
        (taux de capitalisation) et au fait que les performances passees ne garantissent pas les performances futures.
      </P>

      {/* ─── 9.4 Méthode des praticiens ─── */}
      <H2>4. Méthode des praticiens (Praktikermethode)</H2>

      <FormulaBox
        formula="Valeur = (1 x Valeur substantielle + 2 x Valeur de rendement) / 3"
        description="Méthode standard utilisée par les autorités fiscales suisses — pondération 1:2"
      />

      <P>
        La méthode des praticiens est une méthode de synthèse spécifiquement suisse, largement utilisée par
        l'Administration fédérale des contributions (AFC) et les administrations fiscales cantonales pour
        l'évaluation des titres non cotés en vue de la détermination de l'impôt sur la fortune. Elle combine
        la valeur substantielle et la valeur de rendement dans une moyenne pondérée qui attribue un poids de 1
        à la valeur substantielle et un poids de 2 à la valeur de rendement, soit une pondération d'un tiers
        pour le patrimoine et de deux tiers pour la capacité bénéficiaire.
      </P>
      <P>
        Le choix de cette pondération 1:2 reflète une conviction économique fondamentale : la capacité d'une
        entreprise à générer des benefices est plus importante que la simple accumulation de patrimoine. Deux
        entreprises possedant exactement les memes actifs (même valeur substantielle) mais dont l'une réalisé
        un bénéfice deux fois supérieur à l'autre ne valent pas la même chose. L'entreprise plus rentable
        mérite une valeur plus élevée. Cependant, la valeur substantielle conserve un poids d'un tiers car elle
        représente un plancher de valeur : en cas de liquidation, c'est la valeur des actifs nets qui revient
        aux actionnaires. Elle fournit donc une garantie patrimoniale minimale.
      </P>

      <P>
        Pour ALPINE TECH SA, nous avons calculé une valeur substantielle de CHF 976'000 et une valeur de rendement
        de CHF 1'500'000. L'application de la méthode des praticiens donne : (1 x CHF 976'000 + 2 x CHF 1'500'000) / 3
        = (CHF 976'000 + CHF 3'000'000) / 3 = CHF 3'976'000 / 3 = CHF 1'325'333. Cette valeur de CHF 1'325'333
        se situe logiquement entre la valeur substantielle (CHF 976'000) et la valeur de rendement (CHF 1'500'000),
        mais plus proche de cette dernière en raison de la pondération 2:1 en sa faveur.
      </P>

      <Tableau
        titre="Comparaison des trois méthodes — ALPINE TECH SA"
        colonnes={['Méthode', 'Valeur', 'Ecart vs praticiens']}
        lignes={[
          ['Valeur substantielle', 'CHF 976\'000', '-CHF 349\'333 (-26%)'],
          ['Valeur de rendement', 'CHF 1\'500\'000', '+CHF 174\'667 (+13%)'],
          ['Méthode des praticiens', 'CHF 1\'325\'333', 'Référence'],
        ]}
      />

      <P>
        La comparaison des trois méthodes révèle que la valeur substantielle est inférieure à la méthode des praticiens,
        ce qui indique que l'entreprise à un goodwill positif — elle vaut plus que ses actifs nets grâce à sa capacité
        bénéficiaire. La valeur de rendement est supérieure, confirmant que c'est la capacité à générer des profits qui
        tire la valeur vers le haut. La méthode des praticiens offre un compromis équilibré qui intègre les deux
        perspectives. En pratique, ces trois valeurs définissent une fourchette raisonnable (CHF 976'000 à CHF 1'500'000)
        au sein de laquelle le prix de transaction sera négocié en fonction du rapport de force entre acheteur et vendeur.
      </P>

      {/* ─── 9.5 DCF ─── */}
      <H2>5. Discounted Cash Flow (DCF) — Introduction</H2>

      <FormulaBox
        formula="Valeur = Somme (CF libre année t / (1+WACC)^t) + Valeur terminale / (1+WACC)^n"
        description="Somme des flux de trésorerie libres futurs actualisés au coût moyen pondéré du capital"
      />

      <P>
        La méthode des flux de trésorerie actualisés (Discounted Cash Flow, DCF) est considérée comme la méthode de
        référence (gold standard) par les professionnels de la finance pour les transactions de grande envergure.
        Son principe est conceptuellement simple : la valeur d'une entreprise est egale à la somme de tout l'argent
        qu'elle va générer dans le futur, ramene en valeur d'aujourd'hui. Un franc reçu dans cinq ans vaut moins qu'un
        franc reçu aujourd'hui, car on aurait pu placer ce franc et percevoir des intérêts. L'actualisation est le
        mécanisme mathematique qui traduit cette préférence temporelle.
      </P>
      <P>
        Le cash-flow libre (free cash flow) est le montant d'argent que l'entreprise génère après avoir finance ses
        opérations courantes et ses investissements de maintien. Il se calculé en partant du cash-flow opérationnel
        (que nous avons étudié au chapitre 7) et en déduisant les investissements nécessaires au maintien de l'outil
        de production. C'est le cash qui reste effectivement disponible pour rémunérer les apporteurs de capitaux
        (actionnaires et prêteurs). Par exemple, si le CF opérationnel est de CHF 300'000 et les investissements de
        maintien sont de CHF 80'000, le CF libre est de CHF 220'000.
      </P>
      <P>
        Le taux d'actualisation utilisé dans la méthode DCF est le WACC (Weighted Average Cost of Capital), ou coût
        moyen pondéré du capital. Il représente le coût moyen de l'ensemble des financements de l'entreprise, pondéré
        par leur proportion respective dans la structure du capital. La formule du WACC combine le coût des capitaux
        propres (rendement exigé par les actionnaires) et le coût des capitaux étrangers (taux d'intérêt des emprunts,
        net d'impôt car les intérêts sont fiscalement déductibles).
      </P>
      <P>
        Prenons un exemple simplifié. ALPINE TECH SA à une structure de capital composee de 60% de capitaux propres et
        40% de capitaux étrangers. Le coût des capitaux propres (rendement exigé par les actionnaires, compte tenu du
        risque) est de 10%. Le coût des capitaux étrangers (taux d'intérêt moyen des emprunts) est de 4%, et le taux
        d'impôt sur les benefices est de 20%. Le WACC est de : 60% x 10% + 40% x 4% x (1 - 20%) = 6.0% + 1.28% = 7.28%.
        Ce taux de 7.28% est le taux auquel on actualisé les flux de trésorerie futurs.
      </P>

      <P>
        La valeur terminale représente la valeur de l'entreprise au-delà de la période de prévision explicite (généralement
        5 a 10 ans). Elle est calculée en supposant que les cash-flows continuent de croitre à un taux perpétuel modeste
        (généralement 1 a 2% par an, représentant l'inflation ou une croissance organique minimale). La formule de Gordon
        est utilisée : Valeur terminale = CF dernière année x (1 + g) / (WACC - g), ou g est le taux de croissance
        perpétuel. La valeur terminale représente souvent 60 a 80% de la valeur totale de l'entreprise, ce qui souligne
        l'importance des hypothèses à long terme dans cette méthode.
      </P>

      <Tableau
        titre="Exemple simplifié DCF — ALPINE TECH SA (5 ans)"
        colonnes={['Annee', 'CF libre prévu', 'Facteur actualisation', 'Valeur actuelle']}
        lignes={[
          ['2026', 'CHF 220\'000', '1 / 1.0728^1 = 0.9321', 'CHF 205\'072'],
          ['2027', 'CHF 235\'000', '1 / 1.0728^2 = 0.8688', 'CHF 204\'173'],
          ['2028', 'CHF 250\'000', '1 / 1.0728^3 = 0.8099', 'CHF 202\'472'],
          ['2029', 'CHF 260\'000', '1 / 1.0728^4 = 0.7549', 'CHF 196\'284'],
          ['2030', 'CHF 270\'000', '1 / 1.0728^5 = 0.7037', 'CHF 189\'988'],
          ['Somme CF actualisés', '', '', 'CHF 997\'989'],
          ['Valeur terminale actualisée', '270\'000 x 1.02 / (0.0728-0.02) / 1.0728^5', '', 'CHF 3\'680\'754'],
          ['Valeur totale (DCF)', '', '', 'CHF 4\'678\'743'],
        ]}
      />

      <P>
        Cet exemple illustre un point crucial : la valeur terminale actualisée (CHF 3'680'754) représente pres de
        79% de la valeur totale. Cela signifie que l'essentiel de la valeur repose sur les hypothèses à long terme
        (taux de croissance perpétuel et WACC). C'est à la fois la force et la faiblesse de la méthode DCF : elle
        est théoriquement la plus solide car elle s'appuie sur les flux de cash futurs, mais elle est extrêmement
        sensible aux hypothèses retenues. Une variation du WACC de 0.5% ou du taux de croissance de 0.5% peut modifier
        la valeur de plusieurs centaines de milliers de francs. C'est pourquoi la méthode DCF est toujours accompagnée
        d'une analyse de sensibilite montrant l'impact des variations d'hypothèses sur la valeur finale.
      </P>

      <Note>
        La méthode DCF est le standard pour les grandes transactions (fusions-acquisitions, introductions en bourse)
        car elle est la seule à prendre explicitement en compte les perspectives futures de l'entreprise. Pour les PME
        suisses, la méthode des praticiens reste prédominante en raison de sa simplicité et de son acceptation par
        les autorités fiscales. En pratique, un évaluateur serieux utilisera toujours plusieurs méthodes en parallèle
        et confrontera leurs résultats.
      </Note>

      {/* ─── 9.6 Multiples de marché ─── */}
      <H2>6. Multiples de marché (introduction)</H2>
      <P>
        L'approche par les multiples de marché repose sur un raisonnement par analogie : si des entreprises comparables
        se vendent à un certain multiple de leur bénéfice ou de leur EBITDA, alors notre entreprise devrait se vendre
        à un multiple similaire. Le multiple le plus connu est le P/E (Price to Earnings, rapport cours/bénéfice) utilisé
        pour les sociétés cotées en bourse. Si le P/E moyen du secteur est de 15, et que notre entreprise réalisé un
        bénéfice de CHF 120'000, sa valeur estimée serait de 15 x CHF 120'000 = CHF 1'800'000.
      </P>
      <P>
        Le multiple EV/EBITDA (Enterprise Value / Earnings Before Interest, Taxes, Depreciation and Amortization) est
        encore plus utilisé par les professionnels car il neutralise les differences de structure de financement et de
        politique d'amortissement entre entreprises. L'EBITDA d'ALPINE TECH SA est de CHF 350'000 (résultat d'exploitation
        avant amortissements). Si les entreprises comparables du secteur se négocient à un multiple EV/EBITDA de 6x,
        la valeur d'entreprise serait de 6 x CHF 350'000 = CHF 2'100'000. En déduisant les dettes nettes de CHF 400'000,
        la valeur des fonds propres serait de CHF 1'700'000.
      </P>
      <P>
        La principale limitation de cette méthode est la difficulté de trouver des entreprises véritablement comparables,
        en particulier pour les PME suisses. Les entreprises cotées sont généralement plus grandes, plus diversifiees et
        plus liquides que les PME, ce qui justifie un multiple supérieur. Il est courant d'appliquer une décote de 20 a
        40% aux multiples observés sur les marches cotés pour tenir compte de la taille inférieure, du risque plus élevé
        et de la moindre liquidité des PME. De plus, chaque entreprise à des caractéristiques uniques (positionnement,
        clientele, management) qui rendent la comparaison imparfaite.
      </P>

      {/* ─── 9.7 Synthèse et recommandations ─── */}
      <H2>7. Synthèse et recommandations</H2>

      <Tableau
        titre="Tableau récapitulatif des méthodes d'évaluation"
        colonnes={['Méthode', 'Avantages', 'Limites', 'Utilisation typique']}
        lignes={[
          ['Valeur substantielle', 'Objective, basee sur des actifs réels, plancher de valeur', 'Ignore la rentabilité, sous-évalué les entreprises performantes', 'Sociétés immobilieres, entreprises industrielles, liquidation'],
          ['Valeur de rendement', 'Focus sur la capacité bénéficiaire, pertinente pour l\'investisseur', 'Sensible au taux de capitalisation, passe ne vaut pas futur', 'Entreprises de services, PME rentables'],
          ['Méthode des praticiens', 'Equilibre patrimoine/rendement, acceptée par le fisc', 'Ponderation arbitraire, simplification', 'Évaluation fiscale, successions, divorces'],
          ['DCF', 'Theoriquement la plus solide, intègre les perspectives futures', 'Tres sensible aux hypothèses, complexe', 'Grandes transactions, M&A, IPO'],
          ['Multiples de marché', 'Simple, reflète les conditions de marché', 'Difficulte des comparables, décote PME', 'Estimation rapide, benchmarking'],
        ]}
      />

      <P>
        En pratique, un évaluateur professionnel n'utilisé jamais une seule méthode. Il appliqué systématiquement
        plusieurs approches et compare les résultats pour établir une fourchette de valeur. Cette fourchette reflète
        l'incertitude inhérente au processus d'évaluation et offre une base de discussion pour les negotiations.
        Pour ALPINE TECH SA, les différentes méthodes donnent des résultats compris entre CHF 976'000 (valeur
        substantielle) et CHF 1'800'000 (multiples), avec la méthode des praticiens à CHF 1'325'333 et la valeur
        de rendement à CHF 1'500'000. La fourchette de négociation se situerait probablement entre CHF 1'200'000
        et CHF 1'600'000, le prix final dependant du pouvoir de négociation de chaque partie.
      </P>
      <P>
        Plusieurs facteurs peuvent influencer la valeur d'une entreprise au-delà des chiffres purement financiers.
        Les facteurs de valorisation positifs comprennent une croissance régulière du chiffre d'affaires et des
        benefices, des marges superieures à la moyenne du secteur, une clientele diversifiée et fidele, un management
        compétent et une équipe de direction stable, une position de marché forte avec des barrières à l'entrée,
        des brevets ou une propriété intellectuelle protégée, et une bonne réputation de marque.
      </P>
      <P>
        A l'inverse, les facteurs de décote comprennent une forte dépendance à un seul client ou fournisseur (risque
        de concentration), la dépendance au dirigeant fondateur (key person risk), un secteur en déclin structural,
        des litiges en cours ou des risques juridiques non résolus, des investissements de maintien importants a
        prévoir, une obsolescence technologique des equipements, et une mauvaise réputation ou des problemes de
        qualité récurrents.
      </P>

      <WaterfallChart steps={[
        { label: 'Valeur substantielle', value: 976000, color: '#64748b' },
        { label: 'Méthode praticiens', value: 1325333, color: '#2563eb' },
        { label: 'Valeur de rendement', value: 1500000, color: '#10b981' },
        { label: 'Multiples (P/E)', value: 1800000, color: '#f59e0b' },
      ]} />

      <Note>
        Retenez cette règle d'or : la valeur d'une entreprise est un intervalle, pas un chiffre unique. La fourchette
        resultant de l'application de plusieurs méthodes donne le cadre de la négociation. Le prix de transaction final
        dépend du contexte (urgence de la vente, nombre d'acheteurs potentiels, synergies attendues) et du rapport de
        force entre les parties. Un bon évaluateur sait non seulement calculer des valeurs, mais aussi les interpréter,
        les justifier et les contextualiser dans le cadre spécifique de chaque transaction.
      </Note>
    </>
  );
}

const AnalyseChap7to9 = { TabFlux, TabSeuil, TabEvaluation };
export default AnalyseChap7to9;
