import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Device} from '../shared/models/device.model';
import {DeviceOutput} from '../shared/models/deviceOutput.model';
import {DateInterval} from '../shared/models/dateInterval';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  constructor() {}
  @Input()
  devices: Observable<Device[]>;
  @Output()
  public tryToggleNav = new EventEmitter();
  @Output()
  public tryOpenSnackBarWithMessage = new EventEmitter();
  @Output()
  public tryGetDeviceOutputByTimeInterval = new EventEmitter();
  @Output()
  public tryToggleTable = new EventEmitter();

  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  minutes = [0, 30];

  form: FormGroup = new FormGroup({
    from_date: new FormControl(),
    to_date: new FormControl()
  });

  ngOnInit() {}

  toggleNav() {
    this.tryToggleNav.emit();
  }

  getDatesFromForm() {
    const dateForm = this.form.value;
    if (dateForm.from_date != null && dateForm.to_date != null)
    {
      this.tryGetDeviceOutputByTimeInterval.emit(dateForm);
    }
    //if dates are not filled out, tell user
    else {
      this.tryOpenSnackBarWithMessage.emit({ message: 'Did you choose a from + to date?',
                                                   action: 'Ok',
                                                   config: { duration: 3000 }});
    }
  }

  toggleTable() {
    this.tryToggleTable.emit();
  }
}
