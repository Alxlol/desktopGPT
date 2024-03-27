<script lang="ts">
	import Icon from '@iconify/svelte';
	export let loading: boolean;
</script>

{#if loading}
	<div class="my-6 flex items-center justify-center">
		<Icon width="30" height="30" icon="line-md:loading-twotone-loop" />
	</div>
{/if}
