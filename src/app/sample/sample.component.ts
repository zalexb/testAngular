import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  // inputs: ['name'],

})

export class SampleComponent implements OnInit {

  @Input() //Берем name с тега <app-sample> в главном шаблоне
  name: string ;


  constructor() { }

  ngOnInit() {
  }

}
