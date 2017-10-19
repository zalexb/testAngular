import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	orderProducts: string [] = [];

  constructor() { }

  getOrderProducts () {
  	return this.orderProducts;
  }

  addProduct (product) {
  	this.orderProducts.push(product);
  }

  productsQuantity () {
  	if (this.orderProducts){
  		return this.orderProducts.length;
  	}
  }

  ngOnInit() {
  }

}
