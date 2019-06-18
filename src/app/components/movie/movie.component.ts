import { IMovie } from 'src/types/movie.type';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'hf-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() movie: IMovie;
  @Input() pictureUrl: string = '';
}
