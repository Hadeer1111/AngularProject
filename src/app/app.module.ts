import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { CartComponent } from './cart/cart.component'
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { OrderConfirmationPageComponent } from './order-confirmation-page/order-confirmation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductItemDetailsComponent,
    CartComponent,
    FormComponent,
    OrderConfirmationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
