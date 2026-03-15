import { useState } from "react";
import { PUBLIC_BOX_OFFERS } from "../lib/boxMarketSnapshot";

const RED_OFFER = PUBLIC_BOX_OFFERS.find((o) => o.id === "switch-red")!;
const RED_MONTHLY = RED_OFFER.pricing.standardMonthlyPriceEur;

function getOperatorNewCustomerInfo(operatorValue: string): { price: number; offer: string } | undefined {
  const offerIdMap: Record<string, string> = {
    "Orange": "switch-orange",
    "SFR": "switch-sfr",
    "Bouygues": "switch-bouygues",
  };
  const offerId = offerIdMap[operatorValue];
  if (!offerId) return undefined;
  const offer = PUBLIC_BOX_OFFERS.find((o) => o.id === offerId);
  if (!offer?.pricing.introMonthlyPriceEur) return undefined;
  return { price: offer.pricing.introMonthlyPriceEur, offer: offer.offer };
}

type CheckResult =
  | { kind: "overpaying"; delta: number; savings24m: number; operator: string }
  | { kind: "best-price" }
  | { kind: "already-red" }
  | { kind: "promo-expired"; delta: number; savings24m: number; operator: string }
  | { kind: "modest-savings"; delta: number; savings24m: number; operator: string };

const OPERATORS = [
  { value: "", label: "Votre opérateur" },
  { value: "Orange", label: "Orange" },
  { value: "Free", label: "Free" },
  { value: "SFR", label: "SFR" },
  { value: "Bouygues", label: "Bouygues Telecom" },
  { value: "Red by SFR", label: "Red by SFR" },
] as const;

function checkPrice(operator: string, price: number): CheckResult {
  if (operator === "Red by SFR" && price <= RED_MONTHLY + 1) {
    return { kind: "already-red" };
  }

  if (price <= RED_MONTHLY) {
    return { kind: "best-price" };
  }

  const delta = Math.round((price - RED_MONTHLY) * 100) / 100;
  const savings24m = Math.round(delta * 24 * 100) / 100;

  if (operator === "Free" && price > 40) {
    return { kind: "promo-expired", delta, savings24m, operator };
  }

  if (delta < 5) {
    return { kind: "modest-savings", delta, savings24m, operator };
  }

  return { kind: "overpaying", delta, savings24m, operator };
}

