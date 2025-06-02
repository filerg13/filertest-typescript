// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Filertest from 'filertest';

const client = new Filertest({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource categories', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveList', async () => {
    const responsePromise = client.coins.categories.retrieveList();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveWithMarketData', async () => {
    const responsePromise = client.coins.categories.retrieveWithMarketData();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveWithMarketData: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.coins.categories.retrieveWithMarketData(
        { order: 'market_cap_desc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Filertest.NotFoundError);
  });
});
