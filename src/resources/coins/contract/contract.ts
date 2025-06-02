// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CoinsAPI from '../coins';
import * as MarketChartAPI from './market-chart';
import {
  MarketChart,
  MarketChartRetrieveByTokenAddressParams,
  MarketChartRetrieveWithinTimeRangeByTokenAddressParams,
} from './market-chart';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Contract extends APIResource {
  marketChart: MarketChartAPI.MarketChart = new MarketChartAPI.MarketChart(this._client);

  /**
   * This endpoint allows you to **query all the metadata (image, websites, socials,
   * description, contract address, etc.) and market data (price, ATH, exchange
   * tickers, etc.) of a coin from the CoinGecko coin page based on an asset platform
   * and a particular token contract address**
   *
   * @example
   * ```ts
   * const coinsData =
   *   await client.coins.contract.retrieveByTokenAddress(
   *     '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
   *     { id: 'ethereum' },
   *   );
   * ```
   */
  retrieveByTokenAddress(
    contractAddress: string,
    params: ContractRetrieveByTokenAddressParams,
    options?: RequestOptions,
  ): APIPromise<CoinsAPI.CoinsData> {
    const { id } = params;
    return this._client.get(path`/coins/${id}/contract/${contractAddress}`, options);
  }
}

export interface ContractRetrieveByTokenAddressParams {
  /**
   * asset platform ID \*refers to
   * [`/asset_platforms`](/reference/asset-platforms-list).
   */
  id: string;
}

Contract.MarketChart = MarketChart;

export declare namespace Contract {
  export { type ContractRetrieveByTokenAddressParams as ContractRetrieveByTokenAddressParams };

  export {
    MarketChart as MarketChart,
    type MarketChartRetrieveByTokenAddressParams as MarketChartRetrieveByTokenAddressParams,
    type MarketChartRetrieveWithinTimeRangeByTokenAddressParams as MarketChartRetrieveWithinTimeRangeByTokenAddressParams,
  };
}
