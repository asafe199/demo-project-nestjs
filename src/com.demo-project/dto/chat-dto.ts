import {IsNotEmpty} from "class-validator";

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

export class Chat {
    @IsNotEmpty({

    })
    message: string;
}
