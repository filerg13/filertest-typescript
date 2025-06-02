// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TotalSupplyChartResource extends APIResource {
  /**
   * This endpoint allows you to **query historical total supply of a coin by number
   * of days away from now based on provided coin ID**
   *
   * @example
   * ```ts
   * const totalSupplyChart =
   *   await client.coins.totalSupplyChart.retrieveByID(
   *     'bitcoin',
   *     { days: 'days' },
   *   );
   * ```
   */
  retrieveByID(
    id: string,
    query: TotalSupplyChartRetrieveByIDParams,
    options?: RequestOptions,
  ): APIPromise<TotalSupplyChart> {
    return this._client.get(path`/coins/${id}/total_supply_chart`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query historical total supply of a coin, within a
   * range of timestamp based on the provided coin ID**
   *
   * @example
   * ```ts
   * const totalSupplyChart =
   *   await client.coins.totalSupplyChart.retrieveWithinTimeRangeByID(
   *     'bitcoin',
   *     { from: 0, to: 0 },
   *   );
   * ```
   */
  retrieveWithinTimeRangeByID(
    id: string,
    query: TotalSupplyChartRetrieveWithinTimeRangeByIDParams,
    options?: RequestOptions,
  ): APIPromise<TotalSupplyChart> {
    return this._client.get(path`/coins/${id}/total_supply_chart/range`, { query, ...options });
  }
}

export interface TotalSupplyChart {
  total_supply?: Array<Array<number | string>>;
}

export interface TotalSupplyChartRetrieveByIDParams {
  /**
   * data up to number of days ago Valid values: any integer or `max`
   */
  days: string;

  /**
   * data interval
   */
  interval?: 'daily';
}

export interface TotalSupplyChartRetrieveWithinTimeRangeByIDParams {
  /**
   * starting date in UNIX timestamp
   */
  from: number;

  /**
   * ending date in UNIX timestamp
   */
  to: number;
}

export declare namespace TotalSupplyChartResource {
  export {
    type TotalSupplyChart as TotalSupplyChart,
    type TotalSupplyChartRetrieveByIDParams as TotalSupplyChartRetrieveByIDParams,
    type TotalSupplyChartRetrieveWithinTimeRangeByIDParams as TotalSupplyChartRetrieveWithinTimeRangeByIDParams,
  };
}
