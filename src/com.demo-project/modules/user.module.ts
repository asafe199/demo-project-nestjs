import {Module} from "@nestjs/common";
import {HttpModule} from "@nestjs/axios";
import {UserController} from "../controller/user-controller";
import {UserService} from "../services/user.service";
import {UserServiceImpl} from "../impl/user.service-impl";

@Module({
    imports: [HttpModule],
    controllers: [UserController],
    providers: [UserService, UserServiceImpl],
})
export class UserModule{

}
