import {Injectable} from '@nestjs/common';
import {CreateProductDto} from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Product, ProductDocument} from './schemas/product.schema';
import {Model} from 'mongoose';

@Injectable()
export class ProductsService {

    constructor(
        @InjectModel(Product.name)
        private readonly productModel: Model<ProductDocument>,
    ) {
    }

    create(createProductDto: CreateProductDto, image: Express.Multer.File) {
        const newProduct = new this.productModel(createProductDto);
        newProduct.imageUrl = image.path;
        return newProduct.save();
    }

    findAll() {
        return this.productModel.find().exec();
    }

    findOne(id: string) {
        return this.productModel.findById(id).exec();
    }

    update(id: string, updateProductDto: UpdateProductDto, image: Express.Multer.File) {

        if (image) {
            updateProductDto.imageUrl = image.path;
        }

        return this.productModel.findByIdAndUpdate(id, updateProductDto, {new: true}).exec();
    }

    remove(id: string) {
        return this.productModel.findByIdAndRemove(id).exec();
    }
}
