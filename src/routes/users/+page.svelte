<div>
  <Button on:click={() => clicked++} variant="raised">
    <Label>クリック！</Label>
  </Button>
</div>

<pre>クリック回数： {clicked}</pre>

<Test></Test>

<script lang="ts">
	import Test from '$lib/components/Test.svelte';
  import Button, {Label} from '@smui/button';

  let clicked = 0;
</script>
