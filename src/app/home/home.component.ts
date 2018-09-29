import {Component, OnInit} from '@angular/core';
import {ColorThemeService} from '../shared/services/color-theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  colorTheme = 'man-wrapper';

  constructor(private color: ColorThemeService) {
  }

  ngOnInit() {
    this.color.data$.subscribe(data => this.colorTheme = data);
  }
}
