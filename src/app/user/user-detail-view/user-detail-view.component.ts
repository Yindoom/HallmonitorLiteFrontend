import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../shared/models/user.model';
import {UserService} from '../../services/model-services/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-detail-view',
  templateUrl: './user-detail-view.component.html',
  styleUrls: ['./user-detail-view.component.scss']
})
export class UserDetailViewComponent implements OnInit {

  @Input()
  user: User;

  userForm = new FormGroup({
    id: new FormControl(''),
    role: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  updateUser() {
    console.log('update user');
  }

  changePassword() {
    console.log('change password');
  }
}
