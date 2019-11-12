import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DeviceOutput} from '../shared/models/deviceOutput.model';
import {Device} from '../shared/models/device.model';
import {DeviceOutputService} from '../services/model-services/device-output.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  constructor(private deviceOutputService: DeviceOutputService) { }
  @Input()
  itemList: Observable<DeviceOutput[]>;

  ngOnInit() {

  }

}
