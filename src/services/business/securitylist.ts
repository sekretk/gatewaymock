import { inject, injectable } from "inversify";
import { IFirm, IFirmInstrumentInfo, InstrumentType } from "../../protocol/gateway";
import { IBusinessService, IFirmsAndInstrumentsService, ILoggerService, ISecurityListAdapter } from "../interfaces";
import { ADAPTERS, TYPES } from "../types";

export const RAW_INSTRUMENT_EURUSD_01: IFirmInstrumentInfo = {
    Symbol: 'USDJPY',
    InstrumentType: InstrumentType.INSTRUMENTTYPE_SPOT,
    ExtraDigitSupport: false,
    FractionSize: 4,
    MinTradeVolume: 10000,
    RoundLot: 100,
    SettlementPeriod: 2,
};

export const RAW_INSTRUMENT_USDCHF_01: IFirmInstrumentInfo = {
    Symbol: 'USDCHF',
    InstrumentType: InstrumentType.INSTRUMENTTYPE_SPOT,
    ExtraDigitSupport: false,
    FractionSize: 4,
    MinTradeVolume: 10000,
    RoundLot: 100,
    SettlementPeriod: 2,
};

export const RAW_RESPONSE_CLIENTS_01: IFirm =
{
    Id: 1,
    Name: 'client1',
    InHouse: true,
    Instruments: [
        RAW_INSTRUMENT_EURUSD_01,
        RAW_INSTRUMENT_USDCHF_01,
    ],
};

export const RAW_RESPONSE_CLIENTS_02: IFirm =
{
    Id: 2,
    Name: 'client2',
    InHouse: true,
    Instruments: [
        RAW_INSTRUMENT_EURUSD_01
    ],
};

export const ARRAY_OF_RAW_CLIENTS_01 = [
    RAW_RESPONSE_CLIENTS_01,
    RAW_RESPONSE_CLIENTS_02,
];

@injectable()
export class SecurityListService implements IFirmsAndInstrumentsService, IBusinessService {

    @inject(ADAPTERS.SecurityListAdapter) private adapter: ISecurityListAdapter;

    @inject(TYPES.LoggerService) private loggerService: ILoggerService;

    start(): void {
        this.loggerService.info('SecuritList Started');

        this.adapter.messages().subscribe(request => {
            this.loggerService.info('[SecurityListService] GET: ' + JSON.stringify(request));
            this.adapter.send(request.id, {
                Firms: ARRAY_OF_RAW_CLIENTS_01
            });
        });
    }
}