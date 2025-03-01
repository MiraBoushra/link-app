import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { RatingModule } from 'primeng/rating';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
@NgModule({
  declarations: [
    CourseCardComponent,
    CartItemComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ChipModule,
    RatingModule
    
  ],
  exports:[CourseCardComponent, CartItemComponent, OrderDetailsComponent]
})
export class SharedModule { }
