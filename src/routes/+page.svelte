<script lang="ts">
	import Chat from '$lib/components/Chat.svelte';
	import Prompt from '$lib/components/Prompt.svelte';
	import { submitPrompt } from '$lib/openAI';
	import type { ChatMessage } from '$lib/types';
	import type { ChatCompletionMessage } from 'openai/resources/index.mjs';

	let prompt: string;
	let loading: boolean = false;
	let messages: ChatMessage[] = [];

	async function submitPromt() {
		let localPrompt = prompt;
		prompt = '';
		if (localPrompt === '') {
			return;
		} else if (localPrompt === '/clear') {
			messages = [];
			return;
		}
		loading = true;
		//Add Question
		messages.push({ message: { content: localPrompt, role: 'assistant' }, author: 'User' });
		messages = [...messages];
		//Get response
		let response: ChatCompletionMessage = await submitPrompt(localPrompt);
		messages.push({ message: response, author: 'AI' });
		messages = [...messages];
		loading = false;
	}
</script>

<main class="flex max-h-screen flex-1 flex-col">
	<Chat {loading} bind:messages />
	<Prompt bind:prompt handleSubmit={submitPromt} />
</main>
