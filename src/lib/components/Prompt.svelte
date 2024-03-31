<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import TextInput from './primatives/TextInput.svelte';
	import { chat } from '$lib/chat';

	export let prompt: string = '';
	export let handleSubmit: EventHandler;
	let cycler: number = 0;

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
			prompt = $chat[$chat.length - 1 - cycler].message;
			cycler += 1;
			if (cycler >= $chat.length) {
				cycler = 0;
			}
			console.log($chat, cycler);
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="flex h-full gap-4 p-4">
	<TextInput bind:value={prompt} on:keydown={(e) => handleKeyDown(e)} />
	<button class="rounded-lg bg-blue-500 px-6 hover:bg-blue-400">😎</button>
</form>
