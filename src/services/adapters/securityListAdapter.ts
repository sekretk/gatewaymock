import { injectable } from "inversify";
import { IMessageAdapter, IRequestMessage } from "../interfaces";
import { MessageTypes } from "../../protocol/gateway";
import { FirmsInstrumentsRequest } from "../../protocol/gateway";

@injectable()
export class SecurityListAdapter implements IMessageAdapter {
    type = MessageTypes.FirmsInstruments;

    handler(message: IRequestMessage): void {
        const request = FirmsInstrumentsRequest.decode(message.payload);
        console.log(request.toJSON());
    }
}