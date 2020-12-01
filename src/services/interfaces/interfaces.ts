import { RequestHandler } from "express";
import { WebsocketRequestHandler } from "express-ws";
import pino from 'pino';
import { Observable } from "rxjs";


export interface ILoggerService {
    debug(message: string): void;
    info(message: string): void;
    error(message: string): void;
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


export interface IMessageAdapter<Tin, Tout> {
    type(): number;
    send(request: number, message: Tout): void;
    messages(): Observable<Tin>;
}

export interface IBusinessService {
    start(): void;
}

export interface ISessionInit {
    init(): void;
}