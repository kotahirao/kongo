<script lang="ts">
	import { Label } from '@smui/button';
	import ApiFactory from '$lib/ApiFactory';
	import IconButton from '@smui/icon-button';
	import DataTable, { Head, Body, Row, Cell, Pagination } from '@smui/data-table';
	import KongoH1Title from '$lib/components/KongoH1Title.svelte';
	import CreateNewUserDialog from './CreateNewUserDialog.svelte';
	import DeleteUserDialog from './DeleteUserDialog.svelte';
	import KongoSuccessSnackbar from '$lib/components/snackbar/KongoSuccessSnackbar.svelte';
	import type Snackbar from '@smui/snackbar';
	import type { User } from '$lib/openapi';
	import Select, { Option } from '@smui/select';

	const usersApi = ApiFactory.getUsersApi();

	let findAllUsersPromise = findAllUsers();
	async function findAllUsers() {
		return await usersApi
			.findAllUsers()
			.then((res) => {
				users = res.data.users;
			})
			.catch((error) => {
				throw new Error(error);
			});
	}

	let snackbarSuccessUserCreate: Snackbar;
	function userCreated() {
		snackbarSuccessUserCreate.open();
		findAllUsers();
	}

	let snackbarSuccessUserDelete: Snackbar;
	function userDeleted() {
		snackbarSuccessUserDelete.open();
		findAllUsers();
	}

	let rowsPerPage = 10;
	let currentPage = 0;
	let users: User[] = [];
	$: start = currentPage * rowsPerPage;
	$: end = Math.min(start + rowsPerPage, users.length);
	$: usersSlice = users.slice(start, end);
	$: lastPage = Math.max(Math.ceil(users.length / rowsPerPage) - 1, 0);

	$: if (currentPage > lastPage) {
		currentPage = lastPage;
	}
</script>

<svelte:head>
	<title>ユーザー一覧</title>
</svelte:head>

<KongoH1Title title="ユーザー一覧" />

<div id="user-table-area">
	<DataTable table$aria-label="User table" style="width: 100%">
		<Head>
			<Row>
				<Cell>ID</Cell>
				<Cell>ユーザー名</Cell>
				<Cell>アクション</Cell>
			</Row>
		</Head>
		<Body>
			{#each usersSlice as user (user.id)}
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

		<Pagination slot="paginate">
			<svelte:fragment slot="rowsPerPage">
				<Label>表示件数</Label>
				<Select variant="outlined" bind:value={rowsPerPage} noLabel>
					<Option value={10}>10</Option>
					<Option value={25}>25</Option>
					<Option value={100}>100</Option>
				</Select>
			</svelte:fragment>
			<svelte:fragment slot="total">
				{start + 1}-{end}件 / 全{users.length}件
			</svelte:fragment>

			<IconButton
				class="material-icons"
				action="first-page"
				title="First page"
				on:click={() => (currentPage = 0)}
				disabled={currentPage === 0}>first_page</IconButton
			>
			<IconButton
				class="material-icons"
				action="prev-page"
				title="Prev page"
				on:click={() => currentPage--}
				disabled={currentPage === 0}>chevron_left</IconButton
			>
			<IconButton
				class="material-icons"
				action="next-page"
				title="Next page"
				on:click={() => currentPage++}
				disabled={currentPage === lastPage}>chevron_right</IconButton
			>
			<IconButton
				class="material-icons"
				action="last-page"
				title="Last page"
				on:click={() => (currentPage = lastPage)}
				disabled={currentPage === lastPage}>last_page</IconButton
			>
		</Pagination>
	</DataTable>
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
