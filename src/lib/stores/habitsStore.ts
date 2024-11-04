// src/stores/habitsStore.ts

import { writable } from 'svelte/store';

// Définition de l'interface pour une habitude
export interface Habit {
	id: string;
	name: string;
	frequency: 'daily' | 'weekly' | 'monthly';
	completedDates: Date[];
}

// Fonction pour charger les habitudes depuis localStorage (côté navigateur uniquement)
function loadHabitsFromLocalStorage(): Habit[] {
	if (typeof localStorage !== 'undefined') {
		const storedHabits = localStorage.getItem('habits');
		return storedHabits
			? JSON.parse(storedHabits, (key, value) => {
					// Convertit les dates de format JSON en objets Date
					return key === 'completedDates' ? value.map((date: string) => new Date(date)) : value;
				})
			: [];
	}
	return []; // Retourne un tableau vide si localStorage n'est pas disponible
}

// Initialisation du store avec les habitudes chargées ou les valeurs par défaut
const initialHabits: Habit[] = loadHabitsFromLocalStorage();
export const habitsStore = writable<Habit[]>(initialHabits);

// Enregistre chaque mise à jour du store dans localStorage (côté navigateur uniquement)
if (typeof localStorage !== 'undefined') {
	habitsStore.subscribe((habits) => {
		localStorage.setItem('habits', JSON.stringify(habits));
	});
}

// Fonction pour ajouter une habitude
export function addHabit(name: string, frequency: 'daily' | 'weekly' | 'monthly') {
	habitsStore.update((habits) => [
		...habits,
		{
			id: crypto.randomUUID(),
			name,
			frequency,
			completedDates: []
		}
	]);
}

// Fonction pour marquer une habitude comme complétée
export function markHabitCompleted(id: string, date: Date) {
	habitsStore.update((habits) =>
		habits.map((habit) => {
			if (
				habit.id === id &&
				!habit.completedDates.some((d) => d.toDateString() === date.toDateString())
			) {
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
