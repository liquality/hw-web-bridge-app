import { ExecutionMode } from './ExecutionMode'
import { RequestNamespace } from './RequestNamespace'
import { MessagePayload } from './MessagePayload'

export interface ClientRequest {
    namespace: RequestNamespace;
    action: string;
    execMode: ExecutionMode;
    payload?: MessagePayload;
}
