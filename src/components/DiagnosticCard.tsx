import { useCallback, useRef, useState } from "react";
import { MARKET_SNAPSHOT_AS_OF } from "../lib/boxMarketSnapshot";

type DiagnosticCardProps = {
  currentProvider: string;
  currentMonthlyPrice: number;
  bestProvider: string;
  bestOffer: string;
  bestMonthlyPrice: number;
  savings24m: number;
  ctaUrl: string;
};

type CardSize = "story" | "square";

const CARD_CONFIGS: Record<CardSize, { width: number; height: number; label: string }> = {
  story: { width: 1080, height: 1920, label: "Story (9:16)" },
  square: { width: 1080, height: 1080, label: "Feed (1:1)" },
};

function formatEur(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(value);
}

function renderCard(
  canvas: HTMLCanvasElement,
  props: DiagnosticCardProps,
  size: CardSize,
) {
  const config = CARD_CONFIGS[size];
  canvas.width = config.width;
  canvas.height = config.height;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const w = config.width;
  const h = config.height;
  const isStory = size === "story";
  const pad = isStory ? 80 : 64;
  const scale = w / 1080;

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, "#f7f1e8");
  grad.addColorStop(0.5, "#fbf8f1");
  grad.addColorStop(1, "#f7f1e8");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Accent circle top-left
  ctx.save();
  ctx.globalAlpha = 0.12;
  const circGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, 400 * scale);
  circGrad.addColorStop(0, "#f1643c");
  circGrad.addColorStop(1, "transparent");
  ctx.fillStyle = circGrad;
  ctx.fillRect(0, 0, 500 * scale, 500 * scale);
  ctx.restore();

  // Accent circle bottom-right
  ctx.save();
  ctx.globalAlpha = 0.1;
  const circGrad2 = ctx.createRadialGradient(w, h, 0, w, h, 350 * scale);
  circGrad2.addColorStop(0, "#0d7a6d");
  circGrad2.addColorStop(1, "transparent");
  ctx.fillStyle = circGrad2;
  ctx.fillRect(w - 450 * scale, h - 450 * scale, 450 * scale, 450 * scale);
  ctx.restore();

  // Card container
  const cardMarginX = pad;
  const cardMarginTop = isStory ? 260 * scale : 80 * scale;
  const cardW = w - cardMarginX * 2;
  const cardH = isStory ? h - 520 * scale : h - 160 * scale;
  const radius = 40 * scale;

  ctx.save();
  ctx.fillStyle = "rgba(255, 250, 244, 0.85)";
  ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
  ctx.lineWidth = 2 * scale;
  ctx.beginPath();
  ctx.roundRect(cardMarginX, cardMarginTop, cardW, cardH, radius);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  // Content
  const cx = w / 2;
  let y = cardMarginTop + (isStory ? 80 * scale : 56 * scale);

  // Magnifier emoji
  ctx.font = `${(isStory ? 64 : 48) * scale}px sans-serif`;
  ctx.textAlign = "center";
  ctx.fillText("\u{1F50D}", cx, y);
  y += (isStory ? 72 : 52) * scale;

  // Title
  ctx.fillStyle = "#17211d";
  ctx.font = `bold ${(isStory ? 52 : 42) * scale}px sans-serif`;
  ctx.fillText("Diagnostic Box Internet", cx, y);
  y += (isStory ? 28 : 20) * scale;

  // Subtitle
  ctx.fillStyle = "#53615c";
  ctx.font = `${(isStory ? 28 : 22) * scale}px sans-serif`;
  ctx.fillText("par ReneGo \u00B7 Beta", cx, y + 30 * scale);
  y += (isStory ? 90 : 70) * scale;

  // Divider
  ctx.strokeStyle = "rgba(23, 33, 29, 0.10)";
  ctx.lineWidth = 1.5 * scale;
  ctx.beginPath();
  ctx.moveTo(cardMarginX + 60 * scale, y);
  ctx.lineTo(w - cardMarginX - 60 * scale, y);
  ctx.stroke();
  y += (isStory ? 60 : 48) * scale;

  // Transition line
  ctx.fillStyle = "#53615c";
  ctx.font = `${(isStory ? 30 : 24) * scale}px sans-serif`;
  ctx.fillText(props.currentProvider + "  \u2192  " + props.bestProvider, cx, y);
  y += (isStory ? 70 : 56) * scale;

  // Current price
  ctx.fillStyle = "#53615c";
  ctx.font = `${(isStory ? 30 : 24) * scale}px sans-serif`;
  ctx.fillText("Vous payez", cx, y);
  y += (isStory ? 56 : 44) * scale;

  ctx.fillStyle = "#ab233a";
  ctx.font = `bold ${(isStory ? 64 : 50) * scale}px sans-serif`;
  ctx.fillText(formatEur(props.currentMonthlyPrice) + "/mois", cx, y);
  y += (isStory ? 72 : 56) * scale;

  // Best price
  ctx.fillStyle = "#53615c";
  ctx.font = `${(isStory ? 30 : 24) * scale}px sans-serif`;
  ctx.fillText("Meilleur prix", cx, y);
  y += (isStory ? 56 : 44) * scale;

  ctx.fillStyle = "#0d7a6d";
  ctx.font = `bold ${(isStory ? 64 : 50) * scale}px sans-serif`;
  ctx.fillText(formatEur(props.bestMonthlyPrice) + "/mois", cx, y);
  y += (isStory ? 90 : 70) * scale;

  // Divider
  ctx.strokeStyle = "rgba(23, 33, 29, 0.10)";
  ctx.beginPath();
  ctx.moveTo(cardMarginX + 60 * scale, y);
  ctx.lineTo(w - cardMarginX - 60 * scale, y);
  ctx.stroke();
  y += (isStory ? 60 : 48) * scale;

  // Savings label
  ctx.fillStyle = "#53615c";
  ctx.font = `${(isStory ? 30 : 24) * scale}px sans-serif`;
  ctx.fillText("\u00C9conomie potentielle sur 24 mois", cx, y);
  y += (isStory ? 64 : 50) * scale;

  // Big savings number with pill
  const savingsText = formatEur(props.savings24m);
  ctx.font = `bold ${(isStory ? 80 : 62) * scale}px sans-serif`;
  const savingsMetrics = ctx.measureText(savingsText);
  const pillPad = 28 * scale;
  const pillH = (isStory ? 100 : 78) * scale;
  const pillW = savingsMetrics.width + pillPad * 2;
  const pillX = cx - pillW / 2;
  const pillY = y - pillH * 0.72;

  ctx.save();
  ctx.fillStyle = "rgba(13, 122, 109, 0.10)";
  ctx.beginPath();
  ctx.roundRect(pillX, pillY, pillW, pillH, 20 * scale);
  ctx.fill();
  ctx.restore();

  ctx.fillStyle = "#0d7a6d";
  ctx.fillText(savingsText, cx, y);
  y += (isStory ? 50 : 40) * scale;

  // CTA at bottom of card
  y = cardMarginTop + cardH - (isStory ? 80 : 64) * scale;
  ctx.fillStyle = "#53615c";
  ctx.font = `${(isStory ? 28 : 22) * scale}px sans-serif`;
  ctx.fillText("Faites le test \u2192 " + props.ctaUrl, cx, y);

  // Top branding (story only)
  if (isStory) {
    ctx.fillStyle = "#17211d";
    ctx.font = `bold ${36 * scale}px sans-serif`;
    ctx.fillText("ReneGo", cx, 120 * scale);
    ctx.fillStyle = "#53615c";
    ctx.font = `${24 * scale}px sans-serif`;
    ctx.fillText("Diagnostic Box Internet \u00B7 100% gratuit", cx, 160 * scale);
  }

  // Bottom branding (story only)
  if (isStory) {
    ctx.fillStyle = "#53615c";
    ctx.font = `${22 * scale}px sans-serif`;
    ctx.fillText(
      "Prix relev\u00E9s le " + MARKET_SNAPSHOT_AS_OF + " \u00B7 Beta \u00B7 R\u00E9sultats indicatifs",
      cx,
      h - 80 * scale,
    );
  }
}

