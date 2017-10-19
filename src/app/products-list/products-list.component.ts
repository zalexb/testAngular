import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router, Params } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ProductsListComponent implements OnInit {

	products: Product[] = [];
	errorMessage: string;

  constructor(private service: ProductsService,
  				private router: Router) { }

  ngOnInit() {
  	this.getProducts();

  }

  public refresh() {
  	this.getProducts();
  }

  public editProduct(product: Product) {
  	this.router.navigate(["products", "edit", product.id]);
  }

  public deleteProduct(product: Product) {
  	this.router.navigate(["products", "delete", product.id]);
  }

  public createProduct() {
  	this.router.navigate(["products", "create"]);
  }

  private getProducts() {
  	this.service.getProducts().subscribe(
  		products => this.products = products,
  		error => this.errorMessage = error
  	);
  }

}
