import "reflect-metadata";
import { inject, injectable } from "inversify";
import { ILoggerService, IMiddleService } from "./interfaces";
import { RequestHandler } from "express";
import { TYPES } from "./types";

@injectable()
export class MiddleService implements IMiddleService {
    @inject(TYPES.LoggerService) private loggerService: ILoggerService;

    handler: RequestHandler = (req, _res, next) => {
            this.loggerService.debug(`middleware ${req}`);
            return next();
        }
}