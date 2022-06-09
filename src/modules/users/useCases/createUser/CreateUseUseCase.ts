import { AppError } from './../../../../erros/AppError';
import { User } from '@prisma/client';
import { prisma } from '../../../../prisma/client';
import { CreateUserDTO } from './../../dtos/CreateUserDTO';

export class CreateUserUseCase {
    async execute({ name, email }: CreateUserDTO): Promise<User> {
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (userAlreadyExists) {
            throw new AppError("User aleready exists!");
        }

        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });

        return user;
    };
}