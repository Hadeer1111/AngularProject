import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { OrderConfirmationPageComponent } from './order-confirmation-page/order-confirmation-page.component';

const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'details/:id', component: ProductItemDetailsComponent},
  {path:'cart', component: CartComponent},
  {path:'order', component: OrderConfirmationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
