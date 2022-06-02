import { AddPeerResponse, ReloadPolicyFileResponse, RemovePeerResponse } from '../proto/ps';
import { promisify } from '../util';

export const reloadPolicyFile = (client: any): Promise<ReloadPolicyFileResponse> =>
  promisify(client, 'ReloadPolicyFile', {});

// tslint:disable-next-line
export const addPeer = (client: any, peer_pubkey: string): Promise<AddPeerResponse> =>
  promisify(client, 'AddPeer', { peer_pubkey });

// tslint:disable-next-line
export const removePeer = (client: any, peer_pubkey: string): Promise<RemovePeerResponse> =>
  promisify(client, 'RemovePeer', { peer_pubkey });
