import "reflect-metadata";
import { injectable } from "inversify";
import pino from 'pino';
import { ILoggerService, ISessionMeta } from "./interfaces";

@injectable()
export class LoggerService implements ILoggerService {

    private session: ISessionMeta;

    constructor(session: ISessionMeta = null) {
        this.session = session;
        this.prefix = Boolean(session) ? session.token : 'MAIN';
    }

    logger = (): pino.Logger => this._logger;

    private _logger = pino({ level: process.env.LOG_LEVEL || 'info' });

    prefix: string = 'MAIN';

    debug(message: string): void {
        this._logger.debug(`${this.prefix}: ${message}`);
    }

    info(message: string): void {
        this._logger.info(`${this.prefix}: ${message}`);
    }

    error(message: string): void {
        this._logger.error(`${this.prefix}: ${message}`);
    }
}