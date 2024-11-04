// src/app.d.ts

declare global {
	namespace App {
		interface PageData {
			// Données spécifiques à une page (par exemple, des données chargées via `load`)
			habitId?: string;
			habitName?: string;
			progress?: number;
		}

		interface Error {
			// Structure des erreurs spécifiques
			message: string;
			code?: string;
		}
	}
}

// Permet d'importer des fichiers non-TS, ex : CSS, JSON, etc.
declare module '*.scss';
declare module '@neoconfetti/svelte';
declare module '@fontsource/fira-mono';

export {};
