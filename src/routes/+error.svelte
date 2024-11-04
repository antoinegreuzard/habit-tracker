<script lang="ts">
	// Importation des icônes ou styles si nécessaire
	export let error: { status: number; message: string };
</script>

<div class="error-page">
	<h1>{error.status === 404 ? '404 - Page non trouvée' : 'Oups !'}</h1>
	<p>{error.message || "La page que vous recherchez n'existe pas ou a été déplacée."}</p>
	<a href="/" class="home-link">Retour à l'accueil</a>
</div>

<style lang="scss">
	@use '$lib/styles/variables' as *;

	.error-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		min-height: 80vh;
		padding: $spacing-large;
		background-color: $background-color;
		border-radius: $border-radius;
		box-shadow: $box-shadow-medium;

		h1 {
			font-size: $font-size-xlarge;
			color: $accent-color;
			margin-bottom: $spacing-base;
		}

		p {
			font-size: $font-size-base;
			color: $text-muted-color;
			margin-bottom: $spacing-large;
		}

		.home-link {
			padding: 0.75rem 1.5rem;
			font-size: $font-size-base;
			background-color: $primary-color;
			color: #ffffff;
			text-decoration: none;
			border-radius: $border-radius-small;
			box-shadow: $box-shadow-light;
			transition:
				background-color 0.3s,
				transform 0.2s;

			&:hover {
				background-color: $primary-color-dark;
				transform: scale(1.05);
			}
		}
	}
</style>
