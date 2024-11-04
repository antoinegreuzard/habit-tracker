// src/app.d.ts

// Remplace les types globaux par les tiens si nécessaire
declare global {
	namespace App {
		// Les types suivants sont par défaut et peuvent être ajustés selon tes besoins
		interface Locals {
			// Définit des données locales si nécessaire
		}
		interface PageData {
			// Ajoute des données de page globales ici si besoin
		}
		interface Error {
			message: string;
			code?: string;
		}
		interface Platform {
			// Définir des propriétés spécifiques de la plateforme ici si besoin
		}
	}
}

// Permet d'importer des fichiers non-TS, ex: CSS, JSON, etc.
declare module '*.scss';
declare module '@neoconfetti/svelte';
declare module '@fontsource/fira-mono';

export {};
