<script lang="ts">
	import type { UsersApi } from '$lib/openapi';
	import Button, { Label } from '@smui/button';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Textfield from '@smui/textfield';
	import { createEventDispatcher } from 'svelte';

	export let usersApi: UsersApi;

	const dispatch = createEventDispatcher();

	let open = false;
	let newUserName = '';

	async function createNewUser() {
		await usersApi.createUsers({
			users: [{ name: newUserName }]
		});
		initInputs();
		dispatch('userCreated');
	}
	function initInputs() {
		newUserName = '';
		open = false;
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
		<Button
			style="margin-left: auto"
			on:click={() => {
				createNewUser();
			}}
			variant="raised"
		>
			<Label>新規登録</Label>
		</Button>
	</Actions>
</Dialog>
