import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hf-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() toggleNav: boolean = false;
  @Input() toggle: Function;
  @Output() searchEmitter: EventEmitter<string> = new EventEmitter();

  search(value: string) {
    this.searchEmitter.emit(value);
  }
}
