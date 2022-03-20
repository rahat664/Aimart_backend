import {Module} from '@nestjs/common';
import {SalesService} from './sales.service';
import {SalesController} from './sales.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Sale, SaleSchema} from './schemas/sale.schema';
import {SaleDetail, SaleDetailSchema} from './schemas/sale-detail.schema';

@Module({
    controllers: [SalesController],
    imports: [
        MongooseModule.forFeature([
            {name: Sale.name, schema: SaleSchema},
            {name: SaleDetail.name, schema: SaleDetailSchema},
        ]),
    ],
    providers: [SalesService],
})
export class SalesModule {
}
