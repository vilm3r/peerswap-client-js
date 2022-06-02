/* tslint:disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'peerswap';

export interface GetAddressRequest {}

export interface GetAddressResponse {
  address: string;
}

export interface GetBalanceRequest {}

export interface GetBalanceResponse {
  satAmount: number;
}

export interface SendToAddressRequest {
  address: string;
  satAmount: number;
}

export interface SendToAddressResponse {
  txId: string;
}

export interface SwapOutRequest {
  channelId: number;
  swapAmount: number;
  asset: string;
}

export interface SwapOutResponse {
  swap: PrettyPrintSwap | undefined;
}

export interface SwapInRequest {
  channelId: number;
  swapAmount: number;
  asset: string;
}

export interface SwapResponse {
  swap: PrettyPrintSwap | undefined;
}

export interface GetSwapRequest {
  swapId: string;
}

export interface ListSwapsRequest {}

export interface ListSwapsResponse {
  swaps: PrettyPrintSwap[];
}

export interface ListPeersRequest {}

export interface ListPeersResponse {
  peers: PeerSwapPeer[];
}

export interface ListNodesRequest {}

export interface ListNodesResponse {
  nodes: PeerSwapNodes[];
}

export interface ReloadPolicyFileRequest {}

export interface ReloadPolicyFileResponse {
  policy: Policy | undefined;
}

export interface AddPeerRequest {
  peerPubkey: string;
}

export interface AddPeerResponse {
  policy: Policy | undefined;
}

export interface RemovePeerRequest {
  peerPubkey: string;
}

export interface RemovePeerResponse {
  policy: Policy | undefined;
}

export interface ListRequestedSwapsRequest {}

export interface ListRequestedSwapsResponse {
  requestedSwaps: { [key: string]: RequestSwapList };
}

export interface ListRequestedSwapsResponse_RequestedSwapsEntry {
  key: string;
  value: RequestSwapList | undefined;
}

export interface RequestSwapList {
  requestedSwaps: RequestedSwap[];
}

export interface RequestedSwap {
  asset: string;
  amountSat: number;
  swapType: RequestedSwap_SwapType;
  rejectionReason: string;
}

export enum RequestedSwap_SwapType {
  SWAP_IN = 0,
  SWAP_OUT = 1,
  UNRECOGNIZED = -1,
}

export function requestedSwap_SwapTypeFromJSON(object: any): RequestedSwap_SwapType {
  switch (object) {
    case 0:
    case 'SWAP_IN':
      return RequestedSwap_SwapType.SWAP_IN;
    case 1:
    case 'SWAP_OUT':
      return RequestedSwap_SwapType.SWAP_OUT;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return RequestedSwap_SwapType.UNRECOGNIZED;
  }
}

export function requestedSwap_SwapTypeToJSON(object: RequestedSwap_SwapType): string {
  switch (object) {
    case RequestedSwap_SwapType.SWAP_IN:
      return 'SWAP_IN';
    case RequestedSwap_SwapType.SWAP_OUT:
      return 'SWAP_OUT';
    case RequestedSwap_SwapType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface PrettyPrintSwap {
  id: string;
  createdAt: string;
  type: string;
  role: string;
  state: string;
  initiatorNodeId: string;
  peerNodeId: string;
  amount: number;
  channelId: string;
  openingTxId: string;
  claimTxId: string;
  cancelMessage: string;
}

export interface PeerSwapPeer {
  nodeId: string;
  swapsAllowed: boolean;
  supportedAssets: string[];
  channels: PeerSwapPeerChannel[];
  asSender: SwapStats | undefined;
  asReceiver: SwapStats | undefined;
  paidFee: number;
}

export interface PeerSwapPeerChannel {
  channelId: number;
  localBalance: number;
  remoteBalance: number;
  localPercentage: number;
  active: boolean;
}

export interface SwapStats {
  swapsOut: number;
  swapsIn: number;
  satsOut: number;
  satsIn: number;
}

export interface PeerSwapNodes {
  nodeId: string;
}

export interface Policy {
  reserveOnchainMsat: number;
  acceptAllPeers: boolean;
  peerAllowList: string[];
}

export interface AllowSwapRequestsRequest {
  allow: string;
}

export interface AllowSwapRequestsResponse {
  allow: boolean;
}

export interface Empty {}

function createBaseGetAddressRequest(): GetAddressRequest {
  return {};
}

export const GetAddressRequest = {
  encode(_: GetAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetAddressRequest {
    return {};
  },

  toJSON(_: GetAddressRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAddressRequest>, I>>(_: I): GetAddressRequest {
    const message = createBaseGetAddressRequest();
    return message;
  },
};

function createBaseGetAddressResponse(): GetAddressResponse {
  return { address: '' };
}

export const GetAddressResponse = {
  encode(message: GetAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAddressResponse {
    return {
      address: isSet(object.address) ? String(object.address) : '',
    };
  },

  toJSON(message: GetAddressResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAddressResponse>, I>>(object: I): GetAddressResponse {
    const message = createBaseGetAddressResponse();
    message.address = object.address ?? '';
    return message;
  },
};

function createBaseGetBalanceRequest(): GetBalanceRequest {
  return {};
}

export const GetBalanceRequest = {
  encode(_: GetBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetBalanceRequest {
    return {};
  },

  toJSON(_: GetBalanceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBalanceRequest>, I>>(_: I): GetBalanceRequest {
    const message = createBaseGetBalanceRequest();
    return message;
  },
};

function createBaseGetBalanceResponse(): GetBalanceResponse {
  return { satAmount: 0 };
}

export const GetBalanceResponse = {
  encode(message: GetBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.satAmount !== 0) {
      writer.uint32(8).uint64(message.satAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.satAmount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBalanceResponse {
    return {
      satAmount: isSet(object.satAmount) ? Number(object.satAmount) : 0,
    };
  },

  toJSON(message: GetBalanceResponse): unknown {
    const obj: any = {};
    message.satAmount !== undefined && (obj.satAmount = Math.round(message.satAmount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBalanceResponse>, I>>(object: I): GetBalanceResponse {
    const message = createBaseGetBalanceResponse();
    message.satAmount = object.satAmount ?? 0;
    return message;
  },
};

function createBaseSendToAddressRequest(): SendToAddressRequest {
  return { address: '', satAmount: 0 };
}

export const SendToAddressRequest = {
  encode(message: SendToAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.satAmount !== 0) {
      writer.uint32(16).uint64(message.satAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendToAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendToAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.satAmount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendToAddressRequest {
    return {
      address: isSet(object.address) ? String(object.address) : '',
      satAmount: isSet(object.satAmount) ? Number(object.satAmount) : 0,
    };
  },

  toJSON(message: SendToAddressRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.satAmount !== undefined && (obj.satAmount = Math.round(message.satAmount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendToAddressRequest>, I>>(object: I): SendToAddressRequest {
    const message = createBaseSendToAddressRequest();
    message.address = object.address ?? '';
    message.satAmount = object.satAmount ?? 0;
    return message;
  },
};

function createBaseSendToAddressResponse(): SendToAddressResponse {
  return { txId: '' };
}

export const SendToAddressResponse = {
  encode(message: SendToAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId !== '') {
      writer.uint32(10).string(message.txId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendToAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendToAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendToAddressResponse {
    return {
      txId: isSet(object.txId) ? String(object.txId) : '',
    };
  },

  toJSON(message: SendToAddressResponse): unknown {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = message.txId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendToAddressResponse>, I>>(object: I): SendToAddressResponse {
    const message = createBaseSendToAddressResponse();
    message.txId = object.txId ?? '';
    return message;
  },
};

function createBaseSwapOutRequest(): SwapOutRequest {
  return { channelId: 0, swapAmount: 0, asset: '' };
}

export const SwapOutRequest = {
  encode(message: SwapOutRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== 0) {
      writer.uint32(8).uint64(message.channelId);
    }
    if (message.swapAmount !== 0) {
      writer.uint32(16).uint64(message.swapAmount);
    }
    if (message.asset !== '') {
      writer.uint32(26).string(message.asset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapOutRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.swapAmount = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapOutRequest {
    return {
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
      swapAmount: isSet(object.swapAmount) ? Number(object.swapAmount) : 0,
      asset: isSet(object.asset) ? String(object.asset) : '',
    };
  },

  toJSON(message: SwapOutRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    message.swapAmount !== undefined && (obj.swapAmount = Math.round(message.swapAmount));
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwapOutRequest>, I>>(object: I): SwapOutRequest {
    const message = createBaseSwapOutRequest();
    message.channelId = object.channelId ?? 0;
    message.swapAmount = object.swapAmount ?? 0;
    message.asset = object.asset ?? '';
    return message;
  },
};

function createBaseSwapOutResponse(): SwapOutResponse {
  return { swap: undefined };
}

export const SwapOutResponse = {
  encode(message: SwapOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swap !== undefined) {
      PrettyPrintSwap.encode(message.swap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swap = PrettyPrintSwap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapOutResponse {
    return {
      swap: isSet(object.swap) ? PrettyPrintSwap.fromJSON(object.swap) : undefined,
    };
  },

  toJSON(message: SwapOutResponse): unknown {
    const obj: any = {};
    message.swap !== undefined && (obj.swap = message.swap ? PrettyPrintSwap.toJSON(message.swap) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwapOutResponse>, I>>(object: I): SwapOutResponse {
    const message = createBaseSwapOutResponse();
    message.swap =
      object.swap !== undefined && object.swap !== null ? PrettyPrintSwap.fromPartial(object.swap) : undefined;
    return message;
  },
};

function createBaseSwapInRequest(): SwapInRequest {
  return { channelId: 0, swapAmount: 0, asset: '' };
}

export const SwapInRequest = {
  encode(message: SwapInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== 0) {
      writer.uint32(8).uint64(message.channelId);
    }
    if (message.swapAmount !== 0) {
      writer.uint32(16).uint64(message.swapAmount);
    }
    if (message.asset !== '') {
      writer.uint32(26).string(message.asset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.swapAmount = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapInRequest {
    return {
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
      swapAmount: isSet(object.swapAmount) ? Number(object.swapAmount) : 0,
      asset: isSet(object.asset) ? String(object.asset) : '',
    };
  },

  toJSON(message: SwapInRequest): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    message.swapAmount !== undefined && (obj.swapAmount = Math.round(message.swapAmount));
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwapInRequest>, I>>(object: I): SwapInRequest {
    const message = createBaseSwapInRequest();
    message.channelId = object.channelId ?? 0;
    message.swapAmount = object.swapAmount ?? 0;
    message.asset = object.asset ?? '';
    return message;
  },
};

function createBaseSwapResponse(): SwapResponse {
  return { swap: undefined };
}

export const SwapResponse = {
  encode(message: SwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swap !== undefined) {
      PrettyPrintSwap.encode(message.swap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swap = PrettyPrintSwap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapResponse {
    return {
      swap: isSet(object.swap) ? PrettyPrintSwap.fromJSON(object.swap) : undefined,
    };
  },

  toJSON(message: SwapResponse): unknown {
    const obj: any = {};
    message.swap !== undefined && (obj.swap = message.swap ? PrettyPrintSwap.toJSON(message.swap) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwapResponse>, I>>(object: I): SwapResponse {
    const message = createBaseSwapResponse();
    message.swap =
      object.swap !== undefined && object.swap !== null ? PrettyPrintSwap.fromPartial(object.swap) : undefined;
    return message;
  },
};

function createBaseGetSwapRequest(): GetSwapRequest {
  return { swapId: '' };
}

export const GetSwapRequest = {
  encode(message: GetSwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapId !== '') {
      writer.uint32(10).string(message.swapId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSwapRequest {
    return {
      swapId: isSet(object.swapId) ? String(object.swapId) : '',
    };
  },

  toJSON(message: GetSwapRequest): unknown {
    const obj: any = {};
    message.swapId !== undefined && (obj.swapId = message.swapId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetSwapRequest>, I>>(object: I): GetSwapRequest {
    const message = createBaseGetSwapRequest();
    message.swapId = object.swapId ?? '';
    return message;
  },
};

function createBaseListSwapsRequest(): ListSwapsRequest {
  return {};
}

export const ListSwapsRequest = {
  encode(_: ListSwapsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSwapsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSwapsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListSwapsRequest {
    return {};
  },

  toJSON(_: ListSwapsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSwapsRequest>, I>>(_: I): ListSwapsRequest {
    const message = createBaseListSwapsRequest();
    return message;
  },
};

function createBaseListSwapsResponse(): ListSwapsResponse {
  return { swaps: [] };
}

export const ListSwapsResponse = {
  encode(message: ListSwapsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.swaps) {
      PrettyPrintSwap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSwapsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSwapsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swaps.push(PrettyPrintSwap.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListSwapsResponse {
    return {
      swaps: Array.isArray(object?.swaps) ? object.swaps.map((e: any) => PrettyPrintSwap.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListSwapsResponse): unknown {
    const obj: any = {};
    if (message.swaps) {
      obj.swaps = message.swaps.map((e) => (e ? PrettyPrintSwap.toJSON(e) : undefined));
    } else {
      obj.swaps = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListSwapsResponse>, I>>(object: I): ListSwapsResponse {
    const message = createBaseListSwapsResponse();
    message.swaps = object.swaps?.map((e) => PrettyPrintSwap.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListPeersRequest(): ListPeersRequest {
  return {};
}

export const ListPeersRequest = {
  encode(_: ListPeersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPeersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPeersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListPeersRequest {
    return {};
  },

  toJSON(_: ListPeersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPeersRequest>, I>>(_: I): ListPeersRequest {
    const message = createBaseListPeersRequest();
    return message;
  },
};

function createBaseListPeersResponse(): ListPeersResponse {
  return { peers: [] };
}

export const ListPeersResponse = {
  encode(message: ListPeersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.peers) {
      PeerSwapPeer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPeersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPeersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peers.push(PeerSwapPeer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListPeersResponse {
    return {
      peers: Array.isArray(object?.peers) ? object.peers.map((e: any) => PeerSwapPeer.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListPeersResponse): unknown {
    const obj: any = {};
    if (message.peers) {
      obj.peers = message.peers.map((e) => (e ? PeerSwapPeer.toJSON(e) : undefined));
    } else {
      obj.peers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPeersResponse>, I>>(object: I): ListPeersResponse {
    const message = createBaseListPeersResponse();
    message.peers = object.peers?.map((e) => PeerSwapPeer.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListNodesRequest(): ListNodesRequest {
  return {};
}

export const ListNodesRequest = {
  encode(_: ListNodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNodesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListNodesRequest {
    return {};
  },

  toJSON(_: ListNodesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNodesRequest>, I>>(_: I): ListNodesRequest {
    const message = createBaseListNodesRequest();
    return message;
  },
};

function createBaseListNodesResponse(): ListNodesResponse {
  return { nodes: [] };
}

export const ListNodesResponse = {
  encode(message: ListNodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodes) {
      PeerSwapNodes.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNodesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodes.push(PeerSwapNodes.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListNodesResponse {
    return {
      nodes: Array.isArray(object?.nodes) ? object.nodes.map((e: any) => PeerSwapNodes.fromJSON(e)) : [],
    };
  },

  toJSON(message: ListNodesResponse): unknown {
    const obj: any = {};
    if (message.nodes) {
      obj.nodes = message.nodes.map((e) => (e ? PeerSwapNodes.toJSON(e) : undefined));
    } else {
      obj.nodes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNodesResponse>, I>>(object: I): ListNodesResponse {
    const message = createBaseListNodesResponse();
    message.nodes = object.nodes?.map((e) => PeerSwapNodes.fromPartial(e)) || [];
    return message;
  },
};

function createBaseReloadPolicyFileRequest(): ReloadPolicyFileRequest {
  return {};
}

export const ReloadPolicyFileRequest = {
  encode(_: ReloadPolicyFileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReloadPolicyFileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReloadPolicyFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ReloadPolicyFileRequest {
    return {};
  },

  toJSON(_: ReloadPolicyFileRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReloadPolicyFileRequest>, I>>(_: I): ReloadPolicyFileRequest {
    const message = createBaseReloadPolicyFileRequest();
    return message;
  },
};

function createBaseReloadPolicyFileResponse(): ReloadPolicyFileResponse {
  return { policy: undefined };
}

export const ReloadPolicyFileResponse = {
  encode(message: ReloadPolicyFileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReloadPolicyFileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReloadPolicyFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReloadPolicyFileResponse {
    return {
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined,
    };
  },

  toJSON(message: ReloadPolicyFileResponse): unknown {
    const obj: any = {};
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReloadPolicyFileResponse>, I>>(object: I): ReloadPolicyFileResponse {
    const message = createBaseReloadPolicyFileResponse();
    message.policy =
      object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  },
};

function createBaseAddPeerRequest(): AddPeerRequest {
  return { peerPubkey: '' };
}

export const AddPeerRequest = {
  encode(message: AddPeerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peerPubkey !== '') {
      writer.uint32(10).string(message.peerPubkey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddPeerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddPeerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peerPubkey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddPeerRequest {
    return {
      peerPubkey: isSet(object.peerPubkey) ? String(object.peerPubkey) : '',
    };
  },

  toJSON(message: AddPeerRequest): unknown {
    const obj: any = {};
    message.peerPubkey !== undefined && (obj.peerPubkey = message.peerPubkey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddPeerRequest>, I>>(object: I): AddPeerRequest {
    const message = createBaseAddPeerRequest();
    message.peerPubkey = object.peerPubkey ?? '';
    return message;
  },
};

function createBaseAddPeerResponse(): AddPeerResponse {
  return { policy: undefined };
}

export const AddPeerResponse = {
  encode(message: AddPeerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddPeerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddPeerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddPeerResponse {
    return {
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined,
    };
  },

  toJSON(message: AddPeerResponse): unknown {
    const obj: any = {};
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddPeerResponse>, I>>(object: I): AddPeerResponse {
    const message = createBaseAddPeerResponse();
    message.policy =
      object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  },
};

function createBaseRemovePeerRequest(): RemovePeerRequest {
  return { peerPubkey: '' };
}

export const RemovePeerRequest = {
  encode(message: RemovePeerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peerPubkey !== '') {
      writer.uint32(10).string(message.peerPubkey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemovePeerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemovePeerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peerPubkey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemovePeerRequest {
    return {
      peerPubkey: isSet(object.peerPubkey) ? String(object.peerPubkey) : '',
    };
  },

  toJSON(message: RemovePeerRequest): unknown {
    const obj: any = {};
    message.peerPubkey !== undefined && (obj.peerPubkey = message.peerPubkey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemovePeerRequest>, I>>(object: I): RemovePeerRequest {
    const message = createBaseRemovePeerRequest();
    message.peerPubkey = object.peerPubkey ?? '';
    return message;
  },
};

function createBaseRemovePeerResponse(): RemovePeerResponse {
  return { policy: undefined };
}

export const RemovePeerResponse = {
  encode(message: RemovePeerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemovePeerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemovePeerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policy = Policy.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemovePeerResponse {
    return {
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined,
    };
  },

  toJSON(message: RemovePeerResponse): unknown {
    const obj: any = {};
    message.policy !== undefined && (obj.policy = message.policy ? Policy.toJSON(message.policy) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemovePeerResponse>, I>>(object: I): RemovePeerResponse {
    const message = createBaseRemovePeerResponse();
    message.policy =
      object.policy !== undefined && object.policy !== null ? Policy.fromPartial(object.policy) : undefined;
    return message;
  },
};

function createBaseListRequestedSwapsRequest(): ListRequestedSwapsRequest {
  return {};
}

export const ListRequestedSwapsRequest = {
  encode(_: ListRequestedSwapsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequestedSwapsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequestedSwapsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListRequestedSwapsRequest {
    return {};
  },

  toJSON(_: ListRequestedSwapsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListRequestedSwapsRequest>, I>>(_: I): ListRequestedSwapsRequest {
    const message = createBaseListRequestedSwapsRequest();
    return message;
  },
};

function createBaseListRequestedSwapsResponse(): ListRequestedSwapsResponse {
  return { requestedSwaps: {} };
}

export const ListRequestedSwapsResponse = {
  encode(message: ListRequestedSwapsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.requestedSwaps).forEach(([key, value]) => {
      ListRequestedSwapsResponse_RequestedSwapsEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequestedSwapsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequestedSwapsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = ListRequestedSwapsResponse_RequestedSwapsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.requestedSwaps[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListRequestedSwapsResponse {
    return {
      requestedSwaps: isObject(object.requestedSwaps)
        ? Object.entries(object.requestedSwaps).reduce<{ [key: string]: RequestSwapList }>((acc, [key, value]) => {
            acc[key] = RequestSwapList.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: ListRequestedSwapsResponse): unknown {
    const obj: any = {};
    obj.requestedSwaps = {};
    if (message.requestedSwaps) {
      Object.entries(message.requestedSwaps).forEach(([k, v]) => {
        obj.requestedSwaps[k] = RequestSwapList.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListRequestedSwapsResponse>, I>>(object: I): ListRequestedSwapsResponse {
    const message = createBaseListRequestedSwapsResponse();
    message.requestedSwaps = Object.entries(object.requestedSwaps ?? {}).reduce<{ [key: string]: RequestSwapList }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = RequestSwapList.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseListRequestedSwapsResponse_RequestedSwapsEntry(): ListRequestedSwapsResponse_RequestedSwapsEntry {
  return { key: '', value: undefined };
}

export const ListRequestedSwapsResponse_RequestedSwapsEntry = {
  encode(
    message: ListRequestedSwapsResponse_RequestedSwapsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      RequestSwapList.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRequestedSwapsResponse_RequestedSwapsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRequestedSwapsResponse_RequestedSwapsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = RequestSwapList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListRequestedSwapsResponse_RequestedSwapsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? RequestSwapList.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ListRequestedSwapsResponse_RequestedSwapsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? RequestSwapList.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListRequestedSwapsResponse_RequestedSwapsEntry>, I>>(
    object: I,
  ): ListRequestedSwapsResponse_RequestedSwapsEntry {
    const message = createBaseListRequestedSwapsResponse_RequestedSwapsEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null ? RequestSwapList.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseRequestSwapList(): RequestSwapList {
  return { requestedSwaps: [] };
}

export const RequestSwapList = {
  encode(message: RequestSwapList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requestedSwaps) {
      RequestedSwap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestSwapList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestSwapList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestedSwaps.push(RequestedSwap.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestSwapList {
    return {
      requestedSwaps: Array.isArray(object?.requestedSwaps)
        ? object.requestedSwaps.map((e: any) => RequestedSwap.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RequestSwapList): unknown {
    const obj: any = {};
    if (message.requestedSwaps) {
      obj.requestedSwaps = message.requestedSwaps.map((e) => (e ? RequestedSwap.toJSON(e) : undefined));
    } else {
      obj.requestedSwaps = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestSwapList>, I>>(object: I): RequestSwapList {
    const message = createBaseRequestSwapList();
    message.requestedSwaps = object.requestedSwaps?.map((e) => RequestedSwap.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRequestedSwap(): RequestedSwap {
  return { asset: '', amountSat: 0, swapType: 0, rejectionReason: '' };
}

export const RequestedSwap = {
  encode(message: RequestedSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== '') {
      writer.uint32(10).string(message.asset);
    }
    if (message.amountSat !== 0) {
      writer.uint32(16).uint64(message.amountSat);
    }
    if (message.swapType !== 0) {
      writer.uint32(24).int32(message.swapType);
    }
    if (message.rejectionReason !== '') {
      writer.uint32(34).string(message.rejectionReason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestedSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestedSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.amountSat = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.swapType = reader.int32() as any;
          break;
        case 4:
          message.rejectionReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestedSwap {
    return {
      asset: isSet(object.asset) ? String(object.asset) : '',
      amountSat: isSet(object.amountSat) ? Number(object.amountSat) : 0,
      swapType: isSet(object.swapType) ? requestedSwap_SwapTypeFromJSON(object.swapType) : 0,
      rejectionReason: isSet(object.rejectionReason) ? String(object.rejectionReason) : '',
    };
  },

  toJSON(message: RequestedSwap): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    message.amountSat !== undefined && (obj.amountSat = Math.round(message.amountSat));
    message.swapType !== undefined && (obj.swapType = requestedSwap_SwapTypeToJSON(message.swapType));
    message.rejectionReason !== undefined && (obj.rejectionReason = message.rejectionReason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestedSwap>, I>>(object: I): RequestedSwap {
    const message = createBaseRequestedSwap();
    message.asset = object.asset ?? '';
    message.amountSat = object.amountSat ?? 0;
    message.swapType = object.swapType ?? 0;
    message.rejectionReason = object.rejectionReason ?? '';
    return message;
  },
};

function createBasePrettyPrintSwap(): PrettyPrintSwap {
  return {
    id: '',
    createdAt: '',
    type: '',
    role: '',
    state: '',
    initiatorNodeId: '',
    peerNodeId: '',
    amount: 0,
    channelId: '',
    openingTxId: '',
    claimTxId: '',
    cancelMessage: '',
  };
}

export const PrettyPrintSwap = {
  encode(message: PrettyPrintSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== '') {
      writer.uint32(18).string(message.createdAt);
    }
    if (message.type !== '') {
      writer.uint32(26).string(message.type);
    }
    if (message.role !== '') {
      writer.uint32(34).string(message.role);
    }
    if (message.state !== '') {
      writer.uint32(42).string(message.state);
    }
    if (message.initiatorNodeId !== '') {
      writer.uint32(50).string(message.initiatorNodeId);
    }
    if (message.peerNodeId !== '') {
      writer.uint32(58).string(message.peerNodeId);
    }
    if (message.amount !== 0) {
      writer.uint32(64).uint64(message.amount);
    }
    if (message.channelId !== '') {
      writer.uint32(74).string(message.channelId);
    }
    if (message.openingTxId !== '') {
      writer.uint32(82).string(message.openingTxId);
    }
    if (message.claimTxId !== '') {
      writer.uint32(90).string(message.claimTxId);
    }
    if (message.cancelMessage !== '') {
      writer.uint32(98).string(message.cancelMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrettyPrintSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrettyPrintSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.createdAt = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          message.role = reader.string();
          break;
        case 5:
          message.state = reader.string();
          break;
        case 6:
          message.initiatorNodeId = reader.string();
          break;
        case 7:
          message.peerNodeId = reader.string();
          break;
        case 8:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.channelId = reader.string();
          break;
        case 10:
          message.openingTxId = reader.string();
          break;
        case 11:
          message.claimTxId = reader.string();
          break;
        case 12:
          message.cancelMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrettyPrintSwap {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : '',
      type: isSet(object.type) ? String(object.type) : '',
      role: isSet(object.role) ? String(object.role) : '',
      state: isSet(object.state) ? String(object.state) : '',
      initiatorNodeId: isSet(object.initiatorNodeId) ? String(object.initiatorNodeId) : '',
      peerNodeId: isSet(object.peerNodeId) ? String(object.peerNodeId) : '',
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      channelId: isSet(object.channelId) ? String(object.channelId) : '',
      openingTxId: isSet(object.openingTxId) ? String(object.openingTxId) : '',
      claimTxId: isSet(object.claimTxId) ? String(object.claimTxId) : '',
      cancelMessage: isSet(object.cancelMessage) ? String(object.cancelMessage) : '',
    };
  },

  toJSON(message: PrettyPrintSwap): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.type !== undefined && (obj.type = message.type);
    message.role !== undefined && (obj.role = message.role);
    message.state !== undefined && (obj.state = message.state);
    message.initiatorNodeId !== undefined && (obj.initiatorNodeId = message.initiatorNodeId);
    message.peerNodeId !== undefined && (obj.peerNodeId = message.peerNodeId);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.openingTxId !== undefined && (obj.openingTxId = message.openingTxId);
    message.claimTxId !== undefined && (obj.claimTxId = message.claimTxId);
    message.cancelMessage !== undefined && (obj.cancelMessage = message.cancelMessage);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrettyPrintSwap>, I>>(object: I): PrettyPrintSwap {
    const message = createBasePrettyPrintSwap();
    message.id = object.id ?? '';
    message.createdAt = object.createdAt ?? '';
    message.type = object.type ?? '';
    message.role = object.role ?? '';
    message.state = object.state ?? '';
    message.initiatorNodeId = object.initiatorNodeId ?? '';
    message.peerNodeId = object.peerNodeId ?? '';
    message.amount = object.amount ?? 0;
    message.channelId = object.channelId ?? '';
    message.openingTxId = object.openingTxId ?? '';
    message.claimTxId = object.claimTxId ?? '';
    message.cancelMessage = object.cancelMessage ?? '';
    return message;
  },
};

function createBasePeerSwapPeer(): PeerSwapPeer {
  return {
    nodeId: '',
    swapsAllowed: false,
    supportedAssets: [],
    channels: [],
    asSender: undefined,
    asReceiver: undefined,
    paidFee: 0,
  };
}

export const PeerSwapPeer = {
  encode(message: PeerSwapPeer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== '') {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.swapsAllowed === true) {
      writer.uint32(16).bool(message.swapsAllowed);
    }
    for (const v of message.supportedAssets) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.channels) {
      PeerSwapPeerChannel.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.asSender !== undefined) {
      SwapStats.encode(message.asSender, writer.uint32(42).fork()).ldelim();
    }
    if (message.asReceiver !== undefined) {
      SwapStats.encode(message.asReceiver, writer.uint32(50).fork()).ldelim();
    }
    if (message.paidFee !== 0) {
      writer.uint32(56).uint64(message.paidFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PeerSwapPeer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerSwapPeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 2:
          message.swapsAllowed = reader.bool();
          break;
        case 3:
          message.supportedAssets.push(reader.string());
          break;
        case 4:
          message.channels.push(PeerSwapPeerChannel.decode(reader, reader.uint32()));
          break;
        case 5:
          message.asSender = SwapStats.decode(reader, reader.uint32());
          break;
        case 6:
          message.asReceiver = SwapStats.decode(reader, reader.uint32());
          break;
        case 7:
          message.paidFee = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PeerSwapPeer {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : '',
      swapsAllowed: isSet(object.swapsAllowed) ? Boolean(object.swapsAllowed) : false,
      supportedAssets: Array.isArray(object?.supportedAssets) ? object.supportedAssets.map((e: any) => String(e)) : [],
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => PeerSwapPeerChannel.fromJSON(e)) : [],
      asSender: isSet(object.asSender) ? SwapStats.fromJSON(object.asSender) : undefined,
      asReceiver: isSet(object.asReceiver) ? SwapStats.fromJSON(object.asReceiver) : undefined,
      paidFee: isSet(object.paidFee) ? Number(object.paidFee) : 0,
    };
  },

  toJSON(message: PeerSwapPeer): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.swapsAllowed !== undefined && (obj.swapsAllowed = message.swapsAllowed);
    if (message.supportedAssets) {
      obj.supportedAssets = message.supportedAssets.map((e) => e);
    } else {
      obj.supportedAssets = [];
    }
    if (message.channels) {
      obj.channels = message.channels.map((e) => (e ? PeerSwapPeerChannel.toJSON(e) : undefined));
    } else {
      obj.channels = [];
    }
    message.asSender !== undefined &&
      (obj.asSender = message.asSender ? SwapStats.toJSON(message.asSender) : undefined);
    message.asReceiver !== undefined &&
      (obj.asReceiver = message.asReceiver ? SwapStats.toJSON(message.asReceiver) : undefined);
    message.paidFee !== undefined && (obj.paidFee = Math.round(message.paidFee));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PeerSwapPeer>, I>>(object: I): PeerSwapPeer {
    const message = createBasePeerSwapPeer();
    message.nodeId = object.nodeId ?? '';
    message.swapsAllowed = object.swapsAllowed ?? false;
    message.supportedAssets = object.supportedAssets?.map((e) => e) || [];
    message.channels = object.channels?.map((e) => PeerSwapPeerChannel.fromPartial(e)) || [];
    message.asSender =
      object.asSender !== undefined && object.asSender !== null ? SwapStats.fromPartial(object.asSender) : undefined;
    message.asReceiver =
      object.asReceiver !== undefined && object.asReceiver !== null
        ? SwapStats.fromPartial(object.asReceiver)
        : undefined;
    message.paidFee = object.paidFee ?? 0;
    return message;
  },
};

function createBasePeerSwapPeerChannel(): PeerSwapPeerChannel {
  return { channelId: 0, localBalance: 0, remoteBalance: 0, localPercentage: 0, active: false };
}

export const PeerSwapPeerChannel = {
  encode(message: PeerSwapPeerChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== 0) {
      writer.uint32(8).uint64(message.channelId);
    }
    if (message.localBalance !== 0) {
      writer.uint32(16).uint64(message.localBalance);
    }
    if (message.remoteBalance !== 0) {
      writer.uint32(24).uint64(message.remoteBalance);
    }
    if (message.localPercentage !== 0) {
      writer.uint32(33).double(message.localPercentage);
    }
    if (message.active === true) {
      writer.uint32(40).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PeerSwapPeerChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerSwapPeerChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.localBalance = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.remoteBalance = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.localPercentage = reader.double();
          break;
        case 5:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PeerSwapPeerChannel {
    return {
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
      localBalance: isSet(object.localBalance) ? Number(object.localBalance) : 0,
      remoteBalance: isSet(object.remoteBalance) ? Number(object.remoteBalance) : 0,
      localPercentage: isSet(object.localPercentage) ? Number(object.localPercentage) : 0,
      active: isSet(object.active) ? Boolean(object.active) : false,
    };
  },

  toJSON(message: PeerSwapPeerChannel): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    message.localBalance !== undefined && (obj.localBalance = Math.round(message.localBalance));
    message.remoteBalance !== undefined && (obj.remoteBalance = Math.round(message.remoteBalance));
    message.localPercentage !== undefined && (obj.localPercentage = message.localPercentage);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PeerSwapPeerChannel>, I>>(object: I): PeerSwapPeerChannel {
    const message = createBasePeerSwapPeerChannel();
    message.channelId = object.channelId ?? 0;
    message.localBalance = object.localBalance ?? 0;
    message.remoteBalance = object.remoteBalance ?? 0;
    message.localPercentage = object.localPercentage ?? 0;
    message.active = object.active ?? false;
    return message;
  },
};

function createBaseSwapStats(): SwapStats {
  return { swapsOut: 0, swapsIn: 0, satsOut: 0, satsIn: 0 };
}

export const SwapStats = {
  encode(message: SwapStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapsOut !== 0) {
      writer.uint32(8).uint64(message.swapsOut);
    }
    if (message.swapsIn !== 0) {
      writer.uint32(16).uint64(message.swapsIn);
    }
    if (message.satsOut !== 0) {
      writer.uint32(24).uint64(message.satsOut);
    }
    if (message.satsIn !== 0) {
      writer.uint32(32).uint64(message.satsIn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SwapStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapsOut = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.swapsIn = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.satsOut = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.satsIn = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapStats {
    return {
      swapsOut: isSet(object.swapsOut) ? Number(object.swapsOut) : 0,
      swapsIn: isSet(object.swapsIn) ? Number(object.swapsIn) : 0,
      satsOut: isSet(object.satsOut) ? Number(object.satsOut) : 0,
      satsIn: isSet(object.satsIn) ? Number(object.satsIn) : 0,
    };
  },

  toJSON(message: SwapStats): unknown {
    const obj: any = {};
    message.swapsOut !== undefined && (obj.swapsOut = Math.round(message.swapsOut));
    message.swapsIn !== undefined && (obj.swapsIn = Math.round(message.swapsIn));
    message.satsOut !== undefined && (obj.satsOut = Math.round(message.satsOut));
    message.satsIn !== undefined && (obj.satsIn = Math.round(message.satsIn));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SwapStats>, I>>(object: I): SwapStats {
    const message = createBaseSwapStats();
    message.swapsOut = object.swapsOut ?? 0;
    message.swapsIn = object.swapsIn ?? 0;
    message.satsOut = object.satsOut ?? 0;
    message.satsIn = object.satsIn ?? 0;
    return message;
  },
};

function createBasePeerSwapNodes(): PeerSwapNodes {
  return { nodeId: '' };
}

export const PeerSwapNodes = {
  encode(message: PeerSwapNodes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== '') {
      writer.uint32(10).string(message.nodeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PeerSwapNodes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerSwapNodes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PeerSwapNodes {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : '',
    };
  },

  toJSON(message: PeerSwapNodes): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PeerSwapNodes>, I>>(object: I): PeerSwapNodes {
    const message = createBasePeerSwapNodes();
    message.nodeId = object.nodeId ?? '';
    return message;
  },
};

function createBasePolicy(): Policy {
  return { reserveOnchainMsat: 0, acceptAllPeers: false, peerAllowList: [] };
}

export const Policy = {
  encode(message: Policy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveOnchainMsat !== 0) {
      writer.uint32(8).uint64(message.reserveOnchainMsat);
    }
    if (message.acceptAllPeers === true) {
      writer.uint32(16).bool(message.acceptAllPeers);
    }
    for (const v of message.peerAllowList) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Policy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveOnchainMsat = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.acceptAllPeers = reader.bool();
          break;
        case 3:
          message.peerAllowList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Policy {
    return {
      reserveOnchainMsat: isSet(object.reserveOnchainMsat) ? Number(object.reserveOnchainMsat) : 0,
      acceptAllPeers: isSet(object.acceptAllPeers) ? Boolean(object.acceptAllPeers) : false,
      peerAllowList: Array.isArray(object?.peerAllowList) ? object.peerAllowList.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Policy): unknown {
    const obj: any = {};
    message.reserveOnchainMsat !== undefined && (obj.reserveOnchainMsat = Math.round(message.reserveOnchainMsat));
    message.acceptAllPeers !== undefined && (obj.acceptAllPeers = message.acceptAllPeers);
    if (message.peerAllowList) {
      obj.peerAllowList = message.peerAllowList.map((e) => e);
    } else {
      obj.peerAllowList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Policy>, I>>(object: I): Policy {
    const message = createBasePolicy();
    message.reserveOnchainMsat = object.reserveOnchainMsat ?? 0;
    message.acceptAllPeers = object.acceptAllPeers ?? false;
    message.peerAllowList = object.peerAllowList?.map((e) => e) || [];
    return message;
  },
};

function createBaseAllowSwapRequestsRequest(): AllowSwapRequestsRequest {
  return { allow: '' };
}

export const AllowSwapRequestsRequest = {
  encode(message: AllowSwapRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allow !== '') {
      writer.uint32(10).string(message.allow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowSwapRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowSwapRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allow = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllowSwapRequestsRequest {
    return {
      allow: isSet(object.allow) ? String(object.allow) : '',
    };
  },

  toJSON(message: AllowSwapRequestsRequest): unknown {
    const obj: any = {};
    message.allow !== undefined && (obj.allow = message.allow);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllowSwapRequestsRequest>, I>>(object: I): AllowSwapRequestsRequest {
    const message = createBaseAllowSwapRequestsRequest();
    message.allow = object.allow ?? '';
    return message;
  },
};

function createBaseAllowSwapRequestsResponse(): AllowSwapRequestsResponse {
  return { allow: false };
}

export const AllowSwapRequestsResponse = {
  encode(message: AllowSwapRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allow === true) {
      writer.uint32(8).bool(message.allow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowSwapRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowSwapRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allow = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllowSwapRequestsResponse {
    return {
      allow: isSet(object.allow) ? Boolean(object.allow) : false,
    };
  },

  toJSON(message: AllowSwapRequestsResponse): unknown {
    const obj: any = {};
    message.allow !== undefined && (obj.allow = message.allow);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllowSwapRequestsResponse>, I>>(object: I): AllowSwapRequestsResponse {
    const message = createBaseAllowSwapRequestsResponse();
    message.allow = object.allow ?? false;
    return message;
  },
};

function createBaseEmpty(): Empty {
  return {};
}

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Empty>, I>>(_: I): Empty {
    const message = createBaseEmpty();
    return message;
  },
};

export interface PeerSwap {
  SwapOut(request: SwapOutRequest): Promise<SwapResponse>;
  SwapIn(request: SwapInRequest): Promise<SwapResponse>;
  GetSwap(request: GetSwapRequest): Promise<SwapResponse>;
  ListSwaps(request: ListSwapsRequest): Promise<ListSwapsResponse>;
  ListPeers(request: ListPeersRequest): Promise<ListPeersResponse>;
  ListNodes(request: ListNodesRequest): Promise<ListNodesResponse>;
  ListRequestedSwaps(request: ListRequestedSwapsRequest): Promise<ListRequestedSwapsResponse>;
  ListActiveSwaps(request: ListSwapsRequest): Promise<ListSwapsResponse>;
  AllowSwapRequests(request: AllowSwapRequestsRequest): Promise<AllowSwapRequestsResponse>;
  /** policy */
  ReloadPolicyFile(request: ReloadPolicyFileRequest): Promise<ReloadPolicyFileResponse>;
  AddPeer(request: AddPeerRequest): Promise<AddPeerResponse>;
  RemovePeer(request: RemovePeerRequest): Promise<RemovePeerResponse>;
  /** Liquid Stuff */
  LiquidGetAddress(request: GetAddressRequest): Promise<GetAddressResponse>;
  LiquidGetBalance(request: GetBalanceRequest): Promise<GetBalanceResponse>;
  LiquidSendToAddress(request: SendToAddressRequest): Promise<SendToAddressResponse>;
  Stop(request: Empty): Promise<Empty>;
}

