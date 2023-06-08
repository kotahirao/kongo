<script lang="ts">
	import KongoCancelButton from '$lib/components/buttons/KongoCancelButton.svelte';
	import type { UsersApi } from '$lib/openapi';
	import Button, { Label } from '@smui/button';
	import Dialog, { Actions, Content, Title } from '@smui/dialog';
	import IconButton from '@smui/icon-button';
	import { createEventDispatcher } from 'svelte';

	export let usersApi: UsersApi;
	export let deleteUserId: string;
	export let deleteUserName: string;

	const dispatch = createEventDispatcher();

	let isOpen = false;

	async function deleteUser() {
		await usersApi.deleteUser(deleteUserId).catch();
		isOpen = false;
		dispatch('userDeleted');
	}
</script>

<IconButton on:click={() => (isOpen = true)} class="material-icons">delete</IconButton>

<Dialog bind:open={isOpen}>
	<Title>ユーザー削除</Title>
	<Content>
		<p>ユーザー名 : {deleteUserName} を削除してもよろしいですか？</p>
		<p>※この操作は元に戻せません</p>
	</Content>
	<Actions>
		<KongoCancelButton dispatchName="canceledUserDelete" />
		<Button
			style="margin-left: auto"
			on:click={() => {
				deleteUser();
			}}
			variant="raised"
		>
			<Label>削除</Label>
		</Button>
	</Actions>
</Dialog>
