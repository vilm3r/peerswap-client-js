import { join } from 'path';
import { credentials, loadPackageDefinition, ServiceClientConstructor, Client } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';

const options = {
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const proto = loadPackageDefinition(loadSync(join(__dirname, './ps.proto'), options));

interface PeerSwapConfig {
  socket?: string;
}

export const getPeerSwapClient = (config?: PeerSwapConfig | null) => {
  const endpoint = config?.socket || 'localhost:42069';
  return new (proto.peerswap as any).PeerSwap(endpoint, credentials.createInsecure());
};
