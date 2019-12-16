import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Device } from '../../../shared/models/device.model';
import { DeviceOutput } from '../../../shared/models/deviceOutput.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-deviceoutput-view',
  templateUrl: './deviceoutput-view.component.html',
  styleUrls: ['./deviceoutput-view.component.scss']
})
export class DeviceoutputViewComponent implements OnInit {
  @Input() output: DeviceOutput;
  @Output() tryUpdateOutput = new EventEmitter();
  constructor() {}

  deviceForm = new FormGroup({
    number_of_people: new FormControl(''),
    timestamp: new FormControl(''),
    temperature: new FormControl(''),
    runtime: new FormControl(''),
    device_id: new FormControl('')
  });

  ngOnInit() {
    if (this.output) {
      this.deviceForm.controls['number_of_people'].patchValue(
        this.output.number_of_people
      );
      this.deviceForm.controls['device_id'].patchValue(this.output.device_id);
      this.deviceForm.controls['runtime'].patchValue(this.output.runtime);
      this.deviceForm.controls['temperature'].patchValue(
        this.output.temperature
      );
      this.deviceForm.controls['timestamp'].patchValue(this.output.timestamp);
    }
  }

  submit() {
    const values = this.deviceForm.value;
    if (this.output) {
      values.id = this.output.id;
      this.tryUpdateOutput.emit(values);
    }
  }
}
