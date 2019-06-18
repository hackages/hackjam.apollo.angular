import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hf-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() count: number = 0;
}
