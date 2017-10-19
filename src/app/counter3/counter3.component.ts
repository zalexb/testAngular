import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter3',
  templateUrl: './counter3.component.html',
  styleUrls: ['./counter3.component.css'],
  providers: [CounterService]
})
export class Counter3Component implements OnInit {

  private counter: number;
  title: string = 'third';

  constructor(private counterService: CounterService) { 

  }

  plusOne() {
  	this.counterService.increment();
  	this.counter = this.counterService.getValue();
  }

  minusOne() {
  	this.counterService.decrement();
  	this.counter = this.counterService.getValue();
  }

  ngOnInit() {
    console.log(this.title + 'ready');
  }

}
