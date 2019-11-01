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

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  devices: Observable<Device[]>;
  outputs: Observable<DeviceOutput[]>;

  dates: DateInterval;

  from_date: Date;
  to_date: Date;

  form: FormGroup = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl()
  });

  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

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
    this.dates = new DateInterval();
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
    const dateForm = this.form.value;
    console.log(this.format(dateForm.fromDate) + ' This is the date from the form :) ');

    this.from_date = new Date(this.format(dateForm.fromDate));
    this.to_date = new Date(this.format(dateForm.toDate));

    this.dates.from_date = this.from_date;
    this.dates.to_date = this.to_date;
    this.outputs = this.deviceOutputService.getDeviceOutputByTimeInterval(this.dates);
  }
}
