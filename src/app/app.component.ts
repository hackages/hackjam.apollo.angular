import { categories } from 'src/mocks/categories';
import { Component } from '@angular/core';
import { PICTURES_CDN_URL } from '../constants/urls';
import { filterByCategory, filterByTitle } from 'src/utils';
import { movies } from 'src/mocks/movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  categories = categories;
  movies = movies;
  toggleNav = false;
  currentCategory = 'All';
  searchTerm = '';
  pictureUrl = PICTURES_CDN_URL;

  switchCategory = (categoryName: string): void => {
    this.currentCategory = categoryName;

    this.categories = this.categories.map(category => ({
      ...category,
      selected: category.name === categoryName
    }));

    this.filterMovies();
  };

  toggle = () => (this.toggleNav = !this.toggleNav);

  filterMovies = () => {
    this.movies = movies.filter(movie => {
      return (
        filterByCategory(movie, this.currentCategory) &&
        filterByTitle(movie, this.searchTerm)
      );
    });
  };

  search = (searchTerm: string) => {
    this.searchTerm = searchTerm;
    this.filterMovies();
  };
}
