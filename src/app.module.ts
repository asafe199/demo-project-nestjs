import {Module} from '@nestjs/common';
import {ChatModule} from './com.demo-project/modules/chat.module';
import {ConfigModule} from '@nestjs/config';
import {UserModule} from "./com.demo-project/modules/user.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductModule} from "./com.demo-project/modules/product.module";

@Module({
    imports: [ChatModule, UserModule, ProductModule,
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env', '.prod.env']
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
    providers: [],
})
export class AppModule {
}
