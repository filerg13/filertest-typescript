// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Filertest from 'filertest';

const client = new Filertest({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource search', () => {
  // skipped: tests are disabled for the time being
  test.skip('query: only required params', async () => {
    const responsePromise = client.search.query({ query: 'query' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('query: required and optional params', async () => {
    const response = await client.search.query({ query: 'query' });
  });

  // skipped: tests are disabled for the time being
  test.skip('trending', async () => {
    const responsePromise = client.search.trending();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('trending: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.search.trending({ show_max: 'show_max' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Filertest.NotFoundError);
  });
});
