import { RequestHandler } from "express";
import { WebsocketRequestHandler } from "express-ws";
import pino from 'pino';
import * as ws from 'ws';

export interface ILoggerService {
    debug(message: string): void;
    info(message: string): void;
    logger(): pino.Logger;
}

export interface IAuthService {
    validate(token: string): string | undefined;
    redeem(token: string): void;
    login(user: string): string;
}

export interface IMiddleService {
    handler: RequestHandler;
}

export interface IAuthCred {
    user: string;
    password: string;
}

export interface IAppService {
    auth: RequestHandler<any, any, IAuthCred, any>;
    ws: WebsocketRequestHandler;
    start: () => void;
}

export interface ISessionMeta {
    user: string;
    token: string;
    contract: string;
}

export interface ISFXSession {
    init(info: ISessionMeta, ws: ws): void;
}

export interface IRequestMessage {
    session: ISessionMeta;
    type: number;
    payload: Uint8Array;
}

export interface IMessageAdapter {
    type: number;
    handler(message: IRequestMessage): void;
}