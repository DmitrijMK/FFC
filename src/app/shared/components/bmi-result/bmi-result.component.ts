import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {UserData} from '../../interfaces/user-data';
import {MEN_TYPE, WOMEN_TYPE} from '../../const/body-type';

@Component({
  selector: 'app-bmi-result',
  templateUrl: './bmi-result.component.html',
  styleUrls: ['./bmi-result.component.scss']
})
export class BmiResultComponent implements OnInit, OnChanges {
  @Input() data: UserData;
  imgSrc: string;

  constructor() { }

  ngOnInit() {
    this.data ?  this.initialiseData() : this.imgSrc = '../../../../assets/images/person.png';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && this.data) {
      this.initialiseData();
    }
  }

  initialiseData (): void {
    this.checkBodyTransform(this.data);
    console.log(this.imgSrc);
  }

  checkBodyTransform (data): void {
    const {bmi, gender} = data;
    if (gender === 'Мужчина') {
      this.setBodyType(bmi, MEN_TYPE);
    } else {
      this.setBodyType(bmi, WOMEN_TYPE);
    }

  }

  setBodyType(bmi: number, type: any): void {
    if (bmi < 18.5) {
      this.imgSrc =  type.THINK;
    } else if (18.5 <= bmi && bmi <= 25) {
      this.imgSrc = type.NORMAL;
    } else if (25 < bmi && bmi <= 30) {
      this.imgSrc = type.FIRST_OVERWEIGHT;
    } else if (30 < bmi && bmi <= 40) {
      this.imgSrc = type.SECOND_OVERWEIGHT;
    } else if (bmi > 40) {
      this.imgSrc = type.THIRD_OVERWEIGHT;
    }
  }

}
