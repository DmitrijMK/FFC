import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalStorageService} from './services/localstorage.service';
import {BmiFormModule} from './components/bmi-form/bmi-form.module';
import {HeaderModule} from './components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    BmiFormModule,
    HeaderModule
  ],
  exports: [
    HeaderModule, BmiFormModule
  ],
  providers: [LocalStorageService]
})
export class SharedModule {
}
