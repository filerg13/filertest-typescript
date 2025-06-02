// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class List extends APIResource {
  /**
   * This endpoint allows you to **query all the supported coins on CoinGecko with
   * coins ID, name and symbol**
   *
   * @example
   * ```ts
   * const lists = await client.coins.list.retrieve();
   * ```
   */
  retrieve(
    query: ListRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListRetrieveResponse> {
    return this._client.get('/coins/list', { query, ...options });
  }

  /**
   * This endpoint allows you to **query the latest 200 coins that recently listed on
   * CoinGecko**
   *
   * @example
   * ```ts
   * const response =
   *   await client.coins.list.retrieveRecentlyAdded();
   * ```
   */
  retrieveRecentlyAdded(options?: RequestOptions): APIPromise<ListRetrieveRecentlyAddedResponse> {
    return this._client.get('/coins/list/new', options);
  }
}

export type ListRetrieveResponse = Array<ListRetrieveResponse.ListRetrieveResponseItem>;

export namespace ListRetrieveResponse {
  export interface ListRetrieveResponseItem {
    /**
     * coin ID
     */
    id?: string;

    /**
     * coin name
     */
    name?: string;

    /**
     * coin asset platform and contract address
     */
    platforms?: Record<string, string>;

    /**
     * coin symbol
     */
    symbol?: string;
  }
}

export type ListRetrieveRecentlyAddedResponse =
  Array<ListRetrieveRecentlyAddedResponse.ListRetrieveRecentlyAddedResponseItem>;

export namespace ListRetrieveRecentlyAddedResponse {
  export interface ListRetrieveRecentlyAddedResponseItem {
    /**
     * coin ID
     */
    id?: string;

    /**
     * timestamp when coin was activated on CoinGecko
     */
    activated_at?: number;

    /**
     * coin name
     */
    name?: string;

    /**
     * coin symbol
     */
    symbol?: string;
  }
}

export interface ListRetrieveParams {
  /**
   * include platform and token's contract addresses, default: false
   */
  include_platform?: boolean;

  /**
   * filter by status of coins, default: active
   */
  status?: 'active' | 'inactive';
}

export declare namespace List {
  export {
    type ListRetrieveResponse as ListRetrieveResponse,
    type ListRetrieveRecentlyAddedResponse as ListRetrieveRecentlyAddedResponse,
    type ListRetrieveParams as ListRetrieveParams,
  };
}
