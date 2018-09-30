import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/localstorage.service';
import {ColorThemeService} from '../../services/color-theme.service';
import {MatDialog} from '@angular/material';
import {PopupComponent} from '../popup/popup.component';
import {BmiService} from '../../services/bmi.service';
import {UserData} from '../../interfaces/user-data';
import {MAN_PHRASE, WOMAN_PHRASE, RECOMMENDATION_PHRASE} from '../../const/recommendation';


@Component({
  selector: 'app-bmi-recommendation',
  templateUrl: './bmi-recommendation.component.html',
  styleUrls: ['./bmi-recommendation.component.scss']
})
export class BmiRecommendationComponent implements OnInit {
  name: string;
  data: UserData;
  result: string;
  colorTheme = 'manColor';
  recomData: Array<string>;
  colorTheme = 'womanColor';
  src: string;

  constructor(private storage: LocalStorageService,
              private color: ColorThemeService,
              private dialog: MatDialog,
              private bmi: BmiService) {
  }

  ngOnInit() {
    this.name = this.storage.get('name').charAt(0).toUpperCase() + this.storage.get('name').slice(1);
    this.data = this.storage.get('userData');
    if (this.data.gender === 'Мужчина') {
      this.result = this.bmi.setBodyType(this.data.bmi, MAN_PHRASE);
    } else {
      this.result = this.bmi.setBodyType(this.data.bmi, WOMAN_PHRASE);
    }
    this.getListRecom(this.data.bmi, RECOMMENDATION_PHRASE);
    this.color.data$.subscribe(data => this.colorTheme = data);
  }

  getListRecom(bmi: number, type:): void {
    if (bmi < 18.5) {
       this.recomData = [type.SPORT, type.Proper_Nutrition];
    } else if (18.5 <= bmi && bmi <= 25) {
      this.recomData = [type.BEATIFUL];
    } else if (25 < bmi && bmi <= 40) {
      this.recomData = [type.SPORT, type.Proper_Nutrition];
    } else if (bmi > 40) {
      this.recomData = [type.SPORT, type.Proper_Nutrition, type.DOINGS];
    }
  }

  openDialog() {
    this.dialog.open(PopupComponent, {
      data: ''
    });
  }
}
