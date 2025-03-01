import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseModel } from '../../models/landingModels';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  course: CourseModel = {} as CourseModel;


  constructor(private route: ActivatedRoute , private cartService: CartService,
     private router : Router) {
    this.route.paramMap.subscribe(params => {
      let courseId = params.get('id');
      const courses = localStorage.getItem('courses');
      const coursesArray: CourseModel[] = courses ? JSON.parse(courses) as CourseModel[] : []; // Ensure correct type
      const selectedCourse = coursesArray.find(course => course.id == courseId);
      if (selectedCourse)
        this.course = selectedCourse
    });
   }

  ngOnInit() {
  
  }

  goToCheckout() {
    this.router.navigate(['/cart/checkout']);
  }
  
  addToCart() {
    this.cartService.addToCart(this.course);
  }
}
