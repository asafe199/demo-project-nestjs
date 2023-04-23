import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';
import {ChatModule} from "./com.demo-project/modules/chat.module";
import {UserModule} from "./com.demo-project/modules/user.module";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {abortOnError: false});
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('v1')

    const chatConfig = new DocumentBuilder()
        .setTitle('ChatGpt API')
        .setDescription('Api - (ChatGpt - Telegram)')
        .setVersion('1.0')
        .build();

    const chatDocument = SwaggerModule.createDocument(app, chatConfig, {
        include: [ChatModule]
    });

    SwaggerModule.setup('api/chat', app, chatDocument);

    const userConfig = new DocumentBuilder()
        .setTitle('User API')
        .setDescription('Api - (User)')
        .setVersion('1.0')
        .build();

    const userDocument = SwaggerModule.createDocument(app, userConfig, {
        include: [UserModule]
    })

    SwaggerModule.setup('api/user', app, userDocument);

    await app.listen(3000);
}
bootstrap();
