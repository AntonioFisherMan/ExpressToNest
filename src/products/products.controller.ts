import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {ProductsService} from "./products.service";
import {Product} from "./schemas/products.schema";

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {
    }

    @Get()
    //@Redirect('https://google.com', 301)
    getAll() {
        return this.productService.getAll()
    }

    @Get(':id')
    getProduct(@Param('id') id: string): Promise<Product> {
        return this.productService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    createProduct(@Body() product: CreateProductDto) {
        return this.productService.createProd(product)
    }

    @Delete(':id')
    deleteProduct(@Param('id')id: string) {
        return this.productService.remove(id)
    }

    @Put(':id')
    updateProduct(@Body() product: CreateProductDto, @Param('id') id: string) {
        return this.productService.update(id, product)
    }


}
