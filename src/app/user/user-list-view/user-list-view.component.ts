import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent implements OnInit {

  @Input()
  userList: Observable<User[]>;

  @Input()
  url: string;

  constructor() { }

  ngOnInit() {
  }

}
