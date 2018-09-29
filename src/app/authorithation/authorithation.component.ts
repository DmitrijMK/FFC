import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LocalStorageService} from '../shared/services/localstorage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authorithation',
  templateUrl: './authorithation.component.html',
  styleUrls: ['./authorithation.component.less']
})
export class AuthorithationComponent implements OnInit {
  login: FormGroup;

  constructor(private storage: LocalStorageService,
              private fb: FormBuilder,
              private router: Router
              ) {

    this.login = this.fb.group({
      name: [null, Validators.required],
      mail: []
    });
  }

  handleSubmit() {
   this.storage.set('name', this.login.value.name);
   this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
