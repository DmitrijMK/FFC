import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {LocalStorageService} from './services/localstorage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent],
  providers: [LocalStorageService]
})
export class SharedModule {
}
