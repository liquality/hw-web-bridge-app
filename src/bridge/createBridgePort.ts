import { HW_BRIDGE_NAME, LOG_PREFIX } from './types'
import { browserInstance } from './utils'

export const createBridgePort = (extensionId: string, onDisconnect: (error?: Error) => void | Promise<void>): chrome.runtime.Port => {
  const port = browserInstance.runtime.connect(extensionId, {
    name: HW_BRIDGE_NAME
  })
  if (!port.onMessage.hasListeners()) {
    port.onDisconnect.addListener((p: chrome.runtime.Port) => {
      const error = browserInstance?.runtime?.lastError?.message || 'Port disconnected'
      console.error(
        LOG_PREFIX,
        'onDisconnect',
        error,
        p.name
      )
      onDisconnect(new Error(error))
    })
    port.postMessage({
      action: 'PortCreated'
    })
  }

  return port
}
