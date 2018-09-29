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

  getBMI(weight: any, growth: any): number {
    return +(weight / Math.pow(growth / 100, 2)).toFixed(1);
  }

  getDailyMenCallories(value): number {
    const {gender, age, weight, growth} = value;
    return gender === 'Мужчина' ? this.weightConst * weight + 6 + this.heightConst * growth - this.ageConst * age + 5
      : this.weightConst * weight + 6 + this.heightConst * growth - this.ageConst * age - 161;
  }

}

