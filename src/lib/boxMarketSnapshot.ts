import type { OfferSource, PriceSeries } from "../types";

export type BoxPricingProfile = {
  introMonthlyPriceEur?: number;
  introMonths?: number;
  standardMonthlyPriceEur: number;
  setupFeeEur: number;
  priceLocked: boolean;
};

export type BoxServiceProfile = {
  tvLabel: string;
  tvChannels: number;
  includesCanal: boolean;
  decoderIncluded: boolean;
  speedLabel: string;
  speedDownMbps: number;
  speedUpMbps: number;
  wifiGeneration: number;
};

export type PublicBoxOfferSnapshot = {
  id: string;
  provider: string;
  offer: string;
  accent: string;
  pricing: BoxPricingProfile;
  service: BoxServiceProfile;
  commitmentMonths: number;
  riskLabel: string;
  featureBadges: string[];
  notes: string[];
  source: OfferSource;
  observatoryPoints: number[];
};

export type RetentionSnapshot = {
  id: string;
  provider: string;
  offer: string;
  pricing: BoxPricingProfile;
  service: BoxServiceProfile;
  commitmentMonths: number;
  riskLabel: string;
  featureBadges: string[];
  notes: string[];
  source: OfferSource;
};

export const MARKET_SNAPSHOT_AS_OF = "16 mars 2026";

export const FREEBOX_REFERENCE_SERVICE: BoxServiceProfile = {
  tvLabel: "TV by CANAL + bouquet TV",
  tvChannels: 220,
  includesCanal: true,
  decoderIncluded: true,
  speedLabel: "1 Gb/s (Freebox Revolution fibre)",
  speedDownMbps: 1000,
  speedUpMbps: 600,
  wifiGeneration: 5,
};

export const FREEBOX_RETENTION_TARGET: RetentionSnapshot = {
  id: "retain-free",
  provider: "Free",
  offer: "Renegociation cible sur la ligne actuelle",
  pricing: {
    introMonthlyPriceEur: 35.99,
    introMonths: 12,
    standardMonthlyPriceEur: 39.99,
    setupFeeEur: 0,
    priceLocked: false,
  },
  service: FREEBOX_REFERENCE_SERVICE,
  commitmentMonths: 0,
  riskLabel: "Risque faible",
  featureBadges: ["Pas de coupure", "Pas de retour materiel", "Meme experience"],
  notes: [
    "Le chemin le plus simple si tu veux garder exactement la meme box.",
    "Le gain reste limite face au meilleur prix public du marche.",
    "Le script doit verifier qu'aucun nouvel engagement ou option parasite n'est ajoute.",
  ],
  source: {
    label: "Scenario retention interne",
    asOf: MARKET_SNAPSHOT_AS_OF,
  },
};

