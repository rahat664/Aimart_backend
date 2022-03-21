import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop({
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
        type: String,
    })
    name: string;

    @Prop({
        required: true,
        type: Number,
    })
    price: number;

    @Prop({
        type: String,
    })
    imageUrl: string;

    @Prop({
        type: String,
    })
    tags: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
