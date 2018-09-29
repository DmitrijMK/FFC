import {Component, OnInit} from '@angular/core';
import {GoogleMapService} from '../../services/google-map.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  src: string;

  constructor(private map: GoogleMapService) {
  }

  ngOnInit() {
    this.src = this.map.getGym();
  }

}
