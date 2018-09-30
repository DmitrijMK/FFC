import {Component, Inject, OnInit} from '@angular/core';
import {GoogleMapService} from '../../services/google-map.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  src;

  constructor(private map: GoogleMapService,
              @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit() {
    console.log(this.data);
    this.src = this.map.getMapHref(this.data);
  }

}
