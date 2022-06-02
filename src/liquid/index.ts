import { GrpcObject } from '@grpc/grpc-js';
import { GetAddressResponse, GetBalanceResponse, SendToAddressResponse } from '../proto/ps';
import { promisify } from '../util';

export const liquidGetAddress = (client: GrpcObject): Promise<GetAddressResponse> =>
  promisify(client, 'LiquidGetAddress', {});

export const liquidGetBalance = (client: GrpcObject): Promise<GetBalanceResponse> =>
  promisify(client, 'LiquidGetBalance', {});

export const liquidSendToAddress = (
  client: GrpcObject,
  address: string,
  amount: number,
): Promise<SendToAddressResponse> => promisify(client, 'LiquidSendToAddress', { address, amount });
