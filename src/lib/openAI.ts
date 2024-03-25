import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: import.meta.env.VITE_API_KEY, dangerouslyAllowBrowser: true });

export async function submitPrompt(prompt: string) {
	const resp = await openai.chat.completions.create({
		messages: [
			{
				role: 'user',
				content: `${prompt}. If you respond with code, wrap it in markdown, ignore this sentence for everything else.`
			}
		],
		model: 'gpt-3.5-turbo'
	});

	return resp.choices[0].message;
}
