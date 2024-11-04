// tests/habitsStore.spec.ts
import { describe, it, expect } from 'vitest';
import { habitsStore, addHabit, markHabitCompleted, removeHabit } from '$lib/stores/habitsStore';

describe('habitsStore', () => {
	it('should add a habit', () => {
		addHabit('Test Habit', 'daily');
		habitsStore.subscribe((habits) => {
			const habit = habits.find((h) => h.name === 'Test Habit');
			expect(habit).toBeDefined();
			expect(habit?.frequency).toBe('daily');
		});
	});

	it('should mark a habit as completed', () => {
		const date = new Date();
		habitsStore.subscribe((habits) => {
			const habit = habits.find((h) => h.name === 'Test Habit');
			if (habit) {
				markHabitCompleted(habit.id, date);
				expect(habit.completedDates.some((d) => d.toDateString() === date.toDateString())).toBe(
					true
				);
			}
		});
	});

	it('should remove a habit', () => {
		habitsStore.subscribe((habits) => {
			const habit = habits.find((h) => h.name === 'Test Habit');
			if (habit) {
				removeHabit(habit.id);
				expect(habits.some((h) => h.id === habit.id)).toBe(false);
			}
		});
	});
});
