import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  deviceList = ['apple', 'orange', 'pkfire', 'hm'];

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

  minutes = [0, 10, 20, 30, 40, 50];

  constructor(private navService: SidenavService) { }

  ngOnInit() {}

  toggleNav() {
    this.navService.toggleNav();
  }
}
