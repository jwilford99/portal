import { Component, OnInit } from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";
import {PlacementsComponent} from "../../shared/placements/placements.component";

@Component({
  selector: 'app-display-placements',
  templateUrl: './display-placements.component.html',
  styleUrls: ['./display-placements.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    PlacementsComponent
  ]
})
export class DisplayPlacementsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
