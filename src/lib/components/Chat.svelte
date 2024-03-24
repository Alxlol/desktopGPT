<script lang="ts">
	import type { ChatCompletionMessage } from 'openai/resources/index.mjs';
	import Answer from './Answer.svelte';

	export let chat: HTMLDivElement;
	export let responses: ChatCompletionMessage[];
</script>

<div bind:this={chat} class="scroll- flex-1 overflow-scroll overflow-x-hidden scroll-auto p-4">
	<p>Hello how may I help you today?</p>
	{#each responses as response}
		<p><Answer {response} /></p>
	{/each}
</div>
