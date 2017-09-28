import { Component, OnInit } from '@angular/core';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component implements OnInit {

    private counterComp: number=this.counterService.getValue();;

    constructor(private counterService: CounterService) {

    }

    plusOne(){
        this.counterService.increment();
        this.counterComp = this.counterService.getValue();
    }
    minusOne(){
        this.counterService.decrement();
        this.counterComp = this.counterService.getValue();
    }

  ngOnInit() {
  }

}
