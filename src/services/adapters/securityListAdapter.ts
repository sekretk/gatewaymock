import { injectable } from "inversify";
import { FirmsInstrumentsResponse, IFirmsInstrumentsResponse, MessageTypes } from "../../protocol/gateway";
import { FirmsInstrumentsRequest } from "../../protocol/gateway";
import { GenericAdapter } from "./genericAdapter";
import { IRequest } from "../interfaces";

@injectable()
export class SecurityListAdapter extends GenericAdapter<FirmsInstrumentsRequest, IFirmsInstrumentsResponse> {
    decode = (data: IRequest): FirmsInstrumentsRequest => FirmsInstrumentsRequest.decode(data.payload);

    encode = (message: IFirmsInstrumentsResponse): Uint8Array => FirmsInstrumentsResponse.encode(message).finish();

    type = () => MessageTypes.FirmsInstruments;
}