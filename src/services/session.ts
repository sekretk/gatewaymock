import { inject, injectable, multiInject } from "inversify";
import { Observable, Subject } from "rxjs";
import { ILoggerService, IMessageAdapter, ISessionMeta, ISFXSession } from "./interfaces";
import { TYPES } from "./types";
import * as ws from 'ws';
import { takeUntil } from "rxjs/operators";
import { removeLengthHeader } from "../utils/buffer";
import { EnvelopeRequest } from "../protocol/gateway";

@injectable()
export class SFXSessionSession implements ISFXSession {

    @inject(TYPES.LoggerService) private loggerService: ILoggerService;

    @multiInject(TYPES.MessageAdapterService) private adapters: Array<IMessageAdapter>;

    private connection: [Observable<Uint8Array>, Subject<Uint8Array>];

    private _info: ISessionMeta;

    private startWsConnection = (in$: Observable<Uint8Array>, out$: Subject<Uint8Array>) => {
        this.connection = [in$, out$];

        in$.subscribe(c => {
            // out$.next('Echo response: ' + c);
            // out$.next('New response');
        });
    }

    init(info: ISessionMeta, socket: ws): void {

        this._info = info;

        const destroy$ = new Subject<boolean>();
        const in$ = new Subject<Uint8Array>();
        const out$ = new Subject<Uint8Array>();

        out$.subscribe(data => {
            socket.send(data);
        });

        in$.subscribe(message => {

        })

        socket.on('message', (msg: ArrayBuffer) => {

            // todo: check for
            const arr = removeLengthHeader(new Uint8Array(msg));

            const envelop = EnvelopeRequest.decode(arr);

            const messageAdapter = this.adapters.find(adapter => adapter.type === envelop.nestedMsgType);

            messageAdapter?.handler({
                payload: envelop.nestedMessage?.value,
                session: info,
                type: envelop.nestedMsgType,
            })

            in$.next(arr);
        });

        socket.on('close', () => {
            this.loggerService.debug('ws closed');
        });

        this.startWsConnection(in$.pipe(takeUntil(destroy$)), out$);
    }

}