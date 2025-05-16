import { Component, OnInit } from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";
import {PlacementsComponent} from "../../shared/placements/placements.component";

@Component({
  selector: 'app-video-placements',
  templateUrl: './video-placements.component.html',
  styleUrls: ['./video-placements.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    PlacementsComponent
  ]
})
export class VideoPlacementsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
