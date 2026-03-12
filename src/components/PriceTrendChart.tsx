import type { PriceSeries } from "../types";

type PriceTrendChartProps = {
  series: PriceSeries[];
  highlightedId: string;
  onHighlight: (id: string) => void;
};

function buildPath(series: PriceSeries, width: number, height: number, min: number, max: number) {
  const xStep = width / Math.max(1, series.points.length - 1);
  const range = Math.max(1, max - min);

  return series.points
    .map((point, index) => {
      const x = index * xStep;
      const normalized = (point.price - min) / range;
      const y = height - normalized * height;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

export function PriceTrendChart({
  series,
  highlightedId,
  onHighlight,
}: PriceTrendChartProps) {
  const allPrices = series.flatMap((item) => item.points.map((point) => point.price));
  const min = Math.min(...allPrices) - 1.5;
  const max = Math.max(...allPrices) + 1.5;
  const width = 760;
  const height = 280;
  const highlightedSeries =
    series.find((item) => item.id === highlightedId) ?? series[0];

  return (
    <div className="chart-shell">
      <svg
        className="price-chart"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Evolution des prix des offres fibre"
      >
        {[0, 1, 2, 3].map((index) => {
          const y = (height / 4) * index;
          return (
            <line
              key={index}
              x1="0"
              y1={y}
              x2={width}
              y2={y}
              className="grid-line"
            />
          );
        })}
        {series.map((item) => (
          <path
            key={item.id}
            d={buildPath(item, width, height, min, max)}
            className={item.id === highlightedId ? "chart-line is-active" : "chart-line"}
            stroke={item.accent}
          />
        ))}
      </svg>

      <div className="chart-legend">
        {series.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === highlightedId ? "legend-chip is-active" : "legend-chip"}
            onClick={() => onHighlight(item.id)}
          >
            <span className="legend-dot" style={{ backgroundColor: item.accent }} />
            <span>{item.label}</span>
            <strong>{item.currentPrice.toFixed(2)} EUR</strong>
          </button>
        ))}
      </div>

      <div className="chart-callout">
        <p className="eyebrow">Signal en focus</p>
        <h3>{highlightedSeries.label}</h3>
        <p>
          Aujourd'hui: {highlightedSeries.currentPrice.toFixed(2)} EUR / mois.
          Variation 30 jours: {highlightedSeries.delta30d > 0 ? "+" : ""}
          {highlightedSeries.delta30d.toFixed(0)} EUR.
        </p>
      </div>
    </div>
  );
}
