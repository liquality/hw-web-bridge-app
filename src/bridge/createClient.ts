import { EventEmitter } from 'events'
import { LedgerBridgeClient } from '.'
import { browserInstance } from './utils'

export const createClient = (): LedgerBridgeClient => {
  const bridgeClient = new LedgerBridgeClient(new EventEmitter())
  const listener = bridgeClient.onMessageListener.bind(bridgeClient)

  if (!browserInstance.runtime.onConnectExternal.hasListener(listener)) {
    browserInstance.runtime.onConnectExternal.removeListener(listener)
  }
  browserInstance.runtime.onConnectExternal.addListener(listener)
  return bridgeClient
}
