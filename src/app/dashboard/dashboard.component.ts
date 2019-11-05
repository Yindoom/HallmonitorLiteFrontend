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

  form: FormGroup = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl()
  });

  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

  minutes = [0, 30];

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
    this.dates = new DateInterval();
  }

  //for menubar
  toggleNav() {
    this.navService.toggleNav();
  }

  //Formats a date to yyyy-MM-dd
  format(toFormat: Date): string {
    const dp = new DatePipe(navigator.language);
    const df = 'yyyy-MM-dd';
    return dp.transform(toFormat, df);
  }

  //to be deleted in production
  getTestingStuffMethod() {
    const dateForm = this.form.value;
    console.log(this.format(dateForm.fromDate) + ' This is the date from the form :) ');

    this.dates.from_date = new Date(this.format(dateForm.fromDate));
    this.dates.to_date = new Date(this.format(dateForm.toDate));
    console.log(this.dates.to_date + ' date to use');
    this.outputs = this.deviceOutputService.getDeviceOutputByTimeInterval(this.dates);
  }

  //needs to be renamed + button renamed too
  doDate() {
    const dateForm = this.form.value;
    //if dates are filled out, go to url
    if (dateForm.fromDate != null && dateForm.toDate != null)
    {
      const url = "dashboard/" + this.format(dateForm.fromDate) + "/" + this.format(dateForm.toDate);
      this.router.navigate([url]);
    }
    //if dates are not filled out, tell user
    else {
      this.snackBar.open('Did you choose a from + to date?', 'Ok', { duration: 3000 });
    }
  }
}
