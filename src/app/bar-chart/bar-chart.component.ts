import {Component, OnInit} from '@angular/core';
import {DeviceOutputService} from '../services/model-services/device-output.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor(private deviceOutputService: DeviceOutputService) {
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = []; //fill array with dates
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [{data: [], label: 'nr Of People'}, //fill with nr. of ppl
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  ngOnInit() {
    const dataArr = [];
    this.deviceOutputService.getDeviceOutputs().subscribe(d =>
      d.forEach(output => {
        this.barChartLabels.push(output.timestamp);
        dataArr.push(output.number_of_people);
      })
    );
    this.barChartData = [{data: dataArr, label: 'nr Of People'}];
  }

}
