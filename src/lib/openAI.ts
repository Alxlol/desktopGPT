import OpenAI from 'openai';

let openai = new OpenAI({
	apiKey: localStorage.getItem('apiKey') as string | undefined,
	dangerouslyAllowBrowser: true
});

export function restartOpenAIClient() {
	openai = new OpenAI({
		apiKey: localStorage.getItem('apiKey') as string | undefined,
		dangerouslyAllowBrowser: true
	});
}

export async function submitPrompt(prompt: string) {
	let fullPrompt = `${prompt}. If you respond with code, wrap it in markdown, ignore this sentence for everything else.`;

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
