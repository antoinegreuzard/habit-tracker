<div class="container">
	<header>Habit Tracker</header>

	<main>
		<slot />
	</main>

	<footer>
		&copy; {new Date().getFullYear()} Habit Tracker - Tous droits réservés
	</footer>
</div>

<!-- src/routes/+layout.svelte -->

<style lang="scss">
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 1rem;
	}

	header {
		text-align: center;
		padding: 1rem 0;
		font-size: 1.5rem;
		font-weight: bold;
		background-color: #f8f8f8;
		border-bottom: 1px solid #ddd;
	}

	main {
		margin-top: 1rem;
	}

	footer {
		text-align: center;
		padding: 1rem 0;
		font-size: 0.875rem;
		color: #777;
		border-top: 1px solid #ddd;
		margin-top: 2rem;
	}
</style>
