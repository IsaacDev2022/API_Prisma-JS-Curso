import { CreateMovieRentUseCase } from './CreateMovieRentUseCase';
import { Request, Response } from "express";

export class CreateMovieRentController {
    async handle(req: Request, res: Response) {
        const { movieId, userId } = req.body;

        const createMovieRentUseCase = new CreateMovieRentUseCase();

        await createMovieRentUseCase.execute({ movieId, userId });

        return res.status(201).send();
    }
}