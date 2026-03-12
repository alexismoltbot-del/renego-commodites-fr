import { createServer } from "node:http";
import { generateDecisionMemo } from "./llm";
import type { AnalysisResult } from "../src/types";

const port = Number.parseInt(process.env.PORT ?? "8787", 10);

function sendJson(response: Parameters<typeof createServer>[0]["prototype"]["emit"] extends never ? never : import("node:http").ServerResponse, statusCode: number, payload: unknown) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  response.end(JSON.stringify(payload));
}

function readBody(request: import("node:http").IncomingMessage) {
  return new Promise<string>((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

createServer(async (request, response) => {
  if (!request.url) {
    sendJson(response, 404, { ok: false });
    return;
  }

  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  if (request.url === "/api/health" && request.method === "GET") {
    sendJson(response, 200, {
      ok: true,
      openaiConfigured: Boolean(process.env.OPENAI_API_KEY),
      anthropicConfigured: Boolean(process.env.ANTHROPIC_API_KEY),
    });
    return;
  }

  if (request.url === "/api/recommendation" && request.method === "POST") {
    try {
      const body = await readBody(request);
      const payload = JSON.parse(body) as { analysis?: AnalysisResult };

      if (!payload.analysis) {
        sendJson(response, 400, { ok: false, error: "Missing analysis payload" });
        return;
      }

      const decisionMemo = await generateDecisionMemo(payload.analysis);
      sendJson(response, 200, {
        ok: true,
        decisionMemo,
      });
      return;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected server error";
      sendJson(response, 500, { ok: false, error: message });
      return;
    }
  }

  sendJson(response, 404, { ok: false, error: "Not found" });
})
  .listen(port, "127.0.0.1", () => {
    console.log(`API ready on http://127.0.0.1:${port}`);
  });
