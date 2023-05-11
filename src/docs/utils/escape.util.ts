export function escape(text: string) {
	return text.replace(/\|\|/g, '|\u200B|').replace(/\*/g, '\\*');
}
