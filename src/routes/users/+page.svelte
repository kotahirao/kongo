<script lang="ts">
	import Test from '$lib/components/Test.svelte';
	import type { User } from '$lib/openapi';
	import type { PageData } from './$types';
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

	let clicked = 0;
	export let data: PageData;
	const users: User[] = data.users;
	console.log(users);
</script>

<pre>クリック回数： {clicked}</pre>

<Test />

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
