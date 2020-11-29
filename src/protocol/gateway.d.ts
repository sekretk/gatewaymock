import * as $protobuf from "protobufjs";

export interface IAuditRequest {
    ClientId?: (number|null);
}

export class AuditRequest implements IAuditRequest {
    constructor(properties?: IAuditRequest);
    public ClientId: number;
    public static create(properties?: IAuditRequest): AuditRequest;
    public static encode(message: IAuditRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IAuditRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuditRequest;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuditRequest;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): AuditRequest;
    public static toObject(message: AuditRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface INotification {
    Id?: (string|null);
    Topic?: (NotificationItemType|null);
    CustomHeader?: (string|null);
    Message?: (string|null);
    Date?: (string|null);
    RelatedOrder?: (string|null);
    ClientId?: (number|null);
}

export class Notification implements INotification {
    constructor(properties?: INotification);
    public Id: string;
    public Topic: NotificationItemType;
    public CustomHeader: string;
    public Message: string;
    public Date: string;
    public RelatedOrder: string;
    public ClientId: number;
    public static create(properties?: INotification): Notification;
    public static encode(message: INotification, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: INotification, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Notification;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Notification;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Notification;
    public static toObject(message: Notification, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IAuditResponse {
    Notifications?: (INotification[]|null);
    Type?: (UpdateType|null);
}

export class AuditResponse implements IAuditResponse {
    constructor(properties?: IAuditResponse);
    public Notifications: INotification[];
    public Type: UpdateType;
    public static create(properties?: IAuditResponse): AuditResponse;
    public static encode(message: IAuditResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IAuditResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuditResponse;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuditResponse;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): AuditResponse;
    public static toObject(message: AuditResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export enum TradeSide {
    TRADESIDE_SELL = 0,
    TRADESIDE_BUY = 1
}

export enum QuoteSide {
    QUOTESIDE_BID = 0,
    QUOTESIDE_OFFER = 1
}

export enum SpotType {
    SPOTTYPE_MARKET = 0,
    SPOTTYPE_FULL = 1,
    SPOTTYPE_STOP = 2,
    SPOTTYPE_GTC = 3,
    SPOTTYPE_IOC = 4
}

export enum SpotOrderState {
    SPOTORDERSTATE_EXECUTING = 0,
    SPOTORDERSTATE_FILLED = 1,
    SPOTORDERSTATE_PARTIALLYFILLED = 2,
    SPOTORDERSTATE_CANCELLED = 3,
    SPOTORDERSTATE_REJECTED = 4,
    SPOTORDERSTATE_SUSPENDED = 5
}

export enum UpdateType {
    UPDATETYPE_INCREMENT = 0,
    UPDATETYPE_SNAPSHOT = 1
}

export enum NotificationItemType {
    NOTIFICATIONITEMTYPE_SENT = 0,
    NOTIFICATIONITEMTYPE_FILLED = 1,
    NOTIFICATIONITEMTYPE_REJECTED = 2,
    NOTIFICATIONITEMTYPE_SUSPENDED = 3,
    NOTIFICATIONITEMTYPE_TRADINGDISABLED = 4,
    NOTIFICATIONITEMTYPE_CANCELLED = 5,
    NOTIFICATIONITEMTYPE_EXPIRED = 6,
    NOTIFICATIONITEMTYPE_ORDERCHANGED = 7,
    NOTIFICATIONITEMTYPE_BACKTOACTIVE = 8,
    NOTIFICATIONITEMTYPE_UNKNOWN = 9
}

export enum ValueType {
    VALUETYPE_DATE = 0,
    VALUETYPE_PRICE = 1,
    VALUETYPE_QUANTITY = 2
}

export enum RequestType {
    REQUESTTYPE_UNKNOWN = 0,
    REQUESTTYPE_SUBSCRIBE = 1,
    REQUESTTYPE_UNSUBSCRIBE = 2
}

export enum InstrumentType {
    INSTRUMENTTYPE_UNKNOWN = 0,
    INSTRUMENTTYPE_SPOT = 1,
    INSTRUMENTTYPE_FORWARD = 2,
    INSTRUMENTTYPE_SPOTFORWARD = 3
}

export interface IResponseError {
    errorCode?: (number|null);
    errorMessage?: (google.protobuf.IStringValue|null);
}

export class ResponseError implements IResponseError {
    constructor(properties?: IResponseError);
    public errorCode: number;
    public errorMessage?: (google.protobuf.IStringValue|null);
    public static create(properties?: IResponseError): ResponseError;
    public static encode(message: IResponseError, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IResponseError, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResponseError;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResponseError;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ResponseError;
    public static toObject(message: ResponseError, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEnvelopeRequest {
    requestId?: (number|null);
    requestType?: (RequestType|null);
    nestedMsgType?: (number|null);
    nestedMessage?: (google.protobuf.IBytesValue|null);
}

export class EnvelopeRequest implements IEnvelopeRequest {
    constructor(properties?: IEnvelopeRequest);
    public requestId: number;
    public requestType: RequestType;
    public nestedMsgType: number;
    public nestedMessage?: (google.protobuf.IBytesValue|null);
    public static create(properties?: IEnvelopeRequest): EnvelopeRequest;
    public static encode(message: IEnvelopeRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEnvelopeRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EnvelopeRequest;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EnvelopeRequest;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EnvelopeRequest;
    public static toObject(message: EnvelopeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IEnvelopeResponse {
    requestId?: (number|null);
    responseId?: (number|null);
    error?: (IResponseError|null);
    nestedMessage?: (google.protobuf.IBytesValue|null);
    terminal?: (boolean|null);
}

export class EnvelopeResponse implements IEnvelopeResponse {
    constructor(properties?: IEnvelopeResponse);
    public requestId: number;
    public responseId: number;
    public error?: (IResponseError|null);
    public nestedMessage?: (google.protobuf.IBytesValue|null);
    public terminal: boolean;
    public static create(properties?: IEnvelopeResponse): EnvelopeResponse;
    public static encode(message: IEnvelopeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IEnvelopeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EnvelopeResponse;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EnvelopeResponse;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): EnvelopeResponse;
    public static toObject(message: EnvelopeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export namespace google {

    namespace protobuf {

        interface IDoubleValue {
            value?: (number|null);
        }

        class DoubleValue implements IDoubleValue {
            constructor(properties?: google.protobuf.IDoubleValue);
            public value: number;
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IFloatValue {
            value?: (number|null);
        }

        class FloatValue implements IFloatValue {
            constructor(properties?: google.protobuf.IFloatValue);
            public value: number;
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IInt64Value {
            value?: (number|Long|null);
        }

        class Int64Value implements IInt64Value {
            constructor(properties?: google.protobuf.IInt64Value);
            public value: (number|Long);
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IUInt64Value {
            value?: (number|Long|null);
        }

        class UInt64Value implements IUInt64Value {
            constructor(properties?: google.protobuf.IUInt64Value);
            public value: (number|Long);
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IInt32Value {
            value?: (number|null);
        }

        class Int32Value implements IInt32Value {
            constructor(properties?: google.protobuf.IInt32Value);
            public value: number;
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IUInt32Value {
            value?: (number|null);
        }

        class UInt32Value implements IUInt32Value {
            constructor(properties?: google.protobuf.IUInt32Value);
            public value: number;
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IBoolValue {
            value?: (boolean|null);
        }

        class BoolValue implements IBoolValue {
            constructor(properties?: google.protobuf.IBoolValue);
            public value: boolean;
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IStringValue {
            value?: (string|null);
        }

        class StringValue implements IStringValue {
            constructor(properties?: google.protobuf.IStringValue);
            public value: string;
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IBytesValue {
            value?: (Uint8Array|null);
        }

        class BytesValue implements IBytesValue {
            constructor(properties?: google.protobuf.IBytesValue);
            public value: Uint8Array;
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }
}

export interface IFirmInstrumentInfo {
    Symbol?: (string|null);
    RoundLot?: (number|null);
    MinTradeVolume?: (number|null);
    FractionSize?: (number|null);
    ExtraDigitSupport?: (boolean|null);
    InstrumentType?: (InstrumentType|null);
    Tenors?: (string[]|null);
    SettlementPeriod?: (number|null);
    Holidays?: (string[]|null);
}

export class FirmInstrumentInfo implements IFirmInstrumentInfo {
    constructor(properties?: IFirmInstrumentInfo);
    public Symbol: string;
    public RoundLot: number;
    public MinTradeVolume: number;
    public FractionSize: number;
    public ExtraDigitSupport: boolean;
    public InstrumentType: InstrumentType;
    public Tenors: string[];
    public SettlementPeriod: number;
    public Holidays: string[];
    public static create(properties?: IFirmInstrumentInfo): FirmInstrumentInfo;
    public static encode(message: IFirmInstrumentInfo, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IFirmInstrumentInfo, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FirmInstrumentInfo;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FirmInstrumentInfo;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): FirmInstrumentInfo;
    public static toObject(message: FirmInstrumentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IFirm {
    Id?: (number|null);
    Name?: (string|null);
    ExternalRef?: (google.protobuf.IStringValue|null);
    InHouse?: (boolean|null);
    Instruments?: (IFirmInstrumentInfo[]|null);
}

export class Firm implements IFirm {
    constructor(properties?: IFirm);
    public Id: number;
    public Name: string;
    public ExternalRef?: (google.protobuf.IStringValue|null);
    public InHouse: boolean;
    public Instruments: IFirmInstrumentInfo[];
    public static create(properties?: IFirm): Firm;
    public static encode(message: IFirm, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IFirm, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Firm;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Firm;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Firm;
    public static toObject(message: Firm, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IFirmsInstrumentsRequest {
}

export class FirmsInstrumentsRequest implements IFirmsInstrumentsRequest {
    constructor(properties?: IFirmsInstrumentsRequest);
    public static create(properties?: IFirmsInstrumentsRequest): FirmsInstrumentsRequest;
    public static encode(message: IFirmsInstrumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IFirmsInstrumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FirmsInstrumentsRequest;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FirmsInstrumentsRequest;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): FirmsInstrumentsRequest;
    public static toObject(message: FirmsInstrumentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IFirmsInstrumentsResponse {
    Firms?: (IFirm[]|null);
}

export class FirmsInstrumentsResponse implements IFirmsInstrumentsResponse {
    constructor(properties?: IFirmsInstrumentsResponse);
    public Firms: IFirm[];
    public static create(properties?: IFirmsInstrumentsResponse): FirmsInstrumentsResponse;
    public static encode(message: IFirmsInstrumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IFirmsInstrumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FirmsInstrumentsResponse;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FirmsInstrumentsResponse;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): FirmsInstrumentsResponse;
    public static toObject(message: FirmsInstrumentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IForwardQuoteRequest {
    ClientId?: (number|null);
    Quantity?: (number|null);
    Instrument?: (string|null);
    BaseCurrency?: (string|null);
    Tenor?: (string|null);
}

export class ForwardQuoteRequest implements IForwardQuoteRequest {
    constructor(properties?: IForwardQuoteRequest);
    public ClientId: number;
    public Quantity: number;
    public Instrument: string;
    public BaseCurrency: string;
    public Tenor: string;
    public static create(properties?: IForwardQuoteRequest): ForwardQuoteRequest;
    public static encode(message: IForwardQuoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IForwardQuoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ForwardQuoteRequest;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ForwardQuoteRequest;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ForwardQuoteRequest;
    public static toObject(message: ForwardQuoteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IForwardQuote {
    Rate?: (number|null);
    Spot?: (number|null);
    Points?: (number|null);
}

export class ForwardQuote implements IForwardQuote {
    constructor(properties?: IForwardQuote);
    public Rate: number;
    public Spot: number;
    public Points: number;
    public static create(properties?: IForwardQuote): ForwardQuote;
    public static encode(message: IForwardQuote, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IForwardQuote, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ForwardQuote;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ForwardQuote;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ForwardQuote;
    public static toObject(message: ForwardQuote, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IForwardQuoteResponse {
    Ask?: (IForwardQuote|null);
    Bid?: (IForwardQuote|null);
}

export class ForwardQuoteResponse implements IForwardQuoteResponse {
    constructor(properties?: IForwardQuoteResponse);
    public Ask?: (IForwardQuote|null);
    public Bid?: (IForwardQuote|null);
    public static create(properties?: IForwardQuoteResponse): ForwardQuoteResponse;
    public static encode(message: IForwardQuoteResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IForwardQuoteResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ForwardQuoteResponse;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ForwardQuoteResponse;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): ForwardQuoteResponse;
    public static toObject(message: ForwardQuoteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ILimitsRequest {
}

export class LimitsRequest implements ILimitsRequest {
    constructor(properties?: ILimitsRequest);
    public static create(properties?: ILimitsRequest): LimitsRequest;
    public static encode(message: ILimitsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ILimitsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LimitsRequest;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LimitsRequest;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): LimitsRequest;
    public static toObject(message: LimitsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ILimit {
    Symbol?: (string|null);
    Limit?: (number|null);
    Consumed?: (number|null);
}

export class Limit implements ILimit {
    constructor(properties?: ILimit);
    public Symbol: string;
    public Limit: number;
    public Consumed: number;
    public static create(properties?: ILimit): Limit;
    public static encode(message: ILimit, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ILimit, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Limit;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Limit;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Limit;
    public static toObject(message: Limit, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ILimitsResponse {
    Limits?: (ILimit[]|null);
}

export class LimitsResponse implements ILimitsResponse {
    constructor(properties?: ILimitsResponse);
    public Limits: ILimit[];
    public static create(properties?: ILimitsResponse): LimitsResponse;
    public static encode(message: ILimitsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ILimitsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LimitsResponse;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LimitsResponse;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): LimitsResponse;
    public static toObject(message: LimitsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export enum MessageTypes {
    FirmsInstruments = 0,
    SpotQuote = 1,
    PlaceSpotOrder = 2,
    Limits = 3,
    Audit = 4,
    SpotOrders = 5,
    Persistance = 6,
    PersistanceSave = 7,
    ForwardQuote = 8,
    TenorResolve = 9
}

export interface IPersistanceRequest {
    ItemsToSave?: (IPersistanceItem[]|null);
}

export class PersistanceRequest implements IPersistanceRequest {
    constructor(properties?: IPersistanceRequest);
    public ItemsToSave: IPersistanceItem[];
    public static create(properties?: IPersistanceRequest): PersistanceRequest;
    public static encode(message: IPersistanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPersistanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PersistanceRequest;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PersistanceRequest;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): PersistanceRequest;
    public static toObject(message: PersistanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IPersistanceResponse {
    Status?: (boolean|null);
}

export class PersistanceResponse implements IPersistanceResponse {
    constructor(properties?: IPersistanceResponse);
    public Status: boolean;
    public static create(properties?: IPersistanceResponse): PersistanceResponse;
    public static encode(message: IPersistanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPersistanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PersistanceResponse;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PersistanceResponse;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): PersistanceResponse;
    public static toObject(message: PersistanceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IPersistanceItem {
    Key?: (string|null);
    Value?: (string|null);
}

export class PersistanceItem implements IPersistanceItem {
    constructor(properties?: IPersistanceItem);
    public Key: string;
    public Value: string;
    public static create(properties?: IPersistanceItem): PersistanceItem;
    public static encode(message: IPersistanceItem, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPersistanceItem, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PersistanceItem;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PersistanceItem;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): PersistanceItem;
    public static toObject(message: PersistanceItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IPersistanceSaveRequest {
    Items?: (IPersistanceItem[]|null);
}

export class PersistanceSaveRequest implements IPersistanceSaveRequest {
    constructor(properties?: IPersistanceSaveRequest);
    public Items: IPersistanceItem[];
    public static create(properties?: IPersistanceSaveRequest): PersistanceSaveRequest;
    public static encode(message: IPersistanceSaveRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPersistanceSaveRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PersistanceSaveRequest;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PersistanceSaveRequest;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): PersistanceSaveRequest;
    public static toObject(message: PersistanceSaveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IPersistanceSaveResponse {
    Status?: (boolean|null);
}

export class PersistanceSaveResponse implements IPersistanceSaveResponse {
    constructor(properties?: IPersistanceSaveResponse);
    public Status: boolean;
    public static create(properties?: IPersistanceSaveResponse): PersistanceSaveResponse;
    public static encode(message: IPersistanceSaveResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPersistanceSaveResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PersistanceSaveResponse;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PersistanceSaveResponse;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): PersistanceSaveResponse;
    public static toObject(message: PersistanceSaveResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IPlaceSpotOrderRequest {
    Symbol?: (string|null);
    Side?: (TradeSide|null);
    Type?: (SpotType|null);
    BaseCurrency?: (string|null);
    Price?: (number|null);
    Quantity?: (number|null);
    ClientId?: (number|null);
}

export class PlaceSpotOrderRequest implements IPlaceSpotOrderRequest {
    constructor(properties?: IPlaceSpotOrderRequest);
    public Symbol: string;
    public Side: TradeSide;
    public Type: SpotType;
    public BaseCurrency: string;
    public Price: number;
    public Quantity: number;
    public ClientId: number;
    public static create(properties?: IPlaceSpotOrderRequest): PlaceSpotOrderRequest;
    public static encode(message: IPlaceSpotOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPlaceSpotOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlaceSpotOrderRequest;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlaceSpotOrderRequest;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): PlaceSpotOrderRequest;
    public static toObject(message: PlaceSpotOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface IPlaceSpotOrderResponse {
    Accepted?: (boolean|null);
    Reason?: (string|null);
}

export class PlaceSpotOrderResponse implements IPlaceSpotOrderResponse {
    constructor(properties?: IPlaceSpotOrderResponse);
    public Accepted: boolean;
    public Reason: string;
    public static create(properties?: IPlaceSpotOrderResponse): PlaceSpotOrderResponse;
    public static encode(message: IPlaceSpotOrderResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IPlaceSpotOrderResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlaceSpotOrderResponse;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlaceSpotOrderResponse;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): PlaceSpotOrderResponse;
    public static toObject(message: PlaceSpotOrderResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ISpotOrdersRequest {
    ClientId?: (number|null);
}

export class SpotOrdersRequest implements ISpotOrdersRequest {
    constructor(properties?: ISpotOrdersRequest);
    public ClientId: number;
    public static create(properties?: ISpotOrdersRequest): SpotOrdersRequest;
    public static encode(message: ISpotOrdersRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ISpotOrdersRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SpotOrdersRequest;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SpotOrdersRequest;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): SpotOrdersRequest;
    public static toObject(message: SpotOrdersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ISpotOrder {
    OrderId?: (string|null);
    State?: (SpotOrderState|null);
    FillPercent?: (number|null);
    SpotType?: (SpotType|null);
    Symbol?: (string|null);
    Side?: (TradeSide|null);
    CreatedBy?: (string|null);
    ClientId?: (number|null);
    RequestedAmount?: (number|null);
    LeftAmount?: (number|null);
    FilledAmount?: (number|null);
    BaseCurrency?: (string|null);
    RequestedPrice?: (number|null);
    FilledPrice?: (number|null);
    CreatedDate?: (string|null);
    ValueDate?: (string|null);
    UpdateDate?: (string|null);
}

export class SpotOrder implements ISpotOrder {
    constructor(properties?: ISpotOrder);
    public OrderId: string;
    public State: SpotOrderState;
    public FillPercent: number;
    public SpotType: SpotType;
    public Symbol: string;
    public Side: TradeSide;
    public CreatedBy: string;
    public ClientId: number;
    public RequestedAmount: number;
    public LeftAmount: number;
    public FilledAmount: number;
    public BaseCurrency: string;
    public RequestedPrice: number;
    public FilledPrice: number;
    public CreatedDate: string;
    public ValueDate: string;
    public UpdateDate: string;
    public static create(properties?: ISpotOrder): SpotOrder;
    public static encode(message: ISpotOrder, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ISpotOrder, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SpotOrder;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SpotOrder;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): SpotOrder;
    public static toObject(message: SpotOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ISpotOrdersResponse {
    Orders?: (ISpotOrder[]|null);
}

export class SpotOrdersResponse implements ISpotOrdersResponse {
    constructor(properties?: ISpotOrdersResponse);
    public Orders: ISpotOrder[];
    public static create(properties?: ISpotOrdersResponse): SpotOrdersResponse;
    public static encode(message: ISpotOrdersResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ISpotOrdersResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SpotOrdersResponse;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SpotOrdersResponse;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): SpotOrdersResponse;
    public static toObject(message: SpotOrdersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ISpotQuoteRequest {
    clientId?: (number|null);
    quantity?: (number|null);
    instrument?: (string|null);
    baseCurrency?: (string|null);
    SpotType?: (SpotType|null);
}

export class SpotQuoteRequest implements ISpotQuoteRequest {
    constructor(properties?: ISpotQuoteRequest);
    public clientId: number;
    public quantity: number;
    public instrument: string;
    public baseCurrency: string;
    public SpotType: SpotType;
    public static create(properties?: ISpotQuoteRequest): SpotQuoteRequest;
    public static encode(message: ISpotQuoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ISpotQuoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SpotQuoteRequest;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SpotQuoteRequest;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): SpotQuoteRequest;
    public static toObject(message: SpotQuoteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ISpotQuoteResponse {
    askPrice?: (number|null);
    askTobAmount?: (number|null);
    bidPrice?: (number|null);
    bidTobAmount?: (number|null);
}

export class SpotQuoteResponse implements ISpotQuoteResponse {
    constructor(properties?: ISpotQuoteResponse);
    public askPrice: number;
    public askTobAmount: number;
    public bidPrice: number;
    public bidTobAmount: number;
    public static create(properties?: ISpotQuoteResponse): SpotQuoteResponse;
    public static encode(message: ISpotQuoteResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ISpotQuoteResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SpotQuoteResponse;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SpotQuoteResponse;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): SpotQuoteResponse;
    public static toObject(message: SpotQuoteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ITenorResolveRequest {
    Tenors?: (ITenor[]|null);
}

export class TenorResolveRequest implements ITenorResolveRequest {
    constructor(properties?: ITenorResolveRequest);
    public Tenors: ITenor[];
    public static create(properties?: ITenorResolveRequest): TenorResolveRequest;
    public static encode(message: ITenorResolveRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ITenorResolveRequest, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TenorResolveRequest;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TenorResolveRequest;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): TenorResolveRequest;
    public static toObject(message: TenorResolveRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ITenorResolveResponse {
    Tenors?: (ITenor[]|null);
}

export class TenorResolveResponse implements ITenorResolveResponse {
    constructor(properties?: ITenorResolveResponse);
    public Tenors: ITenor[];
    public static create(properties?: ITenorResolveResponse): TenorResolveResponse;
    public static encode(message: ITenorResolveResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ITenorResolveResponse, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TenorResolveResponse;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TenorResolveResponse;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): TenorResolveResponse;
    public static toObject(message: TenorResolveResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}

export interface ITenor {
    Instrument?: (string|null);
    Tenor?: (string|null);
    Date?: (string|null);
}

export class Tenor implements ITenor {
    constructor(properties?: ITenor);
    public Instrument: string;
    public Tenor: string;
    public Date: string;
    public static create(properties?: ITenor): Tenor;
    public static encode(message: ITenor, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: ITenor, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Tenor;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Tenor;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Tenor;
    public static toObject(message: Tenor, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
}
