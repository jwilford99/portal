import { Component, OnInit } from '@angular/core';
import {DemographicsComponent} from "../../shared/demographics/demographics.component";
import {IonContent} from "@ionic/angular/standalone";

@Component({
  selector: 'app-overview-demographics',
  templateUrl: './overview-demographics.component.html',
  styleUrls: ['./overview-demographics.component.scss'],
  standalone: true,
  imports: [
    DemographicsComponent,
    IonContent
  ]
})
export class OverviewDemographicsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
