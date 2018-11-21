import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 import { MydataService } from './mydata.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import{FormsModule} from '@angular/forms';
@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      RouterModule,
      HttpClientModule,
      RouterModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
