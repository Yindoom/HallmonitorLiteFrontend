import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';
import { DeviceOutputService } from 'src/app/services/model-services/device-output.service';
import { DeviceOutput } from 'src/app/shared/models/deviceOutput.model';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  @Output()
  public trySetOutputUpdate = new EventEmitter();

  constructor(private deviceOutputService: DeviceOutputService) {}
  @Input()
  deviceOutputs: DeviceOutput[];

  ngOnInit() {}

  setOutput(output) {
    debugger;
    this.trySetOutputUpdate.emit(output);
  }
}
