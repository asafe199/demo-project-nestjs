import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ChatGptController } from "../controller/chat-controller";
import { ChatGtpService } from "../services/chat.service";
import { HttpInterceptor } from '../services/interceptor/http-interceptor';

@Module({
    imports: [HttpModule],
    controllers: [ChatGptController],
    providers: [ChatGtpService],
})
export class ChatModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(HttpInterceptor).forRoutes(ChatGptController);        
    }
}