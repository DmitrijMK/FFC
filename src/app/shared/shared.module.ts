import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalStorageService} from './services/localstorage.service';
import {BmiFormModule} from './components/bmi-form/bmi-form.module';
import {HeaderModule} from './components/header/header.module';
import {BmiService} from './services/bmi.service';
import {BmiResultModule} from './components/bmi-result/bmi-result.module';
import {ColorThemeService} from './services/color-theme.service';
import {BmiRecommendationModule} from './components/bmi-recommendation/bmi-recommendation.module';
import {PopupModule} from './components/popup/popup.module';
import {GoogleMapService} from './services/google-map.service';

@NgModule({
  imports: [
    CommonModule,
    BmiFormModule,
    HeaderModule,
    BmiResultModule,
    BmiRecommendationModule,
    PopupModule
  ],
  exports: [
    HeaderModule,
    BmiFormModule,
    BmiResultModule,
    BmiRecommendationModule
  ],
  providers: [LocalStorageService, BmiService, ColorThemeService, GoogleMapService]
})
export class SharedModule {
}
