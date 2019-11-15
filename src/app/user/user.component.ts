import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user.model';
import {UserService} from '../services/model-services/user.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceOutputService} from '../services/model-services/device-output.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: Observable<User[]>;
  user: User;
  routeParams: any;

  constructor(private userService: UserService,
              private devoutputService: DeviceOutputService,
              private router: Router,
              private route: ActivatedRoute) {
    this.routeParams = null;
  }

  ngOnInit() {
    this.checkUrl();
    this.userList = this.userService.getUsers();

    this.route.params.subscribe(params => {
      (this.routeParams = params);
      if (!!this.routeParams['userId']) {
         this.userService.getUserById(this.routeParams['userId']).subscribe( x => {
          this.user = x;
        });
      }
    })
  }

  checkUrl() {
    return this.router.url.toString() == '/user';
  }

}
