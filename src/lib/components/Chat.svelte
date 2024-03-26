<script lang="ts">
	import Answer from './Answer.svelte';
	import { afterUpdate } from 'svelte';
	import Loader from './Loader.svelte';
	import GotoButton from './utils/GotoButton.svelte';
	import type { ChatMessage } from '$lib/types';

	export let loading: boolean;
	export let messages: ChatMessage[] = [];

	let chat: HTMLDivElement;
	function scrollToBottom() {
		if (chat) {
			chat.scrollTop = chat.scrollHeight;
		}
	}

	afterUpdate(scrollToBottom);
</script>

<div bind:this={chat} class="flex-1 overflow-scroll overflow-x-hidden p-4">
	<div class="mb-2 flex items-center justify-between">
		<div>
			<p class="text-xs text-orange-500">AI</p>
			<p>Hello, how may I help you today?</p>
		</div>
		<GotoButton icon="mdi:settings" href="/settings" />
	</div>
	{#each messages as message}
		<p><Answer {message} /></p>
	{/each}
	<Loader {loading} />
</div>
