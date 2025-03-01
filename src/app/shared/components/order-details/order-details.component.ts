import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
  constructor(private router: Router, public cartService : CartService) { }

  ngOnInit(){
  }
  goToCheckout() {
    this.router.navigate(['/cart/checkout']);

  }
}
