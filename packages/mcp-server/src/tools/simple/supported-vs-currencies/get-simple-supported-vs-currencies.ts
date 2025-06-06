// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'filertest-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Filertest from 'filertest-typescript';

export const metadata: Metadata = {
  resource: 'simple.supported_vs_currencies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/simple/supported_vs_currencies',
  operationId: 'simple-supported-currencies',
};

export const tool: Tool = {
  name: 'get_simple_supported_vs_currencies',
  description: 'This endpoint allows you to **query all the supported currencies on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Filertest, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.simple.supportedVsCurrencies.get());
};

export default { metadata, tool, handler };
