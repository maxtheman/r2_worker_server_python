/**
 * storage
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class R2Object {
    'key'?: string;
    'size'?: number;
    'etag'?: string;
    'httpEtag'?: string;
    'uploaded'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": ""
        },
        {
            "name": "etag",
            "baseName": "etag",
            "type": "string",
            "format": ""
        },
        {
            "name": "httpEtag",
            "baseName": "httpEtag",
            "type": "string",
            "format": ""
        },
        {
            "name": "uploaded",
            "baseName": "uploaded",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return R2Object.attributeTypeMap;
    }

    public constructor() {
    }
}

