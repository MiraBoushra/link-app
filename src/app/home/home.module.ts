import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './components/home/home.component';
import { FeaturesModule } from '../features/features.module';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        FeaturesModule,
        HomeRoutingModule, 
    ],
    exports: [TranslateModule, HomeComponent]
})
export class HomeModule { }
