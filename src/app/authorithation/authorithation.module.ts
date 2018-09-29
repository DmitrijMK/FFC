import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorithationRoutingModule} from './authorithation-routing.module';
import {AuthorithationComponent} from './authorithation.component';
import {MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthorithationRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [AuthorithationComponent]
})
export class AuthorithationModule {
}
