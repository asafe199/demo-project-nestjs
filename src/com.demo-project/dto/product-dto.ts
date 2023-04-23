import {IsNotEmpty, IsNumber} from "class-validator";

export class ProductDto {
    id:number
    @IsNotEmpty()
    name: string
    @IsNumber()
    @IsNotEmpty()
    price: number
    @IsNotEmpty()
    desc: string
}
