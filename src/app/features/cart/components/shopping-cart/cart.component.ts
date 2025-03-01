import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CartService } from 'src/app/core/services/cart.service';
import { CourseModel } from 'src/app/features/models/landingModels';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  breadcrumbItems: MenuItem[] = [];
  addedCourses: CourseModel[] = [];

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.breadcrumbItems = [
      { label: 'Categories', routerLink: ['/categories'] },
      { label: 'Details', routerLink: ['/details'] },
      { label: 'Shopping Cart', routerLink: ['/cart'], disabled: true }
    ];
  }

}
