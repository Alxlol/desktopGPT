<script lang="ts">
	import GotoButton from '$lib/components/utils/GotoButton.svelte';
	import { restartOpenAIClient, validateKey } from '$lib/openAI';
	import { updateUserSettings, store_userSettings } from '$lib/userSettings';

	let apiKey: string | null = $store_userSettings?.apiKey;
	let name: string | null = $store_userSettings?.name;
	let correctKey: boolean = validateKey(apiKey);

	function handleValueChange() {
		correctKey = validateKey(apiKey);
		console.log(correctKey);
		updateUserSettings({ name, apiKey });
		if (correctKey === true) {
			restartOpenAIClient();
		}
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
					class="w-full rounded-sm border-none bg-neutral-700 p-2 outline-none {correctKey
						? 'outline outline-1 outline-green-500'
						: 'outline outline-1 outline-red-500'}"
					bind:value={apiKey}
					on:input={handleValueChange}
					id="apikey"
					type="text"
				/>
				<p class="mt-1 text-sm italic">
					Go to https://platform.openai.com/api-keys, create a new API key, copy and paste it here.
				</p>
			</div>
		</div>
	</form>
</main>
