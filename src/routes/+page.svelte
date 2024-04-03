<script lang="ts">
	import { addChatEntry, clearChat } from '$lib/chat';
	import Chat from '$lib/components/Chat.svelte';
	import Prompt from '$lib/components/Prompt.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';
	import { submitPrompt } from '$lib/openAI';
	import type { ChatCompletionMessage } from 'openai/resources/index.mjs';

	let prompt: string;
	let loading: boolean = false;
	let error: string;

	async function submitPromt() {
		let localPrompt = prompt;
		prompt = '';
		if (error) {
			error = '';
		}

		if (localPrompt === '') {
			return;
		} else if (localPrompt === '/clear') {
			clearChat();
			return;
		}
		loading = true;
		addChatEntry({ message: localPrompt, author: 'User' });
		try {
			let response: ChatCompletionMessage = await submitPrompt(localPrompt);
			addChatEntry({ message: response.content as string, author: 'AI' });
			loading = false;
		} catch (err) {
			error = err as string;
			loading = false;
		}
	}
</script>

<main class="flex max-h-screen flex-1 flex-col">
	<NavBar />
	<Chat {loading} {error} />
	<Prompt bind:prompt handleSubmit={submitPromt} />
</main>
