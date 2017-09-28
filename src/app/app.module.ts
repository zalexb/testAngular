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

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    Sample2Component,
    Counter1Component,
    Counter2Component,
    Counter3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {path: 'sample', component: SampleComponent},
        {path: 'sample2', component: Sample2Component},
        // {path: '', component: SampleComponent},
    ])
  ],
  providers: [DataService,CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
