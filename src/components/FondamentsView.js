import React, { useState } from 'react';
import { Banknote, FileText, Package, Clock } from 'lucide-react';
import { P, H3, Note, Tableau, Ecriture, GrilleT, TheoryLayout, Section } from './TheoryUI';

// ─── ONGLET 1 : INTRODUCTION ──────────────────────────────────────────────────
function TabIntro() {
  return (
    <div>
      <Section title="1. À quoi sert la comptabilité ?" defaultOpen={true}>
      <P>Imaginez que vous ouvrez une manufacture horlogère. Chaque jour, vous achetez des composants, payez vos employés, encaissez vos ventes. Au bout d'un mois, vous vous posez une question simple : <strong>est-ce que mon activité gagne de l'argent, ou en perd-elle ?</strong></P>
      <P>La comptabilité est le système qui permet de répondre à cette question — et à bien d'autres. Elle enregistre, classe et présente tous les événements financiers de votre entreprise de manière organisée et vérifiable. En Suisse, c'est aussi une <strong>obligation légale</strong> pour la plupart des entreprises (CO art. 957 ss).</P>

      <Note color="blue">
        <strong>Exemple concret — SwiSSwatch SA :</strong> Quand Théo Keller a fondé SwiSSwatch SA, la première chose que la banque lui a demandée pour obtenir un prêt de CHF 200'000, c'était ses comptes. Sans comptabilité, pas de financement. La banque voulait voir un bilan (ce que possède l'entreprise) et un compte de résultat (est-ce que l'activité est rentable). Théo a dû présenter des états financiers solides pour convaincre son banquier. Aujourd'hui encore, chaque trimestre, la banque demande une mise à jour des comptes de SwiSSwatch SA.
      </Note>

      </Section>
      <Section title="2. Ce que la comptabilité permet de savoir" defaultOpen={false}>
      <Tableau
        headers={['Question', 'Réponse donnée par', 'Exemple']}
        rows={[
          { cells: ['Que possède l\'entreprise ? Que doit-elle ?', 'Le bilan', 'CHF 45\'000 de machines, CHF 12\'000 de dettes fournisseurs'] },
          { cells: ['L\'activité est-elle rentable ?', 'Le compte de résultat', 'Ventes CHF 85\'000 − Charges CHF 72\'000 = Bénéfice CHF 13\'000'] },
          { cells: ['Qui me doit de l\'argent ? Qui dois-je payer ?', 'Grand livre / postes ouverts', 'Client Bucherer AG doit CHF 1\'500 — Fournisseur Nivarox SA doit recevoir CHF 800'] },
        ]}
      />

      </Section>
      <Section title="3. La comptabilité ≠ la caisse" defaultOpen={false}>
      <P>C'est l'erreur la plus répandue chez les débutants. Beaucoup confondent comptabilité et suivi de trésorerie. Ce sont deux choses différentes.</P>

      <Tableau
        caption="Exemples concrets — différence comptabilité / trésorerie"
        headers={['Situation', 'En trésorerie', 'En comptabilité']}
        rows={[
          { cells: ['Vente à l\'hôtel CHF 800 le 15.12 — payée le 15.01', 'Rien en décembre', 'Produit en décembre ✓ (prestation fournie)'] },
          { cells: ['Prime d\'assurance CHF 1\'200 payée en janvier pour l\'année', 'CHF 1\'200 sortent en janvier', 'CHF 100/mois → 1/12 en charge par mois'] },
          { cells: ['Remboursement d\'emprunt CHF 5\'000', 'CHF 5\'000 sortent de la banque', 'Pas une charge ! Juste une réduction de dette'] },
          { cells: ['Amortissement machine CHF 4\'500', 'Aucun mouvement d\'argent', 'Charge de l\'exercice (perte de valeur)'] },
        ]}
      />
      <Note color="blue">
        Ce principe s'appelle la <strong>délimitation périodique</strong> (art. 958b CO). Les charges et les produits appartiennent à la période à laquelle ils se rapportent — pas à la période où l'argent bouge physiquement.
      </Note>

      <H3>Illustration chez SwiSSwatch SA — mars année 1</H3>
      <P>Voici un mois typique où SwiSSwatch SA réalise un <strong>bénéfice comptable</strong> mais se retrouve avec un <strong>cash flow négatif</strong>. C'est exactement ce piège que la comptabilité permet de comprendre.</P>

      <Tableau
        caption="SwiSSwatch SA — mars année 1 : profit ≠ cash"
        headers={['Poste', 'Résultat (comptabilité)', 'Trésorerie (cash réel)']}
        rows={[
          { cells: ["Ventes de montres livrées en mars (payées sous 60 jours)", "+ CHF 45'000", "CHF 0 (pas encore encaissé)"] },
          { cells: ["Prestations réparation encaissées comptant", "+ CHF 5'000", "+ CHF 5'000"] },
          { cells: ["Achats composants (facture payée immédiatement)", "- CHF 12'000", "- CHF 12'000"] },
          { cells: ["Salaires mars (payés fin mars)", "- CHF 8'000", "- CHF 8'000"] },
          { cells: ["Remboursement mensuel emprunt bancaire", "CHF 0 (pas une charge !)", "- CHF 3'000"] },
          { cells: ["Paiement avance fournisseur pour avril", "CHF 0 (pas encore une charge)", "- CHF 2'000"] },
          { cells: ["Amortissement machines (écriture comptable)", "- CHF 5'000", "CHF 0 (pas de mouvement cash)"] },
        ]}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '12px 0' }}>
        <div style={{ background: '#f0fdf4', border: '1.5px solid #22c55e', borderRadius: 10, padding: '12px 16px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.78rem', color: '#475569', marginBottom: 4 }}>Résultat comptable du mois</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#16a34a' }}>+ CHF 25'000</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: 2 }}>Bénéfice</div>
        </div>
        <div style={{ background: '#fef2f2', border: '1.5px solid #ef4444', borderRadius: 10, padding: '12px 16px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.78rem', color: '#475569', marginBottom: 4 }}>Mouvement de trésorerie réel</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#dc2626' }}>- CHF 20'000</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: 2 }}>Cash flow négatif</div>
        </div>
      </div>
      <Note color="yellow">
        SwiSSwatch SA gagne de l'argent (bénéfice CHF 25'000) mais son compte en banque <strong>diminue de CHF 20'000</strong> ce mois-là ! Pourquoi ? Parce que les clients n'ont pas encore payé (CHF 45'000 en attente), et l'entreprise a remboursé un emprunt (pas une charge) et payé une avance (pas encore une charge). <strong>Profit et cash sont deux choses différentes.</strong>
      </Note>

      </Section>
      <Section title="4. La partie double — comment ça fonctionne" defaultOpen={false}>
      <P>La comptabilité suisse repose sur le principe de la <strong>partie double</strong> : chaque opération affecte toujours deux comptes simultanément, l'un en débit et l'autre en crédit, pour le même montant.</P>
      <P>Pourquoi ? Parce que toute opération économique a deux facettes : quelque chose entre ou augmente (débit) et quelque chose sort ou diminue (crédit).</P>

      <Tableau
        caption="Exemples de la partie double"
        headers={['Opération', 'Débit (quoi augmente ou entre)', 'Crédit (quoi diminue ou sort)']}
        rows={[
          { cells: ['Achat machine CHF 10\'000 payée par banque', 'Machine (actif +)', 'Banque (actif −)'] },
          { cells: ['Vente à crédit CHF 5\'000', 'Créances clients (actif +)', 'Ventes (produit +)'] },
          { cells: ['Emprunt bancaire CHF 20\'000', 'Banque (actif +)', 'Dette bancaire (passif +)'] },
          { cells: ['Paiement loyer CHF 2\'000', 'Charges loyer (charge +)', 'Banque (actif −)'] },
        ]}
      />
      <Note color="green">Le total des débits = toujours le total des crédits. C'est ce qui garantit que le bilan reste toujours équilibré.</Note>

      <H3>Deux exemples concrets chez SwiSSwatch SA</H3>
      <P>Voyons comment la partie double fonctionne avec deux opérations réelles de SwiSSwatch SA :</P>

      <P><strong>Exemple 1 :</strong> SwiSSwatch SA achète des composants horlogers pour CHF 8'000 à crédit chez Nivarox SA.</P>
      <Ecriture debit="4200 Achats composants" credit="2000 Fournisseurs" montant="8'000" libelle="Achat composants — Nivarox SA — facture N-2024-089" />
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', margin: '8px 0 16px' }}>
        <div style={{ flex: 1, minWidth: 180, background: '#eff6ff', border: '1px solid #93c5fd', borderRadius: 8, padding: '10px 14px', fontSize: '0.82rem' }}>
          <div style={{ fontWeight: 700, color: '#1e40af', marginBottom: 4 }}>Débit : 4200 Achats +8'000</div>
          <div style={{ color: '#475569' }}>La charge augmente (on a consommé des ressources). Les achats sont une charge qui passe au débit.</div>
        </div>
        <div style={{ flex: 1, minWidth: 180, background: '#fdf2f8', border: '1px solid #f9a8d4', borderRadius: 8, padding: '10px 14px', fontSize: '0.82rem' }}>
          <div style={{ fontWeight: 700, color: '#9d174d', marginBottom: 4 }}>Crédit : 2000 Fournisseurs +8'000</div>
          <div style={{ color: '#475569' }}>La dette augmente (on doit de l'argent à Nivarox SA). Les dettes sont un passif qui augmente au crédit.</div>
        </div>
      </div>

      <P><strong>Exemple 2 :</strong> SwiSSwatch SA vend des montres pour CHF 12'500 à Bucherer AG, paiement sous 30 jours.</P>
      <Ecriture debit="1100 Clients" credit="3000 Ventes de marchandises" montant="12'500" libelle="Vente montres — Bucherer AG — facture F-2024-034" />
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', margin: '8px 0 16px' }}>
        <div style={{ flex: 1, minWidth: 180, background: '#eff6ff', border: '1px solid #93c5fd', borderRadius: 8, padding: '10px 14px', fontSize: '0.82rem' }}>
          <div style={{ fontWeight: 700, color: '#1e40af', marginBottom: 4 }}>Débit : 1100 Clients +12'500</div>
          <div style={{ color: '#475569' }}>La créance augmente (Bucherer AG nous doit de l'argent). Les créances sont un actif qui augmente au débit.</div>
        </div>
        <div style={{ flex: 1, minWidth: 180, background: '#fdf2f8', border: '1px solid #f9a8d4', borderRadius: 8, padding: '10px 14px', fontSize: '0.82rem' }}>
          <div style={{ fontWeight: 700, color: '#9d174d', marginBottom: 4 }}>Crédit : 3000 Ventes +12'500</div>
          <div style={{ color: '#475569' }}>Le produit augmente (on a créé de la valeur). Les ventes sont un produit qui augmente au crédit.</div>
        </div>
      </div>
      <Note color="blue">
        Dans les deux cas, le <strong>débit = le crédit</strong> (CHF 8'000 = CHF 8'000 et CHF 12'500 = CHF 12'500). C'est la règle absolue de la partie double : chaque écriture est toujours équilibrée. Si vous trouvez un déséquilibre, c'est qu'il y a une erreur.
      </Note>

      </Section>
      <Section title="5. Les états financiers — vue d'ensemble" defaultOpen={false}>
      <Tableau
        headers={['Document', 'Ce qu\'il montre', 'Période ou date']}
        rows={[
          { cells: ['Bilan', 'Patrimoine — ce que l\'entreprise possède et doit', 'À une date précise (ex. 31.12)'] },
          { cells: ['Compte de résultat', 'Performance — ventes moins charges = résultat', 'Sur une période (toute l\'année)'] },
          { cells: ['Grand livre', 'Détail de chaque compte', 'En continu'] },
          { cells: ['Journal', 'Toutes les écritures dans l\'ordre chronologique', 'En continu'] },
        ]}
      />

      </Section>
      <Section title="6. L'exercice comptable" defaultOpen={false}>
      <P>La comptabilité est organisée en périodes de 12 mois appelées <strong>exercices comptables</strong>. En général, l'exercice correspond à l'année civile (1er janvier au 31 décembre). À la fin de chaque exercice, on arrête les comptes, on établit le bilan et le compte de résultat, et on repart à zéro pour l'exercice suivant — sauf pour le bilan, dont les soldes se reportent d'une année à l'autre.</P>

      </Section>
      <Section title="7. Points clés à retenir" defaultOpen={false}>
      {[
        'La comptabilité enregistre la réalité économique, pas seulement les flux de trésorerie.',
        'Charge ≠ paiement | Produit ≠ encaissement — c\'est le principe de délimitation périodique.',
        'Chaque écriture touche deux comptes simultanément — c\'est la partie double.',
        'Bilan = patrimoine à une date | Compte de résultat = performance sur une période.',
        'L\'exercice comptable dure généralement 12 mois.',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>▶</span>
          <span>{pt}</span>
        </div>
      ))}
      </Section>
    </div>
  );
}

