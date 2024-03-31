import { writable } from 'svelte/store';

type Message = {
	message: string;
	author: 'AI' | 'User';
};

type Chat = {
	messages: Message[];
};

export const chat = writable<Chat>({ messages: [] });
