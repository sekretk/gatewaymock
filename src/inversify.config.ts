import { Container } from "inversify";
import { ADAPTERS, BUSINESS_SERVICE, TYPES } from "./services/types";
import { IAuthService, IAppService, IMiddleService, IMessageAdapter, IBusinessService } from "./services/interfaces/interfaces";
import { AuthService } from "./services/auth";
import { AppService } from "./services/app";
import { LoggerService } from "./services/logger";
import { MiddleService } from "./services/middle";
import { SFXSessionSession } from "./services/session";
import { IFirmsAndInstrumentsService, ILoggerService, ISecurityListAdapter, ISessionMeta, ISFXSession, ISpotPriceAdapter, ISpotQuotesService } from "./services/interfaces";
import { SecurityListAdapter } from "./services/adapters/securityListAdapter";
import { SpotPriceAdapter } from "./services/adapters/spotPriceAdapter";
import { SecurityListService } from "./services/business/securitylist";
import { SpotQuotesService } from "./services/business/spotPrice";

const mainContainer = new Container({
    defaultScope: 'Singleton',
});

mainContainer.bind<IAppService>(TYPES.AppService).to(AppService);

mainContainer.bind<IAuthService>(TYPES.AuthService).to(AuthService);

mainContainer.bind<IMiddleService>(TYPES.MiddleService).to(MiddleService);

mainContainer.bind<ILoggerService>(TYPES.LoggerService).toConstantValue(new LoggerService());

function containerFactory(session: ISessionMeta): Container {
    const container = new Container({
        defaultScope: 'Singleton',
    });

    container.bind<ILoggerService>(TYPES.LoggerService).toConstantValue(new LoggerService(session));
    container.bind<ISFXSession>(TYPES.SessionService).to(SFXSessionSession).inSingletonScope();

    container.bind<ISecurityListAdapter>(ADAPTERS.SecurityListAdapter).to(SecurityListAdapter);
    container.bind<ISpotPriceAdapter>(ADAPTERS.SpotQuoteAdapter).to(SpotPriceAdapter);

    container.bind<IFirmsAndInstrumentsService>(SecurityListService).toSelf().inSingletonScope();
    container.bind<IFirmsAndInstrumentsService>(BUSINESS_SERVICE.FirmsInstrumentsService).toService(SecurityListService);
    container.bind<IBusinessService>(TYPES.BusinessService).toService(SecurityListService);

    container.bind<ISpotQuotesService>(SpotQuotesService).toSelf().inSingletonScope();
    container.bind<ISpotQuotesService>(BUSINESS_SERVICE.SpotQuotesService).toService(SpotQuotesService);
    container.bind<IBusinessService>(TYPES.BusinessService).toService(SpotQuotesService);


    return container;
}

export { mainContainer, containerFactory };