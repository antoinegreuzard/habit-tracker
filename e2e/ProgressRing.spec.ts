// tests/ProgressRing.spec.ts
import { test, expect } from '@playwright/test';

test('should display the correct progress percentage', async ({ page }) => {
	// Naviguer vers la page de test avec ProgressRing
	await page.goto('/');

	// Vérifier que le texte de progression est affiché
	const progressText = page.locator('.progress-ring__text');
	await expect(progressText).toContainText('50%', { timeout: 10000 });
});