export class PeerSwapClientImpl implements PeerSwap {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SwapOut = this.SwapOut.bind(this);
    this.SwapIn = this.SwapIn.bind(this);
    this.GetSwap = this.GetSwap.bind(this);
    this.ListSwaps = this.ListSwaps.bind(this);
    this.ListPeers = this.ListPeers.bind(this);
    this.ListNodes = this.ListNodes.bind(this);
    this.ListRequestedSwaps = this.ListRequestedSwaps.bind(this);
    this.ListActiveSwaps = this.ListActiveSwaps.bind(this);
    this.AllowSwapRequests = this.AllowSwapRequests.bind(this);
    this.ReloadPolicyFile = this.ReloadPolicyFile.bind(this);
    this.AddPeer = this.AddPeer.bind(this);
    this.RemovePeer = this.RemovePeer.bind(this);
    this.LiquidGetAddress = this.LiquidGetAddress.bind(this);
    this.LiquidGetBalance = this.LiquidGetBalance.bind(this);
    this.LiquidSendToAddress = this.LiquidSendToAddress.bind(this);
    this.Stop = this.Stop.bind(this);
  }
  SwapOut(request: SwapOutRequest): Promise<SwapResponse> {
    const data = SwapOutRequest.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'SwapOut', data);
    return promise.then((data) => SwapResponse.decode(new _m0.Reader(data)));
  }

  SwapIn(request: SwapInRequest): Promise<SwapResponse> {
    const data = SwapInRequest.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'SwapIn', data);
    return promise.then((data) => SwapResponse.decode(new _m0.Reader(data)));
  }

  GetSwap(request: GetSwapRequest): Promise<SwapResponse> {
    const data = GetSwapRequest.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'GetSwap', data);
    return promise.then((data) => SwapResponse.decode(new _m0.Reader(data)));
  }

  ListSwaps(request: ListSwapsRequest): Promise<ListSwapsResponse> {
    const data = ListSwapsRequest.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'ListSwaps', data);
    return promise.then((data) => ListSwapsResponse.decode(new _m0.Reader(data)));
  }

  ListPeers(request: ListPeersRequest): Promise<ListPeersResponse> {
    const data = ListPeersRequest.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'ListPeers', data);
    return promise.then((data) => ListPeersResponse.decode(new _m0.Reader(data)));
  }

  ListNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    const data = ListNodesRequest.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'ListNodes', data);
    return promise.then((data) => ListNodesResponse.decode(new _m0.Reader(data)));
  }

  ListRequestedSwaps(request: ListRequestedSwapsRequest): Promise<ListRequestedSwapsResponse> {
    const data = ListRequestedSwapsRequest.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'ListRequestedSwaps', data);
    return promise.then((data) => ListRequestedSwapsResponse.decode(new _m0.Reader(data)));
  }

  ListActiveSwaps(request: ListSwapsRequest): Promise<ListSwapsResponse> {
    const data = ListSwapsRequest.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'ListActiveSwaps', data);
    return promise.then((data) => ListSwapsResponse.decode(new _m0.Reader(data)));
  }

  AllowSwapRequests(request: AllowSwapRequestsRequest): Promise<AllowSwapRequestsResponse> {
    const data = AllowSwapRequestsRequest.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'AllowSwapRequests', data);
    return promise.then((data) => AllowSwapRequestsResponse.decode(new _m0.Reader(data)));
  }

  ReloadPolicyFile(request: ReloadPolicyFileRequest): Promise<ReloadPolicyFileResponse> {
    const data = ReloadPolicyFileRequest.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'ReloadPolicyFile', data);
    return promise.then((data) => ReloadPolicyFileResponse.decode(new _m0.Reader(data)));
  }

  AddPeer(request: AddPeerRequest): Promise<AddPeerResponse> {
    const data = AddPeerRequest.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'AddPeer', data);
    return promise.then((data) => AddPeerResponse.decode(new _m0.Reader(data)));
  }

  RemovePeer(request: RemovePeerRequest): Promise<RemovePeerResponse> {
    const data = RemovePeerRequest.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'RemovePeer', data);
    return promise.then((data) => RemovePeerResponse.decode(new _m0.Reader(data)));
  }

  LiquidGetAddress(request: GetAddressRequest): Promise<GetAddressResponse> {
    const data = GetAddressRequest.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'LiquidGetAddress', data);
    return promise.then((data) => GetAddressResponse.decode(new _m0.Reader(data)));
  }

  LiquidGetBalance(request: GetBalanceRequest): Promise<GetBalanceResponse> {
    const data = GetBalanceRequest.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'LiquidGetBalance', data);
    return promise.then((data) => GetBalanceResponse.decode(new _m0.Reader(data)));
  }

  LiquidSendToAddress(request: SendToAddressRequest): Promise<SendToAddressResponse> {
    const data = SendToAddressRequest.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'LiquidSendToAddress', data);
    return promise.then((data) => SendToAddressResponse.decode(new _m0.Reader(data)));
  }

  Stop(request: Empty): Promise<Empty> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request('peerswap.PeerSwap', 'Stop', data);
    return promise.then((data) => Empty.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
  }
  return long.toNumber();
}

function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
