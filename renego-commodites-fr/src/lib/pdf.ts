type TextChunk = {
  str?: string;
  transform?: number[];
};

let workerConfigured = false;

function textContentToLines(items: TextChunk[]) {
  const rows = new Map<number, string[]>();

  for (const item of items) {
    if (!item.str || !item.transform) {
      continue;
    }

    const y = Math.round(item.transform[5]);
    const existingRowKey =
      Array.from(rows.keys()).find((key) => Math.abs(key - y) <= 2) ?? y;
    const parts = rows.get(existingRowKey) ?? [];
    parts.push(item.str.trim());
    rows.set(existingRowKey, parts);
  }

  return Array.from(rows.entries())
    .sort((left, right) => right[0] - left[0])
    .map(([, parts]) => parts.filter(Boolean).join(" ").replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

export async function extractPdfText(file: File) {
  const [{ GlobalWorkerOptions, getDocument }, { default: workerUrl }] = await Promise.all([
    import("pdfjs-dist"),
    import("pdfjs-dist/build/pdf.worker.mjs?url"),
  ]);

  if (!workerConfigured) {
    GlobalWorkerOptions.workerSrc = workerUrl;
    workerConfigured = true;
  }

  const data = new Uint8Array(await file.arrayBuffer());
  const pdf = await getDocument({ data }).promise;
  const pages: string[] = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const lines = textContentToLines(content.items as TextChunk[]);
    pages.push(lines.join("\n"));
  }

  return {
    pageCount: pdf.numPages,
    text: pages.join("\n\n"),
  };
}
