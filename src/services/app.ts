import "reflect-metadata";
import { inject, injectable } from "inversify";
import { IAppService, IAuthCred, IAuthService, ILoggerService, ISFXSession } from "./interfaces";
import { TYPES } from "./types";
import { RequestHandler } from "express";
import { WebsocketRequestHandler } from "express-ws";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { container } from "../inversify.config";

@injectable()
export class AppService implements IAppService {

    @inject(TYPES.LoggerService) private loggerService: ILoggerService;
    @inject(TYPES.AuthService) private authService: IAuthService;

    private sessions = new Array<ISFXSession>();

    auth: RequestHandler<any, any, IAuthCred, any> = (req, res): void => {
        // validateBody
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

        const newSession = container.get<ISFXSession>(TYPES.SessionService);

        newSession.init({
            contract: req.query.contract,
            token: req.query.token as string,
            user
        }, ws);




    }

    start = (): void => this.loggerService.info(`server started at http://localhost:${process.env.PORT}`);

}