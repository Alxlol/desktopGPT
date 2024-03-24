import OpenAI from 'openai';
import type { ChatCompletionMessage } from 'openai/resources/index.mjs';

let apiKey = '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';

const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });

export async function submitPrompt(prompt: string) {
	const resp = await openai.chat.completions.create({
		messages: [{ role: 'user', content: prompt }],
		model: 'gpt-3.5-turbo'
	});

	return resp.choices[0].message;
}
