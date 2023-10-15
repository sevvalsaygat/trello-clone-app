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
import { BoardColumn } from './board-column';
// May contain unused imports in some cases
// @ts-ignore
import { BoardMember } from './board-member';

/**
 * 
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    'title': string;
    /**
     * 
     * @type {number}
     * @memberof Task
     */
    'order': number;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    'boardMemberId'?: string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    'boardColumnId': string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {BoardColumn}
     * @memberof Task
     */
    'boardColumn'?: BoardColumn;
    /**
     * 
     * @type {BoardMember}
     * @memberof Task
     */
    'boardMember'?: BoardMember;
}

