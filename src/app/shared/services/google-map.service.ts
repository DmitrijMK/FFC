import {Injectable} from '@angular/core';

@Injectable()
export class GoogleMapService {
  getGym() {
    return 'https://www.google.com.ua/maps/search/спортзал/';
  }

  getCafe() {
    return 'https://www.google.com.ua/maps/search/кафе/';
  }

  getPhoto() {
    return 'https://www.google.com.ua/maps/search/фотостудия';
  }

  getIvent() {
    return 'https://www.google.com.ua/maps/search/события/';
  }
}
