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

import { Visibility } from '../models/Visibility';
import { HttpFile } from '../http/http';

export class FileCreateStartBody {
    'key': string;
    'visibility'?: Visibility;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "visibility",
            "baseName": "visibility",
            "type": "Visibility",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FileCreateStartBody.attributeTypeMap;
    }

    public constructor() {
    }
}



