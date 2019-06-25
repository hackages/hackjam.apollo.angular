import { Component, Input } from '@angular/core';

@Component({
  selector: 'hf-counter',
  template: `
    <li class="counter">
      <a>{{ count }}</a>
    </li>
  `
})
export class CounterComponent {
  @Input() count: number = 0;
}
