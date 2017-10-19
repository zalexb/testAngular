import { Injectable } from '@angular/core';
import { Model } from './model';

@Injectable()
export class DataService {

	private model = new Model();

  constructor() { }

  getData(){
  	return this.model;
  }

  getSingleAction(id) {
  	return this.model.items.find((data) => data.id == id);
  }
 
}
