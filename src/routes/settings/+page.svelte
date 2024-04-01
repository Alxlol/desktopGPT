<script lang="ts">
	import TextInput from '$lib/components/primatives/TextInput.svelte';
	import GotoButton from '$lib/components/utils/GotoButton.svelte';
	import { restartOpenAIClient, validateKey } from '$lib/openAI';
	import { updateUserSettings, store_userSettings } from '$lib/userSettings';
	import Icon from '@iconify/svelte';

	let apiKey: string | null = $store_userSettings?.apiKey;
	let correctKey: boolean = validateKey(apiKey);

	function handleValueChange() {
		correctKey = validateKey(apiKey);
		updateUserSettings({ apiKey });
		if (correctKey === true) {
			restartOpenAIClient();
		}
	}
</script>

<div class="flex items-center justify-between p-4">
	<p class="text-2xl font-bold">Settings</p>
	<GotoButton title={'Home'} href="/" icon="mdi:home" />
</div>
<main class="flex flex-1 px-4">
	<form class="mb-4 flex flex-1 flex-col justify-between">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col">
				<label for="apikey">API Key</label>
				<div class="relative">
					<TextInput id="apiKey" on:input={handleValueChange} bind:value={apiKey} />
					<span class="absolute right-0 top-0 p-2 {correctKey ? 'text-green-500' : 'text-red-500'}">
						<Icon
							width="24"
							height="24"
							icon={correctKey ? 'carbon:checkmark-filled' : 'charm:circle-cross'}
						/>
					</span>
				</div>
				<p class="mt-1 text-sm italic">
					Go to https://platform.openai.com/api-keys, create a new API key, copy and paste it here.
				</p>
			</div>
		</div>
	</form>
</main>
