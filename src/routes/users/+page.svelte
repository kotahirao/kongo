<script lang="ts">
	import { Label } from '@smui/button';
	import ApiFactory from '$lib/ApiFactory';
	import IconButton from '@smui/icon-button';
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import KongoH1Title from '$lib/components/KongoH1Title.svelte';
	import CreateNewUserDialog from './CreateNewUserDialog.svelte';
	import DeleteUserDialog from './DeleteUserDialog.svelte';
	import KongoSuccessSnackbar from '$lib/components/snackbar/KongoSuccessSnackbar.svelte';
	import type Snackbar from '@smui/snackbar';

	const usersApi = ApiFactory.getUsersApi();

	let findAllUsersPromise = findAllUsers();
	async function findAllUsers() {
		return await usersApi
			.findAllUsers()
			.then((res) => res.data.users)
			.catch((error) => {
				throw new Error(error);
			});
	}
	function reloadAllUsers() {
		findAllUsersPromise = findAllUsers();
	}

	let snackbarSuccessUserCreate: Snackbar;
	function userCreated() {
		snackbarSuccessUserCreate.open();
		reloadAllUsers();
	}

	let snackbarSuccessUserDelete: Snackbar;
	function userDeleted() {
		snackbarSuccessUserDelete.open();
		reloadAllUsers();
	}
</script>

<KongoH1Title title="ユーザー一覧" />

<div id="user-table-area">
	{#await findAllUsersPromise}
		<p>loading...</p>
	{:then users}
		<DataTable table$aria-label="User table" style="width: 100%">
			<Head>
				<Row>
					<Cell>ID</Cell>
					<Cell>ユーザー名</Cell>
					<Cell>アクション</Cell>
				</Row>
			</Head>
			<Body>
				{#each users as user (user.id)}
					<Row>
						<Cell>{user.id}</Cell>
						<Cell>{user.name}</Cell>
						<Cell>
							<div style="display: flex; align-items: center;">
								<a href="/users/{user.id}" style="text-decoration: none;"
									><IconButton class="material-icons">account_circle</IconButton></a
								>
								<DeleteUserDialog
									{usersApi}
									deleteUserId={user.id}
									deleteUserName={user.name}
									on:userDeleted={userDeleted}
								/>
							</div>
						</Cell>
					</Row>
				{/each}
			</Body>
		</DataTable>
	{/await}
</div>

<div id="createNewUserDialog">
	<CreateNewUserDialog {usersApi} on:userCreated={userCreated} />
</div>

<KongoSuccessSnackbar bind:snackbar={snackbarSuccessUserCreate} label="ユーザー登録成功" />

<KongoSuccessSnackbar bind:snackbar={snackbarSuccessUserDelete} label="ユーザー削除成功" />

<style>
	div#user-table-area {
		margin-top: 1em;
	}
	#createNewUserDialog {
		margin: 10px 0;
		float: right;
	}
</style>
