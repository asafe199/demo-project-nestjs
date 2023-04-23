import {HttpModule} from '@nestjs/axios';
import {Module} from '@nestjs/common';
import {ChatGptController} from "../controller/chat-controller";
import {ChatGtpService} from "../services/chat-service";

@Module({
    imports: [HttpModule],
    controllers: [ChatGptController],
    providers: [ChatGtpService],
})
export class ChatModule {

}
