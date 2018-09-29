import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import 'hammerjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LocalStorageService} from '../../services/localstorage.service';
import {BmiService} from '../../services/bmi.service';
import {UserData} from '../../interfaces/user-data';
import {ColorThemeService} from '../../services/color-theme.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-bmi-form',
  templateUrl: './bmi-form.component.html',
  styleUrls: ['./bmi-form.component.scss']
})
export class BmiFormComponent implements OnInit {
  @Output() change = new EventEmitter<UserData> ();
  bmiGroup: FormGroup;
  name: string;
  colorClass = 'manColor';

  constructor(private fb: FormBuilder,
              private storage: LocalStorageService,
              private bmi: BmiService,
              private color: ColorThemeService) {
    this.bmiGroup = this.fb.group({
      gender: ['Мужчина', Validators.required],
      age: [22, Validators.required],
      weight: [75, Validators.required],
      growth: [175, Validators.required]
    });
  }

  ngOnInit() {
    this.name = this.storage.get('name');

    this.bmiGroup.valueChanges.pipe(map(value => {
        if (value.gender === 'Мужчина') {
          // this.colorClass = 'manColor';
          this.color.getNext('manColor');
        } else {
          // this.colorClass = 'womanColor';
          this.color.getNext('womanColor');
        }
      }
    )).subscribe();
  }

  handleSubmit() {
    const bmi = this.bmi.getBMI(this.bmiGroup.value.weight, this.bmiGroup.value.growth);
    const dc = this.bmi.getDailyMenCallories(this.bmiGroup.value);
    this.change.emit({bmi: bmi, dc: dc, ...this.bmiGroup.value});
  }
}
