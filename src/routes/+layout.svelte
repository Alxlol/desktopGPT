<script>
	import '../app.pcss';
	import { onMount } from 'svelte';
	import { loadUserSettings } from '$lib/userSettings';
	import NavBar from '$lib/components/nav/NavBar.svelte';

	onMount(() => {
		loadUserSettings();
	});
</script>

<div class="flex min-h-screen flex-col bg-neutral-900 text-white">
	<slot />
</div>

<style>
	div {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
</style>
