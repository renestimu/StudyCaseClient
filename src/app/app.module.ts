import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
registerLocaleData(localeTr, 'tr');
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { ProductFilterPipe } from './product/product-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
