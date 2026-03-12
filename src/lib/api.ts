import type { AnalysisResult, DecisionMemo } from "../types";
import { buildHeuristicDecisionMemo } from "./recommendationEngine";

export async function fetchDecisionMemo(analysis: AnalysisResult): Promise<DecisionMemo> {
  try {
    const response = await fetch("/api/recommendation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ analysis }),
    });

    if (!response.ok) {
      throw new Error("Recommendation API failed");
    }

    const payload = (await response.json()) as { decisionMemo?: DecisionMemo };
    if (!payload.decisionMemo) {
      throw new Error("Recommendation API returned no decision memo");
    }

    return payload.decisionMemo;
  } catch {
    return buildHeuristicDecisionMemo(analysis);
  }
}
