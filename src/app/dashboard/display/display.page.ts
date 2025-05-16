import {Component, OnInit} from '@angular/core';
import {
  IonHeader,
  IonIcon,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {DisplaySummaryComponent} from "./display-summary/display-summary.component";
import {DisplayPlacementsComponent} from "./display-placements/display-placements.component";
import {DisplayAdPreviewComponent} from "./display-ad-preview/display-ad-preview.component";
import {DisplayAdSizeComponent} from "./display-ad-size/display-ad-size.component";
import {DisplayAttributionComponent} from "./display-attribution/display-attribution.component";
import {DisplayAudienceComponent} from "./display-audience/display-audience.component";

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonTab,
    IonTabBar,
    IonTabButton,
    IonTabs,
    DisplaySummaryComponent,
    DisplayPlacementsComponent,
    DisplayAdPreviewComponent,
    DisplayAdSizeComponent,
    DisplayAttributionComponent,
    DisplayAudienceComponent
  ]
})
export class DisplayPage implements OnInit {
  insights: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
