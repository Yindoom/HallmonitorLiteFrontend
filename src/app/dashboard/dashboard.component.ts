import {Component, OnInit} from '@angular/core';
import {SidenavService} from '../services/sidenav.service';
import {DeviceOutputService} from '../services/model-services/device-output.service';
import {Observable} from 'rxjs';
import {DeviceService} from '../services/model-services/device.service';
import {Device} from '../shared/models/device.model';
import {DateInterval} from '../shared/models/dateInterval';
import {DatePipe} from '@angular/common';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  devices: Observable<Device[]>;
  barChartLabels = [];
  barChartData = [
    {data: [], label: 'nr Of People'}
  ];

  constructor(
    private navService: SidenavService,
    private deviceOutputService: DeviceOutputService,
    private deviceService: DeviceService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.devices = this.deviceService.getDevices();
  }

  toggleNav() {
    this.navService.toggleNav();
  }

  openSnackBarWithMessage(snackBarMessage) {
    this.snackBar.open(snackBarMessage.message, snackBarMessage.action, snackBarMessage.config);
  }

  /**
   * Formats a date to yyyy-MM-dd
   * @param toFormat
   */
  format(toFormat: Date): Date {
    const datePipe = new DatePipe(navigator.language);
    const dateFormat = 'yyyy-MM-dd';
    return new Date(datePipe.transform(toFormat, dateFormat));
 }

  /**
   * Get dates from form and get deviceOutputTimeInterval from db.
   * @param dates
   */
  getDeviceOutputByTimeInterval(dates: DateInterval) {
    const dataArr = [];
    this.barChartLabels = [];
    this.deviceOutputService.getDeviceOutputByTimeInterval(
      { from_date: this.format(dates.from_date), to_date: this.format(dates.to_date) }).subscribe(values => {
      values.forEach(output => {
        this.barChartLabels.push(output.timestamp);
        dataArr.push(output.number_of_people);
      })
    });
    this.barChartData = [{data: dataArr, label: 'nr Of People'}];
  }
}
