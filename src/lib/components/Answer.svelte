<script lang="ts">
	import type { ChatCompletionMessage } from 'openai/resources/index.mjs';

	export let response: ChatCompletionMessage;
</script>

<div class="my-4">
	<p>{response.content}</p>
</div>
