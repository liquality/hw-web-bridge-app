
export interface BridgeResponse {
    namespace: string;
    action: string;
    success: boolean;
    payload: any | Error;
}
