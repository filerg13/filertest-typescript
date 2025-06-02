// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Filertest from 'filertest';

const client = new Filertest({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource coins', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveByID', async () => {
    const responsePromise = client.coins.retrieveByID('bitcoin');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByID: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.coins.retrieveByID(
        'bitcoin',
        {
          community_data: true,
          developer_data: true,
          dex_pair_format: 'contract_address',
          localization: true,
          market_data: true,
          sparkline: true,
          tickers: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Filertest.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveHistoricalDataByID: only required params', async () => {
    const responsePromise = client.coins.retrieveHistoricalDataByID('bitcoin', { date: '30-12-2017' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveHistoricalDataByID: required and optional params', async () => {
    const response = await client.coins.retrieveHistoricalDataByID('bitcoin', {
      date: '30-12-2017',
      localization: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveTickersByID', async () => {
    const responsePromise = client.coins.retrieveTickersByID('bitcoin');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveTickersByID: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.coins.retrieveTickersByID(
        'bitcoin',
        {
          depth: true,
          dex_pair_format: 'contract_address',
          exchange_ids: 'binance',
          include_exchange_logo: true,
          order: 'trust_score_desc',
          page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Filertest.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveTopGainersLosers: only required params', async () => {
    const responsePromise = client.coins.retrieveTopGainersLosers({ vs_currency: 'usd' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveTopGainersLosers: required and optional params', async () => {
    const response = await client.coins.retrieveTopGainersLosers({
      vs_currency: 'usd',
      duration: '1h',
      top_coins: '300',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveWithMarketData: only required params', async () => {
    const responsePromise = client.coins.retrieveWithMarketData({ vs_currency: 'usd' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveWithMarketData: required and optional params', async () => {
    const response = await client.coins.retrieveWithMarketData({
      vs_currency: 'usd',
      category: 'layer-1',
      ids: 'ids',
      include_tokens: 'top',
      locale: 'ar',
      names: 'names',
      order: 'market_cap_asc',
      page: 0,
      per_page: 0,
      precision: 'full',
      price_change_percentage: 'price_change_percentage',
      sparkline: true,
      symbols: 'symbols',
    });
  });
});
