import {Injectable} from "@nestjs/common";
import {PrismaService} from "../services/prisma-service";
import {ProductDto} from "../dto/product-dto";

@Injectable()
export class ProductDb{
    constructor(private readonly prisma: PrismaService) {
    }

    async save(product: ProductDto) : Promise<any>{
        try {
            const res = await this.prisma.product.create({
                data: {
                    name: product.name,
                    desc: product.desc,
                    price: product.price
                }
            });
            return res.id;
        } catch (e){
            console.error('Cannot create Product', e)
            throw e;
        }
    }

    async get(id: number) : Promise<any> {
        try {
            return await this.prisma.product.findUnique({
                where: {
                    id: parseInt(String(id))
                }
            });
        } catch (e){
            console.error('Cannot create Product', e)
            throw e;
        }
    }

    async update(product: ProductDto) : Promise<any>{
        try {
            return this.prisma.product.update({
                where: {
                    id: product.id,
                },
                data: {
                    name: product.name.toUpperCase(),
                    desc: product.desc,
                    price: product.price
                }
            })
        } catch (e){
            console.error('Cannot update Product', e)
            throw e;
        }
    }

    async getByName(name: string) : Promise<any>{
        try {
            return await this.prisma.product.findUnique({
                where: {
                    name: name
                }
            });
        } catch (e){
            console.error('Cannot create Product', e)
            throw e;
        }
    }

    async delete(id: number) : Promise<any> {
        try {
            return await this.prisma.product.delete({
                where: {
                    id: parseInt(String(id))
                }
            });
        } catch (e){
            console.error('Cannot delete Product', e)
            throw e;
        }
    }
}
