import {IsEmail, IsInt, IsNotEmpty, Min} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UserDto{
    id:number
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email:string
    @IsNotEmpty()
    @ApiProperty()
    name:string
    @IsInt()
    @Min(18, {
        message: "It's required age above 18"
    })
    @ApiProperty()
    age:number
}
