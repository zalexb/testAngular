import { Component } from '@angular/core';
import { TodoItem } from './model';
import { NgModel } from '@angular/forms';
import { DataService } from './data.service';
import { Router } from '@angular/router';



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
	workDetaild: string = ''; 
  actionDetails: string;

  constructor (private dataService: DataService, private router: Router) {
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
  		this.model.items.push(new TodoItem(newItem, false, this.model.items.length));
  		this.clean = '';
  	}
  }

  showDetails(id) {
  	this.router.navigate([id + '']);
  }

}
