import { Configuration, UsersApi } from '$lib/openapi';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const configuration = new Configuration({
		basePath: 'http://localhost:8080'
	});
	const usersApi = new UsersApi(configuration);
	return (await usersApi.findAllUsers()).data;
};
