<script lang="ts">
	import type { UsersApi } from '$lib/openapi';
	import Button, { Label } from '@smui/button';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import { createEventDispatcher } from 'svelte';
	import KongoTextField from './inputs/KongoTextField.svelte';

	export let usersApi: UsersApi;

	const dispatch = createEventDispatcher();

	let isOpen = false;
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
		isOpen = false;
	}
</script>

<Button on:click={() => (isOpen = true)} variant="raised">
	<Label>新規登録</Label>
</Button>

<Dialog bind:open={isOpen}>
	<Title>ユーザー新規登録</Title>
	<Content>
		<KongoTextField bind:value={newUserName} label="ユーザー名" />
	</Content>
	<Actions>
		<Button on:click={() => (isOpen = false)} color="secondary" variant="outlined">
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
