export function formatMoney(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatSaving(value: number) {
  if (value <= 0) {
    return "0 EUR / an";
  }

  return `${Math.round(value)} EUR / an`;
}

export function formatScore(value: number) {
  return `${Math.round(value)}/100`;
}
