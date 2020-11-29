import "reflect-metadata";
import { injectable } from "inversify";
import { ILoggerService } from "./interfaces";
import pino from 'pino';

@injectable()
export class LoggerService implements ILoggerService {

    private _logger = pino({ level: process.env.LOG_LEVEL || 'info' });

    debug(message: string): void {
        this._logger.debug(message);
    }

    info(message: string): void {
        this._logger.info(message);
    }

    logger = () => this._logger;
}