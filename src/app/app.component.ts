import { Component } from '@angular/core';
import { TodoItem } from './model';
import { NgModel } from '@angular/forms';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
	 model;
	name: string = 'Alex';
	filter: boolean = true;
	clean: string = '';
	color: string = 'btn-warning';
	details: boolean = false;
	workDetails: string = '';
	actionDetails: string = '';

	constructor(private dataService: DataService){
	this.model = dataService.getData();
}

  getName() {
  	return this.model.user
  }

  getTodoItems(filter) {
  	if (this.filter) {
  		return this.model.items.filter(item => !item.done);
  	} 
  	return this.model.items;
  }

  changeFilter() {
  	this.filter = !this.filter;
  	if (this.filter) {
  		this.color = 'btn-warning';
  	}else{
  		this.color = 'btn-success';
  	}
  }

  addItem(newItem) {
  	if (newItem !='') {
  		this.model.items.push(new TodoItem(newItem, false));
  		this.clean = '';
  	}
  }

  showDetails(done,action){
  	this.actionDetails = action;
      this.details = done;

  }

}
