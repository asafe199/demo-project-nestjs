import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ProductDto} from "../dto/product-dto";
import {ProductRepository} from "../repository/product-repository";

@Controller('product')
export class ProductController{

    constructor(private readonly productRepository: ProductRepository) {
    }

    @Post()
    async save(@Body() product: ProductDto){
        const id = await this.productRepository.save(product);
        return {
            id: id,
        }
    }

    @Get(':id')
    async get(@Param() params: any){
        return await this.productRepository.get(params.id);
    }

    @Put(':id')
    async update(@Body() product: ProductDto, @Param() params: any){
        await this.productRepository.update(params.id, product);
    }

    @Delete(':id')
    async delete(@Param() params: any){
        await this.productRepository.delete(params.id);
    }
}
