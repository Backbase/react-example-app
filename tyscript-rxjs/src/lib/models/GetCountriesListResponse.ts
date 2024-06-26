// tslint:disable
/**
 * Global Attributes Client API Specification
 * API to retrieve global attributes for requested parameters from client
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    CountryObject,
} from './';

/**
 * @export
 * @interface GetCountriesListResponse
 */
export interface GetCountriesListResponse {
    /**
     * @type {Array<CountryObject>}
     * @memberof GetCountriesListResponse
     */
    countries: Array<CountryObject>;
}
