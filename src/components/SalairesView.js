import React, { useState } from 'react';
import { Info, ClipboardList, AlertTriangle } from 'lucide-react';
import { P, H3, Note, Loi, Tableau, Ecriture, TheoryLayout, Section } from './TheoryUI';
import { fichesSalaire } from '../data/theory/09-fiches-salaire';

// ─── UTILITAIRES ──────────────────────────────────────────────────────────────
function fmt(n) {
  if (n == null) return '—';
  return Number(n).toLocaleString('fr-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ─── ONGLET 1 : ASSURANCES SOCIALES ──────────────────────────────────────────
function TabAssurances() {
  return (
    <div>
      <Section title="1. Vue d'ensemble du système suisse" defaultOpen={true}>
      <P>En Suisse, les revenus du travail — salarié ou indépendant — sont obligatoirement soumis à plusieurs assurances sociales. Ces assurances garantissent un revenu de remplacement dans les situations d'incapacité de travail (maladie, accident, invalidité, vieillesse, chômage).</P>
      <P>L'employeur a la responsabilité de payer l'intégralité des cotisations dues — sa part et celle du salarié. La part de l'employé est retenue directement sur le salaire.</P>

      </Section>
      <Section title="2. AVS / AI / APG" defaultOpen={false}>
      <Loi art="Art. 5 LAVS — Cotisations salariés">
        Une cotisation de <strong>4.35%</strong> est perçue sur le revenu provenant d'une activité dépendante (salaire déterminant).
      </Loi>
      <Loi art="Art. 13 LAVS — Cotisations employeurs">
        Les cotisations d'employeurs s'élèvent à <strong>4.35%</strong> du total des salaires déterminants versés.
      </Loi>
      <Tableau
        caption="AVS / AI / APG — Taux 2024"
        headers={['Assurance', 'Part employé', 'Part employeur', 'Total', 'Base de calcul']}
        rows={[
          { cells: ['AVS (Assurance vieillesse et survivants)', '4.35%', '4.35%', '8.70%', 'Totalité du salaire brut'] },
          { cells: ['AI (Assurance invalidité)', '0.70%', '0.70%', '1.40%', 'Totalité du salaire brut'] },
          { cells: ['APG (Assurance perte de gain)', '0.25%', '0.25%', '0.50%', 'Totalité du salaire brut'] },
          { cells: ['TOTAL AVS/AI/APG', '5.30%', '5.30%', '10.60%', ''], _bold: true },
        ]}
      />
      <Note color="blue">Les cotisations AI et APG reprennent les mêmes règles que l'AVS — elles sont calculées par les mêmes caisses de compensation et sur la même base salariale.</Note>

      </Section>
      <Section title="3. Assurance chômage (AC)" defaultOpen={false}>
      <Loi art="Art. 3 LACI — Taux de cotisation">
        Les cotisations s'élèvent à <strong>2.2%</strong> jusqu'au montant maximal du gain mensuel assuré (CHF 12'350/mois = CHF 148'200/an). Elles sont à parts égales à la charge du travailleur et de l'employeur.
      </Loi>
      <Tableau
        caption="AC — Taux 2024"
        headers={['Tranche de salaire', 'Part employé', 'Part employeur', 'Total']}
        rows={[
          { cells: ['Jusqu\'à CHF 148\'200/an (CHF 12\'350/mois)', '1.10%', '1.10%', '2.20%'] },
          { cells: ['Part > CHF 148\'200 — cotisation de solidarité*', '0.50%', '0.50%', '1.00%'] },
        ]}
      />
      <Note>* La cotisation de solidarité a été suspendue depuis le 1er janvier 2023 en raison de la bonne situation conjoncturelle. Elle peut être réactivée par le Conseil fédéral.</Note>

      </Section>
      <Section title="4. Assurance accidents (LAA)" defaultOpen={false}>
      <Loi art="Art. 91 LAA — Prise en charge des primes">
        Les primes d'assurance accidents <strong>professionnels</strong> sont à la charge de l'employeur. Les primes d'assurance accidents <strong>non professionnels</strong> sont à la charge du travailleur. L'employeur les retient sur le salaire.
      </Loi>
      <Tableau
        caption="LAA — Répartition des primes"
        headers={['Couverture', 'À charge de', 'Base', 'Taux']}
        rows={[
          { cells: ['Accidents professionnels (LAAP)', 'Employeur', 'Salaire jusqu\'à CHF 148\'200/an', 'Variable selon branche (ex. 0.80‰)'] },
          { cells: ['Accidents non professionnels (LAANP)', 'Employé (déduit du salaire)', 'Salaire jusqu\'à CHF 148\'200/an', 'Variable selon assureur (ex. 2.50‰)'] },
        ]}
      />
      <Note color="blue">Le taux exact dépend du contrat d'assurance (SUVA ou assureur privé) et du secteur d'activité. L'employeur peut prendre volontairement en charge la LAANP — cette pratique est admise.</Note>

      </Section>
      <Section title="5. Prévoyance professionnelle (LPP)" defaultOpen={false}>
      <Loi art="Art. 7 LPP — Salariés assurés">
        Les salariés auxquels un même employeur verse un salaire annuel supérieur à <strong>CHF 22'050</strong> sont soumis à l'assurance obligatoire dès le 1er janvier suivant leur 17e anniversaire (risques décès/invalidité) et leur 24e anniversaire (vieillesse).
      </Loi>
      <Loi art="Art. 8 LPP — Salaire coordonné">
        La partie du salaire annuelle comprise entre <strong>CHF 25'725</strong> et <strong>CHF 88'200</strong> doit être assurée (salaire coordonné). Si le salaire coordonné est inférieur à CHF 3'675, il est arrondi à ce montant.
      </Loi>
      <Tableau
        caption="LPP — Calcul du salaire coordonné"
        headers={['Salaire annuel brut', 'Salaire coordonné', 'Remarque']}
        rows={[
          { cells: ['< CHF 22\'050', 'Non assuré', 'En dessous du seuil d\'entrée LPP'] },
          { cells: ['CHF 22\'050 à CHF 29\'400', 'Minimum CHF 3\'675', 'Arrondi au minimum'] },
          { cells: ['CHF 29\'400 à CHF 88\'200', 'Salaire − CHF 25\'725', 'Déduction de coordination'] },
          { cells: ['> CHF 88\'200', 'Maximum CHF 62\'475', 'Plafonné au maximum LPP obligatoire'] },
        ]}
      />
      <Loi art="Art. 66 LPP — Répartition des cotisations">
        La somme des cotisations de l'employeur doit être au moins égale à la somme des cotisations de tous les salariés. En pratique, la plupart des caisses répartissent à 50%/50%.
      </Loi>
      <Note color="blue">Le taux de cotisation LPP varie selon l'âge et l'institution de prévoyance. L'employeur paie l'intégralité à la caisse et retient la part employé sur le salaire.</Note>

      </Section>
      <Section title="6. Allocations familiales (CAF)" defaultOpen={false}>
      <Loi art="Art. 5 LAFam — Montants minimaux">
        L'allocation pour enfant s'élève à <strong>CHF 200/mois minimum</strong>. L'allocation de formation professionnelle s'élève à <strong>CHF 250/mois minimum</strong> (de 16 à 25 ans).
      </Loi>
      <P>Les cotisations CAF sont entièrement à la charge de l'employeur. Le taux varie selon le canton. Les allocations reçues de la caisse sont transmises à l'employé — elles n'ont aucun impact sur le compte de résultat de l'entreprise (transit par le compte 2275).</P>

      </Section>
      <Section title="7. Tableau récapitulatif global" defaultOpen={false}>
      <Tableau
        caption="Récapitulatif cotisations sociales 2024 — exemple CHF 3'000 brut/mois"
        headers={['Assurance', 'Taux employé', 'CHF employé', 'Taux employeur', 'CHF employeur']}
        rows={[
          { cells: ['AVS/AI/APG', '5.30%', "159.00", '5.30%', "159.00"] },
          { cells: ['AC', '1.10%', "33.00", '1.10%', "33.00"] },
          { cells: ['LAANP', '2.50‰', "7.50", '—', '—'] },
          { cells: ['LAAP', '—', '—', '0.80‰', "2.40"] },
          { cells: ['LPP (salaire coordonné CHF 974*)', '8.00%', "77.92", '8.00%', "77.92"] },
          { cells: ['CAF', '—', '—', '3.00%', "90.00"] },
          { cells: ['TOTAL', '', "277.42", '', "362.32"], _bold: true },
        ]}
      />
      <Note>* Salaire coordonné mensuel = (3'000 × 12 − 25'725) ÷ 12 = CHF 974.58/mois. Les taux LPP sont à titre indicatif — ils varient selon la caisse.</Note>
      </Section>
    </div>
  );
}

// ─── ONGLET 2 : CALCUL DU SALAIRE ────────────────────────────────────────────
function TabCalcul() {
  return (
    <div>
      <Section title="1. Le décompte de salaire — structure" defaultOpen={true}>
      <P>Le décompte de salaire (fiche de salaire) présente le passage du salaire brut au salaire net versé à l'employé, puis au coût total pour l'employeur. C'est un document légal que l'employeur doit remettre à chaque paiement.</P>

      </Section>
      <Section title="2. Exemple complet — Jules Weber, 27 ans, 1 enfant" defaultOpen={false}>
      <Note>
        <strong>Données :</strong> Salaire brut contractuel : CHF 3'000/mois | 1 enfant (allocation CHF 200) | LPP cotisation totale CHF 3'600/an = CHF 300/mois (50%/50%) | LAANP 2.50‰ | LAAP 0.80‰ | CAF 3.00% | Taux AVS/AI/APG 5.30% | AC 1.10%
      </Note>

      <div style={{ border: '2px solid #2563eb', borderRadius: 8, overflow: 'hidden', margin: '16px 0' }}>
        <div style={{ background: '#2563eb', padding: '11px 16px', color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>
          Fiche de salaire mensuelle — Jules Weber
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.83rem' }}>
          <tbody>
            {[
              ['Salaire brut selon contrat', '', "3'000.00", 'brut'],
              ['Allocation familiale (décision CAF)', '', "200.00", 'indemnite'],
              ['Total dû à l\'employé', '', "3'200.00", 'total'],
              ['— DÉDUCTIONS EMPLOYÉ —', '', '', 'sep'],
              ['AVS/AI/APG 5.30% × 3\'000', '5.30%', "− 159.00", 'ded'],
              ['AC 1.10% × 3\'000', '1.10%', "− 33.00", 'ded'],
              ['LAANP 2.50‰ × 3\'000', '2.50‰', "− 7.50", 'ded'],
              ['LPP part employé (décision caisse)', '', "− 150.00", 'ded'],
              ['SALAIRE NET VERSÉ', '', "2'850.50", 'net'],
              ['— CHARGES PATRONALES (non visibles sur la fiche) —', '', '', 'sep'],
              ['AVS/AI/APG 5.30% × 3\'000', '5.30%', "159.00", 'pat'],
              ['AC 1.10% × 3\'000', '1.10%', "33.00", 'pat'],
              ['LAAP 0.80‰ × 3\'000', '0.80‰', "2.40", 'pat'],
              ['LPP part employeur (décision caisse)', '', "150.00", 'pat'],
              ['CAF 3.00% × 3\'000', '3.00%', "90.00", 'pat'],
              ['COÛT TOTAL EMPLOYEUR', '', "3'434.40", 'cout'],
            ].map(([label, taux, montant, type], i) => {
              if (type === 'sep') return (
                <tr key={i}><td colSpan={3} style={{ padding: '4px 14px', background: '#eff6ff', fontSize: '0.68rem', color: '#2563eb', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</td></tr>
              );
              const colors = { brut: '#0f172a', indemnite: '#059669', total: '#0f172a', ded: '#c0392b', net: '#2563eb', pat: '#1e3a5f', cout: '#1e3a5f' };
              const bgs = { total: '#f1f5f9', net: '#eff6ff', cout: '#eff6ff' };
              return (
                <tr key={i} style={{ background: bgs[type] || '#fff', borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '7px 14px', fontWeight: ['brut','total','net','cout'].includes(type) ? 700 : 400, color: '#475569' }}>{label}</td>
                  <td style={{ padding: '7px 10px', textAlign: 'right', color: '#94a3b8', fontSize: '0.76rem', fontFamily: 'JetBrains Mono, monospace' }}>{taux}</td>
                  <td style={{ padding: '7px 14px', fontFamily: 'JetBrains Mono, monospace', fontWeight: ['brut','total','net','cout'].includes(type) ? 700 : 500, color: colors[type], textAlign: 'right' }}>{montant}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      </Section>
      <Section title="3. Formule de base" defaultOpen={false}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, margin: '16px 0' }}>
        {[
          { label: 'Salaire net', formula: 'Brut − déductions employé + allocations', color: '#2563eb' },
          { label: 'Charges soc. patronales', formula: 'AVS/AI/APG + AC + LAAP + LPP + CAF (part employeur)', color: '#1e3a5f' },
          { label: 'Coût total employeur', formula: 'Salaire brut + charges sociales patronales', color: '#059669' },
        ].map((item, i) => (
          <div key={i} style={{ border: `2px solid ${item.color}`, borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ background: item.color, padding: '8px 12px', color: '#fff', fontWeight: 700, fontSize: '0.8rem' }}>{item.label}</div>
            <div style={{ padding: '10px 12px', fontSize: '0.8rem', color: '#475569', lineHeight: 1.6 }}>{item.formula}</div>
          </div>
        ))}
      </div>

      </Section>
      <Section title="4. Particularités légales" defaultOpen={false}>
      <H3>Paiement du 13e salaire</H3>
      <P>Lorsqu'un employé a droit à un 13e salaire, il est versé généralement en décembre. Les cotisations sociales s'appliquent normalement sur ce montant. La base LPP est calculée sur la base annuelle incluant le 13e.</P>

      <H3>Départ en cours de mois</H3>
      <P>Le salaire est proratisé selon les jours ouvrables du mois. Les cotisations s'appliquent sur le brut proratisé. La LPP se recalcule sur la base du salaire annualisé.</P>

      <H3>Employé de moins de 18 ans</H3>
      <Loi art="Art. 3 al. 2 LAVS">
        Les enfants qui exercent une activité lucrative ne sont pas tenus de payer des cotisations jusqu'au 31 décembre de l'année où ils ont accompli leur 17e année.
      </Loi>

      <H3>Délai de paiement des salaires</H3>
      <Loi art="Art. 323 CO">
        Sauf accord ou usage contraire, l'employeur paie le salaire à la fin de chaque mois.
      </Loi>
      </Section>
    </div>
  );
}

// ─── ONGLET 3 : COMPTABILISATION ─────────────────────────────────────────────
function TabComptabilisation() {
  return (
    <div>
      <Section title="1. Deux méthodes de comptabilisation" defaultOpen={true}>
      <P>En Suisse, il existe deux méthodes pour comptabiliser les salaires et les charges sociales. Les deux aboutissent au même résultat final mais diffèrent dans le traitement intermédiaire.</P>

      <Tableau
        headers={['', 'Méthode 1 — Compte Charges sociales', 'Méthode 2 — Compte Dette assurances']}
        rows={[
          { cells: ['Principe', 'Les primes sont d\'abord en charge, puis ajustées', 'Les primes sont d\'abord en bilan, puis virées en charge'] },
          { cells: ['Compte utilisé', '5700 Charges sociales', '2270 Dette assurances sociales'] },
          { cells: ['Avantage', 'Simple, peu d\'écritures', 'Solde correct en permanence dans 5700'] },
          { cells: ['Adapté pour', 'Peu de salariés', 'PME avec plusieurs salariés, mensualisation'] },
        ]}
      />

      </Section>
      <Section title="2. Méthode 1 — Compte Charges sociales (5700)" defaultOpen={false}>
      <P>Les acomptes de charges sociales sont payés en débit du compte 5700. Lors du versement des salaires, la part employé est créditée en 5700 pour corriger le montant (on avait trop chargé).</P>

      <H3>Étape 1 — Paiement des assurances sociales (début du mois)</H3>
      <Ecriture debit="5700 Charges sociales (AVS)" credit="1020 Banque" montant="318.00" libelle="Part totale AVS (employé + employeur = 2 × 159)" />
      <Ecriture debit="5700 Charges sociales (AC)" credit="1020 Banque" montant="66.00" libelle="Part totale AC (2 × 33)" sub />
      <Ecriture debit="5700 Charges sociales (LAANP)" credit="1020 Banque" montant="7.50" libelle="Part employé LAANP (entière ici)" sub />
      <Ecriture debit="5700 Charges sociales (LAAP)" credit="1020 Banque" montant="2.40" libelle="Part employeur LAAP" sub />
      <Ecriture debit="5700 Charges sociales (LPP)" credit="1020 Banque" montant="300.00" libelle="Part totale LPP (2 × 150)" sub />
      <Ecriture debit="5700 Charges sociales (CAF)" credit="1020 Banque" montant="90.00" libelle="Cotisation CAF employeur" sub />

      <H3>Étape 2 — Encaissement allocation familiale</H3>
      <Ecriture debit="1020 Banque" credit="2275 CAF employés" montant="200.00" libelle="Allocation reçue de la caisse — à transmettre à l'employé" />

      <H3>Étape 3 — Versement du salaire (25 du mois)</H3>
      <Ecriture debit="5000 Salaires" credit="1020 Banque" montant="2'850.50" libelle="Net versé à l'employé" />
      <Ecriture debit="2275 CAF employés" credit="1020 Banque" montant="200.00" libelle="Allocation familiale transmise à l'employé" sub />
      <Ecriture debit="5000 Salaires" credit="5700 Charges sociales (AVS)" montant="159.00" libelle="Reprise part AVS employé — correction 5700" sub />
      <Ecriture debit="5000 Salaires" credit="5700 Charges sociales (AC)" montant="33.00" libelle="Reprise part AC employé" sub />
      <Ecriture debit="5000 Salaires" credit="5700 Charges sociales (LAANP)" montant="7.50" libelle="Reprise part LAANP employé" sub />
      <Ecriture debit="5000 Salaires" credit="5700 Charges sociales (LPP)" montant="150.00" libelle="Reprise part LPP employé" sub />

      <Note color="green">
        Résultat final dans les comptes de résultat :<br />
        <strong>5000 Salaires : CHF 3'000</strong> (salaire brut) | <strong>5700 Charges sociales : CHF 456</strong> (part employeur uniquement)
      </Note>

      </Section>
      <Section title="3. Méthode 2 — Compte Dette assurances sociales (2270)" defaultOpen={false}>
      <P>Les acomptes payés aux assurances sont comptabilisés en bilan (2270) comme des avances. Lors du versement des salaires, on constate les charges réelles en 5700 et on crédite 2270.</P>

      <H3>Étape 1 — Paiement des assurances (débit 2270)</H3>
      <Ecriture debit="2270 Dette ass. soc. (AVS)" credit="1020 Banque" montant="318.00" libelle="Acompte AVS — comptabilisé au bilan" />
      <Ecriture debit="2270 Dette ass. soc. (LPP)" credit="1020 Banque" montant="300.00" libelle="Acompte LPP total" sub />
      <Ecriture debit="2270 Dette ass. soc. (CAF)" credit="1020 Banque" montant="90.00" libelle="Acompte CAF" sub />

      <H3>Étape 2 — Encaissement allocation (identique méthode 1)</H3>
      <Ecriture debit="1020 Banque" credit="2275 CAF employés" montant="200.00" libelle="Allocation reçue" />

      <H3>Étape 3 — Versement salaire + constatation charges</H3>
      <Ecriture debit="5000 Salaires" credit="1020 Banque" montant="2'850.50" libelle="Net versé" />
      <Ecriture debit="5000 Salaires" credit="2270 Dette ass. soc." montant="349.50" libelle="Part employé retenue (AVS + AC + LAANP + LPP)" sub />
      <Ecriture debit="5700 Charges sociales" credit="2270 Dette ass. soc." montant="456.40" libelle="Charges patronales constatées (AVS + AC + LAAP + LPP + CAF)" sub />

      <Note color="green">
        Avantage : le compte 5700 affiche en permanence uniquement la <strong>part employeur</strong> — pas besoin de correction. Le compte 2270 est soldé à zéro si les acomptes correspondent aux salaires réels.
      </Note>

      </Section>
      <Section title="4. Comptes utilisés — récapitulatif" defaultOpen={false}>
      <Tableau
        headers={['Compte', 'Intitulé', 'Nature', 'Rôle']}
        rows={[
          { cells: ['5000', 'Salaires bruts', 'Charge', 'Salaires contractuels versés'] },
          { cells: ['5700', 'Charges sociales patronales', 'Charge', 'Part employeur uniquement (AVS, AC, LAAP, LPP, CAF)'] },
          { cells: ['2270', 'Dette assurances sociales', 'Passif', 'Méthode 2 — acomptes et dettes envers les caisses'] },
          { cells: ['2275', 'CAF employés', 'Passif', 'Allocations reçues en transit — transmises à l\'employé'] },
          { cells: ['5005', 'Indemnités reçues (IJM/LAA)', 'Produit correctif 5xxx', 'Réduction des charges — indemnités d\'arrêt maladie/accident'] },
          { cells: ['2160', 'Salaires à payer', 'Passif CT', 'Salaires nets dus mais non encore versés'] },
        ]}
      />
      </Section>
    </div>
  );
}

// ─── ONGLET 4 : FICHES DE SALAIRE ────────────────────────────────────────────

function LigneFiche({ label, taux, base, montant, type, detail }) {
  const [open, setOpen] = useState(false);
  const isTotal = ['total', 'net', 'cout'].includes(type);
  const colors = { deduction: '#c0392b', indemnite: '#059669', patronal: '#2563eb', total: '#0f172a', net: '#2563eb', cout: '#1e3a5f' };
  const sign = type === 'deduction' ? '− ' : type === 'indemnite' ? '+ ' : '';
  return (
    <>
      <tr onClick={() => detail && setOpen(o => !o)} style={{ cursor: detail ? 'pointer' : 'default', background: isTotal ? '#f1f5f9' : 'transparent' }}>
        <td style={{ padding: '7px 14px', fontSize: isTotal ? '0.84rem' : '0.81rem', fontWeight: isTotal ? 700 : 400, color: '#475569' }}>
          {label}{detail && <span style={{ fontSize: '0.6rem', color: '#cbd5e1', marginLeft: 5 }}>{open ? '▲' : '▼'}</span>}
        </td>
        <td style={{ padding: '7px 10px', fontSize: '0.76rem', color: '#94a3b8', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace' }}>
          {taux ? `${taux}%` : ''}{base && taux ? ` × ${fmt(base)}` : ''}
        </td>
        <td style={{ padding: '7px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: isTotal ? '0.9rem' : '0.83rem', fontWeight: isTotal ? 700 : 500, color: colors[type] || '#0f172a', textAlign: 'right', whiteSpace: 'nowrap' }}>
          {sign}{fmt(montant)}
        </td>
      </tr>
      {open && detail && (
        <tr>
          <td colSpan={3} style={{ padding: '6px 14px 10px 28px', background: '#eff6ff', fontSize: '0.78rem', color: '#475569', lineHeight: 1.55, borderBottom: '1px solid #e2e8f0' }}>
            <Info size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />{detail}
          </td>
        </tr>
      )}
    </>
  );
}

function TableauEtapeFiche({ ecritures }) {
  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, overflow: 'hidden', marginTop: 10 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.81rem' }}>
        <thead>
          <tr style={{ background: '#2563eb' }}>
            {['Débit N°', 'Crédit N°', 'Libellé', 'Débit', 'Crédit'].map((h, i) => (
              <th key={i} style={{ padding: '8px 10px', color: '#fff', textAlign: i < 2 ? 'left' : i === 2 ? 'left' : 'right', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', width: i < 2 ? '19%' : i === 2 ? 'auto' : '14%' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(ecritures || []).map((e, i) => (
            <tr key={i} style={{ background: e.isSubLine ? '#fafbfd' : '#fff' }}>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', paddingLeft: e.isSubLine ? 22 : 10 }}>
                {e.debit ? <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.79rem', color: '#2563eb', fontWeight: 600 }}>{e.debit} <span style={{ color: '#94a3b8', fontWeight: 400, fontSize: '0.7rem' }}>{e.debitLabel}</span></span> : <span style={{ color: '#cbd5e1' }}>—</span>}
              </td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0' }}>
                {e.credit ? <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.79rem', color: '#059669', fontWeight: 600 }}>{e.credit} <span style={{ color: '#94a3b8', fontWeight: 400, fontSize: '0.7rem' }}>{e.creditLabel}</span></span> : <span style={{ color: '#cbd5e1' }}>—</span>}
              </td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', color: '#94a3b8', fontSize: '0.78rem', fontStyle: 'italic' }}>{e.libelle}</td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 600, color: '#2563eb' }}>{e.montantDebit != null ? fmt(e.montantDebit) : '—'}</td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 600, color: '#059669' }}>{e.montantCredit != null ? fmt(e.montantCredit) : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EtapeFiche({ etape, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, marginBottom: 9, overflow: 'hidden' }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 15px', background: open ? '#2563eb' : '#fff', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ width: 22, height: 22, borderRadius: '50%', background: open ? 'rgba(255,255,255,0.22)' : '#2563eb', color: '#fff', fontSize: '0.7rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{etape.num}</span>
        <span style={{ flex: 1, fontWeight: 700, fontSize: '0.84rem', color: open ? '#fff' : '#0f172a' }}>{etape.titre}</span>
        <span style={{ fontSize: '0.68rem', color: open ? 'rgba(255,255,255,0.55)' : '#cbd5e1', display: 'inline-block', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.14s' }}>▼</span>
      </button>
      {open && (
        <div style={{ padding: '13px 15px', borderTop: '1px solid #e2e8f0' }}>
          {etape.explication && <div style={{ background: '#eff6ff', border: '1px solid #d0e3f4', borderRadius: 5, padding: '9px 12px', fontSize: '0.8rem', color: '#475569', lineHeight: 1.6, marginBottom: 11 }}><Info size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />{etape.explication}</div>}
          <TableauEtapeFiche ecritures={etape.ecritures} />
        </div>
      )}
    </div>
  );
}

function FicheDetail({ fiche }) {
  const [showPatronal, setShowPatronal] = useState(false);
  const [showEcritures, setShowEcritures] = useState(false);
  if (!fiche) return null;
  return (
    <div style={{ paddingBottom: 20 }}>
      <div style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 6, padding: '11px 15px', marginBottom: 16, fontSize: '0.81rem', color: '#475569', lineHeight: 1.65, whiteSpace: 'pre-line' }}>
        <strong style={{ color: '#0f172a', display: 'block', marginBottom: 5, fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}><ClipboardList size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />Contexte</strong>
        {fiche.contexte}
      </div>
      <div style={{ border: '2px solid #2563eb', borderRadius: 8, overflow: 'hidden', marginBottom: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <div style={{ background: '#2563eb', padding: '12px 16px' }}>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>{fiche.title}</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.76rem', marginTop: 2 }}>{fiche.salaire.mois} · Taux : {fiche.salaire.tauxActivite}%</div>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <colgroup><col style={{ width: '52%' }} /><col style={{ width: '24%' }} /><col style={{ width: '24%' }} /></colgroup>
          <thead>
            <tr style={{ background: '#f1f5f9' }}>
              {['Élément', 'Base / Taux', 'Montant CHF'].map((h, i) => (
                <th key={i} style={{ padding: '6px 14px', textAlign: i === 0 ? 'left' : 'right', fontSize: '0.67rem', color: '#94a3b8', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <LigneFiche label="SALAIRE BRUT" montant={fiche.salaire.brut} type="total" />
            <tr><td colSpan={3} style={{ padding: '3px 14px', background: '#eff6ff', fontSize: '0.68rem', color: '#2563eb', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Déductions employé <span style={{ fontWeight: 400, opacity: 0.7 }}>(cliquez pour explication)</span></td></tr>
            {(fiche.deductionsEmploye || []).map((d, i) => <LigneFiche key={i} label={d.label} taux={d.taux} base={d.taux ? fiche.salaire.brut : null} montant={d.montant} type="deduction" detail={d.detail} />)}
            <LigneFiche label="Total déductions employé" montant={fiche.totalDeductionsEmploye} type="total" />
            {fiche.indemnites?.length > 0 && (
              <>
                <tr><td colSpan={3} style={{ padding: '3px 14px', background: '#f0faf5', fontSize: '0.68rem', color: '#059669', fontWeight: 700, textTransform: 'uppercase' }}>Indemnités et allocations</td></tr>
                {fiche.indemnites.map((ind, i) => <LigneFiche key={i} label={ind.label} montant={ind.montant} type="indemnite" detail={ind.detail} />)}
              </>
            )}
            <tr><td colSpan={3} style={{ height: 2, background: '#2563eb' }} /></tr>
            <tr style={{ background: '#eff6ff' }}>
              <td style={{ padding: '10px 14px', fontWeight: 700, fontSize: '0.92rem', color: '#2563eb' }}>SALAIRE NET VERSÉ</td>
              <td></td>
              <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.97rem', color: '#2563eb', textAlign: 'right' }}>{fmt(fiche.salaireNet)}</td>
            </tr>
            <tr>
              <td colSpan={3} style={{ padding: 0 }}>
                <button onClick={() => setShowPatronal(s => !s)} style={{ width: '100%', padding: '7px 14px', background: showPatronal ? '#1e3a5f' : '#f1f5f9', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7, borderTop: '1px solid #e2e8f0', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: showPatronal ? '#fff' : '#94a3b8' }}>
                  <span style={{ display: 'inline-block', transform: showPatronal ? 'rotate(90deg)' : 'none', transition: 'transform 0.14s' }}>▶</span>
                  Charges sociales patronales (employeur)
                </button>
              </td>
            </tr>
            {showPatronal && (fiche.chargesPatronales || []).map((c, i) => <LigneFiche key={i} label={c.label} taux={c.taux} base={c.taux ? fiche.salaire.brut : null} montant={c.montant} type="patronal" detail={c.detail} />)}
            {showPatronal && <LigneFiche label="Total charges patronales" montant={fiche.totalChargesPatronales} type="total" />}
            <tr><td colSpan={3} style={{ height: 2, background: '#2563eb' }} /></tr>
            <tr style={{ background: '#eff6ff' }}>
              <td style={{ padding: '11px 14px', fontWeight: 700, fontSize: '0.9rem', color: '#1e3a5f' }}>COÛT TOTAL EMPLOYEUR</td>
              <td style={{ padding: '11px 10px', fontSize: '0.74rem', color: '#94a3b8', textAlign: 'right' }}>brut + charges pat.</td>
              <td style={{ padding: '11px 14px', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.97rem', color: '#1e3a5f', textAlign: 'right' }}>{fmt(fiche.coutTotalEmployeur)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={() => setShowEcritures(s => !s)} style={{ padding: '8px 16px', borderRadius: 5, border: 'none', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600, fontFamily: 'Inter, sans-serif', background: '#2563eb', color: '#fff', marginBottom: 14 }}>
        {showEcritures ? '▲ Masquer les écritures' : '▼ Voir les écritures comptables'}
      </button>
      {showEcritures && (
        <div>
          <p style={{ fontSize: '0.79rem', color: '#94a3b8', fontStyle: 'italic', marginBottom: 11 }}>Cliquez sur chaque étape pour afficher les écritures.</p>
          {(fiche.etapesComptables || []).map((etape, i) => <EtapeFiche key={i} etape={etape} defaultOpen={i === 0} />)}
        </div>
      )}
    </div>
  );
}

function TabFiches() {
  const [activeId, setActiveId] = useState(fichesSalaire[0].id);
  const fiche = fichesSalaire.find(f => f.id === activeId) || fichesSalaire[0];
  return (
    <div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
        {fichesSalaire.map(f => (
          <button key={f.id} onClick={() => setActiveId(f.id)} style={{ padding: '6px 14px', borderRadius: 20, fontSize: '0.78rem', fontWeight: 600, border: `1px solid ${activeId === f.id ? '#2563eb' : '#e2e8f0'}`, background: activeId === f.id ? '#2563eb' : '#fff', color: activeId === f.id ? '#fff' : '#475569', cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.12s' }}>
            {f.title}
          </button>
        ))}
      </div>
      <FicheDetail key={fiche.id} fiche={fiche} />
    </div>
  );
}

// ─── ONGLET 5 : ARRÊTS MALADIE ───────────────────────────────────────────────
const ARRETS = [
  {
    id: 'arret-01', label: 'IJM → employeur',
    title: "Arrêt maladie — IJM assurance collective (indemnité à l'employeur)",
    situation: "Noah Renard, salaire brut CHF 6'000/mois, est en arrêt maladie 20 jours calendriers sur 30.\nL'entreprise a une assurance IJM collective (taux 80%).\nL'assureur verse l'indemnité à l'EMPLOYEUR, qui maintient le salaire net complet.\nCotisations calculées sur la part à charge de l'employeur (brut − IJM).",
    calculs: [
      { label: "Salaire brut mensuel (base 30 jours)", montant: "CHF 6'000.00", type: 'brut' },
      { label: "Indemnité IJM (80% × 6'000 × 20/30)", montant: "CHF 3'200.00", type: 'indemnite', detail: "6'000 × 80% × 20/30 = CHF 3'200 — versée par l'assureur à l'employeur" },
      { label: "Part à charge de l'employeur", montant: "CHF 2'800.00", type: 'key', detail: "6'000 − 3'200 = CHF 2'800 — base de calcul des cotisations" },
      { label: "Cotisations sur part employeur (~13.5%)", montant: "CHF 378.00", type: 'deduction', detail: "Calculées sur CHF 2'800 uniquement, pas sur les 6'000" },
      { label: "Salaire net versé à Noah Renard", montant: "CHF 5'622.00", type: 'net' },
    ],
    points: ["Calcul sur 30 jours calendriers (weekends inclus) — pratique standard suisse", "L'employé reçoit son salaire net habituel — aucune perte pour lui", "L'employeur récupère CHF 3'200 auprès de l'assureur IJM", "Cotisations sur la part à charge uniquement (CHF 2'800), pas sur les 6'000", "Indemnité IJM créditée au compte 5005 — diminution des charges de personnel"],
    ecritures: [
      { titre: "Étape 1 — Salaire brut + cotisations sur part employeur", explication: "Cotisations calculées sur la part nette employeur (CHF 2'800), pas sur le brut total.", lignes: [{ debit: '5000', debitL: 'Salaires', credit: '2270', creditL: 'Charges sociales à payer', debitM: "6'000.00", creditM: "378.00", libelle: "Salaire brut Renard — cotisations sur part employeur" }, { debit: null, credit: '2160', creditL: 'Salaires à payer', debitM: null, creditM: "5'622.00", libelle: "Net à payer Renard", sub: true }] },
      { titre: "Étape 2 — Indemnité IJM à recevoir", explication: "Créance sur l'assureur en actif transitoire (1180). Crédit 5005 réduit les charges.", lignes: [{ debit: '1180', debitL: 'Actifs transitoires', credit: '5005', creditL: 'Indemnités reçues (IJM/LAA)', debitM: "3'200.00", creditM: "3'200.00", libelle: "Indemnité IJM à recevoir" }] },
      { titre: "Étape 3 — Encaissement IJM", lignes: [{ debit: '1020', debitL: 'Banque', credit: '1180', creditL: 'Actifs transitoires', debitM: "3'200.00", creditM: "3'200.00", libelle: "Encaissement IJM" }] },
      { titre: "Étape 4 — Versements", lignes: [{ debit: '2160', debitL: 'Salaires à payer', credit: '1020', creditL: 'Banque', debitM: "5'622.00", creditM: "5'622.00", libelle: "Virement salaire net Renard" }, { debit: '2270', debitL: 'Charges sociales à payer', credit: '1020', creditL: 'Banque', debitM: "756.00", creditM: "756.00", libelle: "Versement caisses sociales" }] },
    ],
  },
  {
    id: 'arret-02', label: 'Sans assurance (CO 324a)',
    title: "Arrêt maladie — sans assurance IJM (maintien légal CO 324a)",
    situation: "Léa Meyer, salaire brut CHF 4'500/mois, est en arrêt maladie 10 jours calendriers sur 30.\nL'entreprise n'a PAS d'assurance IJM collective.\nObligation légale CO 324a : l'employeur maintient le salaire selon l'ancienneté.\nL'entreprise supporte l'intégralité du coût — aucune indemnité d'assureur.",
    calculs: [
      { label: "Salaire brut maintenu (base 30 jours)", montant: "CHF 4'500.00", type: 'brut' },
      { label: "Indemnité assureur", montant: "CHF 0.00", type: 'indemnite', detail: "Aucune assurance IJM — l'employeur supporte 100%" },
      { label: "Part à charge de l'employeur", montant: "CHF 4'500.00", type: 'key', detail: "Totalité à charge selon CO 324a" },
      { label: "Cotisations employé (~13.5%)", montant: "CHF 607.50", type: 'deduction', detail: "Sur le brut maintenu complet" },
      { label: "Salaire net versé à Léa Meyer", montant: "CHF 3'892.50", type: 'net' },
    ],
    points: ["Calcul sur 30 jours calendriers — même base que pour l'IJM", "Sans assurance IJM, l'employeur supporte 100% pendant la durée légale", "Durée selon CO 324a et ancienneté (échelle bernoise ou zurichoise)", "Cotisations sur le brut maintenu complet — pas de déduction IJM", "Comptabilisation standard — pas de compte 5005 ni 1180"],
    ecritures: [
      { titre: "Étape 1 — Salaire maintenu CO 324a", explication: "Aucune particularité — l'employeur supporte tout. Comptabilisation identique à un mois normal.", lignes: [{ debit: '5000', debitL: 'Salaires', credit: '2270', creditL: 'Charges sociales à payer', debitM: "4'500.00", creditM: "607.50", libelle: "Salaire brut Léa Meyer — CO 324a" }, { debit: null, credit: '2160', creditL: 'Salaires à payer', debitM: null, creditM: "3'892.50", libelle: "Net à payer Léa Meyer", sub: true }] },
      { titre: "Étape 2 — Charges patronales", lignes: [{ debit: '5700', debitL: 'Charges soc. patronales', credit: '2270', creditL: 'Charges sociales à payer', debitM: "607.50", creditM: "607.50", libelle: "Charges patronales Léa Meyer" }] },
      { titre: "Étape 3 — Versements", lignes: [{ debit: '2160', debitL: 'Salaires à payer', credit: '1020', creditL: 'Banque', debitM: "3'892.50", creditM: "3'892.50", libelle: "Virement salaire net Léa Meyer" }, { debit: '2270', debitL: 'Charges sociales à payer', credit: '1020', creditL: 'Banque', debitM: "1'215.00", creditM: "1'215.00", libelle: "Versement caisses sociales" }] },
    ],
  },
  {
    id: 'arret-03', label: 'IJM → employé direct',
    title: "Arrêt maladie — IJM versée directement à l'employé (salaire réduit)",
    situation: "Théo Keller, salaire brut CHF 6'000/mois, arrêt 20 jours calendriers sur 30.\nL'assureur IJM verse l'indemnité (80%) DIRECTEMENT à Théo Keller.\nL'employeur verse uniquement : part présence (10/30) + complément 20% arrêt.\nTotal à charge employeur : CHF 2'800. Cotisations sur CHF 2'800 uniquement.",
    calculs: [
      { label: "Salaire brut mensuel (base 30 jours)", montant: "CHF 6'000.00", type: 'brut' },
      { label: "Part présence (10/30)", montant: "CHF 2'000.00", type: 'info', detail: "6'000 × 10/30" },
      { label: "Complément employeur 20% arrêt (20/30)", montant: "CHF 800.00", type: 'info', detail: "6'000 × 20% × 20/30" },
      { label: "Total à charge employeur", montant: "CHF 2'800.00", type: 'key', detail: "Base de calcul des cotisations" },
      { label: "IJM 80% — versée directement à Théo Keller par assureur", montant: "CHF 3'200.00", type: 'indemnite', detail: "L'employeur ne comptabilise PAS cette indemnité" },
      { label: "Cotisations sur part employeur (~13.5%)", montant: "CHF 378.00", type: 'deduction' },
      { label: "Net versé par l'employeur à Théo Keller", montant: "CHF 2'422.00", type: 'net' },
    ],
    points: ["L'assureur verse DIRECTEMENT à l'employé — l'employeur ne comptabilise pas l'indemnité", "L'employeur verse uniquement présence + complément 20% = CHF 2'800", "Pas de compte 1180 ni 5005 — la transaction IJM est hors comptabilité employeur", "Cotisations sur CHF 2'800 uniquement (pas sur les 6'000)"],
    ecritures: [
      { titre: "Étape 1 — Salaire à charge de l'employeur uniquement", explication: "On comptabilise uniquement la part que l'employeur verse réellement (CHF 2'800).", lignes: [{ debit: '5000', debitL: 'Salaires', credit: '2270', creditL: 'Charges sociales à payer', debitM: "2'800.00", creditM: "378.00", libelle: "Salaire Théo Keller — part employeur" }, { debit: null, credit: '2160', creditL: 'Salaires à payer', debitM: null, creditM: "2'422.00", libelle: "Net à payer Théo Keller", sub: true }] },
      { titre: "Étape 2 — Charges patronales sur part employeur", lignes: [{ debit: '5700', debitL: 'Charges soc. patronales', credit: '2270', creditL: 'Charges sociales à payer', debitM: "378.00", creditM: "378.00", libelle: "Charges patronales Théo Keller (sur 2'800)" }] },
      { titre: "Étape 3 — Versements", lignes: [{ debit: '2160', debitL: 'Salaires à payer', credit: '1020', creditL: 'Banque', debitM: "2'422.00", creditM: "2'422.00", libelle: "Virement part employeur Théo Keller" }, { debit: '2270', debitL: 'Charges sociales à payer', credit: '1020', creditL: 'Banque', debitM: "756.00", creditM: "756.00", libelle: "Versement caisses sociales" }] },
    ],
  },
  {
    id: 'arret-04', label: 'Accident LAA / SUVA',
    title: "Accident professionnel — Indemnités journalières SUVA (LAA)",
    situation: "Lucas Morel, salaire brut CHF 5'800/mois, accident professionnel le 05.03.\nArrêt du 05.03 au 31.03 — 27 jours calendriers d'arrêt sur 30.\nSUVA : verse 80% dès le 3e jour (jours 1 et 2 à charge de l'employeur).\nCotisations sur la part à charge de l'employeur uniquement.",
    calculs: [
      { label: "Salaire brut mensuel (base 30 jours)", montant: "CHF 5'800.00", type: 'brut' },
      { label: "Part présence (3/30)", montant: "CHF 580.00", type: 'info', detail: "5'800 × 3/30 — jours travaillés avant accident" },
      { label: "Part carence employeur (2/30)", montant: "CHF 386.67", type: 'info', detail: "5'800 × 2/30 — 2 jours à charge employeur avant SUVA" },
      { label: "Total part à charge employeur", montant: "CHF 966.67", type: 'key', detail: "Présence + carence = base cotisations" },
      { label: "Indemnité SUVA (80% × 5'800 × 25/30)", montant: "CHF 3'866.67", type: 'indemnite', detail: "Versée par la SUVA à l'employeur — compte 5005" },
      { label: "Cotisations sur part employeur (~13.5%)", montant: "CHF 130.50", type: 'deduction' },
      { label: "Salaire net versé à Lucas Morel", montant: "CHF 5'669.50", type: 'net' },
    ],
    points: ["Calcul sur 30 jours calendriers — weekends inclus", "Les 2 premiers jours sont toujours à charge de l'employeur (délai de carence SUVA)", "Dès le 3e jour : SUVA verse 80% (plafonné CHF 148'200/an)", "Indemnité SUVA versée à l'employeur → crédit compte 5005", "Cotisations AVS/AC : sur la part employeur uniquement (CHF 966.67)"],
    ecritures: [
      { titre: "Étape 1 — Salaire maintenu + cotisations sur part employeur", explication: "L'employeur maintient le salaire complet. Cotisations sur sa part uniquement.", lignes: [{ debit: '5000', debitL: 'Salaires', credit: '2270', creditL: 'Charges sociales à payer', debitM: "5'800.00", creditM: "130.50", libelle: "Salaire Lucas Morel maintenu" }, { debit: null, credit: '2160', creditL: 'Salaires à payer', debitM: null, creditM: "5'669.50", libelle: "Net à payer Lucas Morel", sub: true }] },
      { titre: "Étape 2 — Indemnité SUVA à recevoir", explication: "Créance sur la SUVA. Crédit 5005 réduit les charges.", lignes: [{ debit: '1180', debitL: 'Actifs transitoires', credit: '5005', creditL: 'Indemnités reçues (IJM/LAA)', debitM: "3'866.67", creditM: "3'866.67", libelle: "Indemnité SUVA à recevoir" }] },
      { titre: "Étape 3 — Encaissement SUVA", lignes: [{ debit: '1020', debitL: 'Banque', credit: '1180', creditL: 'Actifs transitoires', debitM: "3'866.67", creditM: "3'866.67", libelle: "Encaissement SUVA" }] },
      { titre: "Étape 4 — Versements", lignes: [{ debit: '2160', debitL: 'Salaires à payer', credit: '1020', creditL: 'Banque', debitM: "5'669.50", creditM: "5'669.50", libelle: "Virement salaire net Lucas Morel" }, { debit: '2270', debitL: 'Charges sociales à payer', credit: '1020', creditL: 'Banque', debitM: "261.00", creditM: "261.00", libelle: "Versement caisses sociales" }] },
    ],
  },
];

function TableauEcrituresArret({ lignes }) {
  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: 7, overflow: 'hidden', marginTop: 10 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
        <thead>
          <tr style={{ background: '#2563eb' }}>
            {['Débit', 'Crédit', 'Libellé', 'Débit CHF', 'Crédit CHF'].map((h, i) => (
              <th key={i} style={{ padding: '7px 10px', color: '#fff', textAlign: i < 2 ? 'left' : i === 2 ? 'left' : 'right', fontSize: '0.67rem', fontWeight: 600, textTransform: 'uppercase', width: i < 2 ? '20%' : i === 2 ? 'auto' : '12%' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lignes.map((l, i) => (
            <tr key={i} style={{ background: l.sub ? '#fafbfd' : '#fff' }}>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', paddingLeft: l.sub ? 20 : 10 }}>
                {l.debit ? <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#2563eb', fontWeight: 700, fontSize: '0.79rem' }}>{l.debit} <span style={{ color: '#94a3b8', fontWeight: 400, fontSize: '0.69rem' }}>{l.debitL}</span></span> : <span style={{ color: '#ccc' }}>—</span>}
              </td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0' }}>
                {l.credit ? <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#059669', fontWeight: 700, fontSize: '0.79rem' }}>{l.credit} <span style={{ color: '#94a3b8', fontWeight: 400, fontSize: '0.69rem' }}>{l.creditL}</span></span> : ''}
              </td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', color: '#94a3b8', fontStyle: 'italic', fontSize: '0.77rem' }}>{l.libelle}</td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, color: '#2563eb', fontSize: '0.8rem' }}>{l.debitM || '—'}</td>
              <td style={{ padding: '6px 10px', borderBottom: '1px solid #e2e8f0', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, color: '#059669', fontSize: '0.8rem' }}>{l.creditM || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EtapeArret({ e, i }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: 7, marginBottom: 8, overflow: 'hidden' }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 9, padding: '9px 14px', background: open ? '#2563eb' : '#fff', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ width: 20, height: 20, borderRadius: '50%', background: open ? 'rgba(255,255,255,0.2)' : '#2563eb', color: '#fff', fontSize: '0.68rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
        <span style={{ flex: 1, fontWeight: 700, fontSize: '0.82rem', color: open ? '#fff' : '#0f172a' }}>{e.titre}</span>
        <span style={{ color: open ? 'rgba(255,255,255,0.5)' : '#cbd5e1', fontSize: '0.65rem', display: 'inline-block', transform: open ? 'rotate(180deg)' : 'none' }}>▼</span>
      </button>
      {open && (
        <div style={{ padding: '12px 14px', borderTop: '1px solid #e2e8f0' }}>
          {e.explication && <div style={{ background: '#eff6ff', borderRadius: 5, padding: '8px 12px', fontSize: '0.79rem', color: '#475569', lineHeight: 1.6, marginBottom: 10 }}><Info size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />{e.explication}</div>}
          <TableauEcrituresArret lignes={e.lignes} />
        </div>
      )}
    </div>
  );
}

function TabArrets() {
  const [activeId, setActiveId] = useState('arret-01');
  const [showEcritures, setShowEcritures] = useState(false);
  const fiche = ARRETS.find(f => f.id === activeId) || ARRETS[0];
  const typeStyle = { brut: { bg: '#f1f5f9', color: '#0f172a', fw: 700 }, indemnite: { bg: '#e6f4ed', color: '#059669', fw: 600 }, key: { bg: '#eff6ff', color: '#2563eb', fw: 700 }, deduction: { bg: '#fdf0ee', color: '#c0392b', fw: 500 }, net: { bg: '#eff6ff', color: '#1e3a5f', fw: 700 }, info: { bg: '#ffffff', color: '#475569', fw: 400 } };
  return (
    <div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
        {ARRETS.map(f => (
          <button key={f.id} onClick={() => { setActiveId(f.id); setShowEcritures(false); }} style={{ padding: '7px 14px', borderRadius: 20, fontSize: '0.78rem', fontWeight: 600, border: '1px solid ' + (activeId === f.id ? '#2563eb' : '#e2e8f0'), background: activeId === f.id ? '#2563eb' : '#fff', color: activeId === f.id ? '#fff' : '#475569', cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.12s' }}>
            {f.label}
          </button>
        ))}
      </div>
      <div style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 7, padding: '12px 16px', marginBottom: 16, fontSize: '0.81rem', color: '#475569', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
        <strong style={{ color: '#0f172a', display: 'block', marginBottom: 5, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}><ClipboardList size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />Situation</strong>
        {fiche.situation}
      </div>
      <div style={{ border: '2px solid #2563eb', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ background: '#2563eb', padding: '11px 16px', color: '#fff', fontWeight: 700, fontSize: '0.88rem' }}>{fiche.title}</div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr style={{ background: '#f1f5f9' }}><th style={{ padding: '6px 14px', textAlign: 'left', fontSize: '0.67rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase' }}>Élément</th><th style={{ padding: '6px 14px', textAlign: 'right', fontSize: '0.67rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', width: '22%' }}>Montant CHF</th></tr></thead>
          <tbody>
            {fiche.calculs.map((row, i) => {
              const s = typeStyle[row.type] || typeStyle.info;
              return (
                <tr key={i} style={{ background: s.bg }}>
                  <td style={{ padding: '8px 14px', fontSize: '0.83rem', fontWeight: s.fw, color: '#475569', borderBottom: '1px solid #e2e8f0' }}>
                    {row.label}
                    {row.detail && <div style={{ fontSize: '0.74rem', color: '#94a3b8', fontWeight: 400, marginTop: 2 }}><Info size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />{row.detail}</div>}
                  </td>
                  <td style={{ padding: '8px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.86rem', fontWeight: s.fw, color: s.color, textAlign: 'right', borderBottom: '1px solid #e2e8f0' }}>{row.montant}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{ background: '#fffbf0', border: '1px solid #f0d98a', borderRadius: 7, padding: '12px 16px', marginBottom: 16 }}>
        <strong style={{ display: 'block', marginBottom: 8, fontSize: '0.78rem', color: '#7a5c00' }}><AlertTriangle size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} />Points clés</strong>
        {fiche.points.map((p, i) => <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 5, fontSize: '0.8rem', color: '#7a5c00', lineHeight: 1.5 }}><span style={{ flexShrink: 0 }}>•</span><span>{p}</span></div>)}
      </div>
      <button onClick={() => setShowEcritures(s => !s)} style={{ padding: '8px 16px', borderRadius: 5, border: 'none', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600, fontFamily: 'Inter, sans-serif', background: '#2563eb', color: '#fff', marginBottom: 14 }}>
        {showEcritures ? '▲ Masquer les écritures' : '▼ Voir les écritures comptables'}
      </button>
      {showEcritures && (
        <div>
          <p style={{ fontSize: '0.79rem', color: '#94a3b8', fontStyle: 'italic', marginBottom: 12 }}>Cliquez sur chaque étape pour afficher les écritures.</p>
          {fiche.ecritures.map((e, i) => <EtapeArret key={i} e={e} i={i} />)}
        </div>
      )}
    </div>
  );
}

// ─── ONGLET 6 : POINTS CLÉS & ERREURS ────────────────────────────────────────
function TabPointsCles() {
  return (
    <div>
      <Section title="1. Indépendants — charges sociales spécifiques" defaultOpen={true}>
      <Loi art="Art. 8 LAVS — Cotisations indépendants">
        Une cotisation de <strong>8.1%</strong> est perçue sur le revenu provenant d'une activité indépendante (au lieu de 2 × 4.35% pour les salariés).
      </Loi>
      <Tableau
        caption="Comparaison salarié vs indépendant"
        headers={['Assurance', 'Salarié (total)', 'Indépendant']}
        rows={[
          { cells: ['AVS/AI/APG', '10.60% (5.30% × 2)', '8.10% (taux réduit)'] },
          { cells: ['AC', '2.20%', 'Non applicable'] },
          { cells: ['LAA', 'Obligatoire', 'Facultatif (art. 4 LAA)'] },
          { cells: ['LPP', 'Obligatoire si salaire > CHF 22\'050', 'Facultatif (art. 4 LPP)'] },
          { cells: ['CAF', 'Entièrement employeur', 'Obligatoire comme employeur'] },
        ]}
      />
      <Note color="blue">L'indépendant paie ses cotisations AVS directement à sa caisse de compensation. Il ne peut pas cotiser à l'AC et ne bénéficie pas des prestations chômage.</Note>

      </Section>
      <Section title="2. Impôt à la source" defaultOpen={false}>
      <Loi art="Loi sur l'impôt à la source (LIS)">
        L'impôt à la source est dû sur la rémunération des travailleurs étrangers domiciliés en Suisse sans permis d'établissement (permis C), et sur les revenus des personnes domiciliées à l'étranger qui travaillent en Suisse.
      </Loi>
      <P>L'employeur prélève l'impôt directement sur le salaire net et le transfère à l'autorité fiscale cantonale. Le taux dépend du canton, du statut civil, du nombre d'enfants et du revenu.</P>
      <Ecriture debit="5000 Salaires" credit="2204 Impôt à la source dû" montant="xxx" libelle="Retenue IS sur salaire de l'employé" />
      <Ecriture debit="2204 Impôt à la source dû" credit="1020 Banque" montant="xxx" libelle="Versement IS à l'autorité fiscale" sub />

      </Section>
      <Section title="3. Acomptes de primes et décompte annuel final" defaultOpen={false}>
      <P>Les primes d'assurances sociales sont payées par acomptes mensuels ou trimestriels basés sur une estimation des salaires. En fin d'année, l'employeur réalise un décompte final qui peut générer un solde positif ou négatif.</P>
      <Note>Si les salaires réels sont supérieurs aux salaires estimés → solde de prime à payer à l'assurance. Si inférieurs → remboursement par l'assurance. Ce décompte final doit être comptabilisé comme une correction de charges ou un produit.</Note>

      </Section>
      <Section title="4. Erreurs fréquentes en pratique" defaultOpen={false}>
      {[
        { titre: 'Calculer les cotisations sur le salaire TTC', desc: 'En méthode nette, les cotisations s\'appliquent sur le salaire brut HT. Ne pas inclure la TVA éventuelle.' },
        { titre: 'Oublier le délai de carence LAA (2 jours)', desc: 'Les 2 premiers jours d\'accident sont à la charge de l\'employeur — pas de SUVA. Erreur fréquente dans les calculs d\'arrêt.' },
        { titre: 'Calculer les cotisations arrêt sur le brut total', desc: 'En cas d\'IJM ou SUVA, les cotisations ne se calculent que sur la part à charge de l\'employeur (brut − indemnité).' },
        { titre: 'Confondre les méthodes 1 et 2 de comptabilisation', desc: 'Les deux méthodes donnent le même résultat mais utilisent des comptes différents. Mixer les deux crée des erreurs de solde dans 5700.' },
        { titre: 'Oublier de transmettre l\'allocation familiale', desc: 'L\'allocation reçue de la CAF doit être transmise à l\'employé. Elle transite par 2275 — aucun impact sur le résultat.' },
        { titre: 'Mal calculer le salaire coordonné LPP', desc: 'Déduire CHF 25\'725 du salaire annuel, pas du salaire mensuel. Vérifier aussi les seuils d\'entrée et de minimum.' },
      ].map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 14px', background: i % 2 === 0 ? '#fdf0ee' : '#fff', borderLeft: '3px solid #c0392b', borderRadius: '0 6px 6px 0', margin: '6px 0' }}>
          <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#c0392b', color: '#fff', fontSize: '0.72rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.84rem', color: '#0f172a', marginBottom: 3 }}>{item.titre}</div>
            <div style={{ fontSize: '0.81rem', color: '#475569', lineHeight: 1.6 }}>{item.desc}</div>
          </div>
        </div>
      ))}

      </Section>
      <Section title="5. Checklist mensuelle paie" defaultOpen={false}>
      {['Vérifier les contrats — taux d\'activité, 13e salaire, primes', 'Calculer les jours d\'absence et les arrêts éventuels', 'Appliquer les cotisations sur la bonne base (brut ou part employeur)', 'Vérifier les allocations familiales et les décisions CAF en cours', 'Comptabiliser la fiche de salaire (méthode choisie et constante)', 'Virer le salaire net au plus tard le dernier jour ouvrable du mois', 'Payer les acomptes de charges sociales selon le calendrier convenu', 'Archiver les fiches de salaire signées (conservation 10 ans)'].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', fontSize: '0.84rem', color: '#475569', alignItems: 'flex-start' }}>
          <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#2563eb', color: '#fff', fontSize: '0.68rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
          <span>{pt}</span>
        </div>
      ))}
      </Section>
    </div>
  );
}

// ─── VUE PRINCIPALE ───────────────────────────────────────────────────────────
const TABS = [
  { id: 'assurances', label: 'Assurances sociales' },
  { id: 'calcul', label: 'Calcul du salaire' },
  { id: 'comptabilisation', label: 'Comptabilisation' },
  { id: 'fiches', label: 'Fiches de salaire' },
  { id: 'arrets', label: 'Arrêts & accidents' },
  { id: 'cles', label: 'Points clés & erreurs' },
];

export default function SalairesView() {
  const [tab, setTab] = useState('assurances');
  return (
    <TheoryLayout title="4. Salaires & charges sociales" tag="tag-salaires" tagLabel="Salaires" meta="LAVS · LACI · LAA · LPP · LAFam · 2024" tabs={TABS} activeTab={tab} onTabChange={setTab}>
        {tab === 'assurances'      && <TabAssurances />}
        {tab === 'calcul'          && <TabCalcul />}
        {tab === 'comptabilisation'&& <TabComptabilisation />}
        {tab === 'fiches'          && <TabFiches />}
        {tab === 'arrets'          && <TabArrets />}
        {tab === 'cles'            && <TabPointsCles />}
    </TheoryLayout>
  );
}