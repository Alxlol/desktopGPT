<script lang="ts">
	import type { ChatEntry } from '$lib/chat';
	import { marked } from 'marked';

	export let chatEntry: ChatEntry;
</script>

<div class="mb-2 w-full">
	<p class="text-xs {chatEntry.author === 'AI' ? 'text-orange-500' : 'text-blue-500'}">
		{chatEntry.author === 'AI' ? 'AI' : 'You'}
	</p>
	{#if chatEntry.message}
		{@html marked.parse(chatEntry.message)}
	{/if}
</div>

<style>
	:global(code) {
		padding-inline: 6px;
		border-radius: 1rem;
	}

	:global(pre) {
		padding: 1rem;
		width: 100%;
		display: flex;
		background-color: rgb(95, 95, 95);
		padding: 1.2rem;
		width: 100%;
		border-radius: 0.2rem;
		overflow: auto;
		margin-block: 1rem;
	}
</style>
