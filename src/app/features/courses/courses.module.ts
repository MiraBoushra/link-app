import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { CourseRoutingModule } from './courses.routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule, BreadcrumbModule 
  ]
})
export class CourseModule { }
