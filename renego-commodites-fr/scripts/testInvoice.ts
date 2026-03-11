import fs from "node:fs";
import path from "node:path";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { analyzeContractText } from "../src/lib/contractAnalysis";
import { buildHeuristicDecisionMemo } from "../src/lib/recommendationEngine";

type TextChunk = {
  str?: string;
  transform?: number[];
};

function textContentToLines(items: TextChunk[]) {
  const rows = new Map<number, string[]>();

  for (const item of items) {
    if (!item.str || !item.transform) {
      continue;
    }

    const y = Math.round(item.transform[5]);
    const rowKey = Array.from(rows.keys()).find((key) => Math.abs(key - y) <= 2) ?? y;
    const parts = rows.get(rowKey) ?? [];
    parts.push(item.str.trim());
    rows.set(rowKey, parts);
  }

  return Array.from(rows.entries())
    .sort((left, right) => right[0] - left[0])
    .map(([, parts]) => parts.filter(Boolean).join(" ").replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

async function extractPdfText(filePath: string) {
  const data = new Uint8Array(fs.readFileSync(filePath));
  const pdf = await getDocument({ data }).promise;
  const pages: string[] = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    pages.push(textContentToLines(content.items as TextChunk[]).join("\n"));
  }

  return {
    pageCount: pdf.numPages,
    text: pages.join("\n\n"),
  };
}

async function main() {
  const filePath = process.argv[2];

  if (!filePath) {
    throw new Error("Usage: npm run test:invoice -- /absolute/path/to/file.pdf");
  }

  const absolutePath = path.resolve(filePath);
  const extraction = await extractPdfText(absolutePath);
  const result = analyzeContractText(path.basename(absolutePath), extraction.text, extraction.pageCount);
  const memo = buildHeuristicDecisionMemo(result);

  console.log("=== DOSSIER ===");
  console.log({
    filename: result.contract.filename,
    provider: result.contract.provider,
    offerName: result.contract.offerName,
    invoiceNumber: result.contract.invoiceNumber,
    issueDate: result.contract.issueDate,
    dueDate: result.contract.dueDate,
    total: result.contract.totalLabel,
    subscriberName: result.contract.subscriberName,
    subscriberEmail: result.contract.subscriberEmail,
    installAddress: result.contract.installAddress,
    confidence: result.contract.extractionConfidence,
  });

  console.log("=== RECOMMANDATION ===");
  console.log({
    selectedOfferId: memo.selectedOfferId,
    label: memo.recommendationLabel,
    headline: memo.headline,
    explanationForUser: memo.explanationForUser,
    gainSummary: memo.gainSummary,
  });

  console.log("=== COMPARAISON SIMPLE ===");
  console.log(memo.selectedComparison);

  console.log("=== ACTION ENGINE ===");
  console.log(memo.executionSections);
}

void main();
