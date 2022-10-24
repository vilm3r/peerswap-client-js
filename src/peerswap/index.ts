import {
  AllowSwapRequestsResponse,
  ListPeersResponse,
  ListRequestedSwapsResponse,
  ListSwapsResponse,
  SwapResponse,
} from '../proto/ps';
import { GrpcObject } from '@grpc/grpc-js';
import { promisify } from '../util';

export const swapOut = (
  client: GrpcObject,
  channelId: number,
  swapAmount: number,
  asset: string,
): Promise<SwapResponse> => promisify(client, 'SwapOut', { channelId, swapAmount, asset });

export const swapIn = (
  client: GrpcObject,
  channelId: number,
  swapAmount: number,
  asset: string,
): Promise<SwapResponse> => promisify(client, 'SwapIn', { channelId, swapAmount, asset });

export const getSwap = (client: GrpcObject, swapId: string): Promise<SwapResponse> =>
  promisify(client, 'GetSwap', { swapId });

export const listSwaps = (client: GrpcObject): Promise<ListSwapsResponse> => promisify(client, 'ListSwaps', {});

export const listPeers = (client: GrpcObject): Promise<ListPeersResponse> => promisify(client, 'ListPeers', {});

export const listRequestedSwaps = (client: GrpcObject): Promise<ListRequestedSwapsResponse> =>
  promisify(client, 'ListRequestedSwaps', {});

export const listActiveSwaps = (client: GrpcObject): Promise<ListSwapsResponse> =>
  promisify(client, 'ListActiveSwaps', {});
