import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from 'src/types/movie.type';

@Injectable()
export class MoviesService {
  moviesUrl = '/api/movies';

  constructor(private http: HttpClient) {}

  // Gets all the movies from our mock server
  getMovies(): Observable<IMovie[]> {
    throw 'not implemented';
  }

  // Gets a movie by its id from our mock server
  getMovie(id: number): Observable<IMovie> {
    throw 'not implemented';
  }
}
