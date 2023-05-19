<script lang="ts">
	import ApiFactory from '$lib/ApiFactory';
	import CreateNewUserDialog from '$lib/components/CreateNewUserDialog.svelte';
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

	const usersApi = ApiFactory.getusersApi();

	let usersPromise = findAllUsers();
	async function findAllUsers() {
		return await usersApi
			.findAllUsers()
			.then((res) => res.data.users)
			.catch((error) => {
				throw new Error(error);
			});
	}
	function reloadAllUsers() {
		usersPromise = findAllUsers();
	}
</script>

<div id="user-table-area">
	{#await usersPromise}
		<p>loading...</p>
	{:then users}
		<DataTable table$aria-label="User table" style="width: 100%">
			<Head>
				<Row>
					<Cell numeric>ID</Cell>
					<Cell numeric>ユーザー名</Cell>
				</Row>
			</Head>
			<Body>
				{#each users as user (user.id)}
					<Row>
						<Cell>{user.id}</Cell>
						<Cell>{user.name}</Cell>
					</Row>
				{/each}
			</Body>
		</DataTable>
	{:catch error}
		<p>{error}</p>
	{/await}
</div>

<div id="createNewUserDialog">
	<CreateNewUserDialog {usersApi} on:userCreated={reloadAllUsers} />
</div>

<style>
	div#user-table-area {
		margin-top: 1em;
	}
	#createNewUserDialog {
		margin: 10px 0;
		float: right;
	}
</style>
