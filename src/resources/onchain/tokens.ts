// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Tokens extends APIResource {
  /**
   * This endpoint allows you to **query 100 most recently updated tokens info of a
   * specific network or across all networks on GeckoTerminal**
   *
   * @example
   * ```ts
   * const response =
   *   await client.onchain.tokens.retrieveInfoRecentlyUpdated();
   * ```
   */
  retrieveInfoRecentlyUpdated(
    query: TokenRetrieveInfoRecentlyUpdatedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TokenRetrieveInfoRecentlyUpdatedResponse> {
    return this._client.get('/onchain/tokens/info_recently_updated', { query, ...options });
  }
}

export interface TokenRetrieveInfoRecentlyUpdatedResponse {
  data?: TokenRetrieveInfoRecentlyUpdatedResponse.Data;
}

export namespace TokenRetrieveInfoRecentlyUpdatedResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      address?: string;

      coingecko_coin_id?: string;

      description?: string;

      gt_score?: number;

      image_url?: string;

      metadata_updated_at?: string;

      name?: string;

      symbol?: string;

      websites?: Array<string>;
    }

    export interface Relationships {
      network?: Relationships.Network;
    }

    export namespace Relationships {
      export interface Network {
        data?: Network.Data;
      }

      export namespace Network {
        export interface Data {
          id?: string;

          type?: string;
        }
      }
    }
  }
}

export interface TokenRetrieveInfoRecentlyUpdatedParams {
  /**
   * Attributes for related resources to include, which will be returned under the
   * top-level 'included' key
   */
  include?: 'network';

  /**
   * filter tokens by provided network \*refers to
   * [/networks](/reference/networks-list)
   */
  network?: string;
}

export declare namespace Tokens {
  export {
    type TokenRetrieveInfoRecentlyUpdatedResponse as TokenRetrieveInfoRecentlyUpdatedResponse,
    type TokenRetrieveInfoRecentlyUpdatedParams as TokenRetrieveInfoRecentlyUpdatedParams,
  };
}
