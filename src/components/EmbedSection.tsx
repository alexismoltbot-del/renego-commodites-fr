import { useState } from "react";

const EMBED_URL = "https://renego-commodites-fr.vercel.app/widget.html";

const IFRAME_CODE = `<iframe
  src="${EMBED_URL}"
  width="100%"
  height="520"
  style="border:none; border-radius:20px; max-width:720px;"
  title="Vérificateur de prix box internet — ReneGo"
  loading="lazy"
></iframe>`;

export function EmbedSection() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(IFRAME_CODE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="integrez" className="embed-section glass-panel">
      <div className="embed-inner">
        <p className="eyebrow">Distribution</p>
        <h2>Intégrez ReneGo sur votre site</h2>
        <p className="embed-subtitle">
          Aidez vos visiteurs à vérifier leur facture box internet.
          Copiez le code ci-dessous — aucune clé API, aucun compte, 100% gratuit.
        </p>
        <div className="embed-code-wrap">
          <pre className="embed-code"><code>{IFRAME_CODE}</code></pre>
          <button
            type="button"
            className="button button-primary embed-copy-btn"
            onClick={handleCopy}
          >
            {copied ? "✓ Copié" : "Copier le code"}
          </button>
        </div>
        <p className="embed-note">
          Le widget fonctionne sur tous les sites — blogs, forums, comparateurs.
          Aucune donnée personnelle n'est collectée. Pas de cookie.
        </p>
      </div>
    </section>
  );
}