// ─── ONGLET 2 : LE BILAN ──────────────────────────────────────────────────────
function TabBilan() {
  /* --- helper : mini-card colored --- */
  const MiniCard = ({ icon: Icon, label, color }) => (
    <div style={{ flex: '1 1 120px', background: color + '15', border: `1.5px solid ${color}`, borderRadius: 8, padding: '10px 12px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}><Icon size={22} color={color} /></div>
      <div style={{ fontSize: '0.78rem', fontWeight: 600, color, marginTop: 2 }}>{label}</div>
    </div>
  );

  /* --- helper : formula box --- */
  const Formula = ({ parts, color = '#2563eb' }) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 8, background: color + '0d', border: `1.5px solid ${color}40`, borderRadius: 10, padding: '12px 18px', margin: '10px 0', fontSize: '0.88rem', fontWeight: 600 }}>
      {parts.map((p, i) => (
        <span key={i} style={p.startsWith('=') || p.startsWith('+') || p.startsWith('−') ? { color: '#64748b', fontWeight: 400 } : { color }}>{p}</span>
      ))}
    </div>
  );

  /* --- helper : operation impact card --- */
  const OpCard = ({ title, desc, actif, passif, result, color }) => (
    <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 10, padding: '14px 16px', marginBottom: 10 }}>
      <div style={{ fontWeight: 700, fontSize: '0.84rem', color: '#1e293b', marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: '0.8rem', color: '#475569', marginBottom: 8 }}>{desc}</div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <span style={{ background: '#dbeafe', borderRadius: 6, padding: '4px 10px', fontSize: '0.78rem', fontWeight: 600, color: '#1e40af' }}>Actif {actif}</span>
        <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>=</span>
        <span style={{ background: '#fce7f3', borderRadius: 6, padding: '4px 10px', fontSize: '0.78rem', fontWeight: 600, color: '#9d174d' }}>Passif {passif}</span>
        <span style={{ fontSize: '0.78rem', color, fontWeight: 600, marginLeft: 'auto' }}>{result}</span>
      </div>
    </div>
  );

  /* --- bilan row helper --- */
  const bRow = (label, montant, opts = {}) => {
    const { bold, section, total, side } = opts;
    const bg = total ? '#d1dce8' : section ? '#e8f0f8' : undefined;
    const fw = (bold || section || total) ? 700 : 400;
    const clr = side === 'passif' ? '#1e4a6e' : '#2c5f8a';
    return (
      <tr style={{ background: bg, borderBottom: '1px solid #dde2ea' }}>
        <td style={{ padding: section ? '8px 12px' : '5px 12px 5px 20px', fontWeight: fw, fontSize: section ? '0.82rem' : '0.8rem', color: section ? clr : '#1a2332', ...(section && { borderTop: '1.5px solid #c5d3e3' }) }}>{label}</td>
        <td style={{ padding: '5px 12px', textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontWeight: fw, fontSize: '0.8rem', color: clr }}>{montant}</td>
      </tr>
    );
  };

  return (
    <div>
      {/* ═══════════ SECTION 1 : QU'EST-CE QUE LE BILAN ? ═══════════ */}
      <Section title="1. Qu'est-ce que le bilan ?" defaultOpen={true}>
      <P>Imaginez que vous faites l'inventaire de tout ce que vous possédez (votre appartement, votre voiture, votre compte en banque) et de toutes vos dettes (hypothèque, crédit auto, carte de crédit). La différence entre les deux, c'est votre <strong>fortune nette</strong>. Le bilan d'une entreprise, c'est exactement la même chose.</P>
      <P>Le bilan répond à deux questions simples :</P>
      <ul style={{ margin: '4px 0 12px 20px', fontSize: '0.85rem', color: '#334155', lineHeight: 1.7 }}>
        <li><strong>Que possède l'entreprise ?</strong> → c'est l'<strong>actif</strong> (côté gauche)</li>
        <li><strong>Qui a financé tout cela ?</strong> → c'est le <strong>passif</strong> (côté droit)</li>
      </ul>

      <P><strong>L'équation fondamentale du bilan :</strong></P>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, background: 'linear-gradient(135deg, #eff6ff, #f0fdf4)', border: '2px solid #3b82f6', borderRadius: 12, padding: '18px 24px', margin: '12px 0', flexWrap: 'wrap' }}>
        <span style={{ background: '#3b82f6', color: '#fff', borderRadius: 8, padding: '8px 16px', fontWeight: 700, fontSize: '0.9rem' }}>ACTIF</span>
        <span style={{ fontSize: '1.3rem', fontWeight: 700, color: '#64748b' }}>=</span>
        <span style={{ background: '#ef4444', color: '#fff', borderRadius: 8, padding: '8px 16px', fontWeight: 700, fontSize: '0.9rem' }}>Fonds étrangers</span>
        <span style={{ fontSize: '1.3rem', fontWeight: 700, color: '#64748b' }}>+</span>
        <span style={{ background: '#22c55e', color: '#fff', borderRadius: 8, padding: '8px 16px', fontWeight: 700, fontSize: '0.9rem' }}>Fonds propres</span>
      </div>

      <Note color="yellow">Le bilan est toujours daté — c'est une <strong>photographie à un instant T</strong>, pas un film. On écrit par exemple "Bilan au 31.12.2023". Le lendemain, le bilan peut déjà être différent.</Note>
      </Section>

      {/* ═══════════ SECTION 2 : L'ACTIF ═══════════ */}
      <Section title="2. L'actif — ce que possède l'entreprise" defaultOpen={false}>
      <P>L'actif regroupe tout ce que l'entreprise possède et qui a une valeur : son argent, ses machines, ses stocks, les factures que ses clients n'ont pas encore payées… Pensez à un inventaire complet.</P>

      <H3>Actifs circulants (en haut du bilan)</H3>
      <P>Ce qui "tourne vite" — ce qui se transforme en cash en <strong>moins de 12 mois</strong>. En Suisse, on les place <strong>en haut</strong> du bilan, du plus liquide au moins liquide.</P>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '10px 0' }}>
        <MiniCard icon={Banknote} label="Liquidités" color="#16a34a" />
        <MiniCard icon={FileText} label="Créances" color="#2563eb" />
        <MiniCard icon={Package} label="Stocks" color="#d97706" />
        <MiniCard icon={Clock} label="Transitoires" color="#7c3aed" />
      </div>
      <Tableau
        caption="Actifs circulants de SwiSSwatch SA"
        headers={['Catégorie', 'Comptes', 'Exemples chez SwiSSwatch SA']}
        rows={[
          { cells: ['Liquidités', '1000–1020', "Compte BCN CHF 85'000"] },
          { cells: ['Créances clients', '1100', "Facture Bucherer AG pas encore payée CHF 120'000"] },
          { cells: ['Stocks', '1200', "Composants horlogers en stock CHF 95'000"] },
          { cells: ['Actifs transitoires', '1300–1301', "Loyer janvier payé d'avance CHF 5'000"] },
        ]}
      />

      <H3>Actifs immobilisés (en bas du bilan)</H3>
      <P>Ce qui reste <strong>longtemps</strong> dans l'entreprise (plus de 12 mois). Ce n'est pas destiné à être vendu — c'est l'outil de travail.</P>
      <Tableau
        caption="Actifs immobilisés de SwiSSwatch SA"
        headers={['Catégorie', 'Comptes', 'Exemples chez SwiSSwatch SA']}
        rows={[
          { cells: ['Immobilisations corporelles', '1500–1600', "Centre CNC CHF 280'000, Véhicules CHF 103'000, Mobilier CHF 45'000, Informatique CHF 62'000"] },
          { cells: ['Immobilisations incorporelles', '1700', "Brevet mouvement CHF 30'000"] },
          { cells: ['./. Amortissements cumulés', '1509/1609', "Usure comptabilisée −CHF 145'000"] },
        ]}
      />

      <Note color="yellow">En Suisse (CO art. 959a), les actifs circulants sont présentés <strong>EN HAUT</strong> du bilan (les plus liquides d'abord) et les actifs immobilisés <strong>EN BAS</strong>. C'est l'ordre de <strong>liquidité décroissante</strong>.</Note>
      </Section>

      {/* ═══════════ SECTION 3 : LE PASSIF ═══════════ */}
      <Section title="3. Le passif — d'où vient l'argent" defaultOpen={false}>
      <P>Si l'actif montre <strong>CE QUE</strong> l'entreprise a, le passif montre <strong>QUI</strong> a financé tout ça. Il n'y a que deux sources possibles : l'argent emprunté (fonds étrangers = dettes) et l'argent des propriétaires (fonds propres).</P>

      <H3>Fonds étrangers à court terme (en haut du passif)</H3>
      <P>Les dettes à rembourser dans les <strong>12 prochains mois</strong>. Ce sont les plus urgentes, donc elles apparaissent en haut.</P>
      <Tableau
        caption="Dettes CT de SwiSSwatch SA"
        headers={['Catégorie', 'Comptes', 'Exemples chez SwiSSwatch SA']}
        rows={[
          { cells: ['Dettes fournisseurs', '2000', "Factures reçues non payées CHF 75'000"] },
          { cells: ['TVA due', '2200', "TVA à reverser à l'AFC CHF 12'000"] },
          { cells: ['Salaires à payer', '2160', "Salaires de décembre CHF 8'000"] },
          { cells: ['Charges sociales', '2270', "AVS/AI/APG dues CHF 20'000"] },
        ]}
      />

      <H3>Fonds étrangers à long terme (au milieu)</H3>
      <P>Les dettes à rembourser dans <strong>plus de 12 mois</strong>.</P>
      <Tableau
        caption="Dettes LT de SwiSSwatch SA"
        headers={['Catégorie', 'Comptes', 'Exemples chez SwiSSwatch SA']}
        rows={[
          { cells: ['Emprunts bancaires', '2400', "Prêt UBS à 5 ans CHF 200'000"] },
          { cells: ['Hypothèques', '2450', "Hypothèque atelier CHF 130'000"] },
        ]}
      />

      <H3>Fonds propres (en bas du passif)</H3>
      <P>L'argent qui appartient aux propriétaires — c'est le "filet de sécurité" de l'entreprise. Si on vendait tout et qu'on remboursait toutes les dettes, il resterait les fonds propres.</P>
      <Note color="green">
        <strong>Fonds propres = Actif total − Fonds étrangers.</strong><br />
        Si SwiSSwatch a CHF 680'000 d'actifs et CHF 445'000 de dettes, les fonds propres sont de CHF 680'000 − CHF 445'000 = <strong>CHF 235'000</strong>.
      </Note>
      <Tableau
        caption="Fonds propres de SwiSSwatch SA"
        headers={['Catégorie', 'Comptes', 'Exemples chez SwiSSwatch SA']}
        rows={[
          { cells: ['Capital-actions', '2800', "Capital libéré par les actionnaires CHF 200'000"] },
          { cells: ['Bénéfice / perte', '2960–2970', "Résultat de l'exercice CHF 35'000"] },
        ]}
      />

      <Note color="blue">En Suisse, le passif est ordonné par <strong>exigibilité décroissante</strong> : les dettes les plus urgentes (fournisseurs, court terme) en haut, les fonds propres tout en bas.</Note>
      </Section>

      {/* ═══════════ SECTION 4 : BILAN COMPLET SWISSWATCH ═══════════ */}
      <Section title="4. Le bilan de SwiSSwatch SA — 31.12.2023" defaultOpen={false}>
      <P>Voici le bilan complet de SwiSSwatch SA, présenté dans l'ordre suisse (liquidité décroissante à l'actif, exigibilité décroissante au passif).</P>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '2px solid #2c5f8a', borderRadius: 10, overflow: 'hidden', margin: '16px 0', boxShadow: '0 2px 8px rgba(44,95,138,0.10)', alignItems: 'start' }}>
        {/* --- Headers --- */}
        <div style={{ background: '#2c5f8a', padding: '10px 14px', color: '#fff', fontWeight: 700, fontSize: '0.85rem', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)' }}>ACTIF</div>
        <div style={{ background: '#1e4a6e', padding: '10px 14px', color: '#fff', fontWeight: 700, fontSize: '0.85rem', textAlign: 'center' }}>PASSIF</div>

        {/* --- ACTIF column --- */}
        <table style={{ borderCollapse: 'collapse', fontSize: '0.8rem', borderRight: '1px solid #c5d3e3', width: '100%', height: '100%' }}>
          <tbody>
            {bRow('Actifs circulants (AC)', '', { section: true })}
            {bRow('Banque', "85'000")}
            {bRow('Créances clients', "120'000")}
            {bRow('Stock composants', "95'000")}
            {bRow('Actifs transitoires', "5'000")}
            {bRow('Total AC', "305'000", { bold: true, section: true })}
            {bRow('Actifs immobilisés (AI)', '', { section: true })}
            {bRow('Machines CNC', "280'000")}
            {bRow('Mobilier', "45'000")}
            {bRow('Informatique', "62'000")}
            {bRow('Véhicules', "103'000")}
            {bRow('Brevets', "30'000")}
            {bRow('./. Amortissements', "−145'000")}
            {bRow('Total AI', "375'000", { bold: true, section: true })}
            {bRow('TOTAL ACTIF', "680'000", { total: true })}
          </tbody>
        </table>

        {/* --- PASSIF column --- */}
        <table style={{ borderCollapse: 'collapse', fontSize: '0.8rem', width: '100%', height: '100%' }}>
          <tbody>
            {bRow('Fonds étrangers CT', '', { section: true, side: 'passif' })}
            {bRow('Fournisseurs', "75'000", { side: 'passif' })}
            {bRow('TVA due', "12'000", { side: 'passif' })}
            {bRow('Salaires à payer', "8'000", { side: 'passif' })}
            {bRow('Charges sociales', "20'000", { side: 'passif' })}
            {bRow('Total FE CT', "115'000", { bold: true, section: true, side: 'passif' })}
            {bRow('Fonds étrangers LT', '', { section: true, side: 'passif' })}
            {bRow('Emprunt bancaire', "200'000", { side: 'passif' })}
            {bRow('Hypothèque atelier', "130'000", { side: 'passif' })}
            {bRow('Total FE LT', "330'000", { bold: true, section: true, side: 'passif' })}
            {bRow('Fonds propres (FP)', '', { section: true, side: 'passif' })}
            {bRow('Capital-actions', "200'000", { side: 'passif' })}
            {bRow('Bénéfice', "35'000", { side: 'passif' })}
            {bRow('Total FP', "235'000", { bold: true, section: true, side: 'passif' })}
            {bRow('TOTAL PASSIF', "680'000", { total: true, side: 'passif' })}
          </tbody>
        </table>
      </div>

      <Note color="green">
        <strong>Lecture :</strong> SwiSSwatch SA possède CHF 680'000 d'actifs. Ceux-ci sont financés par CHF 445'000 de fonds étrangers (115k CT + 330k LT) et CHF 235'000 de fonds propres. L'équilibre est parfait : 680'000 = 680'000.
      </Note>
      </Section>

      {/* ═══════════ SECTION 5 : L'EQUATION FONDAMENTALE ═══════════ */}
      <Section title="5. L'équation fondamentale — 3 façons de la lire" defaultOpen={false}>
      <P>L'égalité du bilan peut s'écrire de trois manières équivalentes. Chacune apporte un éclairage différent.</P>

      <Formula parts={['ACTIF', '=', 'PASSIF']} color="#2563eb" />
      <P style={{ fontSize: '0.82rem', color: '#475569', textAlign: 'center', margin: '-4px 0 14px' }}>Tout ce qu'on possède a forcément été financé par quelqu'un.</P>

      <Formula parts={['ACTIF', '=', 'Fonds étrangers', '+', 'Fonds propres']} color="#7c3aed" />
      <P style={{ fontSize: '0.82rem', color: '#475569', textAlign: 'center', margin: '-4px 0 14px' }}>L'argent vient soit des créanciers (dettes), soit des propriétaires.</P>

      <Formula parts={['Fonds propres', '=', 'ACTIF', '−', 'Fonds étrangers']} color="#16a34a" />
      <P style={{ fontSize: '0.82rem', color: '#475569', textAlign: 'center', margin: '-4px 0 14px' }}>La fortune nette des propriétaires = ce qui reste après remboursement de toutes les dettes.</P>
      </Section>

      {/* ═══════════ SECTION 6 : COMMENT LE BILAN EVOLUE ═══════════ */}
      <Section title="6. Comment le bilan évolue — chaque opération le modifie" defaultOpen={false}>
      <P>Chaque opération comptable modifie le bilan, mais l'égalité Actif = Passif est <strong>toujours</strong> maintenue. Voici quatre cas typiques chez SwiSSwatch SA :</P>

      <OpCard
        title="1. Achat machine CHF 280'000 à crédit"
        desc="SwiSSwatch achète un centre CNC et paiera plus tard."
        actif="+280k (machine)"
        passif="+280k (dette fournisseur)"
        result="Bilan augmente"
        color="#16a34a"
      />
      <OpCard
        title="2. Paiement fournisseur CHF 75'000"
        desc="SwiSSwatch règle une facture fournisseur par banque."
        actif="−75k (banque)"
        passif="−75k (dette fournisseur)"
        result="Bilan diminue"
        color="#dc2626"
      />
      <OpCard
        title="3. Vente à crédit CHF 25'000"
        desc="SwiSSwatch livre des montres à Bucherer AG, paiement sous 30 jours."
        actif="+25k (créances)"
        passif="+25k (FP via résultat)"
        result="Bilan augmente"
        color="#16a34a"
      />
      <OpCard
        title="4. Achat stock CHF 15'000 cash"
        desc="SwiSSwatch achète des composants horlogers en payant directement."
        actif="+15k stock / −15k banque"
        passif="inchangé"
        result="Bilan inchangé (permutation d'actifs)"
        color="#64748b"
      />

      <Note color="blue">Dans le cas 4, seul l'actif change de composition (banque → stock). Ni le total de l'actif, ni le passif ne bougent. C'est une <strong>permutation d'actifs</strong>.</Note>
      </Section>

      {/* ═══════════ SECTION 7 : POINTS CLES ═══════════ */}
      <Section title="7. Points clés" defaultOpen={false}>
      {[
        'Le bilan est une photographie du patrimoine à une date précise (≠ performance sur une période).',
        'Actif = Passif — toujours, par construction. C\'est mathématiquement inévitable.',
        'L\'actif montre CE QUE l\'entreprise possède. Le passif montre QUI a financé ces biens.',
        'Fonds propres = Actif − Fonds étrangers (la fortune nette des propriétaires).',
        'En Suisse (CO art. 959a) : actifs classés par liquidité décroissante, passif par exigibilité décroissante.',
        'Actifs circulants EN HAUT (liquidités, créances, stocks) → Actifs immobilisés EN BAS.',
        'Dettes CT EN HAUT → Dettes LT AU MILIEU → Fonds propres EN BAS.',
        'Chaque opération maintient l\'équilibre Actif = Passif, mais peut augmenter, diminuer ou simplement redistribuer le bilan.',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>▶</span><span>{pt}</span>
        </div>
      ))}
      </Section>
    </div>
  );
}

