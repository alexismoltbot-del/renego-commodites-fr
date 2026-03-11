import type { AnalysisResult, DecisionMemo } from "../src/types";
import { buildHeuristicDecisionMemo } from "../src/lib/recommendationEngine";

type ProviderResult = {
  memo: DecisionMemo;
  provider: "heuristic" | "gpt-5.4" | "claude-opus-4-1";
};

function buildPromptPayload(analysis: AnalysisResult) {
  return {
    contract: analysis.contract,
    sectorSummary: analysis.sectorSummary,
    marketSummary: analysis.marketSummary,
    diagnosticFacts: analysis.diagnosticFacts,
    offers: [analysis.retentionOffer, ...analysis.alternatives, analysis.waitOption],
    comparisons: analysis.comparisons,
    constraints: [
      "Diagnostic factuel, pas de blabla marketing.",
      "Si le gain annuel est eleve et la qualite coeur reste proche, pousser clairement le changement.",
      "Comparer les features en mots simples pour un utilisateur non expert.",
      "Le plan d'action doit expliquer ce que l'outil fait, ce que l'utilisateur valide, et les preuves attendues.",
    ],
  };
}

function extractOpenAIText(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return "";
  }

  const candidate = payload as {
    output_text?: string;
    output?: Array<{
      content?: Array<{ type?: string; text?: string }>;
    }>;
  };

  if (candidate.output_text) {
    return candidate.output_text;
  }

  return (
    candidate.output
      ?.flatMap((item) => item.content ?? [])
      .find((item) => item.type === "output_text" || item.type === "text")
      ?.text ?? ""
  );
}

function normalizeDecisionMemo(input: DecisionMemo): DecisionMemo {
  return input;
}

async function callOpenAI(analysis: AnalysisResult): Promise<ProviderResult | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return null;
  }

  const heuristic = buildHeuristicDecisionMemo(analysis);
  const schema = {
    type: "object",
    additionalProperties: false,
    required: [
      "engineMode",
      "modelLabel",
      "generatedAt",
      "direction",
      "headline",
      "recommendationLabel",
      "urgencyLabel",
      "confidenceLabel",
      "explanationForUser",
      "whyThisChoice",
      "selectedOfferId",
      "selectedComparison",
      "gainSummary",
      "executionSections",
    ],
    properties: {
      engineMode: { type: "string", enum: ["gpt-5.4"] },
      modelLabel: { type: "string" },
      generatedAt: { type: "string" },
      direction: { type: "string", enum: ["change_now", "renegotiate_now", "wait_watch"] },
      headline: { type: "string" },
      recommendationLabel: { type: "string" },
      urgencyLabel: { type: "string" },
      confidenceLabel: { type: "string" },
      explanationForUser: { type: "string" },
      whyThisChoice: { type: "array", items: { type: "string" } },
      pushReason: { type: "string" },
      selectedOfferId: { type: "string" },
      selectedComparison: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          required: ["label", "currentValue", "candidateValue", "verdict", "note"],
          properties: {
            label: { type: "string" },
            currentValue: { type: "string" },
            candidateValue: { type: "string" },
            verdict: { type: "string", enum: ["better", "same", "worse", "unknown"] },
            note: { type: "string" },
          },
        },
      },
      gainSummary: {
        type: "object",
        additionalProperties: false,
        required: [
          "currentAnnualCostLabel",
          "selectedAnnualCostLabel",
          "annualSavingLabel",
          "savingPercentLabel",
          "firstYearDeltaLabel",
          "pushChange",
        ],
        properties: {
          currentAnnualCostLabel: { type: "string" },
          selectedAnnualCostLabel: { type: "string" },
          annualSavingLabel: { type: "string" },
          savingPercentLabel: { type: "string" },
          firstYearDeltaLabel: { type: "string" },
          pushChange: { type: "boolean" },
        },
      },
      executionSections: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          required: ["title", "summary", "steps"],
          properties: {
            title: { type: "string" },
            summary: { type: "string" },
            steps: {
              type: "array",
              items: {
                type: "object",
                additionalProperties: false,
                required: [
                  "id",
                  "title",
                  "detail",
                  "owner",
                  "channel",
                  "proof",
                  "automation",
                  "status",
                ],
                properties: {
                  id: { type: "string" },
                  title: { type: "string" },
                  detail: { type: "string" },
                  owner: { type: "string", enum: ["outil", "utilisateur", "operateur"] },
                  channel: { type: "string" },
                  proof: { type: "string" },
                  automation: { type: "string", enum: ["auto", "assistee", "manuelle"] },
                  status: {
                    type: "string",
                    enum: ["ready", "waiting_user", "waiting_provider", "done"],
                  },
                },
              },
            },
          },
        },
      },
      nextBestAlternativeId: { type: "string" },
    },
  };

  const body = {
    model: process.env.OPENAI_MODEL ?? "gpt-5.4",
    reasoning: { effort: "high" },
    input: [
      {
        role: "system",
        content: [
          {
            type: "input_text",
            text:
              "Tu es un moteur de recommandation de contrats francais. Donne un diagnostic factuel, simple, actionnable. Si le gain est fort et la qualite coeur reste acceptable, pousse clairement le changement. Reponds uniquement en JSON conforme au schema.",
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: JSON.stringify({
              fallback: heuristic,
              payload: buildPromptPayload(analysis),
            }),
          },
        ],
      },
    ],
    text: {
      format: {
        type: "json_schema",
        name: "decision_memo",
        schema,
        strict: true,
      },
    },
  };

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return null;
  }

  const payload = await response.json();
  const text = extractOpenAIText(payload);
  if (!text) {
    return null;
  }

  try {
    const memo = normalizeDecisionMemo(JSON.parse(text) as DecisionMemo);
    memo.engineMode = "gpt-5.4";
    return { memo, provider: "gpt-5.4" };
  } catch {
    return null;
  }
}

async function callAnthropic(analysis: AnalysisResult): Promise<ProviderResult | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return null;
  }

  const heuristic = buildHeuristicDecisionMemo(analysis);
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL ?? "claude-opus-4-1-20250805",
      max_tokens: 3000,
      system:
        "Tu es un moteur de recommandation de contrats francais. Reponds uniquement en JSON. Le diagnostic doit etre factuel, tres simple pour un non expert, et pousser clairement le changement si le gain est fort.",
      messages: [
        {
          role: "user",
          content: JSON.stringify({
            fallback: heuristic,
            payload: buildPromptPayload(analysis),
          }),
        },
      ],
    }),
  });

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as {
    content?: Array<{ type?: string; text?: string }>;
  };
  const text = payload.content?.find((item) => item.type === "text")?.text ?? "";
  if (!text) {
    return null;
  }

  try {
    const memo = normalizeDecisionMemo(JSON.parse(text) as DecisionMemo);
    memo.engineMode = "claude-opus-4-1";
    memo.modelLabel = "Claude Opus 4.1";
    return { memo, provider: "claude-opus-4-1" };
  } catch {
    return null;
  }
}

export async function generateDecisionMemo(analysis: AnalysisResult): Promise<DecisionMemo> {
  const openAiResult = await callOpenAI(analysis);
  if (openAiResult) {
    return openAiResult.memo;
  }

  const anthropicResult = await callAnthropic(analysis);
  if (anthropicResult) {
    return anthropicResult.memo;
  }

  return buildHeuristicDecisionMemo(analysis);
}
