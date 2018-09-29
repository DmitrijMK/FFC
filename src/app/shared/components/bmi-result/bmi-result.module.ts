import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BmiResultComponent} from './bmi-result.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BmiResultComponent
  ],
  declarations: [BmiResultComponent]
})
export class BmiResultModule { }
