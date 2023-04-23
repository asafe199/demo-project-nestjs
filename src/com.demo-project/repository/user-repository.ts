import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {UserDto} from "../dto/user-dto";
import {UserDb} from "../db/user-db";

@Injectable()
export class UserRepository {

    constructor(private readonly userDb: UserDb) {
    }

    async save(user: UserDto): Promise<number> {
        await this.validateDuplicateUser(user);
        return await this.userDb.save(user);
    }

    async get(id: number): Promise<UserDto> {
        const user = await this.userDb.get(id);
        this.isUserNotFound(user);
        return user;
    }

    async delete(id: number) : Promise<void>{
        const user = await this.get(id);
        await this.userDb.delete(user.id);
    }

    async update(user: UserDto, id:number) : Promise<UserDto>{
        const userDto = await this.get(id);
        userDto.age = user.age;
        userDto.email = user.email;
        userDto.name = user.name;
        return await this.userDb.update(userDto);
    }

    isUserNotFound(user: UserDto) {
        if (user == null) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'User not found',
            }, HttpStatus.NOT_FOUND);
        }
    }

    async validateDuplicateUser(userDto: UserDto) {
        const user = await this.userDb.getByEmail(userDto.email);
        if (user != null) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Email already registered',
            }, HttpStatus.BAD_REQUEST);
        }
    }
}
