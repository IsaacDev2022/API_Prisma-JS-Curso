import { CreateMovieRentController } from './../modules/movies/useCases/createMovieRent/CreateMovieRentController';
import { CreateMovieController } from './../modules/movies/useCases/createMovie/CreateMovieController';
import { Router } from "express";
import { GetMoviesByReleaseDateController } from '../modules/movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseDateController';

const createMovieController = new CreateMovieController();
const getMoviesByReleaseController = new GetMoviesByReleaseDateController();
const createMovieRentController = new CreateMovieRentController();

const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.get("/release", getMoviesByReleaseController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes };