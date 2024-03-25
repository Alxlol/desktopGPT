<script lang="ts">
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';

	export let href: string;
	export let icon: string;
</script>

<button on:click={() => goto(href)}>
	<Icon width="20" height="20" {icon} />
</button>
