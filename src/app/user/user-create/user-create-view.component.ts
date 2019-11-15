import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-create-view',
  templateUrl: './user-create-view.component.html',
  styleUrls: ['./user-create-view.component.scss']
})
export class UserCreateViewComponent implements OnInit {

  createUserForm = new FormGroup({
    emailAddress: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    passwordCheck: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  createUser() {

  }
}
