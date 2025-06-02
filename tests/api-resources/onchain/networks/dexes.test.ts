// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Filertest from 'filertest';

const client = new Filertest({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource dexes', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.onchain.networks.dexes.list('eth');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.onchain.networks.dexes.list('eth', { page: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Filertest.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePools: only required params', async () => {
    const responsePromise = client.onchain.networks.dexes.retrievePools('sushiswap', { network: 'eth' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePools: required and optional params', async () => {
    const response = await client.onchain.networks.dexes.retrievePools('sushiswap', {
      network: 'eth',
      include: 'include',
      page: 0,
      sort: 'h24_tx_count_desc',
    });
  });
});
