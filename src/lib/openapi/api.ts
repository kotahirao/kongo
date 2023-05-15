/* tslint:disable */
/* eslint-disable */
/**
 * NILE API定義
 * NILEサーバーのAPI定義
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: example@example.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import {
	DUMMY_BASE_URL,
	assertParamExists,
	setApiKeyToObject,
	setBasicAuthToObject,
	setBearerAuthToObject,
	setOAuthToObject,
	setSearchParams,
	serializeDataIfNeeded,
	toPathString,
	createRequestFunction
} from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 *
 * @export
 * @interface CreateUserParams
 */
export interface CreateUserParams {
	/**
	 *
	 * @type {string}
	 * @memberof CreateUserParams
	 */
	name: string;
}
/**
 *
 * @export
 * @interface CreateUsersRequest
 */
export interface CreateUsersRequest {
	/**
	 *
	 * @type {Array<CreateUserParams>}
	 * @memberof CreateUsersRequest
	 */
	users: Array<CreateUserParams>;
}
/**
 *
 * @export
 * @interface FindAllUsersResponse
 */
export interface FindAllUsersResponse {
	/**
	 *
	 * @type {Array<User>}
	 * @memberof FindAllUsersResponse
	 */
	users: Array<User>;
}
/**
 *
 * @export
 * @interface UpdateUserRequest
 */
export interface UpdateUserRequest {
	/**
	 *
	 * @type {string}
	 * @memberof UpdateUserRequest
	 */
	name: string;
}
/**
 *
 * @export
 * @interface User
 */
export interface User {
	/**
	 *
	 * @type {string}
	 * @memberof User
	 */
	id: string;
	/**
	 *
	 * @type {string}
	 * @memberof User
	 */
	name: string;
}

