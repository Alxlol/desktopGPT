import { get, writable } from 'svelte/store';

export type Chat = {
	entires: ChatEntry[];
};

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

export function loadChat(index: number) {}

export function clearChat() {
	chat.set([]);
}