export function DiagnosticCard(props: DiagnosticCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedSize, setSelectedSize] = useState<CardSize>("story");
  const [isRendered, setIsRendered] = useState(false);
  const [shareStatus, setShareStatus] = useState<"idle" | "sharing" | "done" | "error">("idle");

  const generateCard = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    renderCard(canvas, props, selectedSize);
    setIsRendered(true);
    setShareStatus("idle");
  }, [props, selectedSize]);

  const handleShare = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setShareStatus("sharing");

    try {
      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, "image/png"),
      );
      if (!blob) {
        setShareStatus("error");
        return;
      }

      const file = new File([blob], "diagnostic-renego.png", { type: "image/png" });

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: "Mon diagnostic box internet \u2014 ReneGo",
          text: "J'ai fait le test : je peux \u00E9conomiser " + formatEur(props.savings24m) + " sur 24 mois en changeant de box internet.",
          files: [file],
        });
        setShareStatus("done");
      } else {
        // Fallback: download
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "diagnostic-renego.png";
        a.click();
        URL.revokeObjectURL(url);
        setShareStatus("done");
      }
    } catch {
      setShareStatus("error");
    }
  }, [props.savings24m]);

  return (
    <div className="diagnostic-card-section">
      <div className="diagnostic-card-header">
        <div>
          <p className="eyebrow">Partager</p>
          <h3>Partagez votre diagnostic</h3>
          <p className="diagnostic-card-subtitle">
            G&eacute;n&eacute;rez une image de votre r&eacute;sultat et partagez-la avec vos proches.
            Aucune donn&eacute;e personnelle n'appara&icirc;t sur la carte.
          </p>
        </div>
        <div className="diagnostic-card-controls">
          <div className="size-toggle">
            {(Object.entries(CARD_CONFIGS) as [CardSize, typeof CARD_CONFIGS.story][]).map(
              ([key, config]) => (
                <button
                  key={key}
                  type="button"
                  className={key === selectedSize ? "size-btn is-active" : "size-btn"}
                  onClick={() => {
                    setSelectedSize(key);
                    setIsRendered(false);
                  }}
                >
                  {config.label}
                </button>
              ),
            )}
          </div>
          <button type="button" className="button button-primary" onClick={generateCard}>
            G&eacute;n&eacute;rer la carte
          </button>
        </div>
      </div>

      <div className="diagnostic-card-preview">
        <canvas
          ref={canvasRef}
          className={isRendered ? "diagnostic-canvas is-visible" : "diagnostic-canvas"}
          style={{
            maxWidth: "100%",
            height: "auto",
            aspectRatio:
              selectedSize === "story" ? "1080 / 1920" : "1080 / 1080",
          }}
        />
        {!isRendered && (
          <div className="diagnostic-canvas-placeholder">
            <p>Cliquez sur &laquo; G&eacute;n&eacute;rer la carte &raquo; pour pr&eacute;visualiser</p>
          </div>
        )}
      </div>

      {isRendered && (
        <div className="diagnostic-card-actions">
          <button
            type="button"
            className="button button-primary"
            onClick={() => void handleShare()}
            disabled={shareStatus === "sharing"}
          >
            {shareStatus === "sharing"
              ? "Partage en cours..."
              : shareStatus === "done"
                ? "\u2713 Partag\u00E9 !"
                : "Partager mon diagnostic"}
          </button>
          <p className="diagnostic-card-hint">
            {"share" in navigator
              ? "Partage natif vers WhatsApp, Stories, email..."
              : "T\u00E9l\u00E9charge l'image pour la partager o\u00F9 vous voulez."}
          </p>
        </div>
      )}
    </div>
  );
}
