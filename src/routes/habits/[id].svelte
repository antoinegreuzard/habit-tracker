<!-- src/routes/habits/[id].svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { habitsStore, markHabitCompleted } from '$lib/stores/habitsStore';
	import ProgressRing from '$lib/components/ProgressRing.svelte';
	import { formatDate } from '$lib/utils/formatDate';
	import { get } from 'svelte/store';

	let habitId: string;
	let habit;
	let today = new Date();

	// Récupère l'ID de la route pour afficher l'habitude correspondante
	$: habitId = $page.params.id;
	console.log(habitId);
	$: habit = get(habitsStore).find((h) => h.id === habitId);

	// Calcul de la progression en pourcentage
	$: progress = habit
		? (habit.completedDates.length / 30) * 100 // Suppose un objectif de 30 jours
		: 0;

	// Marquer l'habitude comme complétée pour aujourd'hui
	function completeToday() {
		if (habit) {
			markHabitCompleted(habit.id, today);
		}
	}
</script>

{#if habit}
	<div class="habit-details">
		<h1 class="habit-title">{habit.name}</h1>
		<p>Fréquence : {habit.frequency}</p>

		<div class="progress-section">
			<ProgressRing {progress} />
			<p>Progression : {Math.round(progress)}%</p>
		</div>

		<button
			class="complete-button"
			on:click={completeToday}
			disabled={habit.completedDates.some((date) => formatDate(date) === formatDate(today))}
		>
			{habit.completedDates.some((date) => formatDate(date) === formatDate(today))
				? "Complété aujourd'hui"
				: 'Marquer comme complété'}
		</button>
	</div>
{:else}
	<p>Habitude non trouvée.</p>
{/if}

<style lang="scss">
	.habit-details {
		max-width: 600px;
		margin: 0 auto;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	.habit-title {
		font-size: 1.8rem;
		font-weight: bold;
		text-align: center;
	}

	.progress-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.complete-button {
		padding: 0.75rem 1.5rem;
		border: none;
		border-radius: 0.25rem;
		cursor: pointer;
		background-color: #4caf50;
		color: white;
		font-size: 1rem;
	}
</style>
