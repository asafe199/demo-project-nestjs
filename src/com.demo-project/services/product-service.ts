import {Injectable} from "@nestjs/common";
import {HttpService} from "@nestjs/axios";

@Injectable()
export class ProductService{
    constructor(private readonly http: HttpService) {
    }
}
