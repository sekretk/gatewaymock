import { IMessageAdapter, IRequest } from ".";
import { FirmsInstrumentsRequest, IFirmsInstrumentsResponse, ISpotQuoteResponse, SpotQuoteRequest } from "../../protocol/gateway";

export type ISecurityListAdapter = IMessageAdapter<FirmsInstrumentsRequest, IFirmsInstrumentsResponse>;

export type ISpotPriceAdapter = IMessageAdapter<SpotQuoteRequest, ISpotQuoteResponse>;