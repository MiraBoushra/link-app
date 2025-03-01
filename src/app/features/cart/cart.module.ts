import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/shopping-cart/cart.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckoutComponent } from './components/checkout/checkout.component';


@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    BreadcrumbModule,
    SharedModule
  ]
})
export class CartModule { }
