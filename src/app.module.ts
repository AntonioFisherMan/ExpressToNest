import {Module} from '@nestjs/common';


import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ProductsModule} from "./products/products.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Product} from "./products/schemas/products.schema";
import {OrdersModule} from './orders/orders.module';

//DSADSASDASDASD
@Module({
    imports: [
        ProductsModule, OrdersModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 8889,
            username: 'root',
            password: 'root',
            database: 'shop',
            entities: [Product],
            synchronize: true,
        }),
        OrdersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
