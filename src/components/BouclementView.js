import React, { useState } from 'react';
import { P, H2, H3, Note, Tableau, Ecriture, TheoryLayout } from './TheoryUI';

// ─── ONGLET 1 : VUE D'ENSEMBLE ────────────────────────────────────────────────
function TabOverview() {
  const steps = [
    { num: 1, title: 'Réconciliation des liquidités', desc: 'Comparer les soldes bancaires et caisse avec les relevés. Virer les soldes non justifiés en CC/privé.', color: '#2563eb' },
    { num: 2, title: 'Débiteurs et créanciers', desc: 'Réclamer l\'état au 31.12 au client. Passer l\'écriture d\'ajustement des débiteurs. Calculer et ajuster le ducroire.', color: '#2563eb' },
    { num: 3, title: 'Actifs et passifs transitoires', desc: 'Identifier les charges payées d\'avance, produits à recevoir, charges à payer, produits reçus d\'avance.', color: '#059669' },
    { num: 4, title: 'Stocks et travaux en cours', desc: 'Comptabiliser le stock final (éventuellement à 2/3 de la valeur réelle). Passer les travaux en cours.', color: '#059669' },
    { num: 5, title: 'Décompte TVA final', desc: 'Effectuer la concordance TVA. Regrouper les comptes 1171/1172 et 2200 dans le compte 2201.', color: '#d4600a' },
    { num: 6, title: 'Amortissements', desc: 'Établir le tableau des amortissements selon Notice A/1995. Passer les écritures (méthode directe ou indirecte).', color: '#d4600a' },
    { num: 7, title: 'Parts privées', desc: 'Calculer et comptabiliser les parts privées véhicule (10.8% ou 4%) et les prélèvements en nature.', color: '#d4600a' },
    { num: 8, title: 'Salaires et charges sociales', desc: 'Comptabiliser tous les salaires et charges de décembre. Passer les décomptes finaux AVS, LPP, SUVA, UM.', color: '#6c47b8' },
    { num: 9, title: 'Intérêts C/C actionnaire', desc: 'Calculer et comptabiliser les intérêts sur comptes courants actionnaires selon le taux AFC en vigueur.', color: '#6c47b8' },
    { num: 10, title: 'Provision pour impôts', desc: 'Simuler l\'impôt sur swisstaxcalculator.estv.admin.ch. Comptabiliser la provision 8900 / 2208.', color: '#6c47b8' },
  ];
  return (
    <div>
      <H2>1. Qu'est-ce que le bouclement ?</H2>
      <P>Le bouclement comptable est l'ensemble des opérations effectuées en fin d'exercice pour s'assurer que les comptes présentent une image fidèle et correcte de la situation économique de l'entreprise au 31 décembre. C'est une étape critique en fiduciaire — une erreur ou un oubli peut fausser le résultat et l'impôt de toute l'année.</P>
      <Note color="blue">
        <strong>Important :</strong> Ce guide part du principe que les charges sociales sont comptabilisées par les <strong>comptes du bilan durant l'année</strong> (méthode provisions — comptes 227x). Exemple : paiement d'une facture AVS → Débit 2270 / Crédit 1020.
      </Note>

      <H2>2. Ordre des opérations au 31 décembre</H2>
      <div style={{ margin: '16px 0' }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 10, alignItems: 'flex-start' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: s.color, color: '#fff', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.num}</div>
            <div style={{ flex: 1, padding: '7px 14px', background: '#f8f9fb', border: '1px solid #e2e8f0', borderRadius: 7 }}>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0f172a', marginBottom: 2 }}>{s.title}</div>
              <div style={{ fontSize: '0.81rem', color: '#94a3b8', lineHeight: 1.55 }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}

// ─── ONGLET 2 : LIQUIDITÉS & DÉBITEURS ───────────────────────────────────────
function TabDebiteurs() {
  return (
    <div>
      <H2>1. Réconciliation des comptes de liquidités</H2>
      <P>Avant tout autre travail, il faut s'assurer que les soldes comptables correspondent à la réalité.</P>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12, margin: '14px 0' }}>
        {[
          { title: 'Caisse (1000)', steps: ['Compter physiquement la caisse', 'Comparer au solde comptable', 'Virer tout écart non justifié en CC actionnaire ou compte privé'] },
          { title: 'Banque / Poste (1020/1010)', steps: ['Obtenir le relevé bancaire au 31.12', 'Comparer poste par poste au journal', 'Comptabiliser les opérations en suspens (frais bancaires, intérêts)'] },
        ].map((item, i) => (
          <div key={i} style={{ border: '1px solid #2563eb', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ background: '#2563eb', padding: '8px 14px', color: '#fff', fontWeight: 700, fontSize: '0.82rem' }}>{item.title}</div>
            {item.steps.map((s, j) => (
              <div key={j} style={{ display: 'flex', gap: 10, padding: '7px 14px', borderBottom: '1px solid #f1f5f9', fontSize: '0.82rem', color: '#475569' }}>
                <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>{j + 1}.</span><span>{s}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <H2>2. Débiteurs — ajustement au 31.12</H2>
      <P>Un état détaillé des débiteurs au 31.12 doit être demandé au client. L'écriture doit ramener le solde du compte 1100 au total exact de fin d'année.</P>
      <Note color="blue">
        <strong>TVA à l'encaissement :</strong> Si l'entreprise décompte la TVA à l'encaissement (la plupart des petites entreprises), le montant à insérer dans les débiteurs doit être <strong>hors taxe (HT)</strong>. Il faut diviser le montant TTC par 1.081 (ou 1.026 selon le taux).
      </Note>

      <H3>Écriture d'ajustement des débiteurs</H3>
      <Ecriture debit="1100 Débiteurs" credit="3000 Chiffre d'affaires" montant="xxx HT" libelle="Augmentation des débiteurs au 31.12 (si solde final > solde initial)" />
      <Ecriture debit="3000 Chiffre d'affaires" credit="1100 Débiteurs" montant="xxx HT" libelle="Diminution des débiteurs au 31.12 (si solde final < solde initial)" sub />

      <H2>3. Le ducroire — provision pour pertes sur créances</H2>
      <P>Le ducroire (compte 1109) est une provision forfaitaire pour le risque que certains clients ne paient pas. C'est un compte d'actif qui <strong>fonctionne comme un passif</strong> — son solde est créditeur et vient en déduction des créances clients.</P>

      <Tableau
        headers={['Base de calcul', 'Taux admis fiscalement']}
        rows={[
          { cells: ['Créances en CHF sur clients suisses', '5%'] },
          { cells: ['Créances en devises étrangères sur clients suisses', '10%'] },
          { cells: ['Créances en devises étrangères sur clients étrangers', '15%'] },
        ]}
      />

      <H3>Exemple complet — calcul et écriture du ducroire</H3>
      <Note color="yellow">
        <strong>Données :</strong><br />
        Débiteurs début d'année : CHF 100'000 | Ducroire initial : CHF 5'000<br />
        Liste débiteurs 31.12 reçue du client : CHF 150'000 TTC<br />
        Taux TVA applicable : 8.1%
      </Note>

      <div style={{ background: '#f8f9fb', border: '1px solid #e2e8f0', borderRadius: 8, padding: '16px', margin: '14px 0', fontSize: '0.83rem', color: '#475569', lineHeight: 2 }}>
        <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: 8, fontSize: '0.84rem' }}>Calcul pas à pas :</div>
        <div><strong>1. Écriture débiteurs</strong> (augmentation de 50'000 TTC → HT) :</div>
        <div style={{ paddingLeft: 16 }}>50'000 × 100/108.1 = <strong>CHF 46'253.45 HT</strong></div>
        <div style={{ paddingLeft: 16 }}>→ Débit 1100 Débiteurs / Crédit 3000 CHF 46'253.45</div>
        <div style={{ marginTop: 8 }}><strong>2. Nouveau solde débiteurs :</strong> 100'000 + 46'253.45 = <strong>CHF 146'253.45</strong></div>
        <div style={{ marginTop: 8 }}><strong>3. Calcul du ducroire cible :</strong> 146'253.45 × 5% = <strong>CHF 7'312.65</strong></div>
        <div style={{ marginTop: 8 }}><strong>4. Ajustement nécessaire :</strong> 7'312.65 − 5'000 (solde actuel) = <strong>CHF 2'312.65 à constituer</strong></div>
      </div>

      <H3>Écritures du ducroire</H3>
      <Ecriture debit="3805 Variation ducroire" credit="1109 Ducroire" montant="2'312.65" libelle="Constitution ducroire — augmentation (solde ducroire insuffisant)" />
      <Ecriture debit="1109 Ducroire" credit="3805 Variation ducroire" montant="xxx" libelle="Dissolution ducroire — diminution (solde ducroire excédentaire)" sub />

      <Note color="red">Le compte 1109 Ducroire est un compte d'actif à solde <strong>créditeur</strong> — il fonctionne comme un passif. Au bilan, il apparaît en déduction des créances clients (valeur nette).</Note>

      <H2>4. Créanciers</H2>
      <P>De même, un état détaillé des créanciers (fournisseurs) au 31.12 doit être demandé. Le solde du compte 2000 doit correspondre exactement à la somme des factures fournisseurs ouvertes. Tout écart doit être analysé et justifié.</P>
    </div>
  );
}

// ─── ONGLET 3 : TRANSITOIRES & STOCKS ────────────────────────────────────────
function TabTransitoires() {
  return (
    <div>
      <H2>1. Les actifs transitoires (1300)</H2>
      <P>Les actifs transitoires regroupent deux catégories de régularisations :</P>

      <H3>Charges payées d'avance</H3>
      <P>Ce sont des charges payées en année N mais qui concernent l'année N+1. Elles ont été comptabilisées en charge mais ne devraient pas l'être — on les "déplace" vers l'année suivante.</P>
      <Note color="yellow">Exemples : prime d'assurance RC entreprise payée en décembre pour l'année suivante, loyer de janvier payé en décembre, abonnement annuel payé d'avance.</Note>
      <Ecriture debit="1300 Actifs transitoires" credit="6300 Assurances (ou autre charge)" montant="xxx" libelle="Charge payée d'avance — déplacement vers N+1" />
      <Ecriture debit="6300 Assurances" credit="1300 Actifs transitoires" montant="xxx" libelle="01.01.N+1 — extourne automatique" sub />

      <H3>Produits à recevoir</H3>
      <P>Ce sont des produits acquis en N mais pas encore facturés ni encaissés. À ne pas confondre avec le chiffre d'affaires à facturer qui doit passer dans les débiteurs (1100).</P>
      <Note color="yellow">Exemples : intérêts annuels sur un prêt accordé, loyers non encore encaissés (d'un immeuble de rendement).</Note>
      <Ecriture debit="1300 Actifs transitoires" credit="6950 Produits financiers (ou 7500)" montant="xxx" libelle="Produit à recevoir — acquis en N, encaissé en N+1" />

      <H2>2. Les passifs transitoires (2300)</H2>

      <H3>Charges à payer</H3>
      <P>Ce sont des charges qui concernent l'année N mais dont la facture n'est pas encore reçue ou payée. On les constate quand même pour respecter la délimitation périodique.</P>
      <Note color="yellow">Exemples : facture de téléphone de décembre reçue en janvier, honoraires du fiduciaire pour la clôture, 13e salaire à payer.</Note>
      <Ecriture debit="6500 Frais admin (ou autre charge)" credit="2300 Passifs transitoires" montant="xxx" libelle="Charge à payer — concerne N, payée en N+1" />
      <Ecriture debit="2300 Passifs transitoires" credit="6500 Frais admin" montant="xxx" libelle="01.01.N+1 — extourne automatique" sub />

      <H3>Produits reçus d'avance</H3>
      <P>Ce sont des montants encaissés en N mais qui concernent N+1 — on les sort du résultat de N.</P>
      <Note color="yellow">Exemple : client qui paie son loyer de janvier en décembre, abonnement encaissé d'avance.</Note>
      <Ecriture debit="3000 Ventes (ou 7500)" credit="2300 Passifs transitoires" montant="xxx" libelle="Produit reçu d'avance — encaissé en N, concerne N+1" />

      <H2>3. Variation des travaux en cours (1280)</H2>
      <P>Les travaux en cours sont des prestations réalisées mais pas encore facturées. Ils sont valorisés au <strong>coût de revient</strong> (pas au prix de vente).</P>
      <Ecriture debit="1280 Travaux en cours" credit="3940 Variation valeur prestations non facturées" montant="xxx" libelle="Comptabilisation des travaux en cours au 31.12" />

      <H2>4. Le stock final (inventaire)</H2>
      <P>Le stock doit être valorisé au <strong>coût d'achat ou de production</strong>, ou à la valeur de marché si elle est inférieure (principe de prudence, art. 960 CO).</P>

      <H3>La règle des 2/3 — spécificité fiscale suisse</H3>
      <Note color="blue">
        En Suisse, il est fiscalement admis de comptabiliser le stock à <strong>2/3 de sa valeur réelle</strong>. Cette réserve latente d'1/3 tient compte du risque de dépréciation. C'est une pratique courante et acceptée par les autorités fiscales.
      </Note>

      <div style={{ background: '#f8f9fb', border: '1px solid #e2e8f0', borderRadius: 8, padding: '16px', margin: '14px 0', fontSize: '0.83rem', color: '#475569' }}>
        <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>Exemple :</div>
        <div>150 articles × CHF 50.– = CHF 7'500 (valeur réelle)</div>
        <div>Stock comptabilisé avec réserve latente : <strong>CHF 7'500 × 2/3 = CHF 5'000</strong></div>
        <div style={{ marginTop: 8 }}>Réserve latente constituée : CHF 2'500</div>
      </div>

      <Ecriture debit="1200 Stock de marchandises" credit="3901 Variation de stock" montant="xxx" libelle="Stock final au 31.12 — écriture d'inventaire" />
      <Note color="yellow">Si le stock diminue par rapport à l'année précédente, l'écriture est inversée : Débit 3901 / Crédit 1200.</Note>
    </div>
  );
}

// ─── ONGLET 4 : AMORTISSEMENTS & PARTS PRIVÉES ───────────────────────────────
function TabAmortissements() {
  return (
    <div>
      <H2>1. Les amortissements — principes</H2>
      <P>L'amortissement répartit le coût d'un bien durable sur sa durée d'utilisation. Les taux maximaux admis fiscalement sont publiés dans la <strong>Notice A/1995</strong> de l'Administration fédérale des finances (AFC).</P>

      <Tableau
        caption="Taux d'amortissement — Notice A/1995 AFC (sélection)"
        headers={['Catégorie d\'actif', 'Méthode dégressive (% valeur résiduelle)', 'Méthode linéaire (% valeur d\'acquisition)']}
        rows={[
          { cells: ['Mobilier et installations de bureau', '40%', '20%'] },
          { cells: ['Machines et appareils de production', '40%', '20%'] },
          { cells: ['Véhicules utilitaires', '40%', '20%'] },
          { cells: ['Informatique et logiciels', '40%', '20%'] },
          { cells: ['Immeubles commerciaux (bâtiment)', '8%', '4%'] },
          { cells: ['Goodwill / Fonds de commerce', '40%', '20%'] },
        ]}
      />
      <Note color="yellow">Ces taux sont des <strong>maximaux fiscaux</strong>. L'entreprise peut amortir moins. Elle ne peut pas amortir plus sans risque de redressement fiscal. Référence : <strong>Notice A/1995 ESTV</strong>.</Note>

      <H2>2. Méthode directe vs méthode indirecte</H2>
      <Tableau
        headers={['', 'Méthode directe', 'Méthode indirecte']}
        rows={[
          { cells: ['Principe', 'On réduit directement la valeur de l\'actif', 'On crée un compte de correction séparé'] },
          { cells: ['Au bilan', 'Actif à valeur nette (résiduelle)', 'Actif à valeur brute − fonds d\'amortissements cumulés'] },
          { cells: ['Traçabilité', 'Moins bonne — le coût initial disparaît', 'Meilleure — le coût historique reste visible'] },
          { cells: ['Compte utilisé', '6800/6830 Amortissements / 15xx actif', '6800/6830 / 1509/1539/1609 FAC'] },
          { cells: ['En pratique', 'Utilisé pour certains biens', 'Méthode privilégiée pour véhicules et machines'] },
        ]}
      />

      <H3>Méthode directe</H3>
      <Ecriture debit="6800 Amortissements" credit="1500 Machines (ou autre actif)" montant="xxx" libelle="Amortissement direct — réduction de la valeur de l'actif" />

      <H3>Méthode indirecte</H3>
      <Ecriture debit="6830 Amortissements s/véhicules" credit="1539 Ajustement valeur véhicules" montant="xxx" libelle="Amortissement indirect — compte de correction (FAC)" />
      <Ecriture debit="6800 Amortissements s/outillage" credit="1540 Ajustement valeur outillage" montant="xxx" libelle="Amortissement indirect outillage" sub />

      <H3>Exemple chiffré — véhicule CHF 20'000, 40% dégressif</H3>
      <Tableau
        caption="Tableau d'amortissement dégressif 40%"
        headers={['Année', 'Valeur initiale', 'Amortissement 40%', 'Valeur résiduelle']}
        rows={[
          { cells: ['Année 1', "CHF 20'000", "CHF 8'000", "CHF 12'000"] },
          { cells: ['Année 2', "CHF 12'000", "CHF 4'800", "CHF 7'200"] },
          { cells: ['Année 3', "CHF 7'200", "CHF 2'880", "CHF 4'320"] },
          { cells: ['Année 4', "CHF 4'320", "CHF 1'728", "CHF 2'592"] },
        ]}
      />

      <H2>3. Parts privées s/frais véhicule</H2>
      <P>Lorsqu'un véhicule d'entreprise est utilisé à des fins privées (y compris trajets domicile-travail), une <strong>part privée doit obligatoirement être comptabilisée au moins une fois par an</strong>, tant au niveau comptable que fiscal et TVA.</P>

      <Tableau
        caption="Taux de parts privées véhicule"
        headers={['Type de véhicule', 'Base de calcul', 'Taux annuel', 'Minimum']}
        rows={[
          { cells: ['Véhicule standard (< CHF 100\'000 HT)', 'Prix d\'achat HT', '10.8% TTC/an', "CHF 1'800/an"] },
          { cells: ['Véhicule de plus de 10 ans', 'Prix d\'achat HT', '4% TTC/an', "CHF 900/an"] },
          { cells: ['Véhicule de luxe — tranche jusqu\'à CHF 100\'000', 'Prix d\'achat HT', '10.8% TTC/an', '—'] },
          { cells: ['Véhicule de luxe — tranche > CHF 100\'000', 'Part > CHF 100\'000 HT', '20.4% TTC/an', '—'] },
        ]}
      />

      <H3>Exemple véhicule standard CHF 60'000 HT</H3>
      <div style={{ background: '#f8f9fb', border: '1px solid #e2e8f0', borderRadius: 8, padding: '14px', margin: '12px 0', fontSize: '0.83rem', color: '#475569', lineHeight: 1.9 }}>
        CHF 60'000 × 10.8% = <strong>CHF 6'480 TTC/an</strong>
      </div>

      <H3>Exemple véhicule de luxe CHF 140'000 HT</H3>
      <div style={{ background: '#f8f9fb', border: '1px solid #e2e8f0', borderRadius: 8, padding: '14px', margin: '12px 0', fontSize: '0.83rem', color: '#475569', lineHeight: 1.9 }}>
        10.8% sur CHF 100'000 = CHF 10'800<br />
        20.4% sur CHF 40'000 = CHF 8'160<br />
        <strong>Total part privée annuelle : CHF 18'960 TTC</strong>
      </div>

      <H3>Écritures parts privées véhicule</H3>
      <Ecriture debit="2110 CC Actionnaire" credit="3000 Chiffre d'affaires" montant="6'480" libelle="Parts privées véhicule 10.8% — TDFN (écriture TVA incluse)" />
      <Ecriture debit="2110 CC Actionnaire" credit="6270 Parts privées charges véhicules" montant="6'480" libelle="Parts privées véhicule 10.8% — Méthode effective (TVA incluse)" sub />

      <Note color="blue">
        <strong>Garagistes :</strong> Le calcul se fait sur le prix moyen des ventes de l'année. Ex : 25 véhicules vendus pour CHF 525'000 HT → base = 525'000 ÷ 25 = CHF 21'000.<br /><br />
        <strong>TDFN :</strong> Pour les indépendants au taux de dette fiscale nette, la part privée est sans TVA (la TVA est déjà prise en compte dans le TDFN).
      </Note>

      <H2>4. Prélèvements en nature (restaurants, commerces)</H2>
      <P>Chaque propriétaire de restaurant, commerce de détail, snack ou boulangerie est tenu de comptabiliser des parts privées pour les prélèvements de marchandises à titre privé pour lui et sa famille. Les montants sont définis dans la <strong>Notice N1/2007</strong> de l'AFC.</P>
      <Ecriture debit="2110 CC Actionnaire" credit="4200 Achats de marchandises" montant="xxx" libelle="Parts privées pour prélèvements en nature — écriture TVA incluse" />

      <H2>5. Cession d'un actif immobilisé</H2>
      <P>La vente d'une immobilisation (véhicule, machine, mobilier) en cours ou en fin d'exercice génère plusieurs écritures. Il faut d'abord solder la valeur résiduelle comptable, puis constater le produit de cession et dégager le résultat.</P>
      <Note color="yellow">
        <strong>Exemple :</strong> Véhicule acheté CHF 20'000, amorti CHF 8'000 (valeur nette comptable = CHF 12'000). Vendu CHF 10'000 TTC (8.1%) → HT = CHF 9'250.
      </Note>
      <H3>Étape 1 — Sortir l'actif et son amortissement cumulé</H3>
      <Ecriture debit="1539 Ajustement valeur véhicules" credit="1530 Véhicules" montant="8'000" libelle="Extourne des amortissements cumulés (méthode indirecte)" />
      <H3>Étape 2 — Constater la vente et le résultat</H3>
      <Ecriture debit="1100 Clients (ou 1020 Banque)" credit="1530 Véhicules" montant="9'250" libelle="Produit de cession HT" />
      <Ecriture debit="1100 Clients (ou 1020 Banque)" credit="2200 TVA Due" montant="750" libelle="TVA 8.1% sur cession" sub />
      <Ecriture debit="8500 Perte sur cession" credit="1530 Véhicules" montant="2'750" libelle="Perte sur cession — valeur résiduelle (12'000) − prix HT (9'250) = CHF 2'750" sub />
      <Note color="blue">
        Si le prix de vente HT est supérieur à la valeur nette comptable → <strong>gain sur cession</strong> → Crédit 8500 (ou compte de produit exceptionnel 8000).<br />
        Si inférieur → <strong>perte sur cession</strong> → Débit 8500.
      </Note>
    </div>
  );
}

// ─── ONGLET 5 : SALAIRES & TVA FINALE ────────────────────────────────────────
function TabSalairesTVA() {
  return (
    <div>
      <H2>1. Salaires et charges sociales au 31 décembre</H2>
      <P>Au 31 décembre, toutes les rémunérations déjà "gagnées" par le personnel ainsi que les charges sociales correspondantes doivent être comptabilisées — même si elles ne seront payées qu'en janvier ou facturées par les caisses qu'au 1er trimestre suivant.</P>
      <Note color="blue">L'objectif est de présenter un résultat fidèle et d'éviter de reporter des charges sur l'exercice suivant (principe de délimitation périodique, art. 958b CO).</Note>

      <H3>Écritures de bouclement salaires</H3>
      <Ecriture debit="5000 Salaires" credit="2279 Salaires à payer" montant="xxx" libelle="Salaires nets de décembre non encore versés" />
      <Ecriture debit="5000 Salaires" credit="5700 Cotisations AVS 2024" montant="xxx" libelle="Cotisations AVS employé décembre" sub />
      <Ecriture debit="5000 Salaires" credit="5720 Cotisations LPP" montant="xxx" libelle="LPP employé décembre" sub />
      <Ecriture debit="5000 Salaires" credit="5730 Cotisations SUVA" montant="xxx" libelle="SUVA non professionnelle décembre" sub />
      <Ecriture debit="5005 Indemnités reçues" credit="5000 Salaires" montant="xxx" libelle="Indemnités accident à imputer sur les salaires" sub />
      <Ecriture debit="2273 SUVA à recevoir" credit="5005 Indemnités" montant="xxx" libelle="Créance sur SUVA pour indemnités à recevoir" sub />

      <H3>Décomptes finaux des assurances sociales</H3>
      <P>En fin d'année, les décomptes définitifs reçus des caisses permettent de solder les comptes provisoires :</P>
      <Ecriture debit="5700 Charges sociales" credit="2270 AVS à payer" montant="xxx" libelle="Décompte AVS final — régularisation solde" />
      <Ecriture debit="5730 SUVA" credit="2273 SUVA à payer" montant="xxx" libelle="Décompte SUVA final" sub />
      <Ecriture debit="5720 LPP" credit="2272 LPP à payer" montant="xxx" libelle="Décompte LPP final" sub />
      <Ecriture debit="5740 UM" credit="2274 UM à payer" montant="xxx" libelle="Provision UM (assurance perte de gain maladie)" sub />
      <Ecriture debit="2270 AVS" credit="5710 Allocations familiales" montant="xxx" libelle="Allocations familiales — virement de la caisse AVS" sub />
      <Ecriture debit="2278 Impôt à la source" credit="5780 IS à reverser" montant="xxx" libelle="Impôt à la source — régularisation" sub />

      <H2>2. Décompte TVA final</H2>
      <P>Après avoir effectué la concordance TVA, on regroupe les comptes d'impôt préalable et de TVA due dans le compte de décompte 2201. Ce compte sert de compte de transit annuel — il isole le solde net dû à l'AFC.</P>

      <H3>Logique du regroupement</H3>
      <Note color="blue">
        <strong>2201 Décompte TVA</strong> est un compte de transit :<br />
        — Il reçoit la TVA due (crédit de 2200 → débit de 2201 n'est pas correct)<br />
        — Il est débité des IP à récupérer (1171/1172)<br />
        — Son solde créditeur final = montant à verser à l'AFC<br /><br />
        <strong>Ordre correct :</strong> D'abord transférer les IP dans 2201 (débit 2201), puis transférer la TVA due (débit 2200 → crédit 2201). Le solde de 2201 représente le net à payer.
      </Note>

      <H3>Écritures de regroupement TVA</H3>
      <Ecriture debit="2201 Décompte TVA" credit="1171 IP s/matériel" montant="xxx" libelle="Transfert IP achats — réduit le solde dû à l'AFC" />
      <Ecriture debit="2201 Décompte TVA" credit="1172 IP s/investissements" montant="xxx" libelle="Transfert IP investissements" sub />
      <Ecriture debit="2200 TVA Due" credit="2201 Décompte TVA" montant="xxx" libelle="Transfert TVA collectée — augmente le solde dû à l'AFC" sub />
      <Ecriture debit="2201 Décompte TVA" credit="1020 Banque" montant="xxx" libelle="Paiement du solde net à l'AFC (solde créditeur de 2201)" sub />
    </div>
  );
}

// ─── ONGLET 6 : IMPÔTS & CLÔTURE ─────────────────────────────────────────────
function TabImpots() {
  return (
    <div>
      <H2>1. Compte courant actionnaire — intérêts</H2>
      <P>Lorsque la société accorde un prêt à un actionnaire (ou inversement), il est <strong>obligatoire</strong> de comptabiliser un intérêt conforme aux conditions du marché. Cela permet de respecter le <strong>principe du tiers indépendant</strong> (art. 58 al. 1 let. b LIFD) et d'éviter que la relation ne soit requalifiée en avantage patrimonial non justifié.</P>
      <Note color="purple">
        Le taux d'intérêt applicable est publié chaque année par l'AFC dans ses lettres circulaires. Consulter : <strong>estv.admin.ch → IFD → Lettres circulaires</strong>. En 2025, le taux indicatif pour les prêts actionnaire était de 1.5%.
      </Note>

      <H3>Écriture intérêts C/C actionnaire</H3>
      <Ecriture debit="2110 CC Actionnaire" credit="6950 Produits financiers" montant="xxx" libelle="Intérêts s/CC Actionnaire 1.5% — actionnaire débiteur envers la société" />
      <Ecriture debit="6950 Charges financières" credit="2110 CC Actionnaire" montant="xxx" libelle="Intérêts s/CC Actionnaire — société débitrice envers l'actionnaire" sub />

      <H2>2. Provision pour impôts</H2>
      <P>En fin d'année, après avoir saisi toutes les écritures de bouclement, il est nécessaire de calculer et provisionner l'impôt sur les sociétés. Le résultat imposable est le bénéfice <strong>avant impôts</strong>.</P>
      <Note color="blue">
        Outil de calcul : <strong>swisstaxcalculator.estv.admin.ch → Personnes morales</strong><br />
        Entrer le bénéfice avant impôts, le canton et la commune pour obtenir le montant d'impôt à provisionner.
      </Note>

      <H3>Traitement des acomptes d'impôts en cours d'année</H3>
      <P>Tous les paiements d'impôts effectués durant l'année sont d'abord comptabilisés dans le compte de bilan 2208 — ils n'impactent pas le résultat :</P>
      <Ecriture debit="2208 Impôts directs" credit="1020 Liquidités" montant="xxx" libelle="Paiement acompte impôts 2025 / Impôt cantonal / IFD / Communal" />

      <H3>Écriture de provision au 31 décembre</H3>
      <P>En fin d'année, on extourne le compte 2208 et on constate la charge définitive dans 8900 :</P>
      <Ecriture debit="8900 Impôts directs" credit="2208 Impôts directs" montant="xxx" libelle="Provision impôts 2025 — le compte 8900 affiche uniquement l'impôt de l'année traitée" />

      <Note color="red">
        <strong>Important :</strong> Le compte 8900 doit afficher <strong>uniquement le montant d'impôts de l'année traitée</strong> — pas les acomptes d'autres années. Le compte 2208 sert de compte de transit pour les paiements en cours d'année.
      </Note>

      <H2>3. Réserve générale obligatoire</H2>
      <P>Pour les sociétés anonymes (SA), la loi impose la constitution d'une réserve légale issue du bénéfice :</P>
      <Note color="blue">
        <strong>5% du bénéfice net</strong> doit être attribué à la réserve légale issue du bénéfice (compte 2950), jusqu'à ce que celle-ci atteigne <strong>50% du capital-actions</strong> (art. 671 CO).
      </Note>
      <Ecriture debit="2979 Bénéfice de l'exercice" credit="2950 Réserve légale issue du bénéfice" montant="xxx" libelle="Attribution 5% du bénéfice à la réserve légale" />

      <H2>4. Clôture des comptes de résultat</H2>
      <P>En fin d'exercice, tous les comptes de charges et de produits sont soldés et virés dans le compte 9000 Compte de résultat, puis le résultat final est reporté dans les fonds propres du bilan (compte 2979).</P>
      <Ecriture debit="9000 Compte de résultat" credit="2979 Résultat de l'exercice" montant="xxx" libelle="Report du bénéfice dans les fonds propres" />
      <Ecriture debit="2979 Résultat de l'exercice" credit="9000 Compte de résultat" montant="xxx" libelle="Report de la perte dans les fonds propres (écriture inverse)" sub />

      <H2>5. Points clés à retenir</H2>
      {[
        'Intérêts C/C actionnaire : obligatoires — taux AFC publié annuellement.',
        'Paiements d\'impôts en cours d\'année → compte 2208 (bilan, pas de résultat).',
        'Provision impôts au 31.12 → Débit 8900 / Crédit 2208.',
        'Le compte 8900 = uniquement l\'impôt de l\'année en cours.',
        'Réserve légale SA : 5% du bénéfice jusqu\'à 50% du capital (art. 671 CO).',
        'Vérifier que le compte 2201 Décompte TVA est soldé à zéro après le bouclement.',
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
  { id: 'overview',      label: 'Vue d\'ensemble' },
  { id: 'debiteurs',     label: 'Liquidités & débiteurs' },
  { id: 'transitoires',  label: 'Transitoires & stocks' },
  { id: 'amortissements',label: 'Amortissements & parts privées' },
  { id: 'salaires',      label: 'Salaires & TVA' },
  { id: 'impots',        label: 'Impôts & clôture' },
];

export default function BouclementView() {
  const [tab, setTab] = useState('overview');
  return (
    <TheoryLayout
      title="6. Bouclement comptable annuel"
      tag="tag-bouclement"
      tagLabel="Bouclement"
      meta="Notice A/1995 · CO 958b · Guide pratique"
      tabs={TABS}
      activeTab={tab}
      onTabChange={setTab}
    >
      {tab === 'overview'       && <TabOverview />}
      {tab === 'debiteurs'      && <TabDebiteurs />}
      {tab === 'transitoires'   && <TabTransitoires />}
      {tab === 'amortissements' && <TabAmortissements />}
      {tab === 'salaires'       && <TabSalairesTVA />}
      {tab === 'impots'         && <TabImpots />}
    </TheoryLayout>
  );
}