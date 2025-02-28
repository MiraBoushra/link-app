import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../services/landing.service';
import { BannerModel } from '../../models/landingModels';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  banners: BannerModel[] = [];

  constructor(private bannerService: LandingService) { }

  ngOnInit(): void {
    this.bannerService.getBannerData().subscribe(
      data => {
        this.banners = data.banners.sort((a, b) => a.order - b.order);
      }
      
    );

  }

  setDynamicColor(color: string) {
    document.documentElement.style.setProperty('--dynamic-color', `#${color}`);
  }
  

}
