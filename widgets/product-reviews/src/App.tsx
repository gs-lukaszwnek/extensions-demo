import { useState, useEffect } from "react";
import type { WidgetSDK, WidgetProps } from "./types";

declare global {
  interface Window {
    confetti?: (opts?: {
      particleCount?: number;
      spread?: number;
      origin?: { x?: number; y?: number };
    }) => void;
  }
}

export function App({ sdk }: { sdk: WidgetSDK }) {
  const [props, setProps] = useState<WidgetProps>(sdk.getProps());

  useEffect(() => sdk.on("propsChanged", setProps), [sdk]);

  const fireConfetti = () => {
    if (typeof window.confetti === "function") {
      window.confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    }
  };

  return (
    <section className="react-widget-section">
      <h3 className="react-widget-title">{props.title}</h3>
      {props.description && (
        <p className="react-widget-description">{props.description}</p>
      )}

      <button
        type="button"
        className="cc-button-primary"
        onClick={fireConfetti}
      >
        🎉 Fire confetti
      </button>
    </section>
  );
}
