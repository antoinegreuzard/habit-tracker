<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { addHabit, type Habit, habitsStore, markHabitCompleted } from '$lib/stores/habitsStore';
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
			<span class="habit-info">
				<strong>{habit.name}</strong> - <em>{habit.frequency}</em>
			</span>
			<button
				on:click={() => completeHabit(habit)}
				class:completed={habit.completedDates.some(
					(date) => formatDate(date) === formatDate(today)
				)}
			>
				{habit.completedDates.some((date) => formatDate(date) === formatDate(today))
					? 'Complété'
					: 'Compléter'}
			</button>
		</div>
	{/each}
</div>

<style lang="scss">
	@use 'sass:color';
	@import '$lib/styles/variables.scss';

	h1 {
		text-align: center;
		font-size: $font-size-xlarge;
		color: $primary-color-dark;
		margin-bottom: $spacing-large;
	}

	.add-habit {
		display: flex;
		gap: $spacing-small;
		margin-bottom: $spacing-large;
		justify-content: center;
	}

	.add-habit input,
	.add-habit select {
		padding: 0.75rem;
		border: 1px solid color.scale($text-color, $lightness: 40%);
		border-radius: $border-radius-small;
		font-size: $font-size-base;
		background-color: $secondary-color;
		color: $text-color;
		box-shadow: $box-shadow-light;
		transition:
			border-color 0.3s,
			box-shadow 0.3s;

		&:focus {
			border-color: $primary-color;
			box-shadow: 0 0 6px rgba($primary-color, 0.4);
			outline: none;
		}
	}

	.add-habit button {
		padding: 0.75rem 1.5rem;
		font-size: $font-size-base;
		background-color: $accent-color;
		color: #ffffff;
		border: none;
		border-radius: $border-radius-small;
		cursor: pointer;
		transition:
			background-color 0.3s,
			transform 0.1s ease-in-out;

		&:hover {
			background-color: $accent-color-dark;
			transform: scale(1.05);
		}

		&:active {
			transform: scale(0.98);
		}
	}

	.habit-list {
		display: flex;
		flex-direction: column;
		gap: $spacing-base;
		margin-top: $spacing-base;
	}

	.habit-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: $spacing-base;
		border: 1px solid color.scale($text-color, $lightness: 40%);
		border-radius: $border-radius;
		background-color: $background-color;
		box-shadow: $box-shadow-light;
		transition:
			box-shadow 0.3s,
			transform 0.1s ease-in-out;

		&:hover {
			box-shadow: $box-shadow-medium;
			transform: scale(1.02);
		}

		.habit-info {
			font-size: $font-size-large;
			color: $text-color;
		}

		button {
			padding: 0.5rem 1rem;
			font-size: $font-size-small;
			border-radius: $border-radius-small;
			border: none;
			color: #ffffff;
			cursor: pointer;
			background-color: $primary-color;
			transition:
				background-color 0.3s,
				box-shadow 0.2s;

			&:hover {
				background-color: $primary-color-dark;
				box-shadow: $box-shadow-light;
			}

			&.completed {
				background-color: $text-muted-color;
				cursor: default;
			}
		}
	}
</style>