export function InstantPriceCheck() {
  const [operator, setOperator] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [result, setResult] = useState<CheckResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  function handleCheck() {
    const price = parseFloat(priceInput.replace(",", "."));

    if (!operator || isNaN(price) || price < 0 || price > 200) {
      return;
    }

    const r = checkPrice(operator, price);
    setResult(r);
    setShowResult(true);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      handleCheck();
    }
  }

  const canCheck = operator !== "" && priceInput !== "";

  const loyaltyInfo = (() => {
    if (!showResult || !result || !operator) return null;
    const info = getOperatorNewCustomerInfo(operator);
    if (!info) return null;
    const price = parseFloat(priceInput.replace(",", "."));
    if (isNaN(price) || price <= info.price) return null;
    return { newPrice: info.price, offerName: info.offer };
  })();

  return (
    <section id="price-check" className="price-check glass-panel">
      <div className="price-check-inner">
        <div className="price-check-header">
          <p className="eyebrow">Vérification instantanée</p>
          <h2>Payez-vous trop cher votre box internet ?</h2>
          <p className="price-check-subtitle">Vérifiez en 10 secondes. Aucune donnée personnelle collectée.</p>
        </div>

        <div className="price-check-form">
          <div className="price-check-field">
            <label htmlFor="pc-operator">Opérateur</label>
            <select
              id="pc-operator"
              value={operator}
              onChange={(e) => {
                setOperator(e.target.value);
                setShowResult(false);
              }}
            >
              {OPERATORS.map((op) => (
                <option key={op.value} value={op.value} disabled={op.value === ""}>
                  {op.label}
                </option>
              ))}
            </select>
          </div>

          <div className="price-check-field">
            <label htmlFor="pc-price">Prix mensuel</label>
            <div className="price-input-wrap">
              <input
                id="pc-price"
                type="text"
                inputMode="decimal"
                placeholder="39,99"
                value={priceInput}
                onChange={(e) => {
                  setPriceInput(e.target.value);
                  setShowResult(false);
                }}
                onKeyDown={handleKeyDown}
              />
              <span className="price-suffix">€/mois</span>
            </div>
          </div>

          <button
            type="button"
            className="button button-primary price-check-btn"
            onClick={handleCheck}
            disabled={!canCheck}
          >
            Vérifier →
          </button>
        </div>

        {showResult && result && (
          <div className={`price-check-result ${result.kind === "overpaying" || result.kind === "promo-expired" ? "result-saving" : "result-good"}`}>
            {result.kind === "overpaying" && (
              <>
                <p className="result-headline">
                  Vous payez <strong>{result.delta.toFixed(0)} €/mois de plus</strong> que
                  Red by SFR ({RED_MONTHLY.toFixed(2)} €/mois).
                </p>
                <p className="result-detail">
                  Sur 24 mois : <strong>{result.savings24m.toFixed(0)} € d'économies potentielles</strong>.
                </p>
                {loyaltyInfo && (
                  <p className="result-hint">
                    💡 À titre de comparaison, {operator} affiche {loyaltyInfo.newPrice.toFixed(2)}&nbsp;€/mois
                    pour les nouveaux clients ({loyaltyInfo.offerName}).
                  </p>
                )}
              </>
            )}
            {result.kind === "promo-expired" && (
              <>
                <p className="result-headline">
                  Vous payez <strong>{result.delta.toFixed(0)} €/mois de plus</strong> que
                  Red by SFR ({RED_MONTHLY.toFixed(2)} €/mois).
                </p>
                <p className="result-hint">
                  💡 Votre promo Free a probablement expiré.
                </p>
                <p className="result-detail">
                  Sur 24 mois : <strong>{result.savings24m.toFixed(0)} € d'économies potentielles</strong>.
                </p>
              </>
            )}
            {result.kind === "modest-savings" && (
              <>
                <p className="result-headline">
                  L'écart est de <strong>{result.delta.toFixed(2)} €/mois</strong> avec
                  Red by SFR ({RED_MONTHLY.toFixed(2)} €/mois).
                </p>
                <p className="result-detail">
                  Sur 24 mois : <strong>{result.savings24m.toFixed(0)} € d'économies potentielles</strong> — avant frais de mise en service.
                </p>
                <p className="result-hint result-hint-trust">
                  ✓ Pour un écart aussi modeste, changer d'opérateur ne vaut pas toujours le coup.
                </p>
                {loyaltyInfo && (
                  <p className="result-hint">
                    💡 {operator} affiche {loyaltyInfo.newPrice.toFixed(2)}&nbsp;€/mois pour ses nouveaux
                    clients ({loyaltyInfo.offerName}). Un simple appel au service client peut suffire.
                  </p>
                )}
              </>
            )}
            {result.kind === "modest-savings" && (
              <p className="result-cta">
                {loyaltyInfo ? (
                  <><a href="#hero-upload">Importez votre facture</a> pour le diagnostic complet — gratuit et sans engagement.</>
                ) : (
                  <><a href="#observatoire">Surveillez l'observatoire des prix</a> — si les tarifs bougent, vous le verrez ici.</>
                )}
              </p>
            )}
            {result.kind === "best-price" && (
              <p className="result-headline result-positive">
                ✓ Vous avez déjà le meilleur prix du marché. Pas de raison de changer.
              </p>
            )}
            {result.kind === "already-red" && (
              <p className="result-headline result-positive">
                ✓ Votre offre Red est la plus compétitive du panel. Bien joué.
              </p>
            )}
            {(result.kind === "overpaying" || result.kind === "promo-expired") && (
              <p className="result-cta">
                <a href="#hero-upload">Importez votre facture pour le diagnostic complet</a> — gratuit et sans engagement.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
