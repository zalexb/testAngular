import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

	private counter: number = 0;

  constructor() { }

  increment(){
  	this.counter++;
  }

  decrement() {
  	this.counter--;
  }

  getValue(){
  	return this.counter;
  }

}
