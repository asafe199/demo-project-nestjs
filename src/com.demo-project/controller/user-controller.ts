import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {UserDto} from "../dto/user-dto";
import {UserRepository} from "../repository/user-repository";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private userRepository: UserRepository) {}

    @Post()
    async save(@Body() userDto: UserDto) {
        const id = await this.userRepository.save(userDto);
        return {
            id: id
        }
    }

    @Get(':id')
    async get(@Param() params: any){
        return await this.userRepository.get(params.id);
    }

    @Delete(':id')
    async delete(@Param() params: any){
        await this.userRepository.delete(params.id);
    }

    @Put(':id')
    async update(@Body() user: UserDto, @Param() params: any){
        await this.userRepository.update(user, params.id);
    }
}
