import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDto {
    id: string;
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
}