<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import TextInput from './primatives/TextInput.svelte';
	import { chat } from '$lib/chat';

	export let prompt: string = '';
	export let handleSubmit: EventHandler;
	let cycler: number = 0;

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
			if ($chat[$chat.length - 1 - cycler].author === 'AI') {
				cycler += 1;
			}
			prompt = $chat[$chat.length - 1 - cycler].message;
			cycler += 1;
			if (cycler >= $chat.length) {
				cycler = 0;
			}
		}
	}

	function resetCycler() {
		cycler = 0;
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="flex h-full gap-4 p-4">
	<TextInput bind:value={prompt} on:input={resetCycler} on:keydown={(e) => handleKeyDown(e)} />
	<button class="">
		<div class="group w-10">
			<img class="transition-all group-hover:scale-110" src="app-icon.png" alt="" />
		</div>
	</button>
</form>
