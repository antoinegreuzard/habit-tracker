<!-- src/routes/habits/+page.svelte -->
<script lang="ts">
	import HabitList from '$lib/components/HabitList.svelte';
	import { addHabit } from '$lib/stores/habitsStore';

	let newHabitName = '';
	let frequency = 'daily';

	// Fonction pour ajouter une nouvelle habitude
	function handleAddHabit() {
		if (newHabitName.trim()) {
			addHabit(newHabitName, frequency as 'daily' | 'weekly' | 'monthly');
			newHabitName = ''; // Réinitialiser le champ de saisie
		}
	}
</script>

<style lang="scss">
  .habit-page {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 600px;
    margin: 0 auto;
  }

  .add-habit-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .add-habit-form input,
  .add-habit-form select,
  .add-habit-form button {
    padding: 0.5rem;
    font-size: 1rem;
  }

  .habit-title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
</style>

<div class="habit-page">
	<h1 class="habit-title">Suivi des Habitudes</h1>

	<div class="add-habit-form">
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
		<button on:click={handleAddHabit}>Ajouter une habitude</button>
	</div>

	<HabitList />
</div>
