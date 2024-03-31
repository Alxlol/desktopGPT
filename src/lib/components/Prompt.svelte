<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import TextInput from './primatives/TextInput.svelte';

	export let prompt: string = '';
	export let handleSubmit: EventHandler;
</script>

<form on:submit|preventDefault={handleSubmit} class="flex h-full gap-4 p-4">
	<TextInput bind:value={prompt} />
	<button class="rounded-lg bg-blue-500 px-6 hover:bg-blue-400">😎</button>
</form>
