import { AppError } from './../../../../erros/AppError';
import { prisma } from '../../../../prisma/client';
import { CreateMovieRentDTO } from './../../dtos/CreateMovieRentDTO';

export class CreateMovieRentUseCase {
    async execute({ movieId, userId }: CreateMovieRentDTO): Promise<void> {
        // Verifica se o filme existe
        const movieExists = await prisma.movie.findUnique({
            where: {
                id: movieId,
            }
        });

        if (!movieExists) {
            throw new AppError("Movie does not exists!");
        }

        // Verifica se o filme não está alugado por outra pessoa
        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where: {
                movieId,
            }
        });

        if (movieAlreadyRented) {
            throw new AppError("Movie already rented!");
        }

        // Verifica se o usuário existe
        const userExists = await prisma.user.findUnique({
            where: {
                id: userId,
            }
        });

        if (!userExists) {
            throw new AppError("User does not exists!");
        }

        // Cria a locação
        await prisma.movieRent.create({
            data: {
                movieId,
                userId,
            }
        });
    }
}