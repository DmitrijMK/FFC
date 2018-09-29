import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LocalStorageService} from '../shared/services/localstorage.service';

@Component({
  selector: 'app-authorithation',
  templateUrl: './authorithation.component.html',
  styleUrls: ['./authorithation.component.less']
})
export class AuthorithationComponent implements OnInit {
  login: FormGroup;

  constructor(private storage: LocalStorageService,
              private fb: FormBuilder) {

    this.login = this.fb.group({
      name: [null, Validators.required]
    });
  }

  handleSubmit() {
   this.storage.set('name', this.login.value.name);
  }

  ngOnInit() {
  }

}
