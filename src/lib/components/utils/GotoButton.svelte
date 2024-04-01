<script lang="ts">
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';

	export let href: string;
	export let icon: string;
	export let title: string;
</script>

<button {title} on:click={() => goto(href)}>
	<Icon width="24" height="24" {icon} />
</button>
