<!-- src/lib/components/HabitCard.svelte -->
<script lang="ts">
	import { Habit } from '$lib/stores/habitsStore';
	import { markHabitCompleted } from '$lib/stores/habitsStore';
	import { formatDate } from '$lib/utils/formatDate';

	export let habit: Habit;
	let today = new Date();

	// Fonction pour marquer l'habitude comme complétée aujourd'hui
	function completeToday() {
		markHabitCompleted(habit.id, today);
	}

	// Vérifie si l'habitude a été complétée aujourd'hui
	const isCompletedToday = habit.completedDates.some(
		(date) => formatDate(date) === formatDate(today)
	);
</script>

<style lang="scss">
  .habit-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .habit-details {
    display: flex;
    flex-direction: column;
  }

  .habit-name {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .habit-frequency {
    font-size: 0.875rem;
    color: #666;
  }

  .complete-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    background-color: #4caf50;
    color: white;
  }

  .complete-button.completed {
    background-color: #bbb;
    cursor: default;
  }
</style>

<div class="habit-card">
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
