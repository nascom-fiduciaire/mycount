export const chapter = {
  id: '07-7-cas-particuliers-et-points-vigilance',
  title: 'TVA — Cas particuliers et points de vigilance',
  tag: 'tva',
  category: 'TVA suisse',
  content: `## 1. Prestations exclues — impact sur l'impôt préalable

Les prestations exclues du champ de l'impôt (art. 21 LTVA) ont une conséquence directe sur le droit à la déduction de l'IP : l'assujetti qui réalise des prestations exclues est traité comme un consommateur final pour ces prestations.

**Art. 29 al. 1 LTVA :**
> Les prestations et l'importation de biens affectés à la fourniture de prestations exclues du champ de l'impôt ne donnent pas droit à la déduction de l'impôt préalable si l'assujetti n'a pas opté pour leur imposition.

**Exemple concret :** une école privée (enseignement exclu) achète du matériel informatique à CHF 10'800 TTC (8.1%). Elle ne peut pas déduire l'IP de CHF 808 — il reste définitivement une charge.

- Écriture : Débit 1500 Actif immobilisé CHF 10'800 / Crédit 1020 Banque CHF 10'800
  (la totalité du TTC est capitalisée — pas de compte 1171)

---

## 2. Option pour l'imposition des prestations exclues (art. 22 LTVA)

Pour certaines prestations exclues, l'assujetti peut choisir de les soumettre à la TVA. Cette option lui permet de récupérer l'IP correspondant. Elle est utile lorsque les clients sont eux-mêmes assujettis (ils peuvent déduire la TVA facturée).

L'option n'est **pas possible** pour :
- Les assurances
- Les opérations sur le marché financier
- Les jeux de hasard
- La location de logements destinés à l'habitation

---

## 3. Activité mixte — déduction partielle de l'IP (art. 30 LTVA)

Une entreprise qui réalise à la fois des prestations imposables et des prestations exclues doit proportionner la déduction de son IP.

**Méthode de répartition :**
L'IP est déductible en proportion du CA imposable sur le CA total.

**Exemple :** une fiduciaire réalise CHF 200'000 de prestations imposables et CHF 50'000 de formations exclues. Taux de déduction = 200'000 ÷ 250'000 = **80%**. Si l'IP total payé est CHF 5'000, seuls CHF 4'000 sont déductibles.

---

## 4. Exportations — prestations exonérées (art. 23 LTVA)

Les exportations de biens hors du territoire suisse sont exonérées de TVA (taux 0%). Cette exonération est différente d'une exclusion :

- TVA due sur les ventes = CHF 0
- IP sur les achats = **entièrement déductible**

L'exportateur récupère donc systématiquement la TVA payée sur ses achats de matières, machines et charges d'exploitation. C'est souvent la principale motivation pour un assujettissement volontaire.

---

## 5. Acquisition de prestations de services de l'étranger (art. 45 ss LTVA)

Lorsqu'une entreprise suisse achète des prestations de services à un fournisseur étranger non assujetti en Suisse (conseil juridique, licences logicielles, publicité en ligne, etc.), elle est redevable de la TVA suisse sur ces achats — c'est la règle du **destinataire**.

L'entreprise suisse doit déclarer ces montants dans son décompte TVA comme si elle avait facturé la TVA à elle-même. Elle peut simultanément la déduire comme IP si les conditions sont remplies.

**Exemple :** une PME suisse achète CHF 10'000 de services de conseil à une société française non assujettie en Suisse.
- TVA due (8.1%) : CHF 810 → à déclarer dans le décompte
- IP déductible : CHF 810 → à déduire dans le même décompte
- Solde net = CHF 0 (si 100% d'activité imposable)

---

## 6. Factures non conformes — risque de refus de l'IP

L'AFC peut refuser la déduction de l'IP si la facture du fournisseur n'est pas conforme. Les cas les plus fréquents :

- Numéro TVA manquant ou erroné
- Taux de TVA non mentionné
- Montant de TVA non indiqué
- Facture au nom d'une autre société du groupe

> En pratique fiduciaire : vérifier systématiquement les factures reçues avant de saisir l'IP. En cas de doute, demander une facture rectifiée au fournisseur.

---

## 7. Décompte TVA — contrôle par l'AFC

L'AFC peut contrôler les décomptes TVA jusqu'à **5 ans** après la fin de la période fiscale concernée (art. 42 LTVA). En cas de fraude, ce délai est porté à **10 ans**.

Lors d'un contrôle, l'AFC examine :
- La concordance entre les décomptes et les livres comptables
- La validité des factures justifiant les IP déduits
- Le bon traitement des prestations exclues et mixtes
- La déclaration des prestations à soi-même

---

## 8. Erreurs les plus fréquentes en pratique

- **Confondre exclu et exonéré** → erreur sur le droit à l'IP
- **Appliquer le taux réduit 2.6% à la restauration** → taux normal 8.1% obligatoire
- **Oublier de déclarer les prestations à soi-même** → fraude fiscale
- **Déduire l'IP sur facture non conforme** → risque de redressement
- **Mauvaise période de décompte** → intérêts moratoires
- **Ne pas surveiller le seuil de CHF 100'000** → assujettissement rétroactif possible

---

## 9. Points clés à retenir

- Prestations **exclues** = pas d'IP déductible (sauf option) → TVA définitivement en charge.
- Prestations **exonérées** (exportations) = IP entièrement déductible malgré TVA due = 0.
- Activité **mixte** → proportionner l'IP selon le ratio CA imposable / CA total.
- Services achetés **à l'étranger** → déclarer la TVA en Suisse (règle du destinataire).
- Contrôle AFC possible jusqu'à **5 ans** (10 ans en cas de fraude).
- Vérifier chaque facture reçue avant de déduire l'IP — une facture non conforme = IP refusé.
`
};