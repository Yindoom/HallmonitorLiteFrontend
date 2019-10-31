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

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  devices: Observable<Device[]>;
  outputs: Observable<DeviceOutput[]>;
  users: Observable<User[]>;
  dates: DateInterval;
  from_date: Date;
  to_date: Date;

  hours = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24
  ];

  minutes = [0, 30];

  constructor(
    private navService: SidenavService,
    private deviceOutputService: DeviceOutputService,
    private userService: UserService,
    private deviceService: DeviceService
  ) {
  }

  ngOnInit() {
    this.devices = this.deviceService.getDevices();
  }

  toggleNav() {
    this.navService.toggleNav();
  }

  format(toFormat: Date): string {
    const dp = new DatePipe(navigator.language);
    const df = 'yyyy-MM-dd';
    return dp.transform(toFormat, df);
  }

  getTestingStuffMethod() {
    this.dates = new DateInterval();
    //Date Thu Oct 31 2019 10:39:06 GMT+0100 (Central European Standard Time)
    this.from_date = new Date("2019-10-10");
    this.to_date = new Date("2019-10-25 13:10");
    this.dates.from_date = this.from_date;
    this.dates.to_date = this.to_date;

    console.log(new Date());
    this.outputs = this.deviceOutputService.getDeviceOutputByTimeInterval(this.dates);
  }
}
