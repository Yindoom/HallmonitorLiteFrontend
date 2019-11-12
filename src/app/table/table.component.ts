import {Component, OnInit} from '@angular/core';
import {DeviceOutputService} from '../services/model-services/device-output.service';
import {Observable} from 'rxjs';
import {DeviceOutput} from '../shared/models/deviceOutput.model';
import {DeviceService} from '../services/model-services/device.service';
import {Device} from '../shared/models/device.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private deviceOutputService: DeviceOutputService) {
  }

  itemList: Observable<DeviceOutput[]>;

  ngOnInit() {
    this.itemList = this.deviceOutputService.getDeviceOutputs();
  }

}
