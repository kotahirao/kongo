<script lang="ts">
	import KongoH1Title from '$lib/components/KongoH1Title.svelte';
	import KongoTextField from '$lib/components/inputs/KongoTextField.svelte';
	import IconButton from '@smui/icon-button';
	import type { PageData } from './$types';
	import Button, { Label } from '@smui/button';
	import ApiFactory from '$lib/ApiFactory';
	import { onMount } from 'svelte';

	export let data: PageData;

	const usersApi = ApiFactory.getUsersApi();
	let userName: string = '';
	let modeEdit = false;
	$: disabled = !modeEdit;

	onMount(loadUser);

	async function loadUser() {
		await usersApi
			.findUser(data.userId)
			.then((res) => {
				userName = res.data.name;
			})
			.catch((error) => {
				throw new Error(error);
			});
	}

	async function updateUser() {
		await usersApi.updateUser(data.userId, { name: userName }).catch((error) => {
			throw new Error(error);
		});
		await loadUser();
		toggleModeEdit();
	}

	function toggleModeEdit() {
		modeEdit = !modeEdit;
	}
</script>

<KongoH1Title title="ユーザー詳細" />

<div style="text-align: right;">
	{#if modeEdit}
		<IconButton class="material-icons" on:click={toggleModeEdit}>edit_off</IconButton>
	{:else}
		<IconButton class="material-icons" on:click={toggleModeEdit}>mode_edit</IconButton>
	{/if}
</div>
<div>
	<KongoTextField bind:disabled bind:value={userName} label="ユーザー名" />
</div>

<div style="text-align: right;">
	<Button variant="raised" bind:disabled on:click={updateUser}>
		<Label>更新</Label>
	</Button>
</div>
