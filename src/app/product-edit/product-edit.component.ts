import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ProductEditComponent implements OnInit {

	currentProduct: Product;
	errorMessage: string;
	productForm: FormGroup;

  constructor(private service: ProductsService,
  	private acticatedRoute: ActivatedRoute,
  	private fb: FormBuilder,
  	private router: Router) { }

  ngOnInit() {
  	this.buildForm();
  	this.getProductFormRouter();
  }

  public checkError(element: string, errorType: string) {
  	return this.productForm.get(element).hasError(errorType) &&
  			this.productForm.get(element).touched
  }

  public onSubmit(productForm: FormGroup) {
  	this.currentProduct.name = productForm.value.name;
  	this.currentProduct.price = productForm.value.price;

  	if(this.currentProduct.id) {
  		this.service.updateProduct(this.currentProduct)
  			.subscribe(
  			() => this.goBack(),
  			error => this.errorMessage = error
  			)
  	}else{
  		this.service.addProduct(this.currentProduct)
  			.subscribe(
  			() => this.goBack(),
  			error => this.errorMessage = error
  			)
  	}
  }

  public goBack() {
  	this.router.navigate(["/products"]);
  }

  private getProductFormRouter() {
  	this.acticatedRoute.params.forEach((params: Params) => {
  		let id = params["id"];

  		if(id) {
  			this.service.getProduct(id).subscribe(
  				product => {
  					this.currentProduct = product;
  					this.productForm.patchValue(this.currentProduct);
  				},
  				error => this.errorMessage = error
  			);
  		}
  		else {
  			this.currentProduct = new Product(null, null, null);
  			this.productForm.patchValue(this.currentProduct);
  		}
  	});
  }

  private buildForm() {
  	this.productForm = this.fb.group({
  		name: ["", Validators.required],
  		price: ["", Validators.required]
  	});
  }

}