export const PUBLIC_BOX_OFFERS: PublicBoxOfferSnapshot[] = [
  {
    id: "switch-sfr",
    provider: "SFR",
    offer: "Fibre Starter",
    accent: "#7d1c2f",
    pricing: {
      introMonthlyPriceEur: 27.99,
      introMonths: 12,
      standardMonthlyPriceEur: 38.99,
      setupFeeEur: 49,
      priceLocked: false,
    },
    service: {
      tvLabel: "Bouquet SFR TV 160 chaines",
      tvChannels: 160,
      includesCanal: false,
      decoderIncluded: true,
      speedLabel: "Jusqu'a 1 Gb/s annonce",
      speedDownMbps: 1000,
      speedUpMbps: 1000,
      wifiGeneration: 5,
    },
    commitmentMonths: 12,
    riskLabel: "Risque moyen",
    featureBadges: ["TV incluse", "ODR frais de resiliation"],
    notes: [
      "Le coeur de service reste proche du contrat actuel: TV incluse, debit comparable, installation standard.",
      "Le vrai point d'attention reste l'engagement de 12 mois et la remontee tarifaire en annee 2.",
      "C'est l'option la plus lisible si on cherche un vrai rapport prix/features.",
    ],
    source: {
      label: "Site officiel SFR",
      url: "https://www.sfr.fr/offre-internet",
      asOf: MARKET_SNAPSHOT_AS_OF,
    },
    observatoryPoints: [
      29.99, 29.99, 29.99, 29.49, 28.99, 28.99, 28.99, 28.49, 27.99, 27.99, 27.99, 27.99,
      27.99, 27.99,
    ],
  },
  {
    id: "switch-bouygues",
    provider: "Bouygues Telecom",
    offer: "Bbox Must Fibre",
    accent: "#0d7a6d",
    pricing: {
      introMonthlyPriceEur: 35.99,
      introMonths: 12,
      standardMonthlyPriceEur: 42.99,
      setupFeeEur: 48,
      priceLocked: false,
    },
    service: {
      tvLabel: "TV incluse",
      tvChannels: 180,
      includesCanal: false,
      decoderIncluded: true,
      speedLabel: "Jusqu'a 2 Gb/s descendant",
      speedDownMbps: 2000,
      speedUpMbps: 900,
      wifiGeneration: 6,
    },
    commitmentMonths: 12,
    riskLabel: "Risque moyen",
    featureBadges: ["Wi-Fi 6", "TV incluse"],
    notes: [
      "Plus moderne techniquement, avec un vrai gain Wi-Fi et un meilleur debit descendant.",
      "Le prix devient plus dur a defendre sur 24 mois une fois la promo terminee.",
      "Bonne option si le confort reseau compte davantage que l'economie pure.",
    ],
    source: {
      label: "Guide des tarifs Bouygues Telecom",
      url: "https://www.bouyguestelecom.fr/offres-internet",
      asOf: MARKET_SNAPSHOT_AS_OF,
    },
    observatoryPoints: [
      36.99, 36.99, 36.99, 36.99, 35.99, 35.99, 35.99, 35.99, 35.99, 35.99, 35.99, 35.99,
      35.99, 35.99,
    ],
  },
  {
    id: "switch-orange",
    provider: "Orange",
    offer: "Livebox Fibre",
    accent: "#f4a300",
    pricing: {
      introMonthlyPriceEur: 29.99,
      introMonths: 12,
      standardMonthlyPriceEur: 42.99,
      setupFeeEur: 49,
      priceLocked: false,
    },
    service: {
      tvLabel: "TV 200 chaines incluses + Decodeur TV 6",
      tvChannels: 200,
      includesCanal: false,
      decoderIncluded: true,
      speedLabel: "Jusqu'a 2 Gb/s partages (Up 800 Mb/s)",
      speedDownMbps: 2000,
      speedUpMbps: 800,
      wifiGeneration: 7,
    },
    commitmentMonths: 12,
    riskLabel: "Risque moyen",
    featureBadges: ["Promo 12 mois", "Wifi 7", "TV 200 ch.", "Reseau Orange"],
    notes: [
      "Le prix promo inclut la remise nouveau client (-8 EUR/mois) et l'ODR Bienvenue (-5 EUR/mois).",
      "Debit desormais competitif (2 Gb/s partages) avec la nouvelle Livebox S Wifi 7.",
      "La marque rassure, mais la rentabilite degrade franchement apres douze mois (42,99 EUR).",
    ],
    source: {
      label: "Site officiel Orange",
      url: "https://boutique.orange.fr/internet/offres-fibre",
      asOf: MARKET_SNAPSHOT_AS_OF,
    },
    observatoryPoints: [
      25.99, 25.99, 25.99, 25.49, 24.99, 24.99, 24.99, 24.99, 24.99, 24.99, 24.99, 24.99,
      29.99, 29.99,
    ],
  },
  {
    id: "switch-red",
    provider: "Red by SFR",
    offer: "THE BOX Fibre",
    accent: "#cc0000",
    pricing: {
      standardMonthlyPriceEur: 22.99,
      setupFeeEur: 39,
      priceLocked: true,
    },
    service: {
      tvLabel: "35 chaines incluses, TV sur app",
      tvChannels: 35,
      includesCanal: false,
      decoderIncluded: false,
      speedLabel: "Jusqu'a 1 Gb/s symmetrique",
      speedDownMbps: 1000,
      speedUpMbps: 1000,
      wifiGeneration: 5,
    },
    commitmentMonths: 0,
    riskLabel: "Risque faible",
    featureBadges: ["Sans engagement", "Prix fixe"],
    notes: [
      "C'est le meilleur point d'entree prix du panel sur 24 mois.",
      "Le trade-off est net: TV plus legere, pas de decodeur, mais debit desormais equivalent.",
      "Tres fort en mode commodite pure, moins fort si la TV compte vraiment.",
    ],
    source: {
      label: "Site officiel Red by SFR",
      url: "https://www.red-by-sfr.fr/offre-internet/",
      asOf: MARKET_SNAPSHOT_AS_OF,
    },
    observatoryPoints: [
      24.99, 24.99, 24.99, 24.99, 24.99, 24.99, 24.99, 24.99, 24.99, 24.99, 24.99, 24.99,
      22.99, 22.99,
    ],
  },
];

