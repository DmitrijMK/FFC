import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {LocalStorageService} from './services/localstorage.service';
import { BmiFormComponent } from './components/bmi-form/bmi-form.component';
import { MatRadioModule, MatSliderModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatSliderModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    BmiFormComponent
  ],
  declarations: [HeaderComponent, BmiFormComponent],
  providers: [LocalStorageService]
})
export class SharedModule {
}
