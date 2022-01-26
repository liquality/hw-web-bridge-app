import EventEmitter from 'events'
import {
  ClientAppRequest,
  ClientRequest,
  BridgeRequest,
  BridgeResponse,
  LOG_PREFIX_CLIENT,
  ActionType,
  HW_BRIDGE_NAME
} from './types'
import { getReplySignature, fromHexToBufferPayload, fromBufferToHexPayload, browserInstance } from './utils'

export class LedgerBridgeClient {
    private _onConnect?: () => void | Promise<void>;
    private _onTransportConnect?: () => void | Promise<void>;
    private _onDisconnect?: (error: string) => void | Promise<void>;
    private _onTransportDisconnected?: () => void | Promise<void>;

    constructor (
        private emiter: EventEmitter,
        private messageTimeout: number = 30000
    ) {
      this.emiter.removeAllListeners()
    }

    onMessageListener (port: chrome.runtime.Port): void {
      if (port.name === HW_BRIDGE_NAME) {
        port.onDisconnect.addListener(() => {
          this.emiter.emit(ActionType.BridgeDisconnected, browserInstance.runtime.lastError?.message)
        })
        port.onMessage.addListener(
          (message: BridgeRequest | BridgeResponse,
            p: chrome.runtime.Port) => {
            if (message && message.action && p.name === HW_BRIDGE_NAME) {
              console.log(LOG_PREFIX_CLIENT, 'onMessage', message)
              this.emiter.emit(message.action, message)
            }
          })

        this.emiter.on(ActionType.BridgeConnected, () => {
          console.log(LOG_PREFIX_CLIENT, ActionType.BridgeConnected)
          if (this._onConnect) {
            this._onConnect()
          }
        })

        this.emiter.on(ActionType.BridgeDisconnected, (error: string) => {
          console.log(LOG_PREFIX_CLIENT, ActionType.BridgeDisconnected, error)
          if (this._onDisconnect) {
            this._onDisconnect(error)
          }
        })

        this.emiter.on(ActionType.TransportConnected, () => {
          console.log(LOG_PREFIX_CLIENT, ActionType.TransportConnected)
          if (this._onTransportConnect) {
            this._onTransportConnect()
          }
        })

        this.emiter.on(ActionType.TransportDisconnected, () => {
          console.log(LOG_PREFIX_CLIENT, ActionType.TransportDisconnected)
          if (this._onTransportDisconnected) {
            this._onTransportDisconnected()
          }
        })

        this.emiter.on('Client::SendMessage', msg => {
          console.log(LOG_PREFIX_CLIENT, 'SendMessage', msg)
          port.postMessage(msg)
        })
      }
    }

    onConnect (listener: () => void | Promise<void>): this {
      this._onConnect = listener
      return this
    }

    onDisconnect (listener: (error: string) => void | Promise<void>): this {
      this._onDisconnect = listener
      return this
    }

    onTransportConnect (listener: () => void | Promise<void>): this {
      this._onTransportConnect = listener
      return this
    }

    onTransportDisconnected (listener: () => void | Promise<void>): this {
      this._onTransportDisconnected = listener
      return this
    }

    async sendMessage<T> (message: ClientAppRequest | ClientRequest): Promise<T> {
      const replySignature = getReplySignature(message)
      let responded = false

      return new Promise((resolve, reject) => {
        const listener = async (request: BridgeResponse) => {
          const {
            action,
            success,
            payload
          } = request
          if (replySignature === action) {
            responded = true
            this.emiter.removeListener(replySignature, listener)
            if (success) {
              resolve(
                fromHexToBufferPayload(payload)
              )
            } else {
              console.error(LOG_PREFIX_CLIENT, payload)
              reject(payload)
            }
          }
        }

        this.emiter.once(replySignature, listener)
        setTimeout(() => {
          if (!responded) {
            this.emiter.removeListener(replySignature, listener)
            reject(new Error(
                        `Timeout calling the hw bridge: ${replySignature}`
            ))
          }
        }, this.messageTimeout)

        this.emiter.emit('Client::SendMessage', {
          ...message,
          payload: fromBufferToHexPayload(message.payload)
        })
      })
    }
}
