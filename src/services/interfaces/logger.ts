import { Logger } from "pino";

export interface ILoggerService {
    debug(message: string): void;
    info(message: string): void;
    error(message: string): void;
    logger(): Logger;
}