import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { CourseModel } from 'src/app/features/models/landingModels';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() course: CourseModel = {};
  stars = Array(5).fill(0);
  constructor(private cartService: CartService, private router: Router
  ) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.course);
  }

  navigateToCourse(course: CourseModel) {
    this.router.navigate(['/course-details', course.id]);
  }
}
