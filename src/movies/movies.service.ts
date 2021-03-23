import { Injectable, NotFoundException } from "@nestjs/common";
import { Movie } from "./entities/movie.entity";

@Injectable()
export class MoviesService {

  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id): Movie {
    const movie = this.movies.find(movie => movie.id === id);
    if (!movie) {
      throw new NotFoundException();
    }

    return movie;
  }

  create(movieData: Movie) {
    this.movies.push({ id: this.movies.length + 1, ...movieData });
    return this.movies[this.movies.length - 1];
  }

  delete(id: string): boolean {
    //.. 여기는그냥 비지니스 로직처리라 굳이 안함
    return true;
  }

}
