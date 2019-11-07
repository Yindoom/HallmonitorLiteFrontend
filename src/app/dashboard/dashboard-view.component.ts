import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Device} from '../shared/models/device.model';
import {DeviceOutput} from '../shared/models/deviceOutput.model';
import {DateInterval} from '../shared/models/dateInterval';
import {FormControl, FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  constructor() {}
  @Input()
  devices: Observable<Device[]>;
  @Input()
  outputs: Observable<DeviceOutput[]>;
  @Input()
  dates: DateInterval;
  @Output()
  public tryToggleNav = new EventEmitter();
  @Output()
  public tryNavigateToUrl = new EventEmitter();
  @Output()
  public tryOpenSnackBarWithMessage = new EventEmitter();
  @Output()
  public tryGetDeviceOutputByTime = new EventEmitter();

  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  minutes = [0, 30];

  form: FormGroup = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl()
  });
  ngOnInit() {
    this.dates = new DateInterval();
  }
  //Formats a date to yyyy-MM-dd
  format(toFormat: Date): string {
    const dp = new DatePipe(navigator.language);
    const df = 'yyyy-MM-dd';
    return dp.transform(toFormat, df);
  }

  toggleNav() {
    this.tryToggleNav.emit();
  }
  //needs to be renamed + button renamed too
  doDate() {
    const dateForm = this.form.value;
    //if dates are filled out, go to url
    if (dateForm.fromDate != null && dateForm.toDate != null)
    {
      const url = "dashboard/" + this.format(dateForm.fromDate) + "/" + this.format(dateForm.toDate);
      this.tryNavigateToUrl.emit(url);
    }
    //if dates are not filled out, tell user
    else {
      this.tryOpenSnackBarWithMessage.emit({ message: 'Did you choose a from + to date?',
                                                   action: 'Ok',
                                                   config: { duration: 3000 }});
    }
  }
  //to be deleted in production
  getTestingStuffMethod() {
    const dateForm = this.form.value;
    console.log(this.format(dateForm.fromDate) + ' This is the date from the form :) ');

    this.dates.from_date = new Date(this.format(dateForm.fromDate));
    this.dates.to_date = new Date(this.format(dateForm.toDate));
    console.log(this.dates.to_date + ' date to use');
    this.tryGetDeviceOutputByTime.emit(this.dates);
  }
}
