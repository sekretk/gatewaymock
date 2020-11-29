import { Container } from "inversify";
import { TYPES } from "./services/types";
import { IAuthService, IAppService, ILoggerService, IMiddleService, ISFXSession, IMessageAdapter } from "./services/interfaces";
import { AuthService } from "./services/auth";
import { AppService } from "./services/app";
import { LoggerService } from "./services/logger";
import { MiddleService } from "./services/middle";
import { SFXSessionSession } from "./services/session";
import { SecurityListAdapter } from "./services/adapters/securityListAdapter";
import { SpotPriceAdapter } from "./services/adapters/spotPriceAdapter";

const container = new Container();

container.bind<IAuthService>(TYPES.AuthService).to(AuthService);
container.bind<IAppService>(TYPES.AppService).to(AppService);
container.bind<ILoggerService>(TYPES.LoggerService).to(LoggerService);
container.bind<IMiddleService>(TYPES.MiddleService).to(MiddleService);
container.bind<ISFXSession>(TYPES.SessionService).to(SFXSessionSession).inTransientScope();

container.bind<IMessageAdapter>(TYPES.MessageAdapterService).to(SecurityListAdapter);
container.bind<IMessageAdapter>(TYPES.MessageAdapterService).to(SpotPriceAdapter);

export { container };