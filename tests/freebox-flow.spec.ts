import { expect, test } from "@playwright/test";

const invoicePath = process.env.RENEGO_TEST_PDF;

test.skip(!invoicePath, "RENEGO_TEST_PDF n'est pas defini.");

test("analyse une facture Free et boucle le flow", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "Diagnostic factuel, recommandation sourcee, execution guidee.",
    }),
  ).toBeVisible();

  await page.locator('input[type="file"]').setInputFiles(invoicePath!);

  await expect(
    page.getByRole("heading", { name: "Abonnement Freebox Revolution avec TV by CANAL" }),
  ).toBeVisible();
  await expect(
    page.getByText("132 AVENUE ACHILLE PERETTI, 92200 NEUILLY SUR SEINE").first(),
  ).toBeVisible();
  await expect(page.getByText("39,99 EUR").first()).toBeVisible();
  await expect(
    page.getByText("Le meilleur compromis prix/features pousse maintenant vers SFR."),
  ).toBeVisible();
  await expect(page.getByText("Reco prix", { exact: true })).toBeVisible();
  await expect(page.getByText("Reco prix/features", { exact: true })).toBeVisible();
  await expect(page.getByText("Top prix", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("Top prix/features", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("144 EUR / an").first()).toBeVisible();
  await expect(page.getByText("Site officiel Red by SFR")).toBeVisible();

  // Verify all 4 alternatives are visible
  await expect(page.locator(".offer-card h3").filter({ hasText: "Fibre Starter" })).toBeVisible();
  await expect(page.locator(".offer-card h3").filter({ hasText: "Bbox Must Fibre" })).toBeVisible();
  await expect(page.locator(".offer-card h3").filter({ hasText: "Livebox Fibre" })).toBeVisible();
  await expect(page.locator(".offer-card h3").filter({ hasText: "THE BOX Fibre" })).toBeVisible();

  await page.locator(".mandate-toggle input").check();
  await page.getByRole("button", { name: "Approuver la decision" }).click();
  await page.getByRole("button", { name: "Mettre en place la decision" }).click();

  await expect(page.getByText("Le moteur d'action est lance")).toBeVisible();
  await expect(page.getByText("Automations outil lancees")).toBeVisible();
  await expect(page.getByText("Mise en place bouclee")).toBeVisible();
  await expect(page.getByText("Evolution visuelle des prix pour ancrer la reco dans le marche")).toBeVisible();
});
