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



/**
 * 
 * @export
 * @interface MetaPagination
 */
export interface MetaPagination {
    /**
     * 
     * @type {number}
     * @memberof MetaPagination
     */
    'currentPage': number;
    /**
     * 
     * @type {number}
     * @memberof MetaPagination
     */
    'previousPage'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MetaPagination
     */
    'nextPage'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof MetaPagination
     */
    'limit': number;
    /**
     * 
     * @type {number}
     * @memberof MetaPagination
     */
    'totalPagesCount': number;
    /**
     * 
     * @type {number}
     * @memberof MetaPagination
     */
    'totalCount': number;
    /**
     * 
     * @type {boolean}
     * @memberof MetaPagination
     */
    'isFirstPage': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MetaPagination
     */
    'isLastPage': boolean;
}
