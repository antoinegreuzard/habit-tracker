<!-- src/lib/components/HabitCard.svelte -->
<script lang="ts">
	import { formatDate } from '$lib/utils/formatDate';
	import { type Habit, markHabitCompleted } from '$lib/stores/habitsStore';
	import Confetti from '@neoconfetti/svelte';

	export let habit: Habit;
	let today = new Date();
	let showConfetti = false;

	// Fonction pour marquer l'habitude comme complétée aujourd'hui
	function completeToday() {
		markHabitCompleted(habit.id, today);
		showConfetti = true;
		setTimeout(() => (showConfetti = false), 2000); // Arrêter les confettis après 2 secondes
	}

	// Vérifie si l'habitude a été complétée aujourd'hui
	const isCompletedToday = habit.completedDates.some(
		(date) => formatDate(date) === formatDate(today)
	);
</script>

<div class="habit-card">
	{#if showConfetti}
		<Confetti confettiCount={200} spread={120} gravity={0.5} />
	{/if}

	<div class="habit-details">
		<span class="habit-name">{habit.name}</span>
		<span class="habit-frequency">Fréquence : {habit.frequency}</span>
	</div>
	<button
		class="complete-button {isCompletedToday ? 'completed' : ''}"
		on:click={completeToday}
		disabled={isCompletedToday}
	>
		{isCompletedToday ? 'Complété' : 'Compléter'}
	</button>
</div>

<style lang="scss">
	@use 'sass:color';
	@import '$lib/styles/variables.scss';

	.habit-card {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: $spacing-base;
		border: 1px solid color.scale($secondary-color, $lightness: 40%);
		border-radius: $border-radius;
		background-color: $background-color;
		box-shadow: $box-shadow-light;
		transition:
			transform 0.2s ease-in-out,
			box-shadow 0.2s ease-in-out;

		&:hover {
			transform: scale(1.02);
			box-shadow: $box-shadow-medium;
		}
	}

	.habit-details {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.habit-name {
		font-size: $font-size-large;
		font-weight: bold;
		color: $primary-color-dark;
	}

	.habit-frequency {
		font-size: $font-size-small;
		color: $text-muted-color;
	}

	.complete-button {
		padding: 0.5rem 1.25rem;
		border: none;
		border-radius: $border-radius-small;
		cursor: pointer;
		background-color: $primary-color;
		color: #ffffff;
		font-weight: 600;
		transition:
			background-color 0.3s,
			box-shadow 0.2s,
			transform 0.1s;

		&:hover:not(:disabled) {
			background-color: $primary-color-dark;
			box-shadow: $box-shadow-light;
			transform: scale(1.05);
		}

		&:active {
			transform: scale(0.98);
		}

		&.completed {
			background-color: $text-muted-color;
			cursor: default;
			box-shadow: none;
		}

		&:disabled {
			cursor: not-allowed;
		}
	}
</style>
