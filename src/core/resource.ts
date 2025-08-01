// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Filertest } from '../client';

export abstract class APIResource {
  protected _client: Filertest;

  constructor(client: Filertest) {
    this._client = client;
  }
}
