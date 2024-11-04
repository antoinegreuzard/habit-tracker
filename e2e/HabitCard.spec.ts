// e2e/HabitList.spec.ts
import { test, expect } from '@playwright/test';

test('should display confetti when habit is marked as completed', async ({ page }) => {
	// Naviguer vers la page contenant HabitCard
	await page.goto('/');

	// Localiser le bouton de complétion de l'habitude
	const completeButton = page.locator('.complete-button');

	// Vérifier que le bouton affiche "Compléter"
	await expect(completeButton).toHaveText('Compléter', { timeout: 10000 });

	// Cliquer sur le bouton pour marquer l'habitude comme complétée
	await completeButton.click();

	// Vérifier que le bouton affiche "Complété" après le clic
	await expect(completeButton).toHaveText('Complété', { timeout: 10000 });

	// Vérifier que les confettis apparaissent (par la présence de l'élément Confetti)
	const confetti = page.locator('canvas');
	await expect(confetti).toBeVisible({ timeout: 10000 });
});
