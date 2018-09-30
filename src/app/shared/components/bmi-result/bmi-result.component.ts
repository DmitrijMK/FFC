import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserData} from '../../interfaces/user-data';
import {MEN_TYPE, WOMEN_TYPE} from '../../const/body-type';
import {ColorThemeService} from '../../services/color-theme.service';
import {BmiService} from '../../services/bmi.service';

@Component({
  selector: 'app-bmi-result',
  templateUrl: './bmi-result.component.html',
  styleUrls: ['./bmi-result.component.scss']
})
export class BmiResultComponent implements OnInit, OnChanges {
  @Input() data: UserData;
  imgSrc: string;
  colorTheme = 'man-wrapper';
  questionIcon = true;

  constructor(private color: ColorThemeService,
              private bmi: BmiService) {
  }

  ngOnInit() {
    this.data ? this.initialiseData() : this.imgSrc = '../../../../assets/images/person.png';
    this.color.data$.subscribe(data => this.colorTheme = data);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && this.data) {
      this.initialiseData();
      this.questionIcon = false;
    }
  }

  initialiseData(): void {
    this.checkBodyTransform(this.data);
  }

  checkBodyTransform(data): void {
    const {bmi, gender} = data;
    if (gender === 'Мужчина') {
      this.imgSrc = this.bmi.setBodyType(bmi, MEN_TYPE);
    } else {
      this.imgSrc = this.bmi.setBodyType(bmi, WOMEN_TYPE);
    }
  }
}
