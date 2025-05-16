import {Component, OnInit} from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";

@Component({
  selector: 'app-video-summary',
  templateUrl: './video-summary.component.html',
  styleUrls: ['./video-summary.component.scss'],
  standalone: true,
  imports: [
    IonContent
  ]
})
export class VideoSummaryComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
