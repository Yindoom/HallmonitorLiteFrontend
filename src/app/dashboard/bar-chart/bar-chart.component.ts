import {Component, Input, OnInit} from '@angular/core';
import {DeviceOutputService} from '../../services/model-services/device-output.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DateInterval} from '../../shared/models/dateInterval';
import {Observable} from 'rxjs';
import {DeviceOutput} from '../../shared/models/deviceOutput.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  constructor() {}

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  @Input()
  barChartLabels; // fill array with dates
  @Input()
  barChartData;

  barChartType = 'bar';
  barChartLegend = true;

  ngOnInit() {}

}
