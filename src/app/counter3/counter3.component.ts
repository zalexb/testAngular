import { Component, OnInit } from '@angular/core';
import {CounterService} from "../counter.service";


@Component({
  selector: 'app-counter3',
  templateUrl: './counter3.component.html',
  styleUrls: ['./counter3.component.css'],
  providers : [CounterService]
})
export class Counter3Component implements OnInit {

    private counterComp: number=this.counterService.getValue();;

    constructor(private counterService: CounterService) {

    }
    title: string = 'thirc';

    plusOne(){
        this.counterService.increment();
        this.counterComp = this.counterService.getValue();
    }
    minusOne(){
        this.counterService.decrement();
        this.counterComp = this.counterService.getValue();
    }

  ngOnInit() {
      console.log((this.title + ' ready'));
  }

}
