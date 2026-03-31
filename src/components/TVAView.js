import React, { useState } from 'react';
import { P, H3, Note, Loi, Tableau, Ecriture, TheoryLayout, Section } from './TheoryUI';

function DecompteBox({ title, rows, total, color }) {
  const c = color || '#2563eb';
  return (
    <div style={{ margin: '16px 0', border: `2px solid ${c}`, borderRadius: 8, overflow: 'hidden', maxWidth: 520 }}>
      <div style={{ background: c, padding: '8px 16px', color: '#fff', fontWeight: 700, fontSize: '0.84rem' }}>{title}</div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.83rem' }}>
        <tbody>
          {rows.map(([label, montant, bold, indent], i) => (
            <tr key={i} style={{ background: bold ? '#eff6ff' : i % 2 === 0 ? '#fff' : '#f8f9fb', borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: '7px 16px', paddingLeft: indent ? 28 : 16, fontWeight: bold ? 700 : 400, color: '#0f172a' }}>{label}</td>
              <td style={{ padding: '7px 16px', fontFamily: 'JetBrains Mono, monospace', fontWeight: bold ? 700 : 500, color: bold ? c : '#475569', textAlign: 'right', whiteSpace: 'nowrap' }}>{montant}</td>
            </tr>
          ))}
          {total && (
            <>
              <tr><td colSpan={2} style={{ height: 2, background: c }} /></tr>
              <tr style={{ background: '#eff6ff' }}>
                <td style={{ padding: '9px 16px', fontWeight: 700, color: '#0f172a', fontSize: '0.86rem' }}>{total[0]}</td>
                <td style={{ padding: '9px 16px', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: c, textAlign: 'right', fontSize: '0.9rem' }}>{total[1]}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

// ─── ONGLET 1 : ASSUJETTISSEMENT ─────────────────────────────────────────────
function TabAssujettissement() {
  return (
    <div>
      <Section title="1. Qu'est-ce que la TVA ?" defaultOpen={true}>
      <P>La taxe sur la valeur ajoutée (TVA) est un impôt indirect prélevé par les entreprises et supporté par le consommateur final. Elle frappe les biens et services consommés en Suisse, les prestations à soi-même et les importations. En Suisse, la TVA est régie par la <strong>Loi fédérale régissant la taxe sur la valeur ajoutée (LTVA)</strong>, complétée par l'Ordonnance (OTVA) et les publications de l'Administration fédérale des contributions (AFC).</P>
      <P>Les montants de TVA encaissés par les entreprises ne leur appartiennent pas — ils transitent par leurs comptes avant d'être reversés périodiquement à l'AFC. De même, la TVA payée aux fournisseurs (impôt préalable) peut être récupérée auprès de l'AFC.</P>

      </Section>
      <Section title="2. Le mécanisme de la TVA — chaîne de valeur" defaultOpen={false}>
      <P>La TVA est perçue à chaque stade de la chaîne de production. Chaque agent économique collecte la TVA sur ses ventes et déduit la TVA payée sur ses achats. Seul le consommateur final supporte réellement la taxe.</P>
      <Tableau
        caption="Exemple — fabrication d'une armoire (taux normal 8.1%)"
        headers={['Agent', 'Prix de vente HT', 'TVA encaissée', 'TVA payée', 'Décompte TVA à l\'AFC']}
        rows={[
          { cells: ['Bûcheron (coupe le bois)', "CHF 50.00", "CHF 4.05", "CHF 0", "CHF 4.05"] },
          { cells: ['Scierie (planches sur mesure)', "CHF 125.00", "CHF 10.15", "CHF 4.05", "CHF 6.10"] },
          { cells: ['Ébéniste (armoire terminée)', "CHF 250.00", "CHF 20.25", "CHF 10.15", "CHF 10.10"] },
          { cells: ['Magasin (vente au détail)', "CHF 400.00", "CHF 32.40", "CHF 20.25", "CHF 12.15"] },
          { cells: ['Consommateur final', '—', '—', "CHF 32.40", '—'], _bold: true },
          { cells: ['Total TVA encaissée par l\'AFC', '', '', '', "CHF 32.40"], _bold: true },
        ]}
      />
      <Note color="green">L'AFC encaisse la totalité des CHF 32.40 sans aucun contact avec le consommateur final — grâce aux décomptes périodiques réalisés par chaque entreprise assujettie.</Note>

      </Section>
      <Section title="3. Qui est assujetti à la TVA ?" defaultOpen={false}>
      <Loi art="Art. 10 al. 1 LTVA — Principe général">
        Est assujetti à l'impôt quiconque exploite une entreprise, même sans but lucratif et quels que soient sa forme juridique et le but poursuivi.
      </Loi>
      <Loi art="Art. 10 al. 2 LTVA — Libération de l'assujettissement">
        Est libéré de l'assujettissement quiconque réalise en l'espace d'un an, sur le territoire suisse et à l'étranger, un chiffre d'affaires total inférieur à <strong>CHF 100'000</strong> à partir de prestations imposables.
        Exception : les sociétés sportives ou culturelles sans but lucratif bénéficient d'un seuil de CHF 250'000.
      </Loi>
      <Tableau
        caption="Seuils d'assujettissement 2024"
        headers={['Catégorie', 'Seuil CA annuel', 'Conséquence']}
        rows={[
          { cells: ['Entreprise ordinaire', "CHF 100'000", 'Assujettissement obligatoire dès dépassement'] },
          { cells: ['Association sportive/culturelle sans but lucratif', "CHF 250'000", 'Seuil majoré'] },
          { cells: ['Assujettissement volontaire', 'Dès CHF 1 de CA', 'Possible sur demande à l\'AFC'] },
        ]}
      />
      <Note>L'entreprise a la responsabilité de s'annoncer elle-même à l'AFC dès qu'elle atteint le seuil. L'AFC lui attribue un numéro TVA qui doit figurer sur chaque facture émise.</Note>

      </Section>
      <Section title="4. Les taux de TVA applicables en Suisse (2024)" defaultOpen={false}>
      <Loi art="Art. 25 LTVA — Taux de l'impôt">
        Le taux normal est de <strong>8.1%</strong>. Le taux réduit de <strong>2.6%</strong> s'applique aux denrées alimentaires, médicaments, livres et journaux. Le taux spécial de <strong>3.8%</strong> s'applique aux prestations d'hébergement (hôtels, avec ou sans petit-déjeuner).
      </Loi>
      <Tableau
        caption="Taux TVA suisse 2024"
        headers={['Taux', 'Désignation', 'Exemples de prestations']}
        rows={[
          { cells: ['8.1%', 'Taux normal', 'Toutes les prestations non mentionnées ci-dessous — services, vêtements, électronique, restauration, etc.'] },
          { cells: ['2.6%', 'Taux réduit', 'Denrées alimentaires (sauf restauration), eau, médicaments, livres, journaux, revues'] },
          { cells: ['3.8%', 'Taux spécial hébergement', 'Nuitées à l\'hôtel, chambres d\'hôtes — avec ou sans petit-déjeuner (même si facturé séparément)'] },
          { cells: ['0%', 'Prestations exonérées', 'Exportations, transports internationaux — TVA due = 0 mais impôt préalable déductible'] },
          { cells: ['Hors champ', 'Prestations exclues', 'Soins médicaux, enseignement, assurances, location d\'appartements — pas de TVA, pas de déduction IP'] },
        ]}
      />

      </Section>
      <Section title="5. Forme et contenu des factures" defaultOpen={false}>
      <Loi art="Art. 26 al. 2 LTVA — Contenu obligatoire d'une facture TVA">
        La facture doit mentionner : nom et localité du fournisseur, numéro TVA, nom du destinataire, date ou période de la prestation, nature et volume de la prestation, montant de la contre-prestation, taux d'imposition applicable et montant de la TVA due.
      </Loi>
      <Loi art="Art. 57 OTVA — Tickets de caisse">
        Pour les montants allant jusqu'à <strong>CHF 400</strong>, les tickets de caisse ne doivent pas obligatoirement mentionner le destinataire de la prestation.
      </Loi>
      <Note>Une facture sans numéro TVA ou sans mention du taux applicable ne permet pas à l'acheteur de déduire l'impôt préalable. Vérifiez systématiquement les factures reçues avant de comptabiliser l'IP.</Note>

      </Section>
      <Section title="6. Prestations exclues vs prestations exonérées" defaultOpen={false}>
      <P>La distinction entre ces deux catégories est fondamentale car elle détermine le droit à la déduction de l'impôt préalable.</P>
      <Tableau
        caption="Différence entre exclues et exonérées"
        headers={['', 'Prestations EXCLUES (art. 21 LTVA)', 'Prestations EXONÉRÉES (art. 23 LTVA)']}
        rows={[
          { cells: ['TVA facturée', 'Non (sauf option)', 'Non (taux 0%)'] },
          { cells: ['Impôt préalable déductible', 'Non — l\'entreprise est traitée comme consommateur final', 'Oui — l\'IP reste entièrement déductible'] },
          { cells: ['Exemples', 'Soins médicaux, enseignement, assurances, location d\'habitation, services bancaires', 'Exportations de biens, transports internationaux, or fin'] },
          { cells: ['Option possible ?', 'Oui pour certaines (sauf assurances, finances, jeux)', 'Non — régime fixe'] },
        ]}
      />
      <Note color="red">Une entreprise qui réalise des prestations exclues ne peut pas récupérer la TVA payée sur ses achats liés à ces prestations — elle supporte définitivement la TVA comme un consommateur.</Note>
      </Section>
    </div>
  );
}

// ─── ONGLET 2 : MÉTHODE EFFECTIVE (AU NET) ────────────────────────────────────
function TabMethodeEffective() {
  return (
    <div>
      <Section title="1. Principe de la comptabilisation au net" defaultOpen={true}>
      <P>Dans la méthode effective, la TVA n'est ni un produit ni une charge — c'est une taxe qui transite par les comptes de bilan. Chaque facture est comptabilisée en séparant le montant hors taxe (HT) et le montant de TVA.</P>
      <P>Trois comptes de bilan sont utilisés :</P>
      <Tableau
        headers={['Compte', 'Intitulé', 'Nature', 'Contenu']}
        rows={[
          { cells: ['2200', 'TVA Due', 'Passif — dette CT', 'TVA facturée aux clients — à reverser à l\'AFC'] },
          { cells: ['1170', 'Impôt préalable sur achats', 'Actif — créance CT', 'TVA payée aux fournisseurs sur achats de marchandises — remboursable par l\'AFC'] },
          { cells: ['1171', 'Impôt préalable sur inv. et ACE', 'Actif — créance CT', 'TVA payée aux fournisseurs sur investissements et autres charges d\'exploitation'] },
        ]}
      />
      <Note color="green">Avantage de cette méthode : les comptes de charges et produits affichent des montants HT. La TVA est parfaitement isolée dans les comptes de bilan, ce qui facilite les contrôles et les décomptes.</Note>

      </Section>
      <Section title="2. Comptabilisation des ventes" defaultOpen={false}>
      <P>Lors d'une vente, on sépare le chiffre d'affaires HT (compte de produit) de la TVA collectée (compte de bilan 2200) :</P>
      <Note>Exemple : Léa Meyer vend des montres pour CHF 550'000 HT. Taux TVA denrées alimentaires : <strong>2.6%</strong> → TVA = CHF 14'300 → Prix TTC = CHF 564'300</Note>

      <H3>Facturation et encaissement</H3>
      <Ecriture debit="1100 Clients" credit="3000 Ventes (HT)" montant="550'000" libelle="Chiffre d'affaires hors taxe" />
      <Ecriture debit="1100 Clients" credit="2200 TVA Due" montant="14'300" libelle="TVA 2.6% collectée sur les ventes" sub />
      <Ecriture debit="1020 Banque" credit="1100 Clients" montant="564'300" libelle="Encaissement du client (TTC)" sub />

      <Note color="green">Le compte 3000 Ventes n'enregistre que le montant HT — le chiffre d'affaires réel sans TVA. Le compte 2200 accumule la TVA à reverser à l'AFC.</Note>

      </Section>
      <Section title="3. Comptabilisation des achats de marchandises" defaultOpen={false}>
      <Note>Exemple : achats de marchandises CHF 369'000 TTC (taux 2.6%) → HT = CHF 359'649 — IP = CHF 9'351</Note>
      <P>Formule : HT = TTC ÷ (1 + taux) | IP = TTC − HT</P>
      <P>Vérification : CHF 369'000 ÷ 1.026 = CHF 359'649 HT | CHF 369'000 − 359'649 = CHF 9'351 IP</P>

      <Ecriture debit="4000 Achats (HT)" credit="2000 Fournisseurs" montant="359'649" libelle="Achats hors taxe — séparés de la TVA" />
      <Ecriture debit="1170 IP sur achats" credit="2000 Fournisseurs" montant="9'351" libelle="TVA 2.6% payée aux fournisseurs — récupérable à l'AFC" sub />
      <Ecriture debit="2000 Fournisseurs" credit="1020 Banque" montant="369'000" libelle="Paiement TTC au fournisseur" sub />

      </Section>
      <Section title="4. Comptabilisation des investissements et autres charges" defaultOpen={false}>
      <Note>Exemple : investissement en machines CHF 53'850 TTC (taux normal 8.1%) → HT = CHF 49'815 — IP = CHF 4'035</Note>
      <P>Vérification : CHF 53'850 ÷ 1.081 = CHF 49'815 HT | CHF 53'850 − 49'815 = CHF 4'035 IP</P>

      <Ecriture debit="1500 Actif immobilisé (HT)" credit="2000 Fournisseurs" montant="49'815" libelle="Valeur de l'investissement hors taxe" />
      <Ecriture debit="1171 IP sur inv. et ACE" credit="2000 Fournisseurs" montant="4'035" libelle="TVA 8.1% sur investissement — compte séparé de 1170" sub />
      <Ecriture debit="2000 Fournisseurs" credit="1020 Banque" montant="53'850" libelle="Paiement TTC" sub />

      </Section>
      <Section title="5. Réalisation du décompte TVA trimestriel" defaultOpen={false}>
      <P>Le décompte TVA consiste à soustraire les impôts préalables de la TVA due. Le solde est à payer à l'AFC (ou remboursé par l'AFC si les IP dépassent la TVA due).</P>
      <Loi art="Art. 35 al. 1 LTVA — Périodicité du décompte">
        Le décompte TVA est en général réalisé <strong>trimestriellement</strong>. Il est réalisé semestriellement pour les assujettis qui appliquent la méthode du taux de la dette fiscale nette.
      </Loi>
      <Loi art="Art. 39 LTVA — Méthode des contre-prestations convenues">
        Par défaut, le décompte est établi sur la base des contre-prestations <strong>convenues</strong> (facturées) — pas nécessairement encaissées. Sur demande, l'AFC peut autoriser le décompte selon les contre-prestations <strong>reçues</strong> (encaissées).
      </Loi>

      <DecompteBox
        title="Décompte TVA effectif — SwiSSwatch SA (exercice N)"
        rows={[
          ['Chiffre d\'affaires imposable (HT)', "CHF 550'000", false],
          ['TVA due à 2.6%', "CHF 14'300", false],
          ['Impôt préalable sur achats (1170)', "− CHF 9'351", false],
          ['Impôt préalable sur inv. et ACE (1171)', "− CHF 4'035", false],
        ]}
        total={['SOLDE DÛ À L\'AFC', "CHF 914"]}
      />

      <H3>Écriture de décompte TVA trimestriel</H3>
      <Ecriture debit="2200 TVA Due" credit="1170 IP sur achats" montant="9'351" libelle="Compensation impôt préalable achats" />
      <Ecriture debit="2200 TVA Due" credit="1171 IP sur inv. et ACE" montant="4'035" libelle="Compensation impôt préalable investissements" sub />
      <Ecriture debit="2200 TVA Due" credit="1020 Banque" montant="914" libelle="Versement du solde à l'AFC" sub />

      <Note color="green">Après le décompte, les comptes 1170, 1171 et 2200 sont soldés à zéro. Si l'IP dépassait la TVA due, c'est l'AFC qui rembourse — on débiterait alors 1020 Banque au crédit de 2200.</Note>

      </Section>
      <Section title="6. Formules de conversion HT ↔ TTC" defaultOpen={false}>
      <Tableau
        caption="Formules pratiques — à maîtriser absolument"
        headers={['Calcul', 'Formule', 'Exemple (taux 8.1%)']}
        rows={[
          { cells: ['TTC → HT', 'HT = TTC ÷ (1 + taux)', 'CHF 108.10 ÷ 1.081 = CHF 100.00'], _mono: true },
          { cells: ['HT → TTC', 'TTC = HT × (1 + taux)', 'CHF 100.00 × 1.081 = CHF 108.10'], _mono: true },
          { cells: ['TTC → TVA', 'TVA = TTC − HT = TTC × taux ÷ (1 + taux)', 'CHF 108.10 × 0.081 ÷ 1.081 = CHF 8.10'], _mono: true },
          { cells: ['HT → TVA', 'TVA = HT × taux', 'CHF 100.00 × 8.1% = CHF 8.10'], _mono: true },
        ]}
      />
      <Tableau
        caption="Récapitulatif des taux — toutes conversions"
        headers={['Taux', 'Diviseur TTC→HT', 'Multiplicateur HT→TTC', 'TVA sur HT']}
        rows={[
          { cells: ['8.1% (normal)', '÷ 1.081', '× 1.081', '× 0.081'] },
          { cells: ['2.6% (réduit)', '÷ 1.026', '× 1.026', '× 0.026'] },
          { cells: ['3.8% (hébergement)', '÷ 1.038', '× 1.038', '× 0.038'] },
        ]}
      />
      </Section>
    </div>
  );
}

// ─── ONGLET 3 : TAUX DETTE FISCALE NETTE (AU BRUT) ───────────────────────────
function TabDetteFiscaleNette() {
  return (
    <div>
      <Section title="1. Principe — méthode simplifiée" defaultOpen={true}>
      <P>Pour simplifier la charge administrative des petites entreprises, le législateur a prévu une méthode de décompte simplifiée. Au lieu de comptabiliser séparément la TVA sur chaque facture, toutes les opérations sont enregistrées aux montants TTC et le décompte se calcule en appliquant un taux forfaitaire sur le chiffre d'affaires TTC.</P>

      <Loi art="Art. 37 al. 1 LTVA — Conditions d'application">
        Peut appliquer la méthode du taux de la dette fiscale nette tout assujetti dont le chiffre d'affaires annuel n'excède pas <strong>CHF 5'024'000</strong> et dont le montant d'impôt calculé ne dépasse pas <strong>CHF 108'000</strong>.
      </Loi>
      <Loi art="Art. 37 al. 2 LTVA — Calcul">
        L'assujetti détermine sa créance fiscale en multipliant la somme des contre-prestations imposables (TVA incluse) par le taux de la dette fiscale nette autorisé par l'AFC.
      </Loi>
      <Loi art="Art. 37 al. 4 LTVA — Engagement minimum">
        L'assujetti doit appliquer cette méthode pendant au moins une période fiscale complète (une année).
      </Loi>

      </Section>
      <Section title="2. Les taux de la dette fiscale nette" defaultOpen={false}>
      <P>L'AFC fixe un taux forfaitaire pour chaque secteur d'activité. Ce taux est <strong>toujours inférieur au taux légal</strong> car il tient compte de l'impôt préalable moyen de la branche. Il n'est donc pas nécessaire de comptabiliser séparément les impôts préalables.</P>

      <Tableau
        caption="Exemples de taux de la dette fiscale nette (AFC)"
        headers={['Activité', 'Taux légal', 'Taux DFN (indicatif)', 'Différence (IP estimé)']}
        rows={[
          { cells: ['Fabrication de denrées alimentaires', '2.6%', '0.1%', '2.5% (IP élevé)'] },
          { cells: ['Commerce de détail alimentaire', '2.6%', '0.6%', '2.0%'] },
          { cells: ['Restaurant / café', '8.1%', '5.1%', '3.0%'] },
          { cells: ['Bureau fiduciaire / conseils', '8.1%', '6.0%', '2.1%'] },
          { cells: ['Commerce de vêtements', '8.1%', '5.9%', '2.2%'] },
        ]}
      />
      <Note>Les taux DFN sont publiés et mis à jour par l'AFC. Ils varient selon la branche et sont négociés avec les associations professionnelles (art. 37 al. 3 LTVA). Vérifiez toujours le taux applicable sur le site de l'AFC avant de l'appliquer.</Note>

      </Section>
      <Section title="3. Comptabilisation au brut — toutes opérations en TTC" defaultOpen={false}>
      <P>En méthode DFN, aucune séparation HT/TVA n'est nécessaire. Tout est enregistré au montant TTC payé ou encaissé. Les comptes 1170, 1171 et 2200 ne sont pas utilisés.</P>

      <Note>Exemple : Léa Meyer applique le taux DFN de 0.1% (fabrication de montres). CA HT = CHF 550'000 → CA TTC = 550'000 × 1.026 = <strong>CHF 564'300</strong></Note>

      <H3>Comptabilisation des ventes (TTC)</H3>
      <Ecriture debit="1020 Banque (ou 1100 Clients)" credit="3000 Ventes (TTC)" montant="564'300" libelle="Ventes enregistrées au montant TTC — sans séparation TVA" />

      <H3>Comptabilisation des achats (TTC)</H3>
      <Ecriture debit="4000 Achats (TTC)" credit="1020 Banque" montant="369'000" libelle="Achats enregistrés au montant TTC — IP non séparé" />

      <H3>Comptabilisation des investissements (TTC)</H3>
      <Ecriture debit="1500 Actif immobilisé (TTC)" credit="1020 Banque" montant="53'850" libelle="Investissement enregistré TTC — aucune déduction IP" />

      </Section>
      <Section title="4. Réalisation du décompte TVA (semestriel)" defaultOpen={false}>
      <P>Le décompte DFN est réalisé deux fois par an (semestriellement). Il suffit de multiplier le CA TTC par le taux DFN :</P>

      <DecompteBox
        title="Décompte TVA — Méthode DFN (SwiSSwatch SA)"
        rows={[
          ['Chiffre d\'affaires TTC (solde compte 3000)', "CHF 564'300", false],
          ['Taux de la dette fiscale nette applicable', '0.1%', false],
          ['TVA due = 564\'300 × 0.1%', "CHF 564.30", true],
        ]}
        total={['MONTANT À VERSER À L\'AFC', "CHF 564.30"]}
      />

      <H3>Écriture de décompte DFN</H3>
      <Ecriture debit="3000 Ventes (TTC)" credit="2200 TVA Due" montant="564.30" libelle="Constatation de la TVA due au taux DFN (0.1% × 564'300)" />
      <Ecriture debit="2200 TVA Due" credit="1020 Banque" montant="564.30" libelle="Versement à l'AFC" sub />

      </Section>
      <Section title="5. Comparaison des deux méthodes" defaultOpen={false}>
      <Tableau
        caption="Méthode effective (au net) vs Taux DFN (au brut)"
        headers={['Critère', 'Méthode effective', 'Taux DFN']}
        rows={[
          { cells: ['Conditions', 'Toutes entreprises assujetties', 'CA ≤ CHF 5\'024\'000 et impôt ≤ CHF 108\'000'] },
          { cells: ['Comptabilisation', 'HT séparé de la TVA — 3 comptes TVA', 'Tout en TTC — 1 seul compte TVA'] },
          { cells: ['Décompte TVA', 'Trimestriel — TVA due − IP', 'Semestriel — CA TTC × taux DFN'] },
          { cells: ['Précision', 'Exacte — IP réel déduit', 'Forfaitaire — IP moyen de la branche'] },
          { cells: ['Charge administrative', 'Plus élevée', 'Allégée'] },
          { cells: ['Comptes utilisés', '1170, 1171, 2200', '2200 uniquement (au décompte)'] },
          { cells: ['Avantage fiscal potentiel', 'IP réel — peut être supérieur à la moyenne', 'IP forfaitaire — peut être inférieur au réel'] },
        ]}
      />
      <Note>Le choix entre les deux méthodes dépend de la structure de coûts de l'entreprise. Une entreprise avec beaucoup d'achats de matières (IP élevé) peut avoir intérêt à la méthode effective. Une entreprise de services (peu d'achats) peut préférer la simplicité du taux DFN.</Note>
      </Section>
    </div>
  );
}

// ─── ONGLET 4 : CAS PRATIQUES COMPLETS ───────────────────────────────────────
function TabCasPratiques() {
  return (
    <div>
      <Section title="Cas 1 — Cycle complet TVA effective (taux réduit 2.6%)" defaultOpen={true}>
      <Note>Entreprise : SwiSSwatch SA assujettie à la TVA. CA annuel CHF 180'000 HT. Achats matières CHF 80'000 TTC (taux 2.6%). Loyer CHF 24'000 TTC (taux 8.1%). Décompte trimestriel.</Note>

      <H3>Étape 1 — Ventes trimestrielles (CA = CHF 45'000 HT × 4 trimestres)</H3>
      <Ecriture debit="1100 Clients" credit="3000 Ventes (HT)" montant="45'000" libelle="CA trimestriel HT" />
      <Ecriture debit="1100 Clients" credit="2200 TVA Due" montant="1'170" libelle="TVA 2.6% sur CA (45'000 × 2.6%)" sub />

      <H3>Étape 2 — Achats de matières trimestriels (CHF 20'000 TTC)</H3>
      <P>HT = 20'000 ÷ 1.026 = CHF 19'493 | IP = CHF 507</P>
      <Ecriture debit="4000 Achats (HT)" credit="2000 Fournisseurs" montant="19'493" libelle="Achats HT" />
      <Ecriture debit="1170 IP sur achats" credit="2000 Fournisseurs" montant="507" libelle="IP 2.6% sur achats matières" sub />

      <H3>Étape 3 — Loyer trimestriel (CHF 6'000 TTC)</H3>
      <P>HT = 6'000 ÷ 1.081 = CHF 5'550 | IP = CHF 450</P>
      <Ecriture debit="6000 Charges de locaux (HT)" credit="2000 Fournisseurs" montant="5'550" libelle="Loyer HT" />
      <Ecriture debit="1171 IP sur ACE" credit="2000 Fournisseurs" montant="450" libelle="IP 8.1% sur loyer" sub />

      <H3>Étape 4 — Décompte TVA trimestriel</H3>
      <DecompteBox
        title="Décompte TVA T1 — SwiSSwatch SA"
        rows={[
          ['TVA collectée (2200)', "CHF 1'170", false],
          ['IP sur achats matières (1170)', "− CHF 507", false],
          ['IP sur loyer (1171)', "− CHF 450", false],
        ]}
        total={['SOLDE DÛ À L\'AFC', "CHF 213"]}
      />
      <Ecriture debit="2200 TVA Due" credit="1170 IP sur achats" montant="507" libelle="Compensation IP achats" />
      <Ecriture debit="2200 TVA Due" credit="1171 IP sur ACE" montant="450" libelle="Compensation IP loyer" sub />
      <Ecriture debit="2200 TVA Due" credit="1020 Banque" montant="213" libelle="Versement solde à l'AFC" sub />

      </Section>
      <Section title="Cas 2 — Taux mixtes sur une même facture" defaultOpen={false}>
      <Note>Un traiteur facture à un client un repas livré à domicile. La facture comprend : nourriture CHF 200 HT (taux 2.6%) + service de livraison CHF 50 HT (taux 8.1%).</Note>

      <H3>Calcul de la facture</H3>
      <Tableau
        headers={['Prestation', 'HT', 'Taux', 'TVA', 'TTC']}
        rows={[
          { cells: ['Nourriture', "CHF 200.00", '2.6%', "CHF 5.20", "CHF 205.20"] },
          { cells: ['Service de livraison', "CHF 50.00", '8.1%', "CHF 4.05", "CHF 54.05"] },
          { cells: ['TOTAL FACTURE', "CHF 250.00", '—', "CHF 9.25", "CHF 259.25"], _bold: true },
        ]}
      />
      <H3>Comptabilisation</H3>
      <Ecriture debit="1100 Clients" credit="3000 Ventes (HT)" montant="250.00" libelle="CA HT total" />
      <Ecriture debit="1100 Clients" credit="2200 TVA Due" montant="5.20" libelle="TVA 2.6% sur nourriture" sub />
      <Ecriture debit="1100 Clients" credit="2200 TVA Due" montant="4.05" libelle="TVA 8.1% sur livraison" sub />

      </Section>
      <Section title="Cas 3 — Remboursement de TVA (IP supérieur à TVA due)" defaultOpen={false}>
      <Note>Un exportateur vend 100% à l'étranger (taux 0% — exonéré). Ses achats sont soumis à TVA. TVA due = CHF 0. IP sur achats = CHF 8'500. L'AFC rembourse le solde.</Note>
      <DecompteBox
        title="Décompte TVA — Exportateur"
        rows={[
          ['TVA due sur ventes (0% — exonéré)', "CHF 0", false],
          ['Impôt préalable sur achats', "− CHF 8'500", false],
        ]}
        total={['SOLDE À REMBOURSER PAR L\'AFC', "CHF 8'500"]}
        color="#059669"
      />
      <Ecriture debit="1170 IP sur achats" credit="2200 TVA Due" montant="8'500" libelle="Compensation — résultat négatif pour 2200" />
      <Ecriture debit="1020 Banque" credit="2200 TVA Due" montant="8'500" libelle="Remboursement de l'AFC — crédit de 2200" />
      <Note color="green">Les exportateurs récupèrent systématiquement la TVA payée sur leurs achats. C'est l'un des avantages de l'assujettissement volontaire pour les entreprises sous le seuil de CHF 100'000.</Note>

      </Section>
      <Section title="Cas 4 — Prestations à soi-même" defaultOpen={false}>
      <Loi art="Art. 31 LTVA — Prestations à soi-même">
        L'assujetti qui prélève de son entreprise des biens ou des services pour un usage privé a l'obligation de décompter la TVA grevant l'opération. Le montant de TVA est comptabilisé comme une réduction de l'impôt préalable.
      </Loi>
      <Note>Exemple : un horloger assujetti prélève CHF 500 de marchandises de son stock pour sa consommation personnelle. Il doit décompter la TVA comme si c'était une vente à un client.</Note>
      <Ecriture debit="8500 Prélèvements privés (ou 6xxx)" credit="1170 IP sur achats" montant="13" libelle="TVA sur prélèvement privé (500 × 2.6%) — réduction IP" />
      </Section>
    </div>
  );
}

// ─── ONGLET 5 : POINTS CLÉS ET ERREURS FRÉQUENTES ────────────────────────────
function TabPointsCles() {
  return (
    <div>
      <Section title="1. Les erreurs les plus fréquentes en pratique fiduciaire" defaultOpen={true}>

      <H3>Erreur 1 — Confondre exclue et exonérée</H3>
      <Note color="red">Une association qui loue des appartements (prestation exclue) ne peut PAS déduire la TVA payée sur ses frais de rénovation. Un exportateur (prestation exonérée) peut récupérer intégralement la TVA sur ses achats. La différence est fondamentale pour le calcul de l'IP déductible.</Note>

      <H3>Erreur 2 — Ne pas vérifier les factures reçues</H3>
      <Note color="red">Une facture sans numéro TVA ou sans mention du taux ne permet pas de déduire l'impôt préalable. L'AFC peut refuser la déduction lors d'un contrôle. Vérifiez systématiquement les factures avant saisie.</Note>

      <H3>Erreur 3 — Mauvais taux sur les repas vs nourriture</H3>
      <Note color="red">Les denrées alimentaires vendues en magasin = 2.6%. Les mêmes aliments servis dans un restaurant = 8.1% (taux normal). Le contexte de consommation change le taux applicable.</Note>

      <H3>Erreur 4 — Oublier les prestations à soi-même</H3>
      <Note color="red">Tout prélèvement de marchandises ou de services pour usage privé doit être déclaré comme une prestation à soi-même. L'oubli constitue une fraude fiscale.</Note>

      <H3>Erreur 5 — Mauvaise périodicité du décompte</H3>
      <Note color="red">Méthode effective → décompte trimestriel. Méthode DFN → décompte semestriel. Un retard de décompte entraîne des intérêts moratoires.</Note>

      </Section>
      <Section title="2. Récapitulatif des comptes TVA" defaultOpen={false}>
      <Tableau
        caption="Tous les comptes TVA — plan comptable PME suisse"
        headers={['Compte', 'Intitulé', 'Méthode', 'Mouvement']}
        rows={[
          { cells: ['2200', 'TVA Due', 'Effective', 'Crédit à chaque vente | Débit au décompte'] },
          { cells: ['1170', 'IP sur achats de marchandises', 'Effective', 'Débit à chaque achat | Crédit au décompte'] },
          { cells: ['1171', 'IP sur investissements et ACE', 'Effective', 'Débit à chaque achat | Crédit au décompte'] },
          { cells: ['2200', 'TVA Due (décompte DFN)', 'DFN', 'Constatée uniquement au décompte semestriel'] },
          { cells: ['3809', 'TVA Due selon dette fiscale nette', 'DFN (variante)', 'Parfois utilisé comme sous-compte de 3000'] },
        ]}
      />

      </Section>
      <Section title="3. Checklist décompte TVA trimestriel" defaultOpen={false}>
      {[
        'Additionner tous les crédits du compte 2200 (TVA collectée sur ventes)',
        'Additionner tous les débits du compte 1170 (IP sur achats de marchandises)',
        'Additionner tous les débits du compte 1171 (IP sur investissements et ACE)',
        'Calculer : TVA due − IP 1170 − IP 1171 = solde',
        'Si solde positif → virer le solde de 2200 à 1020 Banque (paiement AFC)',
        'Si solde négatif → virer le solde de 1020 Banque à 2200 (remboursement AFC)',
        'Vérifier que 2200, 1170 et 1171 sont soldés à zéro après le décompte',
        'Conserver le décompte signé comme pièce justificative (art. 958f CO — conservation 10 ans)',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', fontSize: '0.84rem', color: '#475569', alignItems: 'flex-start' }}>
          <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#2563eb', color: '#fff', fontSize: '0.68rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
          <span>{pt}</span>
        </div>
      ))}

      </Section>
      <Section title="4. Résumé des articles de loi essentiels" defaultOpen={false}>
      <Tableau
        headers={['Article', 'Sujet', 'Contenu essentiel']}
        rows={[
          { cells: ['Art. 10 LTVA', 'Assujettissement', 'Obligation dès CHF 100\'000 CA annuel'] },
          { cells: ['Art. 21 LTVA', 'Prestations exclues', 'Liste des prestations hors champ (soins, éducation, assurances, location habitation...)'] },
          { cells: ['Art. 22 LTVA', 'Option pour l\'imposition', 'Possibilité d\'opter pour la TVA sur certaines prestations exclues'] },
          { cells: ['Art. 23 LTVA', 'Prestations exonérées', 'Exportations — TVA = 0% mais IP déductible'] },
          { cells: ['Art. 25 LTVA', 'Taux', '8.1% normal | 2.6% réduit | 3.8% hébergement'] },
          { cells: ['Art. 26 LTVA', 'Factures', 'Contenu obligatoire des factures TVA'] },
          { cells: ['Art. 31 LTVA', 'Prestations à soi-même', 'Obligation de décompter la TVA sur les prélèvements privés'] },
          { cells: ['Art. 35 LTVA', 'Périodicité', 'Trimestriel (effectif) | Semestriel (DFN)'] },
          { cells: ['Art. 37 LTVA', 'Taux DFN', 'Conditions et calcul de la méthode simplifiée'] },
          { cells: ['Art. 39 LTVA', 'Base du décompte', 'Contre-prestations convenues (par défaut) ou reçues (sur autorisation)'] },
        ]}
      />
      </Section>
    </div>
  );
}

// ─── ONGLET 6 : EXEMPTIONS & CAS SPÉCIAUX ───────────────────────────────────
function TabExemptions() {
  return (
    <div>
      <Section title="1. Prestations exonérées (art. 21 LTVA)" defaultOpen={true}>
      <P>Certaines prestations sont exclues du champ de la TVA par la loi. Les fournisseurs de ces prestations ne facturent pas de TVA à leurs clients, mais ne peuvent pas non plus récupérer l'impôt préalable sur leurs propres achats. Les principales catégories sont :</P>
      <P><strong>Soins médicaux</strong> — prestations fournies par les médecins, dentistes, physiothérapeutes, psychologues et autres professionnels de la santé reconnus. Seules les prestations à visée thérapeutique sont exclues ; les prestations esthétiques restent imposables.</P>
      <P><strong>Formation et enseignement</strong> — enseignement scolaire, universitaire, formation professionnelle continue, cours de langues et de musique dispensés par des institutions reconnues ou des enseignants indépendants.</P>
      <P><strong>Location immobilière</strong> — la mise à disposition d'immeubles ou de parties d'immeubles pour l'usage de tiers (habitation, bureaux) est exclue. Le propriétaire peut toutefois opter pour l'imposition volontaire s'il loue à des assujettis (art. 22 LTVA).</P>
      <P><strong>Opérations d'assurance</strong> — primes d'assurance, prestations de réassurance et activités d'intermédiaires d'assurance.</P>
      <P><strong>Opérations bancaires</strong> — intérêts sur prêts et dépôts, opérations sur devises et moyens de paiement, négoce de titres pour le compte propre de l'établissement.</P>
      <P><strong>Culture et sport</strong> — sous certaines conditions, les prestations culturelles et sportives fournies par des organismes sans but lucratif peuvent être exclues du champ de la TVA.</P>
      <Loi art="Art. 21 al. 2 LTVA — Liste des prestations exclues du champ de l'impôt">
        L'art. 21 al. 2 LTVA énumère de manière exhaustive les prestations exclues du champ de la TVA. Cette liste comprend notamment les soins médicaux, l'enseignement, la location immobilière, les opérations d'assurance, les opérations bancaires et certaines prestations culturelles et sportives.
      </Loi>
      <Note>Attention : exonéré = pas de TVA mais aussi pas de récupération de l'impôt préalable. L'assujetti peut opter pour l'imposition volontaire (art. 22 LTVA) s'il fournit ces prestations à d'autres assujettis.</Note>

      </Section>
      <Section title="2. Prestations exonérées avec droit à déduction (art. 23 LTVA)" defaultOpen={false}>
      <P>Les exportations de biens, les prestations de services fournies à des destinataires ayant leur siège à l'étranger et les transports internationaux de biens et de personnes constituent des prestations exonérées au sens de l'art. 23 LTVA. Le taux applicable est de 0%.</P>
      <P>Contrairement aux exclusions de l'art. 21, ces prestations ouvrent droit à la déduction de l'impôt préalable (taux 0%).</P>
      <Note color="green">C'est la situation la plus avantageuse : pas de TVA facturée, mais récupération intégrale de l'impôt préalable sur les achats.</Note>

      </Section>
      <Section title="3. Moment de l'imposition et méthodes de décompte" defaultOpen={false}>
      <P>La TVA peut être déclarée selon deux méthodes distinctes, qui diffèrent par le moment où la créance fiscale naît :</P>
      <P><strong>Contre-prestations convenues (accrual)</strong> — la TVA est due dès l'émission de la facture, indépendamment de l'encaissement effectif. C'est la méthode par défaut.</P>
      <P><strong>Contre-prestations reçues (cash)</strong> — la TVA n'est due qu'au moment de l'encaissement effectif du prix. Cette méthode nécessite une autorisation de l'AFC.</P>
      <Tableau
        caption="Comparaison : contre-prestations convenues vs reçues"
        headers={['Critère', 'Convenues (accrual)', 'Reçues (cash)']}
        rows={[
          { cells: ['Quand déclarer la TVA', 'À l\'émission de la facture', 'À l\'encaissement du paiement'] },
          { cells: ['Avantage', 'Correspondance exacte avec le chiffre d\'affaires comptable', 'Pas de TVA à avancer sur les factures impayées'] },
          { cells: ['Inconvénient', 'TVA due même si le client n\'a pas encore payé', 'Suivi plus complexe des encaissements'] },
        ]}
      />
      <P>La plupart des entreprises utilisent la méthode des contre-prestations convenues (factures émises). La méthode reçue est plus simple mais ne s'applique qu'à certaines conditions.</P>
      <Loi art="Art. 39-40 LTVA — Méthodes de décompte">
        L'art. 39 LTVA prévoit le décompte selon les contre-prestations convenues (par défaut). L'art. 40 LTVA autorise, sur demande, le décompte selon les contre-prestations reçues lorsque les conditions sont remplies.
      </Loi>

      </Section>
      <Section title="4. Cas spéciaux" defaultOpen={false}>

      <H3>Importation de biens</H3>
      <P>Lors de l'importation de biens en Suisse, la TVA est perçue par l'Office fédéral de la douane et de la sécurité des frontières (OFDF) au passage de la frontière. Si l'entreprise importatrice est assujettie à la TVA, elle peut récupérer cette TVA d'importation en tant qu'impôt préalable dans son décompte périodique.</P>
      <Ecriture debit="1170 Impôt préalable" credit="2000 Créanciers (douane)" montant="xxx" libelle="TVA importation — récupérable" />

      <H3>Exportation de biens</H3>
      <P>Les exportations sont soumises au taux 0% — l'entreprise ne facture pas de TVA à son client étranger mais récupère intégralement l'impôt préalable sur ses achats en Suisse.</P>
      <P>Preuve d'exportation obligatoire (document douanier, CMR, etc.).</P>

      <H3>Prestations entre la Suisse et l'étranger</H3>
      <P>Pour les prestations de services, le principe du lieu du destinataire s'applique (art. 8 LTVA). Le lieu de la prestation est réputé se situer au domicile ou au siège du destinataire, et non du prestataire.</P>
      <P>Si un consultant suisse facture un client en Allemagne, la prestation n'est pas soumise à la TVA suisse mais peut être soumise à la TVA allemande (reverse charge).</P>

      <H3>Double affectation et correction pro rata</H3>
      <P>Lorsqu'un assujetti réalise à la fois des prestations imposables et exonérées (sans droit à déduction), il doit répartir l'impôt préalable proportionnellement.</P>
      <P>Exemple : un cabinet médical exerce une activité de soins thérapeutiques (prestation exclue selon l'art. 21 LTVA) et une activité de médecine esthétique (prestation imposable au taux normal). L'impôt préalable sur les charges communes (loyer, administration, informatique) n'est récupérable qu'à hauteur de la part du chiffre d'affaires imposable par rapport au chiffre d'affaires total. Seule la TVA sur les achats directement liés à l'activité imposable (esthétique) est intégralement déductible.</P>
      </Section>
    </div>
  );
}

// ─── VUE PRINCIPALE ───────────────────────────────────────────────────────────
export default function TVAView() {
  const [tab, setTab] = useState('assujettissement');

  const TABS = [
    { id: 'assujettissement', label: 'Assujettissement & taux' },
    { id: 'effective', label: 'Méthode effective (au net)' },
    { id: 'dfn', label: 'Dette fiscale nette (au brut)' },
    { id: 'cas', label: 'Cas pratiques' },
    { id: 'exemptions', label: 'Exemptions & cas spéciaux' },
    { id: 'cles', label: 'Points clés & erreurs' },
  ];

  return (
    <TheoryLayout
      title="3. TVA suisse — Taxe sur la valeur ajoutée"
      tag="tag-tva"
      tagLabel="TVA"
      meta="LTVA · OTVA · AFC 2024"
      tabs={TABS}
      activeTab={tab}
      onTabChange={setTab}
    >
        {tab === 'assujettissement' && <TabAssujettissement />}
        {tab === 'effective' && <TabMethodeEffective />}
        {tab === 'dfn' && <TabDetteFiscaleNette />}
        {tab === 'cas' && <TabCasPratiques />}
        {tab === 'exemptions' && <TabExemptions />}
        {tab === 'cles' && <TabPointsCles />}
    </TheoryLayout>
  );
}