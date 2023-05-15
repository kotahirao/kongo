<script lang="ts">
	import CreateNewUserDialog from '$lib/components/CreateNewUserDialog.svelte';
	import type { User } from '$lib/openapi';
	import type { PageData } from './$types';
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

	export let data: PageData;
	const users: User[] = data.users;
</script>

<DataTable table$aria-label="Todo list" style="width: 100%;">
	<Head>
		<Row>
			<Cell numeric>ID</Cell>
			<Cell numeric>ユーザー名</Cell>
		</Row>
	</Head>
	<Body>
		{#each users as user (user.id)}
			<Row>
				<Cell numeric>{user.id}</Cell>
				<Cell>{user.name}</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>

<div id="createNewUserDialog">
	<CreateNewUserDialog />
</div>

<style>
	#createNewUserDialog {
		margin: 10px 0;
		float: right;
	}
</style>
