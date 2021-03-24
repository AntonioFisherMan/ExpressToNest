import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ProductsModule} from "./products/products.module";


@Module({
    imports: [
        ProductsModule,
        MongooseModule.forRoot('mongodb+srv://toxa_k_9:zxcv123580@cluster0.k5f2o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
