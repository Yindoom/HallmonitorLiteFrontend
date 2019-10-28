import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import {DeviceOutputService} from '../services/model-services/device-output.service';
import {Observable} from 'rxjs';
import {DeviceOutput} from '../shared/models/deviceOutput';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  deviceList = ['apple', 'orange', 'pkfire', 'hm'];

  outputs: Observable<DeviceOutput[]>;
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

  constructor(private navService: SidenavService,
              private deviceOutputService: DeviceOutputService) { }

  ngOnInit() {}

  toggleNav() {
    this.navService.toggleNav();
  }

  getDeviceOutputs(){
    this.outputs = this.deviceOutputService.getDeviceOutputs();
  }
}
