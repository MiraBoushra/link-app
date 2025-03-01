import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { BannerComponent } from './components/banner/banner.component';
import { CarouselModule } from 'primeng/carousel';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DividerModule } from 'primeng/divider';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './components/courses/courses.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { SharedModule } from '../shared/shared.module';

let components = [BannerComponent, GalleryComponent, CoursesComponent];
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    TranslateModule,
    CarouselModule,
    DividerModule,
    SliderModule,
    FormsModule,
    TabMenuModule,
    CardModule,
    DataViewModule, 
    SharedModule


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: components
})
export class FeaturesModule { }