// ─── ONGLET 3 : COMPTE DE RÉSULTAT ───────────────────────────────────────────
function TabResultat() {
  return (
    <div>
      <Section title="1. Qu'est-ce que le compte de résultat ?" defaultOpen={true}>
      <P>Si le bilan est une <strong>photographie</strong> (patrimoine à un instant T), le compte de résultat est un <strong>film</strong> — il raconte ce qui s'est passé pendant toute une année. Il répond à la question : <em>"Est-ce que mon activité a été rentable cette année ?"</em></P>
      <Note color="blue">
        <strong>Produits − Charges = Résultat</strong><br />
        Si les produits dépassent les charges → <strong>bénéfice</strong>.<br />
        Si les charges dépassent les produits → <strong>perte</strong>.
      </Note>

      </Section>
      <Section title="2. Les produits — ce que l'entreprise gagne" defaultOpen={false}>
      <P>Les produits représentent la valeur créée par l'activité. Un produit n'est <strong>pas</strong> forcément un encaissement — c'est une richesse économique générée, qu'elle soit encaissée ou pas encore.</P>
      <Tableau
        headers={['Type', 'Compte', 'Exemples']}
        rows={[
          { cells: ['Ventes de marchandises', '3200', 'Chocolats vendus, articles livrés'] },
          { cells: ['Ventes de prestations', '3400', 'Honoraires, réparations, formations'] },
          { cells: ['Produits financiers', '6950', 'Intérêts reçus sur placements'] },
          { cells: ['Produits hors exploitation', '7500', 'Loyers d\'un immeuble de rendement'] },
        ]}
      />

      <H3>Les produits de SwiSSwatch SA — année 2</H3>
      <P>Voyons d'où proviennent concrètement les revenus de SwiSSwatch SA lors de sa deuxième année d'activité :</P>
      <Tableau
        caption="Détail des produits — SwiSSwatch SA année 2"
        headers={['Source de revenus', 'Compte', 'Montant CHF', 'Part du total']}
        rows={[
          { cells: ['Ventes de montres (boutiques partenaires)', '3200', "1'500'000", '83.3 %'] },
          { cells: ['Ventes de montres (e-commerce)', '3200', "300'000", '16.7 %'] },
          { cells: ['Total ventes de montres', '', "1'800'000", ''] },
          { cells: ['Prestations de réparation et SAV', '3400', "300'000", ''] },
          { cells: ['Produits financiers (intérêts bancaires)', '6950', "5'000", ''] },
        ]}
      />
      <Note color="green">
        SwiSSwatch SA génère l'essentiel de ses revenus par la vente de montres (CHF 1'800'000). Les prestations de réparation (CHF 300'000) sont un complément intéressant — elles fidélisent les clients tout en générant des marges élevées. Les produits financiers (CHF 5'000) sont marginaux mais existent.
      </Note>

      </Section>
      <Section title="3. Les charges — ce que l'entreprise consomme" defaultOpen={false}>
      <P>Les charges représentent la consommation de ressources. Une charge n'est <strong>pas</strong> forcément un paiement — c'est une richesse économique consommée dans l'exercice.</P>
      <Tableau
        headers={['Type', 'Compte', 'Exemples']}
        rows={[
          { cells: ['Achats de marchandises', '4000', 'Farine, beurre, chocolat'] },
          { cells: ['Charges de personnel', '5000–5700', 'Salaires bruts, charges sociales patronales'] },
          { cells: ['Autres charges d\'exploitation', '6000–6700', 'Loyer, énergie, assurances, publicité'] },
          { cells: ['Amortissements', '6800', 'Perte de valeur des machines, véhicules'] },
          { cells: ['Charges financières', '6900', 'Intérêts sur emprunts bancaires'] },
          { cells: ['Impôts', '8900', 'Impôt sur le bénéfice cantonal et fédéral'] },
        ]}
      />

      <H3>Les charges de SwiSSwatch SA — année 2</H3>
      <P>Voici le détail de tout ce que SwiSSwatch SA a consommé en ressources durant l'année 2. Chaque poste correspond à une catégorie précise du plan comptable suisse :</P>
      <Tableau
        caption="Détail des charges — SwiSSwatch SA année 2"
        headers={['Poste de charge', 'Compte', 'Montant CHF', 'Part du CA']}
        rows={[
          { cells: ['Achats de composants horlogers', '4200', "680'000", '37.8 %'] },
          { cells: ['Salaires bruts', '5000', "420'000", '23.3 %'] },
          { cells: ['Charges sociales patronales (AVS/AI/APG)', '5700', "100'000", '5.6 %'] },
          { cells: ['Total personnel', '', "520'000", '28.9 %'] },
          { cells: ['Loyers (atelier + bureaux)', '6000', "54'000", '3.0 %'] },
          { cells: ['Énergie et eau', '6400', "18'000", '1.0 %'] },
          { cells: ['Assurances', '6300', "22'000", '1.2 %'] },
          { cells: ['Publicité et marketing', '6600', "65'000", '3.6 %'] },
          { cells: ['Entretien et réparations', '6100', "25'000", '1.4 %'] },
          { cells: ['Frais administratifs et divers', '6500', "26'000", '1.4 %'] },
          { cells: ['Amortissements (machines, véhicules...)', '6800', "85'000", '4.7 %'] },
          { cells: ['Charges financières (intérêts emprunt)', '6900', "15'000", '0.8 %'] },
          { cells: ['Impôts sur le bénéfice', '8900', "195'000", '10.8 %'] },
        ]}
      />
      <Note color="yellow">
        <strong>Observation :</strong> Chez SwiSSwatch SA, les deux plus gros postes de charges sont les achats de composants (CHF 680'000 = 37.8 % du CA) et le personnel (CHF 520'000 = 28.9 % du CA). Ensemble, ils représentent deux tiers des charges totales. C'est typique d'une PME industrielle suisse.
      </Note>

      </Section>
      <Section title="4. La structure en cascade — indicateurs clés" defaultOpen={false}>
      <div style={{ border: '2px solid #2c5f8a', borderRadius: 8, overflow: 'hidden', margin: '16px 0' }}>
        <div style={{ background: '#2c5f8a', padding: '9px 16px', color: '#fff', fontWeight: 700, fontSize: '0.84rem' }}>Compte de résultat — SwiSSwatch SA exercice N</div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.83rem' }}>
          <tbody>
            {[
              ['Ventes nettes', '', '+ CHF 85\'000', false],
              ['Achats de matières premières', '', '− CHF 28\'000', false],
              ['Variation de stocks', '', '± CHF 0', false],
              ['MARGE BRUTE', 'Rentabilité commerciale brute', 'CHF 57\'000', true],
              ['Charges de personnel', '', '− CHF 32\'000', false],
              ['Autres charges d\'exploitation', 'Loyer, énergie, assurances...', '− CHF 11\'000', false],
              ['Résultat avant amortissements', '', 'CHF 14\'000', true],
              ['Amortissements', 'Four : 45\'000 ÷ 10 ans', '− CHF 4\'500', false],
              ['Charges financières nettes', 'Intérêts emprunt', '− CHF 800', false],
              ['RÉSULTAT D\'EXPLOITATION', 'Performance opérationnelle', 'CHF 8\'700', true],
              ['Impôts directs', '', '− CHF 1\'700', false],
              ['RÉSULTAT DE L\'EXERCICE', 'Reporté dans les fonds propres', 'CHF 7\'000', true],
            ].map(([label, note, montant, bold], i) => (
              <tr key={i} style={{ background: bold ? '#e8f0f8' : i % 2 === 0 ? '#fff' : '#f8f9fb', borderBottom: '1px solid #dde2ea' }}>
                <td style={{ padding: '8px 16px', fontWeight: bold ? 700 : 400, color: '#1a2332', fontSize: bold ? '0.86rem' : '0.83rem' }}>{label}</td>
                <td style={{ padding: '8px 10px', color: '#718096', fontStyle: 'italic', fontSize: '0.77rem' }}>{note}</td>
                <td style={{ padding: '8px 16px', fontFamily: 'JetBrains Mono, monospace', fontWeight: bold ? 700 : 500, color: bold ? '#2c5f8a' : '#4a5568', textAlign: 'right', whiteSpace: 'nowrap' }}>{montant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Le compte de résultat complet de SwiSSwatch SA — année 2</H3>
      <P>Appliquons maintenant la structure en cascade aux chiffres réels de SwiSSwatch SA pour l'année 2. Chaque ligne de sous-total est un <strong>indicateur clé</strong> que les banquiers et investisseurs regardent attentivement.</P>

      <div style={{ border: '2px solid #16a34a', borderRadius: 8, overflow: 'hidden', margin: '16px 0' }}>
        <div style={{ background: '#16a34a', padding: '9px 16px', color: '#fff', fontWeight: 700, fontSize: '0.84rem' }}>Compte de résultat en cascade — SwiSSwatch SA année 2</div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.83rem' }}>
          <tbody>
            {[
              ['Ventes nettes de montres', '', "+ CHF 1'800'000", false],
              ['Prestations de réparation / SAV', '', "+ CHF 300'000", false],
              ['CHIFFRE D\'AFFAIRES NET', 'Total des revenus d\'exploitation', "CHF 2'100'000", true],
              ['Achats de composants horlogers', '', "- CHF 680'000", false],
              ['MARGE BRUTE', 'CA - Achats = rentabilité commerciale', "CHF 1'420'000", true],
              ['Salaires bruts', '', "- CHF 420'000", false],
              ['Charges sociales patronales', '', "- CHF 100'000", false],
              ['RÉSULTAT APRÈS PERSONNEL', '', "CHF 900'000", true],
              ['Loyers', '', "- CHF 54'000", false],
              ['Énergie et eau', '', "- CHF 18'000", false],
              ['Assurances', '', "- CHF 22'000", false],
              ['Publicité et marketing', '', "- CHF 65'000", false],
              ['Entretien et réparations', '', "- CHF 25'000", false],
              ['Frais administratifs et divers', '', "- CHF 26'000", false],
              ['EBITDA', 'Avant amortissements et intérêts', "CHF 690'000", true],
              ['Amortissements', 'Machines, véhicules, informatique', "- CHF 85'000", false],
              ['EBIT (résultat d\'exploitation)', 'Performance opérationnelle pure', "CHF 605'000", true],
              ['Charges financières (intérêts emprunt)', '', "- CHF 15'000", false],
              ['Produits financiers (intérêts reçus)', '', "+ CHF 5'000", false],
              ['RÉSULTAT AVANT IMPÔTS', '', "CHF 595'000", true],
              ['Impôts sur le bénéfice', 'Cantonal + fédéral', "- CHF 195'000", false],
              ['RÉSULTAT NET DE L\'EXERCICE', 'Viré dans les fonds propres du bilan', "CHF 400'000", true],
            ].map(([label, note, montant, bold], i) => (
              <tr key={i} style={{ background: bold ? '#f0fdf4' : i % 2 === 0 ? '#fff' : '#f8f9fb', borderBottom: bold ? '2px solid #86efac' : '1px solid #dde2ea' }}>
                <td style={{ padding: '8px 16px', fontWeight: bold ? 700 : 400, color: '#1a2332', fontSize: bold ? '0.86rem' : '0.83rem' }}>{label}</td>
                <td style={{ padding: '8px 10px', color: '#718096', fontStyle: 'italic', fontSize: '0.77rem' }}>{note}</td>
                <td style={{ padding: '8px 16px', fontFamily: 'JetBrains Mono, monospace', fontWeight: bold ? 700 : 500, color: bold ? '#16a34a' : '#4a5568', textAlign: 'right', whiteSpace: 'nowrap' }}>{montant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Note color="green">
        <strong>Lecture :</strong> SwiSSwatch SA a réalisé un chiffre d'affaires de CHF 2'100'000 en année 2. Après déduction de toutes les charges, il reste un bénéfice net de CHF 400'000. Ce montant sera viré dans les fonds propres du bilan, enrichissant l'entreprise et ses actionnaires. La marge brute de 67.6 % (1'420'000 / 2'100'000) est excellente pour l'horlogerie.
      </Note>

      </Section>
      <Section title="5. Charge ≠ Paiement | Produit ≠ Encaissement" defaultOpen={false}>
      <P>C'est l'erreur numéro 1. Il faut absolument distinguer les deux.</P>
      <Tableau
        caption="4 situations clés à maîtriser"
        headers={['Situation', 'Comptabilité (charge ou produit ?)', 'Trésorerie (cash ?)']}
        rows={[
          { cells: ['Vente à crédit CHF 5\'000 le 15.12', 'Produit en décembre ✓', 'Encaissement en janvier'] },
          { cells: ['Achat farine CHF 800 pour janvier, payé en décembre', 'Charge en janvier', 'Paiement en décembre'] },
          { cells: ['Amortissement machine CHF 4\'500', 'Charge de l\'exercice', 'Aucun mouvement de cash'] },
          { cells: ['Remboursement emprunt CHF 10\'000', 'Pas une charge !', 'CHF 10\'000 sortent de la banque'] },
        ]}
      />
      <Note color="yellow">L'amortissement est l'exemple parfait : c'est une charge comptable (la machine perd de la valeur chaque année) mais elle ne génère aucun paiement. À l'inverse, rembourser un emprunt sort de la trésorerie mais n'est pas une charge d'exploitation.</Note>

      </Section>
      <Section title="6. Le lien CR → Bilan" defaultOpen={false}>
      <P>Le résultat de l'exercice (CHF 7'000 dans notre exemple) ne reste pas dans le compte de résultat — il est <strong>viré dans les fonds propres du bilan</strong> en fin d'année. Le compte de résultat repart alors à zéro pour le nouvel exercice.</P>
      <Note color="green">Bénéfice → fonds propres augmentent → l'entreprise s'enrichit.<br />Perte → fonds propres diminuent → l'entreprise s'appauvrit.</Note>

      </Section>
      <Section title="7. Points clés à retenir" defaultOpen={false}>
      {[
        'CR = performance sur une période | Bilan = patrimoine à une date.',
        'Produits − Charges = Résultat (bénéfice si positif, perte si négatif).',
        'Produit ≠ encaissement | Charge ≠ paiement — délimitation périodique (art. 958b CO).',
        'Le résultat est viré dans les fonds propres du bilan en fin d\'exercice.',
        'La marge brute mesure la rentabilité commerciale brute — indicateur clé PME.',
        'L\'amortissement est une charge sans mouvement de trésorerie.',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>▶</span><span>{pt}</span>
        </div>
      ))}
      </Section>
    </div>
  );
}

// ─── ONGLET 4 : LES COMPTES ───────────────────────────────────────────────────
function TabComptes() {
  return (
    <div>
      <Section title="1. Qu'est-ce qu'un compte ?" defaultOpen={true}>
      <P>Un compte est un tableau à deux colonnes — <strong>débit</strong> à gauche, <strong>crédit</strong> à droite — qui suit l'évolution d'un élément précis du patrimoine ou du résultat. Chaque fois qu'une opération touche cet élément, on inscrit le montant dans la colonne correspondante.</P>
      <P>Il existe autant de comptes que d'éléments à suivre : un compte pour la banque, un pour les clients, un pour les achats, un pour les ventes, etc. En Suisse, le plan comptable PME (SKV) propose une numérotation standardisée de 1000 à 9999.</P>

      </Section>
      <Section title="2. La représentation en T" defaultOpen={false}>
      <P>On représente schématiquement un compte sous forme de T — c'est pourquoi on parle de "comptes en T". Le côté gauche s'appelle le débit, le côté droit le crédit. Ces termes ne signifient pas "bon" ou "mauvais" — ce sont simplement des conventions.</P>

      <GrilleT comptes={[
        {
          title: '1020 Banque',
          debit: [{ label: 'Solde initial', amount: "10'000" }, { label: 'Vente encaissée', amount: "5'000" }],
          credit: [{ label: 'Paiement loyer', amount: "2'000" }, { label: 'Paiement fournisseur', amount: "3'200" }],
          solde: "9'800", soldeLabel: 'Solde débiteur',
        },
        {
          title: '5000 Salaires',
          debit: [{ label: 'Salaire janvier', amount: "8'000" }, { label: 'Salaire février', amount: "8'000" }],
          credit: [],
          solde: "16'000", soldeLabel: 'Total charges',
        },
        {
          title: '3000 Ventes',
          debit: [],
          credit: [{ label: 'Vente client A', amount: "12'000" }, { label: 'Vente client B', amount: "8'500" }],
          solde: "20'500", soldeLabel: 'Total produits', soldeColor: 'green',
        },
      ]} />

      <H3>Exemple complet chez SwiSSwatch SA — deux opérations liées</H3>
      <P>Suivons deux opérations successives dans les comptes en T de SwiSSwatch SA pour bien comprendre le mécanisme :</P>

      <P><strong>Opération A :</strong> SwiSSwatch SA achète des composants horlogers pour CHF 8'000 à crédit auprès de Nivarox SA.</P>
      <GrilleT comptes={[
        {
          title: '4200 Achats composants',
          debit: [{ label: 'Nivarox SA — composants', amount: "8'000" }],
          credit: [],
          solde: "8'000", soldeLabel: 'Charge augmente',
        },
        {
          title: '2000 Fournisseurs',
          debit: [],
          credit: [{ label: 'Nivarox SA — facture', amount: "8'000" }],
          solde: "8'000", soldeLabel: 'Dette augmente', soldeColor: 'red',
        },
      ]} />
      <Note color="yellow">La charge (4200) est constatée au <strong>débit</strong> — les charges augmentent toujours au débit. La dette fournisseur (2000) augmente au <strong>crédit</strong> — les passifs augmentent toujours au crédit.</Note>

      <P><strong>Opération B :</strong> 15 jours plus tard, SwiSSwatch SA paie Nivarox SA par virement bancaire.</P>
      <GrilleT comptes={[
        {
          title: '2000 Fournisseurs',
          debit: [{ label: 'Paiement Nivarox SA', amount: "8'000" }],
          credit: [{ label: 'Facture Nivarox SA', amount: "8'000" }],
          solde: "0", soldeLabel: 'Dette soldée',
        },
        {
          title: '1020 Banque',
          debit: [{ label: 'Solde précédent', amount: "85'000" }],
          credit: [{ label: 'Paiement Nivarox SA', amount: "8'000" }],
          solde: "77'000", soldeLabel: 'Nouveau solde',
        },
      ]} />
      <Note color="blue">
        Au paiement, la dette fournisseur (2000) diminue au <strong>débit</strong> — un passif qui diminue se débite. La banque (1020) diminue au <strong>crédit</strong> — un actif qui diminue se crédite. Aucun impact sur le résultat : la charge avait déjà été constatée lors de l'opération A.
      </Note>

      </Section>
      <Section title="3. La règle de fonctionnement selon la nature du compte" defaultOpen={false}>
      <P>Le sens débit/crédit dépend de la <strong>nature économique</strong> du compte. Il faut comprendre la logique — pas apprendre des règles mécaniques.</P>

      <Tableau
        caption="Règles de fonctionnement — résumé complet"
        headers={['Type de compte', 'Augmentation', 'Diminution', 'Solde normal', 'Exemples']}
        rows={[
          { cells: ['Actif (bilan)', 'Débit ←', '→ Crédit', 'Débiteur', 'Banque, Clients, Stocks, Machines'] },
          { cells: ['Passif (bilan)', '→ Crédit', 'Débit ←', 'Créditeur', 'Dettes fournisseurs, TVA due, Emprunts'] },
          { cells: ['Fonds propres (bilan)', '→ Crédit', 'Débit ←', 'Créditeur', 'Capital, Réserves, Résultat'] },
          { cells: ['Charges (résultat)', 'Débit ←', '→ Crédit', 'Débiteur', 'Salaires, Loyers, Achats, Amortissements'] },
          { cells: ['Produits (résultat)', '→ Crédit', 'Débit ←', 'Créditeur', 'Ventes, Honoraires, Intérêts reçus'] },
        ]}
      />

      <Note color="blue">
        <strong>La logique à comprendre :</strong> Les charges ressemblent aux actifs (débit = augmentation) car elles représentent une consommation de ressources. Les produits ressemblent aux passifs (crédit = augmentation) car ils enrichissent l'entreprise — tout comme un financement.
      </Note>

      </Section>
      <Section title="4. Comptes du bilan vs comptes du résultat" defaultOpen={false}>
      <Tableau
        headers={['', 'Comptes du bilan (actif/passif)', 'Comptes du résultat (charges/produits)']}
        rows={[
          { cells: ['Que représentent-ils ?', 'Éléments du patrimoine', 'Consommations et créations de valeur'] },
          { cells: ['Durée de vie', 'Permanents — solde reporté chaque année', 'Temporaires — soldés à la clôture annuelle'] },
          { cells: ['Au bouclement', 'Solde → reporté dans le bilan de l\'année suivante', 'Solde → viré dans les fonds propres (résultat)'] },
          { cells: ['Exemples', 'Banque, Clients, Machines, Dettes', 'Salaires, Loyers, Ventes, Amortissements'] },
        ]}
      />

      </Section>
      <Section title="5. Le plan comptable PME suisse" defaultOpen={false}>
      <P>En Suisse, le plan comptable PME (édité par l'association SKV/swisco) propose une numérotation standardisée. La structure par tranches de numéros est facile à mémoriser :</P>
      <Tableau
        headers={['Tranche', 'Nature', 'Exemples']}
        rows={[
          { cells: ['1000–1999', 'Actifs (bilan)', '1020 Banque, 1100 Clients, 1200 Stocks, 1500 Machines'] },
          { cells: ['2000–2999', 'Passifs (bilan)', '2000 Fournisseurs, 2200 TVA Due, 2800 Capital'] },
          { cells: ['3000–3999', 'Produits (résultat)', '3000 Ventes, 3400 Prestations de services'] },
          { cells: ['4000–4999', 'Charges d\'achats', '4000 Achats marchandises, 4700 Frais transport'] },
          { cells: ['5000–5999', 'Charges de personnel', '5000 Salaires bruts, 5700 Charges sociales'] },
          { cells: ['6000–6999', 'Autres charges exploit.', '6000 Loyers, 6400 Énergie, 6800 Amortissements'] },
          { cells: ['7000–7999', 'Résultat hors exploitation', '7000 Produits titres, 7500 Produits immeuble'] },
          { cells: ['8000–8999', 'Résultat exceptionnel', '8000 Produits exceptionnels, 8900 Impôts'] },
        ]}
      />

      <H3>Les 9 classes appliquées à SwiSSwatch SA</H3>
      <P>Voici les 9 classes du plan comptable avec les comptes concrets utilisés par SwiSSwatch SA. Chaque classe correspond à une nature d'éléments bien précise :</P>

      <Tableau
        caption="Plan comptable PME — comptes de SwiSSwatch SA"
        headers={['Classe', 'Plage', 'Nature', 'Comptes SwiSSwatch SA', 'État financier']}
        rows={[
          { cells: ['1', '1000–1999', 'Actifs', '1000 Caisse, 1020 Banque BCN, 1100 Clients, 1200 Stock composants, 1500 Machines CNC, 1600 Véhicules', 'Bilan (gauche)'] },
          { cells: ['2', '2000–2999', 'Passifs', '2000 Fournisseurs, 2200 TVA due, 2270 Charges sociales dues, 2400 Emprunt UBS, 2800 Capital-actions', 'Bilan (droite)'] },
          { cells: ['3', '3000–3999', 'Produits d\'exploitation', '3200 Ventes de montres, 3400 Prestations réparation/SAV', 'Compte de résultat'] },
          { cells: ['4', '4000–4999', 'Charges d\'achats', '4200 Achats composants horlogers, 4700 Frais de transport sur achats', 'Compte de résultat'] },
          { cells: ['5', '5000–5999', 'Charges de personnel', '5000 Salaires bruts, 5700 Charges sociales patronales (AVS/AI/APG)', 'Compte de résultat'] },
          { cells: ['6', '6000–6999', 'Autres charges d\'exploitation', '6000 Loyers, 6300 Assurances, 6400 Énergie, 6600 Publicité, 6800 Amortissements, 6900 Intérêts emprunt', 'Compte de résultat'] },
          { cells: ['7', '7000–7999', 'Résultat hors exploitation', '6950 Produits financiers (intérêts bancaires)', 'Compte de résultat'] },
          { cells: ['8', '8000–8999', 'Résultat exceptionnel & impôts', '8900 Impôts sur le bénéfice', 'Compte de résultat'] },
          { cells: ['9', '9000–9999', 'Clôture (interne)', 'Comptes de bouclement, comptes analytiques', '(Usage interne)'] },
        ]}
      />

      <Note color="blue">
        <strong>Astuce pour mémoriser :</strong> Les classes 1-2 = bilan (patrimoine). Les classes 3-8 = compte de résultat (performance). Au sein du résultat : 3 = ce qu'on gagne, 4-6 = ce qu'on dépense, 7-8 = le reste. Le premier chiffre du numéro de compte vous dit immédiatement de quelle nature il s'agit : 1020 commence par 1 → c'est un actif. 5000 commence par 5 → c'est une charge de personnel.
      </Note>

      </Section>
      <Section title="6. Points clés à retenir" defaultOpen={false}>
      {[
        'Un compte = un tableau en T, deux colonnes : débit (gauche) et crédit (droite).',
        'Actif et charges → augmentent au débit.',
        'Passif, fonds propres et produits → augmentent au crédit.',
        'Comptes du bilan = permanents (reportés chaque année).',
        'Comptes du résultat = temporaires (soldés au 31 décembre → virés en fonds propres).',
        'Le plan comptable PME suisse numérotation 1000–8999 à connaître.',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>▶</span><span>{pt}</span>
        </div>
      ))}
      </Section>
    </div>
  );
}

// ─── ONGLET 5 : JOURNAL ET OPÉRATIONS ────────────────────────────────────────
function TabJournal() {
  return (
    <div>
      <Section title="1. Le journal — registre de toutes les opérations" defaultOpen={true}>
      <P>Le journal comptable est la liste <strong>chronologique</strong> de toutes les écritures passées dans la comptabilité. C'est le document de base — avant d'aller dans les comptes, chaque opération est enregistrée dans le journal avec sa date, ses comptes débités et crédités, et un libellé explicatif.</P>

      <div style={{ border: '1px solid #2c5f8a', borderRadius: 8, overflow: 'hidden', margin: '16px 0' }}>
        <div style={{ background: '#2c5f8a', padding: '8px 14px', color: '#fff', fontWeight: 700, fontSize: '0.82rem' }}>Extrait de journal — SwiSSwatch SA janvier N</div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
          <thead>
            <tr style={{ background: '#f0f3f7' }}>
              {['Date', 'Compte débité', 'Compte crédité', 'Libellé', 'Montant'].map((h, i) => (
                <th key={i} style={{ padding: '7px 10px', color: '#1a2332', textAlign: 'left', fontWeight: 600, fontSize: '0.77rem' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['05.01', '4000 Achats', '2000 Fournisseurs', 'Achat composants — Nivarox SA', "CHF 1'200"],
              ['08.01', '2000 Fournisseurs', '1020 Banque', 'Paiement Nivarox SA', "CHF 1'200"],
              ['12.01', '1100 Clients', '3000 Ventes', 'Vente assortiment — Hôtel Lac', "CHF 800"],
              ['15.01', '6000 Loyers', '2000 Fournisseurs', 'Loyer janvier — Immo SA', "CHF 2'000"],
              ['20.01', '1020 Banque', '1100 Clients', 'Encaissement Hôtel Lac', "CHF 800"],
              ['25.01', '5000 Salaires', '1020 Banque', 'Salaire vendeur — janvier', "CHF 3'000"],
            ].map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f8f9fb', borderBottom: '1px solid #dde2ea' }}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: '6px 10px', color: j === 4 ? '#2c5f8a' : '#4a5568', fontFamily: j === 4 ? 'JetBrains Mono, monospace' : 'inherit', fontWeight: j === 4 ? 600 : 400, fontSize: '0.82rem' }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      </Section>
      <Section title="2. La méthode des postes ouverts — factures d'abord, paiements ensuite" defaultOpen={false}>
      <P>Dans la pratique professionnelle suisse (et dans tous les ERP comme Abacus), on comptabilise en <strong>deux étapes séparées</strong> :</P>
      <P><strong>Étape 1</strong> — La facture arrive ou est émise → on l'enregistre immédiatement, même si personne n'a encore payé.</P>
      <P><strong>Étape 2</strong> — Le paiement intervient → on solde la dette ou la créance.</P>
      <Note color="blue">Pourquoi cette méthode ? Elle permet de suivre en permanence qui vous doit de l'argent (créances clients) et à qui vous devez payer (dettes fournisseurs). C'est indispensable pour gérer la trésorerie et relancer les clients.</Note>

      </Section>
      <Section title="3. Les 4 opérations courantes — écritures complètes" defaultOpen={false}>

      <H3>Opération 1 — Achat à crédit (facture fournisseur)</H3>
      <P><strong>Contexte SwiSSwatch SA :</strong> Le 5 mars, SwiSSwatch SA reçoit une facture de Nivarox SA pour CHF 15'000 de composants horlogers (spiraux et balanciers). La facture est payable sous 30 jours. Le responsable des achats, Marc Dubois, enregistre la facture le jour même.</P>
      <Ecriture debit="4200 Achats composants" credit="2000 Fournisseurs" montant="15'000" libelle="Achat composants horlogers — Nivarox SA — facture N-2024-112" />
      <Note color="yellow">La charge (4200) est constatée dès la réception de la facture. La dette envers Nivarox SA (2000) augmente de CHF 15'000. Aucun mouvement de trésorerie : le compte en banque de SwiSSwatch SA n'a pas bougé. C'est le principe des postes ouverts.</Note>

      <H3>Opération 2 — Paiement du fournisseur</H3>
      <P><strong>Contexte SwiSSwatch SA :</strong> Le 2 avril (28 jours plus tard), Marie Vuille, la comptable de SwiSSwatch SA, effectue le virement de CHF 15'000 à Nivarox SA depuis le compte BCN de l'entreprise.</P>
      <Ecriture debit="2000 Fournisseurs" credit="1020 Banque" montant="15'000" libelle="Paiement facture N-2024-112 — Nivarox SA — virement BCN" />
      <Note color="yellow">On solde la dette (2000 diminue au débit) et la banque diminue (1020 diminue au crédit). <strong>Pas d'impact sur le résultat</strong> — la charge de CHF 15'000 a déjà été comptabilisée le 5 mars. Ce paiement est uniquement un mouvement de trésorerie.</Note>

      <H3>Opération 3 — Vente à crédit (facture client)</H3>
      <P><strong>Contexte SwiSSwatch SA :</strong> Le 12 mars, SwiSSwatch SA livre 10 montres modèle "Alpine" à Bucherer AG pour un total de CHF 25'000. La facture F-2024-067 est émise le même jour, avec un délai de paiement de 60 jours.</P>
      <Ecriture debit="1100 Clients" credit="3200 Ventes de marchandises" montant="25'000" libelle="Vente 10x Alpine — Bucherer AG — facture F-2024-067" />
      <Note color="yellow">Le produit (3200) est constaté dès la livraison des montres — pas au moment de l'encaissement. La créance sur Bucherer AG (1100) augmente de CHF 25'000. L'argent n'est pas encore sur le compte, mais la vente est bien réelle en comptabilité.</Note>

      <H3>Opération 4 — Encaissement client</H3>
      <P><strong>Contexte SwiSSwatch SA :</strong> Le 10 mai (59 jours plus tard), Bucherer AG paie sa facture par virement bancaire. Marie Vuille constate le crédit sur le relevé BCN et passe l'écriture d'encaissement.</P>
      <Ecriture debit="1020 Banque" credit="1100 Clients" montant="25'000" libelle="Encaissement facture F-2024-067 — Bucherer AG — virement BCN" />
      <Note color="yellow">On solde la créance (1100 diminue au crédit) et la banque augmente (1020 augmente au débit). <strong>Pas d'impact sur le résultat</strong> — le produit de CHF 25'000 a déjà été constaté le 12 mars. Cet encaissement est uniquement un mouvement de trésorerie.</Note>

      </Section>
      <Section title="4. Autres opérations fréquentes" defaultOpen={false}>

      <H3>Paiement du loyer mensuel</H3>
      <P><strong>SwiSSwatch SA</strong> paie chaque mois CHF 4'500 de loyer pour son atelier de fabrication et ses bureaux à Neuchâtel. Le loyer est payé par ordre permanent le 1er de chaque mois.</P>
      <Ecriture debit="6000 Loyers" credit="1020 Banque" montant="4'500" libelle="Loyer février — Immo Neuchâtel SA — atelier + bureaux" />
      <Note color="yellow">C'est un achat payé comptant — la charge et le paiement ont lieu simultanément. Pas besoin de passer par le compte fournisseurs. Le loyer annuel de SwiSSwatch SA s'élève à CHF 54'000 (12 x 4'500).</Note>

      <H3>Encaissement d'intérêts bancaires</H3>
      <P>La Banque Cantonale de Neuchâtel verse CHF 125 d'intérêts trimestriels sur le compte courant de <strong>SwiSSwatch SA</strong>.</P>
      <Ecriture debit="1020 Banque" credit="6950 Produits financiers" montant="125" libelle="Intérêts T1 — BCN — compte courant" />
      <Note color="yellow">La banque augmente (débit, actif +) et un produit financier est constaté (crédit, produit +). Ce n'est pas un produit d'exploitation — c'est un produit financier hors activité principale.</Note>

      <H3>Achat d'un véhicule utilitaire</H3>
      <P>Théo Keller décide d'acheter une camionnette de livraison pour CHF 35'000 auprès de Garage Central SA. La facture est payée en deux temps : CHF 10'000 d'acompte immédiat, solde sous 60 jours.</P>
      <Ecriture debit="1600 Véhicules" credit="2000 Fournisseurs" montant="35'000" libelle="Achat camionnette Renault — Garage Central SA" />
      <Ecriture debit="2000 Fournisseurs" credit="1020 Banque" montant="10'000" libelle="Acompte Garage Central SA — virement BCN" sub />
      <Note color="blue">Le véhicule (1600) est un actif immobilisé — il sera amorti sur 5 ans (CHF 7'000/an). L'achat n'est <strong>pas une charge</strong> : c'est un investissement. La charge viendra plus tard sous forme d'amortissement annuel.</Note>

      <H3>Paiement des salaires</H3>
      <P><strong>SwiSSwatch SA</strong> emploie 8 personnes. Le total des salaires bruts de février s'élève à CHF 35'000. Marie Vuille effectue les virements le 25 du mois.</P>
      <Ecriture debit="5000 Salaires bruts" credit="1020 Banque" montant="35'000" libelle="Salaires bruts février — 8 employés — virement BCN" />
      <Note color="yellow">Les salaires sont la deuxième charge la plus importante de SwiSSwatch SA (CHF 420'000/an). À cette écriture s'ajoutent les charges sociales patronales (AVS/AI/APG) comptabilisées séparément au compte 5700.</Note>

      <H3>Vente encaissée comptant (caisse)</H3>
      <P>Un client visite l'atelier de SwiSSwatch SA et achète une montre "Alpine" directement pour CHF 2'500, payée par carte bancaire.</P>
      <Ecriture debit="1020 Banque" credit="3200 Ventes de marchandises" montant="2'500" libelle="Vente montre Alpine — client passage — terminal carte" />

      </Section>
      <Section title="5. La pièce justificative — obligation légale" defaultOpen={false}>
      <P>Toute écriture doit être appuyée par une <strong>pièce justificative</strong> : facture, relevé bancaire, contrat, justificatif interne. Sans pièce, l'écriture n'est pas valable légalement (art. 957a al. 2 ch. 2 CO).</P>
      <P>Les pièces comptables doivent être conservées pendant <strong>10 ans</strong> (art. 958f CO).</P>

      </Section>
      <Section title="6. Points clés à retenir" defaultOpen={false}>
      {[
        'Le journal = liste chronologique de toutes les écritures.',
        'Méthode postes ouverts : facture d\'abord (créance/dette), paiement ensuite (solde).',
        'Achat à crédit : Débit charge / Crédit 2000 Fournisseurs.',
        'Paiement fournisseur : Débit 2000 Fournisseurs / Crédit 1020 Banque.',
        'Vente à crédit : Débit 1100 Clients / Crédit 3000 Ventes.',
        'Encaissement client : Débit 1020 Banque / Crédit 1100 Clients.',
        'Toute écriture doit avoir une pièce justificative (conservation 10 ans).',
      ].map((pt, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, padding: '5px 0', fontSize: '0.85rem', color: '#475569' }}>
          <span style={{ color: '#2563eb', fontWeight: 700, flexShrink: 0 }}>▶</span><span>{pt}</span>
        </div>
      ))}
      </Section>
    </div>
  );
}

// ─── VUE PRINCIPALE ───────────────────────────────────────────────────────────
const TABS = [
  { id: 'intro',    label: 'Introduction' },
  { id: 'bilan',    label: 'Le bilan' },
  { id: 'resultat', label: 'Compte de résultat' },
  { id: 'comptes',  label: 'Les comptes' },
  { id: 'journal',  label: 'Journal & opérations' },
];

export default function FondamentsView() {
  const [tab, setTab] = useState('intro');
  return (
    <TheoryLayout
      title="2. Fondements de la comptabilité"
      tag="tag-base" tagLabel="Fondements"
      meta="CO 957ss · SKV/swisco"
      tabs={TABS} activeTab={tab} onTabChange={setTab}
    >
      {tab === 'intro'    && <TabIntro />}
      {tab === 'bilan'    && <TabBilan />}
      {tab === 'resultat' && <TabResultat />}
      {tab === 'comptes'  && <TabComptes />}
      {tab === 'journal'  && <TabJournal />}
    </TheoryLayout>
  );
}