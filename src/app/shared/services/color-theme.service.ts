import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ColorThemeService {
  private color$ = new BehaviorSubject('manColor');
  data$ = this.color$.asObservable();

  getNext(res) {
    this.color$.next(res);
  }
}
