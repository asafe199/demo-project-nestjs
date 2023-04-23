import {Module} from "@nestjs/common";
import {HttpModule} from "@nestjs/axios";
import {UserController} from "../controller/user-controller";
import {UserService} from "../services/user-service";
import {UserDb} from "../db/user-db";
import {UserRepository} from "../repository/user-repository";
import {PrismaService} from "../services/prisma-service";

@Module({
    imports: [HttpModule],
    controllers: [UserController],
    providers: [UserService, UserDb, UserRepository, PrismaService],
})
export class UserModule{

}
