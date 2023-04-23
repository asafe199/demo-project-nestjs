import {Module} from "@nestjs/common";
import {HttpModule} from "@nestjs/axios";
import {ProductController} from "../controller/product-controller";
import {ProductRepository} from "../repository/product-repository";
import {ProductDb} from "../db/product-db";
import {ProductService} from "../services/product-service";
import {PrismaService} from "../services/prisma-service";

@Module({
    imports: [HttpModule],
    controllers: [ProductController],
    providers: [ProductRepository, ProductDb, ProductService, PrismaService],
})
export class ProductModule {

}
