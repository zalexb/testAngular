import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { ActivatedRoute ,Router, Params } from '@angular/router';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
   styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ProductsDeleteComponent implements OnInit {

	currentProduct: Product;
	errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute, 
  	private router: Router,
  	private service: ProductsService) { }

  ngOnInit() {
  	let id = this.activatedRoute.snapshot.params["id"];
  	if(id) {
  		this.service.getProduct(id)
  			.subscribe(
  			product => this.currentProduct = product,
  			error => this.errorMessage = error
  			);
  	}
  }

  deleteProduct() {
  	this.service.deleteProduct(this.currentProduct)
  		.subscribe(
  		() => this.goBack(),
  		error => this.errorMessage = error
  		)
  }

  goBack() {
  	this.router.navigate(["/products"]);
  }

}
