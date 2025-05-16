import {Component, OnInit} from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";

@Component({
  selector: 'app-video-attribution',
  templateUrl: './video-attribution.component.html',
  styleUrls: ['./video-attribution.component.scss'],
  standalone: true,
  imports: [
    IonContent
  ]
})
export class VideoAttributionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
