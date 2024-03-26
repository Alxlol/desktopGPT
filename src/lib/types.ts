import type { ChatCompletionMessage } from 'openai/resources/index.mjs';

export type ChatMessage = {
	message: ChatCompletionMessage;
	author: 'User' | 'AI';
};
