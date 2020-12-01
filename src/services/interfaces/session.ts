import { Observable } from 'rxjs';
import * as ws from 'ws';
import { RequestType } from '../../protocol/gateway';

export interface ISessionMeta {
    user: string;
    token: string;
    contract: string;
}

export interface IRequest<T> {
    id: number;
    payload: T;
    messageType: number;
    type: RequestType;
}

export interface IError {
    message: string;
    code: number;
}

export interface ISFXSession {
    init(info: ISessionMeta, ws: ws): void;
    session: ISessionMeta;
    messages(type: number): Observable<IRequest<Uint8Array>>;
    send: (request: number, data: Uint8Array) => void;
    terminate: (request: number, data: Uint8Array) => void;
    error: (request: number, error: IError) => void;
}