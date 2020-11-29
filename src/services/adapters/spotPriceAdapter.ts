import { injectable } from "inversify";
import { IMessageAdapter, IRequestMessage } from "../interfaces";
import { MessageTypes } from "../../protocol/gateway";

@injectable()
export class SpotPriceAdapter implements IMessageAdapter {
    type = MessageTypes.SpotQuote;

    handler(message: IRequestMessage): void {

    }
}