import "reflect-metadata";
import { Container, inject, injectable } from "inversify";
import { IAppService, IAuthCred, IAuthService, IBusinessService } from "./interfaces/interfaces";
import { TYPES } from "./types";
import { RequestHandler } from "express";
import { WebsocketRequestHandler } from "express-ws";
import { containerFactory } from "../inversify.config";
import { ILoggerService, ISession, ISessionMeta } from "./interfaces";

@injectable()
export class AppService implements IAppService {

    @inject(TYPES.LoggerService) private loggerService: ILoggerService;
    @inject(TYPES.AuthService) private authService: IAuthService;

    private sessions = new Map<ISessionMeta, Container>();

    constructor() {
        process.openStdin().addListener("data", value =>  {
            const text = value.toString().trim();

            if (text === 'sessions') {
                console.log('Alive session: ' + Array.from(this.sessions.keys()).map(x => x.user).join(' - '));
            }
            else {
                console.log('Unknown command');
            }
          });
    }

    auth: RequestHandler<any, any, IAuthCred, any> = (req, res): void => {
        res.send({ token: this.authService.login(req.body) });
    }

    ws: WebsocketRequestHandler = (ws, req) => {

        this.loggerService.debug(`WS connection contract:  + ${req.query.contract}; token: ${req.query.token}`);

        if (req.query.contract !== process.env.CONTRACT) {
            this.loggerService.debug('contract incompatible');
            this.loggerService.debug('ws opened');
            ws.send('contract incompatible');
            ws.terminate();
            return;
        }

        const session = this.authService.validate(req.query.token as string);

        if (!Boolean(session.user)) {
            this.loggerService.debug('not autheniticated for token: ' + req.query.token);
            this.loggerService.debug('ws opened');
            ws.send(`not autheniticated for token: ${req.query.token}`);
            ws.terminate();
            return;
        }

        try {

            const container = containerFactory(session);

            const newSession = container.get<ISession>(TYPES.SessionService);

            const services = container.getAll<IBusinessService>(TYPES.BusinessService);

            newSession.init(session, ws);

            services.forEach(service => service.start());

            this.sessions.set(session, container);

            ws.on('close', () => {
                this.sessions.delete(session);
            });
        } catch (error) {
            this.loggerService.error(error);
            ws.close();
        }
    }

    start = (): void => this.loggerService.info(`server started at http://localhost:${process.env.PORT}`);

}