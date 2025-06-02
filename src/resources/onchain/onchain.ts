// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryListParams,
  CategoryListResponse,
  CategoryRetrievePoolsParams,
  CategoryRetrievePoolsResponse,
} from './categories';
import * as PoolsAPI from './pools';
import {
  PoolRetrieveMegafilterParams,
  PoolRetrieveTrendingSearchParams,
  PoolRetrieveTrendingSearchResponse,
  Pools,
} from './pools';
import * as SearchAPI from './search';
import { Search, SearchRetrievePoolsParams } from './search';
import * as TokensAPI from './tokens';
import {
  TokenRetrieveInfoRecentlyUpdatedParams,
  TokenRetrieveInfoRecentlyUpdatedResponse,
  Tokens,
} from './tokens';
import * as NetworksAPI from './networks/networks';
import { NetworkListParams, NetworkListResponse, Networks } from './networks/networks';
import * as SimpleAPI from './simple/simple';
import { Simple } from './simple/simple';

export class Onchain extends APIResource {
  simple: SimpleAPI.Simple = new SimpleAPI.Simple(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
}

Onchain.Simple = Simple;
Onchain.Networks = Networks;
Onchain.Pools = Pools;
Onchain.Search = Search;
Onchain.Tokens = Tokens;
Onchain.Categories = Categories;

export declare namespace Onchain {
  export { Simple as Simple };

  export {
    Networks as Networks,
    type NetworkListResponse as NetworkListResponse,
    type NetworkListParams as NetworkListParams,
  };

  export {
    Pools as Pools,
    type PoolRetrieveTrendingSearchResponse as PoolRetrieveTrendingSearchResponse,
    type PoolRetrieveMegafilterParams as PoolRetrieveMegafilterParams,
    type PoolRetrieveTrendingSearchParams as PoolRetrieveTrendingSearchParams,
  };

  export { Search as Search, type SearchRetrievePoolsParams as SearchRetrievePoolsParams };

  export {
    Tokens as Tokens,
    type TokenRetrieveInfoRecentlyUpdatedResponse as TokenRetrieveInfoRecentlyUpdatedResponse,
    type TokenRetrieveInfoRecentlyUpdatedParams as TokenRetrieveInfoRecentlyUpdatedParams,
  };

  export {
    Categories as Categories,
    type CategoryListResponse as CategoryListResponse,
    type CategoryRetrievePoolsResponse as CategoryRetrievePoolsResponse,
    type CategoryListParams as CategoryListParams,
    type CategoryRetrievePoolsParams as CategoryRetrievePoolsParams,
  };
}
