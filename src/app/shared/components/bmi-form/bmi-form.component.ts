import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import 'hammerjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LocalStorageService} from '../../services/localstorage.service';
import {BmiService} from '../../services/bmi.service';
import {UserData} from '../../interfaces/user-data';

@Component({
  selector: 'app-bmi-form',
  templateUrl: './bmi-form.component.html',
  styleUrls: ['./bmi-form.component.scss']
})
export class BmiFormComponent implements OnInit {
  @Output() change = new EventEmitter<UserData> ();
  bmiGroup: FormGroup;
  name: string;

  constructor(private fb: FormBuilder,
              private storage: LocalStorageService,
              private bmi: BmiService) {
    this.bmiGroup = this.fb.group({
      gender: [null, Validators.required],
      age: [null, Validators.required],
      weight: [null, Validators.required],
      growth: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.name = this.storage.get('name');
  }

  handleSubmit() {
    const bmi = this.bmi.getBMI(this.bmiGroup.value.weight, this.bmiGroup.value.growth);
    const dc = this.bmi.getDailyMenCallories(this.bmiGroup.value);
    this.change.emit({bmi: bmi, dc: dc, ...this.bmiGroup.value});
  }
}
