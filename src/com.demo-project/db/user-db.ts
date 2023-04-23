import {UserDto} from "../dto/user-dto";
import {Injectable} from "@nestjs/common";
import {PrismaService} from "../services/prisma-service";

@Injectable()
export class UserDb {

    constructor(private prisma: PrismaService) {
    }

    async save(user: UserDto): Promise<number> {
        try {
            const res = await this.prisma.user.create({
                data: {
                    name: user.name.toUpperCase(),
                    email: user.email,
                    age: user.age
                }
            });
            return res.id;
        } catch (e) {
            console.error('Error to save User', e);
            throw e;
        }
    }

    async getByEmail(email: string): Promise<any> {
        try {
            return await this.prisma.user.findUnique({
                where: {
                    email: email
                },
            });
        } catch (e) {
            console.error('Error to get User', e)
            throw e;
        }
    }

    async delete(id: number): Promise<any> {
        try {
            return await this.prisma.user.delete({
                where: {
                    id: parseInt(String(id))
                }
            });
        } catch (e) {
            console.error('Error to delete User', e)
            throw e;
        }
    }

    async get(id: number): Promise<any> {
        try {
            return await this.prisma.user.findUnique({
                where: {
                    id: parseInt(String(id))
                },
            });
        } catch (e) {
            console.error('Error to get User', e)
            throw e;
        }
    }

    async update(user: UserDto): Promise<any> {
        try {
            return await this.prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    name: user.name.toUpperCase(),
                    email: user.email,
                    age: user.age
                }
            })
        } catch (e) {
            console.error('Error to update User', e)
            throw e;
        }
    }
}
