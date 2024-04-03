<script>
	import Icon from '@iconify/svelte';

	import GotoButton from '../utils/GotoButton.svelte';
	import { clearChat } from '$lib/chat';
</script>

<nav class="flex items-center justify-end p-4 py-2">
	<!-- <div class="flex items-center gap-2">
		<img class="w-8" src="app-icon.png" alt="" />
		<p class="font-bold">DesktopGPT</p>
	</div> -->

	<div class="flex gap-2">
		<button
			disabled
			title="New conversation (disabled)"
			class="flex text-neutral-500"
			on:click={clearChat}
		>
			<Icon width="24" height="24" icon="radix-icons:plus" />
		</button>
		<button title="Reset conversation" class="flex" on:click={clearChat}>
			<Icon width="24" height="24" icon="radix-icons:reset" />
		</button>
		<GotoButton title={'Settings'} icon="mdi:settings" href="/settings" />
	</div>
</nav>
