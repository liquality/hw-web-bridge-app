/* eslint-disable no-unused-expressions */
import Transport from '@ledgerhq/hw-transport'
import {
  ActionType,
  BridgeRequest, BridgeResponse, ClientAppRequest,
  ClientRequest, LOG_PREFIX, RequestNamespace
} from './types'
import { createLedgerApp, executeCall, fromHexToBufferPayload, getReplySignature } from './utils'
import BTCApp from '@ledgerhq/hw-app-btc'

export class MessageHandler {
  private _port?: chrome.runtime.Port;
  private _transport?: Transport;

  setPort (port: chrome.runtime.Port): void {
    this._port = port
    this._port.onMessage.addListener(this.onMessage.bind(this))
  }

  setTransport (transport: Transport): void {
    this._transport = transport
  }

  startListener (): void {
    this._port?.postMessage({ action: ActionType.BridgeConnected })
  }

  sendMessage (message: BridgeRequest | BridgeResponse): void {
    console.log(LOG_PREFIX, 'sendMessage', message)
    const namespace = (message as BridgeResponse).namespace || 'Bridge'
    this._port?.postMessage({
      ...message,
      namespace
    })
  }

  private async onMessage (request: ClientRequest): Promise<void> {
    if (!this._port || !this._transport) {
      throw new Error('The message handler should have a port and transport first.')
    }

    console.log(LOG_PREFIX, 'onMessage', request)
    const { namespace } = request
    try {
      switch (namespace) {
        case RequestNamespace.App:
          await this.onAppMessage(request as ClientAppRequest)
          break
        case RequestNamespace.Transport:
          await this.onTransportMessage(request)
          break
        default:
          throw new Error('The namespace is required.')
      }
    } catch (err) {
      debugger
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      console.log('Error Type: ', typeof err)
      console.log('Error Details: ', Object.entries(err as any))
      const payload = typeof err === 'string' ? new Error(err) : { ...(err as any) }
      console.error('onMessage ERROR: ', err)
      this.sendMessage({
        namespace,
        action: getReplySignature(request),
        success: false,
        payload
      })
    }
  }

  private async onAppMessage (request: ClientAppRequest): Promise<void> {
    const { action, execMode, payload, chainId, namespace } = request

    if (this._transport) {
      const app = createLedgerApp(chainId, this._transport)
      if (app) {
        const reply = getReplySignature(request)
        let result
        if (action === 'createPaymentTransactionNew') {
          debugger
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const parsedInput = fromHexToBufferPayload(payload)
          result = await (app as any).createPaymentTransactionNew(...parsedInput)
        } else {
          result = await executeCall(action, execMode, app, payload || {})
        }

        this.sendMessage({
          namespace,
          action: reply,
          success: true,
          payload: result
        })
      }
    }
  }

  private async onTransportMessage (request: ClientRequest): Promise<void> {
    const reply = getReplySignature(request)
    const { action, execMode, payload, namespace } = request

    if (this._transport) {
      const result = await executeCall(
        action,
        execMode,
        this._transport,
        payload || {}
      )
      this.sendMessage({
        namespace,
        action: reply,
        success: true,
        payload: result
      })
    }
  }
}
