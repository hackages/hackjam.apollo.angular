import { IMovie } from 'src/types/movie.type';
import { IGenre } from 'src/types/genre.type';
import { genres as genresMock } from '../mocks/genres';

export const getGenreName = (id: number, genres: IGenre[]): string =>
  genres
    .filter(genre => genre.id === id)
    .map(({ name }) => name)
    .join('');

export const getGenreId = (
  name: string,
  genres: IGenre[] = genresMock
): number =>
  parseInt(
    genres
      .filter(genre => genre.name === name)
      .map(({ id }) => id)
      .join(''),
    10
  );

export const movieContainsGenre = (movie: IMovie, genre_id: number): boolean =>
  movie.genre_ids.reduce(
    (contains: boolean, next: number) =>
      contains ? contains : next === genre_id,
    false
  );

export const filterMoviesByCat = (
  movies: IMovie[],
  genre_id: number
): IMovie[] => movies.filter(movie => movieContainsGenre(movie, genre_id));

export function filterByCategory(movie: IMovie, currentCategory: string) {
  return (
    currentCategory === 'All' ||
    movieContainsGenre(movie, getGenreId(currentCategory))
  );
}

export function filterByTitle(movie: IMovie, searchTerm: string) {
  return (
    !searchTerm || movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
