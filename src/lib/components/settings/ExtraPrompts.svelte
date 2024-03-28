<script lang="ts">
	let extraPrompts: string[] = [];

	function addExtraPrompt() {
		extraPrompts.push('');
		extraPrompts = [...extraPrompts];
	}
</script>

<div>
	<div class="flex items-center gap-2">
		<label for="">Extra Prompts</label>
		<button on:click={addExtraPrompt} class="flex items-center justify-center text-lg font-bold"
			>+</button
		>
	</div>
	<div class="flex flex-col gap-2">
		{#each extraPrompts as prompt}
			<input
				value={prompt}
				type="text"
				class="w-full rounded-sm border-none bg-neutral-700 p-2 outline-none"
			/>
		{/each}
	</div>
</div>
