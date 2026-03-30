import React, { useState } from 'react';
import { P, H2, H3, Note, Loi, Tableau, TheoryLayout } from './TheoryUI';

// ─── ONGLET 1 : OBLIGATION DE TENIR UNE COMPTABILITÉ ─────────────────────────
function TabObligation() {
  return (
    <div>
      <H2>1. Source légale</H2>
      <P>En Suisse, les règles relatives à la comptabilité commerciale sont fixées au <strong>titre trente-deuxième du Code des obligations (CO)</strong>, en vigueur depuis le 1er janvier 2015. Ce titre couvre la présentation des comptes, les obligations de transparence et les devoirs de conservation des documents.</P>
      <P>La particularité du droit suisse : <strong>l'obligation de tenir une comptabilité dépend de la taille de l'entité, et non uniquement de sa forme juridique.</strong></P>

      <H2>2. Qui doit tenir une comptabilité complète ?</H2>
      <Loi art="Art. 957 al. 1 CO — Comptabilité complète obligatoire">
        Doivent tenir une comptabilité et présenter des comptes conformément au présent chapitre :<br />
        1. les entreprises individuelles et les sociétés de personnes qui ont réalisé un chiffre d'affaires supérieur à <strong>CHF 500'000</strong> lors du dernier exercice ;<br />
        2. les <strong>personnes morales</strong> (SA, Sàrl, associations, fondations, etc.).
      </Loi>

      <Note color="blue">
        <strong>Exemple pratique :</strong> Une Sàrl qui réalise CHF 80'000 de chiffre d'affaires est obligée de tenir une comptabilité complète — car elle est une personne morale. En revanche, un indépendant (raison individuelle) réalisant CHF 80'000 n'y est pas soumis — il relève de la comptabilité simplifiée.
      </Note>

      <H2>3. Comptabilité simplifiée — en dessous du seuil</H2>
      <Loi art="Art. 957 al. 2 CO — Comptabilité simplifiée">
        Les entreprises individuelles et sociétés de personnes avec un chiffre d'affaires inférieur à CHF 500'000 ne tiennent qu'une <strong>comptabilité des recettes et des dépenses</strong> ainsi qu'un état du patrimoine.
      </Loi>
      <P>En pratique, cela correspond à un journal de caisse ou un relevé bancaire annoté, accompagné d'un inventaire sommaire des actifs et passifs. Cette obligation minimale s'impose dès le premier franc de chiffre d'affaires.</P>

      <H2>4. Les grandes entreprises — obligations supplémentaires</H2>
      <P>Lorsqu'une société dépasse <strong>deux des trois seuils</strong> suivants sur deux exercices consécutifs, elle est soumise au contrôle ordinaire et doit produire des documents supplémentaires :</P>

      <Tableau
        caption="Seuils de contrôle ordinaire — art. 727 CO"
        headers={['Critère', 'Seuil', 'Obligation supplémentaire']}
        rows={[
          { cells: ['Total du bilan', "CHF 20 millions", 'Tableau des flux de trésorerie (art. 961b CO)'] },
          { cells: ['Chiffre d\'affaires', "CHF 40 millions", 'Rapport annuel (art. 961c CO)'] },
          { cells: ['Effectif moyen annuel', '250 EPT', 'Informations supplémentaires dans l\'annexe (art. 961 CO)'] },
        ]}
      />
      <Note color="yellow">2 des 3 seuils doivent être dépassés sur deux exercices consécutifs pour déclencher l'obligation de contrôle ordinaire. Une seule année de dépassement ne suffit pas.</Note>

      <H2>5. Conservation des documents</H2>
      <Loi art="Art. 958f CO — Durée de conservation">
        Les livres, les pièces comptables et les documents commerciaux doivent être conservés pendant <strong>10 ans</strong> à compter de la date de bouclement des comptes. La conservation peut se faire sur support papier, électronique ou tout autre support équivalent.
      </Loi>
      <P>Cette obligation s'applique à <strong>toutes les entités</strong>, y compris celles soumises uniquement à la comptabilité simplifiée. Factures, relevés bancaires, contrats, journaux d'écritures — tout doit être conservé et rester lisible et vérifiable durant toute la période légale.</P>

      <H2>6. Sanctions en cas de non-respect</H2>
      <Loi art="Art. 325 CP — Violation des obligations comptables">
        Celui qui, intentionnellement ou par négligence, aura contrevenu à l'obligation légale de tenir une comptabilité régulière ou de conserver ses livres sera puni d'une amende.
      </Loi>
      <Loi art="Art. 166 CP — En cas de faillite">
        Le débiteur en faillite qui a contrevenu à l'obligation de tenir une comptabilité régulière peut être puni d'une <strong>peine privative de liberté de trois ans au plus</strong> ou d'une peine pécuniaire.
      </Loi>
      <Note color="red">Les autorités fiscales disposent également de leurs propres dispositions pénales. Une comptabilité lacunaire ou inexistante est un signal fort d'alerte lors des contrôles fiscaux — avec des conséquences potentiellement lourdes.</Note>

      <H2>7. Récapitulatif selon la taille</H2>
      <Tableau
        headers={['Type d\'entité', 'CA annuel', 'Obligation', 'Documents requis']}
        rows={[
          { cells: ['Personne morale (SA, Sàrl, association...)', 'Peu importe', 'Comptabilité complète', 'Bilan, CR, Annexe'] },
          { cells: ['Indépendant / société de personnes', '≥ CHF 500\'000', 'Comptabilité complète', 'Bilan, CR, Annexe'] },
          { cells: ['Indépendant / société de personnes', '< CHF 500\'000', 'Comptabilité simplifiée', 'Recettes/dépenses + état patrimoine'] },
          { cells: ['Grande entreprise (2/3 seuils art. 727)', 'Selon seuils', 'Contrôle ordinaire', '+ Flux de trésorerie + Rapport annuel'], _bold: true },
        ]}
      />

      <H2>8. Points clés à retenir</H2>
      {[
        'Personne morale → comptabilité complète obligatoire quelle que soit sa taille.',
        'Indépendant / société de personnes < CHF 500\'000 → comptabilité simplifiée (recettes/dépenses).',
        'Indépendant / société de personnes ≥ CHF 500\'000 → comptabilité complète obligatoire.',
        'Grande entreprise (2/3 seuils) → obligations supplémentaires : flux de trésorerie + rapport annuel.',
        'Conservation → 10 ans pour toutes les pièces comptables, toutes entités confondues.',
        'Non-respect → amendes (art. 325 CP) et jusqu\'à 3 ans de prison en cas de faillite (art. 166 CP).',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>→</span><span>{pt}</span>
        </div>
      ))}
    </div>
  );
}

