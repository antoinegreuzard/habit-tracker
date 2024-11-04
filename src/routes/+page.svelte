<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { habitsStore, addHabit, markHabitCompleted } from '$lib/stores/habitsStore';
	import { Habit } from '$lib/stores/habitsStore';
	import { formatDate } from '$lib/utils/formatDate';

	let newHabitName = '';
	let frequency = 'daily';
	let today = new Date();

	// Fonction pour ajouter une nouvelle habitude
	function handleAddHabit() {
		if (newHabitName.trim()) {
			addHabit(newHabitName, frequency as Habit['frequency']);
			newHabitName = ''; // Réinitialiser le champ de saisie
		}
	}

	// Marquer une habitude comme complétée pour aujourd'hui
	function completeHabit(habit: Habit) {
		markHabitCompleted(habit.id, today);
	}
</script>

<style lang="scss">
  .habit-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .habit-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
  }

  .add-habit {
    display: flex;
    gap: 0.5rem;
  }

  .add-habit input,
  .add-habit select,
  .add-habit button {
    padding: 0.5rem;
  }
</style>

<h1>Habit Tracker</h1>

<div class="add-habit">
	<input
		type="text"
		bind:value={newHabitName}
		placeholder="Nom de l'habitude"
		aria-label="Nom de l'habitude"
	/>
	<select bind:value={frequency} aria-label="Fréquence">
		<option value="daily">Quotidien</option>
		<option value="weekly">Hebdomadaire</option>
		<option value="monthly">Mensuel</option>
	</select>
	<button on:click={handleAddHabit}>Ajouter</button>
</div>

<div class="habit-list">
	{#each $habitsStore as habit}
		<div class="habit-item">
			<span>{habit.name} - {habit.frequency}</span>
			<button on:click={() => completeHabit(habit)}>
				{habit.completedDates.some(date => formatDate(date) === formatDate(today)) ? 'Complété' : 'Compléter'}
			</button>
		</div>
	{/each}
</div>
