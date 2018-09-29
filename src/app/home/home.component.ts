import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../shared/services/localstorage.service';
import {UserData} from '../shared/interfaces/user-data';
import {ColorThemeService} from '../shared/services/color-theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bmiData: UserData;
  colorTheme = 'man-wrapper';

  constructor(
    private storage: LocalStorageService,
    private color: ColorThemeService
  ) { }

  ngOnInit() {
    this.color.data$.subscribe(data => this.colorTheme = data);
    if (this.storage.get('userData')) {
      this.bmiData = this.storage.get('userData');
    }
  }

  handleSubmit(object: UserData) {
    this.bmiData = object;
    this.storage.set('userData', object);
  }
}
