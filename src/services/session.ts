import { inject, injectable, LazyServiceIdentifer, multiInject } from "inversify";
import { Observable, Subject } from "rxjs";
import { IBusinessService, ILoggerService, IMessageAdapter } from "./interfaces/interfaces";
import { TYPES } from "./types";
import * as ws from 'ws';
import { filter, map, takeUntil } from "rxjs/operators";
import { removeLengthHeader } from "../utils/buffer";
import gateway, { EnvelopeRequest, EnvelopeResponse, ResponseError } from "../protocol/gateway";
import { ISFXSession, ISessionMeta, IRequest, IError } from "./interfaces";
import { env } from "process";

@injectable()
export class SFXSessionSession implements ISFXSession {


    private destroy$ = new Subject<boolean>();
    private in$ = new Subject<Uint8Array>();
    private out$ = new Subject<EnvelopeResponse>();

    session: ISessionMeta;

    messages = (type: number): Observable<IRequest> => {
        return this.in$.pipe(
            takeUntil(this.destroy$),
            map(data => EnvelopeRequest.decode(data)),
            map(envelop => ({
                id: envelop.requestId,
                payload: envelop.nestedMessage.value,
                messageType: envelop.nestedMsgType,
                type: envelop.requestType
            })),
            filter(request => request.messageType === type)
        );
    }

    send = (request: number, data: Uint8Array): void => this.out$.next(this.createResponse(request, data))

    terminate = (request: number, data: Uint8Array): void => this.out$.next(this.createResponse(request, data, true))

    error = (request: number, error: IError): void => this.out$.next(this.createResponse(request, null, false, error))

    private createResponse = (request: number, data: Uint8Array = null, terminal = false, error: IError = null): EnvelopeResponse => EnvelopeResponse.create({
            nestedMessage: gateway.google.protobuf.BytesValue.create({ value: data }),
            requestId: request,
            responseId: 1,
            terminal,
            error: ResponseError.create({
                errorCode: error.code,
                errorMessage: gateway.google.protobuf.StringValue.create({ value: error.message }),
            })
        })

    connected: boolean;

    @inject(TYPES.LoggerService) private loggerService: ILoggerService;

    init(info: ISessionMeta, socket: ws): void {

        this.session = info;

        this.out$.pipe(
            takeUntil(this.destroy$),
            map(response => EnvelopeResponse.encode(response).finish())
        ).subscribe(data => {
            socket.send(data);
        });

        socket.on('message', (msg: ArrayBuffer) => {

            const arr = removeLengthHeader(new Uint8Array(msg));

            this.in$.next(arr);
        });

        socket.on('close', () => {
            this.loggerService.debug('ws closed');
        });

        this.connected = true;
    }

}