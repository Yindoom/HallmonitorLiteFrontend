import {Component, OnInit} from '@angular/core';
import {DeviceOutputService} from '../services/model-services/device-output.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DateInterval} from '../shared/models/dateInterval';
import {Observable} from 'rxjs';
import {DeviceOutput} from '../shared/models/deviceOutput.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  constructor(private deviceOutputService: DeviceOutputService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = []; // fill array with dates
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: 'nr Of People'} // fill with nr. of ppl
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  routeParams: any;
  dates: DateInterval;

  ngOnInit() {
    this.dates = new DateInterval();
    const dataArr = [];
    if (this.router.url == '/') {
      {
        this.deviceOutputService.getDeviceOutputs().subscribe(d => {
          d.forEach(output => {
            this.barChartLabels.push(output.timestamp);
            dataArr.push(output.number_of_people);
          });
        });
      }
      this.barChartData = [{data: dataArr, label: 'nr Of People'}];
    }
    else {
      this.route.params.subscribe(params => {
        this.routeParams = params;
        if (this.routeParams['fromDate'] && this.routeParams['toDate']) {
          this.dates.from_date = new Date(this.routeParams['fromDate']);
          this.dates.to_date = new Date(this.routeParams['toDate']);
        }
      });
      //on regular start get all outputs the user has access to
      this.deviceOutputService.getDeviceOutputByTimeInterval(this.dates).subscribe(d => {
        d.forEach(output => {
          this.barChartLabels.push(output.timestamp);
          dataArr.push(output.number_of_people);
        });
      });
      this.barChartData = [{data: dataArr, label: 'nr Of People'}];
    }
  }
}
