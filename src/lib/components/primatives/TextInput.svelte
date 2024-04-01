<script lang="ts">
	export let value: string | null;
	export let id: string = '';
</script>

<input
	bind:value
	{id}
	on:keydown
	on:input
	class="w-full rounded-xl border-none bg-neutral-800 p-2 px-4 outline-none"
	type="text"
/>
