import { Component } from '@angular/core';
import { categories } from '../mocks/categories';
import { movies } from '../mocks/movies';
import { PICTURES_CDN_URL } from '../constants/urls';
import { getGenreId, movieContainsGenre } from 'src/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [];
  movies = [];
  toggleNav = false;
  currentCategory = 'All';
  searchTerm = '';

  switchCategory = (categoryName: string): void => {
    // Implement the `switchCategory` method.
    // It takes the selected category as argument and switch the red line to the selected tab
  };

  toggle = () => {
    // Implement the `toggle` method.
    // It toggles the `toggleNav` property between `true` and `false`. It takes no parameter.
  };

  filterMovies = () => {
    // Implement the `filterMovies` method.
    // It takes no argument and filters the movies by they category
  };

  search = (searchTerm: string) => {
    // Implement the `search` method.
    // The `search` method filters the movies per `title` and per `category`.
    // It takes a string as parameter, the `searchTerm`
  };
}
