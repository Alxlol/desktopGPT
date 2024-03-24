<script lang="ts">
	import Chat from '$lib/components/Chat.svelte';
	import Prompt from '$lib/components/Prompt.svelte';
	import { submitPrompt } from '$lib/openAI';
	import type { ChatCompletionMessage } from 'openai/resources/index.mjs';

	let chat: HTMLDivElement;
	let prompt: string;
	let loading: boolean = false;
	let responses: ChatCompletionMessage[] = [];

	async function submitPromt() {
		if (prompt === '') {
			console.log('no message, return empty');
			return;
		}
		responses.push({ content: prompt, role: 'assistant' });
		responses = [...responses];
		//Get response
		let response: ChatCompletionMessage = await submitPrompt(prompt);
		responses.push(response);
		responses = [...responses];
	}
</script>

<main class="flex max-h-screen flex-1 flex-col border-2">
	<Chat bind:chat bind:responses />
	<Prompt bind:prompt handleSubmit={submitPromt} />
</main>
