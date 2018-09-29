import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../shared/services/localstorage.service';
import {UserData} from '../shared/interfaces/user-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bmiData: UserData;

  constructor(
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
    if (this.storage.get('userData')) {
      this.bmiData = this.storage.get('userData');
    }
  }

  handleSubmit(object: UserData) {
    this.bmiData = object;
    this.storage.set('userData', object);
  }
}
