import React from "react";
import ReactDOM from "react-dom/client";
import { InstantPriceCheck } from "./components/InstantPriceCheck";
import "./widget.css";

function WidgetShell() {
  return (
    <div className="renego-widget-shell">
      <InstantPriceCheck />
      <footer className="renego-widget-footer">
        <a
          href="https://renego-commodites-fr.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="renego-widget-cta"
        >
          Vérificateur ReneGo — Diagnostic complet gratuit sur renego.fr →
        </a>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("widget-root")!).render(
  <React.StrictMode>
    <WidgetShell />
  </React.StrictMode>,
);
