// tests/HabitList.spec.ts
import { test, expect } from '@playwright/test';

test('should display habit cards when habits are present', async ({ page }) => {
	await page.goto('/');

	const habitList = page.locator('.habit-list');
	await expect(habitList).toBeVisible({ timeout: 10000 });

	// Vérifier qu'il y a des cartes d'habitudes
	const habitCard = habitList.locator('.habit-card');
	await expect(habitCard).toHaveCount(2, { timeout: 10000 }); // Suppose que deux habitudes sont initialement présentes
});

test('should display empty message when no habits are present', async ({ page }) => {
	await page.goto('/');

	// Effacer le localStorage pour simuler une liste vide
	await page.evaluate(() => localStorage.clear());
	await page.reload();

	const emptyMessage = page.locator('.empty-message');
	await expect(emptyMessage).toBeVisible({ timeout: 10000 });
	await expect(emptyMessage).toContainText("Aucune habitude n'a été ajoutée.", { timeout: 10000 });
});
