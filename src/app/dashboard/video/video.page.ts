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
import {VideoSummaryComponent} from "./video-summary/video-summary.component";
import {VideoPlacementsComponent} from "./video-placements/video-placements.component";
import {VideoAttributionComponent} from "./video-attribution/video-attribution.component";

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
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
    VideoSummaryComponent,
    VideoPlacementsComponent,
    VideoAttributionComponent
  ]
})
export class VideoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
