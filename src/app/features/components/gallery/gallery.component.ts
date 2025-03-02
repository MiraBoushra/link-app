import { Component } from '@angular/core';
import { LandingService } from '../../services/landing.service';
import { GalleryModel } from '../../models/landingModels';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],


})
export class GalleryComponent {
  sliderData: GalleryModel[] = [];
  constructor(private landingService: LandingService) { }

  ngOnInit(): void {
    this.landingService.getGalleryData().subscribe(
      data => {
        this.sliderData = data.Slider;
      }
    );

  }

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.sliderData.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.sliderData.length) % this.sliderData.length;
  }

  getImage(indexOffset: number): string {
    let newIndex = (this.currentIndex + indexOffset + this.sliderData.length) % this.sliderData.length;
    return this.sliderData[newIndex]?.image;
  }

}
