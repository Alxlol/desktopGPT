<script lang="ts">
	import GotoButton from '$lib/components/utils/GotoButton.svelte';
	import { updateUserSettings, store_userSettings } from '$lib/userSettings';

	let apiKey: string | null = $store_userSettings?.apiKey;
	let name: string | null = $store_userSettings?.name;

	function handleValueChange() {
		updateUserSettings({ name, apiKey });
	}
</script>

<div class="flex items-center justify-between p-4">
	<p class="text-2xl font-bold">Settings</p>
	<GotoButton href="/" icon="mdi:home" />
</div>
<main class="flex flex-1 px-4">
	<form class="mb-4 flex flex-1 flex-col justify-between">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col">
				<label for="apikey">API Key</label>
				<input
					class="w-full rounded-sm border-none bg-neutral-700 p-2 outline-none"
					bind:value={apiKey}
					on:input={handleValueChange}
					id="apikey"
					type="text"
				/>
			</div>
		</div>
	</form>
</main>
