<div>
  <Button on:click={() => clicked++} variant="raised">
    <Label>クリック！</Label>
  </Button>
</div>

<pre>クリック回数： {clicked}</pre>

<script lang="ts">
  import Button, {Label} from '@smui/button';

  let clicked = 0;
</script>
