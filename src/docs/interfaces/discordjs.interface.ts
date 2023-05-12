import { Doc, DocElement } from 'discordjs-docs-parser';
import { bold, underscore } from 'discord.js';

export namespace DiscordJS {
	const extractGenericTypeInfill = (type: string): string => {
		const match = /<(?<type>[A-Za-z]+)>/.exec(type);
		return match?.groups?.type ?? type;
	};

	const formatInheritance = (prefix: string, inherits: string[][], doc: Doc): string => {
		const res = inherits.flat(5);

		const inheritedLinks = res
			.map(element => doc.get(extractGenericTypeInfill(element))?.link)
			.filter(Boolean);

		return inheritedLinks.length ? ` (${prefix} ${inheritedLinks.join(' and ')})` : '';
	};

	export function resolveElementString(element: DocElement, doc: Doc): string {
		const parts = [];

		switch (element.docType) {
			case 'event':
				parts.push(`${bold('(event)')} `);
				break;
		}

		if (element.static) {
			parts.push(`${bold('(static)')} `);
		}

		parts.push(bold(underscore(element.link)));

		if (element.extends) {
			parts.push(formatInheritance('extends', element.extends, doc));
		}

		if (element.access === 'private') {
			parts.push(` ${bold('PRIVATE')}`);
		}

		if (element.deprecated) {
			parts.push(` ${bold('DEPRECATED')}`);
		}

		return parts.join('');
	}
}
