import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, {Document} from 'mongoose';
import {Product} from '../../products/schemas/product.schema';
import {SaleDetail} from "./sale-detail.schema";

export type SaleDocument = Sale & Document;

@Schema()
export class Sale {
    @Prop({
        required: true,
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'SaleDetail'}],
    })
    details: SaleDetail[];

    @Prop({
        required: true,
        type: Number,
    })
    total: number;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
