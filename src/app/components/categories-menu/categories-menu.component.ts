import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from 'src/types/category.type';

@Component({
  selector: 'hf-categories-menu',
  templateUrl: './categories-menu.component.html'
})
export class CategoriesMenuComponent {
  @Input() categories: ICategory[] = [];
  @Input() switchCategory: Function = () => {};
  @Input() count: number = 0;
}
