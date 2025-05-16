import {Component, OnInit} from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";

@Component({
  selector: 'app-display-attribution',
  templateUrl: './display-attribution.component.html',
  styleUrls: ['./display-attribution.component.scss'],
  standalone: true,
  imports: [
    IonContent
  ]
})
export class DisplayAttributionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
