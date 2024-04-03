<script lang="ts">
	import ChatEntry from './ChatEntry.svelte';
	import { afterUpdate } from 'svelte';
	import Loader from './Loader.svelte';
	import { store_userSettings } from '$lib/userSettings';
	import { chat } from '$lib/chat';
	import NavBar from './nav/NavBar.svelte';

	export let loading: boolean;
	export let error: string;

	let chatElement: HTMLDivElement;
	function scrollToBottom() {
		if (chatElement) {
			chatElement.scrollTop = chatElement.scrollHeight;
		}
	}

	afterUpdate(() => {
		scrollToBottom();
	});
</script>

<div bind:this={chatElement} class="flex-1 overflow-auto overflow-x-hidden p-4">
	<div class="mb-2 flex items-center justify-between">
		<div>
			<p class="text-xs text-orange-500">AI</p>
			<p>
				{$store_userSettings?.apiKey
					? 'Hello, how may I help you today?'
					: 'It looks like you havent provided an API key yet, you can do so by clicking the settings button to the right'}
			</p>
		</div>
		<NavBar />
	</div>
	{#each $chat as chatEntry}
		<ChatEntry {chatEntry} />
	{/each}
	{#if error}
		<p class="italic"><span class="not-italic text-red-500">ERROR:</span> {error}</p>
	{/if}

	<Loader {loading} />
</div>
