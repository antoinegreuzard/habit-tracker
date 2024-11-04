// src/stores/habitsStore.ts

import { writable } from 'svelte/store';

// Définition de l'interface pour une habitude
export interface Habit {
	id: string;
	name: string;
	frequency: 'daily' | 'weekly' | 'monthly'; // Fréquence de l'habitude
	completedDates: Date[]; // Liste des dates où l'habitude a été complétée
}

// Initialisation du store avec quelques données de test (optionnel)
const initialHabits: Habit[] = [
	{
		id: '1',
		name: "Boire de l'eau",
		frequency: 'daily',
		completedDates: []
	},
	{
		id: '2',
		name: 'Faire du sport',
		frequency: 'weekly',
		completedDates: []
	}
];

// Création du store d'habitudes
export const habitsStore = writable<Habit[]>(initialHabits);

// Fonction pour ajouter une habitude
export function addHabit(name: string, frequency: 'daily' | 'weekly' | 'monthly') {
	habitsStore.update((habits) => [
		...habits,
		{
			id: crypto.randomUUID(), // Génère un ID unique
			name,
			frequency,
			completedDates: []
		}
	]);
}

// Fonction pour marquer une habitude comme complétée pour une date donnée
export function markHabitCompleted(id: string, date: Date) {
	habitsStore.update((habits) =>
		habits.map((habit) => {
			if (habit.id === id) {
				return {
					...habit,
					completedDates: [...habit.completedDates, date]
				};
			}
			return habit;
		})
	);
}

// Fonction pour supprimer une habitude
export function removeHabit(id: string) {
	habitsStore.update((habits) => habits.filter((habit) => habit.id !== id));
}
