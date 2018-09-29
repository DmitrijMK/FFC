import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BmiRecommendationComponent} from './bmi-recommendation.component';
import {MatButtonModule, MatCardModule, MatDialogModule} from '@angular/material';
import {PopupComponent} from '../popup/popup.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    BmiRecommendationComponent
  ],
  declarations: [BmiRecommendationComponent],
  entryComponents: [PopupComponent]
})
export class BmiRecommendationModule { }
