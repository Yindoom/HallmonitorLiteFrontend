import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { DeviceOutputService } from '../services/model-services/device-output.service';
import { Observable } from 'rxjs';
import { DeviceOutput } from '../shared/models/deviceOutput.model';
import { DeviceService } from '../services/model-services/device.service';
import { Device } from '../shared/models/device.model';
import { User } from '../shared/models/user.model';
import { UserService } from '../services/model-services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  devices: Observable<Device[]>;
  outputs: Observable<DeviceOutput[]>;
  users: Observable<User[]>;
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
  ) {}

  ngOnInit() {
    this.devices = this.deviceService.getDevices();
  }

  toggleNav() {
    this.navService.toggleNav();
  }

  getDeviceOutputs() {
    // this.outputs = this.deviceOutputService.getDeviceOutputs();
    // this.devices = this.deviceService.getDevices();
    this.users = this.userService.getUsers();
  }
}
