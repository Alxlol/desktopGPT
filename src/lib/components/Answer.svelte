<script lang="ts">
	import { marked } from 'marked';
	import type { ChatMessage } from '$lib/types';

	export let message: ChatMessage;
</script>

<div class="mb-2 w-full">
	<p class="text-xs {message.author === 'AI' ? 'text-orange-500' : 'text-blue-500'}">
		{message.author === 'AI' ? 'AI' : 'You'}
	</p>
	{#if message.message.content}
		{@html marked.parse(message.message.content)}
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