// ─── ONGLET 2 : PRINCIPES COMPTABLES ─────────────────────────────────────────
function TabPrincipes() {
  return (
    <div>
      <H2>1. Définition légale de la comptabilité</H2>
      <Loi art="Art. 957a CO — Définition">
        La comptabilité constitue la base de l'établissement des comptes. Elle enregistre les transactions et les autres faits nécessaires à la présentation du patrimoine, de la situation financière et des résultats de l'entreprise (situation économique).
      </Loi>
      <P>Cette définition est importante : la comptabilité ne se limite pas aux mouvements de trésorerie. Elle couvre l'ensemble des événements ayant une incidence économique sur l'entreprise, qu'ils aient ou non donné lieu à un paiement immédiat.</P>

      <H2>2. Le principe de régularité</H2>
      <Loi art="Art. 957a al. 2 CO — Principe de régularité">
        La comptabilité est tenue conformément au principe de régularité, qui comprend notamment : l'enregistrement intégral, fidèle et systématique des transactions ; la justification de chaque enregistrement par une pièce comptable ; la clarté ; l'adaptation à la nature et à la taille de l'entreprise ; la traçabilité des enregistrements comptables.
      </Loi>
      <Note color="blue">Une pièce comptable est tout document écrit — sur support papier, électronique ou équivalent — permettant de vérifier la transaction enregistrée. Sans pièce justificative, l'écriture n'est pas valide légalement.</Note>

      <H2>3. Les 7 principes d'établissement régulier des comptes</H2>
      <Loi art="Art. 958c al. 1 CO — Principes">
        L'établissement régulier des comptes est régi par les principes de clarté et intelligibilité, intégralité, fiabilité, importance relative, prudence, permanence des méthodes et interdiction de la compensation.
      </Loi>

      <Tableau
        caption="Les 7 principes — art. 958c CO"
        headers={['N°', 'Principe', 'Ce que ça signifie concrètement', 'Exemple de violation']}
        rows={[
          { cells: ['1', 'Clarté et intelligibilité', 'Les comptes doivent être compréhensibles par un tiers averti', 'Libellés vagues ou codifiés incompréhensibles'] },
          { cells: ['2', 'Intégralité', 'Toutes les opérations doivent être enregistrées, sans omission', 'Oublier de comptabiliser une facture reçue'] },
          { cells: ['3', 'Fiabilité', 'Les informations doivent correspondre à la réalité économique', 'Inscrire une valeur surévaluée pour un actif'] },
          { cells: ['4', 'Importance relative', 'Seules les informations significatives doivent être détaillées', 'Détailler à l\'excès des montants dérisoires'] },
          { cells: ['5', 'Prudence', 'En cas de doute, on privilégie l\'évaluation la plus conservative', 'Comptabiliser un gain latent non réalisé'] },
          { cells: ['6', 'Permanence des méthodes', 'Les méthodes d\'évaluation restent stables d\'un exercice à l\'autre', 'Changer de méthode d\'amortissement sans justification'] },
          { cells: ['7', 'Interdiction de compensation', 'On ne compense pas charges et produits, ni actifs et passifs', 'Présenter un solde net de TVA sans détailler IP et TVA due'] },
        ]}
      />

      <H2>4. Les 2 règles fondamentales</H2>
      <H3>4.1 — Continuité de l'exploitation (art. 958a CO)</H3>
      <Loi art="Art. 958a CO">
        Les comptes sont établis selon l'hypothèse que l'entreprise poursuivra ses activités dans un avenir prévisible. Si la cessation de tout ou partie de l'activité est envisagée dans les douze mois, les comptes sont dressés sur la base des <strong>valeurs de liquidation</strong>.
      </Loi>
      <P>Conséquence pratique : si une entreprise est en liquidation imminente, la valeur de ses actifs doit être réévaluée à ce que l'on pourrait en tirer en les vendant rapidement — souvent bien inférieur à la valeur comptable.</P>

      <H3>4.2 — Délimitation périodique (art. 958b CO)</H3>
      <Loi art="Art. 958b al. 1 CO">
        Les charges et les produits sont présentés conformément aux principes de la délimitation périodique et du rattachement des charges aux produits.
      </Loi>
      <P>Les charges et produits appartiennent à la période à laquelle ils se rapportent — pas à la période où l'argent bouge. C'est ce principe qui justifie les actifs et passifs transitoires à chaque bouclement.</P>
      <Note color="yellow">Exemple : une prime d'assurance de CHF 1'200 payée en janvier N pour l'année entière → CHF 100 de charge par mois. En décembre N, CHF 1'100 sont des actifs transitoires (charges payées d'avance pour N+1).</Note>

      <H2>5. Le principe de prudence — spécificité suisse</H2>
      <P>Le principe de prudence est dominant en droit suisse. Contrairement aux normes IFRS qui visent une image fidèle à la "juste valeur", le CO invite explicitement à <strong>sous-évaluer</strong> le patrimoine plutôt qu'à le surévaluer.</P>
      <Tableau
        headers={['Situation', 'Droit suisse (CO)', 'Normes IFRS']}
        rows={[
          { cells: ['Immeuble dont la valeur de marché a augmenté', 'Interdit de réévaluer (art. 960a CO)', 'Réévaluation possible à la juste valeur'] },
          { cells: ['Perte probable sur un client', 'Doit être provisionnée immédiatement', 'Doit être provisionnée (même principe)'] },
          { cells: ['Gain latent sur un titre coté', 'Autorisé de ne pas comptabiliser', 'Doit être comptabilisé en résultat'] },
          { cells: ['Amortissements supplémentaires', 'Autorisés (art. 960a al. 4 CO)', 'Non admis si non justifiés économiquement'] },
        ]}
      />
      <Note color="blue">Cette approche génère les <strong>réserves latentes</strong> — des richesses cachées non visibles dans le bilan officiel. C'est une particularité helvétique qui sera traitée dans le chapitre dédié.</Note>

      <H2>6. Le principe de non-compensation</H2>
      <P>Il est interdit de présenter un solde net entre des éléments qui devraient figurer séparément (art. 958c al. 1 ch. 7 CO). Ce principe est souvent mal appliqué en pratique.</P>
      <Tableau
        headers={['Situation', 'Correct', 'Incorrect (compensation interdite)']}
        rows={[
          { cells: ['TVA due et IP à récupérer', 'Compte 2200 et comptes 1170/1171 séparés', 'Présenter uniquement le solde net'] },
          { cells: ['Immeuble mixte occupé et loué', 'Loyer à soi-même + loyer tiers comptabilisés séparément', 'Inscrire uniquement la différence'] },
          { cells: ['Créance et dette envers le même client/four.', 'Deux postes distincts au bilan', 'Présenter uniquement le solde compensé'] },
        ]}
      />

      <H2>7. Points clés à retenir</H2>
      {[
        'La comptabilité reflète la réalité économique — pas seulement les flux de trésorerie.',
        '7 principes légaux : clarté, intégralité, fiabilité, importance relative, prudence, permanence, non-compensation.',
        '2 règles fondamentales : continuité de l\'exploitation et délimitation périodique.',
        'Le principe de prudence domine en droit suisse — on sous-évalue plutôt qu\'on surévalue.',
        'Toute écriture doit être justifiée par une pièce comptable.',
        'La non-compensation est obligatoire — charges et produits, actifs et passifs doivent figurer séparément.',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>→</span><span>{pt}</span>
        </div>
      ))}
    </div>
  );
}

