import { Configuration, UsersApi } from './openapi';

export default class ApiFactory {
	private static configuration: Configuration = new Configuration({
		basePath: 'http://localhost:8080'
	});
	private static usersApi: UsersApi;

	static getUsersApi() {
		if (!this.usersApi) {
			this.usersApi = new UsersApi(this.configuration);
		}
		return this.usersApi;
	}
}
