import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { Sample2Component } from './sample2/sample2.component';
import { DataService } from './data.service';
import { Counter1Component } from './counter1/counter1.component';
import { Counter2Component } from './counter2/counter2.component';
import { Counter3Component } from './counter3/counter3.component';
import { CounterService} from "./counter.service";
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { SingleComponent } from './single/single.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth-guard/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    Sample2Component,
    Counter1Component,
    Counter2Component,
    Counter3Component,
    CartComponent,
    ProductsComponent,
    SingleComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {path: 'admin' , component: AdminComponent,
        canActivate: [AuthGuardService]},
        {path: 'sample', component: SampleComponent,
        children:[
            {path: 'counter1', component: Counter1Component},
            {path: 'counter2', component: Counter2Component},
            {path: 'counter3', component: Counter3Component},
        ]},
        {path: 'sample2', component: Sample2Component},
        {path: 'login', component: LoginComponent},
        {path: ':id', component: SingleComponent},
        // {path: '', component: SampleComponent},
    ])
  ],
  providers: [DataService, CounterService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
