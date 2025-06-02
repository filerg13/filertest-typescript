// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DexesAPI from './dexes';
import { DexListParams, DexListResponse, DexRetrievePoolsParams, Dexes } from './dexes';
import * as NewPoolsAPI from './new-pools';
import { NewPoolListParams, NewPools } from './new-pools';
import * as PoolsAPI from './pools';
import {
  PoolInfo,
  PoolListParams,
  PoolRetrieveInfoParams,
  PoolRetrieveParams,
  PoolRetrieveResponse,
  PoolRetrieveTradesParams,
  PoolRetrieveTradesResponse,
  Pools,
} from './pools';
import * as TokensAPI from './tokens';
import {
  Token,
  TokenInfo,
  TokenRetrieveInfoParams,
  TokenRetrieveParams,
  TokenRetrievePoolsParams,
  TokenRetrieveTopHoldersParams,
  TokenRetrieveTopHoldersResponse,
  TokenRetrieveTradesParams,
  TokenRetrieveTradesResponse,
  Tokens,
} from './tokens';
import * as TrendingPoolsAPI from './trending-pools';
import { Pool, TrendingPoolListParams, TrendingPools } from './trending-pools';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Networks extends APIResource {
  dexes: DexesAPI.Dexes = new DexesAPI.Dexes(this._client);
  trendingPools: TrendingPoolsAPI.TrendingPools = new TrendingPoolsAPI.TrendingPools(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  newPools: NewPoolsAPI.NewPools = new NewPoolsAPI.NewPools(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);

  /**
   * This endpoint allows you to **query all the supported networks on
   * GeckoTerminal**
   *
   * @example
   * ```ts
   * const networks = await client.onchain.networks.list();
   * ```
   */
  list(
    query: NetworkListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworkListResponse> {
    return this._client.get('/onchain/networks', { query, ...options });
  }
}

export interface NetworkListResponse {
  data?: Array<NetworkListResponse.Data>;
}

export namespace NetworkListResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      coingecko_asset_platform_id?: string;

      name?: string;
    }
  }
}

export interface NetworkListParams {
  /**
   * page through results Default value: 1
   */
  page?: number;
}

Networks.Dexes = Dexes;
Networks.TrendingPools = TrendingPools;
Networks.Pools = Pools;
Networks.NewPools = NewPools;
Networks.Tokens = Tokens;

export declare namespace Networks {
  export { type NetworkListResponse as NetworkListResponse, type NetworkListParams as NetworkListParams };

  export {
    Dexes as Dexes,
    type DexListResponse as DexListResponse,
    type DexListParams as DexListParams,
    type DexRetrievePoolsParams as DexRetrievePoolsParams,
  };

  export {
    TrendingPools as TrendingPools,
    type Pool as Pool,
    type TrendingPoolListParams as TrendingPoolListParams,
  };

  export {
    Pools as Pools,
    type PoolInfo as PoolInfo,
    type PoolRetrieveResponse as PoolRetrieveResponse,
    type PoolRetrieveTradesResponse as PoolRetrieveTradesResponse,
    type PoolRetrieveParams as PoolRetrieveParams,
    type PoolListParams as PoolListParams,
    type PoolRetrieveInfoParams as PoolRetrieveInfoParams,
    type PoolRetrieveTradesParams as PoolRetrieveTradesParams,
  };

  export { NewPools as NewPools, type NewPoolListParams as NewPoolListParams };

  export {
    Tokens as Tokens,
    type Token as Token,
    type TokenInfo as TokenInfo,
    type TokenRetrieveTopHoldersResponse as TokenRetrieveTopHoldersResponse,
    type TokenRetrieveTradesResponse as TokenRetrieveTradesResponse,
    type TokenRetrieveParams as TokenRetrieveParams,
    type TokenRetrieveInfoParams as TokenRetrieveInfoParams,
    type TokenRetrievePoolsParams as TokenRetrievePoolsParams,
    type TokenRetrieveTopHoldersParams as TokenRetrieveTopHoldersParams,
    type TokenRetrieveTradesParams as TokenRetrieveTradesParams,
  };
}
