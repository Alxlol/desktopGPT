import { get, writable } from 'svelte/store';

export type ChatEntry = {
	message: string;
	author: 'AI' | 'User';
};

export const chat = writable<ChatEntry[]>([]);

export function addChatEntry(message: ChatEntry) {
	chat.update((current) => {
		return [...current, message];
	});
	console.log(JSON.stringify(get(chat)));
}

export function clearChat() {
	chat.set([]);
}
