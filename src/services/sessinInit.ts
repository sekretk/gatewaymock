import "reflect-metadata";
import { injectable, multiInject } from "inversify";
import { IAuthService, IBusinessService, ISessionInit } from "./interfaces/interfaces";
import { v4 as uuidv4 } from 'uuid';
import { TYPES } from "./types";

@injectable()
export class SessionInit implements ISessionInit {

    @multiInject(TYPES.BusinessService) private businessServices: IBusinessService[];

    init(): void {
        this.businessServices.forEach(service => service.start());
    }
}