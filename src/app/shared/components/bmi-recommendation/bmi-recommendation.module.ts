import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BmiRecommendationComponent} from './bmi-recommendation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BmiRecommendationComponent
  ],
  declarations: [BmiRecommendationComponent]
})
export class BmiRecommendationModule { }
