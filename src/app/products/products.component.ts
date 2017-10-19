import { Component, OnInit, EventEmitter, Output } from '@angular/core';

const products = [
	'phone',
	'TV',
	'laptop',
	'tablet'
]


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	productList: string [];

	@Output()
	order: EventEmitter<string> = new EventEmitter();

	getProducts(){
		this.productList = products;
		return this.productList;
	}

	onBuy(product) {
		this.order.emit(product);
	}

  constructor() { }

  ngOnInit() {
  }

}
