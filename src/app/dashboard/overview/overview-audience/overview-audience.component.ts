import { Component, OnInit } from '@angular/core';
import {AudienceInsightsComponent} from "../../shared/audience-insights/audience-insights.component";
import {IonContent} from "@ionic/angular/standalone";

@Component({
  selector: 'app-overview-audience',
  templateUrl: './overview-audience.component.html',
  styleUrls: ['./overview-audience.component.scss'],
  standalone: true,
  imports: [
    AudienceInsightsComponent,
    IonContent
  ]
})
export class OverviewAudienceComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
