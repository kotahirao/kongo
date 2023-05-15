import ApiFactory from '$lib/ApiFactory';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const usersApi = ApiFactory.getusersApi();
	return (await usersApi.findAllUsers()).data;
};
