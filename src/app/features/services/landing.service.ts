import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banners, Gallery } from '../models/landingModels';

@Injectable({
  providedIn: 'root'
})
export class LandingService{
  constructor(private http: HttpClient) { }

  getBannerData(): Observable<Banners> {
   let apiURL = 'https://api.npoint.io/2c9281eddfb0e4be229b'
    return this.http.get<Banners>(apiURL);

  }
  getGalleryData(): Observable<Gallery> {
   let apiURL = 'https://api.npoint.io/8494c045d50509ba0d5a'
    return this.http.get<Gallery>(apiURL);

  }

}
