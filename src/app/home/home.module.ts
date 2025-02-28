import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './components/home/home.component';
import { FeaturesModule } from '../features/features.module';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        FeaturesModule

    ],
    exports: [TranslateModule, HomeComponent]
})
export class HomeModule { }
