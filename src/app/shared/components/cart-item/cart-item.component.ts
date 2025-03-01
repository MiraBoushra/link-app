import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { CourseModel } from 'src/app/features/models/landingModels';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() course: CourseModel = {};
  ratingValue: number = 4;

  constructor(private cartService: CartService, private router: Router) {

  }

  ngOnInit() {
  }

  removeFromCart(courseId: string | undefined) {
    this.cartService.removeFromCart(courseId);
  }

  navigateToCourse(course: CourseModel) {
    this.router.navigate(['/course-details', course.id]);
  }
}
