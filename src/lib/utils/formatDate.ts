// src/lib/utils/formatDate.ts

/**
 * Formate une date en chaîne de caractères lisible.
 * @param date - La date à formater
 * @param locale - La langue pour la localisation (ex. 'fr-FR' pour le français)
 * @param options - Options de formatage pour l'affichage
 * @returns La date formatée en chaîne de caractères
 */
export function formatDate(
	date: Date,
	locale = 'fr-FR',
	options?: Intl.DateTimeFormatOptions
): string {
	const formatOptions: Intl.DateTimeFormatOptions = options || {
		year: 'numeric',
		month: 'long',
		day: '2-digit'
	};

	return new Intl.DateTimeFormat(locale, formatOptions).format(date);
}
