import { injectable } from "inversify";
import { ISpotQuoteResponse, MessageTypes, SpotQuoteRequest, SpotQuoteResponse } from "../../protocol/gateway";
import { GenericAdapter } from "./genericAdapter";
import { IRequest } from "../interfaces";

@injectable()
export class SpotPriceAdapter extends GenericAdapter<SpotQuoteRequest, ISpotQuoteResponse> {
    decode = (data: Uint8Array): SpotQuoteRequest => SpotQuoteRequest.decode(data);

    encode = (message: ISpotQuoteResponse): Uint8Array => SpotQuoteResponse.encode(message).finish();

    type = () => MessageTypes.SpotQuote;
}