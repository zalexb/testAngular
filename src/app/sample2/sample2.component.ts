import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css'],
  inputs: ['value','name']
})
export class Sample2Component implements OnChanges {

  value : number;
  name : string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
      // console.log('changed');
    let msgArray: string[] = [];
    for (let propName in changes){
      msgArray.push(propName, changes[propName].currentValue,changes[propName].previousValue);
        console.log(msgArray.join(';'));
    }
  }


}
