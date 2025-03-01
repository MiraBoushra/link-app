import { Component } from '@angular/core';
import { LandingService } from '../../services/landing.service';
import { CourseModel } from '../../models/landingModels';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: CourseModel[] = [];
  categories: any = [];
  activeCategory: string = 'All'
  filteredCourses: CourseModel[] = [];
  constructor(private landingService: LandingService) { }

  ngOnInit(): void {
    this.landingService.getCoursesData().subscribe(
      data => {
        this.courses = data.Courses;
        this.filteredCourses = [...this.courses];
        const uniqueCategories = new Set(this.courses.map(course => course.category));
        this.categories.push(...uniqueCategories);

      });
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;

   this.filteredCourses =  category == 'All' ? [...this.courses] : this.courses.filter(course => course.category == category);
    console.log(this.filteredCourses)
  }


}
