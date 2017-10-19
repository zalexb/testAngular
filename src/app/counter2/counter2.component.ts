import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css'],
  providers: [CounterService]
})
export class Counter2Component implements OnInit {

  private counter: number;
  title: string = 'second';

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
