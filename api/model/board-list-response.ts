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


// May contain unused imports in some cases
// @ts-ignore
import { Board } from './board';
// May contain unused imports in some cases
// @ts-ignore
import { Meta } from './meta';

/**
 * 
 * @export
 * @interface BoardListResponse
 */
export interface BoardListResponse {
    /**
     * 
     * @type {Array<Board>}
     * @memberof BoardListResponse
     */
    'data': Array<Board>;
    /**
     * 
     * @type {Meta}
     * @memberof BoardListResponse
     */
    'meta': Meta;
}

