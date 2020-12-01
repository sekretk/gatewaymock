const TYPES = {
    LoggerService: Symbol.for("LoggerService"),
    AuthService: Symbol.for("AuthService"),
    AppService: Symbol.for("AppService"),
    MiddleService: Symbol.for("MiddleService"),
    SessionService: Symbol.for("SessionService"),
    BusinessService: Symbol.for("BusinessService"),
};

const ADAPTERS = {
    SecurityListAdapter: Symbol.for("SecurityListAdapter"),
    SpotQuoteAdapter: Symbol.for("SpotQuoteAdapter"),
};

const BUSINESS_SERVICE = {
    FirmsInstrumentsService: Symbol.for("FirmsInstrumentsService"),
    SpotQuotesService: Symbol.for("SpotQuotesService"),
};

export { TYPES, ADAPTERS, BUSINESS_SERVICE };