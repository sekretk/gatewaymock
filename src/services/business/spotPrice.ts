import { injectable } from "inversify";
import { IBusinessService, ISpotQuotesService } from "../interfaces";

@injectable()
export class SpotQuotesService implements ISpotQuotesService, IBusinessService{
    start(): void {
        console.log('SpotQuotesService Started');
    }
}