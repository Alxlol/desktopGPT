<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	export let prompt: string = '';
	export let handleSubmit: EventHandler;
</script>

<form on:submit|preventDefault={handleSubmit} class="flex h-full gap-4 p-4">
	<input
		bind:value={prompt}
		class="w-full rounded-sm border-none bg-neutral-700 p-2 outline-none"
		type="text"
	/>
	<button class="rounded-sm bg-blue-500 px-6 hover:bg-blue-400">😎</button>
</form>
