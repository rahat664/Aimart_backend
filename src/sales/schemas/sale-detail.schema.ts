export class CreateSaleDto {
}

import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {Document} from 'mongoose';
import {Product} from '../../products/schemas/product.schema';
import {Sale} from './sale.schema';

export type SaleDetailDocument = SaleDetail & Document;

@Schema()
export class SaleDetail {
    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sale',
    })
    sale: Sale;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    })
    product: Product;

    @Prop({
        required: true,
        type: Number,
    })
    quantity: number;
}

export const SaleDetailSchema = SchemaFactory.createForClass(SaleDetail);
