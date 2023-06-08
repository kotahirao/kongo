<script lang="ts">
	import Snackbar, { Label } from '@smui/snackbar';

	export let snackbar: Snackbar;
	export let label: string;
</script>

<Snackbar bind:this={snackbar} class="success">
	<Label>{label}</Label>
</Snackbar>
