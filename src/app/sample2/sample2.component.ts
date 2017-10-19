import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {

	boxes = [
		{title: "NewsOne", text: "Hello world1"},
		{title: "NewsTwo", text: "Hello world2"},
		{title: "NewsThree", text: "Hello world3"},
	]

  constructor() { }

  ngOnInit() {
  }

}
