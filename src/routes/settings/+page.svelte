<script lang="ts">
	import GotoButton from '$lib/components/utils/GotoButton.svelte';
	import { loadUserSettings, updateUserSettings, store_userSettings } from '$lib/userSettings';

	loadUserSettings();

	let apiKey: string | null = $store_userSettings?.apiKey;
	let name: string | null = $store_userSettings?.name;
</script>

<div class="flex items-center justify-between p-4">
	<p class="text-2xl font-bold">Settings</p>
	<GotoButton href="/" icon="mdi:home" />
</div>
<main class="flex flex-1 px-4">
	<form class="mb-4 flex flex-1 flex-col justify-between">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col">
				<label for="name">Your Name</label>
				<input
					class="w-full rounded-sm border-none bg-neutral-700 p-2 outline-none"
					bind:value={name}
					id="name"
					type="text"
				/>
			</div>
			<div class="flex flex-col">
				<label for="apikey">API Key</label>
				<input
					class="w-full rounded-sm border-none bg-neutral-700 p-2 outline-none"
					bind:value={apiKey}
					id="apikey"
					type="text"
				/>
			</div>
		</div>
		<div>
			<p>saved user settings:</p>
			<p>{$store_userSettings?.name}</p>
			<p>{$store_userSettings?.apiKey}</p>
		</div>
		<div class="flex w-full gap-20">
			<button on:click={() => updateUserSettings({ name, apiKey })} class="w-full bg-blue-500 py-2"
				>Save Settings</button
			>
			<button on:click={loadUserSettings} class="w-full bg-blue-500 py-2">Get Settings</button>
		</div>
	</form>
</main>