/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
	return {
		/**
		 * ユーザーを新規登録する
		 * @summary ユーザー登録
		 * @param {CreateUsersRequest} createUsersRequest
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		createUsers: async (
			createUsersRequest: CreateUsersRequest,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'createUsersRequest' is not null or undefined
			assertParamExists('createUsers', 'createUsersRequest', createUsersRequest);
			const localVarPath = `/users`;
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			localVarHeaderParameter['Content-Type'] = 'application/json';

			setSearchParams(localVarUrlObj, localVarQueryParameter);
			let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers
			};
			localVarRequestOptions.data = serializeDataIfNeeded(
				createUsersRequest,
				localVarRequestOptions,
				configuration
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			};
		},
		/**
		 * 登録されているユーザーの一覧を取得する
		 * @summary ユーザー一覧取得
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		findAllUsers: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			const localVarPath = `/users`;
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			setSearchParams(localVarUrlObj, localVarQueryParameter);
			let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers
			};

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			};
		},
		/**
		 * 指定したユーザーの情報を取得する
		 * @summary ユーザー取得
		 * @param {string} userId ユーザーID
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		findUser: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
			// verify required parameter 'userId' is not null or undefined
			assertParamExists('findUser', 'userId', userId);
			const localVarPath = `/users/{userId}`.replace(
				`{${'userId'}}`,
				encodeURIComponent(String(userId))
			);
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			setSearchParams(localVarUrlObj, localVarQueryParameter);
			let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers
			};

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			};
		},
		/**
		 * 指定したユーザーの情報を更新する
		 * @summary ユーザー更新
		 * @param {string} userId ユーザーID
		 * @param {UpdateUserRequest} [updateUserRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		updateUser: async (
			userId: string,
			updateUserRequest?: UpdateUserRequest,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'userId' is not null or undefined
			assertParamExists('updateUser', 'userId', userId);
			const localVarPath = `/users/{userId}`.replace(
				`{${'userId'}}`,
				encodeURIComponent(String(userId))
			);
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			localVarHeaderParameter['Content-Type'] = 'application/json';

			setSearchParams(localVarUrlObj, localVarQueryParameter);
			let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers
			};
			localVarRequestOptions.data = serializeDataIfNeeded(
				updateUserRequest,
				localVarRequestOptions,
				configuration
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions
			};
		}
	};
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function (configuration?: Configuration) {
	const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration);
	return {
		/**
		 * ユーザーを新規登録する
		 * @summary ユーザー登録
		 * @param {CreateUsersRequest} createUsersRequest
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async createUsers(
			createUsersRequest: CreateUsersRequest,
			options?: AxiosRequestConfig
		): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.createUsers(
				createUsersRequest,
				options
			);
			return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
		},
		/**
		 * 登録されているユーザーの一覧を取得する
		 * @summary ユーザー一覧取得
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async findAllUsers(
			options?: AxiosRequestConfig
		): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FindAllUsersResponse>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.findAllUsers(options);
			return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
		},
		/**
		 * 指定したユーザーの情報を取得する
		 * @summary ユーザー取得
		 * @param {string} userId ユーザーID
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async findUser(
			userId: string,
			options?: AxiosRequestConfig
		): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.findUser(userId, options);
			return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
		},
		/**
		 * 指定したユーザーの情報を更新する
		 * @summary ユーザー更新
		 * @param {string} userId ユーザーID
		 * @param {UpdateUserRequest} [updateUserRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async updateUser(
			userId: string,
			updateUserRequest?: UpdateUserRequest,
			options?: AxiosRequestConfig
		): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.updateUser(
				userId,
				updateUserRequest,
				options
			);
			return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
		}
	};
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (
	configuration?: Configuration,
	basePath?: string,
	axios?: AxiosInstance
) {
	const localVarFp = UsersApiFp(configuration);
	return {
		/**
		 * ユーザーを新規登録する
		 * @summary ユーザー登録
		 * @param {CreateUsersRequest} createUsersRequest
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		createUsers(createUsersRequest: CreateUsersRequest, options?: any): AxiosPromise<void> {
			return localVarFp
				.createUsers(createUsersRequest, options)
				.then((request) => request(axios, basePath));
		},
		/**
		 * 登録されているユーザーの一覧を取得する
		 * @summary ユーザー一覧取得
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		findAllUsers(options?: any): AxiosPromise<FindAllUsersResponse> {
			return localVarFp.findAllUsers(options).then((request) => request(axios, basePath));
		},
		/**
		 * 指定したユーザーの情報を取得する
		 * @summary ユーザー取得
		 * @param {string} userId ユーザーID
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		findUser(userId: string, options?: any): AxiosPromise<User> {
			return localVarFp.findUser(userId, options).then((request) => request(axios, basePath));
		},
		/**
		 * 指定したユーザーの情報を更新する
		 * @summary ユーザー更新
		 * @param {string} userId ユーザーID
		 * @param {UpdateUserRequest} [updateUserRequest]
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		updateUser(
			userId: string,
			updateUserRequest?: UpdateUserRequest,
			options?: any
		): AxiosPromise<void> {
			return localVarFp
				.updateUser(userId, updateUserRequest, options)
				.then((request) => request(axios, basePath));
		}
	};
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
	/**
	 * ユーザーを新規登録する
	 * @summary ユーザー登録
	 * @param {CreateUsersRequest} createUsersRequest
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof UsersApi
	 */
	public createUsers(createUsersRequest: CreateUsersRequest, options?: AxiosRequestConfig) {
		return UsersApiFp(this.configuration)
			.createUsers(createUsersRequest, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * 登録されているユーザーの一覧を取得する
	 * @summary ユーザー一覧取得
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof UsersApi
	 */
	public findAllUsers(options?: AxiosRequestConfig) {
		return UsersApiFp(this.configuration)
			.findAllUsers(options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * 指定したユーザーの情報を取得する
	 * @summary ユーザー取得
	 * @param {string} userId ユーザーID
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof UsersApi
	 */
	public findUser(userId: string, options?: AxiosRequestConfig) {
		return UsersApiFp(this.configuration)
			.findUser(userId, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * 指定したユーザーの情報を更新する
	 * @summary ユーザー更新
	 * @param {string} userId ユーザーID
	 * @param {UpdateUserRequest} [updateUserRequest]
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof UsersApi
	 */
	public updateUser(
		userId: string,
		updateUserRequest?: UpdateUserRequest,
		options?: AxiosRequestConfig
	) {
		return UsersApiFp(this.configuration)
			.updateUser(userId, updateUserRequest, options)
			.then((request) => request(this.axios, this.basePath));
	}
}
