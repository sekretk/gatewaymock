import express from 'express';
import { mainContainer } from "./inversify.config";
import { TYPES } from './services/types';
import expressws from 'express-ws';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressPino from 'express-pino-logger';
import { IAppService, ILoggerService, IMiddleService } from './services/interfaces/interfaces';

dotenv.config();

const appService = mainContainer.get<IAppService>(TYPES.AppService);
const loggerService = mainContainer.get<ILoggerService>(TYPES.LoggerService);
const middleServices = mainContainer.getAll<IMiddleService>(TYPES.MiddleService);

expressws(express()).app
    // Setup logger
    .use(expressPino({ logger: loggerService.logger() }))
    // Use CORS
    .use(cors())
    // Permit the app to parse application/x-www-form-urlencoded
    .use(bodyParser.urlencoded({ extended: false }))
    // Use body-parser as middleware for the app.
    .use(bodyParser.json())
    // registe middleware
    .use(...middleServices.map(service => service.handler))
    // add auth listener
    .post(process.env.AUTH_URL, bodyParser.json(), appService.auth)
    // add ws connection handler
    .ws(process.env.WS_URL, appService.ws)
    // start the Express server
    .listen(process.env.PORT, appService.start);