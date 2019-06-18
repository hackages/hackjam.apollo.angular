import { movies as mockMovies } from 'src/mocks/movies';
import { categories as mockCategories } from 'src/mocks/categories';
import { IMovie } from 'src/types/movie.type';
import { ICategory } from 'src/types/category.type';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let movies: IMovie[] = mockMovies;
    let categories: ICategory[] = mockCategories;
    return { movies, categories };
  }
}
