import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/localstorage.service';
import {ColorThemeService} from '../../services/color-theme.service';
import {MatDialog} from '@angular/material';
import {PopupComponent} from '../popup/popup.component';

@Component({
  selector: 'app-bmi-recommendation',
  templateUrl: './bmi-recommendation.component.html',
  styleUrls: ['./bmi-recommendation.component.scss']
})
export class BmiRecommendationComponent implements OnInit {
  name: string;
  colorTheme = 'manColor';

  constructor(private storage: LocalStorageService,
              private color: ColorThemeService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.name = this.storage.get('name');
    this.color.data$.subscribe(data => this.colorTheme = data);
  }

  openDialog() {
    this.dialog.open(PopupComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
}
