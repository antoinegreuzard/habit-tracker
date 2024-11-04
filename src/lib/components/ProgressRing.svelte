<!-- src/lib/components/ProgressRing.svelte -->
<script lang="ts">
	export let progress = 0; // Le pourcentage de progression, de 0 à 100
	export let color = '#4caf50'; // Couleur de progression par défaut
	export let backgroundColor = '#e6e6e6'; // Couleur de fond par défaut

	// Configuration de l'anneau
	const radius = 50; // Rayon de l'anneau
	const stroke = 10; // Épaisseur du trait
	const normalizedRadius = radius - stroke * 0.5; // Rayon ajusté
	const circumference = 2 * Math.PI * normalizedRadius; // Circonférence totale de l'anneau

	// Calcul de la longueur du trait en fonction de la progression
	const strokeDashoffset = circumference - (progress / 100) * circumference;
</script>

<div class="progress-ring">
	<svg width="120" height="120">
		<circle
			class="progress-ring__background"
			stroke={backgroundColor}
			fill="transparent"
			stroke-width={stroke}
			r={normalizedRadius}
			cx="60"
			cy="60"
		/>
		<circle
			class="progress-ring__circle"
			stroke={color}
			fill="transparent"
			stroke-width={stroke}
			stroke-dasharray="{circumference} {circumference}"
			stroke-dashoffset={strokeDashoffset}
			r={normalizedRadius}
			cx="60"
			cy="60"
		/>
		<text x="50%" y="50%" text-anchor="middle" dy=".3em" class="progress-ring__text">
			{progress}%
		</text>
	</svg>
</div>

<style lang="scss">
	.progress-ring {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 120px;
		height: 120px;
		position: relative;
	}

	.progress-ring__background {
		transition: stroke-dashoffset 0.35s;
		transform: rotate(-90deg);
		transform-origin: 50% 50%;
	}

	.progress-ring__circle {
		transition: stroke-dashoffset 0.35s, stroke 0.35s;
		transform: rotate(-90deg);
		transform-origin: 50% 50%;
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
	}

	.progress-ring__text {
		font-size: 1.2rem;
		font-weight: bold;
		fill: #333;
	}
</style>
