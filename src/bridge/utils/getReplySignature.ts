import { ClientAppRequest, ClientRequest, RequestNamespace, REPLY_PREFIX } from '../types'

export function getReplySignature (message: ClientRequest): string {
  const {
    namespace,
    action,
    execMode
  } = message

  if (namespace === RequestNamespace.App) {
    const {
      chainId,
      network
    } = message as ClientAppRequest
    return `${REPLY_PREFIX}::${namespace}::${action}::${execMode}::${chainId}::${network}`
  }

  return `${REPLY_PREFIX}::${namespace}::${action}::${execMode}`
}
