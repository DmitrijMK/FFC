import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalStorageService} from './services/localstorage.service';
import {BmiFormModule} from './components/bmi-form/bmi-form.module';
import {HeaderModule} from './components/header/header.module';
import {BmiService} from './services/bmi.service';
import {BmiResultModule} from './components/bmi-result/bmi-result.module';
import {ColorThemeService} from './services/color-theme.service';

@NgModule({
  imports: [
    CommonModule,
    BmiFormModule,
    HeaderModule
  ],
  exports: [
    HeaderModule,
    BmiFormModule,
    BmiResultModule
  ],
  providers: [LocalStorageService, BmiService, ColorThemeService]
})
export class SharedModule {
}
