<script lang="ts">
	import Button from '@smui/button';
	import { Label } from '@smui/data-table';
	import { createEventDispatcher } from 'svelte';

	export let dispatchName: string;

	const dispatch = createEventDispatcher();
</script>

<Button on:click={() => dispatch(dispatchName)} color="secondary" variant="outlined">
	<Label>キャンセル</Label>
</Button>
