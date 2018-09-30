import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiService {
  weightConst = 10;
  heightConst = 6.25;
  ageConst = 5;

  constructor() {
  }

  setBodyType(bmi: number, type: any): string {
    console.log(bmi);
    console.log(type);
    if (bmi < 18.5) {
      return type.THINK;
    } else if (18.5 <= bmi && bmi <= 25) {
      return type.NORMAL;
    } else if (25 < bmi && bmi <= 30) {
      return type.FIRST_OVERWEIGHT;
    } else if (30 < bmi && bmi <= 40) {
      return type.SECOND_OVERWEIGHT;
    } else if (bmi > 40) {
      return type.THIRD_OVERWEIGHT;
    }
  }

  getBMI(weight: any, growth: any): number {
    return +(weight / Math.pow(growth / 100, 2)).toFixed(1);
  }

  getDailyMenCallories(value): number {
    const {gender, age, weight, growth} = value;
    return gender === 'Мужчина' ? this.weightConst * weight + 6 + this.heightConst * growth - this.ageConst * age + 5
      : this.weightConst * weight + 6 + this.heightConst * growth - this.ageConst * age - 161;
  }

}

