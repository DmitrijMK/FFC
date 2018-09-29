import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatRadioModule, MatSliderModule, MatButtonModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BmiFormComponent} from './bmi-form.component';

@NgModule({
  imports: [
    CommonModule,
    MatSliderModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule
  ],
  declarations: [BmiFormComponent],
  exports: [BmiFormComponent]
})
export class BmiFormModule {
}
