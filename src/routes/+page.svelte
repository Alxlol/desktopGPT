<script lang="ts">
	import Chat from '$lib/components/Chat.svelte';
	import Prompt from '$lib/components/Prompt.svelte';
	import { submitPrompt } from '$lib/openAI';
	import type { ChatCompletionMessage } from 'openai/resources/index.mjs';

	let prompt: string;
	let loading: boolean = false;
	let responses: ChatCompletionMessage[] = [];

	async function submitPromt() {
		let localPrompt = prompt;
		prompt = '';
		if (localPrompt === '') {
			console.log('no message, return empty');
			return;
		} else if (localPrompt === '/clear') {
			responses = [];
			return;
		}
		loading = true;
		//Add Question
		responses.push({ content: localPrompt, role: 'assistant' });
		responses = [...responses];
		//Get response
		let response: ChatCompletionMessage = await submitPrompt(localPrompt);
		responses.push(response);
		responses = [...responses];
		loading = false;
	}
</script>

<main class="flex max-h-screen flex-1 flex-col">
	<Chat {loading} bind:responses />
	<Prompt bind:prompt handleSubmit={submitPromt} />
</main>
