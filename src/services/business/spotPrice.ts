import { inject, injectable } from "inversify";
import { timer } from "rxjs";
import { IBusinessService, ILoggerService, ISpotPriceAdapter, ISpotQuotesService } from "../interfaces";
import { ADAPTERS, TYPES } from "../types";

interface IInstrument {
    base: number;
    fraction: number;
}

@injectable()
export class SpotQuotesService implements ISpotQuotesService, IBusinessService {

    @inject(ADAPTERS.SpotQuoteAdapter) private adapter: ISpotPriceAdapter;

    @inject(TYPES.LoggerService) private loggerService: ILoggerService;

    start(): void {
        this.loggerService.info('SpotQuotesService Started');

        this.adapter.messages().subscribe(request => {
            this.loggerService.info('[SpotQuotesService] GET: ' + JSON.stringify(request));

            timer(0, 500).subscribe(() => {
                this.adapter.send(request.id, this.getRandomPrice(request.payload.instrument, request.payload.quantity));
            });
        });
    }

    private instrumentsPreset = new Map<string, IInstrument>([
        ['EURGBP', {base: 0.87064, fraction: 5 }],
        ['USDJPY', {base: 106.56, fraction: 2 }],
        ['USDRUB', {base: 73.7768, fraction: 4 }],
    ]);

    private defaultPreset = {base: 1.08385, fraction: 5 };

    private getRandomPrice(instrument: string, quantity: number) {
        let price = 0;
        let askPrice = 0;
        let bidPrice = 0;
        const qty = quantity === 0 ? 1 : quantity;

        const instrumentSet = this.instrumentsPreset.get(instrument) ?? this.defaultPreset;
        const coef = Math.pow(10, instrumentSet.fraction);
        price = (1.08385 + Math.random() / coef + Math.log(qty) / Math.pow(10, instrumentSet.fraction));
        askPrice = Number((price + (Math.log(qty) / coef) + (Math.random() / coef)).toFixed(instrumentSet.fraction));
        bidPrice = Number((price - (Math.log(qty) / coef) + (Math.random() / coef)).toFixed(instrumentSet.fraction));

        return { askPrice, bidPrice };
    }
}