import { MessagePayload } from './MessagePayload'

export interface BridgeRequest {
    action: string;
    payload?: MessagePayload;
}
