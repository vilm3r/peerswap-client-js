# PeerSwap-Client-JS

*Do not use this in production. PeerSwap is still in it's development phase and I expect the RPC interface to change before release.*

### Usage

```
import { getPeerSwapClient, listSwaps } from '@vilm3r/peerswap-client'

const client = getPeerSwapClient({ socket: 'localhost:42069'})
listSwaps(client).then(console.log)
```