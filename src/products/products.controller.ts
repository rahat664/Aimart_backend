import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseInterceptors,
    UploadedFile,
} from '@nestjs/common';
import {ProductsService} from './products.service';
import {CreateProductDto} from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';
import {FileInterceptor} from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import {modifyFileName} from '../../utils';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {
    }

    @Post()
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './files/products',
                filename: modifyFileName,
            }),
        }),
    )
    create(
        @UploadedFile() image: Express.Multer.File,
        @Body() createProductDto: CreateProductDto,
    ) {
        return this.productsService.create(createProductDto, image);
    }

    @Get()
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productsService.findOne(id);
    }

    @Patch(':id')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './files/products',
                filename: modifyFileName,
            }),
        }),
    )
    update(
        @Param('id') id: string,
        @UploadedFile() image: Express.Multer.File,
        @Body() updateProductDto: UpdateProductDto
    ) {
        return this.productsService.update(id, updateProductDto, image);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productsService.remove(id);
    }
}
