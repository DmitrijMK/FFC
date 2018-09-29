import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {
  set(key: string, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
