import { expect, test } from "@playwright/test";

const invoicePath = process.env.RENEGO_TEST_PDF;

test.skip(!invoicePath, "RENEGO_TEST_PDF n'est pas defini.");

test("analyse une facture Free et boucle le flow", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "Le dossier est maintenant operable sur une vraie facture Freebox.",
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

  await page.locator(".mandate-toggle input").check();
  await page.getByRole("button", { name: "Approuver la meilleure action" }).click();
  await page.getByRole("button", { name: "Executer le plan" }).click();

  await expect(page.getByText("Preuve locale creee: DOSSIER-1452905043-RETENTION.")).toBeVisible();
  await expect(page.getByText("Execution bouclee")).toBeVisible();
  await expect(page.getByText("Oui, il y a maintenant une vraie page stylisee d'evolution des prix")).toBeVisible();
});
