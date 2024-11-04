<!-- src/routes/+layout.svelte -->
<div class="container">
	<header>
		<h1>Habit Tracker</h1>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		&copy; {new Date().getFullYear()} Habit Tracker - Tous droits réservés
	</footer>
</div>

<style lang="scss">
	@use 'sass:color';
	@use '$lib/styles/variables' as *;

	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: $spacing-base;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: $secondary-color;
		border-radius: $border-radius;
		box-shadow: $box-shadow-medium;
	}

	header {
		text-align: center;
		padding: $spacing-large 0;
		background-color: $primary-color;
		color: #ffffff;
		border-radius: $border-radius-small;
		box-shadow: $box-shadow-light;
		margin-bottom: $spacing-base;

		h1 {
			font-size: $font-size-large;
			font-weight: bold;
			margin: 0;
			transition:
				transform 0.2s ease-in-out,
				color 0.3s;
		}

		&:hover h1 {
			transform: scale(1.05);
			color: color.scale($secondary-color, $lightness: 10%);
		}
	}

	main {
		flex: 1;
		margin-top: $spacing-base;
	}

	footer {
		text-align: center;
		padding: $spacing-base 0;
		font-size: $font-size-small;
		color: $text-muted-color;
		border-top: 1px solid color.scale($text-muted-color, $lightness: 30%);
		margin-top: $spacing-large;
		background-color: $secondary-color;
		border-radius: $border-radius-small;
		box-shadow: $box-shadow-light;
	}
</style>
