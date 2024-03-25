<script lang="ts">
	import type { ChatCompletionMessage } from 'openai/resources/index.mjs';
	import Answer from './Answer.svelte';
	import { afterUpdate } from 'svelte';
	import Loader from './Loader.svelte';
	import GotoButton from './utils/GotoButton.svelte';

	let chat: HTMLDivElement;
	export let loading: boolean;
	export let responses: ChatCompletionMessage[];

	function scrollToBottom() {
		if (chat) {
			chat.scrollTop = chat.scrollHeight;
		}
	}

	afterUpdate(scrollToBottom);
</script>

<div bind:this={chat} class="flex-1 overflow-scroll overflow-x-hidden p-4">
	<div class="mb-2 flex items-center justify-between">
		<p>Hello, how may I help you today?</p>
		<GotoButton icon="mdi:settings" href="/settings" />
	</div>
	{#each responses as response}
		<p><Answer {response} /></p>
	{/each}
	<Loader {loading} />
</div>