function roundMoney(value: number) {
  return Number(value.toFixed(2));
}

export function computeFirstYearCost(pricing: BoxPricingProfile) {
  const introMonths = Math.min(12, pricing.introMonths ?? 0);
  const introPrice = pricing.introMonthlyPriceEur ?? pricing.standardMonthlyPriceEur;
  const standardMonths = 12 - introMonths;
  return roundMoney(introMonths * introPrice + standardMonths * pricing.standardMonthlyPriceEur);
}

export function compute24MonthCost(pricing: BoxPricingProfile) {
  const introMonths = Math.min(24, pricing.introMonths ?? 0);
  const introPrice = pricing.introMonthlyPriceEur ?? pricing.standardMonthlyPriceEur;
  const standardMonths = 24 - introMonths;
  return roundMoney(
    introMonths * introPrice + standardMonths * pricing.standardMonthlyPriceEur + pricing.setupFeeEur,
  );
}

function formatMonthlyPrice(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(value);
}

export function buildCommitmentLabel(commitmentMonths: number) {
  return commitmentMonths > 0 ? `${commitmentMonths} mois` : "Sans engagement";
}

export function buildPublicPriceLabel(pricing: BoxPricingProfile, commitmentMonths: number) {
  if (pricing.introMonths && pricing.introMonthlyPriceEur !== undefined) {
    return `${formatMonthlyPrice(pricing.introMonthlyPriceEur)} / mois pendant ${pricing.introMonths} mois puis ${formatMonthlyPrice(pricing.standardMonthlyPriceEur)}${commitmentMonths === 0 ? " sans engagement" : ""}`;
  }

  return `${formatMonthlyPrice(pricing.standardMonthlyPriceEur)} / mois${commitmentMonths === 0 ? " sans engagement" : ""}`;
}

export function buildObservatorySeries(): PriceSeries[] {
  const labels = Array.from({ length: 14 }, (_, index) => `J-${13 - index}`).map((label, index, all) =>
    index === all.length - 1 ? "J" : label,
  );

  const currentSeries: PriceSeries = {
    id: "free",
    label: "Freebox Revolution",
    accent: "#f1643c",
    currentPrice: 39.99,
    delta30d: 0,
    points: labels.map((day) => ({ day, price: 39.99 })),
  };

  const competitorSeries = PUBLIC_BOX_OFFERS.map((offer) => {
    const currentPrice = offer.observatoryPoints[offer.observatoryPoints.length - 1] ?? 0;
    const firstPrice = offer.observatoryPoints[0] ?? currentPrice;

    return {
      id: offer.id.replace("switch-", ""),
      label: `${offer.provider} ${offer.offer}`,
      accent: offer.accent,
      currentPrice,
      delta30d: roundMoney(currentPrice - firstPrice),
      points: labels.map((day, index) => ({
        day,
        price: offer.observatoryPoints[index] ?? currentPrice,
      })),
    };
  });

  return [currentSeries, ...competitorSeries];
}
