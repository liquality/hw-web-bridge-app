/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function fromBufferToHexPayload (payload?: any): any {
  if (payload instanceof Uint8Array || payload instanceof Buffer) {
    return { type: 'Hex', data: payload.toString('hex') }
  }

  if (payload instanceof Array) {
    return payload.map(i => fromBufferToHexPayload(i))
  }

  if (payload && typeof payload === 'object') {
    if (Object.keys(payload).length > 0) {
      const output: {[key: string]: unknown} = {}
      for (const key in payload) {
        // eslint-disable-next-line no-prototype-builtins
        if (payload.hasOwnProperty(key)) {
          output[key] = fromBufferToHexPayload(payload[key])
        }
      }
      return output
    }
  }

  return payload
}
