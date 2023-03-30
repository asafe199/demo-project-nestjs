import { IsEmail, IsNotEmpty } from "class-validator";

export class ChatDto {
    @IsNotEmpty()
    model: string;
    @IsNotEmpty()
    messages: Messages[];
}

class Messages{
    @IsNotEmpty()
    role: string;
    @IsNotEmpty()
    content: string;
}