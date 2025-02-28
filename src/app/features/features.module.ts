import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { BannerComponent } from './components/banner/banner.component';
import { CarouselModule } from 'primeng/carousel';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DividerModule } from 'primeng/divider';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BannerComponent, GalleryComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CarouselModule,
    DividerModule,
    SliderModule,
    FormsModule
  ],
  exports:[BannerComponent, GalleryComponent, TranslateModule]
})
export class FeaturesModule { }
