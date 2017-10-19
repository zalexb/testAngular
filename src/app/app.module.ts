import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { Sample2Component } from './sample2/sample2.component';
import { NewPageComponent } from './new-page/new-page.component';
import { DataService } from './data.service';
import { Counter1Component } from './counter1/counter1.component';
import { Counter2Component } from './counter2/counter2.component';
import { Counter3Component } from './counter3/counter3.component';
import { CounterService } from './counter.service';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import {SingleActionComponent} from './single-action/single-action.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { WikiComponent } from './wiki/wiki.component';
import { WikiService } from './wiki.service';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsService } from './products.service';
import { ProductsDeleteComponent } from './products-delete/products-delete.component';
import { ProductEditComponent } from './product-edit/product-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    Sample2Component,
    NewPageComponent,
    Counter1Component,
    Counter2Component,
    Counter3Component,
    CartComponent,
    ProductsComponent,
    SingleActionComponent,
    AdminComponent,
    LoginComponent,
    WikiComponent,
    ProductsListComponent,
    ProductsDeleteComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    JsonpModule,
    RouterModule.forRoot([
        {path: 'products', component: ProductsListComponent},
        {path: 'products/delete/:id', component: ProductsDeleteComponent},
        {path: 'products/edit/:id', component: ProductEditComponent},
        {path: 'products/create', component: ProductEditComponent},
        {path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
         {path: 'login', component: LoginComponent},
    		{path: 'new-page', component: NewPageComponent},
        {path: 'sample2', component: Sample2Component},
    		{path: ':id', component: SingleActionComponent},
    		{path: '', component: SampleComponent}
    	])
  ],
  providers: [
  DataService,
  CounterService,
  AuthGuardService,
  AuthService,
  WikiService,
  ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
