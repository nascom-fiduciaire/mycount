import React from 'react';
import { P, H3, Note, Loi, Tableau, Ecriture, TheoryLayout, Section } from './TheoryUI';

// ─── ONGLET 1 : FORMES JURIDIQUES ──────────────────────────────────────────────
function TabFormesJuridiques() {
  return (
    <div>
      <Section title="1. Droit comptable et droit des societes" defaultOpen={true}>
      <P>En Suisse, deux branches du droit encadrent les societes commerciales. Le <strong>droit comptable</strong> (art. 957ss CO) fixe les obligations en matiere de tenue des comptes, de presentation des etats financiers et de principes d'evaluation. Le <strong>droit des societes commerciales</strong> (art. 552ss CO) regle la creation, le fonctionnement, la gouvernance et la dissolution des differentes formes juridiques.</P>
      <P>Ces deux corps de regles se completent : le droit des societes impose des exigences specifiques (capital minimum, reserves legales, organes obligatoires) tandis que le droit comptable fournit le cadre technique pour rendre compte de la situation financiere.</P>

      <Loi art="Art. 957 al. 1 CO">
        Les entreprises individuelles et les societes qui ont realise un chiffre d'affaires de CHF 500'000 au moins au cours du dernier exercice sont tenues de tenir une comptabilite et de presenter des comptes.
      </Loi>
      </Section>

      <Section title="2. Societes de personnes" defaultOpen={false}>
      <P>Les societes de personnes n'ont <strong>pas de personnalite juridique propre</strong>. Les associes sont personnellement engages par les dettes de la societe. Il n'y a pas de capital minimum legal, et la comptabilite suit les regles generales de l'art. 957 CO.</P>

      <H3>Societe en nom collectif (SNC) — art. 552ss CO</H3>
      <Loi art="Art. 552 CO">
        La societe en nom collectif est celle que contractent deux ou plusieurs personnes physiques, sous une raison sociale, pour exploiter un commerce, une industrie ou une autre entreprise en la forme commerciale.
      </Loi>
      <P>Caracteristiques de la responsabilite des associes :</P>
      {[
        'Responsabilite personnelle : les associes repondent sur leur patrimoine prive.',
        'Responsabilite illimitee : pas de plafond au montant de la responsabilite.',
        'Responsabilite solidaire : chaque associe peut etre recherche pour la totalite des dettes.',
        'Responsabilite subsidiaire : le creancier doit d\'abord tenter de se faire payer par la societe (art. 568 CO).',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}

      <H3>Societe en commandite — art. 594ss CO</H3>
      <Loi art="Art. 594 CO">
        La societe en commandite est celle que contractent deux ou plusieurs personnes pour exploiter un commerce sous une raison sociale, lorsque l'un des associes au moins est indefiniment responsable (commandite) et qu'un ou plusieurs autres ne sont tenus qu'a concurrence d'un apport determine (commanditaires).
      </Loi>
      <Tableau
        headers={['Type d\'associe', 'Responsabilite', 'Role dans la gestion']}
        rows={[
          { cells: ['Commandite(s)', 'Personnelle, illimitee, solidaire, subsidiaire', 'Gestion et representation de la societe'] },
          { cells: ['Commanditaire(s)', 'Limitee au montant de l\'apport inscrit au RC', 'Aucune gestion (sauf procuration)'] },
        ]}
      />
      </Section>

      <Section title="3. Personnes morales — societes de capitaux" defaultOpen={false}>
      <P>Les personnes morales ont une <strong>personnalite juridique distincte</strong> de celle de leurs membres. La responsabilite des actionnaires ou associes est limitee a leur apport. Ces societes sont soumises a des exigences specifiques en matiere de capital, de gouvernance et de presentation des comptes.</P>

      <H3>Societe anonyme (SA) — art. 620ss CO</H3>
      <Loi art="Art. 620 al. 1 CO">
        La societe anonyme est celle qui se forme sous une raison sociale, dont le capital-actions est divise en actions et dont les dettes ne sont garanties que par l'actif social.
      </Loi>
      {[
        'Capital-actions minimum : CHF 100\'000.',
        'Valeur nominale minimale par action : CHF 0.01 (depuis la revision 2023).',
        'Liberation minimale : 20% de la valeur nominale par action, mais au minimum CHF 50\'000 au total.',
        'Responsabilite des actionnaires limitee a leur apport (prix de souscription des actions).',
        'Organes obligatoires : assemblee generale (AG), conseil d\'administration (CA), organe de revision (sauf opting-out).',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}

      <H3>Societe a responsabilite limitee (Sarl) — art. 772ss CO</H3>
      <Loi art="Art. 772 al. 1 CO">
        La societe a responsabilite limitee est une societe de capitaux a caractere personnel que forment une ou plusieurs personnes ou societes commerciales. Son capital social est fixe dans les statuts.
      </Loi>
      {[
        'Capital social minimum : CHF 20\'000 (entierement libere a la fondation).',
        'Valeur nominale minimale par part sociale : CHF 100.',
        'Responsabilite des associes limitee au capital social.',
        'Les parts sociales sont nominatives et inscrites dans le registre des parts.',
        'Organes : assemblee des associes, gerance, organe de revision (sauf opting-out).',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}
      </Section>

      <Section title="4. Tableau comparatif des formes juridiques" defaultOpen={false}>
      <Tableau
        caption="Comparaison des principales formes juridiques suisses"
        headers={['Forme juridique', 'Responsabilite', 'Capital minimum', 'Dispositions legales']}
        rows={[
          { cells: ['SNC', 'Personnelle, illimitee, solidaire, subsidiaire', 'Aucun minimum legal', 'Art. 552ss CO'] },
          { cells: ['Societe en commandite', 'Commandites : illimitee / Commanditaires : limitee a l\'apport', 'Aucun minimum legal', 'Art. 594ss CO'] },
          { cells: ['SA', 'Limitee a l\'apport', 'CHF 100\'000', 'Art. 620ss CO'] },
          { cells: ['Sarl', 'Limitee au capital social', 'CHF 20\'000', 'Art. 772ss CO'] },
        ]}
      />
      </Section>

      <Section title="5. Points cles a retenir" defaultOpen={false}>
      {[
        'Societes de personnes : pas de personnalite juridique propre, responsabilite personnelle des associes.',
        'Societes de capitaux (SA, Sarl) : personnalite juridique distincte, responsabilite limitee a l\'apport.',
        'SA : capital-actions min CHF 100\'000, liberation min 20% par action et min CHF 50\'000 total.',
        'Sarl : capital social min CHF 20\'000, entierement libere a la fondation.',
        'Le droit comptable (art. 957ss CO) s\'applique a toutes les formes juridiques; le droit des societes ajoute des regles specifiques.',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}
      </Section>
    </div>
  );
}

// ─── ONGLET 2 : FONDATION SA ───────────────────────────────────────────────────
function TabFondation() {
  return (
    <div>
      <Section title="1. L'acte constitutif" defaultOpen={true}>
      <P>La fondation d'une SA requiert un <strong>acte constitutif en la forme authentique</strong> (acte notarie). Cet acte contient la declaration de fondation, l'adoption des statuts, la nomination des organes et la declaration des fondateurs.</P>

      <Loi art="Art. 629 al. 1 CO">
        La societe est constituee des que les fondateurs declarent, dans un acte passe en la forme authentique, fonder une societe anonyme, arretent le texte des statuts et designent les organes.
      </Loi>

      <P>Les statuts doivent obligatoirement mentionner :</P>
      {[
        'La raison sociale et le siege de la societe.',
        'Le but social.',
        'Le montant du capital-actions et les apports effectues.',
        'Le nombre, la valeur nominale et l\'espece des actions.',
        'La convocation de l\'assemblee generale et le droit de vote des actionnaires.',
        'Les organes charges de la gestion et de la revision.',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}
      </Section>

      <Section title="2. Capital minimum et liberation" defaultOpen={false}>
      <Loi art="Art. 621 CO">
        Le capital-actions ne peut etre inferieur a 100 000 francs.
      </Loi>
      <Loi art="Art. 632 CO">
        Lors de la constitution, chaque action doit etre liberee a hauteur de 20 pour cent au moins de sa valeur nominale, mais dans tous les cas a concurrence de 50 000 francs au moins.
      </Loi>

      <Note color="blue">
        <strong>Regle cle :</strong> Liberation minimale = max(20% de chaque action, CHF 50'000 au total). Si le capital est de CHF 100'000, il faut liberer au minimum CHF 50'000 (soit 50%). Si le capital est de CHF 500'000, la liberation de 20% = CHF 100'000 suffit.
      </Note>
      </Section>

      <Section title="3. Fondation avec apports en especes" defaultOpen={false}>
      <P>Exemple : <strong>SwiSSwatch SA</strong> est fondee avec un capital-actions de CHF 1'000'000, divise en 1'000 actions de CHF 1'000 chacune. Les fondateurs liberent 50% du capital.</P>

      <H3>Phase 1 : Souscription des actions</H3>
      <P>Les fondateurs s'engagent a souscrire l'ensemble du capital-actions. On enregistre la creance envers les actionnaires.</P>
      <Ecriture debit="1850 Actionnaires" credit="2800 Capital-actions" montant="1'000'000" />
      <Note color="green">Le compte 1850 Actionnaires represente la creance de la societe envers ses actionnaires pour le capital souscrit mais pas encore verse.</Note>

      <H3>Phase 2 : Liberation (versement de 50%)</H3>
      <P>Les actionnaires versent CHF 500'000 sur le compte bancaire de consignation de la societe.</P>
      <Ecriture debit="1020 Banque" credit="1850 Actionnaires" montant="500'000" />
      <P>Apres cette ecriture, le compte 1850 Actionnaires presente un solde debiteur de CHF 500'000, representant le <strong>capital non libere</strong> (capital appele mais pas encore verse, ou capital qui sera appele plus tard).</P>

      <H3>Phase 3 : Frais de fondation</H3>
      <P>Les frais de fondation (notaire, registre du commerce, inscription) s'elevent a CHF 8'500.</P>
      <Ecriture debit="2979 Frais de fondation" credit="1020 Banque" montant="8'500" />
      <Note color="yellow">
        Les frais de fondation peuvent etre imputes directement aux fonds propres (compte 2979) ou comptabilises comme charge extraordinaire (compte 8600). Le choix depend de la politique comptable adoptee.
      </Note>

      <H3>Bilan apres fondation</H3>
      <Tableau
        caption="Bilan d'ouverture — SwiSSwatch SA"
        headers={['Actif', 'Montant CHF', 'Passif', 'Montant CHF']}
        rows={[
          { cells: ['1020 Banque', '491\'500', '2800 Capital-actions', '1\'000\'000'] },
          { cells: ['1850 Actionnaires (capital non libere)', '500\'000', '2979 Frais de fondation', './. 8\'500'] },
          { cells: ['', '', '', ''], _bold: true },
          { cells: ['Total actif', '991\'500', 'Total passif', '991\'500'], _bold: true },
        ]}
      />
      </Section>

      <Section title="4. Fondation avec apports en nature" defaultOpen={false}>
      <P>Il est possible de liberer le capital par des apports en nature (immeubles, machines, stocks, vehicules, etc.) plutot que par des versements en especes. Ces apports doivent etre evalues et le rapport de fondation doit en attester la valeur.</P>

      <Loi art="Art. 634 CO">
        Lorsque des apports en nature sont effectues, l'acte constitutif mentionne l'objet, son evaluation, le nom de l'apporteur et les actions qui lui sont attribuees.
      </Loi>

      <P>Exemple : un fondateur apporte une machine evaluee a CHF 200'000 et un immeuble evalue a CHF 300'000. Le solde de CHF 500'000 est libere en especes.</P>
      <Ecriture debit="1850 Actionnaires" credit="2800 Capital-actions" montant="1'000'000" />
      <Ecriture debit="1500 Machines" credit="1850 Actionnaires" montant="200'000" />
      <Ecriture debit="1600 Immeubles" credit="1850 Actionnaires" montant="300'000" />
      <Ecriture debit="1020 Banque" credit="1850 Actionnaires" montant="500'000" />

      <Note color="blue">
        Apres ces ecritures, le compte 1850 est solde (CHF 0) : le capital est entierement libere. L'actif de la societe se compose de machines, d'un immeuble et de liquidites.
      </Note>
      </Section>

      <Section title="5. Liberation ulterieure du capital non libere" defaultOpen={false}>
      <P>Si le capital n'a ete libere qu'a 50% lors de la fondation, le conseil d'administration peut decider d'appeler le solde a tout moment. Les actionnaires sont alors tenus de verser le montant restant.</P>
      <Ecriture debit="1020 Banque" credit="1850 Actionnaires" montant="500'000" />
      <Note color="green">Cette ecriture solde le compte 1850 et porte le solde bancaire au montant total du capital (moins les frais).</Note>
      </Section>

      <Section title="6. Points cles a retenir" defaultOpen={false}>
      {[
        'L\'acte constitutif doit etre passe en la forme authentique (notaire).',
        'Capital-actions minimum CHF 100\'000, liberation min 20% par action et min CHF 50\'000.',
        'Le compte 1850 Actionnaires represente le capital souscrit non encore verse.',
        'Les apports en nature doivent etre evalues et mentionnes dans l\'acte constitutif.',
        'Les frais de fondation sont imputes aux fonds propres (2979) ou en charges exceptionnelles (8600).',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}
      </Section>
    </div>
  );
}

// ─── ONGLET 3 : DISTRIBUTION DU BENEFICE ────────────────────────────────────────
function TabDistribution() {
  return (
    <div>
      <Section title="1. Presentation des comptes d'une SA" defaultOpen={true}>
      <P>Les comptes annuels d'une SA comprennent le bilan, le compte de resultat et l'annexe. Le bilan doit presenter au minimum les postes prevus par la loi, et le compte de resultat peut etre presente par nature ou par fonction.</P>

      <Loi art="Art. 959a CO">
        L'actif du bilan est presente par ordre de liquidite croissante, en distinguant au moins les actifs circulants et les actifs immobilises.
      </Loi>
      <Loi art="Art. 959b CO">
        Le compte de resultat presente separement les produits et les charges lies a l'activite principale et ceux qui ne le sont pas.
      </Loi>

      <H3>Structure des capitaux propres d'une SA</H3>
      <Tableau
        caption="Comptes de capitaux propres — nomenclature PME"
        headers={['Compte', 'Designation', 'Description']}
        rows={[
          { cells: ['2800', 'Capital-actions', 'Valeur nominale totale des actions emises'] },
          { cells: ['2900', 'Reserve legale issue du capital (prime d\'emission)', 'Agio sur les actions, apports supplementaires'] },
          { cells: ['2950', 'Reserve legale issue du benefice', '5% du benefice net annuel (art. 672 CO)'] },
          { cells: ['2960', 'Reserve facultative', 'Constituee par decision de l\'AG'] },
          { cells: ['2970', 'Report de benefice', 'Benefice non distribue reporte'] },
          { cells: ['2979', 'Benefice / perte de l\'exercice', 'Resultat de l\'exercice en cours'] },
          { cells: ['2980', 'Propres actions (./. negatif)', 'Actions rachetees, en diminution des fonds propres'] },
        ]}
      />
      </Section>

      <Section title="2. Affectation du resultat" defaultOpen={false}>
      <P>L'assemblee generale decide chaque annee de l'affectation du benefice resultant du bilan. L'ordre de priorite est fixe par la loi et les statuts.</P>

      <H3>Reserve legale issue du benefice (art. 672 CO)</H3>
      <Loi art="Art. 672 al. 1 CO">
        5% du benefice annuel sont affectes a la reserve legale issue du benefice. Cette attribution n'est plus obligatoire lorsque la reserve atteint 50% du capital-actions inscrit au registre du commerce.
      </Loi>
      <Note color="blue">
        <strong>Calcul :</strong> Base = benefice net de l'exercice (apres report de pertes anterieures).<br />
        Attribution = 5% du benefice net, jusqu'a ce que la reserve atteigne 50% du capital-actions.
      </Note>

      <H3>Dividendes</H3>
      <P>Le dividende est la remuneration des actionnaires, decidee par l'AG. Il est calcule en pourcentage de la valeur nominale ou en montant fixe par action. Le dividende est soumis a l'<strong>impot anticipe de 35%</strong> (LIA).</P>

      <Note color="yellow">
        <strong>Calcul de l'impot anticipe sur dividende :</strong><br />
        Le dividende decide par l'AG est le dividende <strong>brut</strong>. L'impot anticipe (IA) de 35% est retenu a la source.<br />
        Dividende brut = 100% → IA = 35% → Net verse a l'actionnaire = 65%.<br />
        Si on connait le dividende net : Dividende brut = net / 0.65, puis IA = brut x 0.35.
      </Note>

      <H3>Tantiemes</H3>
      <P>Les tantiemes sont une remuneration du conseil d'administration, prelevee sur le benefice resultant du bilan. Ils ne peuvent etre preleves que si la reserve legale issue du benefice a recu son attribution et qu'un dividende de 5% a ete distribue aux actionnaires.</P>
      </Section>

      <Section title="3. Ecritures d'affectation du benefice" defaultOpen={false}>
      <P>Exemple : SwiSSwatch SA realise un benefice net de CHF 200'000. L'AG decide : 5% reserve legale, CHF 80'000 de dividende brut, CHF 10'000 de tantiemes, solde en reserve facultative. Capital-actions CHF 1'000'000, reserve legale existante CHF 350'000 (plafond 50% = CHF 500'000).</P>

      <H3>Attribution a la reserve legale (5%)</H3>
      <Ecriture debit="2979 Benefice de l'exercice" credit="2950 Reserve legale issue du benefice" montant="10'000" />

      <H3>Dividendes et impot anticipe</H3>
      <P>Dividende brut : CHF 80'000. Impot anticipe 35% = CHF 28'000. Dividende net verse = CHF 52'000.</P>
      <Ecriture debit="2979 Benefice de l'exercice" credit="2850 Dividendes a payer" montant="52'000" />
      <Ecriture debit="2979 Benefice de l'exercice" credit="2206 Impot anticipe du" montant="28'000" />

      <H3>Tantiemes</H3>
      <Ecriture debit="2979 Benefice de l'exercice" credit="2850 Tantiemes a payer" montant="10'000" />

      <H3>Solde en reserve facultative</H3>
      <P>Solde = CHF 200'000 - 10'000 - 80'000 - 10'000 = CHF 100'000.</P>
      <Ecriture debit="2979 Benefice de l'exercice" credit="2960 Reserve facultative" montant="100'000" />
      </Section>

      <Section title="4. Traitement des pertes" defaultOpen={false}>
      <P>Lorsque l'exercice se solde par une perte, celle-ci est compensee dans l'ordre suivant :</P>
      {[
        '1. Compensation avec le report de benefice anterieur (2970).',
        '2. Compensation avec les reserves facultatives (2960).',
        '3. Compensation avec la reserve legale issue du benefice (2950).',
        '4. Si les reserves sont insuffisantes, le solde est reporte a nouveau comme perte (2979 ou 2970 debiteur).',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}
      <Ecriture debit="2960 Reserve facultative" credit="2979 Perte de l'exercice" montant="50'000" />
      <Ecriture debit="2950 Reserve legale issue du benefice" credit="2979 Perte de l'exercice" montant="30'000" />
      </Section>

      <Section title="5. Rachat d'actions propres" defaultOpen={false}>
      <Loi art="Art. 659 al. 1 CO">
        La societe ne peut acquerir ses propres actions que si elle dispose librement d'une part de ses fonds propres equivalant au montant de la valeur d'acquisition et si la valeur nominale de l'ensemble de ces actions ne depasse pas 10% du capital-actions.
      </Loi>

      <P>Le rachat d'actions propres est presente en diminution des fonds propres (compte 2980, montant negatif au passif).</P>
      <H3>Rachat de 50 actions a CHF 1'500 (VN CHF 1'000)</H3>
      <Ecriture debit="2980 Actions propres" credit="1020 Banque" montant="75'000" />

      <H3>Revente de 30 actions a CHF 1'600</H3>
      <Ecriture debit="1020 Banque" credit="2980 Actions propres" montant="45'000" />
      <Ecriture debit="1020 Banque" credit="2900 Reserve legale issue du capital" montant="3'000" />
      <Note color="yellow">La plus-value de CHF 100 par action (1'600 - 1'500) est creditee a la reserve legale issue du capital. En cas de destruction d'actions, la plus-value (difference entre prix de rachat et valeur nominale) est soumise a l'impot anticipe de 35%.</Note>
      </Section>

      <Section title="6. Points cles a retenir" defaultOpen={false}>
      {[
        'Reserve legale issue du benefice : 5% du benefice net jusqu\'a 50% du capital-actions.',
        'Dividendes soumis a l\'impot anticipe de 35% (LIA).',
        'Tantiemes : apres attribution reserve legale et dividende minimum 5%.',
        'Pertes compensees en priorite avec reserves facultatives, puis legales.',
        'Actions propres : max 10% du capital-actions, presentees en negatif aux fonds propres.',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}
      </Section>
    </div>
  );
}

// ─── ONGLET 4 : AUGMENTATION DE CAPITAL ─────────────────────────────────────────
function TabAugmentation() {
  return (
    <div>
      <Section title="1. Les moyens d'augmenter les disponibilites" defaultOpen={true}>
      <P>Une societe peut augmenter ses ressources financieres de cinq facons principales :</P>
      {[
        'Liberation du capital non libere (appel du solde du compte 1850).',
        'Autofinancement (benefices non distribues, reserves).',
        'Endettement (emprunts bancaires, obligations).',
        'Augmentation du capital-actions (emission de nouvelles actions).',
        'Emission de capital-participations (bons de participation sans droit de vote).',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}
      </Section>

      <Section title="2. Augmentation ordinaire du capital-actions" defaultOpen={false}>
      <P>L'augmentation ordinaire du capital-actions consiste a emettre de nouvelles actions. Elle est decidee par l'AG et executee par le CA dans un delai de 6 mois. Les actions sont generalement emises a un prix superieur a la valeur nominale : la difference constitue la <strong>prime d'emission (agio)</strong>.</P>

      <H3>Prime d'emission (agio)</H3>
      <P>La prime d'emission compense la valeur accumulee par la societe depuis sa fondation (reserves, benefices). Sans agio, les nouveaux actionnaires acquerraient une part de la societe a un prix inferieur a sa valeur reelle, diluant les anciens actionnaires.</P>
      <Note color="blue">
        <strong>Calcul de l'agio :</strong><br />
        Taux de reserve = (fonds propres - capital-actions) / capital-actions<br />
        Agio par action = taux de reserve x valeur nominale de la nouvelle action<br />
        Prix d'emission = valeur nominale + agio
      </Note>

      <P>Exemple : SwiSSwatch SA. Capital-actions CHF 1'000'000 (1'000 actions de CHF 1'000). Fonds propres totaux CHF 1'500'000. Emission de 200 nouvelles actions.</P>
      <Tableau
        caption="Calcul de la prime d'emission"
        headers={['Element', 'Calcul', 'Resultat']}
        rows={[
          { cells: ['Taux de reserve', '(1\'500\'000 - 1\'000\'000) / 1\'000\'000', '50%'] },
          { cells: ['Agio par action', '50% x CHF 1\'000', 'CHF 500'] },
          { cells: ['Prix d\'emission par action', 'CHF 1\'000 + CHF 500', 'CHF 1\'500'] },
          { cells: ['Total souscription', '200 x CHF 1\'500', 'CHF 300\'000'], _bold: true },
        ]}
      />

      <H3>Droit preferentiel de souscription (DPS)</H3>
      <Loi art="Art. 652b al. 1 CO">
        Chaque actionnaire a le droit de souscrire une part des actions nouvellement emises proportionnelle a sa participation anterieure.
      </Loi>
      <P>Le DPS protege les actionnaires existants contre la dilution. Chaque action existante donne un droit de souscription.</P>
      <Tableau
        caption="Calcul du DPS"
        headers={['Element', 'Calcul', 'Resultat']}
        rows={[
          { cells: ['Rapport de souscription', '1\'000 anciennes / 200 nouvelles', '5 : 1'] },
          { cells: ['Cours avant augmentation', '', 'CHF 1\'500'] },
          { cells: ['Cours estime apres augmentation', '(1\'000 x 1\'500 + 200 x 1\'500) / 1\'200', 'CHF 1\'500'] },
          { cells: ['Valeur theorique du DPS', '1\'500 - 1\'500 = 0 (si emission a valeur intrinseque)', 'CHF 0'] },
        ]}
      />
      <Note color="green">Si le prix d'emission est inferieur au cours de bourse, le DPS a une valeur positive. Formule : DPS = (cours avant - prix emission) / (rapport + 1).</Note>

      <H3>Ecritures d'augmentation de capital</H3>
      <P>Souscription (200 actions a CHF 1'500) :</P>
      <Ecriture debit="1850 Actionnaires" credit="2800 Capital-actions" montant="200'000" />
      <Ecriture debit="1850 Actionnaires" credit="2910 Prime d'emission (agio)" montant="100'000" />

      <P>Liberation (versement integral) :</P>
      <Ecriture debit="1020 Banque" credit="1850 Actionnaires" montant="300'000" />

      <P>Frais d'augmentation CHF 5'000 :</P>
      <Ecriture debit="8600 Charges exceptionnelles" credit="1020 Banque" montant="5'000" />

      <P>Transfert de la prime d'emission (compensation des frais puis virement en reserve legale) :</P>
      <Ecriture debit="2910 Prime d'emission" credit="8600 Charges exceptionnelles" montant="5'000" />
      <Ecriture debit="2910 Prime d'emission" credit="2900 Reserve legale issue du capital" montant="95'000" />
      </Section>

      <Section title="3. Emprunt obligataire" defaultOpen={false}>
      <P>L'emprunt obligataire est un moyen de financement par l'emission de titres de creance (obligations). Les investisseurs pretent de l'argent a la societe en echange d'un interet periodique et du remboursement du nominal a l'echeance.</P>

      <H3>Types d'obligations</H3>
      <Tableau
        headers={['Type', 'Description']}
        rows={[
          { cells: ['Obligation ordinaire', 'Remboursement du nominal + interets fixes'] },
          { cells: ['Obligation convertible', 'Peut etre convertie en actions de la societe'] },
          { cells: ['Obligation a option (warrant)', 'Droit d\'acheter des actions a un prix fixe'] },
        ]}
      />

      <H3>Emission et comptabilisation</H3>
      <P>Exemple : emission de CHF 500'000 d'obligations a 3% sur 5 ans, emission au pair.</P>
      <Ecriture debit="1020 Banque" credit="2400 Emprunt obligataire" montant="500'000" />

      <P>Comptabilisation des interets annuels (soumis a l'impot anticipe de 35%) :</P>
      <Ecriture debit="6900 Charges d'interets" credit="1020 Banque" montant="9'750" />
      <Ecriture debit="6900 Charges d'interets" credit="2206 Impot anticipe du" montant="5'250" />
      <Note color="yellow">
        Interet brut = 3% x 500'000 = CHF 15'000. IA 35% = CHF 5'250. Net verse = CHF 9'750. Les interets d'obligations sont soumis a l'impot anticipe, comme les dividendes.
      </Note>

      <P>Remboursement a l'echeance :</P>
      <Ecriture debit="2400 Emprunt obligataire" credit="1020 Banque" montant="500'000" />

      <H3>Emission en dessous du pair (disagio)</H3>
      <P>Si l'obligation est emise en dessous du pair (par exemple a 98%), la societe recoit moins que le nominal. La difference est une perte d'emission, amortie sur la duree de l'emprunt.</P>
      <P>Emission de CHF 500'000 a 98% :</P>
      <Ecriture debit="1020 Banque" credit="2400 Emprunt obligataire" montant="490'000" />
      <Ecriture debit="1801 Disagio sur emprunt" credit="2400 Emprunt obligataire" montant="10'000" />
      </Section>

      <Section title="4. Capital autorise et capital conditionnel" defaultOpen={false}>

      <H3>Capital autorise (art. 651-652 CO)</H3>
      <P>Le capital autorise permet au conseil d{'\''}administration d{'\''}augmenter le capital-actions sans convoquer l{'\''}assemblee generale, dans une limite et un delai fixes par les statuts.</P>
      <P>Conditions : l{'\''}AG autorise le CA a augmenter le capital de maximum 50% du capital existant, pendant une duree maximale de 2 ans.</P>
      <Loi art="Art. 651 CO">
        Les statuts peuvent autoriser le conseil d{'\''}administration a augmenter le capital-actions dans un delai de deux ans au plus. Le montant nominal de l{'\''}augmentation autorisee ne peut depasser la moitie du capital-actions existant.
      </Loi>
      <P>Avantage : rapidite — le CA peut reagir aux opportunites de marche sans attendre une AG extraordinaire.</P>

      <H3>Capital conditionnel (art. 653-653i CO)</H3>
      <P>Le capital conditionnel est une augmentation de capital qui ne se realise que si les detenteurs de droits de conversion ou d{'\''}option exercent ces droits. Il est typiquement lie a des obligations convertibles ou des plans de participation des employes.</P>
      <P>Le capital conditionnel ne peut pas depasser 50% du capital existant (20% s{'\''}il supprime le DPS des actionnaires existants).</P>
      <Loi art="Art. 653 CO">
        L{'\''}assemblee generale peut prevoir dans les statuts que le capital-actions est augmente conditionnellement par l{'\''}emission d{'\''}actions nouvelles en faveur de titulaires de droits de conversion ou d{'\''}option.
      </Loi>
      <Note color="blue">Le capital conditionnel est un {'\''}capital potentiel{'\''}  : il figure dans les statuts mais pas au bilan tant que les droits ne sont pas exerces.</Note>

      <H3>Bons de participation (art. 656a-656g CO)</H3>
      <P>Les bons de participation sont des titres de capitaux propres SANS droit de vote. Ils conferent uniquement des droits patrimoniaux (dividendes, part de liquidation) au meme titre que les actions.</P>
      <P>Le capital-participation ne peut pas depasser le double du capital-actions. Les bons de participation sont souvent utilises pour lever des fonds sans diluer le controle des actionnaires existants.</P>
      <Tableau
        headers={['Caracteristique', 'Actions', 'Bons de participation']}
        rows={[
          { cells: ['Droit de vote', 'Oui', 'Non'] },
          { cells: ['Droit au dividende', 'Oui', 'Oui (meme proportion)'] },
          { cells: ['Droit a la liquidation', 'Oui', 'Oui'] },
          { cells: ['Limite', '—', 'Max 2x le capital-actions'] },
          { cells: ['Comptes', '2800 Capital-actions', '2810 Capital-participation'] },
        ]}
      />
      <P>Comptablement, l{'\''}emission de bons de participation se traite comme une augmentation de capital classique, mais au compte 2810 Capital-participation au lieu de 2800.</P>
      </Section>

      <Section title="5. Points cles a retenir" defaultOpen={false}>
      {[
        'L\'agio (prime d\'emission) compense la valeur accumulee par la societe.',
        'Le DPS protege les actionnaires existants contre la dilution.',
        'La prime d\'emission est viree en reserve legale issue du capital (2900) apres deduction des frais.',
        'Les interets d\'obligations sont soumis a l\'impot anticipe de 35%.',
        'L\'emprunt obligataire peut etre emis au pair, au-dessus (prime) ou en dessous (disagio).',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}
      </Section>
    </div>
  );
}

// ─── ONGLET 5 : ASSAINISSEMENT ──────────────────────────────────────────────────
function TabAssainissement() {
  return (
    <div>
      <Section title="1. Surveillance de la solvabilite" defaultOpen={true}>
      <P>Le conseil d'administration a le devoir legal de surveiller en permanence la solvabilite de la societe. La revision du droit de la SA (2023) a renforce ces obligations avec les nouveaux articles 725 a 725c CO.</P>

      <Loi art="Art. 725 CO">
        Le conseil d'administration surveille la solvabilite de la societe. Il prend des mesures pour assurer la solvabilite de la societe. Il prend les mesures supplementaires qui s'imposent pour assainir la societe ou pour en proposer l'assainissement a l'assemblee generale, si cela est necessaire.
      </Loi>
      </Section>

      <Section title="2. Situations de crise" defaultOpen={false}>
      <H3>Perte de capital (art. 725a CO)</H3>
      <Loi art="Art. 725a al. 1 CO">
        S'il ressort des derniers comptes annuels que les actifs, apres deduction des dettes, ne couvrent plus la moitie de la somme du capital-actions et de la reserve legale issue du capital et de la reserve legale issue du benefice qui ne sont pas remboursables, le conseil d'administration prend des mesures propres a remedier a la perte de capital.
      </Loi>
      <Note color="red">
        <strong>Test de perte de capital :</strong><br />
        Si actifs - dettes &lt; 50% x (capital-actions + reserves legales non remboursables)<br />
        → le CA doit agir (mesures d'assainissement).
      </Note>

      <P>Exemple : capital-actions CHF 500'000, reserves legales CHF 200'000. Seuil = 50% x 700'000 = CHF 350'000. Si les fonds propres tombent en dessous de CHF 350'000, il y a perte de capital.</P>

      <H3>Surendettement (art. 725b CO)</H3>
      <Loi art="Art. 725b al. 1 CO">
        S'il existe des raisons serieuses d'admettre que la societe est surendettee, un bilan intermediaire est dresse et soumis a la verification d'un reviseur agree. Si le reviseur confirme le surendettement, le conseil d'administration en avise le tribunal.
      </Loi>
      <P>Le surendettement signifie que les dettes depassent la valeur des actifs, meme evalues a leur valeur de liquidation. Le CA doit aviser le tribunal, <strong>sauf</strong> si :</P>
      {[
        'Des creanciers acceptent la postposition de leurs creances a hauteur du decouvert.',
        'Un concordat (accord avec les creanciers) est en cours de negociation.',
        'Les mesures d\'assainissement envisagees peuvent remedier au surendettement dans un delai raisonnable.',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}
      </Section>

      <Section title="3. Mesures d'assainissement" defaultOpen={false}>

      <H3>a) Reevaluation d'actifs (art. 725c CO)</H3>
      <P>Si des immeubles ou des participations ont une valeur reelle superieure a la valeur comptable, ils peuvent etre reevalues. La plus-value est creditee a une reserve de reevaluation.</P>
      <Loi art="Art. 725c CO">
        Si des immeubles ou des participations ont ete evalues en dessous de leur valeur d'acquisition, ils peuvent, pour autant que leur valeur reelle le justifie, etre portes dans le bilan a cette valeur superieure.
      </Loi>
      <P>Exemple : immeuble comptabilise a CHF 400'000, valeur de marche CHF 600'000.</P>
      <Ecriture debit="1600 Immeubles" credit="2940 Reserve de reevaluation" montant="200'000" />

      <H3>b) Reduction du capital-actions</H3>
      <P>Le capital-actions est reduit pour absorber les pertes accumulees. Cette operation ne genere aucun flux de tresorerie.</P>
      <P>Exemple : reduction du capital de CHF 500'000 a CHF 300'000 pour absorber CHF 200'000 de pertes.</P>
      <Ecriture debit="2800 Capital-actions" credit="2979 Perte reportee" montant="200'000" />
      <Note color="blue">La reduction de capital pour assainissement ne donne lieu ni a remboursement aux actionnaires ni a impot anticipe, car elle compense des pertes.</Note>

      <H3>c) Abandon de creances</H3>
      <P>Un creancier (souvent la banque ou un actionnaire) renonce a tout ou partie de sa creance. Pour la societe, c'est un produit exceptionnel.</P>
      <P>Exemple : la banque abandonne CHF 150'000 de creance.</P>
      <Ecriture debit="2400 Emprunt bancaire" credit="8100 Produits exceptionnels" montant="150'000" />

      <H3>d) Dons et subventions</H3>
      <P>Des tiers (actionnaires, collectivites publiques) peuvent apporter des fonds a titre gratuit pour assainir la societe.</P>
      <Ecriture debit="1020 Banque" credit="8100 Produits exceptionnels" montant="100'000" />

      <H3>e) Postposition de dettes</H3>
      <P>Un creancier accepte que sa creance soit remboursee en dernier, apres tous les autres creanciers. La dette postposee est traitee economiquement comme des fonds propres, meme si elle reste juridiquement une dette.</P>
      <Ecriture debit="2400 Emprunt bancaire" credit="2840 Dette postposee" montant="200'000" />
      <Note color="yellow">La dette postposee reste au passif mais est consideree comme fonds propres pour le test de surendettement. Elle doit etre clairement identifiee dans les comptes.</Note>

      <H3>f) Augmentation simultanee du capital (coup d'accordeon)</H3>
      <Loi art="Art. 653q CO">
        Le capital-actions peut etre reduit et augmente simultanement en un seul acte notarie (reduction suivie d'une augmentation).
      </Loi>
      <P>Cette technique combine une reduction de capital (pour absorber les pertes) et une augmentation immediate (pour apporter des fonds frais). C'est le "coup d'accordeon".</P>
      <P>Exemple : capital CHF 500'000, pertes CHF 300'000. Reduction a CHF 200'000, puis augmentation a CHF 400'000.</P>
      <Ecriture debit="2800 Capital-actions" credit="2979 Perte reportee" montant="300'000" />
      <Ecriture debit="1850 Actionnaires" credit="2800 Capital-actions" montant="200'000" />
      <Ecriture debit="1020 Banque" credit="1850 Actionnaires" montant="200'000" />
      </Section>

      <Section title="4. Exemple complet d'assainissement" defaultOpen={false}>
      <P>Situation de SwiSSwatch SA avant assainissement :</P>
      <Tableau
        caption="Bilan avant assainissement"
        headers={['Actif', 'CHF', 'Passif', 'CHF']}
        rows={[
          { cells: ['Banque', '50\'000', 'Fournisseurs', '200\'000'] },
          { cells: ['Clients', '100\'000', 'Emprunt bancaire', '400\'000'] },
          { cells: ['Machines', '150\'000', 'Capital-actions', '500\'000'] },
          { cells: ['Immeubles', '400\'000', 'Reserve legale', '50\'000'] },
          { cells: ['', '', 'Perte reportee', './. 450\'000'] },
          { cells: ['Total', '700\'000', 'Total', '700\'000'], _bold: true },
        ]}
      />
      <Note color="red">Fonds propres = 500'000 + 50'000 - 450'000 = CHF 100'000. Seuil perte de capital = 50% x 550'000 = CHF 275'000. La societe est en situation de perte de capital (100'000 &lt; 275'000).</Note>

      <P>Mesures decidees : (1) reevaluation immeuble +150'000, (2) abandon de creance banque 100'000, (3) reduction capital a 200'000.</P>
      <Ecriture debit="1600 Immeubles" credit="2940 Reserve de reevaluation" montant="150'000" />
      <Ecriture debit="2400 Emprunt bancaire" credit="8100 Produits exceptionnels" montant="100'000" />
      <Ecriture debit="2800 Capital-actions" credit="2979 Perte reportee" montant="300'000" />
      </Section>

      <Section title="5. Points cles a retenir" defaultOpen={false}>
      {[
        'Art. 725 CO : le CA doit surveiller la solvabilite en permanence.',
        'Perte de capital (art. 725a) : fonds propres < 50% du capital + reserves legales.',
        'Surendettement (art. 725b) : actifs < dettes meme en valeur de liquidation → avis au tribunal.',
        'Reevaluation, abandon de creance, reduction de capital et postposition sont les principales mesures.',
        'Le coup d\'accordeon combine reduction et augmentation de capital simultanement.',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}
      </Section>
    </div>
  );
}

// ─── ONGLET 6 : FUSION & SCISSION ──────────────────────────────────────────────
function TabFusion() {
  return (
    <div>
      <Section title="1. La fusion — concepts generaux" defaultOpen={true}>
      <P>La fusion est l'operation par laquelle deux ou plusieurs societes se regroupent en une seule. Elle est regie par la <strong>Loi federale sur la fusion (LFus)</strong>. Il existe deux types de fusion :</P>

      <Tableau
        headers={['Type', 'Mecanisme', 'Resultat']}
        rows={[
          { cells: ['Fusion par absorption', 'La societe absorbante reprend le patrimoine de la societe absorbee', 'La societe absorbee disparait; l\'absorbante subsiste'] },
          { cells: ['Fusion par combinaison', 'Les deux societes transferent leur patrimoine a une nouvelle societe creee', 'Les deux societes d\'origine disparaissent'] },
        ]}
      />

      <Note color="blue">
        En pratique, la <strong>fusion par absorption</strong> est de loin la plus courante. Les actionnaires de la societe absorbee recoivent des actions de la societe absorbante en echange.
      </Note>
      </Section>

      <Section title="2. Etapes d'une fusion par absorption" defaultOpen={false}>
      {[
        'Evaluation des deux societes (valeur intrinseque = fonds propres comptables + reserves latentes).',
        'Calcul de la parite d\'echange (combien d\'actions de l\'absorbante pour une action de l\'absorbee).',
        'Determination du nombre d\'actions a emettre par l\'absorbante.',
        'Augmentation de capital de l\'absorbante pour remunerer les actionnaires de l\'absorbee.',
        'Transfert du bilan de l\'absorbee dans l\'absorbante.',
        'Dissolution et radiation de la societe absorbee.',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}
      </Section>

      <Section title="3. Calculs de fusion — exemple complet" defaultOpen={false}>
      <P><strong>Societe SwiSSwatch SA</strong> (absorbante) : capital-actions CHF 1'000'000 (1'000 actions de CHF 1'000). Fonds propres comptables CHF 1'500'000. Reserves latentes nettes CHF 300'000.</P>
      <P><strong>Societe SwiSSwatch SA</strong> (absorbee) : capital-actions CHF 500'000 (500 actions de CHF 1'000). Fonds propres comptables CHF 700'000. Reserves latentes nettes CHF 200'000.</P>

      <H3>Etape 1 : Valeur intrinseque</H3>
      <Tableau
        caption="Calcul de la valeur intrinseque"
        headers={['', 'SwiSSwatch SA', 'SwiSSwatch SA']}
        rows={[
          { cells: ['Fonds propres comptables', '1\'500\'000', '700\'000'] },
          { cells: ['+ Reserves latentes nettes', '300\'000', '200\'000'] },
          { cells: ['= Valeur intrinseque totale', '1\'800\'000', '900\'000'], _bold: true },
          { cells: ['Nombre d\'actions', '1\'000', '500'] },
          { cells: ['Valeur intrinseque par action', '1\'800', '1\'800'], _bold: true },
        ]}
      />

      <H3>Etape 2 : Parite d'echange</H3>
      <P>La parite d'echange indique combien d'actions de l'absorbante on recoit pour une action de l'absorbee.</P>
      <Note color="blue">
        <strong>Parite d'echange</strong> = valeur intrinseque action absorbee / valeur intrinseque action absorbante<br />
        = CHF 1'800 / CHF 1'800 = <strong>1 : 1</strong><br />
        Chaque actionnaire de l'absorbee recoit 1 action SwiSSwatch pour 1 action de l'absorbee.
      </Note>

      <H3>Etape 3 : Actions a emettre</H3>
      <P>Nombre d'actions a emettre = nombre d'actions de l'absorbee x parite = 500 x 1 = <strong>500 nouvelles actions SwiSSwatch</strong>.</P>
      <P>Augmentation de capital SwiSSwatch : 500 x CHF 1'000 (VN) = CHF 500'000.</P>
      <P>Valeur totale des actions emises : 500 x CHF 1'800 = CHF 900'000.</P>
      <P>Prime de fusion (agio) : CHF 900'000 - CHF 500'000 = CHF 400'000.</P>

      <H3>Etape 4 : Ecritures chez l'absorbante (SwiSSwatch SA)</H3>
      <P>Reprise du bilan de l'absorbee (actifs aux valeurs reelles, dettes au nominal) :</P>
      <Ecriture debit="Actifs divers (absorbee)" credit="Dettes diverses (absorbee)" montant="(selon detail)" />
      <P>Le solde net (actifs - dettes = valeur intrinseque = CHF 900'000) est credite :</P>
      <Ecriture debit="Actifs nets (absorbee, solde)" credit="2800 Capital-actions" montant="500'000" />
      <Ecriture debit="" credit="2900 Reserve legale issue du capital (prime de fusion)" montant="400'000" />

      <Note color="green">Si la valeur intrinseque de l'absorbee est inferieure au capital emis, la difference constitue une <strong>perte de fusion</strong> (goodwill), comptabilisee a l'actif (1880) et amortie.</Note>
      </Section>

      <Section title="4. La scission" defaultOpen={false}>
      <P>La scission est l'operation inverse de la fusion : une societe transfere tout ou partie de son patrimoine a une ou plusieurs societes. La LFus prevoit deux formes :</P>

      <Tableau
        headers={['Type', 'Mecanisme', 'Resultat']}
        rows={[
          { cells: ['Scission par division', 'La societe transfere l\'integralite de son patrimoine a 2 ou plusieurs societes', 'La societe d\'origine disparait'] },
          { cells: ['Scission par separation', 'La societe transfere une partie de son patrimoine a une nouvelle societe', 'La societe d\'origine subsiste (avec un patrimoine reduit)'] },
        ]}
      />

      <H3>Calcul du capital des nouvelles entites</H3>
      <P>Exemple de scission par division : SwiSSwatch SA (capital CHF 800'000) se divise en SwiSSwatch-1 SA (60%) et SwiSSwatch-2 SA (40%).</P>
      <Tableau
        caption="Repartition du patrimoine"
        headers={['Element', 'SwiSSwatch SA (avant)', 'SwiSSwatch-1 SA (60%)', 'SwiSSwatch-2 SA (40%)']}
        rows={[
          { cells: ['Capital-actions', '800\'000', '480\'000', '320\'000'] },
          { cells: ['Actifs transferes', '1\'200\'000', '720\'000', '480\'000'] },
          { cells: ['Dettes transferees', '400\'000', '240\'000', '160\'000'] },
          { cells: ['Fonds propres', '800\'000', '480\'000', '320\'000'], _bold: true },
        ]}
      />

      <P>Ecritures chez SwiSSwatch SA (dissolution) :</P>
      <Ecriture debit="2800 Capital-actions" credit="Actifs nets transferes" montant="800'000" />
      <P>Chaque nouvelle societe reprend les actifs et dettes selon la cle de repartition et constitue son propre capital-actions.</P>
      </Section>

      <Section title="5. Traitement du goodwill et des differences d'acquisition" defaultOpen={false}>

      <H3>Goodwill positif (survaleur)</H3>
      <P>Lorsque le prix paye pour une societe absorbee depasse la valeur de ses actifs nets retraites, la difference constitue un goodwill (ecart d{'\''}acquisition). En droit suisse (CO), le goodwill peut etre :</P>
      <P>1. Active au bilan (compte 1880 Goodwill) et amorti sur sa duree d{'\''}utilite estimee (generalement 5 a 20 ans).</P>
      <P>2. Impute directement sur les reserves au moment de l{'\''}acquisition (methode de la compensation).</P>
      <Note color="yellow">La methode d{'\''}imputation directe sur les reserves est plus conservatrice et evite de gonfler les actifs. Elle est courante dans les PME suisses.</Note>
      <Ecriture debit="1880 Goodwill" credit="2900 Reserves" montant="xxx" libelle="Activation du goodwill d'acquisition (si active)" />

      <H3>Goodwill negatif (badwill)</H3>
      <P>Si la valeur des actifs nets acquis depasse le prix paye, il y a un goodwill negatif (badwill ou {'\''}bonne affaire{'\''}). Cela peut indiquer que certains actifs sont surevalues ou que des passifs caches existent.</P>
      <P>Le badwill est generalement comptabilise en produit exceptionnel ou affecte aux reserves.</P>
      </Section>

      <Section title="6. Aspects fiscaux de la fusion" defaultOpen={false}>

      <P>En Suisse, les fusions peuvent beneficier de la neutralite fiscale si certaines conditions sont remplies (art. 61 LIFD / art. 24 LHID) :</P>
      <P>1. Les reserves latentes reprises par la societe absorbante doivent etre maintenues (pas de reevaluation libre).</P>
      <P>2. L{'\''}assujettissement a l{'\''}impot en Suisse doit etre maintenu.</P>
      <P>3. La forme juridique doit rester une societe de capitaux ou une cooperative.</P>
      <Note color="blue">Si ces conditions sont respectees, la fusion ne declenche PAS d{'\''}imposition immediate des plus-values latentes. C{'\''}est le principe de la {'\''}restructuration fiscalement neutre{'\''}.</Note>
      <Loi art="Art. 61 LIFD">
        Les restructurations (fusions, scissions, transformations) sont fiscalement neutres si les valeurs determinantes pour l{'\''}impot sur le benefice sont reprises et si l{'\''}assujettissement en Suisse est maintenu.
      </Loi>

      <P>Pour les actionnaires, la fusion par echange d{'\''}actions est egalement neutre si le nouvel investissement a la meme valeur fiscale que l{'\''}ancien.</P>

      <Tableau
        headers={['Condition', 'Consequence si respectee', 'Consequence si non respectee']}
        rows={[
          { cells: ['Maintien des reserves latentes', 'Pas d\'imposition', 'Imposition des plus-values realisees'] },
          { cells: ['Assujettissement en CH maintenu', 'Neutralite fiscale', 'Imposition immediate (liquidation partielle indirecte)'] },
          { cells: ['Meme type de societe', 'Neutralite', 'Possibilite d\'imposition'] },
        ]}
      />
      </Section>

      <Section title="7. Points cles a retenir" defaultOpen={false}>
      {[
        'Fusion par absorption : la societe absorbee disparait, l\'absorbante subsiste.',
        'Valeur intrinseque = fonds propres comptables + reserves latentes nettes.',
        'Parite d\'echange = valeur action absorbee / valeur action absorbante.',
        'La prime de fusion (agio) est creditee en reserve legale issue du capital.',
        'La scission transfere tout ou partie du patrimoine a d\'autres societes.',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}
      </Section>
    </div>
  );
}

// ─── ONGLET 7 : LIQUIDATION ────────────────────────────────────────────────────
function TabLiquidation() {
  return (
    <div>
      <Section title="1. Decision de dissolution" defaultOpen={true}>
      <P>La liquidation d'une SA est le processus par lequel la societe cesse ses activites, realise ses actifs, paie ses dettes et distribue le solde a ses actionnaires avant sa radiation du registre du commerce.</P>

      <Loi art="Art. 704 al. 1 ch. 8 CO">
        L'assemblee generale prend la decision de dissoudre la societe a la majorite des deux tiers des voix attribuees aux actions representees.
      </Loi>

      <P>Les etapes de la liquidation sont strictement encadrees par la loi :</P>
      {[
        'Decision de dissolution par l\'AG (majorite qualifiee de 2/3).',
        'Nomination d\'un ou plusieurs liquidateurs (en general, le CA).',
        'Inscription de la mention "en liquidation" au registre du commerce.',
        'Appel aux creanciers par 3 publications dans la FOSC (Feuille officielle suisse du commerce).',
        'Realisation des actifs (vente des biens, encaissement des creances).',
        'Paiement de toutes les dettes.',
        'Distribution du solde de liquidation aux actionnaires au prorata de leur participation.',
        'Radiation du registre du commerce.',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}
      </Section>

      <Section title="2. Appel aux creanciers" defaultOpen={false}>
      <Loi art="Art. 742 al. 2 CO">
        Les liquidateurs font un appel aux creanciers par trois publications dans la FOSC; ils avisent en outre les creanciers connus par lettre.
      </Loi>
      <Note color="yellow">
        L'appel aux creanciers est une formalite obligatoire. Un delai d'attente d'au moins un an s'ecoule entre le 3e appel et la distribution du solde, sauf si un reviseur agree confirme que toutes les dettes sont eteintes.
      </Note>
      </Section>

      <Section title="3. Operations de liquidation" defaultOpen={false}>
      <P>Pendant la liquidation, le liquidateur doit transformer tous les actifs en liquidites et eteindre toutes les dettes. Les gains et pertes resultant de ces operations sont comptabilises dans des comptes specifiques.</P>

      <H3>Vente des actifs</H3>
      <P>Exemple : SwiSSwatch SA entre en liquidation. Bilan de depart :</P>
      <Tableau
        caption="Bilan de liquidation — situation de depart"
        headers={['Actif', 'CHF', 'Passif', 'CHF']}
        rows={[
          { cells: ['Banque', '80\'000', 'Fournisseurs', '120\'000'] },
          { cells: ['Clients', '150\'000', 'Emprunt bancaire', '200\'000'] },
          { cells: ['Stocks', '100\'000', 'Capital-actions', '500\'000'] },
          { cells: ['Machines', '200\'000', 'Reserve legale', '60\'000'] },
          { cells: ['Immeubles', '400\'000', 'Benefice reporte', '50\'000'] },
          { cells: ['Total', '930\'000', 'Total', '930\'000'], _bold: true },
        ]}
      />

      <H3>Encaissement des creances clients</H3>
      <P>Creances CHF 150'000, recouvrees a CHF 140'000 (perte de CHF 10'000 sur creances irrecouvrables).</P>
      <Ecriture debit="1020 Banque" credit="1100 Clients" montant="140'000" />
      <Ecriture debit="8500 Pertes de liquidation" credit="1100 Clients" montant="10'000" />

      <H3>Vente des stocks</H3>
      <P>Stocks comptabilises a CHF 100'000, vendus a CHF 70'000.</P>
      <Ecriture debit="1020 Banque" credit="1200 Stocks" montant="70'000" />
      <Ecriture debit="8500 Pertes de liquidation" credit="1200 Stocks" montant="30'000" />

      <H3>Vente des machines</H3>
      <P>Machines comptabilisees a CHF 200'000, vendues a CHF 130'000.</P>
      <Ecriture debit="1020 Banque" credit="1500 Machines" montant="130'000" />
      <Ecriture debit="8500 Pertes de liquidation" credit="1500 Machines" montant="70'000" />

      <H3>Vente de l'immeuble</H3>
      <P>Immeuble comptabilise a CHF 400'000, vendu a CHF 520'000 (gain de CHF 120'000).</P>
      <Ecriture debit="1020 Banque" credit="1600 Immeubles" montant="400'000" />
      <Ecriture debit="1020 Banque" credit="8000 Gains de liquidation" montant="120'000" />
      </Section>

      <Section title="4. Paiement des dettes" defaultOpen={false}>
      <Ecriture debit="2000 Fournisseurs" credit="1020 Banque" montant="120'000" />
      <Ecriture debit="2400 Emprunt bancaire" credit="1020 Banque" montant="200'000" />
      </Section>

      <Section title="5. Resultat de liquidation et distribution" defaultOpen={false}>
      <P>Calcul du solde disponible :</P>
      <Tableau
        caption="Calcul du solde de liquidation"
        headers={['Element', 'CHF']}
        rows={[
          { cells: ['Banque initiale', '80\'000'] },
          { cells: ['+ Encaissements clients', '140\'000'] },
          { cells: ['+ Vente stocks', '70\'000'] },
          { cells: ['+ Vente machines', '130\'000'] },
          { cells: ['+ Vente immeuble', '520\'000'] },
          { cells: ['- Paiement fournisseurs', './. 120\'000'] },
          { cells: ['- Remboursement emprunt', './. 200\'000'] },
          { cells: ['= Solde en banque', '620\'000'], _bold: true },
        ]}
      />
      <P>Le solde de CHF 620'000 est distribue aux actionnaires. Fonds propres initiaux : CHF 610'000 (capital 500'000 + reserve 60'000 + benefice 50'000). Gains nets de liquidation : 120'000 - 110'000 = CHF 10'000. Total : CHF 620'000.</P>

      <Note color="yellow">
        <strong>Impot anticipe sur la liquidation :</strong> La distribution du solde de liquidation est soumise a l'impot anticipe de 35% sur la part depassant la valeur nominale du capital-actions et les apports en capital (principe de l'apport en capital). Seul l'excedent = CHF 620'000 - CHF 500'000 = CHF 120'000 est soumis a l'IA.
      </Note>

      <H3>Distribution aux actionnaires</H3>
      <P>Calcul de l'impot anticipe : 35% x CHF 120'000 = CHF 42'000.</P>
      <Ecriture debit="2800 Capital-actions" credit="1020 Banque" montant="500'000" />
      <Ecriture debit="2950 Reserve legale" credit="1020 Banque" montant="60'000" />
      <Ecriture debit="2970 Benefice reporte" credit="1020 Banque" montant="18'000" />
      <Ecriture debit="2970 Benefice reporte (solde gains)" credit="2206 Impot anticipe du" montant="42'000" />

      <P>Versement de l'impot anticipe a l'AFC :</P>
      <Ecriture debit="2206 Impot anticipe du" credit="1020 Banque" montant="42'000" />
      </Section>

      <Section title="6. Radiation" defaultOpen={false}>
      <P>Une fois toutes les dettes payees, le solde distribue et l'impot anticipe verse, le liquidateur demande la <strong>radiation de la societe au registre du commerce</strong>. La societe cesse alors d'exister juridiquement.</P>
      </Section>

      <Section title="7. Points cles a retenir" defaultOpen={false}>
      {[
        'Dissolution decidee a la majorite de 2/3 de l\'AG (art. 704 CO).',
        'Appel aux creanciers : 3 publications dans la FOSC obligatoires.',
        'Realisation des actifs : gains et pertes comptabilises en resultat exceptionnel (8xxx).',
        'Distribution du solde : soumise a l\'impot anticipe 35% sur la part depassant le capital verse et les apports.',
        'La radiation au registre du commerce met fin a l\'existence juridique de la societe.',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{'\u25B6'}</span>
          <span>{pt}</span>
        </div>
      ))}
      </Section>
    </div>
  );
}

// ─── VUE PRINCIPALE ───────────────────────────────────────────────────────────
// ─── VUES EXPORTÉES (une par chapitre, lien direct sidebar) ──────────────────

export function SocFormesView() {
  return <TheoryLayout title="1. Formes juridiques des sociétés" tag="tag-base" tagLabel="Sociétés" meta="CO 552ss · 620ss · 772ss"><TabFormesJuridiques /></TheoryLayout>;
}
export function SocFondationView() {
  return <TheoryLayout title="2. Fondation d'une SA" tag="tag-base" tagLabel="Sociétés" meta="CO 629ss · 632 · 634b"><TabFondation /></TheoryLayout>;
}
export function SocDistributionView() {
  return <TheoryLayout title="3. Distribution du bénéfice" tag="tag-base" tagLabel="Sociétés" meta="CO 671 · 672 · 675 · 659"><TabDistribution /></TheoryLayout>;
}
export function SocAugmentationView() {
  return <TheoryLayout title="4. Augmentation de capital" tag="tag-base" tagLabel="Sociétés" meta="CO 650ss · 652b · 624"><TabAugmentation /></TheoryLayout>;
}
export function SocAssainissementView() {
  return <TheoryLayout title="5. Assainissement" tag="tag-base" tagLabel="Sociétés" meta="CO 725 · 725a · 725b · 725c"><TabAssainissement /></TheoryLayout>;
}
export function SocFusionView() {
  return <TheoryLayout title="6. Fusion & Scission" tag="tag-base" tagLabel="Sociétés" meta="LFus · CO 704"><TabFusion /></TheoryLayout>;
}
export function SocLiquidationView() {
  return <TheoryLayout title="7. Liquidation" tag="tag-base" tagLabel="Sociétés" meta="CO 736ss · 743"><TabLiquidation /></TheoryLayout>;
}

export default function SocietesView() {
  return <SocFormesView />;
}
