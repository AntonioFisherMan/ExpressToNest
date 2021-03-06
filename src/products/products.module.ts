import {Module} from "@nestjs/common";
import {ProductsService} from "./products.service";
import {ProductsController} from "./products.controller";
import {Products} from "./schemas/products.schema";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([Products])
    ],
    providers: [ProductsService],
    controllers: [ProductsController]

})

export class ProductsModule {

}