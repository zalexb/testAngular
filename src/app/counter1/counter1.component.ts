import { Component, OnInit } from '@angular/core';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css']
})
export class Counter1Component implements OnInit {

  private counterComp: number = this.counterService.getValue();

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