// ─── ONGLET 3 : ÉLÉMENTS DE LA COMPTABILITÉ ──────────────────────────────────
function TabElements() {
  return (
    <div>
      <H2>1. Le rapport de gestion</H2>
      <Loi art="Art. 958 al. 2 CO — Comptes annuels">
        Les comptes sont présentés dans le rapport de gestion. Ce dernier contient les comptes annuels individuels qui se composent du <strong>bilan</strong>, du <strong>compte de résultat</strong> et de l'<strong>annexe</strong>.
      </Loi>
      <P>Toute entreprise soumise à l'obligation de tenir une comptabilité complète doit établir ces trois documents. Les grandes entreprises doivent en plus produire un tableau des flux de trésorerie et un rapport annuel.</P>

      <H2>2. Le bilan — structure légale minimale</H2>
      <Loi art="Art. 959 al. 1 CO">
        Le bilan reflète l'état du patrimoine et la situation financière de l'entreprise à la date du bilan. Il se compose de l'actif et du passif.
      </Loi>
      <Loi art="Art. 960a al. 1 et 2 CO — Évaluation des actifs">
        Lors de sa première comptabilisation, un actif est évalué au plus à son coût d'acquisition ou à son coût de revient. Lors des évaluations subséquentes, la valeur de l'actif ne peut être supérieure à son coût d'acquisition ou à son coût de revient.
      </Loi>

      <Tableau
        caption="Structure minimale du bilan — art. 959a CO"
        headers={['ACTIF', 'PASSIF']}
        rows={[
          { cells: ['1. Actifs circulants', '1. Capitaux étrangers à court terme'] },
          { cells: ['  a) Trésorerie et actifs cotés CT', '  a) Dettes résultant des achats'] },
          { cells: ['  b) Créances résultant des ventes', '  b) Dettes à CT portant intérêts'] },
          { cells: ['  c) Autres créances à CT', '  c) Autres dettes à CT'] },
          { cells: ['  d) Stocks et prestations non-facturées', '  d) Passifs de régularisation'] },
          { cells: ['  e) Actifs de régularisation', '2. Capitaux étrangers à long terme'] },
          { cells: ['2. Actifs immobilisés', '  a) Dettes à LT portant intérêts'] },
          { cells: ['  a) Immobilisations financières', '  b) Autres dettes à LT'] },
          { cells: ['  b) Participations', '  c) Provisions'] },
          { cells: ['  c) Immobilisations corporelles', '3. Capitaux propres'] },
          { cells: ['  d) Immobilisations incorporelles', '  a) Capital social'] },
          { cells: ['  e) Capital non libéré', '  b/c) Réserves légales'] },
          { cells: ['', '  d) Réserves facultatives'] },
          { cells: ['TOTAL ACTIF', 'TOTAL PASSIF'], _bold: true },
        ]}
      />
      <Note color="blue">Les chiffres de l'exercice précédent (N-1) doivent toujours figurer à côté des valeurs actuelles (N) — obligation de comparabilité (art. 958d al. 2 CO).</Note>

      <H2>3. Le compte de résultat — structure légale minimale</H2>
      <Loi art="Art. 959b CO — Structure minimale">
        Le compte de résultat par nature comporte au moins les postes suivants, indiqués séparément : produits nets des ventes, variation des stocks, charges de matériel, charges de personnel, autres charges d'exploitation, amortissements, charges et produits financiers, charges et produits hors exploitation, charges et produits exceptionnels, impôts directs, résultat de l'exercice.
      </Loi>

      <Tableau
        caption="Structure minimale du compte de résultat — art. 959b CO"
        headers={['Poste', 'Signe', 'Indicateur calculé']}
        rows={[
          { cells: ['Produits nets des ventes', '+', ''] },
          { cells: ['Variation des stocks de produits finis', '±', ''] },
          { cells: ['Charges de matériel', '−', ''] },
          { cells: ['→ Marge brute', '', ''], _bold: true },
          { cells: ['Charges de personnel', '−', ''] },
          { cells: ['Autres charges d\'exploitation', '−', ''] },
          { cells: ['→ Résultat avant amortissements', '', ''], _bold: true },
          { cells: ['Amortissements sur actif immobilisé', '−', ''] },
          { cells: ['Charges et produits financiers', '±', ''] },
          { cells: ['→ Résultat d\'exploitation', '', ''], _bold: true },
          { cells: ['Charges et produits hors exploitation', '±', ''] },
          { cells: ['Charges et produits exceptionnels', '±', ''] },
          { cells: ['→ Résultat avant impôts', '', ''], _bold: true },
          { cells: ['Impôts directs', '−', ''] },
          { cells: ['→ Résultat de l\'exercice (reporté au bilan)', '', ''], _bold: true },
        ]}
      />

      <H2>4. L'annexe aux comptes</H2>
      <Loi art="Art. 959c CO — Contenu de l'annexe">
        L'annexe complète et commente les informations données dans les comptes annuels. Elle contient notamment : les principes comptables appliqués, des informations détaillées sur certains postes, le montant global des réserves latentes dissoutes si la présentation du résultat s'en trouve sensiblement améliorée, et toutes les autres informations prescrites par la loi.
      </Loi>
      <P>Les <strong>entreprises individuelles et sociétés de personnes</strong> non soumises aux règles des grandes entreprises sont dispensées de l'annexe, à condition que le bilan et le compte de résultat contiennent toutes les informations nécessaires (art. 959c al. 3 CO).</P>

      <H2>5. Entités et personnes proches</H2>
      <Loi art="Art. 959a al. 4 CO — Parties liées">
        Les créances et les dettes envers les détenteurs de participations directes et indirectes, envers les organes et envers les sociétés dans lesquelles l'entreprise détient une participation doivent être présentées <strong>séparément</strong> dans le bilan ou dans l'annexe.
      </Loi>
      <Note color="yellow">En pratique : un prêt d'un actionnaire à sa société ne peut pas figurer comme une simple "dette fournisseur". Il doit apparaître dans une rubrique distincte identifiant la partie liée. Idem pour les créances sur filiales ou sociétés sœurs.</Note>

      <H2>6. Tableau des flux de trésorerie et rapport annuel</H2>
      <P>Ces deux documents sont obligatoires uniquement pour les <strong>grandes entreprises</strong> soumises au contrôle ordinaire (art. 961 CO).</P>
      <Loi art="Art. 961b CO — Tableau des flux de trésorerie">
        Le tableau des flux de trésorerie présente séparément les flux liés aux activités d'exploitation, aux activités d'investissement et aux activités de financement.
      </Loi>
      <Loi art="Art. 961c CO — Rapport annuel">
        Le rapport annuel présente la marche des affaires et la situation économique de l'entreprise. Il précise notamment : la moyenne annuelle des emplois à plein temps, l'évaluation des risques, l'état des commandes, les activités de R&D, les événements exceptionnels et les perspectives.
      </Loi>

      <H2>7. Points clés à retenir</H2>
      {[
        'Comptes annuels obligatoires : bilan + compte de résultat + annexe (art. 958 CO).',
        'Actif ≤ coût d\'acquisition — jamais réévalué à la hausse sauf exception (art. 960a CO).',
        'Les chiffres N-1 doivent toujours figurer à côté des chiffres N (art. 958d CO).',
        'L\'annexe est obligatoire pour les personnes morales — facultative pour les indépendants sous le seuil.',
        'Les transactions avec des parties liées (actionnaires, filiales) doivent être présentées séparément.',
        'Tableau des flux et rapport annuel → grandes entreprises uniquement (art. 961 CO).',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>→</span><span>{pt}</span>
        </div>
      ))}
    </div>
  );
}

// ─── VUE PRINCIPALE ───────────────────────────────────────────────────────────
const TABS = [
  { id: 'obligation', label: 'Obligation de tenir une comptabilité' },
  { id: 'principes',  label: 'Principes comptables' },
  { id: 'elements',   label: 'Éléments de la comptabilité' },
];

export default function PrescriptionsView() {
  const [tab, setTab] = useState('obligation');
  return (
    <TheoryLayout
      title="1. Prescriptions légales"
      tag="tag-base"
      tagLabel="Droit CO"
      meta="CO 957ss · CP 325 · CP 166"
      tabs={TABS}
      activeTab={tab}
      onTabChange={setTab}
    >
      {tab === 'obligation' && <TabObligation />}
      {tab === 'principes'  && <TabPrincipes />}
      {tab === 'elements'   && <TabElements />}
    </TheoryLayout>
  );
}