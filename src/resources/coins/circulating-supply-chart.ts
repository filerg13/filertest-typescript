// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CirculatingSupplyChartResource extends APIResource {
  /**
   * This endpoint allows you to **query historical circulating supply of a coin by
   * number of days away from now based on provided coin ID**
   *
   * @example
   * ```ts
   * const circulatingSupplyChart =
   *   await client.coins.circulatingSupplyChart.retrieveByID(
   *     'bitcoin',
   *     { days: 'days' },
   *   );
   * ```
   */
  retrieveByID(
    id: string,
    query: CirculatingSupplyChartRetrieveByIDParams,
    options?: RequestOptions,
  ): APIPromise<CirculatingSupplyChart> {
    return this._client.get(path`/coins/${id}/circulating_supply_chart`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query historical circulating supply of a coin,
   * within a range of timestamp based on the provided coin ID**
   *
   * @example
   * ```ts
   * const circulatingSupplyChart =
   *   await client.coins.circulatingSupplyChart.retrieveWithinTimeRangeByID(
   *     'bitcoin',
   *     { from: 0, to: 0 },
   *   );
   * ```
   */
  retrieveWithinTimeRangeByID(
    id: string,
    query: CirculatingSupplyChartRetrieveWithinTimeRangeByIDParams,
    options?: RequestOptions,
  ): APIPromise<CirculatingSupplyChart> {
    return this._client.get(path`/coins/${id}/circulating_supply_chart/range`, { query, ...options });
  }
}

export interface CirculatingSupplyChart {
  circulating_supply?: Array<Array<number | string>>;
}

export interface CirculatingSupplyChartRetrieveByIDParams {
  /**
   * data up to number of days ago Valid values: any integer or `max`
   */
  days: string;

  /**
   * data interval
   */
  interval?: 'daily';
}

export interface CirculatingSupplyChartRetrieveWithinTimeRangeByIDParams {
  /**
   * starting date in UNIX timestamp
   */
  from: number;

  /**
   * ending date in UNIX timestamp
   */
  to: number;
}

export declare namespace CirculatingSupplyChartResource {
  export {
    type CirculatingSupplyChart as CirculatingSupplyChart,
    type CirculatingSupplyChartRetrieveByIDParams as CirculatingSupplyChartRetrieveByIDParams,
    type CirculatingSupplyChartRetrieveWithinTimeRangeByIDParams as CirculatingSupplyChartRetrieveWithinTimeRangeByIDParams,
  };
}
