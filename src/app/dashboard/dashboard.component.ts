import {Component, OnInit} from '@angular/core';
import {SidenavService} from '../services/sidenav.service';
import {DeviceOutputService} from '../services/model-services/device-output.service';
import {Observable} from 'rxjs';
import {DeviceOutput} from '../shared/models/deviceOutput.model';
import {DeviceService} from '../services/model-services/device.service';
import {Device} from '../shared/models/device.model';
import {User} from '../shared/models/user.model';
import {UserService} from '../services/model-services/user.service';
import {DateInterval} from '../shared/models/dateInterval';
import {DatePipe, getLocaleTimeFormat} from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  devices: Observable<Device[]>;
  outputs: Observable<DeviceOutput[]>;
  dates: DateInterval;
  constructor(
    private navService: SidenavService,
    private deviceOutputService: DeviceOutputService, //not needed
    private userService: UserService, //not needed
    private deviceService: DeviceService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit() {
    this.devices = this.deviceService.getDevices();
  }

  //for menubar
  toggleNav() {
    this.navService.toggleNav();
  }
  getDeviceOutputByTime(dates) {
    this.outputs = this.deviceOutputService.getDeviceOutputByTimeInterval(dates);
  }
  navigateToUrl(url) {
    this.router.navigate([url]);
  }
  openSnackBarWithMessage(snackBarMessage) {
    this.snackBar.open(snackBarMessage.message, snackBarMessage.action, snackBarMessage.config);
  }
}
