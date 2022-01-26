import Transport from '@ledgerhq/hw-transport'
import TransportWebHID from '@ledgerhq/hw-transport-webhid'
import { ActionType, LOG_PREFIX } from './types'

export const createLedgerTransport = async (
  port: chrome.runtime.Port,
  onDisconnect: (error?: Error) => void | Promise<void>
): Promise<Transport> => {
  const transport = await TransportWebHID.create()
  transport.on('disconnect', async (error?: Error) => {
    console.error(LOG_PREFIX, ActionType.TransportDisconnected, error)
    port.postMessage({ action: ActionType.TransportDisconnected })
    onDisconnect(error)
  })

  port.postMessage({ action: ActionType.TransportConnected })
  return transport
}
