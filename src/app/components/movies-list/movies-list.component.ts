import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/types/movie.type';

@Component({
  selector: 'hf-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  @Input() movies: IMovie[] = [];
  @Input() pictureUrl: string = '';
  @Input() toggleNav: boolean = false;
}
