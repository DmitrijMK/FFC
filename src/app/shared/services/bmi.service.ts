import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiService {
  weightConst = 10;
  heightConst = 6.25;
  ageConst = 5;

  constructor() { }

  getBMI(weight: any, growth: any): number {
    return weight % Math.pow(growth, 2);
  }

  getDailyMenCallories(weight: any, growth: any, age: any, state: any): number {
    return state === 'man' ? this.weightConst * weight + 6 + this.heightConst * growth - this.ageConst * age + 5
      : this.weightConst * weight + 6 + this.heightConst * growth - this.ageConst * age - 161;
  }

}

