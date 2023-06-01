<script lang="ts">
	import Textfield from '@smui/textfield';

	export let value: string;
	export let label: string;
	export let disabled: boolean = false;
</script>

<Textfield {disabled} style="width: 100%; margin: 10px 0;" variant="outlined" bind:value {label} />
