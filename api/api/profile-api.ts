/* tslint:disable */
/* eslint-disable */
/**
 * Trello Clone API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorResponse } from '../model';
// @ts-ignore
import { User } from '../model';
/**
 * ProfileApi - axios parameter creator
 * @export
 */
export const ProfileApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a current user information
         * @summary Current User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiAuthenticatedMe: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/authenticated/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProfileApi - functional programming interface
 * @export
 */
export const ProfileApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProfileApiAxiosParamCreator(configuration)
    return {
        /**
         * Get a current user information
         * @summary Current User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiAuthenticatedMe(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApiAuthenticatedMe(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProfileApi - factory interface
 * @export
 */
export const ProfileApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProfileApiFp(configuration)
    return {
        /**
         * Get a current user information
         * @summary Current User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiAuthenticatedMe(options?: any): AxiosPromise<User> {
            return localVarFp.getApiAuthenticatedMe(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProfileApi - interface
 * @export
 * @interface ProfileApi
 */
export interface ProfileApiInterface {
    /**
     * Get a current user information
     * @summary Current User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApiInterface
     */
    getApiAuthenticatedMe(options?: AxiosRequestConfig): AxiosPromise<User>;

}

/**
 * ProfileApi - object-oriented interface
 * @export
 * @class ProfileApi
 * @extends {BaseAPI}
 */
export class ProfileApi extends BaseAPI implements ProfileApiInterface {
    /**
     * Get a current user information
     * @summary Current User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfileApi
     */
    public getApiAuthenticatedMe(options?: AxiosRequestConfig) {
        return ProfileApiFp(this.configuration).getApiAuthenticatedMe(options).then((request) => request(this.axios, this.basePath));
    }
}

