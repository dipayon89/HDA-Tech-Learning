import { Component, OnInit } from '@angular/core';
import {ChartDataset, ChartOptions } from 'chart.js';
// import {Color, Label} from 'ng2-charts';
import {OlapServicesService} from "../services/olap-services.service";

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  q1Data = [];

  constructor(private olapServices: OlapServicesService) { }

  ngOnInit(): void {
    console.log("Hello");
    this.reloadData();
  }
  reloadData(){
    this.olapServices.getQ1().subscribe(
      data => {
          console.log(data);
          this.q1Data = data;
      });
  }
}
