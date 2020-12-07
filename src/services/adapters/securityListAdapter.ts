import { injectable } from "inversify";
import { FirmsInstrumentsResponse, IFirmsInstrumentsResponse, MessageTypes } from "../../protocol/gateway";
import { FirmsInstrumentsRequest } from "../../protocol/gateway";
import { GenericAdapter } from "./genericAdapter";
import { IRequest } from "../interfaces";

@injectable()
export class SecurityListAdapter extends GenericAdapter<FirmsInstrumentsRequest, IFirmsInstrumentsResponse> {
    decode = (): FirmsInstrumentsRequest => new FirmsInstrumentsRequest();

    encode = (message: IFirmsInstrumentsResponse): Uint8Array => FirmsInstrumentsResponse.encode(message).finish();

    type = () => MessageTypes.FirmsInstruments;
}