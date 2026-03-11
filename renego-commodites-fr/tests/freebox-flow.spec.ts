import { expect, test } from "@playwright/test";

const invoicePath = process.env.RENEGO_TEST_PDF;

test.skip(!invoicePath, "RENEGO_TEST_PDF n'est pas defini.");

test("analyse une facture Free et boucle le flow", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "Diagnostic clair, recommendation poussee, execution outillee.",
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
  await expect(page.getByText("Le gain est assez fort pour pousser un changement maintenant vers SFR.")).toBeVisible();
  await expect(page.getByText("144 EUR / an").first()).toBeVisible();
  await expect(page.getByText("Site officiel SFR")).toBeVisible();

  await page.locator(".mandate-toggle input").check();
  await page.getByRole("button", { name: "Approuver la decision" }).click();
  await page.getByRole("button", { name: "Mettre en place la decision" }).click();

  await expect(page.getByText("Le moteur d'action est lance")).toBeVisible();
  await expect(page.getByText("Automations outil lancees")).toBeVisible();
  await expect(page.getByText("Mise en place bouclee")).toBeVisible();
  await expect(page.getByText("Evolution visuelle des prix pour ancrer la reco dans le marche")).toBeVisible();
});
