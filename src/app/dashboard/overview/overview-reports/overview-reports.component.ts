import { Component, OnInit } from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";
import {ReportsComponent} from "../../shared/reports/reports.component";

@Component({
  selector: 'app-overview-reports',
  templateUrl: './overview-reports.component.html',
  styleUrls: ['./overview-reports.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    ReportsComponent
  ]
})
export class OverviewReportsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
