import {Module} from '@nestjs/common';
import {ChatModule} from './com.demo-project/modules/chat.module';
import {ConfigModule} from '@nestjs/config';
import {UserModule} from "./com.demo-project/modules/user.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PrismaService} from "./com.demo-project/services/prisma.service";

@Module({
    imports: [ChatModule, UserModule,
        ConfigModule.forRoot({
            isGlobal: true
        }),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DATA_USER,
            password: process.env.DATA_PASSWORD,
            database: process.env.DB_DATABASE,
        })
    ],
    controllers: [],
    providers: [PrismaService],
})
export class AppModule {
}
