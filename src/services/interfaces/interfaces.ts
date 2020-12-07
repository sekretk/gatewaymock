import { RequestHandler } from "express";
import { WebsocketRequestHandler } from "express-ws";
import { Observable } from "rxjs";
import { IRequest, ISessionMeta } from ".";

export interface IAuthService {
    validate(token: string): ISessionMeta | undefined;
    redeem(token: string): void;
    login(creds: IAuthCred): string;
}

export interface IMiddleService {
    handler: RequestHandler;
}

export interface IAuthCred {
    user: string;
    password: string;
    hash: string;
}

export interface IAppService {
    auth: RequestHandler<any, any, IAuthCred, any>;
    ws: WebsocketRequestHandler;
    start: () => void;
}


export interface IMessageAdapter<Tin, Tout> {
    type(): number;
    send(request: number, message: Tout): void;
    messages(): Observable<IRequest<Tin>>;
}

export interface IBusinessService {
    start(): void;
}

export interface ISessionInit {
    init(): void;
}