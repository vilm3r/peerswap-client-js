import { Policy } from '../proto/ps';
import { promisify } from '../util';

export const reloadPolicyFile = (client: any): Promise<Policy> => promisify(client, 'ReloadPolicyFile', {});

export const addPeer = (client: any, peer_pubkey: string): Promise<Policy> =>
  promisify(client, 'AddPeer', { peer_pubkey });

export const removePeer = (client: any, peer_pubkey: string): Promise<Policy> =>
  promisify(client, 'RemovePeer', { peer_pubkey });

export const allowSwapRequests = (client: any, allow: boolean): Promise<Policy> =>
  promisify(client, 'AllowSwapRequests', { allow });

export const addSusPeer = (client: any, peer_pubkey: string): Promise<Policy> =>
  promisify(client, 'AddSusPeer', { peer_pubkey });

export const removeSusPeer = (client: any, peer_pubkey: string): Promise<Policy> =>
  promisify(client, 'RemoveSusPeer', { peer_pubkey });
