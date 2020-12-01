import "reflect-metadata";
import { inject, injectable } from "inversify";
import { IAppService, IAuthCred, IAuthService, IBusinessService, ILoggerService, ISessionInit } from "./interfaces/interfaces";
import { TYPES } from "./types";
import { RequestHandler } from "express";
import { WebsocketRequestHandler } from "express-ws";
import { containerFactory } from "../inversify.config";
import { ISFXSession } from "./interfaces";

@injectable()
export class AppService implements IAppService {

    @inject(TYPES.LoggerService) private loggerService: ILoggerService;
    @inject(TYPES.AuthService) private authService: IAuthService;

    auth: RequestHandler<any, any, IAuthCred, any> = (req, res): void => {
        res.send({ token: this.authService.login(req.body.user) });
    }

    ws: WebsocketRequestHandler = (ws, req) => {

        this.loggerService.debug(`WS connection contract:  + ${req.query.contract}; token: ${req.query.token}`);

        if (req.query.contract !== '0.3.7') {
            this.loggerService.debug('contract incompatible');
            this.loggerService.debug('ws opened');
            ws.send('contract incompatible');
            ws.terminate();
            return;
        }

        const user = this.authService.validate(req.query.token as string);

        if (!Boolean(user)) {
            this.loggerService.debug('not autheniticated for token: ' + req.query.token);
            this.loggerService.debug('ws opened');
            ws.send(`not autheniticated for token: ${req.query.token}`);
            ws.terminate();
            return;
        }

        try {

            const container = containerFactory();

            const newSession = container.get<ISFXSession>(TYPES.SessionService);

            const services = container.getAll<IBusinessService>(TYPES.BusinessService);

            newSession.init({
                contract: req.query.contract,
                token: req.query.token as string,
                user
            }, ws);

            services.forEach(service => service.start());

        } catch (error) {
            this.loggerService.error(error);
        }
    }

    start = (): void => this.loggerService.info(`server started at http://localhost:${process.env.PORT}`);

}