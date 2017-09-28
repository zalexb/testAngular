import { Injectable } from '@angular/core';
import {Model} from './model';

@Injectable()
export class DataService {

  private model =  new Model();

  constructor() { }

  getData(){
    return this.model;
    }
}
