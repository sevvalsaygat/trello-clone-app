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
import { BoardColumn } from '../model';
// @ts-ignore
import { CreateBoardColumnRequest } from '../model';
// @ts-ignore
import { GetApiAuthenticatedBoardColumns201Response } from '../model';
// @ts-ignore
import { PostApiAuthLogin400Response } from '../model';
// @ts-ignore
import { UpdateBoardColumnRequest } from '../model';
/**
 * BoardColumnsApi - axios parameter creator
 * @export
 */
export const BoardColumnsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a board column by ID
         * @summary Delete By ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteApiAuthenticatedBoardColumnsId: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteApiAuthenticatedBoardColumnsId', 'id', id)
            const localVarPath = `/api/authenticated/boardColumns/{Id}`
                .replace(`{${"Id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
        /**
         * Get all board columns
         * @summary Get All
         * @param {number} page 
         * @param {number} limit 
         * @param {string} [expand] 
         * @param {string} [embed] 
         * @param {string} [q] 
         * @param {string} [boardId] 
         * @param {string} [sort] 
         * @param {string} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiAuthenticatedBoardColumns: async (page: number, limit: number, expand?: string, embed?: string, q?: string, boardId?: string, sort?: string, order?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            assertParamExists('getApiAuthenticatedBoardColumns', 'page', page)
            // verify required parameter 'limit' is not null or undefined
            assertParamExists('getApiAuthenticatedBoardColumns', 'limit', limit)
            const localVarPath = `/api/authenticated/boardColumns`;
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

            if (page !== undefined) {
                localVarQueryParameter['_page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['_limit'] = limit;
            }

            if (expand !== undefined) {
                localVarQueryParameter['_expand'] = expand;
            }

            if (embed !== undefined) {
                localVarQueryParameter['_embed'] = embed;
            }

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (boardId !== undefined) {
                localVarQueryParameter['boardId'] = boardId;
            }

            if (sort !== undefined) {
                localVarQueryParameter['_sort'] = sort;
            }

            if (order !== undefined) {
                localVarQueryParameter['_order'] = order;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a board column by ID
         * @summary Get By ID
         * @param {string} id 
         * @param {string} [expand] 
         * @param {string} [embed] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiAuthenticatedBoardColumnsId: async (id: string, expand?: string, embed?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getApiAuthenticatedBoardColumnsId', 'id', id)
            const localVarPath = `/api/authenticated/boardColumns/{Id}`
                .replace(`{${"Id"}}`, encodeURIComponent(String(id)));
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

            if (expand !== undefined) {
                localVarQueryParameter['_expand'] = expand;
            }

            if (embed !== undefined) {
                localVarQueryParameter['_embed'] = embed;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a board column by ID
         * @summary Update By ID
         * @param {string} id 
         * @param {UpdateBoardColumnRequest} [updateBoardColumnRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchApiAuthenticatedBoardColumnsId: async (id: string, updateBoardColumnRequest?: UpdateBoardColumnRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patchApiAuthenticatedBoardColumnsId', 'id', id)
            const localVarPath = `/api/authenticated/boardColumns/{Id}`
                .replace(`{${"Id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateBoardColumnRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new board column
         * @summary Create
         * @param {CreateBoardColumnRequest} [createBoardColumnRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postApiAuthenticatedBoardColumns: async (createBoardColumnRequest?: CreateBoardColumnRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/authenticated/boardColumns`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createBoardColumnRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BoardColumnsApi - functional programming interface
 * @export
 */
export const BoardColumnsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BoardColumnsApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a board column by ID
         * @summary Delete By ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteApiAuthenticatedBoardColumnsId(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteApiAuthenticatedBoardColumnsId(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all board columns
         * @summary Get All
         * @param {number} page 
         * @param {number} limit 
         * @param {string} [expand] 
         * @param {string} [embed] 
         * @param {string} [q] 
         * @param {string} [boardId] 
         * @param {string} [sort] 
         * @param {string} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiAuthenticatedBoardColumns(page: number, limit: number, expand?: string, embed?: string, q?: string, boardId?: string, sort?: string, order?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetApiAuthenticatedBoardColumns201Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApiAuthenticatedBoardColumns(page, limit, expand, embed, q, boardId, sort, order, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a board column by ID
         * @summary Get By ID
         * @param {string} id 
         * @param {string} [expand] 
         * @param {string} [embed] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getApiAuthenticatedBoardColumnsId(id: string, expand?: string, embed?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BoardColumn>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getApiAuthenticatedBoardColumnsId(id, expand, embed, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a board column by ID
         * @summary Update By ID
         * @param {string} id 
         * @param {UpdateBoardColumnRequest} [updateBoardColumnRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchApiAuthenticatedBoardColumnsId(id: string, updateBoardColumnRequest?: UpdateBoardColumnRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BoardColumn>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchApiAuthenticatedBoardColumnsId(id, updateBoardColumnRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new board column
         * @summary Create
         * @param {CreateBoardColumnRequest} [createBoardColumnRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postApiAuthenticatedBoardColumns(createBoardColumnRequest?: CreateBoardColumnRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BoardColumn>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postApiAuthenticatedBoardColumns(createBoardColumnRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BoardColumnsApi - factory interface
 * @export
 */
export const BoardColumnsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BoardColumnsApiFp(configuration)
    return {
        /**
         * Delete a board column by ID
         * @summary Delete By ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteApiAuthenticatedBoardColumnsId(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteApiAuthenticatedBoardColumnsId(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all board columns
         * @summary Get All
         * @param {number} page 
         * @param {number} limit 
         * @param {string} [expand] 
         * @param {string} [embed] 
         * @param {string} [q] 
         * @param {string} [boardId] 
         * @param {string} [sort] 
         * @param {string} [order] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiAuthenticatedBoardColumns(page: number, limit: number, expand?: string, embed?: string, q?: string, boardId?: string, sort?: string, order?: string, options?: any): AxiosPromise<GetApiAuthenticatedBoardColumns201Response> {
            return localVarFp.getApiAuthenticatedBoardColumns(page, limit, expand, embed, q, boardId, sort, order, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a board column by ID
         * @summary Get By ID
         * @param {string} id 
         * @param {string} [expand] 
         * @param {string} [embed] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiAuthenticatedBoardColumnsId(id: string, expand?: string, embed?: string, options?: any): AxiosPromise<BoardColumn> {
            return localVarFp.getApiAuthenticatedBoardColumnsId(id, expand, embed, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a board column by ID
         * @summary Update By ID
         * @param {string} id 
         * @param {UpdateBoardColumnRequest} [updateBoardColumnRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchApiAuthenticatedBoardColumnsId(id: string, updateBoardColumnRequest?: UpdateBoardColumnRequest, options?: any): AxiosPromise<BoardColumn> {
            return localVarFp.patchApiAuthenticatedBoardColumnsId(id, updateBoardColumnRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new board column
         * @summary Create
         * @param {CreateBoardColumnRequest} [createBoardColumnRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postApiAuthenticatedBoardColumns(createBoardColumnRequest?: CreateBoardColumnRequest, options?: any): AxiosPromise<BoardColumn> {
            return localVarFp.postApiAuthenticatedBoardColumns(createBoardColumnRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BoardColumnsApi - interface
 * @export
 * @interface BoardColumnsApi
 */
export interface BoardColumnsApiInterface {
    /**
     * Delete a board column by ID
     * @summary Delete By ID
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardColumnsApiInterface
     */
    deleteApiAuthenticatedBoardColumnsId(id: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * Get all board columns
     * @summary Get All
     * @param {number} page 
     * @param {number} limit 
     * @param {string} [expand] 
     * @param {string} [embed] 
     * @param {string} [q] 
     * @param {string} [boardId] 
     * @param {string} [sort] 
     * @param {string} [order] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardColumnsApiInterface
     */
    getApiAuthenticatedBoardColumns(page: number, limit: number, expand?: string, embed?: string, q?: string, boardId?: string, sort?: string, order?: string, options?: AxiosRequestConfig): AxiosPromise<GetApiAuthenticatedBoardColumns201Response>;

    /**
     * Get a board column by ID
     * @summary Get By ID
     * @param {string} id 
     * @param {string} [expand] 
     * @param {string} [embed] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardColumnsApiInterface
     */
    getApiAuthenticatedBoardColumnsId(id: string, expand?: string, embed?: string, options?: AxiosRequestConfig): AxiosPromise<BoardColumn>;

    /**
     * Update a board column by ID
     * @summary Update By ID
     * @param {string} id 
     * @param {UpdateBoardColumnRequest} [updateBoardColumnRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardColumnsApiInterface
     */
    patchApiAuthenticatedBoardColumnsId(id: string, updateBoardColumnRequest?: UpdateBoardColumnRequest, options?: AxiosRequestConfig): AxiosPromise<BoardColumn>;

    /**
     * Create a new board column
     * @summary Create
     * @param {CreateBoardColumnRequest} [createBoardColumnRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardColumnsApiInterface
     */
    postApiAuthenticatedBoardColumns(createBoardColumnRequest?: CreateBoardColumnRequest, options?: AxiosRequestConfig): AxiosPromise<BoardColumn>;

}

/**
 * BoardColumnsApi - object-oriented interface
 * @export
 * @class BoardColumnsApi
 * @extends {BaseAPI}
 */
export class BoardColumnsApi extends BaseAPI implements BoardColumnsApiInterface {
    /**
     * Delete a board column by ID
     * @summary Delete By ID
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardColumnsApi
     */
    public deleteApiAuthenticatedBoardColumnsId(id: string, options?: AxiosRequestConfig) {
        return BoardColumnsApiFp(this.configuration).deleteApiAuthenticatedBoardColumnsId(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all board columns
     * @summary Get All
     * @param {number} page 
     * @param {number} limit 
     * @param {string} [expand] 
     * @param {string} [embed] 
     * @param {string} [q] 
     * @param {string} [boardId] 
     * @param {string} [sort] 
     * @param {string} [order] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardColumnsApi
     */
    public getApiAuthenticatedBoardColumns(page: number, limit: number, expand?: string, embed?: string, q?: string, boardId?: string, sort?: string, order?: string, options?: AxiosRequestConfig) {
        return BoardColumnsApiFp(this.configuration).getApiAuthenticatedBoardColumns(page, limit, expand, embed, q, boardId, sort, order, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a board column by ID
     * @summary Get By ID
     * @param {string} id 
     * @param {string} [expand] 
     * @param {string} [embed] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardColumnsApi
     */
    public getApiAuthenticatedBoardColumnsId(id: string, expand?: string, embed?: string, options?: AxiosRequestConfig) {
        return BoardColumnsApiFp(this.configuration).getApiAuthenticatedBoardColumnsId(id, expand, embed, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a board column by ID
     * @summary Update By ID
     * @param {string} id 
     * @param {UpdateBoardColumnRequest} [updateBoardColumnRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardColumnsApi
     */
    public patchApiAuthenticatedBoardColumnsId(id: string, updateBoardColumnRequest?: UpdateBoardColumnRequest, options?: AxiosRequestConfig) {
        return BoardColumnsApiFp(this.configuration).patchApiAuthenticatedBoardColumnsId(id, updateBoardColumnRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new board column
     * @summary Create
     * @param {CreateBoardColumnRequest} [createBoardColumnRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BoardColumnsApi
     */
    public postApiAuthenticatedBoardColumns(createBoardColumnRequest?: CreateBoardColumnRequest, options?: AxiosRequestConfig) {
        return BoardColumnsApiFp(this.configuration).postApiAuthenticatedBoardColumns(createBoardColumnRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

