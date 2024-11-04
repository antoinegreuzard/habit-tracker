<!-- src/lib/components/HabitList.svelte -->
<script lang="ts">
	import { habitsStore } from '$lib/stores/habitsStore';
	import HabitCard from '$lib/components/HabitCard.svelte';
</script>

<div class="habit-list">
	{#if $habitsStore.length > 0}
		{#each $habitsStore as habit (habit.id)}
			<HabitCard {habit} />
		{/each}
	{:else}
		<div class="empty-message">
			<p>Aucune habitude n'a été ajoutée.</p>
			<p>Commencez en ajoutant une nouvelle habitude !</p>
		</div>
	{/if}
</div>

<style lang="scss">
	@import '$lib/styles/variables.scss';

	.habit-list {
		display: flex;
		flex-direction: column;
		gap: $spacing-base;
		padding: $spacing-base;
		background-color: $background-color;
		border-radius: $border-radius;
		box-shadow: $box-shadow-light;
	}

	.empty-message {
		text-align: center;
		color: $text-muted-color;
		font-size: $font-size-large;
		margin-top: $spacing-large;
		padding: $spacing-large;
		background-color: $secondary-color;
		border-radius: $border-radius-small;
		box-shadow: $box-shadow-medium;
		animation: fadeIn 0.5s ease-in-out;

		p {
			margin: 0;
			line-height: 1.6;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
