import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { Movie } from "./entities/movie.entity";

@Controller("movies")
export class MoviesController {

  constructor(private readonly moviesService: MoviesService) {
  }

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get("/search")
  search(@Query("name") name: string) {
    return `we are searching for a movie name: ${name}`;
  }

  @Get("/:id")
  getOne(@Param("id") id: string): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: Movie) {
    return this.moviesService.create(movieData);
  }

  @Delete("/:id")
  delete(@Param("id") id: string) {
    return this.moviesService.delete(id);
  }

  @Put("/:id")
  put(@Param("id") id: string) {
    return `this will update of all with the id: ${id}`;
  }

  @Patch("/:id")
  patch(@Param("id") id: string) {
    return `this will update of part with the id: ${id}`;
  }
}
