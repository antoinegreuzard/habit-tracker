<!-- src/lib/components/HabitList.svelte -->
<script lang="ts">
	import { habitsStore } from '$lib/stores/habitsStore';
	import HabitCard from '$lib/components/HabitCard.svelte';
</script>

<style lang="scss">
  .habit-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .empty-message {
    text-align: center;
    color: #666;
    font-size: 1rem;
    margin-top: 2rem;
  }
</style>

<div class="habit-list">
	{#if $habitsStore.length > 0}
		{#each $habitsStore as habit (habit.id)}
			<HabitCard {habit} />
		{/each}
	{:else}
		<div class="empty-message">
			Aucune habitude n'a été ajoutée. Commencez en ajoutant une nouvelle habitude !
		</div>
	{/if}
</div>
