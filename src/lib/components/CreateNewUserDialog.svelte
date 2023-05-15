<script lang="ts">
	import ApiFactory from '$lib/ApiFactory';
	import Button, { Label } from '@smui/button';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Textfield from '@smui/textfield';

	let open = false;
	let newUserName = '';

	const usersApi = ApiFactory.getusersApi();
	function createNewUser() {
    usersApi.createUsers({
      users: [{name: newUserName}]
    });
  }
</script>

<Button on:click={() => (open = true)} variant="raised">
	<Label>新規登録</Label>
</Button>

<Dialog bind:open>
	<Title>ユーザー新規登録</Title>
	<Content>
		<Textfield
			style="width: 100%; margin-top: 10px;"
			variant="outlined"
			bind:value={newUserName}
			label="ユーザー名"
		/>
	</Content>
	<Actions>
		<Button on:click={() => (open = false)} color="secondary" variant="outlined">
			<Label>キャンセル</Label>
		</Button>
		<Button style="margin-left: auto" on:click={() => {
      createNewUser();
      open = false;
    }} variant="raised">
			<Label>新規登録</Label>
		</Button>
	</Actions>
</Dialog>
