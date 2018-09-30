import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable()
export class GoogleMapService {
  constructor(protected sanitizer: DomSanitizer) {
  }

  getMapHref(value) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${value}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
  }
}
