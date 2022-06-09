import { GetMoviesByReleaseDateUseCase } from './GetMoviesByReleaseDateUseCase';
import { Request, Response } from "express";

export class GetMoviesByReleaseDateController {
    async handle(req: Request, res: Response) {
        const getMoviesByReleaseDateUseCase = new GetMoviesByReleaseDateUseCase();

        const result = await getMoviesByReleaseDateUseCase.execute();

        return res.status(201).json(result);
    }
}