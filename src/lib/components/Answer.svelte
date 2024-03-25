<script lang="ts">
	import type { ChatCompletionMessage } from 'openai/resources/index.mjs';
	import { marked } from 'marked';

	export let response: ChatCompletionMessage;
</script>

<div class="my-2 w-full">
	{#if response.content}
		{@html marked.parse(response.content)}
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
		background-color: grey;
		padding: 1.2rem;
		width: 100%;
		border-radius: 1rem;
		overflow: auto;
		margin-block: 1rem;
	}
</style>
