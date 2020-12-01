import { inject, injectable } from "inversify";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IMessageAdapter, IRequest, ISFXSession } from "../interfaces";
import { TYPES } from "../types";

@injectable()
export abstract class GenericAdapter<Tin, Tout> implements IMessageAdapter<Tin, Tout> {

    abstract decode(request: IRequest<Uint8Array>): Tin;

    abstract encode(message: Tout): Uint8Array;

    abstract type(): number;

    @inject(TYPES.SessionService) private sessionService: ISFXSession;

    send(request: number, message: Tout): void {
        this.sessionService.send(request, this.encode(message));
    }

    messages(): Observable<Tin> {
        return this.sessionService.messages(this.type()).pipe(map(request => this.decode(request)));
    }

}