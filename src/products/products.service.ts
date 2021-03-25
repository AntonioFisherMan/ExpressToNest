import {Injectable} from "@nestjs/common";
import {CreateProductDto} from "./dto/create-product.dto";
import {Product, ProductDocument,} from "./schemas/products.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class ProductsService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {

    }

    async getAll(): Promise<Product[]> {
        return this.productModel.find().exec()
    }

    async getById(id: string) {
        return this.productModel.findById(id)
    }

    createProd(product: CreateProductDto): Promise<Product> {
        const newProduct = new this.productModel(product)
        return newProduct.save()
    }

    async remove(id: string): Promise<Product> {
        return this.productModel.findByIdAndRemove(id)
    }

    async update(id: string, product: CreateProductDto): Promise<Product> {
        return this.productModel.findByIdAndUpdate(id, product)
    }
}