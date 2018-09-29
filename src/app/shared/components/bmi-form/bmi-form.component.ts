import {Component, OnInit} from '@angular/core';
import 'hammerjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LocalStorageService} from '../../services/localstorage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bmi-form',
  templateUrl: './bmi-form.component.html',
  styleUrls: ['./bmi-form.component.less']
})
export class BmiFormComponent implements OnInit {
  bmiGroup: FormGroup;
  name: string;

  constructor(private fb: FormBuilder,
              private storage: LocalStorageService,
              private router: Router) {
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
    console.log(this.bmiGroup.value);
    this.storage.set('userData', {...this.bmiGroup.value});
    // // this.router.navigate(['home']);
  }
}
