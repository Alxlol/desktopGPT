import OpenAI from 'openai';
import { chat } from './chat';
import { get } from 'svelte/store';

let openai = new OpenAI({
	apiKey: localStorage.getItem('apiKey') as string | undefined,
	dangerouslyAllowBrowser: true
});

export function restartOpenAIClient() {
	console.log('restarting client ', localStorage.getItem('apiKey'));
	openai = new OpenAI({
		apiKey: localStorage.getItem('apiKey') as string | undefined,
		dangerouslyAllowBrowser: true
	});
}

export async function submitPrompt(prompt: string) {
	let fullPrompt = `${prompt}. Wrap all code snippets in markdown. For context, this is our conversation in json: ${JSON.stringify(get(chat))}, take it into consideration if it's relevant.`;

	const resp = await openai.chat.completions.create({
		messages: [
			{
				role: 'user',
				content: fullPrompt
			}
		],
		model: 'gpt-3.5-turbo'
	});
	return resp.choices[0].message;
}

export function validateKey(str: string | null) {
	if (str === null) {
		return false;
	}

	if (str.length !== 51) {
		return false;
	}

	const prefix = str.slice(0, 3);
	const suffix = str.slice(23, 31);

	if (prefix !== 'sk-' || suffix !== 'T3BlbkFJ') {
		return false;
	}

	return true;
}
