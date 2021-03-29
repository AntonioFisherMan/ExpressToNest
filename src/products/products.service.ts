import {Injectable} from "@nestjs/common";
import {CreateProductDto} from "./dto/create-product.dto";
import {Products} from "./schemas/products.schema";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository, UpdateResult} from "typeorm";


@Injectable()
export class ProductsService {

    constructor(@InjectRepository(Products) private productRepository: Repository<Products>) {

    }

    getAll(): Promise<Products[]> {
        return this.productRepository.find()
    }

    getById(id: string): Promise<Products> {
        return this.productRepository.findOne(id)
    }

    createProd(product: CreateProductDto): Promise<Products> {
        const newProduct = new Products();
        newProduct.firstName = product.firstName
        newProduct.lastName = product.lastName
        newProduct.isActive = product.isActive
        return this.productRepository.save(newProduct);

    }

    async remove(id: string): Promise<DeleteResult> {
        return this.productRepository.delete(id);
    }

    async update(id: string, product: CreateProductDto): Promise<UpdateResult> {
        return this.productRepository.update(id, product);
    }
}