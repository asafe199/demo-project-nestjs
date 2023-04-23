import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {ProductDb} from "../db/product-db";
import {ProductDto} from "../dto/product-dto";

@Injectable()
export class ProductRepository{
    constructor(private readonly productDb: ProductDb) {
    }

    async save(product: ProductDto) : Promise<ProductDto> {
        await this.isProductAlredyRegistered(product)
        return await this.productDb.save(product);
    }

    async get(id: number) : Promise<ProductDto> {
        const product = await this.productDb.get(id);
        this.isProductNotFound(product);
        return product;
    }

    async update(id: number, product: ProductDto) : Promise<ProductDto> {
        const productDto = await this.get(id);
        productDto.name = product.name;
        productDto.price = product.price;
        productDto.desc = product.desc;
        return await this.productDb.update(productDto);
    }

    async delete(id: number) {
        const productDto = await this.get(id);
        await this.productDb.delete(productDto.id);
    }

    isProductNotFound(product: ProductDto) {
        if (product == null) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Product not found',
            }, HttpStatus.NOT_FOUND);
        }
    }

    async isProductAlredyRegistered(product: ProductDto) {
        const user = await this.productDb.getByName(product.name);
        if (user != null) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Name already registered',
            }, HttpStatus.BAD_REQUEST);
        }
    }


}
