import Transport from '@ledgerhq/hw-transport'
import { ChainId, isEthereumChain } from '@liquality/cryptoassets'
import BTCApp from '@ledgerhq/hw-app-btc'
import ETHApp from '@ledgerhq/hw-app-eth'

export const createLedgerApp = (
  chainId: ChainId,
  transport: Transport
): ETHApp | BTCApp | null => {
  if (chainId === ChainId.Bitcoin) {
    return new BTCApp(transport)
  } else if (isEthereumChain(chainId)) {
    return new ETHApp(transport)
  }
  return null
}
