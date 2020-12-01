import { IMessageAdapter, IRequest } from ".";
import { FirmsInstrumentsRequest, IFirmsInstrumentsResponse, ISpotQuoteResponse, SpotQuoteRequest } from "../../protocol/gateway";

export type ISecurityListAdapter = IMessageAdapter<IRequest<FirmsInstrumentsRequest>, IFirmsInstrumentsResponse>;

export type ISpotPriceAdapter = IMessageAdapter<IRequest<SpotQuoteRequest>, ISpotQuoteResponse>;