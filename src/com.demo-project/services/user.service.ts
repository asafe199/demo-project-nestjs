import {Injectable} from "@nestjs/common";
import {HttpService} from "@nestjs/axios";

@Injectable()
export class UserService{
    constructor(private readonly http: HttpService) {}
}
