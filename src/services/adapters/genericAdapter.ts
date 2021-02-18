import { inject, injectable } from "inversify";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IMessageAdapter, IRequest, ITransfer } from "../interfaces";
import { TYPES } from "../types";

@injectable()
export abstract class GenericAdapter<Tin, Tout> implements IMessageAdapter<Tin, Tout> {

    abstract decode(request: Uint8Array): Tin;

    abstract encode(message: Tout): Uint8Array;

    abstract type(): number;

    @inject(TYPES.SessionService) private sessionService: ITransfer;

    send = (request: number, message: Tout): void => this.sessionService.send(request, this.encode(message));

    messages = (): Observable<IRequest<Tin>> => this.sessionService.messages(this.type()).pipe(map(this.transformRequest));

    private transformRequest = (request: IRequest<Uint8Array>): IRequest<Tin> => ({
        ...request,
        payload: this.decode(request.payload)
    })
}